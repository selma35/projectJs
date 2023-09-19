let maincolor = localStorage.getItem("color_option");
if(maincolor !== null){
   document.documentElement.style.setProperty("--main-color",localStorage.getItem("color_option"));
};
let backgroundOption = true;
let backgrounInterval ;




//open the settingbox  /
let toggleI =document.querySelector(".toggle .fa-cog");
let settingBox =document.querySelector(".setting-box");
 toggleI.onclick = function(){
    toggleI.classList.toggle("fa-spin");
    settingBox .classList.toggle("open");
 };

//  start-switch-color
const randombacS =document.querySelectorAll(".random-bac SPAN");
randombacS.forEach(span =>{
    span.addEventListener("click",(e)=>{
   //  e.target.parentElement.querySelectorAll(".active").forEach(Element=>{
   //    Element.classList.remove("active")
      
   //  })
   //  e.target.classList.add("active")
 hendel(e)
    if(e.target.dataset.background ==='yes'){
      backgroundOption =true;
      randomizeImg();
      

    }
    else{
      backgroundOption=false;
      clearInterval(backgrounInterval);
   
    }
   })
})

// switch-color
const colorli =document.querySelectorAll(".colorlist li");
colorli.forEach(li =>{
   li.addEventListener("click",(e)=>{
      document.documentElement.style.setProperty("--main-color", e.target.dataset.color);
      localStorage.setItem("color_option", e.target.dataset.color );
   })
})

// end-switch-color

// background


let landingPage = document.querySelector(".landing-page");
let imgsArray  = ['1.jpg','2.jpg', '3.jpg','4.jpg','5.jpg'];

function randomizeImg(){
   if(backgroundOption === true ){
backgrounInterval =setInterval(() => {
   let randomNan = Math.floor(Math.random() * imgsArray.length);
      landingPage.style.backgroundImage = 'url("imgs/'+ imgsArray[randomNan] +'")';

}, 5000);
   }
};
randomizeImg();

// end-background



//  selector skills
let ourskills = document.querySelector('.skill');
window.onscroll = function() {
  let skillsoffsetTop = ourskills.offsetTop;
  let skillsouterHeight = ourskills.offsetHeight;
  let windowHeight = this.innerHeight;
  let windowscrollTop = this.pageYOffset;

  if (windowscrollTop > (skillsoffsetTop + skillsouterHeight - windowHeight)) {
    let allSkills = document.querySelectorAll('.skill-box .progress span');
    allSkills.forEach(skill => {
      skill.style.width = skill.dataset.progress;
    });
  }
};

// create gallery
let ourGallery = document.querySelectorAll('.gallery img');

ourGallery.forEach(img => {
   img.addEventListener('click', (e) => {
      let overlay = document.createElement('div');
      overlay.className = 'popup_overlay';
      document.body.appendChild(overlay)

      let popupBox = document.createElement('div');
      popupBox.className = 'popup_box';
      if(img.alt!== null){
         let imgHeading =document.createElement('h3');
         let imgtext =document.createTextNode(img.alt);
         imgHeading.appendChild(imgtext);
         popupBox.appendChild(imgHeading);
      };
      
      let popupImg = document.createElement('img')
      popupImg.src = img.src
      popupBox.appendChild(popupImg)
      document.body.appendChild(popupBox) 


      
let closeButton= document.createElement('span')
closeButtonText =document.createTextNode("X")
closeButton .appendChild(closeButtonText)
closeButton.className='close-button'
popupBox .appendChild(closeButton)
   })
})

document.addEventListener('click', (e) => {
   if (e.target.className === 'close-button') {
     e.target.parentNode.remove();
   }
 
   const popupOverlay = document.querySelector(".popup_overlay");
   if (popupOverlay) {
     popupOverlay.remove();
   }
 });
 const Allbullets =document.querySelectorAll(".nav-bullets .bullet")
const Alllinks =document.querySelectorAll("ul a")

function scrollTo(elements) {
   elements.forEach(el => {
     el.addEventListener('click', (e) => {
       e.preventDefault();
       document.querySelector(e.target.dataset.section).scrollIntoView({
         behavior: "smooth"
       });
     });
   });
 }
    
  scrollTo(Allbullets)
  scrollTo(Alllinks)
function hendel(ev){
   ev.target.parentElement.querySelectorAll(".active").forEach(Element=>{
      Element.classList.remove("active")
      
    })
    ev.target.classList.add("active")
}










let bulletsSpan = document.querySelectorAll(".bullets-option span");
let bulletcontect = document.querySelector(".nav-bullets");

 bulletsSpan.forEach(span => {
   span.addEventListener("click", (e) => {
       if (span.dataset.display === "show") {
         bulletcontect.style.display = 'block';
      } else {
         bulletcontect.style.display = 'none';
      }
      hendel(e)
      
   });
 });


   document.querySelector(".reset-option").onclick =function(){
      localStorage.clear;
      window.location.reload();
   };

 

togglebtn = document.querySelector('.toggle-menu');
thlinkes = document.querySelector('.open');
togglebtn.onclick = function () {
    togglebtn.classList.toggle('menu-active');
    thlinkes.classList.toggle('open');
};