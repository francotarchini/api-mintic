const mongoose = require('mongoose');
const URL = process.env.DATABASE_URL;

mongoose.connect(URL)
        .then(db=>console.log("Database connected"))
        .catch( err => console.log(err));
