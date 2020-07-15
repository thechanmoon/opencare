# OpenCare


OpenCare a yelp style application for camps and child care businesses.

## Installation

### Backend Setup

```bash
CD backend
gem install geocode 
bundle install
rails db:migrate db:seed
rails s

```

A full list of available routes can be found by visiting http://localhost:3000/rails/info/routes.

```bash
CD ..
```

### Frontend Setup

```bash
CD frontend
npm install google-map-react 
npm install
npm start
```

## Home 

The user can use the filters and searches simaltaneously to drill down to the business they are looking for. If a user clicks on a business card they are taken to the business page 

## Business Page

A user can view informatioon of the business and see its reviews but must be logged in to write a review or follow a business. 

## Login
On the header can click the login button to go to the login route.  If they need to create an account they can click the button below to to be taken to the create an account button or loggout. Passwords are hashed using becript in the backend to protect access of that users password. 

## Account
Once logged in a user can change and reset their password and view their account info. 

## Write a Review

A user can write a review on after clicking on a review button on business page. 

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Thank You 
Thanks for checking out the application. Front-end is written in Javascript, React, HTML, CSS. Back-end: Ruby on Rails App | Was created from scratch in 2.5 weeks. 

## License
[MIT](https://choosealicense.com/licenses/mit/)