let count = 0;
let total = 0;
let cartList = [];

function addToCart(name, price){
    count++;
    total += price;
    document.getElementById("cart-count").innerText = count;
    document.getElementById("total").innerText = total;
    
    cartList.push({name, price});
    updateCartPage();

    // toast
    let toast = document.getElementById("toast");
    toast.classList.add("show");
    setTimeout(()=>{ toast.classList.remove("show"); }, 1500);
}

function updateCartPage(){
    let container = document.getElementById("cart-items");
    container.innerHTML = "";
    cartList.forEach(item => {
        container.innerHTML += `<div class="cart-item"><span>${item.name}</span><span>$${item.price}</span></div>`;
    });
}

function openCart(){
    document.getElementById("cartPage").classList.add("active");
}
function closeCart(){
    document.getElementById("cartPage").classList.remove("active");
}

function scrollToProducts(){
    document.getElementById("products").scrollIntoView({behavior:"smooth"});
}