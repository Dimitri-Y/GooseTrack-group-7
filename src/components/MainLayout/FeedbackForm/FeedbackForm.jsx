import { ReactComponent as IconEdit } from '../../Icons/edit.svg';
import { ReactComponent as IconBin } from '../../Icons/delete.svg';

import { Formik } from 'formik';
import * as Yup from 'yup';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

import {
  ReviewForm,
  ReviewWrapper,
  Label,
  EditWrapper,
  EditBtn,
  DeleteBtn,
  Textarea,
  ErrMessage,
  BtnsWrapper,
  Btn,
  BtnCancel,
} from './FeedbackForm.styled';

import { useState, useRef, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectReview } from '../../../redux/reviews/reviewsSelectors';

import {
  addReview,
  deleteReview,
  fetchReviewsOwn,
  updateReview,
} from '../../../redux/reviews/reviewsOperations';

const ratingIcon = (
  <path
    d="M11 1.28579L14.0224 7.01427C14.1815 7.31594 14.4716 7.52671 14.8077 7.58487L21.1898 8.68913L16.6757 13.3338L17.1059 13.752L16.6757 13.3338C16.438 13.5784 16.3271 13.9194 16.3757 14.257L17.2977 20.668L11.4854 17.8101C11.1793 17.6595 10.8207 17.6595 10.5146 17.8101L4.70234 20.668L5.6243 14.257C5.67285 13.9194 5.56205 13.5784 5.32432 13.3338L0.810178 8.68913L7.19226 7.58487C7.52835 7.52671 7.81845 7.31594 7.97761 7.01428L7.44695 6.73429L7.97761 7.01427L11 1.28579ZM4.53226 20.7516C4.53232 20.7516 4.53239 20.7515 4.53245 20.7515L4.53226 20.7516ZM11.0883 1.11843L11.0884 1.11815L11 1.07149L11.0884 1.11815C11.0884 1.11825 11.0883 1.11834 11.0883 1.11843Z"
    // fill="#FFAC33"
    // stroke="#FFAC33"
    strokeWidth="1.2"
  />
);
const styledRating = {
  itemShapes: ratingIcon,
  activeFillColor: '#FFAC33',
  inactiveFillColor: '#CEC9C1',
};

const FeedbackForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const formikRef = useRef();

  const reviews = useSelector(selectReview);

  const [isEditActive, setIsEditActive] = useState(false);

  const initialValues = {
    comment: reviews[0]?.comment || '',
    rating: reviews[0]?.rating || 5,
  };
  const feedbackSchema = Yup.object().shape({
    rating: Yup.number().min(1).max(5),
    comment: Yup.string()
      .min(15, 'Must be 15 characters or more')
      .max(300, 'Must be 300 characters or less')
      .required('Please write your review'),
  });
  useEffect(() => {
    dispatch(fetchReviewsOwn());
  }, [dispatch]);

  useEffect(() => {
    changeFormik(reviews[0]?.comment, reviews[0]?.rating);
  }, [reviews]);

  const handleSubmit = (values) => {
    const newReview = {
      comment: values.comment,
      rating: values.rating || 5,
    };

    if (isEditActive) {
      dispatch(updateReview(newReview));
      setIsEditActive(false);
    } else {
      dispatch(addReview(newReview));
    }
  };

  const handleEdit = () => {
    setIsEditActive(!isEditActive);
  };

  const handleDelete = () => {
    dispatch(deleteReview());
  };

  const handleRating = (newRating) => {
    formikRef.current.setFieldValue('rating', newRating);
  };

  const changeFormik = (comment, rating) => {
    formikRef.current.setFieldValue('comment', comment);
    formikRef.current.setFieldValue('rating', rating);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={feedbackSchema}
        onSubmit={handleSubmit}
        innerRef={formikRef}
        // validateOnChange={false}
      >
        {({ values }) => (
          <ReviewForm>
            <Label>
              Rating
              <Rating
                name="rating"
                component="div"
                value={values.rating}
                itemStyles={styledRating}
                style={{
                  maxWidth: 128,
                  maxHeight: 24,
                  gap: 2,
                  marginBottom: '28px',
                  marginTop: '10px',
                }}
                onChange={handleRating}
                readOnly={Boolean(reviews[0]?.rating) && !isEditActive}
              />
            </Label>

            <ReviewWrapper>
              <Label htmlFor="reviewId">Review</Label>

              {Boolean(reviews[0]?.comment) && (
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
              )}
            </ReviewWrapper>

            <Textarea
              id="reviewId"
              name="comment"
              rows={6}
              cols={40}
              component="textarea"
              placeholder="Enter your feedback"
              disabled={!isEditActive && false}
            />
            <ErrMessage name="comment" component="div" />

            {(!reviews[0]?.comment || isEditActive) && (
              <BtnsWrapper>
                <Btn type="submit">{isEditActive ? 'Edit' : 'Save'}</Btn>
                <BtnCancel type="button" onClick={onClose}>
                  Cancel
                </BtnCancel>
              </BtnsWrapper>
            )}
          </ReviewForm>
        )}
      </Formik>
    </>
  );
};

export default FeedbackForm;
