from app.models.house_model import House
from flask  import request, jsonify
from app import db
from sqlalchemy.exc import SQLAlchemyError
import logging



logging.basicConfig(level=logging.INFO)
def handle_error(e, status_code):
     logging.error(str(e))
     return jsonify({'error' : str(e)}), status_code

def create_house():
     try:
          data = request.get_json()

          if 'housetype' not in data or 'location' not in data or 'price' not in data or 'description' not in data or 'url' not in data:
            
               return handle_error('missing data fields', 400)
          new_house= House(housetype=data['housetype'],location=data['location'],price=data['price'],description=data['description'], url=data['url'])
        
          db.session.add(new_house)
          db.session.commit()
          return 'house created successfully'
          
     except SQLAlchemyError as e:
          return handle_error(e, 400)

   
def get_houses():
    try:
        houses= House.query.all()
        return jsonify ([house.serialize()for house in houses]),200
    
    except SQLAlchemyError as e:
        return handle_error(e, 400)
    
def get_house(id):
    try:
        house= House.query.filter_by(id=id).first()
        return jsonify ([house.serialize()])
    except SQLAlchemyError as e:
        return handle_error(e, 400)
    
def update_house(id):
    try:
        house = House.query.get(id)
        housetype= request.json['housetype']
        location = request.json['location']
        price = request.json['price']
        description = request.json['description']
        url= request.json['url']
        # user_id = request.json['user_id']
        # reviews = request.json['reviews']

        house.housetype= housetype
        house.location= location
        house.price = price
        house.description= description
        house.url = url
        # house.user_id = user_id
        # house.reviews = reviews

        db.session.commit()
        return jsonify ('house updated successfully'), 201


    except SQLAlchemyError as e:
        return handle_error( e , 400)

    
def delete_house(id):
    try:
        house= House.query.get(id)
        db.session.delete(house)
        db.session.commit()
        return jsonify("house deleted successfully")
    except  SQLAlchemyError as e:
        return handle_error(e, 400)





