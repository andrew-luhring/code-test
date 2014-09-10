Coding Exercise
=============

When given the provided high-fidelity comp, create a code solution that satisfied the responsbilities mentioned.

Provide a code sample that utilizes AngularJS components to manage the transitions and any build operations. Do not commit compiled JS or CSS.

Please consider how to deal with transferring responsibility from markup initially rendered by the server side application to client solution, how to handle validation of email address, how to track user activity such that users are not prompted to enter email after successfully completing the task once, how would the design further respond when the viewport reduces in size.

Stage 1
-----------

![top-nav](http://packback-devops.s3.amazonaws.com/opt-in-stage1.png)

Stage 2
-----------

![top-nav](http://packback-devops.s3.amazonaws.com/opt-in-stage2.png)

Expectations
-----------

- When an invalid email address is submitted, the request will not succeed, and the user is aware of this cause.
- When no email address is submitted, the request will not succeed, and the user is aware of this cause.
- When a valid email address is submitted, the request will be sent to localhost:8000/join with the documented request signature and can expect the document request response signature.
- When a user who submits a valid email address returns the the view, it will not prompt them for email submission again.
- A user is permitted to disregard the second stage of the message. Once completed, the user should not see this message again.
- The service at localhost:8000 does not need to function, but please indicate where this request is managed and mock the response so the expected payload is returned.

Request signatures
-----------

Send: POST, email={email}

Response: {"id": int, "email": string}

Please submit the project by 5pm on Monday 9/15, and feel free to contact me (steven@packback.co) with any questions.
