const btns = document.getElementsByClassName('add_to_cart');

console.log(btns);

let sum = 0;


for (let btn of btns){//Iteration on each button

    btn.addEventListener("click", function(){


        let productDiv = this.parentElement;

        let price = productDiv.querySelector('p').innerText;
        let product = productDiv.querySelector('h3').innerText;

        // console.log(price)

        price = price.replace(/[^0-9.]/g,'');

        // console.log(productDiv);

        let price_of_Products = Number(price);

        // console.log(price_of_Products)

        sum = sum + price_of_Products;

        console.log(`The ${product} is of ${price}`);

        // const selectedItem = btn.document.querySelector('p');

        // console.log(`Button Selected is of ${selectedItem}`);

        let product_listing = document.getElementById('cart-items');

        product_listing.append( `${product} ${price_of_Products}   TOTAL: ${sum} `, document.createElement('br'));

        
    })
}



// btn.addEventListener("click", function(){

//     console.log(`Button Clicked`);
// })