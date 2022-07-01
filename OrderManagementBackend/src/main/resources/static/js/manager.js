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

function getProducts(order) {

    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {

        if (xhttp.readyState==4 && xhttp.status==200) {
            let products = JSON.parse(xhttp.responseText);

            loadProducts(products);
        }
    }

    xhttp.open('GET', host + '/products');
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify(order));
    
}

function loadOrders(orders) {

    for (let x = 0; x < orders.length; x++) {
        
        let thead = document.createElement("thead")
        
        let tr = document.createElement("tr");
        
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        // let td3 = document.createElement("td");

        // let button = document.createElement("button");
        // button.setAttribute("class", "btn btn-outline-success");
        // button.setAttribute("id", orders[x].id);
        // button.innerHTML = "View Products";
        
        
        let id = document.createTextNode(orders[x].id);
        let date = document.createTextNode(orders[x].created);
        
        td1.appendChild(id);
        td2.appendChild(date);
        // td3.appendChild(button);
        
        tr.appendChild(td1);
        tr.appendChild(td2);
        // tr.appendChild(td3);
        thead.appendChild(tr);
        let selection = document.querySelector("#display");
        selection.appendChild(thead);
        thead.setAttribute("id", "order" + orders[x].id)
        getProducts(orders[x]);
    }
}




function loadProducts(products) {

    for (let x = 0; x < products.length; x++) {
        
        let tbody = document.createElement("tbody");

        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");

        let id = document.createTextNode(products[x].id)
        let name = document.createTextNode(products[x].name)
        let price = document.createTextNode(products[x].price)
        let manufacturer = document.createTextNode(products[x].manufacturer)

        td1.appendChild(id);
        td2.appendChild(name);
        td3.appendChild(price);
        td4.appendChild(manufacturer);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);

        tbody.appendChild(tr);

        let selection = document.querySelector("#order" + products[x].order.id)
        selection.append(tbody);



        
    }
}
