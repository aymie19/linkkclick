// JavaScript Document

/* =====================================================
   SCROLL REVEAL ANIMATION
===================================================== */


const revealSections =
document.querySelectorAll(
".archive-section, .contents"
);



const revealObserver =
new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add("show");


        }


    });


},
{

    threshold:0.15

});



revealSections.forEach(section=>{


    revealObserver.observe(section);


});







/* =====================================================
   SMOOTH CONTENT NAVIGATION
===================================================== */


const contentLinks =
document.querySelectorAll(".contents-grid a");



contentLinks.forEach(link=>{


    link.addEventListener("click",(e)=>{


        e.preventDefault();



        const target =
        document.querySelector(
        link.getAttribute("href")
        );



        target.scrollIntoView({

            behavior:"smooth",

            block:"start"

        });


    });


});







/* =====================================================
   ACTIVE SECTION TRACKER
===================================================== */


const sections =
document.querySelectorAll(
".archive-section"
);



const observer =
new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            const id =
            entry.target.getAttribute("id");



            document
            .querySelectorAll(".contents-grid a")
            .forEach(link=>{


                link.classList.remove("active");


            });



            const activeLink =
            document.querySelector(
            `.contents-grid a[href="#${id}"]`
            );



            if(activeLink){

                activeLink.classList.add("active");

            }



        }



    });


},
{

    threshold:0.4

});



sections.forEach(section=>{


    observer.observe(section);


});







/* =====================================================
   BACK TO TOP BUTTON
===================================================== */


const backButton =
document.createElement("div");


backButton.className =
"back-top";


backButton.innerHTML =
"↑";


document.body.appendChild(backButton);





window.addEventListener("scroll",()=>{


    if(window.scrollY > 700){


        backButton.classList.add("active");


    }

    else{


        backButton.classList.remove("active");


    }



});





backButton.addEventListener("click",()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});







/* =====================================================
   NAVBAR BACKGROUND CHANGE
===================================================== */


const navbar =
document.querySelector(".navbar");



window.addEventListener("scroll",()=>{


    if(window.scrollY > 100){


        navbar.style.background =
        "rgba(10,10,10,.96)";


    }

    else{


        navbar.style.background =
        "rgba(12,12,12,.90)";


    }


});






/* =====================================================
   DROPDOWN MOBILE SUPPORT
===================================================== */


const dropdownButton =
document.querySelector(".dropbtn");


const dropdownMenu =
document.querySelector(".dropdown-content");



if(dropdownButton){


dropdownButton.addEventListener("click",()=>{


    dropdownMenu.classList.toggle("open");


});


}
/* =========================================
   APPEARANCE IMAGE VIEWER
========================================= */


const seasons = [

    {
        title:"SEASON 1",
        image:"img/ssl1.webp"
    },

    {
        title:"SEASON 2",
        image:"img/sl1.webp"
    },

    {
        title:"BRIDON ARC",
        image:"img/sl2.webp"
    }

];


let currentSeason = 0;



function updateSeason(){


    const image =
    document.getElementById("seasonImage");


    const title =
    document.getElementById("seasonTitle");


    const counter =
    document.getElementById("seasonCounter");



    image.style.opacity = 0;



    setTimeout(()=>{


        image.src =
        seasons[currentSeason].image;


        title.textContent =
        seasons[currentSeason].title;


        counter.textContent =
        `0${currentSeason+1} / 03`;


        image.style.opacity = 1;


    },300);


}





function changeSeason(number){


    currentSeason = number;


    updateSeason();


}





function nextSeason(){


    currentSeason++;


    if(currentSeason >= seasons.length){

        currentSeason = 0;

    }


    updateSeason();

}




function previousSeason(){


    currentSeason--;


    if(currentSeason < 0){

        currentSeason = seasons.length - 1;

    }


    updateSeason();

}

// SCROLL REVEAL

const revealElements = document.querySelectorAll(
    ".archive-section, .contents"
);


const revealOnScroll = () => {

    revealElements.forEach((element)=>{

        const windowHeight = window.innerHeight;

        const elementTop = element.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){

            element.classList.add("show");

        }

    });

};


window.addEventListener("scroll", revealOnScroll);


revealOnScroll();


console.log("characters.js loaded");


const galleryImages = document.querySelectorAll(".film-strip img");

const lightbox = document.querySelector("#lightbox");

const lightboxImg = document.querySelector("#lightbox-img");

const closeButton = document.querySelector(".close-lightbox");



galleryImages.forEach(img => {

    img.addEventListener("click",()=>{


        if(lightbox){

            lightbox.classList.add("active");

            lightboxImg.src = img.src;

        }


    });

});



closeButton.onclick = function(){

    lightbox.classList.remove("active");

};



lightbox.onclick = function(e){

    if(e.target !== lightboxImg){

        lightbox.classList.remove("active");

    }

};