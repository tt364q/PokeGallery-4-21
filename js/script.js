// IPO Input -> Process -> Output

// Constants and State Variables (Data)

// Constant Data
const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

// State Data
let pokemonData;

// Cached Element References
const $collection = $("#collection");

// Attached Event Listeners
$collection.on("click", "article.card", handleClick);

// Functions

// called immediately

init();

function init() {
  getData();
}

function getData() {
  // fetch data using AJAX
  $.ajax(BASE_URL).then(
    function (data) {
      // take returned data and assing it to a global state variable
      pokemonData = data;
      // call render to visualize it to the DOM
      render();
    },
    function (error) {
      console.log("Error: ", error);
    }
  );
}

function handleClick() {
  alert("a card was clicked");
}

function render() {
  // map over the objects inside of the pokemonData results array
  // dynamically generate html for each element in the array
  // add the html to our collection element
  const htmlArray = pokemonData.results.map((pokemon) => {
    return `<article class="flex-ctr card">
      <h3>${pokemon.name}</h3>
    </article>`;
  });

  $collection.html(htmlArray);
}
