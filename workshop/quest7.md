![MongoDB](../images/header.png "MongoDB")
# Getting MEAN
## An Introduction to API-Centered Application Development with Node.js and MongoDB
## Quest 7: Creating and Reading data using the Native MongoDB Driver
With our database populated, let's head back to our `routes.js` and update them to perform some CRUD operations.



```javascript
const express = require('express');
const router = express.Router();

const db = require('../data/db').db;
let delis = db.collection('delis');

/* ====================================== */
// Route Definitions
/* ====================================== */

// GET Routes
router.get('/', (request, response, next) => {
    console.log("You made it to the router. Nice work!");
    response.send("API index");
});

router.get('/delis', (request, response, next) => {
    console.log("You're on the quest for heros.");

    delis.find().toArray(function(err, results) {
        response.send(results);
    });
});

// POST Routes
router.post('/delis/', (request, response) => {
    delis.insertOne(request.body, (err, result) => {
        if (err) return console.log(err)
        response.send("Here's the data that was saved: " + JSON.stringify(request.body));
    });
});

// PUT routes

// DELETE routes

// Export Router for use in app.js
module.exports = router;

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

We also need to get our database connection in our `app.js`. 

```javascript {.line-numbers}
const db = require('./api/data/db');
const data = require('./api/data/delis');

db.connect().then(function(db){
            const deliRoutes = require('./api/routes/delis');

            app.use('/', deliRoutes);

            app.use((request, response, next) => {
                response.status(200).json({
                    message: "You're becoming a hero!"
                });
            });

            // Start the web server
            app.listen(port, () => {
                console.log('Express.js server is listening on Port %s.', port);
            });

});
```

I'll use the Postman app for testing the API here to send a POST request with a new deli:

rest_id = 7
name = Katz's Delicatessen


## Weapons, Tools and Resources
Postman for testing APIs: [Download](https://www.getpostman.com/apps)
body-parser middleware: [npm Site] (https://www.npmjs.com/package/body-parser)
+ Note: in Express version 4, body-parser is included in the Express package. *But* it was there in v2.x as well, but 
**not** in 3.x, so... yeah. You'll see it used as `bodyParser.urlencoded` and `express.urlencoded` depending on coding
style.

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
