require("dotenv").config();
const express = require("express");
const connectToDB = require("./database/db");
const jwt = require("express-jwt");
const jwtAuthz = require("express-jwt-authz");
const jwksRsa = require("jwks-rsa");

const app = express();

// connectToDB();

app.use(express.json());

// Authorization middleware. When used, the
// Access Token must exist and be verified against
// the Auth0 JSON Web Key Set
const checkJwt = jwt({
    // Dynamically provide a signing key
    // based on the kid in the header and
    // the signing keys provided by the JWKS endpoint.
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://vv-dev.eu.auth0.com/.well-known/jwks.json`
    }),

    // Validate the audience and the issuer.
    audience: 'http://localhost:8080/api',
    issuer: [`https://vv-dev.eu.auth0.com/`],
    algorithms: ['RS256']
  });

const PORT=process.env.PORT || 5000;

app.get("/api", (req, res) => {
    res.json({
        message: "Welcome to the public vv API",
    });
});

app.get('/api/private', checkJwt, function(req, res) {
    res.json({
      message: 'Hello from a private endpoint! You need to be authenticated to see this.'
    });
  });

app.listen(PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
);