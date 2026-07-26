// =====================================
// LINK CLICK HOME PAGE
// VIDEO SLIDER
// =====================================


// Get slides

const slides = document.querySelectorAll(".slide");


// Get buttons (UPDATED TO ID)

const nextButton = document.querySelector("#next");

const prevButton = document.querySelector("#prev");


// Get dots

const dots = document.querySelectorAll(".dot");


// Current slide

let currentSlide = 0;




// Change slide function

function showSlide(index){


    // Remove active

    slides.forEach((slide)=>{


        slide.classList.remove("active");


        // pause videos

        let video = slide.querySelector("video");


        if(video){

            video.pause();

        }


    });



    dots.forEach((dot)=>{

        dot.classList.remove("active");

    });





    // Add active

    slides[index].classList.add("active");


    dots[index].classList.add("active");





    // Play video if current slide has video

    let currentVideo = slides[index].querySelector("video");


    if(currentVideo){


        currentVideo.currentTime = 0;


        currentVideo.play();


    }



}





// Next button

nextButton.addEventListener("click",()=>{


    currentSlide++;


    if(currentSlide >= slides.length){


        currentSlide = 0;


    }


    showSlide(currentSlide);


});






// Previous button

prevButton.addEventListener("click",()=>{


    currentSlide--;


    if(currentSlide < 0){


        currentSlide = slides.length - 1;


    }


    showSlide(currentSlide);


});







// Dots

dots.forEach((dot,index)=>{


    dot.addEventListener("click",()=>{


        currentSlide = index;


        showSlide(currentSlide);


    });



});








// Auto slide every 8 seconds

setInterval(()=>{


    currentSlide++;


    if(currentSlide >= slides.length){


        currentSlide = 0;


    }


    showSlide(currentSlide);



},8000);






// Start slider

showSlide(currentSlide);





// =====================================
// SCROLL REVEAL
// =====================================


const reveal = document.querySelectorAll(
"#about, #story, #characters, #title-about, #title-character"
);



const revealObserver = new IntersectionObserver(
(entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add("show");


        }


    });


},
{

threshold:0.15

});





reveal.forEach(section=>{


    revealObserver.observe(section);


});