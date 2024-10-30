import React from 'react'
import { useEffect } from 'react'
import api from "../../api/axiosconfig"
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import ReviewForm from '../reviewForm/ReviewForm'

const Reviews = ({getMovieData, movie, reviews, setReviews}) => {
    const params = useParams();
    const movieId = params.movieId;

    useEffect(() => {
        if (movieId) {
            getMovieData(movieId);
        }
    }, [movieId, getMovieData]);
    const addReview = async (reviewText) => {
        try {
            await api.post("/api/v1/reviews", {
                reviewBody: reviewText,
                imdbId: movieId
            });
            
            // Refresh movie data to get the latest reviews
            getMovieData(movieId);
        } catch (err) {
            console.error("Error submitting review:", err);
        }
    }

    return (
    <Container>
            <Row>
                <Col><h3>Reviews for {movie?.title}</h3></Col>
            </Row>
            <Row className='mt-2'>
                <Col><img src={movie?.poster} alt="" /></Col>
                <Col>
                    <>
                        <Row>
                            <Col>
                                <ReviewForm handleSubmit={addReview} labelText="Write a review!"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col><hr /></Col>
                        </Row>
                    </>
                    {reviews && reviews.length > 0 ? (
                        reviews.map((review, index) => (
                            <Row key={index}>
                                <Col>{review.body}</Col>
                            </Row>
                        ))
                    ) : (
                        <Row>
                            <Col><p>No reviews yet. Be the first to review!</p></Col>
        </Row>
                    )}
                </Col>
            </Row>
    </Container>
  )
}

export default Reviews