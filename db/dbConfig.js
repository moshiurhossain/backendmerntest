const mongoose = require("mongoose");

const dbConfig = () => {
    mongoose.connect(process.env.DB_LINK)
    .then(() => console.log("DB connected"))
    .catch((err) => console.log(err));
}

module.exports = dbConfig