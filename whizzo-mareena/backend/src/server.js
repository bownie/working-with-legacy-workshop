// simple node web server that displays hello world
// optimized for Docker image
const express = require("express");

// this example uses express web framework so we know what longer build times
// do and how Dockerfile layer ordering matters. If you mess up Dockerfile ordering
// you'll see long build times on every code change + build. If done correctly,
// code changes should be only a few seconds to build locally due to build cache.

const morgan = require("morgan");
// morgan provides easy logging for express, and by default it logs to stdout
// which is a best practice in Docker. Friends don't let friends code their apps to
// do app logging to files in containers.

// Database API via knex
//
const database = require("./database");

// Appi
const app = express();

const bodyParser = require('body-parser'); // middleware

app.use(morgan("common"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(req, res, next) {
  database.raw('select VERSION() version')
    .then(([rows, columns]) => rows[0])
    .then((row) => res.json({ message: `Hello from MySQL ${row.version}` }))
    .catch(next);
});

app.get('/marina', async function(request, response) {
  try {
    const marina = await database('wb_marina').select();
    response.status(200).json({ marina: marina});
  } catch(error) {
    response.status(500).json({ error: "ERROR 500" });
  }
});


// Some URLS used to create this authentication:
//
// https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications
// https://heynode.com/tutorial/process-user-login-form-expressjs/
// https://stackoverflow.com/questions/56561205/how-to-send-x-www-form-urlencoded-request-by-react
//
//
app.use('/login', (req, res) => {
  let username = req.body.username;

  // Check for user/pass here and return user if it's ok
  //
  res.send({
    token: username
  });
});

app.get('/boats', async (request, response) => {
  try {
    const boats = await database('wb_boat').select();
    response.status(200).json({ boats: boats});
  } catch(error) {
    response.status(500).json({ error: "ERROR 500" });
  }
});

app.get('/customers', async (request, response) => {
  try {
    const customers = await database('wb_customer').select();
    response.status(200).json({ customers: customers});
  } catch(error) {
    response.status(500).json({ error: "ERROR 500" });
  }
});

app.get('/bookings', async function(request, response) {

  try {
    const bookings = await database('wb_bookings_vw').select();
    response.status(200).json({ bookings: bookings});
  } catch(error) {
    response.status(500).json({ error: "ERROR 500" });
  }
});

app.get("/healthz", function(req, res) {
  // do app logic here to determine if app is truly healthy
  // you should return 200 if healthy, and anything else will fail
  // if you want, you should be able to restrict this to localhost (include ipv4 and ipv6)
  res.send("I am happy and healthy\n");
});

module.exports = app;
