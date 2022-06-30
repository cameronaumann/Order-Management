console.log("Hello world")

// window.onload {

// }


fetch('http://localhost:8080/v1/orders', {
    credentials: 'same-origin'
}).then(response => response.json()).then(data => console.log(data));