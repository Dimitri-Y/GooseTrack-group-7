import { ReactComponent as IconEdit } from '../../Icons/edit.svg';
import { ReactComponent as IconBin } from '../../Icons/delete.svg';

import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

import {
  ReviewForm,
  //  InputWrapper,
  ReviewWrapper,
  Label,
  EditWrapper,
  EditBtn,
  DeleteBtn,
  Textarea,
  BtnsWrapper,
  Btn,
  BtnCancel
} from './FeedbackForm.styled';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectReviews } from '../../../redux/reviews/reviewsSelectors';
import { selectUser } from '../../../redux/auth/authSelectors';
import {
  addReview,
  deleteReview,
  updateReview,
} from '../../../redux/reviews/reviewsOperations';

const FeedbackForm = ({ onClose }) => {

  const dispatch = useDispatch();

  const currentUser = useSelector(selectReviews);
  const user = useSelector(selectUser);
  // const error = useSelector(selectError);

  const [isEditActive, setIsEditActive] = useState(false);

  const initialValues = {
    name: '',
    comment: '',
  };

  const feedbackSchema = Yup.object().shape({
    // rating: Yup.number().min(1).max(5).required(),
    comment: Yup.string()
      .min(15, 'Must be 15 characters or more')
      .max(300, 'Must be 300 characters or less')
      .required('Please write your review'),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {

    console.log(values);
    
    if (isEditActive) {
        const newReview = {name: user.userName, comment: values}
        dispatch(updateReview(newReview));
        } else {
            dispatch(addReview(values))
    }
    resetForm();
    setSubmitting(false);
  };

  const handleEdit = () => {
    setIsEditActive(!isEditActive);
  };

  const handleDelete = () => {
    dispatch(deleteReview(currentUser._id));
    onClose();
  };

  return (
    <>
    <Formik
      initialValues={initialValues}
      validationSchema={feedbackSchema}
      onSubmit={handleSubmit}
    >
         {({ isSubmitting }) => (
      <ReviewForm>
        <Label>
          Rating
          <Rating
            name="rating"
            component="div"
            // value={values.rating}
            // itemStyles={rateStyled}
            style={{
              maxWidth: 128,
              maxHeight: 24,
              gap: 2,
              marginBottom: '20px',
            }}
            // onChange={ratingChanged}
            // readOnly={isEditActive}
          />
        </Label>
        {/* <InputWrapper> */}
        <ReviewWrapper>
          <label htmlFor="reviewId">Review</label>

          {Boolean(currentUser.comment) && 
          <EditWrapper>
            <EditBtn
              type="button"
              onClick={handleEdit}
              isActive={isEditActive}
              aria-label="Edit review"
            >
              <IconEdit />
            </EditBtn>

            <DeleteBtn
              type="button"
              onClick={handleDelete}
              aria-label="Delete review"
            >
              <IconBin />
            </DeleteBtn>
          </EditWrapper>
}
        </ReviewWrapper>

        <Textarea
          id="reviewId"
          name="comment"
          rows={6}
          cols={40}
          component="textarea"
          placeholder="Enter your review"
          disabled={!isEditActive && Boolean(currentUser.comment)}
        />
        <ErrorMessage name="comment" />

        {/* </InputWrapper> */}

        {(!currentUser.comment || isEditActive ) && <BtnsWrapper>
          <Btn type="submit" disabled={isSubmitting}>
            {isEditActive ? 'Edit' : 'Save'}</Btn>
          <BtnCancel type="button">Cancel</BtnCancel>
        </BtnsWrapper>
}
      </ReviewForm>
      )}
    </Formik>
    </>
  );
};

export default FeedbackForm;

