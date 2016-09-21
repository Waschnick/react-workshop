/**
 * Utility functions
 *
 */

//
// Utility functions for HTTP Methods get, post, ...
// See: https://github.com/mzabriskie/axios
//

import axios from "axios";

// [1] Returns a promise

export const fetch = (url) => {
  return axios.get(url); // [1]
};

export const post = (url, data, config) => {
  return axios.post(url, data, config); // [1]
};
