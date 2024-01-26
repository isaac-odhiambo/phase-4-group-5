from app.models.review_model import Review
from flask import request, jsonify
from app import db
from app.models.house_model import House

from sqlalchemy.exc import SQLAlchemyError
import logging


logging.basicConfig(level=logging.INFO)

def handle_error(e, status_code):
    logging.error(str(e))
    return jsonify({'error' : str(e)}), status_code

# Update your create_review function
def create_review():
    try:
        data = request.get_json()

        if 'comment' not in data or 'propertyId' not in data:
            return handle_error("missing data fields", 400)

        house_id = data['propertyId']

        # Check if the house exists
        house = House.query.get(house_id)
        if not house:
            return handle_error("House not found", 404)

        new_review = Review(comment=data['comment'], house=house)
        db.session.add(new_review)
        db.session.commit()
        return 'review added successfully'

    except SQLAlchemyError as e:
        return handle_error(e, 400)

      
def get_reviews():
    try:
        reviews= Review.query.all()
        return jsonify ([review.serialize()for review in reviews]),200
    
    except SQLAlchemyError as e:
        return handle_error(e, 400)
    
def get_review(id):
    try:
        review= Review.query.filter_by(id=id).first()
        return jsonify ([review.serialize()])
    except SQLAlchemyError as e:
        return handle_error(e, 400)
    
def update_review(id):
    try:
        review= Review.query.get(id)
        comment= request.json['comment']
        

        review.comment= comment
       

        db.session.commit()
        return jsonify ('updated successfully'), 201


    except SQLAlchemyError as e:
        return handle_error( e , 400)

    
def delete_review(id):
    try:
        review= Review.query.get(id)
        db.session.delete(review)
        db.session.commit()
        return jsonify("review deleted successfully")
    except  SQLAlchemyError as e:
        return handle_error(e, 400)

