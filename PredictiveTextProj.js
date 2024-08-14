const input = document.querySelector('#fruit'); // Selects the fruit input box
const suggestions = document.querySelector('.suggestions ul'); // Selects the dropdown menu
const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

// STEP 5
// Creat an event listener for key strokes
input.addEventListener('keyup', searchHandler); // creates the event listener that triggers the functions made to refresh and add/take away fruit after each character input

// STEP 6
// Search function used to filter through the fruit array based on a string input from the user.
function search(str) {
	let results = []; // Creates empty string for results
	const lowerCaseInput = str.toLowerCase(); // changes the input to lowercase
	const fruitOutput = fruit.filter(function(val){
		return val.toLowerCase().includes(lowerCaseInput); // function uses the user's input to filter through the fruit array by accepting a fruit value & making it lowercase, then returning the fruits that contain the user's input anywhere in the string.
	});
	results = fruitOutput; // Takes the fruitOutput and replicates it into the results array
	return results; // Returns the results of the function
}

// STEP 7	
// Displays the results list as a drop down by adding li's
function showSuggestions(results) {
	suggestions.innerHTML = ''; // clears previous suggestions
	results.forEach(function(result) {
		const li = document.createElement('li'); // creates an li element within the html for each resulting fruit in the results array
		li.textContent = result; // takes the resulting fruit(s) and puts the text into the new li
		li.className = 'suggestion-item'; // gives a class name to the new li's
		li.addEventListener('mouseover', highlightSuggestion); // Step 8 : adds mouseover event for highlighting
		li.addEventListener('mouseout', removeHighlight); // removes highlight after cursor moves off suggestion
		suggestions.appendChild(li); // appends the new li's to the suggestions div class in the html
	});
}

// this function handles the event that triggers the showSuggestions function
function searchHandler(e) {
	const searchInput = e.target.value;
	if (searchInput === '') { // this ensures that the suggestions drop down goes away when the search box is cleared
		suggestions.innerHTML = '';
		return;
	}
	const searchResults = search(searchInput);
	showSuggestions(searchResults);
}

// STEP 8
// Highlight the suggestion below a user's cursor
// functions were created to reference CSS styling
function highlightSuggestion (e) {
	e.target.classList.add('highlight');
}

function removeHighlight(e) {
	e.target.classList.remove('highlight');
}

// Step 9
// Populate the search box with a user's selected suggestion
suggestions.addEventListener('click', useSuggestion); // creates the event listener that selects a suggestion from the drop down menu and replaces the original search text with the selected suggestion in the search box

function useSuggestion(e) {
	input.value = e.target.textContent; // Replaces the input value with the new value triggered by a click event
	suggestions.innerHTML = ''; // Clears suggestions one new input is selected
}