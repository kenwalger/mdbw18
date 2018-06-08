![MongoDB](../images/header.png "MongoDB")
# Getting MEAN
## An Introduction to API-Centered Application Development with Node.js and MongoDB
## Quest 7: Creating and Reading data using the Native MongoDB Driver
With our database populated, let's head back to our `routes.js` and update them to perform some CRUD operations.

First off, we need to wrap our routes with our database connection. Then perform the necessary CRUD operations in 
association with the HTTP operations.

```javascript
const express = require('express');
const router = express.Router();

/* ================================ */
// MongoDB Configuration
/* ================================ */
let MongoClient = require('mongodb').MongoClient;
let co = require('co');

const dbName = 'mdbw18';
const mdbPort = 27017;
const url = 'mongodb://localhost:' + mdbPort + '/' + dbName;

co(function*() {
	let db = yield MongoClient.connect(url, function (err, client) {
		if (err) throw err;
		console.log("Successfully connected to MongoDB on port: " + mdbPort);
		let db = client.db(dbName);
		let delis = db.collection('delis');
		
        /* ================================ */
        // Route Configuration
        /* ================================ */	
        
        router.get('/', (request, response, next) => {
        	console.log("You made it to the router. Nice work!");
        	response.send("API Index");
        });
        
        router.get('/delis', (request, response) => {
        	delis.find().toArray(function(err, results) {
        		response.send(results);
        	});
        });
        
        router.post('/delis', (request, response) => {
        	delis.insertOne(request.body, (err, result) => {
        		if (err) return console.log(err)
        		response.send("Here's the data that was saved: " + JSON.stringify(request.body));
        	});
        });
	});
});

```

We also need some middleware to parse our responses. We can do that in `app.js` after we install it with `npm`

```
npm install body-parser
``` 

#### App.js
```javascript
const bodyParser = require('body-parser');

// support for parsing application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({extended: true}));

// support for parsing application/json post data
app.use(bodyParser.json());
```

I'll use the Postman app for testing the API here to send a POST request with a new deli:

rest_id = 7
name = Katz's Delicatessen


## Weapons, Tools and Resources
Postman for testing APIs: [Download](https://www.getpostman.com/apps)
body-parser middleware: [npm Site] (https://www.npmjs.com/package/body-parser)

## Concepts

## Helpful Hints

## You are Here - Quests
|  | Quest | Description |
|--|-------|-------------|
|  |[Quest Zero](./quest0.md) | First quest to read.  Provides some overview information and background. |
|  |[Quest 1](./quest1.md) | Initialize your project and install some of the required software. |
|  |[Quest 2 ](./quest2.md) | creating a quick test JavaScript. |
|  |[Quest 3 ](./quest3.md) | Crafting your own tools: Building a server process using `httpd` and `express` |
|  |[Quest 4 ](./quest4.md) | Building Your App |
|  |[Quest 5](./quest5.md) | Defining the data for our application |
|  |[Quest 6](./quest6.md) | Enter MongoDB - Native JavaScript  |
| > |[Quest 7](./quest7.md) | Creating and Reading data using the Native MongoDB Driver |
| | [Quest 8](./quest8.md) | Mongoose - Object Data Modeling |
| | [Quest 9](./quest9.md) | Creating and Reading data using Mongoose  |

## Next Quest

Next quest: [Quest 8 - Mongoose - Object Data Modeling](./quest8.md) 
