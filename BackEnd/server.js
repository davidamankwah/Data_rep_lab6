//Express Framework
const express = require('express')
const app = express()

const port = 4000

const cors = require('cors');
const bodyParser =require('body-parser');

//avoid a CORS error
app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

//added body parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//a  route point that returns a 'Hello World'
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//a post method 
app.post('/api/books', (req, res) => {
    console.log(req.body); //console log both the title, year and poster url of the object passed up 
    res.send('Data received');
  })

//post method at /api/book route point  
//returns the JSON data with GET request 
app.get('/api/books', (req, res) => {
const books = [
    {
        "title": "Learn Git in a Month of Lunches",
        "isbn": "1617292419",
        "pageCount": 0,
        "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
         "authors": ["Rick Umali"],
        "categories": []
        },
        {
        "title": "MongoDB in Action, Second Edition",
        "isbn": "1617291609",
        "pageCount": 0,
        "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
        "status": "MEAP",
        "authors": [
        "Kyle Banker",
        "Peter Bakkum",
        "Tim Hawkins",
        "Shaun Verch",
        "Douglas Garrett"],
        "categories": []
        },
        {
        "title": "Getting MEAN with Mongo, Express, Angular, and Node",
        "isbn": "1617292036",
        "pageCount": 0,
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
        "status": "MEAP",
        "authors": ["Simon Holmes"],
        "categories": []
        }
        ]

    res.json({

        myBooks:books,
        "message":"Hello from our API"
    })
  })

// connect port 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})