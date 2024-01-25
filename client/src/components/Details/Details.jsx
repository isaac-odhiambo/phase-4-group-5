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
      } catch (error) {
        console.error('Error fetching property details', error);
      }
    };

    fetchData();
  }, [id]);

  const fetchReviews = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/review/${id}`);
      if (!response.ok) {
        console.error('Error fetching reviews');
        return;
      }

      const reviewsData = await response.json();
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
        {propertyDetails.map((property) => (
          <div className="item-extra-details" key={property.id}>
            <div className="extra-details-image">
              <img src={property.url} alt={`House ${property.id}`} />
            </div>
            <div className="extra-details">
              <h4>House Type: {property.housetype}</h4>
              <h4>Location: {property.location}</h4>
              <h4>Price: {property.price}</h4>
              <h4>Description: {property.description}</h4>
              <button className="book-btn" type="button">
                <a href='https://wa.me/+254708103964'>BOOK NOW</a>
              </button>
            </div>
          </div>
        ))}

        <div id="reviews">
          <h1 id='comment-section-title'>Reviews</h1>
          <form className="review-form" onSubmit={handleReview}>
            <textarea id='comment-section' 
              placeholder="Write a Review"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <br/>
            <button type="submit" className='submit-review-Btn'>Submit</button>
          </form>
          <div>
            {reviews.map((review) => (
              <div key={review.id}>
                <p className='fetched-review-comment'>{review.comment}</p>
                {/* Add other review details as needed */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
