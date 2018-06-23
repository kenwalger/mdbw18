![MongoDB](../images/header.png "MongoDB")
# Getting MEAN
## An Introduction to API-Centered Application Development with Node.js and MongoDB

## Quest 1: Fearlessly Install!

As a heroic developer, you'll leverage the following weapons (technologies) to conquer foes (create applications):

* [MongoDB](http://mongodb.com) - A Most Heroic Database for data persistence.
* [ExpressJS](https://expressjs.com/) - Web development framework for Node.js.
* AngularJS - We'll not leverage this for much during this workshop.
* [Node.js](https://nodejs.org) - The JavaScript Application Development Framework of choice for heroic developers.

At the end of this quest, if you've successfully completed the requirements:

* You will have installed MongoDB locally.
 - Test this by typing `mongo` from command line.
* You will have installed Node.js locally.
 - Test this by typing `node` from command line.
* You will have installed the Node Package Manager.
 - Test this by typing `npm` from command line.


### MongoDB

To leverage MongoDB you will need to install the local command line utilities in your development environment.

* [Install MongoDB](https://docs.mongodb.com/manual/installation/)

You will need to install MongoDB locally so that you have access to the local command line utilities.

While you can certainly run MongoDB locally - you'll also be interested to know that you can run MongoDB in the cloud, 
for free using [MongoDB Atlas](http://mongodb.com/atlas).

[![Launching your first Atlas Cluster](https://img.youtube.com/vi/_d8CBOtadRA/0.jpg)](https://www.youtube.com/watch?v=_d8CBOtadRA "Launching your first Atlas cluster")

#### Start the MongoDB Server

Before we get too far along our journey, let's get our newly installed MongoDB Server running. From a terminal window,
we can get our server started with the following command:

```
mongod
```

Once it is up and running and waiting for connections on the default port of 27017, we can minimize that terminal window
and continue on our quest.

### Node.js

Here's the abbreviated guide, highlighting the major steps:

1. Go to the [Node.js Downloads page](https://nodejs.org/en/download/).
1. Download Node.js for macOS by clicking the "Macintosh Installer" option
1. Run the downloaded Node.js .pkg Installer
1. Run the installer, including accepting the license, selecting the destination, and authenticating for the install.
1. You're finished! To ensure Node.js has been installed, run `node -v` in your terminal - you should get something like 
v8.3.0

### Node Package Manager (npm)

Node.js ships with a version of `npm` - the Node Package Manager.  This may (or may not) be the latest, greatest version 
of `npm` and we should update that right out of the gate.

To update `npm` type the following from command line:
```
sudo npm install npm --global // Update the `npm` CLI client
```

## Weapons, Tools and Resources

* [MongoDB Atlas](https://mongodb.com/atlas)
* [MongoDB Downloads](https://mongodb.com/download)
* [Node.js](https://nodejs.org)
* [Installing Node.js on Windows](https://nodesource.com/blog/installing-nodejs-tutorial-windows/)
* [Installing Node.js on Mac OS](https://nodesource.com/blog/installing-nodejs-tutorial-mac-os-x/)
* [NPM Downloads](https://mongodb.com/download)

## Concepts

* 


## Hints

None.

## You are Here - Quests
|  | Quest | Description |
|--|-------|-------------|
|  |[Quest Zero](./quest0.md) | First quest to read.  Provides some overview information and background. |
| > |Quest 1 | Initialize your project and install some of the required software. |
|  |[Quest 2 ](./quest2.md) | creating a quick test JavaScript. |
|  |[Quest 3 ](./quest3.md) | Crafting your own tools: Building a server process using `httpd` and `express` |
|  |[Quest 4 ](./quest4.md) | Building Your App |
|  |[Quest 5 ](./quest5.md) | Defining the data for our application |
|  |[Quest 6 ](./quest6.md) | Enter MongoDB - Native JavaScript  |
|  |[Quest 7](./quest7.md) | Creating and Reading data using the Native MongoDB Driver |
| | [Quest 8](./quest8.md) | Mongoose - Object Data Modeling |
| | [Quest 9](./quest9.md) | Creating and Reading data using Mongoose  |


## Next quest

Next quest: [Quest 2 - creating a quick test JavaScript. ](./quest2.md)
