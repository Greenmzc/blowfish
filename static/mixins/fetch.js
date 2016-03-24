require('whatwg-fetch');

function ajax (url, { method = 'GET', headers = { 'Content-Type': 'application/json' }, body = '' } = {}) {
  return fetch(url, {
    method: method,
    headers: headers,
    body: body
  })
  .then(response => response.json());
}

module.exports = ajax;
