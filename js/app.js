const container = document.querySelector(".container");
const coffees = [
  { name: "Griggs", image: "images/griggs_1.jpg" },
  { name: "Voluptatem", image: "images/griggs_2.jpg" },
  { name: "Explicabo", image: "images/griggs_3.jpg" },
  { name: "Rchitecto", image: "images/griggs_4.jpg" },
  { name: " Beatae", image: "images/griggs_5.jpg" },
  { name: " Vitae", image: "images/griggs_6.jpg" },
  { name: "Inventore", image: "images/griggs_23.jpg" },
  { name: "Veritatis", image: "images/griggs_30.jpg" },
  { name: "Accusantium", image: "images/griggs_35.jpg" }
];

const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Taste</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
