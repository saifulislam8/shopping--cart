function updateProductNumber(product,price, isIncreasing){
    const productInput = document.getElementById(product + '-number');
   let productNumber = productInput.value;
    if(isIncreasing == true){
        productNumber =  parseInt(productNumber)+ 1;

    }
    else if(productNumber > 0) {
        productNumber = parseInt(productNumber)- 1;

    }
    productInput.value = productNumber;
    // update caseTotal price 
    const productTotal = document.getElementById( product +'-total');
    productTotal.innerText = productNumber *price;
}
// handle phone events 
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone',1219,true)
});
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, false);
})


// handle case events 
document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber('case',59, true);
    
});

document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber('case', 59,false);
})