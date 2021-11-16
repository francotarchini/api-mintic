const mongoose = require('mongoose')
const URL = "mongodb+srv://admindb:2021MyFirstDB*@misiontic.wpvh6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(URL)
        .then(db=>console.log("Database connected"))
        .catch( err => console.log(err));
