import redirectToLogin from './redirectToLogin';

/**
 * Handle api status codes
 * @param {number} code - api status code
 * @returns {boolean}
 *
 * Return true to exit the request
 */
export default (code) => {
  switch (code) {
  case 204:
    return true;
  case 401:
    redirectToLogin();
    return true;
  default:
    return false;
  }
};
