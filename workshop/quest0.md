![MongoDB](../images/header.png "MongoDB")
# Getting MEAN
## An Introduction to API-Centered Application Development with Node.js and MongoDB

## quest 0: Introduction to the Workshop and Quests

This workshop was created to guide the developer through the process of becoming hero... actually creating an 
API-centered Application using Node.js and MongoDB.  Well accomplish this through a journey led through by user-centered 
development tasks called quests.  This workshop has 15 quests associated with it and each has a distinct number of tasks 
required in order to move to the next.

## Structure

The workshop was created using a series of markdown files delivered via the repository 
[Getting MEAN](http://github.com/kenwalger/getting-mean) - each is called a `quest`.  Each `quest` will guide you through 
the process of several tasks associated with tackling the MEAN Stack.  This repository should be cloned prior to 
beginning work on the various quests and tasks.  For help on cloning the repository, see 
[Cloning a Github Repository](https://help.github.com/articles/cloning-a-repository/)

To review the tasks and quests, drill into the `workshop` directory off of the main repository.  

You may choose to follow along, starting from scratch and reading through, and completing the suggested actions in each 
quest.  You may also, if you wish clone the repository to get some of the starting components and examples to accelerate 
your quest to becoming a hero.

To clone the repository, you'll execute something similar to the following command:

```
$ git clone git@github.com:kenwalger/mdbw18.git
```

This will copy all of the files from the repository to your local development environment into a directory (folder) 
called `getting-mean`.

Once there, you'll see a directory structure similar to the following:

<!-- todo add directory structure -->
```
.
├── README.md
├── app.js
├── helloworld.js
├── images
│   ├── atlas-cluster-video.png
│   ├── header.png
│   └── hero_sw.jpg
│   └── Leafie_motorcycle.png
├── package-lock.json
├── package.json
├── server-app.js
├── server.js
├── api
    └── routes
        └── quests.js
└── workshop
    ├── README.md
    ├── quest0.md
    ├── quest1.md
    ├── quest2.md
    └── quest3.md
    ...
```

## Weapons, Tools and Resources

* [Github Help](https://help.github.com/)

## Concepts

* [User Stories](http://google.com/?q=user%20stories)

    A user story is short, specific and goal oriented.  This workshop will present sections in the form of quests with 
    individual user stories in them.  You may want to read up on user centric design concepts to become familiar with 
    this as you progress.

## Requirements

* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* [Node.js](https://nodejs.org)
* [MongoDB](https://mongodb.com)

## Hints

None.

## You are Here - Quests
|  | Quest | Description |
|--|-------|-------------|
| > |Quest Zero | First quest to read.  Provides some overview information and background. |
|  |[Quest 1](./quest1.md) | Initialize your project and install some of the required software. |
|  |[Quest 2 ](./quest2.md) | creating a quick test JavaScript. |
|  |[Quest 3 ](./quest3.md) | Crafting your own tools: Building a server process using `httpd` and `express` |
|  |[Quest 4 ](./quest4.md) | Building Your App |
|  |[Quest 5 ](./quest5.md) | Defining the data for our application |
|  |[Quest 6 ](./quest6.md) | Enter MongoDB - Native JavaScript  |
|  |[Quest 7](./quest7.md) | Creating and Reading data using the Native MongoDB Driver |
|  | [Quest 8](./quest8.md) | Mongoose - Object Data Modeling |
|  | [Quest 9](./quest9.md) | Creating and Reading data using Mongoose  |



## Next quest

[Quest 1 - Fearlessly Install!](../workshop/quest1.md) - Installation requirements for the MEAN Stack.