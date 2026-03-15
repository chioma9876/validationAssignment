const express = require('express')
require('dotenv').config();
const PORT = process.env.PORT || 2233;
const app = express();
const sequelize = require('./databse/database');
const userRouter = require('./routes/userRouter');
const supermarketRouter = require('./routes/supermarketRouter')

const database = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to databse successful')

    } catch (error) {
        console.log(`Error connecting to datbase`, error.message)
    }
}

database()


app.use(express.json());

app.use(userRouter);
app.use(supermarketRouter)

app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`)
})
