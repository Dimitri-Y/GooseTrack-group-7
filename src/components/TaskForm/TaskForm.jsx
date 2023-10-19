import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  ButtonCancel,
  ButtonSummit,
  Buttons,
  FormTask,
} from './TaskForm.styled';
import { SvgSelector } from '../Icons/SvgSelector';
// import { useState } from 'react';

const initialValues = { title: '', start: null, end: null, priority: '' };

const schema = Yup.object().shape({
  title: Yup.string().required(),
  start: Yup.number().required(),
  end: Yup.number().required(),
  priority: Yup.string().required(),
});

const TaskForm = ({ headerCategory, task, closeModal }) => {
  console.log(task, closeModal, headerCategory);
  // const [title, setTitle] = useState('')
  // const [start, setStart] = useState('')
  // const [end, setEnd] = useState('')
  // const [priority, setPriority] = useState('')

  const handleSubmit = (values, actions) => {
    console.log(values, actions);
  };

  return (
    <FormTask>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
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
            <ErrorMessage name="title" component="div" />
          </label>
          <div className="setTimeWrapper">
            <label className="label">
              <span className="title">Start</span>
              <Field
                className="field"
                type="number"
                name="start"
                title=""
                placeholder="9:00"
              />
              <ErrorMessage name="start" component="div" />
            </label>
            <label className="label">
              <span className="title">End</span>
              <Field
                className="field"
                type="number"
                name="end"
                title=""
                placeholder="14:00"
              />
              <ErrorMessage name="end" component="div" />
            </label>
          </div>

          <div className="radioBtn_Wrapper">
            <div className="radio">
              <label className="custom-radio">
                <input
                  className="input_first"
                  type="radio"
                  name="priority"
                  value="low"
                />

                <span>Low</span>
              </label>
            </div>

            <div className="radio">
              <label className="custom-radio">
                <input
                  className="input_second"
                  type="radio"
                  name="priority"
                  value="medium"
                />

                <span>Medium</span>
              </label>
            </div>

            <div className="radio">
              <label className="custom-radio">
                <input type="radio" name="priority" value="high" />

                <span>High</span>
              </label>
            </div>
          </div>
          <Buttons>
            {task ?<ButtonSummit type="submit" >
              <SvgSelector id="plusBtnWhite" className="iconWrapper" />
              Add
            </ButtonSummit> : <ButtonSummit type="submit" >
              <SvgSelector id="plusBtnWhite" className="iconWrapper" />
              Add
            </ButtonSummit>}
            <ButtonCancel type="button" onClick={closeModal}>Cancel</ButtonCancel>
          </Buttons>
        </Form>
      </Formik>
    </FormTask>
  );
};

export default TaskForm;
