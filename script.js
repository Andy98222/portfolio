// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        console.log("top:"+top+"offset:"+offset+"height:"+height+"id:"+id);
        if(top >= offset -1000 && top < offset +height){
            //active navbar links
            navLinks.forEach(links =>{
                links.classList.remove('active');
                console.log(links.id);
                document.querySelector('header nav a[href*=' +id + ']').classList.add('active');
            });
            //active section for animation on scroll
            sec.classList.add('show-animate');
        }
        else{
    
        }
    });
   // sticky header 
   let header = document.querySelector('header');
   header.classList.toggle('sticky', window.scrollY >100);
// animation footer on scroll
let footer = document.querySelector('footer');
footer.classList.toggle('show-animate', this.innerHeight + this.scrollY>= document.scrollingElement.scrollHeight);
}
// sticky header
// remove toggle icon and navbar when click navbar links (scroll)


// Select the <h3> element
document.addEventListener("DOMContentLoaded", function() {
    // Select all elements with the class 'progress'
    var progressElements = document.querySelectorAll('.progress');

    // Loop through each .progress element
    progressElements.forEach(function(progressElement) {
        // Get the <h3> element within the current .progress element
        var h3Element = progressElement.querySelector('h3');

        // Check if the <h3> element is found
        if (h3Element) {
            // Get the content of the span within the <h3> element
            var spanContent = h3Element.querySelector('span').textContent;

            var progress_bar =  progressElement.querySelector('.bar span');
            if (progress_bar) {
                // Set the width of the span
                progress_bar.style.width = spanContent;
                
            } else {
                console.log("Span element not found within .progress element.");
            }

        } else {
            console.log("Span element not found within .progress element.");
        }
    });
});
