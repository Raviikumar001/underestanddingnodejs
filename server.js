
const  express = require('express');
const path = require('path');
const rootDir = require('./util/path');
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');



const app = express();

//body parser can also use with express.json
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));


//this is how we use routes, as middleware.
//has to be at top of the structure
app.use("/admin",adminData.routes);
app.use(shopRoutes);


app.use( (req,res, next) => {
        // res.status(404).send( '<h1>Page not found </h1>');
        res.sendFile(path.join(rootDir, "views","Error.html"))
})


app.listen(3000);



