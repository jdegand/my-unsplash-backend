<h1 align="center">My Unsplash Backend</h1>

<div align="center">
   Solution for a challenge from  <a href="https://legacy.devchallenges.io/challenges/rYyhwJAxMfES5jNQ9YsP" target="_blank">Devchallenges.io</a>.
</div>

## Table of Contents

- [Overview](#overview)
  - [Built With](#built-with)
- [Features](#features)
- [Thoughts](#thoughts)
- [How to use](#how-to-use)
- [Useful Resources](#useful-resources)

## Overview

### Built With

- bcrypt
- cookie-parser
- cors
- express    
- mongoose
- jsonwebtoken

## Features

This application/site was created as a submission to a [DevChallenges](https://devchallenges.io/challenges) challenge. The [challenge](https://legacy.devchallenges.io/challenges/rYyhwJAxMfES5jNQ9YsP) was to build an application to complete the given user stories.

## Thoughts

- Thought about using passport and react - I think passport pairs better with template languages.
- Could have used a roles based implementation where deleting a photo required a certain role.
- Didn't make deleting a photo password-based since you have to be logged-in already. 
- Commenting out the Image Model `unique: true` is not enough - you need to login to mongo atlas and disable it there as well
- Could make a images route and that gets all users images - code commented out in Image controller
- If refresh token expires in non-persist mode and you are logged in, adding an image will not work but you won't see a message or any feedback (console log only)
- Could add users route for an admin
- Having a view for the api seems unnecessary so I commented that out.  Could make a documentation index page on index route. 
- I didn't add properties to the request object - I associate that pattern with session-based authentication. Added them to the jwt instead.  I think you can use jwt and sessions together - but I didn't try that here.  

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/jdegand/my-unsplash-backend

# Install dependencies
$ npm install

# Add MONGO_URI, SESSION_SECRET, ACCESS_TOKEN_SECRET, and REFRESH_TOKEN_SECRET env variables

# Run the app
$ npm start
```

## Useful Resources

- [Steps to replicate a design with only HTML and CSS](https://devchallenges-blogs.web.app/how-to-replicate-design/)
- [djamware](https://www.djamware.com/post/58eba06380aca72673af8500/node-express-mongoose-and-passportjs-rest-api-authentication) - passport authentication
- [Auth0 Blog](https://auth0.com/blog/create-a-simple-and-secure-node-express-app/) - simple express app with passport-auth0
- [Stack Overflow](https://stackoverflow.com/questions/28352871/in-express-how-do-i-redirect-a-user-to-an-external-url) - express redirects
- [Mastering JS](https://masteringjs.io/tutorials/express/redirect) - express redirect
- [Coding Deft](https://www.codingdeft.com/posts/react-authentication-mern-node-passport-express-mongo/#creating-local-strategy) - passport local strategy
- [YouTube](https://www.youtube.com/watch?v=IUPHbf9cw74) - Curly Braces - Social Media App with passport
- [BezKoder](https://www.bezkoder.com/node-express-mongodb-crud-rest-api/#Demo) - express mongodb crud rest api
- [Blog](https://levelup.gitconnected.com/a-guide-to-authentication-using-passport-local-in-react-f5b3db06d4d0) - passport local with react
- [Medium](https://medium.com/@brendt_bly/simple-mern-passport-app-tutorial-4aec2105e367) - mern passport
- [Stack Overflow](https://stackoverflow.com/questions/62461748/react-express-with-passport-js) - react express with passport
- [Mastering JS](https://masteringjs.io/tutorials/mongoose/create) - mongoose create()
- [YouTube](https://www.youtube.com/watch?v=cu6VQgT3EEI) - mongoose
- [TopCoder](https://www.topcoder.com/thrive/articles/authentication-and-authorization-in-express-js-api-using-jwt) - authentication and authorization with jwt
- [Stack Overflow](https://stackoverflow.com/questions/3521290/logout-get-or-post) - logout get or post
