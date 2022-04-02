# Node JS and Express REST API 101 | Tutorial and Sample Code

You can view this tutorial at my [**Youtube Channel**](https://youtube.com).

In this repository you will find basic boiler plate code for building a Node JS and Express REST API. You can access this code in the /src folder of this repository. 

## What will you learn?

- What is REST, HTTP and API?
- What are Node JS and Express JS?
- Create a basic Node JS project structure
- Building a REST API using Node JS and Express JS 
- Using Express router in your API 
- Testing your API with Postman

## Tutorial Steps

Initialize your Node JS project with, 

```shell
npm init
```

You will be asked to fill all of the below information for your project. 

![npm init command](/images/npm-init.png)

Once this command is run, you will have a [**package.json**](/package.json) created. 

Create your /src folder and app.js file. 

```shell 
mkdir src 

cd src 

touch app.js
```

Add the following code in your /src/app.js file. 

```javascript
console.log("I love tutorials from With Chanakya!");
```

Install express using npm as a dependency and nodemon as a dev-dependency. 

```shell
npm install --save express

npm install --save-dev nodemon
```

Run the code with, 

```shell
nodemon app.js
```

You can always use ctrl+c to come out of nodemon. 

Update your [**package.json**](/package.json) to have a start script. 

```javascript
{
  "name": "dog-api",
  "version": "1.0.0",
  "description": "REST API that retrieves dog breeds ",
  "main": "app.js",
  "scripts": {
    "start": "nodemon src/app.js"
  },
  "author": "Chanakya Lokam",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.3"
  },
  "devDependencies": {
    "nodemon": "^2.0.15"
  }
}
```

Create basic REST API - refer to /src folder for soure code. We will create the following files, 

**app.js**
```javascript
// console.log("Subscribe to my channel - With Chanakya!");

//Import modules
const express = require("express");
const dogRoutes = require("./routes/dog.routes");

// Define PORT for HTTP Server
const PORT = 9900;

// Initialize Express
const app = express();

app.use(dogRoutes);

app.listen(PORT, (err) => {
  console.log(`Server is up at localhost ${PORT}`);
});
```

**/routes/dog.routes.js**
```javascript
const express = require("express");

const router = express.Router();

// Define Dog Breeds array
const dogs = [
  { id: "1", name: "Happy", breed: "Golden Retriever" },
  { id: "2", name: "Silky", breed: "Labrador" },
  { id: "3", name: "Mika", breed: "Husky" },
];

// GET route for Dogs
router.get("/dogs", (req, res) => {
  res.status(200).send(dogs);
});

// GET route for Dog Breed Search
router.get("/dog/:name", (req, res) => {
  var notFound = true;
  // Find dog breed based on name
  dogs.forEach((dog) => {
    if (dog.name == req.params.name) {
      //res.status(200).send(`${req.params.name} is a ${dog.breed}`);
      notFound = false;
      res.status(200).send(dog);
    }
  });

  if (notFound) res.sendStatus(404);
});

module.exports = router;
```

You can now run your API using nodemon and test the routes in [**Postman**](https://www.postman.com/) (or) using [**curl**](https://curl.se/). 
