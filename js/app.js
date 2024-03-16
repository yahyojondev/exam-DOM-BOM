const API_URL = "https://dummyjson.com/products"
const cardwrapper = document.querySelector(".cards__wrapper")
const loading = document.querySelector(".loading")

async function fetchData(api){
    let data = await fetch(api)
    data
    .json()
    .then(res=>createCard(res.products))
    .catch(err=>console.log(err))
    .finally(()=>{
        loading.style.display="none"
    })
}
fetchData(API_URL)

function createCard(data){
    data.forEach(products=>{
        let card = document.createElement("div")
        card.classList.add("cards__wrapper__card")
        let cardContent = document.createElement("div")
        cardContent.classList.add("card__content")
        card.innerHTML = `
        <img src=${products.images[0]} alt="">
        
                         
        `
        cardContent.innerHTML = `
                 <h2 class="products__title">${products.title}</h2>
         <div class="products__wrapper">
                 <img class="products__rating" src="./images/main/stars.png" alt="">
                <span class="products__stock">(${products.stock}) reviews</span>
            </div>
        <p class="products__text">${products.description}</p>
                     <p class="products__price">${products.price}₽</p>  
        `
        card.addEventListener("click",()=> singleRoute(products.id,products.brand))
        cardwrapper.appendChild(card)
        card.appendChild(cardContent)
    })
}

function singleRoute(id,brand){
    
    window.open(`/pages/product.html?id=${id}&name=${brand}`,"_self")
}