"use strict";
/** Server side Express router providing concert related routes
 * @module routes/concert
 * @requires express
 */

/**
 * express module
 * @const
 */
const express = require("express");

/**
 * Express router to mount concert related functions on.
 * @type {object}
 * @const
 * @namespace concertRouter
 */
let concertRouter = express.Router();

const concertController = require("../controllers/ConcertController");

/**
 * Route to get concert events
 * @name /
 * @function
 * @memberof module:routes/concert~concertRouter
 * @inner
 * @param {string} metro_area - Metro area ID to search by
 * @returns {JSON} - A json object containing a list of concert events
 */
concertRouter.get("/", concertController.getConcerts);

/**
 * Route to delete concerts
 * @name /all/delete
 * @function
 * @memberof module:routes/concert~concertRouter
 * @inner
 */
concertRouter.get("/all/delete", concertController.deleteAll);

module.exports = concertRouter;
