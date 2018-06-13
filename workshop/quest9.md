![MongoDB](../images/header.png "MongoDB")
# Getting MEAN
## An Introduction to API-Centered Application Development with Node.js and MongoDB
## Quest 9: Creating and Reading data using Mongoose

With our Mongoose schema defined we need to turn our attention to our routes and the controller. The routes file, which
we'll put into a `routes` sub-directory, should look *relatively* familiar. However, we're going to leverage a 
controller as well.

```javascript {.line-numbers}
module.exports = (app) => {
	const delis = require('../controllers/controller.js');

	// New Deli
	app.post('/delis', delis.create);

	// Get Delis
	app.get('/delis', delis.findAll);

	// Single deli with deliId
	app.get('/delis/:rest_id', delis.findOne);

	// Update a deli with deliId
	app.put('/delis/:rest_id', delis.update);

	// Delete a deli with deliId
	app.delete('/delis/:rest_id', delis.delete);
};
```

The controller is where the database interaction takes place. Based on our schema we previously defined, we setup our
CRUD operations in the controller.

```javascript {.line-numbers}
const Deli = require('../models/model.js');

// Create and Save a new deli
exports.create = (request, response) => {
    if(!request.body) {
        return response.status(400).send({
            message: "Hmmm, trying to save an empty deli isn't very heroic."
        });
    }

    // Create a new Deli
    const deli = new Deli({
        name: request.body.name || "Mystery Deli",
        rest_id: request.body.rest_id,
        street: request.body.street,
        district: request.body.district,
        city: request.body.city,
        state: request.body.state,
        postal_code: request.body.postal_code,
        specialty: request.body.specialty
    });

    // Save deli
    deli.save().then(data => {
        response.send(data);
    }).catch(err => {
        response.status(500).send({
            message: err.message || "An error occurred while creating the deli."
        });
    });
};

// Get all delis
exports.findAll = (request, response) => {
    Deli.find()
        .then(delis => {
            response.send(delis);
        }).catch(err => {
            response.status(500).send({
                message: err.message || "Something happened while trying to get all the delis."
            });
    });
};

// Find a single deli based on deliId
exports.findOne = (request, response) => {
    console.log(request.params.rest_id);
    Deli.find({rest_id: request.params.rest_id})
        .then(deli => {
            if(!deli) {
                return response.status(404).send({
                    message: "Deli not found with id " + request.params.rest_id
                });
            }
            response.send(deli);
        }).catch(err => {
            if(err.kind === 'rest_id') {
                return response.send(404).send({
                    message: "Deli not found with id " + request.params.rest_id
                });
            }
            return response.status(500).send({
                message: "Sorry, something happened while trying to get the deli with id " + request.params.rest_id
            });
    });
};

// Update deli
exports.update = (request, response) => {
    if (!request.body.content) {
        return response.status(400).send({
            message: "Hmmm, trying to save an empty deli isn't very heroic."
        });
    }
    Deli.findOneAndUpdate({rest_id: request.params.rest_id}, {
        name: request.body.name || "Mystery Deli",
        rest_id: request.body.rest_id,
        street: request.body.street,
        district: request.body.district,
        city: request.body.city,
        state: request.body.state,
        postal_code: request.body.postal_code,
        specialty: request.body.specialty
    }, {new: true})
        .then(deli => {
            if (!deli) {
                return response.status(404).send({
                    message: "Deli not found with id " + request.params.rest_id
                });
            }
            response.send(deli);
        }).catch(err => {
        if (err.kind === 'rest_id') {
            return response.send(404).send({
                message: "Deli not found with id " + request.params.rest_id
            });
        }
        return response.status(500).send({
            message: "Sorry, something happened while trying to get the deli with id " + request.params.rest_id
        });
    });
};

// Delete
exports.delete = (request, response) => {
    Deli.findOneAndDelete({rest_id: request.params.rest_id})
        .then(deli => {
            if (!deli) {
                return response.status(404).send({
                    message: "Deli not found with id " + request.params.rest_id

                });
            }
            response.send({message: "Deli successfully deleted!"});
        }).catch(err => {
            if(err.kind === 'rest_id' || err.name === 'NotFound') {
                return response.status(404).send({
                    message: "Deli not found with id " + request.params.rest_id
                });
            }
            return response.status(500).sent({
                message: "Sorry, couldn't delete deli with id " + request.params.rest_id
            });
    });
};
```

And put everything together in a new `app.js`

```javascript {.line-numbers}
const mongoose = require('mongoose');
const express = require('express');

// Create Express app
const app = express();

// support parsing of application/x-www-form-urlencoded post data with Express native package
app.use(express.urlencoded({extended: true}));
// support parsing of application/json type post data with Express native package
app.use(express.json());

// Database setup
const dbName = 'mdbw18';
const mdbPort = 27017;
const url = 'mongodb://localhost:' + mdbPort + '/'+ dbName;

mongoose.Promise = global.Promise;

mongoose.connect(url).then(() => {
    console.log("Successfully connected to the database.");
}).catch(err => {
    console.log("Couldn't connect to the database. Exiting now...");
    process.exit();
});


// Define Routes
app.get('/', (request, response) => {
    response.json({"message": "Welcome to the Mongoose API."})
});


require('./routes/routes.js')(app);

// Listen for server requests
app.listen(3000, () => {
    console.log("Express server is listening on Port 3000.")
});

```

Voilà. Our API is now able to handle all the CRUD operations and is using the Mongoose ORM.

## Weapons, Tools and Resources

## Concepts
+ MVC Design Pattern

## Helpful Hints
+ Final project code is available [here](https://github.com/kenwalger/getting-mean)

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
|  |[Quest 7](./quest7.md) | Creating and Reading data using the Native MongoDB Driver |
|  | [Quest 8](./quest8.md) | Mongoose - Object Data Modeling |
| > | Quest 9 | Creating and Reading data using Mongoose  |

## Next Quest

Next quest: [CONGRATULATIONS!  Next Steps](./nextsteps.md)
