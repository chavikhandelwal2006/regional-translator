let data = {};

fetch('data.json')
  .then(response => response.json())
  .then(json => data = json);

function translateText() {
  let input = document.getElementById("inputText").value.toLowerCase();
  let lang = document.getElementById("language").value;

  if (data[input]) {
    document.getElementById("output").textContent = data[input][lang];
  } else {
    document.getElementById("output").textContent = "Translation not found";
  }
}
