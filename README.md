# Express JWT Example

I made repo to play around with implementing Authentication in Express to
require a JWT token for non-user controller methods.

For Books, I'm using Passport in `./index.js` to require authorization for all
Book routes. For Comments, I'm using `./routes/comment.js` to require
authorization for only one of the Comment routes.

I have to do more research on the best practices, but it works so I wanted to
share it as an example.

## Resources

- [Our JWT authentication lesson](https://git.generalassemb.ly/dc-wdi-react-redux/react-jwt-authentication)
- [An article that heavily influenced our lesson](https://blog.jscrambler.com/implementing-jwt-using-passport/)
- [A solid Medium article on the subject](https://medium.com/@therealchrisrutherford/nodejs-authentication-with-passport-and-jwt-in-express-3820e256054f)
