window.onload = async () => {
  console.log("window loaded");

  let rInput = document.getElementById("r");
  let gInput = document.getElementById("g");
  let bInput = document.getElementById("b");
  let tilesInput = document.getElementById("tiles");
  let tileSizeInput = document.getElementById("tileSize");
  let borderWidthInput = document.getElementById("borderWidth");
  let modeSelect = document.getElementById("mode");

  let goBtn = document.getElementById("go");
  let randomBtn = document.getElementById("random");
  let preview = document.getElementById("preview");

  // Randomize button
  randomBtn.addEventListener("click", () => {
    rInput.value = Math.floor(Math.random() * 256);
    gInput.value = Math.floor(Math.random() * 256);
    bInput.value = Math.floor(Math.random() * 256);
    tilesInput.value = Math.floor(1 + Math.random() * 50);
    tileSizeInput.value = Math.floor(1 + Math.random() * 20);
    borderWidthInput.value = Math.floor(Math.random() * 16);
  });

  // Generate button
  goBtn.addEventListener("click", () => {
    let params = new URLSearchParams({
      r: rInput.value,
      g: gInput.value,
      b: bInput.value,
      tiles: tilesInput.value,
      tileSize: tileSizeInput.value,
      borderWidth: borderWidthInput.value,
      mode: modeSelect.value,
    });

    let url = "https://php-noise.com/noise.php?" + params;
    console.log(url);

    // Instead of fetch, I am setting the image src to the API URL
    preview.src = url;
  });

  // Generating once on load so it doesn't start blank
  goBtn.click();
};
