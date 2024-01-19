# Login System Project

This project implements a basic login system using Node.js, Express, MongoDB, and EJS for the frontend. Users can register, log in, and access a home page. Passwords are securely hashed using bcrypt, and the data is stored in a MongoDB database.

## Project Structure

### `config.js`

This file contains the configuration for connecting to the MongoDB database. It defines a `LoginSchema` for user data and exports the MongoDB model.

### `index.js`

The main server file that utilizes Express for routing. It includes routes for rendering login, signup, and home pages. User registration and login processes are handled securely, and errors are appropriately managed.

### `login.ejs`

The EJS template for the login page, providing a form for users to enter their credentials. It includes a link to the signup page and displays a footer with authors' information.

### `signup.ejs`

The EJS template for the signup page, featuring a form for user registration. It includes a link to the login page and displays a footer with authors' information.

### `home.ejs`

The EJS template for the home page, welcoming users after successful login. It displays a footer with authors' information.

## How to Run

1. Install Node.js and MongoDB on your machine.
2. Clone this repository.
3. Run `npm install` to install the necessary dependencies.
4. Ensure MongoDB is running.
5. Execute `npm start` to start the server.
6. Access the application at `http://localhost:3000`.

## Authors

- Aruzhan K.
- Moldir K.

## Course Information

- Course: SE-2213 (Software Engineering)
- Instructors: [Zhussipkali Faizolla]
