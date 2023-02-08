// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.


// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.
let imageColumn = document.querySelector(".display-image");
let songColumn = document.querySelector(".display-song");
let linkColumn = document.querySelector(".display-link");
let artistColumn = document.querySelector(".display-artist");



// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.

let songs = ["The Adults are Talking", "Brianstrom", "Swing Lynn", "Freak", "Oh Yeah, You Gonna Cry?"]
let artists = ["The Strokes", "Artic Monkeys", "Harmless", "Surf Curse", "LoveJoy"]
let images = ["https://i.ytimg.com/an/ewOPQZZn4SY/3310886337468975411_mq.jpg?v=5fc90861", "https://i.scdn.co/image/ab67616d0000b2730c8ac83035e9588e8ad34b90", "https://i.scdn.co/image/ab67616d0000b273279c10fd08546bba5039f095", "https://upload.wikimedia.org/wikipedia/en/a/a1/Freaks_Surf_Curse.jpg", "https://i1.sndcdn.com/artworks-umTDXaIFlbhyUzs7-zqwyKQ-t500x500.png"]
let links = ["https://www.youtube.com/watch?v=ewOPQZZn4SY", "https://www.youtube.com/watch?v=30w8DyEJ__0", "https://www.youtube.com/watch?v=D7DVSZ_poHk", "https://www.youtube.com/watch?v=RJnMWK9mrgQ", "https://www.youtube.com/watch?v=uDC0X3w3Cv8"]




//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.
// task 12: create an object for each of your songs.
// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.



//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.





function addSongInfo() {

// task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.
let imageInput = image.value
let songInput = songName.value
let artistInput = artist.value
  let songLinkInput = songLink.value
// task 10: use `.push()` to add each input value to the correct array.
images.push(imageInput)
artists.push(artistInput)
songs.push(songInput)
links.push(songLinkInput)
}




/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  songColumn.innerHTML = "";
  artistColumn.innerHTML = "";
  linkColumn.innerHTML = "";
  imageColumn.innerHTML = "";
}




function displaySongInfo() {

// task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.
images.forEach(function (image){
imageColumn.insertAdjacentHTML("beforeend", `<p><img src="${image}"></p>`)
});

  songs.forEach(function (song){
songColumn.insertAdjacentHTML("beforeend", `<p>${song}</p>`)
});

  artists.forEach(function (art){
artistColumn.insertAdjacentHTML("beforeend", `<p>${art}</p>`)
});

  links.forEach(function (link){
linkColumn.insertAdjacentHTML("beforeend", `<a href="${link}">Listen</a></p>`)
});
}





// click event to add and display songs
add.onclick = function() {
  emptyDisplay();
  addSongInfo();
  displaySongInfo();
};

// function call to display stored songs
displaySongInfo();
