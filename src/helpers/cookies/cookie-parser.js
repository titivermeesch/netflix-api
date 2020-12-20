/**
 * Get array of different cookies back. A multi-cookie string is structured like cookie/ncookie/ncookie...
 *
 * @param {string} cookieString
 */
const parseMultiCookieString = cookieString => {
  return cookieString.split('\n')
}

export { parseMultiCookieString }
