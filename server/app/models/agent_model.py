from app import db


class Agent(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), nullable= False)
    contact = db.Column(db.Integer)

    def serialize(self):
        return{
            'id':self.id,
            'name':self.name,
            'contact':self.contact
        }