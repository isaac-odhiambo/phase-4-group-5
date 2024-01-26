# Import necessary modules
from app import db
from sqlalchemy.orm import relationship

# Add the following relationship to your House model
class House(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    housetype = db.Column(db.String(20), nullable=False)
    location = db.Column(db.String(20), nullable=False)
    price = db.Column(db.Float)
    description = db.Column(db.String(100))
    url = db.Column(db.String(250))
    reviews = db.relationship('Review', backref='house_reviews', lazy=True)

    def serialize(self):        
        return {
            'id': self.id,
            'housetype': self.housetype,
            'location': self.location,
            'price': self.price,
            'description': self.description,
            'url': self.url,
            'reviews': [review.serialize() for review in self.reviews]
        }
