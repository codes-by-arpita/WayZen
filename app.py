from flask import Flask, render_template,request,url_for, redirect
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime


app=Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:@localhost/wayzen_db'
db = SQLAlchemy(app)

class User_info(db.Model):
    sno=db.Column(db.Integer,primary_key=True)
    username=db.Column(db.String(50), nullable=False,unique=True)
    email=db.Column(db.String(100), nullable=False,unique=True)
    password=db.Column(db.String(255), nullable=False)
    created_at=db.Column(db.DateTime, default=datetime.utcnow)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/login', methods=['GET','POST'])
def login():
    if(request.method=='POST'):
        identifier = request.form.get('identifier')
        password = request.form.get('password')

        user = User_info.query.filter(
            (User_info.email == identifier) | (User_info.username == identifier),
            User_info.password == password
        ).first()

        if user:
            return redirect(url_for('map_page'))
        else:
            return "Invalid credentials"
    return render_template('login.html')

@app.route('/signup',methods=['GET','POST'])
def signup():
    if(request.method=='POST'):
       user_name= request.form.get('username')
       email=request.form.get('email')
       password=request.form.get('password')

       entry= User_info(username=user_name, email = email, password=password)
       db.session.add(entry)
       db.session.commit()

       return redirect(url_for('login'))

    return render_template('signup.html')

@app.route('/map')
def map_page():
    return render_template('map.html')

if __name__=='__main__':
    app.run(debug=True)