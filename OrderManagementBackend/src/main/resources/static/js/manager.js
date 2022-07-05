let host = 'http://localhost:8080/v1';

window.onload = function () {
    getOrders();
}

function getOrders() {

    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {

        if (xhttp.readyState==4 && xhttp.status==200) {
            let orders = JSON.parse(xhttp.responseText);

            loadOrders(orders);
        }
    }

    xhttp.open('GET', host + '/orders');
    xhttp.send();
}

// function getProducts(order) {

//     let xhttp = new XMLHttpRequest();

//     xhttp.onreadystatechange = function() {

//         if (xhttp.readyState==4 && xhttp.status==200) {
//             let products = JSON.parse(xhttp.responseText);

//             loadProducts(products);
//         }
//     }

//     xhttp.open('GET', host + '/products');
//     xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//     xhttp.send(JSON.stringify(order));
// 
// }

function getAllProducts() {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {

        if (xhttp.readyState==4 && xhttp.status==200) {
            let products = JSON.parse(xhttp.responseText);
            loadAllProducts(products);
        }
    }

    xhttp.open('GET', host + '/products/all');
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send();
}

function loadOrders(orders) {

    for (let x = 0; x < orders.length; x++) {
        
        var thead = document.createElement("thead")
        var tbody = document.createElement("tbody");
        
        var tr = document.createElement("tr");
        
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        
        var id = document.createTextNode(orders[x].id);
        var date = document.createTextNode(orders[x].created);
        
        td1.appendChild(id);
        td2.appendChild(date);
        // td3.appendChild(button);
        
        tr.appendChild(td1);
        tr.appendChild(td2);
        // tr.appendChild(td3);
        thead.appendChild(tr);
        var selection = document.querySelector("#display");
        thead.setAttribute("id", "order" + orders[x].id)
        thead.setAttribute("class", "")
        tbody.setAttribute("id", "products" + orders[x].id)
        selection.appendChild(thead);
        selection.appendChild(tbody);
        // getProducts(orders[x]);
    }
    getAllProducts();
}

function loadAllProducts(products) {



    for (var x = 0; x < products.length; x++) {

        var tbody = document.querySelector("#products" + products[x].order.id)

        var tr = document.createElement("tr");
        var tdBuffer = document.createElement("td");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var td4 = document.createElement("td");

        var id = document.createTextNode(products[x].id)
        var name = document.createTextNode(products[x].name)
        var price = document.createTextNode(products[x].price)
        var manufacturer = document.createTextNode(products[x].manufacturer)

        // td1.appendChild(id);
        td2.appendChild(name);
        td3.appendChild(price);
        td4.appendChild(manufacturer);

        tr.appendChild(tdBuffer);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tbody.appendChild(tr);
    }
}


// function loadProducts(products) {

//     for (var x = 0; x < products.length; x++) {
        
//         var tbody = document.createElement("tbody");

//         var tr = document.createElement("tr");

//         var td1 = document.createElement("td");
//         var td2 = document.createElement("td");
//         var td3 = document.createElement("td");
//         var td4 = document.createElement("td");

//         var id = document.createTextNode(products[x].id)
//         var name = document.createTextNode(products[x].name)
//         var price = document.createTextNode(products[x].price)
//         var manufacturer = document.createTextNode(products[x].manufacturer)

//         td1.appendChild(id);
//         td2.appendChild(name);
//         td3.appendChild(price);
//         td4.appendChild(manufacturer);

//         tr.appendChild(td1);
//         tr.appendChild(td2);
//         tr.appendChild(td3);
//         tr.appendChild(td4);

//         tbody.appendChild(tr);

//         var selection = document.querySelector("#order" + products[x].order.id)
//         selection.append(tbody);



        
//     }
// }
