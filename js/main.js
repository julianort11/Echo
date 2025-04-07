const clientId = '3fa44e2553984c5996203a70c90218db';
const clientSecret = 'a5eff147f309429a98184f69555ef014'; 

async function getAccessToken() {
    const result = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
      },
      body: 'grant_type=client_credentials'
    });
  
    const data = await result.json();
    return data.access_token;
  }
  