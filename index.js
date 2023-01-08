let button = document.querySelector("#button");

function buttonClicked() {
  //console.log("button clicked");
  axios
    .get("https://swapi.dev/api/planets/?search=alderaan")
    .then((response) => {
      //console.log(response.data);
      for (let i = 0; i < response.data.results[0].residents.length; i++) {
        //console.log(response.data.results[0].residents[i]);

        axios.get(response.data.results[0].residents[i]).then((response) => {
          console.log(response.data.name);
          let main = document.querySelector("main");
          let newHeader = document.createElement("h2");
          newHeader.textContent = response.data.name;
          main.appendChild(newHeader);
        });
      }
    });
}
button.addEventListener("click", buttonClicked);

//results[0].residents
