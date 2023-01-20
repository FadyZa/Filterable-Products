let section = document.querySelector("section") 
let CatBtns = document.querySelectorAll("nav button");

// make and handle data at html
for(let i of Allproducts.data){
    let card = document.createElement("div");
    card.classList.add("card",i.category,"hide")

    let innerCard = `<figure>
        <img src="imgs/${i.imgSrc}">
        <h2>${i.prodName}</h2>
        <figcaption>price: ${i.price}$</figcaption>
    </figure>
    <button>add to cart</button>`;

    card.innerHTML = innerCard;
    section.append(card)
}

// give a backgroundcolor to the active btn
let current = document.getElementsByClassName("active");
CatBtns.forEach((ele)=>{    
    ele.addEventListener("click",()=>{
        current[0].className = current[0].className.replace("active","");
        ele.className += " active"
    })
})

// the main function for filtration 
function filter(val){
    let cards = document.querySelectorAll(".card")
    console.log(val)
    cards.forEach((ele)=>{
        if(val == "all"){
            ele.classList.remove("hide");
        }else {
            if(ele.classList.contains(val)){
                ele.classList.remove("hide")
            }else{
                ele.classList.add("hide")
            }
        }
    })

    // search by product name
    let searchBtn = document.getElementById("search-btn");
    searchBtn.addEventListener("click",()=>{
        let searchInput = document.getElementById("search-input").value.toLowerCase();
        let prodsName = document.querySelectorAll("figure h2");

        prodsName.forEach((ele,i)=>{
            if(ele.innerText.toLowerCase().includes(searchInput)){
                cards[i].classList.remove("hide")
            }
            else{
                cards[i].classList.add("hide")
            }
        })
    })
}



window.onload = () => {
    filter('all');
};
