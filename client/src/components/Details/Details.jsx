import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Details.css';

function Details() {
  const [comment, setComment] = useState('');
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  const [propertyDetails, setPropertyDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/house/${id}`);
        if (!response.ok) {
          console.error('Property not found');
          return;
        }

        const data = await response.json();
        setPropertyDetails(data);
        fetchReviews();
      } catch (error) {
        console.error('Error fetching property details', error);
      }
    };

    fetchData();
  }, [id]);

  const fetchReviews = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/house/${id}/reviews`);
      if (!response.ok) {
        console.error('Error fetching reviews');
        return;
      }

      const reviewsData = await response.json();
      console.log('Reviews:', reviewsData); // Log the reviews
      setReviews(reviewsData);
    } catch (error) {
      console.error('Error fetching reviews', error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [id]); // Re-run the effect when the id changes

  const handleReview = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://127.0.0.1:5000/review`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ comment, propertyId: id }),
      });

      if (!response.ok) {
        console.error('Error submitting review');
        return;
      }

      // Refresh reviews after submitting a new one
      fetchReviews();

      // Clear the comment input
      setComment('');
    } catch (error) {
      console.error('Error submitting review', error);
    }
  };

  if (propertyDetails === null) {
    return <div>Loading...</div>;
  }

  if (!propertyDetails) {
    return <div>Property not found</div>;
  }

  return (
    <>
      <div className="more-details-title">
        <h1>Details</h1>
      </div>
      <div className="more-details-container">
        {propertyDetails && (
          <div className="item-extra-details" key={propertyDetails.id}>
            <div className="extra-details-image">
              <img src={propertyDetails.url} alt={`House ${propertyDetails.id}`} />
            </div>
            <div className="extra-details">
              <h4>House Type: {propertyDetails.housetype}</h4>
              <h4>Location: {propertyDetails.location}</h4>
              <h4>Price: {propertyDetails.price}</h4>
              <h4>Description: {propertyDetails.description}</h4>
              <button className="book-btn" type="button">
                <a href='https://wa.me/+254708103964'>BOOK NOW</a>
              </button>
            </div>
          </div>
        )}

        <div id="reviews">
          <h1 id='comment-section-title'>Reviews</h1>
          <form className="review-form" onSubmit={handleReview}>
            <textarea id='comment-section'
              placeholder="Write a Review"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <br />
            <button type="submit" className='submit-review-Btn'>Submit</button>
          </form>
          <ul>
            {reviews.map((review) => (
              <li key={review.id}>
                <p className='fetched-review-comment'>{review.comment}</p>
                {/* Add other review details as needed */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Details;
