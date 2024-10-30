import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';

const ReviewForm = ({handleSubmit}) => {
    const [review, setReview] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        if (review.trim()) {
        handleSubmit(review);
        setReview("");
    }
    }

    return (
        <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="reviewForm.ControlTextarea1">
                <Form.Label>Write a Review</Form.Label>
                <Form.Control 
                    as="textarea" 
                    rows={4} 
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    placeholder="Share your thoughts about this movie..."
                />
            </Form.Group>
            <Button 
                variant="danger" 
                type="submit" 
                className="submit-button"
                disabled={!review.trim()}
            >
                Submit Review
            </Button>
        </Form>
    )
}

export default ReviewForm;