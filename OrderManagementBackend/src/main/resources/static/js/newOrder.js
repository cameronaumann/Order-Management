let host = 'http://localhost:8080/v1';
let numberOfProducts = 1;



const form = document.forms.namedItem("newOrder")
form.addEventListener('submit', function(ev) {
    const formData = new FormData(form);
    const xhttp = new XMLHttpRequest();
    xhttp.open('POST', host + '/orders/new2', true);
    xhttp.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    var arr = [];
    for (var x = 0; x < numberOfProducts; x++) {
      var object = {};
      formData.forEach(function(value, key) {
          object[key] = value;
      });
      arr.push(object);
    }
    xhttp.send(JSON.stringify(arr));
    ev.preventDefault();
    window.location.replace("http://localhost:8080/html/manager.html");
  }, false);    

  function addProduct() {
    numberOfProducts++;

    var div = document.createElement("div");
    div.setAttribute("class", "formDiv");
    var name = document.createElement("input");
    name.setAttribute("name", "name");
    name.setAttribute("placeholder", "Product Name");
    name.setAttribute("type", "text");
    name.setAttribute("placeholder", "Product Name");

    var price = document.createElement("input");
    price.setAttribute("name", "price");
    price.setAttribute("placeholder", "Price USD");
    price.setAttribute("type", "number");
    price.setAttribute("step", "0.01");
    price.setAttribute("min", "0.01");
    
    var manufacturer = document.createElement("input");
    manufacturer.setAttribute("name", "manufacturer");
    manufacturer.setAttribute("placeholder", "Manufacturer")
    manufacturer.setAttribute("type", "text");

    div.appendChild(name);
    div.appendChild(price);
    div.appendChild(manufacturer);
    // div.appendChild(form);

    var outer = document.querySelector("#newOrder");
    outer.appendChild(div);
  }
// -------------------------------------------------------
// let submitButton = document.querySelector('#submit');
// submitButton.addEventListener("onclick", newOrder());


// function newOrder() {

//     var xhttp = new XMLHttpRequest();
//     xhttp.open('POST', host + '/orders/new2');
//     xhttp.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
//     var formElement = document.querySelector("#newOrder");
//     var formData = new FormData(formElement);
//     formData.append()
//     xhttp.send(JSON.stringify(object));
// }

function returnToDisplay() {
    // todo
}