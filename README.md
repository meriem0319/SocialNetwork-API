# 18 NoSQL: Social Network API

## 🔧 My Task

My Challenge is to build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. I used Express.js for routing, a MongoDB database, and the Mongoose ODM. In addition to using the [Express.js](https://www.npmjs.com/package/express) and [Mongoose](https://www.npmjs.com/package/mongoose) packages, I have also used [Moment.js](https://momentjs.com/) to format timestamps.

No seed data is provided, so I created my own data using Insomnia after creating the API.

Because this application won’t be deployed, I am also providing a walkthrough video that demonstrates its functionality and all of the following acceptance criteria being met.

## ✍️User Story:

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## 📑Acceptance Creteria:

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## 📹 Walkthrough Video Link:

- https://drive.google.com/file/d/1ZFibpVhHpBt1Ces68-b6B0xstEdDcmXX/view

### 📂Link to the Repo:

- https://github.com/meriem0319/SocialNetwork-API

### ✒️Author:

- [Meriem Powell](https://github.com/meriem0319)
