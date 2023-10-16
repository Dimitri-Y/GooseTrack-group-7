import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {  Button, FormTask  } from './TaskForm.styled';

const initialValues = { title: '', start: null, end: null, priority: '' };

const schema = Yup.object().shape({
  title: Yup.string().required(),
  start: Yup.number().required(),
  end: Yup.number().required(),
  priority: Yup.string().required(),
});

const TaskForm = ({ task, closeModal }) => {
  console.log(task, closeModal);

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
        <Form className='form'>
          <label className='label'>
            <span>Title</span>
            <Field type="text" name="title" title="" />
            <ErrorMessage name="title" component="div" />
          </label>
          <label>
            <span>Start</span>
            <Field type="number" name="start" title="" />
            <ErrorMessage name="start" component="div" />
          </label>
          <label>
            <span>End</span>
            <Field type="number" name="end" title="" />
            <ErrorMessage name="end" component="div" />
          </label>

          {/* <label>
            Low
            <input
              type="radio"
              checked={priority === 'low'}
              name="priority"
              value="low"
              onChange={handleChange}
            />
          </label>
          <label>
            Medium
            <input
              type="radio"
              checked={priority === 'medium'}
              name="priority"
              value="medium"
              onChange={handleChange}
            />
          </label>
          <label>
            High
            <input
              type="radio"
              checked={priority === 'high'}
              name="priority"
              value="high"
              onChange={handleChange}
            />
          </label> */}

          <Button type="submit">Add</Button>
          <Button type="button">Cancel</Button>
        </Form>
      </Formik>
    </FormTask>
  );
}

export default TaskForm;
