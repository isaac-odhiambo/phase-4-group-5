from app import db

class Review(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    comment = db.Column(db.String(100))
    # house_id = db.Column(db.Integer, db.ForeignKey('house.id', name='fk_review_house_id'), default=1)
    # house = db.relationship('House', backref='reviews_relation', lazy=True)

    def serialize(self):
        return {
            'id': self.id,
            'comment': self.comment,
            # 'house_id': self.house_id,
            # 'house': self.house.serialize() if self.house else None
        }