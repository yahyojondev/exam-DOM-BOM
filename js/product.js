const API_URL = "https://dummyjson.com/products"
const productimg = document.querySelector(".product__images")
const productTitle = document.querySelector(".product__title")
const productWrapper = document.querySelector(".wrapper")
const notfound = document.querySelector(".not__found")


async function fetchSingleUser(api){
    let params = new URLSearchParams(window.location.search)
    let id = params.get("id");

    let data = await fetch(`${api}/${id}`)
    data
    .json()
    .then(res=>{
        if(res.message){
          return  notfound.style.display ="flex"
        }
        singleUser(res)})
    .catch(res=>console.log(res))
}
fetchSingleUser(API_URL)

function singleUser({thumbnail,title,category,description,price,brand}){
    productimg.src = thumbnail
    
    let card = document.createElement("div")
    card.classList.add("wrapper__card__product")
    card.innerHTML = `
        <h1 class="wrapper__card__product__title">${title}</h1>
<p class="wrapper__card__product__description">${description}</p>
<p class="wrapper__card__product__brand">${brand}</p>
<p class="wrapper__card__product__category">${category}</p>
<div class="wrapper__card__product__wrapper"><p class ="product__price">Narxi</p><p class="wrapper__card__product__price">${price} ₽</p></div>
<button class="wrapper__card__product__btn">КОРЗИНКА</button>
    `
    productWrapper.appendChild(card)
}