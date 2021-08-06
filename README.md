# Overview

To-Do list project serves many purposes, one of the major purposes of the To-Do List is to let the user keep track of their personal tasks as well as professional works. It helps the users organize their future tasks in order and prioritize accordingly. Making a list in the To-Do List will help the user make sure that all their tasks are written down in all-in-one place so they don’t forget anything important. It helps user to plan the task order by showing them the tasks that needs their immediate attention.
We made this decision to learn in demand MERN stack. That builds modern web applications. MERN is one of several variations of the MEAN stack (MongoDB Express Angular Node), where the traditional Angular.js frontend framework is replaced with React.js. MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack.
MongoDB - document database
Express(.js) - Node.js web framework
React(.js) - a client-side JavaScript framework
Node(.js) - the premier JavaScript web server

Express and Node make up the middle (application) tier. Express.js is a server-side web framework, and Node.js the popular and powerful JavaScript server platform.

![image](https://user-images.githubusercontent.com/54716128/128556725-1d56293a-2b39-4230-95f5-75bc8df94fe3.png)



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

