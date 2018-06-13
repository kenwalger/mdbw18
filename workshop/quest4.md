![MongoDB](../images/header.png "MongoDB")
# Getting MEAN
## An Introduction to API-Centered Application Development with Node.js and MongoDB
## Quest 4: Handling Requests

In the last [quest](../workshop/quest3.md), we created a server process that will listen for incoming requests.  We 
created a dummy response to those requests in that quest.  Now, we'll build on that and create an application which will 
intelligently handle those requests rather than just responding with static text.

The whole idea around creating an application is to provide some way to communicate with the users.  With Web-based 
applications this is done with HTTP Methods - or verbs.  Here's a list of commonly used methods:

* POST
* GET
* PATCH
* DELETE

These roughly translate to the 4 basic actions associated with a data-driven application, typically referred to as CRUD: 

* Create (POST)
* Read (GET)
* Update (PATCH or PUT)
* Delete (DELETE)

We use these methods every time we use a web browser.  When we browse to a site, we're typically sending a GET request.  
When we submit a form, we're usually using a POST.  The others are used a bit differently - mostly for applications 
other than browsers - which we're going to do right now.

Our application is currently very simple.  We need to enhance it to handle incoming requests.  To do this, we're going 
to create a traffic cop of sorts... a guiding mechanism that will `route` the various incoming requests based on the 
information being requested and the way it's being requested - or the method.

Let's first create our programmatic implementation of a `traffic cop` or router.  

To do this, let's create a new directory (folder) in our tree under the main folder.

```
mkdir -p api/routes
```

Next, let's create a file to store our routing logic in `./api/routes/delis.js`.  This file, as you can probably 
decipher from its name will hold routes for requests having to do with our quest for a great deli.

Here's a beginning example of the routes file:

```javascript {.line-numbers}
const express = require('express');
const router = express.Router();

/* ====================================== */
// Route Definitions
/* ====================================== */

// GET routes
router.get('/', (request, response, next) => {
    console.log("You made it to the router. Nice work!");
    response.send("API index");
});

router.get('/delis',(request, response, next) => {
    console.log("You're on the quest for heros.");
    response.send("Delis index");
});

// POST routes

// PUT routes

// DELETE routes

// Export Router for use in app.js
module.exports = router;
```

Now that we have the router in place, we need to tell the application to leverage this file.  Let's head back to our 
`app.js` file and insert this handler as a required element in our main app.

```javascript
const deliRoutes = require('./api/routes/delis');

```

Next we need to tell our app to use the routes:

```javascript
app.use('/', deliRoutes);
```

Once you get tired of stopping and restarting your application after every change, you'll appreciate the heroic tool,
Nodemon.

```
npm install --save-dev nodemon
```

---

## Weapons, Tools and Resources

* [Nodemon](https://nodemon.io/) - Reload your application automatically

## Concepts

* [HTTP Methods and why you should be using them...](https://hackernoon.com/http-methods-and-why-you-should-be-using-them-on-your-api-98e26b0a7e57)

## Helpful Hints

## You are Here - Quests
|  | Quest | Description |
|--|-------|-------------|
|  |[Quest Zero](./quest0.md) | First quest to read.  Provides some overview information and background. |
|  |[Quest 1](./quest1.md) | Initialize your project and install some of the required software. |
|  |[Quest 2 ](./quest2.md) | creating a quick test JavaScript. |
|  |[Quest 3 ](./quest3.md) | Crafting your own tools: Building a server process using `httpd` and `express` |
| > |Quest 4 | Building Your App |
|  |[Quest 5 ](./quest5.md) | Defining the data for our application |
|  |[Quest 6 ](./quest6.md) | Enter MongoDB - Native JavaScript  |
|  |[Quest 7](./quest7.md) | Creating and Reading data using the Native MongoDB Driver |
| | [Quest 8](./quest8.md) | Mongoose - Object Data Modeling |
| | [Quest 9](./quest9.md) | Creating and Reading data using Mongoose  |

## Next Quest

Next quest: [Quest 5 - Defining the data for our application ](./quest5.md)
