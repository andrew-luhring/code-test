
# Requirements

- [ ]  When an invalid email address is submitted, the request will not succeed, 
- [ ]  and the user is aware of this cause.
- [ ]  When no email address is submitted, the request will not succeed, and the user is aware of this 
cause.
- [ ]  When a valid email address is submitted, the request will be sent to localhost:8000/join with 
- [ ]  the documented request signature and can expect the document request response signature.
- [ ]  When a user who submits a valid email address returns the the view, it will not prompt them for 
email submission again.
- [ ]  A user is permitted to disregard the second stage of the message. Once completed, 
the user should not see this message again.
- [ ]  The service at localhost:8000 does not need to function, but please indicate where this request 
is managed and mock the response so the expected payload is returned.


## Request signatures

- [ ]  Send: POST, email={email}

- [ ]  Response: {"id": int, "email": string}
