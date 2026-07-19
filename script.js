// =========================
// Washfleet Store Script V1
// =========================

document.addEventListener("DOMContentLoaded", () => {

let slides=document.querySelectorAll(".slider img");
let current=0;

function showSlide(){
slides.forEach((slide)=>{
slide.classList.remove("active");
});

current++;
if(current>=slides.length){
current=0;
}

slides[current].classList.add("active");
}

if(slides.length>1){
setInterval(showSlide,3000);
}

const search=document.querySelector(".search input");

if(search){

search.addEventListener("keyup",function(){

let value=this.value.toLowerCase();

document.querySelectorAll(".product-card").forEach((card)=>{

let text=card.innerText.toLowerCase();

if(text.includes(value)){
card.style.display="block";
}else{
card.style.display="none";
}

});

});

}

});
// Buy Button
document.querySelectorAll(".buy-btn").forEach(btn=>{
btn.addEventListener("click",()=>{
alert("Thank you! Order feature coming soon.");
});
});

// Wishlist
document.querySelectorAll(".wishlist").forEach(item=>{
item.addEventListener("click",function(){
this.innerHTML="❤️";
});
});
