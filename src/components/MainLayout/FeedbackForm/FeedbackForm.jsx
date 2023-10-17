// import { Wrap } from './FeedbackForm.styled';

const FeedbackForm = () => {
  return (
    <div>
      <label htmlFor="reviewId">Review</label>
      <textarea
                  id="reviewId"
                  name="comment"
                  rows={6}
                  cols={40}
                  placeholder="Enter your review" />
    </div>
  );
}

export default FeedbackForm;

