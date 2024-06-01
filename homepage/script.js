//NAV BAR START------------------------------

//nav active class
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.nav');
    buttons[0].classList.add('active');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
});


//view product page

function productfun(){
    var product = document.getElementById('product-content');
    var purchase = document.getElementById('purchase-order');
    var quotation = document.getElementById('quotation-list');
    var customer = document.getElementById('customer-content');
    if (product.style.visibility === "hidden") {
        purchase.style.visibility = "hidden";
        purchase.style.display = "none";
        quotation.style.visibility='hidden';
        quotation.style.display = 'none';
        customer.style.visibility='hidden';
        customer.style.display = 'none';
        product.style.visibility = "visible";
        product.style.display = "block";
    }
    
}

//view purchase order page

function purchasefun(){
    var product = document.getElementById('product-content');
    var purchase = document.getElementById('purchase-order');
    var quotation = document.getElementById('quotation-list');
    var customer = document.getElementById('customer-content');
    if (purchase.style.visibility === "hidden") {
        product.style.visibility = "hidden";
        product.style.display = "none";
        quotation.style.visibility='hidden';
        quotation.style.display = 'none';
        customer.style.visibility='hidden';
        customer.style.display = 'none';
        purchase.style.visibility = "visible";
        purchase.style.display = "block";
    }
}

//view quotation page

function quotationfun(){
    var product = document.getElementById('product-content');
    var purchase = document.getElementById('purchase-order');
    var quotation = document.getElementById('quotation-list');
    var customer = document.getElementById('customer-content');
    if (quotation.style.visibility === "hidden") {
        product.style.visibility = "hidden";
        product.style.display = "none";
        purchase.style.visibility = "hidden";
        purchase.style.display = "none";
        customer.style.visibility='hidden';
        customer.style.display = 'none';
        quotation.style.visibility='visible';
        quotation.style.display = 'block';
    }
}

//view customer page

function customerfun(){
    var product = document.getElementById('product-content');
    var purchase = document.getElementById('purchase-order');
    var quotation = document.getElementById('quotation-list');
    var customer = document.getElementById('customer-content');
    if (customer.style.visibility === "hidden") {
        product.style.visibility = "hidden";
        product.style.display = "none";
        purchase.style.visibility = "hidden";
        purchase.style.display = "none";
        quotation.style.visibility='hidden';
        quotation.style.display = 'none';
        customer.style.visibility='hidden';
        customer.style.display = 'none';
        customer.style.visibility='visible';
        customer.style.display = 'block';
    }
}

//NAVBAR END****************************************



//PRODUCT MANAGEMANT TABLE START--------------------

//Delete product row

document.addEventListener('DOMContentLoaded', function(){
    var deleteproduct = document.getElementById('delete-btn');
    deleteproduct.addEventListener('click', function() {
        var productNumber = prompt('Enter the product no to delete: ');
        if (productNumber == null || productNumber === '') {
            alert('Enter a product no');
            return;
        }
        var table = document.getElementById('product-table');
        var rows = table.getElementsByTagName('tr');
        var found = false;
        for (var i = 1; i < rows.length; i++) { 
            var cells = rows[i].getElementsByTagName('td');
                if (cells[0].textContent === productNumber) {
                    table.deleteRow(i);
                    found = true;
                    break;
                }
            if (found) {
                break; 
            }
        }
        if (!found) {
            alert('Invalid product no.');
        }
    });
});


//Add Product

function newproduct(){
        var addbox = document.getElementById('update-product-box');
        var box = document.getElementById('add-product-box');
        if (box.style.visibility === "hidden") {
            addbox.style.visibility = "hidden";
            addbox.style.display = "none";
            box.style.visibility = "visible";
            box.style.display = "block";
        } else {
            box.style.visibility = "hidden";
            box.style.display = "none";
        }
    }

document .addEventListener('DOMContentLoaded', function(){
    document.getElementById('add-product-form').addEventListener('submit', function(event){
       event.preventDefault();
       var box = document.getElementById('add-product-box');
       var pid = document.getElementById('product-id').value;
       var pname = document.getElementById('product-name').value;
       var uom = document.getElementById('uom').value;
       var ctgy = document.getElementById('category').value;
       var brand = document.getElementById('brand').value;
       var price = document.getElementById('price').value;
       var stock = document.getElementById('stock').value;

       var newrow = document.createElement('tr');
       newrow.innerHTML = `
           <td>${pid}</td>
           <td>${pname}</td>
           <td>${uom}</td>
           <td>${ctgy}</td>
           <td>${brand}</td>
           <td>${price}</td>
           <td>${stock}</td>
       `;

    document.querySelector('#product-table tbody').appendChild(newrow);
     
    box.style.visibility = "hidden";
    box.style.display = "none";

    });
});


//updating product

function updateproduct(){
    var box = document.getElementById('update-product-box');
    var addbox=document.getElementById('add-product-box');
    if (box.style.visibility === "hidden") {
        addbox.style.visibility = "hidden";
        addbox.style.display = "none";
        box.style.visibility = "visible";
        box.style.display = "block";
    } else {
        box.style.visibility = "hidden";
        box.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var table = document.getElementById('product-table');
    var selectedRow = null;

    table.addEventListener('click', function(event) {
        var target = event.target;
        while (target && target.nodeName !== 'TR') {
            target = target.parentElement;
        }
        if (target && target.nodeName === 'TR') {
            selectedRow = target; // Assign the clicked row to selectedRow
            var cells = target.getElementsByTagName('td');
            if (cells.length > 0) {
                document.getElementById('u-product-id').value = cells[0].textContent;
                document.getElementById('u-product-name').value = cells[1].textContent;
                document.getElementById('u-uom').value = cells[2].textContent;
                document.getElementById('u-category').value = cells[3].textContent;
                document.getElementById('u-brand').value = cells[4].textContent;
                document.getElementById('u-price').value = cells[5].textContent;
                document.getElementById('u-stock').value = cells[6].textContent;
            }
        }
    });
    var box = document.getElementById('update-product-box');
    var updateBtn = document.getElementById('update-btn');
    updateBtn.addEventListener('click', function() {
        if (selectedRow) {
            var cells = selectedRow.getElementsByTagName('td');
            cells[0].textContent = document.getElementById('u-product-id').value;
            cells[1].textContent = document.getElementById('u-product-name').value;
            cells[2].textContent = document.getElementById('u-uom').value;
            cells[3].textContent = document.getElementById('u-category').value;
            cells[4].textContent = document.getElementById('u-brand').value;
            cells[5].textContent = document.getElementById('u-price').value;
            cells[6].textContent = document.getElementById('u-stock').value;
        }
        box.style.visibility = "hidden";
        box.style.display = "none";
    });
});


//PRODUCT MANAGEMENT TABLE END**************************


//PURCHASELIST TABLE START

//purchaselist table

document.addEventListener('DOMContentLoaded', function() {
    var table = document.getElementById('product-table');
    var selectedRow = null;

    table.addEventListener('click', function(event) {
        var target = event.target;
        while (target && target.nodeName !== 'TR') {
            target = target.parentElement;
        }
        if (target && target.nodeName === 'TR') {
            selectedRow = target; // Assign the clicked row to selectedRow
            var cells = target.getElementsByTagName('td');
            if (cells.length > 0) {
                document.getElementById('u-product-id').value = cells[0].textContent;
                document.getElementById('u-product-name').value = cells[1].textContent;
                document.getElementById('u-uom').value = cells[2].textContent;
                document.getElementById('u-category').value = cells[3].textContent;
                document.getElementById('u-brand').value = cells[4].textContent;
                document.getElementById('u-price').value = cells[5].textContent;
                document.getElementById('u-stock').value = cells[6].textContent;
            }
        }
    });

    var updateBtn = document.getElementById('update-btn');
    updateBtn.addEventListener('click', function() {
        if (selectedRow) {
            var cells = selectedRow.getElementsByTagName('td');
            cells[0].textContent = document.getElementById('u-product-id').value;
            cells[1].textContent = document.getElementById('u-product-name').value;
            cells[2].textContent = document.getElementById('u-uom').value;
            cells[3].textContent = document.getElementById('u-category').value;
            cells[4].textContent = document.getElementById('u-brand').value;
            cells[5].textContent = document.getElementById('u-price').value;
            cells[6].textContent = document.getElementById('u-stock').value;
        }
    });
});


//Add purchaselist Product

function newpurchaselist(){
    var addbox = document.getElementById('update-purchaselist-box');
    var box = document.getElementById('add-purchaselist-box');
    if (box.style.visibility === "hidden") {
        addbox.style.visibility = "hidden";
        addbox.style.display = "none";
        box.style.visibility = "visible";
        box.style.display = "block";
    } else {
        box.style.visibility = "hidden";
        box.style.display = "none";
    }
}

document .addEventListener('DOMContentLoaded', function(){
document.getElementById('add-purchaselist-form').addEventListener('submit', function(event){
   event.preventDefault();
   var box = document.getElementById('add-purchaselist-box');
   var pid = document.getElementById('purchaselist-id').value;
   var pname = document.getElementById('purchaselist-name').value;
   var uom = document.getElementById('purchaselist-uom').value;
   var brand = document.getElementById('purchaselist-brand').value;
   var quantity = document.getElementById('purchaselist-quantity').value;

   var newrow = document.createElement('tr');
   newrow.innerHTML = `
       <td>${pid}</td>
       <td>${pname}</td>
       <td>${uom}</td>
       <td>${brand}</td>
       <td>${quantity}</td>
   `;

document.querySelector('#purchaselist-table tbody').appendChild(newrow);

box.style.visibility = "hidden";
box.style.display = "none";

});
});

//updating purchase product

function updatepurchaselist(){
var box = document.getElementById('update-purchaselist-box');
var addbox=document.getElementById('add-purchaselist-box');
if (box.style.visibility === "hidden") {
    addbox.style.visibility = "hidden";
    addbox.style.display = "none";
    box.style.visibility = "visible";
    box.style.display = "block";
} else {
    box.style.visibility = "hidden";
    box.style.display = "none";
}
}


document.addEventListener('DOMContentLoaded', function() {
var table = document.getElementById('purchaselist-table');
var selectedRow = null;
var box = document.getElementById('update-purchaselist-box');
table.addEventListener('click', function(event) {
    var target = event.target;
    while (target && target.nodeName !== 'TR') {
        target = target.parentElement;
    }
    if (target && target.nodeName === 'TR') {
        selectedRow = target; // Assign the clicked row to selectedRow
        var cells = target.getElementsByTagName('td');
        if (cells.length > 0) {
            document.getElementById('u-purchaselist-id').value = cells[0].textContent;
            document.getElementById('u-purchaselist-name').value = cells[1].textContent;
            document.getElementById('u-purchaselist-uom').value = cells[2].textContent;
            document.getElementById('u-purchaselist-brand').value = cells[3].textContent;
            document.getElementById('u-purchaselist-quantity').value = cells[4].textContent;
        }
    }
});


//update below button
var updateBtn = document.getElementById('update-purchaselist-btn');
updateBtn.addEventListener('click', function() {
    if (selectedRow) {
        var cells = selectedRow.getElementsByTagName('td');
        cells[0].textContent = document.getElementById('u-purchaselist-id').value;
        cells[1].textContent = document.getElementById('u-purchaselist-name').value;
        cells[2].textContent = document.getElementById('u-purchaselist-uom').value;
        cells[3].textContent = document.getElementById('u-purchaselist-brand').value;
        cells[4].textContent = document.getElementById('u-purchaselist-quantity').value;
    }
    box.style.visibility = "hidden";
    box.style.display = "none";
});

});

//delete purchase orderlist row

document.addEventListener('DOMContentLoaded', function(){
    var deleteproduct = document.getElementById('delete-productlist');
    deleteproduct.addEventListener('click', function() {
        var productNumber = prompt('Enter the product no to delete: ');
        if (productNumber == null || productNumber === '') {
            alert('Enter a product no');
            return;
        }
        var table = document.getElementById('purchaselist-table');
        var rows = table.getElementsByTagName('tr');
        var found = false;
        for (var i = 1; i < rows.length; i++) { 
            var cells = rows[i].getElementsByTagName('td');
                if (cells[0].textContent === productNumber) {
                    table.deleteRow(i);
                    found = true;
                    break;
                }
            if (found) {
                break; 
            }
        }
        if (!found) {
            alert('Invalid product no.');
        }
    });
});


//Add out of stock product

document.addEventListener('DOMContentLoaded', function(){
    var loanbtn = document.getElementById('load-low-stock-btn');
    loanbtn.addEventListener('click',function(){
        var table = document.getElementById('product-table');
        var rows = table.getElementsByTagName('tr');
        for(var i = 1; i< rows.length; i++){
            var cells = rows[i].getElementsByTagName('td');
                if( parseFloat(cells[6].textContent) <= 5){
                   //adding low stock products
                   var newrow = document.createElement('tr');
                   newrow.innerHTML = `
                       <td>${cells[0].textContent}</td>
                       <td>${cells[1].textContent}</td>
                       <td>${cells[2].textContent}</td>
                       <td>${cells[4].textContent}</td>
                       <td>${0}</td>
                   `;
                   document.querySelector('#purchaselist-table tbody').appendChild(newrow);
                }
        }
        loanbtn.disabled = true;
    });

});

//PURCHASELIST TABLE END********************************


//CUSTOMER MANAGEMANT TABLE START------------------------

//Delete customer row

document.addEventListener('DOMContentLoaded', function(){
    var deleteproduct = document.getElementById('delete-customer-btn');
    deleteproduct.addEventListener('click', function() {
        var productNumber = prompt('Enter the customer no to delete: ');
        if (productNumber == null || productNumber === '') {
            alert('Enter a customer no');
            return;
        }
        var table = document.getElementById('customer-table');
        var rows = table.getElementsByTagName('tr');
        var found = false;
        for (var i = 1; i < rows.length; i++) { 
            var cells = rows[i].getElementsByTagName('td');
                if (cells[0].textContent === productNumber) {
                    table.deleteRow(i);
                    found = true;
                    break;
                }
            if (found) {
                break; 
            }
        }
        if (!found) {
            alert('Invalid customer no.');
        }
    });
});


//Add customer

    function newcustomer(){
        var addbox = document.getElementById('update-customer-box');
        var box = document.getElementById('add-customer-box');
        if (box.style.visibility === "hidden") {
            addbox.style.visibility = "hidden";
            addbox.style.display = "none";
            box.style.visibility = "visible";
            box.style.display = "block";
        } else {
            box.style.visibility = "hidden";
            box.style.display = "none";
        }
    }

document .addEventListener('DOMContentLoaded', function(){
    document.getElementById('add-customer-form').addEventListener('submit', function(event){
       event.preventDefault();
       var box = document.getElementById('add-customer-box');
       var cid = document.getElementById('customer-id').value;
       var cname = document.getElementById('customer-name').value;
       var genderArray = document.getElementsByName('g');
       var address = document.getElementById('address').value;
       var phoneno = document.getElementById('phoneno').value;
       var jdate = document.getElementById('join-date').value;
       var gender ="";
       for(var i =0; i<genderArray.length; i++){
           if (genderArray[i].checked){
            gender += genderArray[i].value;
           }
       }

       var newrow = document.createElement('tr');
       newrow.innerHTML = `
           <td>${cid}</td>
           <td>${cname}</td>
           <td>${gender}</td>
           <td>${address}</td>
           <td>${phoneno}</td>
           <td>${jdate}</td>
       `;

    document.querySelector('#customer-table tbody').appendChild(newrow);
     
    box.style.visibility = "hidden";
    box.style.display = "none";

    });
});


//updating customer

function updatecustomer(){
    var box = document.getElementById('update-customer-box');
    var addbox=document.getElementById('add-customer-box');
    if (box.style.visibility === "hidden") {
        addbox.style.visibility = "hidden";
        addbox.style.display = "none";
        box.style.visibility = "visible";
        box.style.display = "block";
    } else {
        box.style.visibility = "hidden";
        box.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var table = document.getElementById('customer-table');
    var selectedRow = null;

    table.addEventListener('click', function(event) {
        var target = event.target;
        while (target && target.nodeName !== 'TR') {
            target = target.parentElement;
        }
        if (target && target.nodeName === 'TR') {
            selectedRow = target; // Assign the clicked row to selectedRow
            var cells = target.getElementsByTagName('td');
            if (cells.length > 0) {
                document.getElementById('u-customer-id').value = cells[0].textContent;
                document.getElementById('u-customer-name').value = cells[1].textContent;
                document.getElementById('u-gender').value = cells[2].textContent;
                document.getElementById('u-address').value = cells[3].textContent;
                document.getElementById('u-phoneno').value = cells[4].textContent;
                document.getElementById('u-joindate').value = cells[5].textContent;
            }
        }
    });
    var box = document.getElementById('update-customer-box');
    var updateBtn = document.getElementById('update-customer-btn');
    updateBtn.addEventListener('click', function() {
        if (selectedRow) {
            var cells = selectedRow.getElementsByTagName('td');
            cells[0].textContent = document.getElementById('u-customer-id').value;
            cells[1].textContent = document.getElementById('u-customer-name').value;
            cells[2].textContent = document.getElementById('u-gender').value;
            cells[3].textContent = document.getElementById('u-address').value;
            cells[4].textContent = document.getElementById('u-phoneno').value;
            cells[5].textContent = document.getElementById('u-join-date').value;
        }
        box.style.visibility = "hidden";
        box.style.display = "none";
    });
});
