import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Label, FormTask, Button } from './TaskForm.styled';

const initialValues = { title: '', start: null, end: null, priority: '' };

const userSchema = Yup.object().shape({
  title: Yup.string().required(),
  start: Yup.number().required(),
  end: Yup.number().required(),
  priority: Yup.string().required(),
});

function TaskForm({ task, closeModal }) {
  console.log(task, closeModal);

  const handleSubmit = (values, actions) => {
    console.log(values, actions);
  };

  return (
    <FormTask>
      <Formik
        initialValues={initialValues}
        validationSchema={userSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Label>
            <span>Title</span>
            <Field type="text" name="title" title="" />
            <ErrorMessage name="title" component="div" />
          </Label>
          <Label>
            <span>Start</span>
            <Field type="number" name="start" title="" />
            <ErrorMessage name="start" component="div" />
          </Label>
          <Label>
            <span>End</span>
            <Field type="number" name="end" title="" />
            <ErrorMessage name="end" component="div" />
          </Label>

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
