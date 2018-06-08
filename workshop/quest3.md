![MongoDB](../images/header.png "MongoDB")
# Getting MEAN
## An Introduction to API-Centered Application Development with Node.js and MongoDB
## Quest 3: Crafting your own tools: The Server, Listener Process

Here's an overview of the things we'll need to accomplish to close out this quest:

* Initialize our Node.js project with a `package.json` file.  See `npm init`.
* Create a server.js JavaScript application file and instantiate a call to the server library to create a listener.
* Create an JavaScript file that will test out our listener, or what we'll refer to as our server. This is typically 
called server.js.  

### Creating a Server Listener ###
Our application will require a process that listens for incoming connections on a given port.  This port may change 
based on the environment available on the server where the application runs.  Hint, this is typically available in our 
Node.js application through a variable called `process.env.PORT`.  If set, we should leverage that specific port, 
otherwise, we should leverage port 3000.

In order to create a server or listener process, we have several options.  The first option - and probably easiest is to 
leverage a standard library called `http`.  This is the easiest option because we won't have to install any dependencies 
or additional libraries to use it.  We can just summon it's heroic powers using the following:

```
const http = require('http');
const port = process.env.PORT || 3000
```

Once we've created a variable (constant) with a reference to the package, we can begin to use it's powers:

```
const server = http.createServer();
server.listen(port);
```

This is the simplest way to create a server / listener and this gives us the capability to communicate with browsers 
that send requests such as GET, and POST requests.  Let's build on this example and show what handling a GET request 
looks like.

```javascript {.line-numbers}
const http = require('http')
const port = process.env.PORT || 3000;

const requestHandler = (request, response) => {
  console.log(request.url)
  response.end('Hello Node.js Server!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
```

Now that we understand what a listener looks like, let's build on that and start creation of our Application Programming 
Interface (API).

Before we do this, let's install a critical component of the MEAN stack.  This component is effectively the `E` in MEAN 
and it stands for `Express`JS.  Express is a web application framework.  This framework helps you to organize your 
application and build it using the `MVC` or Models, Views, and Containers methodology.  More on this later.

Installing Express is simple - we're going to leverage `npm` or the Node Package Manager.  You can leverage `yarn` if 
you choose - but I'll be sticking with npm for this workshop.

```
npm install --save express
```

You should something similar to the following output:
```
+ express@4.16.3
updated 1 package in 1.509s
```

Once installed, we can now instantiate our app object from the express package thusly:  Create a file called `app.js` 
and fill it up with the following:

```javascript {.line-numbers}
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
    res.status(200).json({
        message: "You're becoming a hero!"
    });
});

// Start the web server
app.listen(port, ()=> {
    console.log('Express.js server is listening on Port %s.', port);
});
```

## Weapons, Tools and Resources

* [Node.js Documentation](https://nodejs.org/en/docs)
* [HTTP Library Documentation](https://www.npmjs.com/package/http)

## Concepts

* [Application Programming Interfaces (APIs)](https://en.wikipedia.org/wiki/Application_programming_interface)


### IP Whitelist

### .env file

## Helpful Hints
We'll be doing this together. If you have a question or problem, let one of the mentors know.

## You are Here - Quests
|  | Quest | Description |
|--|-------|-------------|
|  |[Quest Zero](./quest0.md) | First quest to read.  Provides some overview information and background. |
|  |[Quest 1](./quest1.md) | Initialize your project and install some of the required software. |
|  |[Quest 2 ](./quest2.md) | creating a quick test JavaScript. |
| > |Quest 3 | Crafting your own tools: Building a server process using `httpd` and `express` |
|  |[Quest 4 ](./quest4.md) | Building Your App |
|  |[Quest 5 ](./quest5.md) | Defining the data for our application |
|  |[Quest 6 ](./quest6.md) | Enter MongoDB - Native JavaScript  |
|  |[Quest 7](./quest7.md) | Creating and Reading data using the Native MongoDB Driver |
| | [Quest 8](./quest8.md) | Mongoose - Object Data Modeling |
| | [Quest 9](./quest9.md) | Creating and Reading data using Mongoose  |


## Next Quest

Next quest: [Quest 4 - Building Your App ](./quest4.md)
