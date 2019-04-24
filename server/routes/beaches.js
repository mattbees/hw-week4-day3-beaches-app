var express = require('express');
var router = express.Router();
const SqlRunner = require('../db/sql_runner');

/* GET beaches listing. */
router.get('/', function(req, res) {
  SqlRunner.run("SELECT * FROM beaches ORDER BY name ASC").then(result => {
    res.status(200).json(result.rows);
  });
});

// GET one beach
router.get('/:id', function(req, res) {
  SqlRunner.run("SELECT * FROM beaches WHERE id = $1", [req.params.id]).then(
    result => {
      res.status(200).json(result.rows);
    }
  );
});

// // POST to create a new user
router.post('/', function(req, res) {
  SqlRunner.run("INSERT INTO beaches (name, grid_ref, swell_frequency, sea_id) VALUES ($1, $2, $3, $4)", [
    req.body.name,
    req.body.grid_ref,
    req.body.swell_frequency,
    req.body.sea_id
  ]).then((result) => {
    res.status(201).json(result);
  });
});

// PUT to amend a new user with id of :id
router.put('/:id', function(req, res) {
  SqlRunner.run("UPDATE beaches SET name=$1, grid_ref=$2, swell_frequency=$3, sea_id=$4 WHERE id=$5", [    req.body.name,
  req.body.grid_ref,
  req.body.swell_frequency,
  req.body.sea_id,
  req.params.id])
    .then((result) => {
      res.status(200).json(result);
    });
  });

  // DELETE to delete a beach
  router.delete('/:id', function(req, res) {
    SqlRunner.run("DELETE FROM beaches WHERE id = $1", [req.params.id]).then(
      result => {
        res.status(200).json(result);
      }
    );
  });


module.exports = router;
