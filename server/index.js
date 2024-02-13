const express = require("express");
const jwt = require('jsonwebtoken');
const cors = require("cors");
const bodyParser = require('body-parser')
const mysql = require ("mysql2");// Importing the mysql module
const session = require("express-session");
const { Sequelize, DataTypes } = require("sequelize");
const crypto = require('crypto');
const bcrypt = require('bcryptjs');


//Generate a secret key using crypto
const secret = crypto.randomBytes(64).toString('hex');
const app = express();

const { Router }=require('express');
const router = Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'myapp',
  });
  connection.connect((err) => {
    if(err) {
      console.error("Failed to connect to MySQL:" + err.message);
      return;
    }
    console.log("Connected to MySQL database");
  });

// Define a function to generate a secret key
const generateSecretKey = () => {
    // Generate a random sequence of bytes and convert it to a hexadecimal string
  const secretKey = crypto.randomBytes(32).toString('hex');
  return secretKey;// Return the generated secret key
  };
  const secretKey = generateSecretKey();// Generate a secret key using the generateSecretKey function

  //middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json());


app.use(session({
    secret: secret,
    resave: false,
    saveUninitialized: true, // 
    cookie: {
      httpOnly: true, // Prevents client-side JS from accessing the cookie
      secure: false, // Set to false if using HTTP, true if using HTTPS
      maxAge: 1000 * 60 * 60 * 24 // Cookie expiration (set to 1 day here)
    }
  }));

  //sync database
const db = require('./models');
db.sequelize.sync().then(() => {
console.log('Database Synced')
})
.catch((err) => {
  console.log('Failed to sync database:' + err.message);
});

//register logic
app.post('/register', async (req, res) => {//THis is a post request to the signup endpoint
    const firstname = req.body.firstname;//it extracts the value of username, password and role from the request body
    const lastname = req.body.lastname;
    const email = req.body.email;
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const query =`INSERT into logindetails( firstname, lastname, email, password, confirmpassword) VALUES (?,?,?,?,?)`//constructs a SQL query to inser the extracted values to tables details
    connection.query(query, [firstname, lastname, email, hashedPassword, hashedPassword ], (err, result) => {//It takes the query string as the first parameter and an array containing the extracted values as the second parameter.                                                                                   
      if (err) {//The arrow function passed as the third parameter is the callback function that will be executed once the query is complete.
      console.error('Error executing MySQL query:', err);//there is an error handling logic. If an error occurs during the execution of the query, 
      res.status(500).json({ error: 'Failed to register user' });//it logs the error message to the console and sends a JSON response with a status code of 500 and an error message indicating the failure to register the user.
    } else {
      res.send(result);
    }
  });
  });

  //login logic
  app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
  
    const query = "SELECT * FROM logindetails WHERE email = ?";
    connection.query(query, [email], async (err, result) => {
      if (err) {
        console.error('Error executing MySQL query:', err);
        return res.status(500).json({ error: 'Failed to log in' });
      } else if (result.length > 0) {
        const user = result[0];
  
        // Verify password with bcrypt
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (passwordMatch) {
          // use Express sessions
          const token = jwt.sign({ id: user.id} , secretKey, {expiresIn: '24h' }); // Save the user ID in session
          return res.status(200).send({ message: "Login successful", token }); //send the token back
        } else {
          return res.status(401).send({ message: "Wrong email or password" });
        }
      } else {
        return res.status(404).send({ message: "User not found" });
      }
    });
  });


  const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, secretKey, (err, decodedToken) => {
      if (err) return res.sendStatus(403);

      const userId = decodedToken.id;
      const query = "SELECT * FROM logindetails WHERE id = ?";
      connection.query(query, [userId]), (err, result) => {
        if (err) {
          console.error("Error executing MYSQL query", err);
          return res.status(500).json({ error: 'Failed to fetch user data'});
         } else if (result.length > 0) {
         const user = result[0];
         req.user = user;
        next();
        } else {
          return res.status(404).json({ message: "User not found" });
        }
      }});
    };

app.get('/api/authenticate', authenticateToken, (req, res) => {
  
})

function executeQuery(sql, callback) {
  connection.query(sql, function(error, results, fields) {
    if (error) {
      if (error.fatal) {
        console.error('A fatal error occurred:', error.message);

        connectToDatabase();
        executeQuery(sql, callback);
      } else {
        callback(results);
      }
    }
  })
}
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

   