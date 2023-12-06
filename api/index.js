const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const User = require('./models/User')
const { default: mongoose } = require('mongoose');

const port = 4000;
const salt = bcrypt.genSaltSync(10)
const secret = 'a65ad573r35t7i7y943o5ujol4tio3j4'

const app = express();
app.use(cors({credentials: true, origin: 'http://localhost:5173'}))
app.use(express.json())
app.use(cookieParser())

mongoose.connect("mongodb+srv://arunthiyaagarajan:J9Q03XASjVk5EQsD@cluster0.aw0yamk.mongodb.net/?retryWrites=true&w=majority")

app.post('/register', async (req, res) => {
    const { username, password } = req.body
    
    try { 
        const userDoc = await User.create({
            username,
            password: bcrypt.hashSync(password, salt),
        })
        res.json(userDoc);
    } catch(err) {
        res.status(400).json(err)
    }
    
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body
    const userDoc = await User.findOne({ username })
    const passOk = bcrypt.compareSync(password, userDoc.password)

    if (passOk) {
        jwt.sign({ username, id: userDoc.id }, secret, {}, (err, token) => {
            if (err) throw err;
            res.cookie('token', token).json({
                id: userDoc._id,
                username,
            })
            })
    } else {
        res.status(400).json("Invalid Credentials")
    }
})

app.get('/profile', (req, res) => {
    const { token } = req.cookies
    jwt.verify(token, secret, {}, (err, info) => {
        if (err) throw err;
        res.json(info)
    })
})

app.post('/logout', (req, res) => {
    res.cookie('token', '').json('ok')
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
