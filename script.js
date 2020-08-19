
window.onscroll=function(){myFunction()};
var navbar=document.querySelector('nav');
var positionNav =navbar.offsetTop;
var nbar=document.querySelector('.container');
var Ycontainer =nbar.offsetTop;
var heightSection=nbar.offsetHeight;// i calculat the height of section
nbar.style.height=heightSection+"px";//i give the height value to section befor make box_item none , so it will save the height 

var YsectionSport=document.querySelector('.section-sport');
var YsectionStudy=document.querySelector('.section-study');
var YsectionLife=document.querySelector('.section-life');
var Yfooter=document.querySelector('footer');

var cont=document.querySelectorAll(".box_item");
var motivationImages=document.querySelectorAll(".box-width-height");
var YboxNavigate=document.querySelectorAll(".title-list");
var YlistBoxN=document.querySelectorAll(".footer-lists");

var bodyWidth=document.querySelector('body').offsetWidth;

var showedContainer=false;
var showedSectionLife=false;
var showedSectionSport=false;
var showedSectionStudy=false;
var showedFooter=false;

for (var i = 0; i < cont.length; i++) {
  cont[i].style.display="none";
}
for (var i = 0; i < motivationImages.length; i++) {
  motivationImages[i].style.display="none";
}
for (var i = 0; i < YboxNavigate.length; i++) {
  YboxNavigate[i].style.display="none";
  YlistBoxN[i].style.display="none";
}
var positionContainer =cont.offsetTop;

function myFunction() {
   
  if (window.pageYOffset >= Ycontainer) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

  if(window.pageYOffset >= Ycontainer+200 && !showedContainer){
    for (var i = 0; i < cont.length; i++) {
    cont[i].style.display="block";
    cont[i].classList.add("transition-bottom-top");
    }
    showedContainer=true;
  }

  if (window.pageYOffset>=YsectionSport.offsetTop-300 && !showedSectionSport ) 
  {
    for (var i = 0; i < motivationImages.length-8; i++) {
    motivationImages[i].style.display="block";
    motivationImages[i].classList.add("transition-right-left");
  }
  showedSectionSport=true;
   
  }
   if (window.pageYOffset>=YsectionStudy.offsetTop-300 && !showedSectionStudy)  
  {
    for (var i = 4; i < motivationImages.length-4; i++) {
    motivationImages[i].style.display="block";
    motivationImages[i].classList.add("transition-left-right");
  }
  showedSectionStudy=true;
  }
   if (window.pageYOffset>=YsectionLife.offsetTop-300 && !showedSectionLife) 
  {
    for (var i = 8; i < motivationImages.length; i++) {
    motivationImages[i].style.display="block";
    motivationImages[i].classList.add("transition-right-left");
    showedSectionLife=true;

    if(bodyWidth<=1100 && !showedFooter){
      showedFooter=true;
      for (var i = 0; i < YboxNavigate.length; i++) {
      YboxNavigate[i].style.display="block";
  YlistBoxN[i].style.display="block";
    YboxNavigate[i].classList.add("transition-bottom-top");
    YlistBoxN[i].classList.add("transition-bottom-top-late");
       }
    }

  }

  }
   if (window.pageYOffset>=Yfooter.offsetTop-300 && !showedFooter) 
  {
    for (var i = 0; i < YboxNavigate.length; i++) {
      YboxNavigate[i].style.display="block";
  YlistBoxN[i].style.display="block";
    YboxNavigate[i].classList.add("transition-bottom-top");
    YlistBoxN[i].classList.add("transition-bottom-top-late");
    showedFooter=false;
  } 
  }
}

var slideIndex = 0;
showSlides();
var slides ;
var dotes;
var time;

function showSlides() {
  var i;
  slides = document.getElementsByClassName("mySlides");
  dotes=document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
      dotes[i].style.backgroundColor="#fff";

  }

  if (slideIndex >= slides.length) {slideIndex = 0}
  slides[slideIndex].style.display = "block";
  dotes[slideIndex].style.backgroundColor="#717181";
  time=setTimeout(showSlides, 5000); // Change image every 2 seconds
    slideIndex++;

}

// show the next image of slidshow
var btnNext = document.querySelector(".next");
btnNext.addEventListener('click',function(){
	 clearTimeout(time);
  showSlides();
});

//show the previous image if slidshow
var btnPrev=document.querySelector(".prev");
btnPrev.addEventListener('click',function(){
 clearTimeout(time);
 slideIndex-=2;
 if(slideIndex<0)
  slideIndex=2;
 showSlides();
});



/*-------------- the footer displayed in mobile advice -----------------------*/


var sections=document.getElementsByClassName("accordion");
for(var i=0;i<sections.length;i++){
	sections[i].addEventListener('click',function(event){
       this.classList.toggle('active-panel');
       var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      event.target.style.opacity="0.5";
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      event.target.style.opacity="1";
    } 
	});
}


/*-------------------------------- Show the Image of sport ----------------------------------------------------*/

//create an element when can i show the images

var showImageSport = document.createElement('div');
var btnClose = document.createElement('button');
btnClose.textContent="X";
 showImageSport.classList.add('show-picture')
 showImageSport.appendChild(btnClose);

   var containerSport =document.querySelector('.container-sport'); 
   containerSport.appendChild(showImageSport);
   showImageSport.style.display='none';
 
var boxImages = document.querySelectorAll('.btnSport');
for (var i = 0; i <boxImages.length; i++) {
 boxImages[i].addEventListener('click',function(event){
  var parnentImageSport= event.target.parentNode.parentNode.children;  
    showImageSport.style.backgroundImage="url("+parnentImageSport[0].src+")";
    showImageSport.style.display='block';

 });
}

// finish displaying the picture
  btnClose.addEventListener('click',function(){
     showImageSport.style.display='none';
  })

  /*-------------------------------- Show the Image of study ----------------------------------------------------*/
var showImageStudy= document.createElement('div');
var btnClose = document.createElement('button');
btnClose.textContent="X";
 showImageStudy.classList.add('show-picture')
 showImageStudy.appendChild(btnClose);

   var containerStudy =document.querySelector('.container-study'); 
   containerStudy.appendChild(showImageStudy);

   showImageStudy.style.display='none';
 
var boxImages = document.querySelectorAll('.btnStudy');
for (var i = 0; i <boxImages.length; i++) {
 boxImages[i].addEventListener('click',function(event){
  var parnentImageStudy= event.target.parentNode.parentNode.children;  
    showImageStudy.style.backgroundImage="url("+parnentImageStudy[0].src+")";
    showImageStudy.style.display='block';

 });
}

  btnClose.addEventListener('click',function(){
     showImageStudy.style.display='none';
  })

/*-------------------------------- Show the Image of life ----------------------------------------------------*/
var showImageLife= document.createElement('div');
var btnClose = document.createElement('button');
btnClose.textContent="X";
 showImageLife.classList.add('show-picture')
 showImageLife.appendChild(btnClose);

   var containerLife =document.querySelector('.container-life'); 
   containerLife.appendChild(showImageLife);

   showImageLife.style.display='none';
 
var boxImages = document.querySelectorAll('.btnLife');
for (var i = 0; i <boxImages.length; i++) {
 boxImages[i].addEventListener('click',function(event){
  var parnentImageLife= event.target.parentNode.parentNode.children;  
    showImageLife.style.backgroundImage="url("+parnentImageLife[0].src+")";
    showImageLife.style.display='block';

 });
}

  btnClose.addEventListener('click',function(){
     showImageLife.style.display='none';
  })

/*------------------------------------------------------------------------------------*/
// drop down the content for motivation button

var dropdown = document.querySelector('.dropdown');
var dropdownContent=document.querySelector('.dropdown-content');
var dropeddown=false;
 dropdown.addEventListener('click',function(){
  if(!dropeddown){
      dropdownContent.style.display="flex";
     dropdownContent.style.border="5px solid orange";
          dropdownContent.style.borderTop="0";
       dropdownContent.style.maxHeight=dropdownContent.scrollHeight +"px";
       dropeddown=true;
     }else{
              dropdownContent.style.border="0";
             dropdownContent.style.maxHeight=null;
             dropeddown=false;
     }
	 
});

// btn menu 

var btnMenu = document.querySelector('#btn_menu');
var dropDownMenu=document.querySelector('.dropdown-content-menu');
var listMenu=document.querySelector('.list-block');
var dropeddownmenu=false;

btnMenu.addEventListener('click',function(){
  if (!dropeddownmenu) {
       dropDownMenu.style.display="block";
       dropDownMenu.style.border="5px solid orange";
       dropDownMenu.style.borderTop="0";
       dropDownMenu.style.maxHeight=dropDownMenu.scrollHeight +"px";
       btnMenu.style.backgroundColor="orange";
       dropeddownmenu=true;
     }else{
      dropDownMenu.style.maxHeight=null;
      dropDownMenu.style.border="0";
      btnMenu.style.backgroundColor="white";
      dropDownMenu.style.display="none";// if ididn't that the list it will be showen
      dropeddownmenu=false;
     }
  
});
