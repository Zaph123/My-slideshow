let bg = document.querySelector(".bg_img")
console.log(bg.lastElementChild)
//  let index = 0;
//  showSlides(index);
//  let i;
//  for(i = 0; i < carouselSlides.length; i++){
//    carouselSlides[i].classList.remove("carousel__slides--selected")
//  }
//  carouselSlides[0].classList.add("carousel__slides--selected")
//  index++
// function showSlides(n){
//    carouselSlides[0].classList.remove("carousel__slides--selected")
//    carouselSlides[index + n].classList.add("carousel__slides--selected")
//    console.log(carouselSlides[index + n])
//    console.log(n)
// }
// console.log(carouselSlides[index + 1])

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
   console.log( `The slide index is ${slideIndex}`)
  showSlides(slideIndex += n);
  console.log( `The new slide index is ${slideIndex}`)
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let carouselSlides = document.querySelectorAll(".carousel__slides")
  let carouselIndicators = document.querySelectorAll(".carousel_indicator")
  let backdropImg = document.getElementById("abstractImg")
  if (n > carouselSlides.length)
   {
      slideIndex = 1
   }
  if (n < 1) 
  {
   slideIndex = carouselSlides.length
  }
  for (i = 0; i < carouselSlides.length; i++) {
   carouselSlides[i].classList.remove("carousel__slides--selected");
  }
  for (i = 0; i < carouselIndicators.length; i++) {
   carouselIndicators[i].classList.remove("carousel_indicator_selected")
  }

  carouselSlides[slideIndex-1].classList.add("carousel__slides--selected")
  backdropImg.src = carouselSlides[slideIndex-1].firstElementChild.src
  console.log(carouselSlides[slideIndex-1].firstElementChild.src)
  carouselIndicators[slideIndex-1].classList.add("carousel_indicator_selected")
  console.log(carouselIndicators[slideIndex-1]);
   console.log(carouselSlides[slideIndex-1])
   console.log(n)
}

// let h,index;
//  index = 1
//  index++
//  h = 1
//  result = index += h
//  console.log(result)
//  calc(index += h);
// function calc(x){
//    return console.log(x)
// }
// prompt("what is your name")


// function user(){
//   let msg = prompt("what is your name")
//   console.log(`Welcome ${msg}`)
// }
// user();
let x;
for(x = 0; x < 10; x++){
  console.log(x)
}
let y = 0;
 while(y < 10){
  console.log(y)
  y++
 }
 do{
  console.log(y)
  y++
 }while(y < 10)
