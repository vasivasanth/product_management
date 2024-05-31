//nav
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

// view profle page

function profileFun(){
    var profile = document.getElementById('profile');
    var productprice = document.getElementById('product-and-price');
    var quotation = document.getElementById('quotation');
    var invoice = document.getElementById('invoice');
    var goodsreceipt = document.getElementById('goodsReceipt');
    if (profile.style.visibility === "hidden") {
        productprice.style.visibility = "hidden";
        productprice.style.display = "none";
        quotation.style.visibility='hidden';
        quotation.style.display = 'none';
        invoice.style.visibility='hidden';
        invoice.style.display = 'none';
        goodsreceipt.style.visibility='hidden';
        goodsreceipt.style.display = 'none';
        profile.style.visibility = "visible";
        profile.style.display = "block";
    }
    
}




// view product and pricelist 

function productPriceFun(){
    var profile = document.getElementById('profile');
    var productprice = document.getElementById('product-and-price');
    var quotation = document.getElementById('quotation');
    var invoice = document.getElementById('invoice');
    var goodsreceipt = document.getElementById('goodsReceipt');
    if (productprice.style.visibility === "hidden") {
        profile.style.visibility = "hidden";
        profile.style.display = "none";
        quotation.style.visibility='hidden';
        quotation.style.display = 'none';
        invoice.style.visibility='hidden';
        invoice.style.display = 'none';
        goodsreceipt.style.visibility='hidden';
        goodsreceipt.style.display = 'none';
        productprice.style.visibility = "visible";
        productprice.style.display = "block";
    }
}
// view quotation 

function quotationFun(){
    var profile = document.getElementById('profile');
    var productprice = document.getElementById('product-and-price');
    var quotation = document.getElementById('quotation');
    var invoice = document.getElementById('invoice');
    var goodsreceipt = document.getElementById('goodsReceipt');
    if (quotation.style.visibility === "hidden") {
        profile.style.visibility = "hidden";
        profile.style.display = "none";
        productprice.style.visibility = "hidden";
        productprice.style.display = "none";
        invoice.style.visibility='hidden';
        invoice.style.display = 'none';
        goodsreceipt.style.visibility='hidden';
        goodsreceipt.style.display = 'none';
        quotation.style.visibility='visible';
        quotation.style.display = 'block';
    }
}


//view invoice

function invoiceFun(){
    var profile = document.getElementById('profile');
    var productprice = document.getElementById('product-and-price');
    var quotation = document.getElementById('quotation');
    var invoice = document.getElementById('invoice');
    var goodsreceipt = document.getElementById('goodsReceipt');
    if (invoice.style.visibility === "hidden") {
        profile.style.visibility = "hidden";
        profile.style.display = "none";
        productprice.style.visibility = "hidden";
        productprice.style.display = "none";
        quotation.style.visibility='hidden';
        quotation.style.display = 'none';
        goodsreceipt.style.visibility='hidden';
        goodsreceipt.style.display = 'none';
        invoice.style.visibility='visible';
        invoice.style.display = 'block';
    }
}

//view goods receipt

function goodsReceiptFun(){
    var profile = document.getElementById('profile');
    var productprice = document.getElementById('product-and-price');
    var quotation = document.getElementById('quotation');
    var invoice = document.getElementById('invoice');
    var goodsreceipt = document.getElementById('goodsReceipt');
    if (goodsreceipt.style.visibility === "hidden") {
        profile.style.visibility = "hidden";
        profile.style.display = "none";
        productprice.style.visibility = "hidden";
        productprice.style.display = "none";
        quotation.style.visibility='hidden';
        quotation.style.display = 'none';
        invoice.style.visibility='hidden';
        invoice.style.display = 'none';
        goodsreceipt.style.visibility='visible';
        goodsreceipt.style.display = 'block';
    }
}


// get vendore information from login page and display inn profile
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const companyName = urlParams.get('companyName');
    const website = urlParams.get('website');
    const email = urlParams.get('email');
    const phone = urlParams.get('phone');
    const street = urlParams.get('street');
    const city = urlParams.get('city');
    const state = urlParams.get('state');
    const zip = urlParams.get('zip');
    const country = urlParams.get('country');
    const services = urlParams.get('services');

    document.getElementById('CompanyName').textContent = `Company Name: ${companyName}`;
    document.getElementById('Website').textContent = `Website: ${website}`;
    document.getElementById('Email').textContent = `Email: ${email}`;
    document.getElementById('Phone').textContent = `Phone: ${phone}`;
    document.getElementById('Street').textContent = `Street Address: ${street}`;
    document.getElementById('City').textContent = `City: ${city}`;
    document.getElementById('State').textContent = `State: ${state}`;
    document.getElementById('Zip').textContent = `Zip Code: ${zip}`;
    document.getElementById('Country').textContent = `Country: ${country}`;
    document.getElementById('Services').textContent = `Services Provided: ${services}`;
});

// add new product and price button
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

// updating product and price button

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