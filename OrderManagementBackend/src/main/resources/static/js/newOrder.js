let host = 'http://localhost:8080/v1';

// document.addEventListener("click", cancelOrder)
// let formData = JSON.stringify(document.getElementById)

const form = document.forms.namedItem("newOrder");
form.addEventListener('submit', function(ev) {

    // const oOutput = document.querySelector("div"),
    const formData = new FormData(form);
    const xhttp = new XMLHttpRequest();
    xhttp.open('POST', host + '/orders/new2', true);
    xhttp.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    
    var object = {};
    formData.a
    formData.forEach(function(value, key) {
        object[key] = value;
        console.log(key + "  " + value)
    });
    xhttp.send('[' + JSON.stringify(object) + ']');
    ev.preventDefault();
  }, false);    

  function addProduct() {

    var container = document.createElement("div")

    var name = document.createElement("input");
    name.setAttribute("placeholder", "Product Name");
    name.setAttribute("type", "text");
    name.setAttribute("placeholder", "Product Name");

    var price = document.createElement("input");
    price.setAttribute("placeholder", "Price USD");
    price.setAttribute("type", "number");
    price.setAttribute("step", "0.01");
    price.setAttribute("min", "0.01");
    
    var manufacturer = document.createElement("input");
    manufacturer.setAttribute("placeholder", "Manufacturer")
    manufacturer.setAttribute("type", "text");

    container.appendChild(name);
    container.appendChild(price);
    container.appendChild(manufacturer);

    var form = document.querySelector("#newOrder");
    form.appendChild(container);
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