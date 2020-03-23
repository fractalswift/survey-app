How to use:

    Simply git clone this repo then:

    You will need to set up mongo db locally (or you have received mongoDB atlas details from me) - place mongoDbURI details in config/default.json

    If setting up locally, you need to make the default survey by passing an object
    that matches the SurveyBasic schema to http://localhost:5000/routes/api/survey/new

    Then start the servers with "npm start". Node should open the browser for you but if not then navigate to http://localhost:3000

Tools used:

    Nodemon to auto refresh when making changes on backend
    Mongoose for interacting with mongoDb (in this case Atlas)
    Concurrently for starting backend/frontend dev servers at same time
    Express-Validator - for checking data before submission to DB
    React-router-dom - for directing to admin/default survey on landing
    Postman - for testing backend routes
