
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function page4Animation()
{
    let elem = document.querySelector("#page4container");
  let fix = document.querySelector("#fixed-image");

  elem.addEventListener("mouseenter" , ()=>{

      
      fix.style.display = "block";
  })

  elem.addEventListener("mouseleave" , ()=>{
      
      fix.style.display = "none";
  })


  let elems = document.querySelectorAll(".page4box");
  elems.forEach((e) => {
      e.addEventListener("mouseenter" , ()=>{
          let image = e.getAttribute("data-img");
          // console.log(image);
          fix.style.backgroundImage = `url(${image})`
      })
  });
}

function swiperAnimation()
{
  
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 50,
   
  });
}
let swrap = document.querySelector(".swiper-wrapper");
let crsr = document.querySelector("#mouseofswiper");


swrap.addEventListener("mousemove" , (dets)=>{
  // alert("hi");
  crsr.style.left = dets.x+"px";
  crsr.style.top = dets.y+"px";
  console.log(dets.y , dets.x);

  swrap.style.cursor = "none";
  // crsr.classList.add("hide");
  crsr.style.display = "block";

})

swiperAnimation();
page4Animation();





// responsive

let menu = document.querySelector("nav h3");
let full = document.querySelector("#full-scr");
let navimmg = document.querySelector("nav img");
let navh3 = document.querySelector("nav h3");
let navi = document.querySelectorAll("nav i");
let flag =0;
menu.addEventListener("click" , ()=>{
    if(flag == 0)
    {

      full.style.top = 0;
      navimmg.style.opacity = 0; 

     navi[0].style.display = "none";
     navi[1].style.display = "inline";



      flag = 1;
    }
    else
    {
      // full.style.transitionProperty = "all";
      // full.style.transitionTimingFunction =  "ease";
      // full.style.transitionDuration =  "0.5s";
      full.style.top = "-100%";
      navimmg.style.opacity = 1; 


      navi[0].style.display = "inline";
      navi[1].style.display = "none";

    
      flag = 0;
    }
    
}) ;
