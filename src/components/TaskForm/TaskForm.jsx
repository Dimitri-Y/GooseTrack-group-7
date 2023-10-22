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
//  { useState } from 'react';

// const initialValues = {
//   title: '',
//   start: '09:30',
//   end: '18:30',
//   priority: 'Low',
//   date: '2023-10-24',
//   category: 'done',
// };

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

const TaskForm = ({
  headerCategory,
  task,
  closeModal,
}) => {
  const initialValues = {
    title: task?.title||'',
    start: task?.start||'09:30',
    end: task?.end||'18:30',
    priority: task?.priority||'Low',
    date: task?.date||'2023-10-24',
    category: task?.category||'done',
  };
  // const initialValuesEditTask = {
  //   title: task.title,
  //   start: task.start,
  //   end: task.end,
  //   priority: task.priority,
  //   date: task.date,
  //   category: task.category,
  // };

  console.log(task);
  // const [title, setTitle] = useState('')
  // const [start, setStart] = useState('')
  // const [end, setEnd] = useState('')
  // const [priority, setPriority] = useState('')

  // const handleSubmit = (values, actions) => {
  //   console.log(values, actions);
  // };

  // const onAddTask = () => {};
  // const viewRadio = () => {
  //   // let priority = "";
  //   const priorities = document.querySelectorAll('input[name="radio"]');
  //   for (const p of priorities) {
  //     if (p.checked) {
  //       return p.value;
  //     }
  //   }
  // };
  // console.log(viewRadio())

  const handleSubmit = async (value, { resetForm }) => {
    const { title, start, end } = value;
    console.log('value: ', value);
    const priority = document.querySelector('input[name="priority"]:checked').value
   
    const newTask = {'title': title,'start': start,'end': end, 'priority': priority, date: new Date, category:headerCategory}
    console.log('newTask: ', newTask);
    
      
    
    resetForm();
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
            {task ==undefined ? (
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
