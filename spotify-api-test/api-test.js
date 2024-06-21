const token =
  "BQA-jSb3DOBBJRECBqALU4r6ECSKiLlC-d7gZw6MexM-j1cbyRGeA0SrYYs-OVHB55G5dqItDq7BGwsY5oXuBRjyUfA17GOfNSY8XoDf6Mzag8vu794";

async function fetchWebApi(endpoint, method) {
  const res = await fetch(`https://api.spotify.com/v1${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
  });
  return await res.json();
}

async function getUserPlaylists(id) {
  const res = await fetchWebApi(`/users/${id}/playlists`, "GET");
  //   console.log(res.tracks.items[0].track.artists);
  console.log(res);
}

userID = "comrade_92";
getUserPlaylists(userID);

