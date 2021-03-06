import * as api from "../api";

/** Actions
 * @module actions
 * @requires api
 * @description Client side action dispatcher for global state/store changes
 */

/**
 * @description Action dispatcher to get username
 * @name getUsername
 * @function
 * @memberof module:actions
 */
export function getUsername(cb) {
  return (dispatch, prevState) => {
    api
      .getUsername()
      .then(response => dispatch({ name: response, type: "GET_USER_NAME" }))
      .then(() => {
        if (cb) cb();
      })
      .catch(error => console.error("Error in getUsername: " + error));
  };
}

/**
 * @description Action dispatcher to create/login user
 * @name loginUser
 * @function
 * @memberof module:actions
 */
export function loginUser(code) {
  return (dispatch, prevState) => {
    api
      .authorize(code)
      .then(response => dispatch({ user: response, type: "LOGIN" }))
      .catch(error => console.error("Error in loginUser: " + error));
  };
}

/**
 * @description Action dispatcher to get logged in user
 * @name getLoggedInUser
 * @function
 * @memberof module:actions
 */
export function getLoggedInUser(cb) {
  return (dispatch, prevState) => {
    api
      .authorize()
      .then(response =>
        dispatch({ user: response, type: "GET_LOGGED_IN_USER" })
      )
      .then(() => {
        if (cb) cb();
      })
      .catch(error => console.error("Error in getLoggedInUser: " + error));
  };
}

/**
 * @description Action dispatcher to get concerts
 * @name getConcerts
 * @function
 * @memberof module:actions
 */
export function getConcerts(cb) {
  return (dispatch, prevState) => {
    api
      .getConcerts()
      .then(response => dispatch({ concerts: response, type: "GET_CONCERTS" }))
      .then(() => {
        if (cb) cb();
      })
      .catch(error => console.log("Error in getConcerts: " + error));
  };
}

/**
 * @description Action dispatcher to get matches
 * @name getMatches
 * @function
 * @memberof module:actions
 */
export function getMatches(cb) {
  return (dispatch, prevState) => {
    api
      .getMatches()
      .then(response => dispatch({ matches: response, type: "GET_MATCHES" }))
      .then(() => {
        if (cb) cb();
      })
      .catch(error => console.log("Error in getMatches: " + error));
  };
}

/**
 * @description Action dispatcher to match user
 * @name matchUser
 * @function
 * @memberof module:actions
 */
export function matchUser(userToMatchWithId, cb) {
  return (dispatch, prevState) => {
    api
      .makeMatch(userToMatchWithId)
      .then(response => dispatch({ matchResult: response, type: "MATCH" }))
      .then(() => {
        if (cb) cb();
      })
      .catch(error => console.log("Error in matchUser: " + error));
  };
}

/**
 * @description Action dispatcher to match user with concert
 * @name matchUserWithConcert
 * @function
 * @memberof module:actions
 */
export function matchUserWithConcert(concertToMatchWithId, cb) {
  return (dispatch, prevState) => {
    api
      .makeConcertMatch(concertToMatchWithId)
      .then(response =>
        dispatch({ matchResult: response, type: "MATCH_CONCERT" })
      )
      .then(() => {
        if (cb) cb();
      })
      .catch(error => console.log("Error in matchUserWithConcert: " + error));
  };
}

/**
 * @description Action dispatcher to get people
 * @name getPeople
 * @function
 * @memberof module:actions
 */
export function getPeople(cb) {
  return (dispatch, prevState) => {
    api
      .getPeople()
      .then(response => dispatch({ people: response, type: "GET_PEOPLE" }))
      .then(() => {
        if (cb) cb();
      })
      .catch(error => console.log("Error in getPeople: " + error));
  };
}

/**
 * @description Action dispatcher to get user concerts
 * @name getUserConcerts
 * @function
 * @memberof module:actions
 */
export function getUserConcerts(cb) {
  return (dispatch, prevState) => {
    api
      .getUserConcerts()
      .then(response =>
        dispatch({ concerts: response, type: "GET_USER_CONCERTS" })
      )
      .then(() => {
        if (cb) cb();
      })
      .catch(error => console.log("Error in getUserConcerts: " + error));
  };
}
