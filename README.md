# Todo-Backend

The backend of the todo application.


## Express.js

Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.

## Dependencies

- cors
- joi
- jsonwebtoken
- mongoose
- nodemailer

## Brief Project Structure Overview

We are using API based backend. The frontend connects to the database via API.

The backend can be divided into three major sections:

1.	Routes
React DOM router handles everything react routing. 

	a.	Auth

	The Auth route handles everything auth. 
	-	 Logging In

	Return JWT on successfully log in.

	-	Signing Up

	Talk with user repository and add a user to Mongo DB.


	b.	Email

	Handles email sending API endpoints.

	c.	Todo

	Handles every API route related to Adding, Editing, Creating and Deleting Todos.

2.	Repositories and Controller

They are direct communicators with the database.

## Team Members

- Abenezer B. Nuro
- Abram Pizarro
- Binayak Gaire
- Hamza Vohra
- Sanjaya KC
- Silas Tamang

