//inclusion de tous nos modules
const express = require('express') ,
     app = new express() ,
     mongoose  =  require('mongoose'),
     userRoute = require('./routes/userRoutes'),
     bodyParser = require('body-parser')
     PORT = 8000;
 

//deux ligns de code pour faire marcher bod-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//deux ligne de code pour faire marcher le veiw avec ejs
app.set('view engine', 'ejs'); 
app.use(express.json());


//connection a mongodb
mongoose
  .connect('mongodb+srv://username:motdepasse@sera.50wxxcf.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    console.log("connected to MongoDB Atlas");
  })
  .catch((error) => {
    console.log(error);
  });

  //utilisation de routtes
app.use('/' , userRoute);


app.listen(PORT , ()=>{
    console.log('server runing in port 8000');
})
