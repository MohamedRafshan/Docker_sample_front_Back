const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const EmployeeModel = require("./model/Employee")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')



const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ['GET', 'POST']

}))
app.use(cookieParser());
// class database {
//     constructor () {
//         this._connect();

//     }
//     _connect(){
//         mongoose
//         .connect(`mongodb://$LogIN/`)
//     }
// }
mongoose.connect('mongodb://host.docker.internal:27017/employee', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
// const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/employee';
// mongoose.connect(mongoUri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });



const verifyUser = (req, res, next) => {
    const token = req.cookies.token
 
    if (!token) {
        return res.json("token not valid")
    } else {
        jwt.verify(token, "secret", (err, decoded) => {
            if (err) {
                return res.json("token not valid")
            }
            next()
        })
    }
}

app.get('/page', verifyUser, (req, res) => {
    return res.json("Success")

}
)

app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    bcrypt.hash(password, 10)
        .then(hash => {
            EmployeeModel.create({ name, email, password: hash })
                .then(employees => res.json(employees))
                .catch(err => res.json(err))

        })


})

app.post('/Login', (req, res) => {
    const { email, password } = req.body;
    EmployeeModel.findOne({ email: email })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, (err, response) => {
                    if (response) {
                        const token = jwt.sign({ email: user.email }, "secret", { expiresIn: "1h" })
                        res.cookie("token", token)
                        res.json("Success")
                    } else {
                        res.json(`incorrect password `)
                    }
                })
                // if (user.password === password){
                //     res.json("Success")
                // }else {
                //     res.json("incorrect password")
                // }

            } else {
                res.json("pls register")
            }

        })
        .catch(err => {
            res.status(500).json({ error: "Internal server Error" })
        })

})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// });

//factory function
// function creatCr(rad){
//     return {
//         rad,
//         darw(){
//             console.log("Drawing a circle with radius")
//         }
//     }
// }

// const circle = creatCr(1)
// console.log(circle.darw())

//constructor function

// function Cir(rad){
//     this.rad = rad,
//     this.draw=function(){
//         console.log(`Drawing a circle with radius ${this.rad}`)
//     }

// }

// const circle = new Cir(1)
// console.log(circle)

// const person = {
//     nam: "raf",
//     age: "22",

//     get perFull() {
//         return `${this.nam} ${this.age}`
//     },
//     set perFull(value) {
//         const parts = value.split(' ')
//         this.nam = parts[0],
//             this.age = parts[1]

//     }


// }
// person.perFull = "Rafsan 23 25"

// console.log(person)