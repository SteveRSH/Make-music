/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
// 2. Create your `submit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play


//Need to be able to enter a new 

//////////////////////////////////////////////////////////////////////////
//created an event listener for the search text and button. Need to link them in order for them to work
let musicSearch = document.querySelector("#searching");


// searching.addEventListener("click", function() {input.innerHTML = "";});
musicSearch.addEventListener("click", function(searching) {
	searching.preventDefault();

// create a variable called searching
// assign searching to the value of the input box
// make the fetch happen
// let searching = "Search"
let searchByName = document.querySelector("#searchByName").value;
fetch(`https:itunes.apple.com/search?term=${searchByName}&limit=20`)



//everything below is in working order
.then(function(goodSound) {

	// Convert to JSON
	return goodSound.json();
}).then(function(goodSound) {
	// logic to make the results show up in the browser


	//

	//added paragraph tags in order for images and names to show on different lines.

let result = document.querySelector(".results");
	//`goodSound` is a JavaScript object
	console.log(goodSound);
let searching = "";
for (let i = 0; i < goodSound.results.length; i++) {
	let Musiq = `
	<div id="tryThis">
	<p><img src="${goodSound.results[i].artworkUrl100}"></p>
	<p>Name:  ${goodSound.results[i].artistName}</p>
	<p>Album name:  ${goodSound.results[i].collectionName}</p>
	<p>Song name:  ${goodSound.results[i].trackName}</p>


	<button class="play">Play Music</button></div>`;


	// document.getElementById("theButton").addEventListener("click", function(){
    // document.getElementById("demo").innerHTML

	//ADD button after track name
	//add event listener for the button (console.log to make sure it works)
	//change functionality on the audio tag in html in src=""
searching += Musiq;
}

result.innerHTML = searching;

//NOTE querySelectorAll and querySelector gets elements from the DOM
let buttons = document.querySelectorAll('.play');

for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', function(){
		let letsPlay = document.querySelector('.music-player');
		letsPlay.src = goodSound.results[i].previewUrl;
		letsPlay.play();
	});
}

});


});



// input.innerHTML = "searching";
// fetch('https://itunes.apple.com/search?term=sting&limit=6')




//This returns the artist name
// console.log(goodSound.results[0].artistName);
// console.log(goodSound.results[0].collectionName);
// console.log(goodSound.results[1].collectionName);
//https:itunes.apple.com/search?parameterkeyvalue



// let section = document.getElementsByClassName('results')
// let search = document.getElementById('music-search')

// for (let i = 0, i < )

// for (i = 0; i < musicSelection.results.length; i++) {
//   NOTE to self, the following is just rough drafts:
//   ${musicSelection.results[i].artistName.artworkURL100.collectName.trackName}
// }

// let searching = document.querySelector("#searching");
// let selection1 = document.querySelector("#selection1");
// let selection2 = document.querySelector("#selection2");
// let selection3 = document.querySelector("#selection3");
// let selection4 = document.querySelector("#selection4");
// let selection5 = document.querySelector("#selection5");
// let selection6 = document.querySelector("#selection6");

//When the user clicks on 1 of the 6 selection (it will play)
//the = "" may need to replace
// searching.addEventListener("click", function() {input.innerHTML = "";});
//
// selection1.addEventListener("click", function() {input.innerHTML = "";});
//
// selection2.addEventListener("click", function() {input.innerHTML = "";});
//
// selection3.addEventListener("click", function() {input.innerHTML = "";});
//
// selection4.addEventListener("click", function() {input.innerHTML = "";});
//
// selection5.addEventListener("click", function() {input.innerHTML = "";});
//
// selection6.addEventListener("click", function() {input.innerHTML = "";});













// searching.addEventListener("click", function (ev) {
//   ev.preventDefault();
//   let searching = document.querySelector("music-search").value;
//   alert(searching);
//   fetch("https:itunes.apple.com/search?term=Sade")
//   //fetch('https:itunes.apple.com/search?term=${}')
//   .then (temporary1.json)
//   .then (temporary)
//   .catch (temp);
//   });


// function music(attempt) {
//   let results = tryout.json();
//   return results;
// }
//
// fetch("https:itunes.apple.com/search?term=Sade")
// .then(music);





//
// fetch("https:itunes.apple.com/search?term=Sade")
//fetch('https:itunes.apple.com/search?term=${}')
// .then(function (response) {
//         return response.json();
//       })
//   .then(function (data) {
//     console.log(data);
    //create for loops
    // });
