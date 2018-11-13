from flask import Flask

app=Flask(__name__)

@app.route('/')
def h():
    return "welcome to flask"

@app.route('/home')
def home():
    return "welcome to home"

@app.route('/about')
def about():
    return "welcome to about"
if(__name__=='__main__'):
    app.run(debug=True)