function myFunction() {
  var x = document.getElementById("whatAmI");
  if (x.innerHTML === "Digital Marketeer") {
    x.innerHTML = "E-commerce Entrepreneur";
  } else if (x.innerHTML === "E-commerce Entrepreneur") {
    x.innerHTML = "Performance Marketeer";
  } else if (x.innerHTML === "Performance Marketeer") {
    x.innerHTML = "Digital Strategist";
  } else if (x.innerHTML === "Digital Strategist") {
    x.innerHTML = "Sales and Account Manager";
  } else if (x.innerHTML === "Sales and Account Manager") {
    x.innerHTML = "Coding enthusiast";
  } else if (x.innerHTML === "Coding enthusiast") {
    x.innerHTML = "Friend";
  } else {
    x.innerHTML = "Digital Marketeer";
  }
}
