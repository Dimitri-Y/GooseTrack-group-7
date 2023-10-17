import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, FormTask } from './TaskForm.styled';

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
              <Field className="field" type="number" name="start" title="" />
              <ErrorMessage name="start" component="div" />
            </label>
            <label className="label">
              <span className="title">End</span>
              <Field className="field" type="number" name="end" title="" />
              <ErrorMessage name="end" component="div" />
            </label>
          </div>

          <div className="radioBtn_Wrapper">
          {/* <label for="rdo-1" className="btn-radio">
      <input type="radio" id="rdo-1" name="radio-grp"/>
      <svg width="20px" height="20px" viewBox="0 0 20 20">
        <circle cx="10" cy="10" r="9"></circle>
        <path d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z" className="inner"></path>
        <path d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z" className="outer"></path>
      </svg>
      <span>Option One</span>
    </label>
    <label for="rdo-2" className="btn-radio">
      <input type="radio" id="rdo-2" name="radio-grp"/>
      <svg width="20px" height="20px" viewBox="0 0 20 20">
        <circle cx="10" cy="10" r="9"></circle>
        <path d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z" className="inner"></path>
        <path d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z" className="outer"></path>
      </svg>
      <span>Option Two</span>
    </label>
    <label for="rdo-3" className="btn-radio">
      <input type="radio" id="rdo-3" name="radio-grp"/>
      <svg width="20px" height="20px" viewBox="0 0 20 20">
        <circle cx="10" cy="10" r="9"></circle>
        <path d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z" className="inner"></path>
        <path d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z" className="outer"></path>
      </svg>
      <span>Option Three</span>
    </label> */}
            <label className="label_input">
              <input
                type="radio"
                checked
                name="priority"
                value="low"
                // onChange={handleChange}
              />
              <span className="radio_tittle">Low</span>

            </label>
            <label className="label_input">

              <input
                type="radio"
                // checked={priority === 'medium'}
                name="priority"
                value="medium"
                // onChange={handleChange}
              />
              <span className="radio_tittle">Medium</span>

            </label>
            <label className="label_input">

              <input
                type="radio"
                color='#F3B249'
                // checked={priority === 'high'}
                name="priority"
                value="high"
                // onChange={handleChange}
              />
              <span className="radio_tittle">High</span>

            </label>
          </div>

          <Button type="submit">Add</Button>
          <Button type="button">Cancel</Button>
        </Form>
      </Formik>
    </FormTask>
  );
};

export default TaskForm;
