window.onload = () => {
  careRequest();
};

const careRequest = async () => {
  const response = await fetch("/all-entries");
  const json = await response.json();

  const container = document.getElementById("cares");
  if (!container) return;

  container.innerHTML = "";

  let cares = json.entries;

  if (document.body.classList.contains("entriesPage")) {
    for (let c of cares) {
      let card = document.createElement("div");
      let number = document.createElement("p");
      let careOne = document.createElement("p");
      let careTwo = document.createElement("p");

      card.classList.add("careCard");
      number.classList.add("careNumber");
      careOne.classList.add("careOne");
      careTwo.classList.add("careTwo");

      number.textContent = `(${c.serialNumber})`;
      careOne.textContent = c.careOne;
      careTwo.textContent = c.careTwo;

      card.appendChild(number);
      card.appendChild(careOne);
      card.appendChild(careTwo);

      container.appendChild(card);
    }
  } else {
    for (let c of cares) {
      let care = document.createElement("p");
      let highlight = document.createElement("mark");

      highlight.textContent = `(${c.serialNumber}) ${c.careOne} AND ${c.careTwo}`;

      care.appendChild(highlight);
      container.appendChild(care);
    }
  }
};
