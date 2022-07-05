let host = 'http://localhost:8080/v1';
let numberOfProducts = 1;
let formNumber = 1;



const form = document.forms.namedItem("newOrder")
form.addEventListener('submit', function(ev) {
    const formData = new FormData(form);
    const xhttp = new XMLHttpRequest();
    xhttp.open('POST', host + '/orders/new2', true);
    xhttp.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');


    // var keys = ["name", "price", "manufacturer"];

    var arr = [];
    var formDataObject = Object.fromEntries(formData.entries());
    console.log(formDataObject);  

    // for (var x = 0; x < numberOfProducts; x++) {
    //   var object = {};
    //   // formData.forEach(function(value, key) {
    //   //     object[key] = value;
    //   // });
    //   for (var y = start; y < start + 3; y++) {
    //   }
    //   arr.push(object);
    // }
    for (var x = 0; x < numberOfProducts; x++) {
      var object = {};
      for (const pair in formDataObject) {
        if (pair == "name" + x) {
          object["name"] = formDataObject[pair];
        } else if (pair == "price" + x) {
          object["price"] = formDataObject[pair];
        } else if (pair == "manufacturer" + x) {
          object["manufacturer"] = formDataObject[pair];
        }
      }
      arr.push(object);
    }

    xhttp.send(JSON.stringify(arr));x
    ev.preventDefault();
    window.location.href = "http://localhost:8080/html/manager.html";
  }, false);    

  function addProduct() {
    numberOfProducts++;

    var div = document.createElement("div");
    div.setAttribute("class", "formDiv align-items-center");
    var name = document.createElement("input");
    name.setAttribute("name", "name" + formNumber);
    name.setAttribute("placeholder", "Product Name");
    name.setAttribute("type", "text");
    name.setAttribute("placeholder", "Product Name");

    var price = document.createElement("input");
    price.setAttribute("name", "price" + formNumber);
    price.setAttribute("placeholder", "Price USD");
    price.setAttribute("type", "number");
    price.setAttribute("step", "0.01");
    price.setAttribute("min", "0.01");
    
    var manufacturer = document.createElement("input");
    manufacturer.setAttribute("name", "manufacturer" + formNumber);
    manufacturer.setAttribute("placeholder", "Manufacturer")
    manufacturer.setAttribute("type", "text");

    div.appendChild(name);
    div.appendChild(price);
    div.appendChild(manufacturer);
    // div.appendChild(form);

    var outer = document.querySelector("#newOrder");
    outer.appendChild(div);
    formNumber++;
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