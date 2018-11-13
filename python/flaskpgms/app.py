from flask import Flask,render_template,request

app=Flask(__name__)


@app.route('/send',methods=['GET','POST'])
def send():
    if(request.method=='POST'):
        getname=request.form['name']
        getemail=request.form['email']
        getmobile=request.form['mobile']
        getaddress=request.form['address']
        getmessage=request.form['message']

        return render_template('result.html',newname=getname,newemail=getemail,newmobile=getmobile,newaddress=getaddress,newmessage=getmessage)


@app.route('/contact',)
def h():
    return render_template("contact.html")

@app.route('/home')
def home():
    return render_template("home.html")


@app.route('/about')
def about():
    return render_template("about.html")

if(__name__=='__main__'):
    app.run(debug=True)