require('whatwg-fetch');

function ajax (url,
  {
    method = 'GET',
    credentials = 'same-origin',
    headers = { 'Content-Type': 'application/json' },
    body = ''
  } = {}) {
  return fetch(url, {
    credentials: credentials,
    method: method,
    headers: headers,
    body: body
  })
  .then(response => response.json());
}

module.exports = ajax;
