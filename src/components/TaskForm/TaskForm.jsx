import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';
import {
  ButtonCancel,
  ButtonSummit,
  Buttons,
  FormTask,
} from './TaskForm.styled';
import { SvgSelector } from '../Icons/SvgSelector';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { format } from 'date-fns';
import { addTask, updateTask } from '../../redux/tasks/tasksOperations';
import { toast } from 'react-toastify';
import { nanoid } from 'nanoid';
//  { useState } from 'react';

const schema = Yup.object().shape({
  title: Yup.string().max(250).required(),
  // start: Yup.number().required(),
  // end: Yup.number().required(),
  priority: Yup.string().required(),
  start: Yup.string().required('start time cannot be empty'),
  end: Yup.string()
    .required('end time cannot be empty')
    .test('is-greater', 'end time should be greater', function (value) {
      const { start } = this.parent;
      return moment(value, 'HH:mm').isSameOrAfter(moment(start, 'HH:mm'));
    }),

  category: Yup.string(),
});
const showToast = (message, isError = true) => {
  toast(message, {
    style: {
      background: isError ? 'orange' : 'green',
      overflow: 'hidden',
    },
    icon: isError ? '❗' : '✅',
    iconTheme: {
      primary: '#fff',
      secondary: isError ? 'orange' : 'green',
    },
  });
};

const TaskForm = ({ task, closeModal }) => {
  console.log('task: ', task);
  const params = useParams();
  const date = new Date(params.currentDay);
  const validDate =
    Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date)
      ? date
      : new Date();
  const currentDay = format(validDate, 'yyyy-MM-dd');
  const dispatch = useDispatch();

  const getCurrentTime = (additionalMinutes = 0) => {
    const now = new Date();
    now.setMinutes(now.getMinutes() + additionalMinutes);

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    return `${hours}:${minutes}`;
  };

  const initialValues = {
    title: task?.title || '',
    start: task?.start || getCurrentTime(),
    end: task?.end || getCurrentTime(30),
    priority: task?.priority || 'Low',
    date: task?.date || '2023-10-24',
    category: task?.category || 'to do',
  };

  // console.log(task);
  

  const handleSubmit = async (values) => {
    const { title, start, end, category } = values;
    const [startHour, startMinute] = start.split(':').map(Number);
    const [endHour, endMinute] = end.split(':').map(Number);
    console.log('value: ', values);
    const priority = document.querySelector(
      'input[name="priority"]:checked',
    ).value;

    if (
      startHour > endHour ||
      (startHour === endHour && startMinute >= endMinute)
    ) {
      showToast('The start time must be earlier than the end time');
      return;
    }

    if (!title.trim() || !start.trim() || !end.trim()) {
      showToast('All fields must be filled');
      return;
    }

    if (
      title === initialValues.title &&
      start === initialValues.start &&
      end === initialValues.end &&
      priority === initialValues.priority
    ) {
      showToast('Change at least one field');
      return;
    }

    const taskData = {
      title,
      start,
      end,
      priority,
      category,
      date: currentDay,     
      
    };

    const addTaskData = {
      id: nanoid(),
      ...taskData,       
      
    };
    console.log('newTask: ', addTaskData);
    if (task?.id) {
      dispatch(updateTask({id: task.id, taskData}));
    } else {
      dispatch(addTask(addTaskData));
      showToast('Successfully! Task added', false);
    }
    closeModal();
  };

  return (
    <FormTask>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {/* {() =>{ */}
        <Form className="form">
          <label className="label">
            <span className="title">Title</span>
            <Field
              className="field"
              type="text"
              name="title"
              title=""
              placeholder="Enter text"
            />
            <ErrorMessage name="title" component="div" className="errorField" />
          </label>
          <div className="setTimeWrapper">
            <label className="label">
              <span className="title">Start</span>
              <Field
                className="field"
                type="time"
                name="start"
                title=""
                placeholder="09:00"
                step="900"
              />
              <ErrorMessage
                name="start"
                component="div"
                className="errorField"
              />
            </label>
            <label className="label">
              <span className="title">End</span>
              <Field
                className="field"
                type="time"
                name="end"
                title=""
                placeholder="14:00"
                step="900"
              />
              <ErrorMessage name="end" component="div" className="errorField" />
            </label>
          </div>

          <div className="radioBtn_Wrapper">
            <div className="form-group">
              <label className="radioBtn-first">
                <input
                  type="radio"
                  name="priority"
                  value="low"
                  className="real-radio "
                  // {task.priority =="low" && "checked"}
                />
                <span className="custom-radio"></span>
                Low
              </label>
            </div>
            <div className="form-group">
              <label className="radioBtn-second">
                <input
                  type="radio"
                  name="priority"
                  value="medium"
                  className="real-radio"
                />
                <span className="custom-radio"></span>
                Medium
              </label>
            </div>
            <div className="form-group">
              <label className="radioBtn-third">
                <input
                  type="radio"
                  name="priority"
                  value="high"
                  className="real-radio"
                />
                <span className="custom-radio"></span>
                High
              </label>
            </div>
          </div>
          <Buttons>
            {task == undefined ? (
              <ButtonSummit type="submit">
                <SvgSelector id="plusBtnWhite" className="iconWrapper" />
                Add
              </ButtonSummit>
            ) : (
              <ButtonSummit type="submit">
                <SvgSelector id="editBtn" className="iconWrapper" />
                Edit
              </ButtonSummit>
            )}
            <ButtonCancel type="button" onClick={closeModal}>
              Cancel
            </ButtonCancel>
          </Buttons>
        </Form>
        {/* }

      }
         */}
      </Formik>
    </FormTask>
  );
};

export default TaskForm;
