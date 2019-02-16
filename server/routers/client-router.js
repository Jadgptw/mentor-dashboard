const { Router } = require('express');

const asyncHandler = require('../utils');

const clientRouter = new Router();

clientRouter.get(
  '/me',
  asyncHandler(async (req, res) => {
    res.send(req.user);
  }),
);

module.exports = clientRouter;
