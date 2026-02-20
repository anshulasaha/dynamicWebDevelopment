window.onload = () => {
  loadMoments();
};

const loadMoments = async () => {
  const response = await fetch("/all-moments");
  const data = await response.json();

  let container = document.getElementById("moments");

  for (let m of data.moments) {
    let block = document.createElement("p");
    block.textContent = m.event + " | felt: " + m.felt + " | rating: " + m.rating;
    container.appendChild(block);
  }
};
