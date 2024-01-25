from app import db

class House(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    housetype = db.Column(db.String(20), nullable=False)
    location = db.Column(db.String(20), nullable=False)
    price = db.Column(db.Float)
    description = db.Column(db.String(100))
    url= db.Column(db.String(250))
    # user_id = db.Column(db.Integer, db.ForeignKey('user.id', name='fk_house_user_id'), nullable=False)
    # reviews = db.relationship('Review', backref='house', lazy=True)

    def serialize(self):        
        return {
            'id': self.id,
            'housetype': self.housetype,
            'location': self.location,
            'price': self.price,
            'description': self.description,
            'url':self.url
            # 'user_id': self.user_id,
            # 'reviews': [review.serialize() for review in self.reviews]
        }