function loginWithSpotify() {
  const clientId = '536e313b848f41479c43d0d0b99252d3';
  const redirectUri = 'https://open.spotify.com/';

  const scopes = [
    'user-read-private',
    'user-read-email',
    'playlist-read-private'
  ];

  const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token`;

  window.location.href = authUrl;
}

function handleCallback() {
    const hash = window.location.hash.substr(1);
    const tokenParams = new URLSearchParams(hash);
    const accessToken = tokenParams.get('access_token');
  
    localStorage.setItem('spotifyAccessToken', accessToken);
  
    // Redirect to the main page
    window.location.href = '/index.html';
  }

  // Creating a new worker
const worker = new Worker('worker.js');

// Sending a message to the worker
worker.postMessage('hello');

// Listening to messages from the worker
worker.onmessage = function(event) {
  console.log('Message received from worker:', event.data);
};

// In the worker.js file
self.onmessage = function(event) {
  const data = event.data;
  // Do some time-consuming task
  const result = computeResult(data);
  // Send the result back to the main thread
  self.postMessage(result);
};

  