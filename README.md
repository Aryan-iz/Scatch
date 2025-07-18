Scatch E-commerce Application
Table of Contents
About the Project

Features

Technologies Used

Getting Started

Prerequisites

Installation

Usage

Contributing

License

Contact

About the Project
Scatch is a modern, full-stack e-commerce application designed to provide a seamless shopping experience. It features user authentication, a product catalog, a shopping cart, and a user account management section where users can view their profile and orders. The application is built with a focus on clean design and responsive user interface.

Features
User Authentication: Secure user registration, login, and logout functionalities.

Product Catalog (Shop Page): Browse a variety of products with options for sorting and filtering (e.g., by discount, new collection).

Shopping Cart: Add and remove products from the cart.

User Account Page:

View personal details (full name, email).

Display profile image.

See the number of items in the cart.

View a list of past orders with their status and details.

Editable Profile: Update full name, email, and profile picture directly on the account page.

Responsive Design: It is not compelety Responsive but will work on that later😊. 

Flash Messages: User-friendly success and error notifications.

Technologies Used
Backend:

Node.js: JavaScript runtime environment.

Express.js: Web application framework for Node.js (^5.1.0).

Mongoose: MongoDB object data modeling (ODM) for Node.js (^8.16.1).

MongoDB: NoSQL database (used with Mongoose).

Multer: Middleware for handling multipart/form-data, primarily for file uploads (^2.0.1).

Bcrypt: Library for hashing passwords (^6.0.0).

JSON Web Token (jsonwebtoken): For implementing token-based authentication (^9.0.2).

Dotenv: Loads environment variables from a .env file (^17.2.0).

Express-Session: Session management middleware for Express (^1.18.1).

Connect-Flash: Flash message middleware (^0.1.1).

Cookie-Parser: Parse Cookie header and populate req.cookies (^1.4.7).

Config: Configuration management for Node.js applications (^4.0.0).

Debug: Tiny JavaScript debugging utility (^4.4.1).

Frontend:

EJS (Embedded JavaScript): Templating engine for rendering dynamic HTML (^3.1.10).

Tailwind CSS: A utility-first CSS framework for rapid UI development.

JavaScript: For client-side interactivity (e.g., profile edit toggle, image preview).

Google Fonts (Inter): Modern and clean typeface.

Version Control:

Git: Distributed version control system.

GitHub: Web-based hosting service for Git repositories.

Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
Before you begin, ensure you have the following installed:

Node.js: Download & Install Node.js (includes npm)

MongoDB: Download & Install MongoDB Community Server

Ensure MongoDB is running (e.g., mongod in your terminal).

Git: Download & Install Git

Installation
Clone the repository:

git clone https://github.com/Aryan-iz/Scatch.git
cd Scatch

Install backend dependencies:

npm install

Set up environment variables:
Create a .env file in the root of your project and add necessary environment variables (e.g., for database connection string, session secret, etc.).
Example .env file:

MONGODB_URI=mongodb://localhost:27017/scatchdb
SESSION_SECRET=your_super_secret_key_here

Create upload directory:
Ensure you have a directory for uploaded profile images.

mkdir -p public/uploads

Run the application:

nodemon app.js

The application should now be running on http://localhost:3000 (or your configured port).

Usage
Homepage (/): Landing page.

Shop Page (/shop): Browse products.

Cart Page (/cart): View and manage items in your shopping cart.

My Account Page (/myaccount): View and edit your profile, see your orders.

Click "Edit Profile" to toggle the edit form.

"Save Changes" will submit the form to the server.

"Cancel" will revert changes and hide the form.

Authentication:

Register for a new account.

Log in with existing credentials.

Log out.

Contributing
Contributions are welcome! If you have suggestions for improvements or find any bugs, please follow these steps:

Fork the repository.

Create a new branch (git checkout -b feature/your-feature-name).

Make your changes.

Commit your changes (git commit -m 'feat: Add new feature X').

Push to the branch (git push origin feature/your-feature-name).

Open a Pull Request.

Please ensure your code adheres to the existing style and includes appropriate tests if applicable.

License
This project is licensed under the MIT License - see the LICENSE.md file for details.

Contact
Aryan-iz - GitHub Profile

Project Link: https://github.com/Aryan-iz/Scatch
