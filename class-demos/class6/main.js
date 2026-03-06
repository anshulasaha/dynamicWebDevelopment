window.onload = () => {
  console.log("script is connected");

  let p5 = new p5(myCanvas);
};

const myCanvas = (sketch) => {
  //the sketch object is automaically created
  //the sketch parameter is the refernece to the p5 library that is automatically populated with whatever sketch

  let myp5 = p5(myCanvas, "canvas");
  let myp52 = p5(myCanvas, "canvas");
};

//the p5 sketch will also log and and do ebeyrhting on the sketch
