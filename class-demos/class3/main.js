//shows when web page opens

alert("javascript is hereeeeeeeee");

//write to inspector console

console.log("this is a console message");

console.log("doing it again");

//this is an anonymous function
//window.onload is an event
//this is making the browser to finish loading eveyrthing this function is finsihing loading eveyrthing that the document is loaded before we move on to intercativity with javascript
window.onload = async () => {
  console.log("window has loaded");

  //retrives a specific elemnt using the 'id' from the html document
  document.getElementById("important");

  //manipulate the text of the selected element
  //innerHTML is saying "replace everything inside this element with this HTML content"
  //which is different from textContent which says "whatever is here just copy it to that character by character"
  document.getElementById("important").innerHTML =
    "i have <span>chnaged</span> this with javascript";

  //we can store the longdocument text inside the variable
  let importantParagraph = document.getElementById("important");
  //we can manipulate the style and grab any css attribute, but the name of the property uses camel case instead of hyphens
  importantParagraph.style.backgroundColor = "#acfa70";

  importantParagraph.classList.add("hide");
  importantParagraph.classList.remove("hide");

  //adding elements to html using js
  //4 steps
  //1. getting the element that we will add a child to
  let c = document.getElementById("container");
  //2. what type of tag will we create
  let i = document.createElement("img");
  //3. modify new element as needed
  i.src =
    "https://justcook.butcherbox.com/wp-content/uploads/2019/11/Perfect-Pan-Seared-Ribeye-Steak.jpg";
  //4. add the new child to the parent
  c.appendChild(i);

  //EVENT LISTENER TIME !!!!!!
  //syntax - elementSelector.addEventListener(eventName, callbackFunction)
  //adding an event listener to the div
  //addEventListener is a function that takes two parameters
  //1. name of the event
  //2. callback function
  //its like saying "hey when click happens do this fucntion"
  c.addEventListener("click", () => {
    console.log("clicked!");

    if (importantParagraph.classList.contains("hide")) {
      importantParagraph.classList.remove("hide");
    } else {
      importantParagraph.classList.add("hide");
    }
  });

  let blues = document.getElementsByClassName("blue");
  console.log("blues");
  blues[1].style.backgroundColor = "skyBlue";

  //This is where you start building your API

  //start contructing your URL
  //making an API request
  //step 1 . create url params (everything after the ?)
  let params = new URLSearchParams({
    apikey: "1154c07f",
    s: "one battle after another",
    type: "movie",
  });

  //Step 2 create the url
  let url = "http://omdbapi.com/?" + params;
  console.log(url);

  //Step 3 make the request to the url using fetch
  let response = await fetch(url);
  console.log(response);

  let jsonData = response.json(); //shoudl it be await response.json();????
  console.log(jsonData);
};

//const functionName = () => {} ------- This is the general syntax
//await and async keywords have to be used with other otherwise they wont
// we wont need them if we just just using the web page with html
