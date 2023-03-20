
const  express = require('express');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');



const app = express();

//body parser can also use with express.json
app.use(express.urlencoded({extended: true}));``

//this is how we use routes, as middleware.
//has to be at top of the structure
app.use("/admin",adminRoutes);
app.use(shopRoutes);


app.use( (req,res, next) => {
        res.status(404).send( '<h1>Page not found </h1>');
})

app.listen(3000);



