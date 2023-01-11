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

const database = require("./database");

// Appi
const app = express();

app.use(morgan("common"));

app.get("/", function(req, res, next) {
  database.raw('select VERSION() version')
    .then(([rows, columns]) => rows[0])
    .then((row) => res.json({ message: `Hello from MySQL ${row.version}` }))
    .catch(next);
});

app.get("/marina", function(req, res, next) {
  database.raw('select * from wb_marina')
  .then(([rows, columns]) => rows[0])
  .then((row) => res.json({ message: `${row.id},${row.marina_name},${row.marina_address1}` }))
  .catch(next);
})

app.get("/boats", function(req, res, next) {
  database.raw('select * from wb_boat')
  .then(([rows, columns]) => rows[0])
  .then((row) => res.json({ message: `${row.id},${row.boat_name},${row.boat_beam}, ${row.boat_creation_date}, ${row.boat_latest_update}, ${row.boat_owner_ids}` }))
  .catch(next);
})

app.get("/healthz", function(req, res) {
  // do app logic here to determine if app is truly healthy
  // you should return 200 if healthy, and anything else will fail
  // if you want, you should be able to restrict this to localhost (include ipv4 and ipv6)
  res.send("I am happy and healthy\n");
});

module.exports = app;
