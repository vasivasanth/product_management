// NAV BAR START

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

// view product page

function productfun(){
    var active = document.getElementById('nav-product');
    var product = document.getElementById('product-content');
    var purchase = document.getElementById('purchase-order');
    var quotation = document.getElementById('quotation-list');
    if (product.style.visibility === "hidden") {
        purchase.style.visibility = "hidden";
        purchase.style.display = "none";
        quotation.style.visibility='hidden';
        quotation.style.display = 'none';
        // active.classList.toggle('active');
        product.style.visibility = "visible";
        product.style.display = "block";
    }
    
}




// view purchase order page

function purchasefun(){
    var active = document.getElementById('nav-purcahse-order');
    var product = document.getElementById('product-content');
    var purchase = document.getElementById('purchase-order');
    var quotation = document.getElementById('quotation-list');
    if (purchase.style.visibility === "hidden") {
        product.style.visibility = "hidden";
        product.style.display = "none";
        quotation.style.visibility='hidden';
        quotation.style.display = 'none';
        // active.classList.toggle('active');
        purchase.style.visibility = "visible";
        purchase.style.display = "block";
    }
}

function quotationfun(){
    var active = document.getElementById('nav-purcahse-order');
    var product = document.getElementById('product-content');
    var purchase = document.getElementById('purchase-order');
    var quotation = document.getElementById('quotation-list');
    if (quotation.style.visibility === "hidden") {
        product.style.visibility = "hidden";
        product.style.display = "none";
        purchase.style.visibility = "hidden";
        purchase.style.display = "none";
        quotation.style.visibility='visible';
        quotation.style.display = 'block';
    }
}
//NAVBAR END


//PRODUCT MANAGEMANT TABLE START

// Delete product row

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


// Add Product

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


// updating product

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


// PRODUCT MANAGEMENT TABLE END

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



// Add purchaselist Product

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


// updating purchase product

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

// delete purchase orderlist row

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

// PURCHASELIST TABLE END


// QUOTATION LIST START




