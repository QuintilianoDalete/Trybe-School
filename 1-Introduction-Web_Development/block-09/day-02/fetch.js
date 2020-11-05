// WITHOUT ASYNC
const fetch = require('node-fetch');

function verifiedFetch(url) {
  return new Promise((resolve, reject) => {
    if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
      fetch(url)
        .then((r) => r.json())
        .then((r) => resolve(r.value)); // Whith async this resolve will become a return...
    } else {
      reject(new Error('endpoint não existe')); // ...And this reject will become a throw.
    }
  });
}

function sendJokeToFriend(name) {
  const message = verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
    .catch((err) => err);
  console.log(message);
}

sendJokeToFriend("Anna")

//********************************************************************************************************************//

// WITH ASYNC: This function transform any function in a promisse. Continue...
const fetch = require('node-fetch');

async function verifiedFetch(url) { // ...We just need put the async before the function definition...
  if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
    return fetch(url) // ...Now is just transform 'resolve' in 'return'...
      .then((r) => r.json())
      .then((r) => r.value);
  }
  throw new Error('endpoint não existe'); // ...And 'reject' in throw. Now out promisse with async is ready.
}

function sendJokeToFriend(name) {
  const message = verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
    .catch((err) => err);
  console.log(message);
}

sendJokeToFriend("Anna")

//********************************************************************************************************************//
// sendJokeToFriend() with async
async function sendJokeToFriend(name) {
  const message = await verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev') // The function await just...
  // ...Just can be used inside a function with async.
    .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
    .catch((err) => err);
  console.log(message);
}

sendJokeToFriend("Anna")