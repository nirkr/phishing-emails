
## Phishing-Mails project

The project wasn't completed and some bugs exist.
See the description below to see what was done

## client: 
Project was build with nextJS 
* install dependencies: npm i
* run the development server: npm run dev
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

* app shows mail from server
* app has signin page with connects with the server
* there is still work to connect completely the auth availability to rendered data

## server:
express, jwt

* install dependencies: npm i
* run the development server: npm start
(port 4003)

* API's:
    - GET - get mails from db
    - POST - executes mail sending via nodemailer (with phishy link)
    - GET - once user clicks , the user's status is being changed (to clicked = true)
* didnt have the time to build the db - would do it with Postgress + building the schemas (user + mail) and their data seeding actions
* used jwt for authentication actions (in authRoutes.js file)