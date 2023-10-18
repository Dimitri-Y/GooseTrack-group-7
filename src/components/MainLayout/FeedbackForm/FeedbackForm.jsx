import { Label } from './FeedbackForm.styled';
const FeedbackForm = () => {
    return (
        <form>
          <Label htmlFor="review">Review</Label>

<textarea id="review" name="review" ></textarea>
        </form>
    )
}

export default FeedbackForm;
