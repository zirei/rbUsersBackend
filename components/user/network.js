const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.post('/', function (req, res) {
  controller.addUser(req.body.userID, req.body.name, req.body.biciID)
    .then(biciData => {
      response.success(req, res, biciData, 201);
    })
    .catch(err => {
      response.error(req, res, 'Internal error', 500, err);
    });
});

router.get('/', function (req, res) {
  controller.listUsers()
    .then(bicis => {
      response.success(req, res, bicis, 200);
    })
    .catch(err => {
      response.error(req, res, 'Internal error', 500, err);
    });
});

router.get('/:id', function (req, res) {
  controller.getUserByID(req.params.id)
    .then(user => {
      response.success(req, res, user, 200);
    })
    .catch(err => {
      response.error(req, res, 'Internal error', 500, err);
    });
});

router.put('/:id', function (req, res) {
  controller.updateUser(req.params.id, req.body.userID, req.body.name, req.body.biciID)
    .then(biciData => {
      response.success(req, res, biciData, 200);
    })
    .catch(err => {
      response.error(req, res, 'Internal error', 500, err);
    });
});

router.delete('/:id', function (req, res) {
  controller.deletUserByID(req.params.id)
    .then(biciData => {
      response.success(req, res, biciData, 204);
    })
    .catch(err => {
      response.error(req, res, 'Internal error', 500, err);
    });
});

module.exports = router;