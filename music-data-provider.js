// Your Spotify API credentials
const clientID = 'e7c3452329424393a652b5bc12780cb1'; // Replace with your actual Client ID
const clientSecret = '3c159a3e67c84e12ad531c9bc2503769'; // Replace with your actual Client Secret

// Function to get the access token using Client Credentials Flow
async function fetchAccessToken() {
    const url = 'https://accounts.spotify.com/api/token';
    const headers = {
        'Authorization': 'Basic ' + btoa(clientID + ':' + clientSecret),
        'Content-Type': 'application/x-www-form-urlencoded'
    };
    const body = new URLSearchParams();
    body.append('grant_type', 'client_credentials');

    const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: body
    });

    const data = await response.json();
    console.log(data.access_token);
    return data.access_token;  // Return the access token
}

// Function to search for an artist and get the artist ID
async function fetchArtistIdByName(artistName, accessToken) {
    //const accessToken = await fetchAccessToken();  // Get the access token

    const url = `https://api.spotify.com/v1/search?q=${encodeURIComponent(artistName)}&type=artist&limit=1`;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        },
    });

    if (response.ok) {
        const data = await response.json();
        const artist = data.artists.items[0]; // Get the first artist in the search results

        if (artist) {
            console.log('Artist ID:', artist.id);  // Log the artist ID to the console
            return artist.id;  // Return the artist ID
        } else {
            console.log('Artist not found');
            return null;  // If no artist is found, return null
        }
    } else {
        console.error('Failed to search for artist:', response.status);
        return null;
    }
}

// Function to fetch artist info from Spotify API
async function fetchArtistInfo(artistId, accessToken) {
    try {
        //const accessToken = await fetchAccessToken();

        // Replace with the Spotify artist ID you want to fetch
        //const artistId = '6qqNVTkY8uBg9cP3Jd7DA';  // Example: Drake's Spotify Artist ID
        const url = `https://api.spotify.com/v1/artists/${artistId}`;

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });

        if (response.ok) {
            const artistData = await response.json();
            console.log(artistData.name);
            return artistData;
        } else {
            console.error('Failed to fetch artist data:', response.status);
            document.getElementById('div-info').innerHTML = '<p>Error fetching artist data.</p>';
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('div-info').innerHTML = '<p>Error fetching artist data.</p>';
    }
}
