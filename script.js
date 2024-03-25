var serverUrl = "https://portfolio-server-hfj2.onrender.com";
//serverUrl = "http://localhost:3000";

// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let loc;

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
        let offset = sec.offsetTop -320;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
       // console.log("top:"+top+"offset:"+offset+"height:"+height+"id:"+id);
        if(top >= offset  && top < offset +height){
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


//
document.addEventListener("DOMContentLoaded", function() {
  
  document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita il comportamento predefinito del modulo di inviare il modulo

    // Recupera i dati del modulo
    const formData = new FormData(this);

   // Estrai i dati e costruisci un oggetto JavaScript ordinario
   const formDataObject = {};
   formData.forEach((value, key) => {
     formDataObject[key] = value;
   });
   


   // Converti l'oggetto in una stringa JSON
   const jsonData = JSON.stringify(formDataObject);

   let url = serverUrl + "/api/handle_form";
    // Invia una richiesta AJAX al backend
    fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'},
      method: "POST",
      body:  jsonData
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Errore nella richiesta");
      }
      return response.text();
    })
    .then(data => {
      console.log(data); // Riceve i dati di risposta dal backend
      // Puoi fare qualsiasi altra cosa con i dati di risposta qui
    })
    .catch(error => {
      console.error("Errore:", error);
    });
  
    setTimeout(function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 1000); // Adjust the delay time as needed (in milliseconds)
  });
 
});

//
document.addEventListener("DOMContentLoaded", function() {
let url = serverUrl + "/api/speak";
// Invia una richiesta AJAX al backend
fetch(url, {
  method: "POST",
})
.then(response => {
  if (!response.ok) {
    throw new Error("Server non raggiungibile");
  }
  return response.text();
})
.then(data => {
  console.log(data); // Riceve i dati di risposta dal backend
  // Puoi fare qualsiasi altra cosa con i dati di risposta qui
})
.catch(error => {
  console.error("Errore:", error);
});
});


document.getElementById("lang_selection").onclick = function() {
  var langOptions = document.querySelector(".lang-options");
  var iconElement = document.getElementById("arrow_down");
 
  if (iconElement.classList.contains("bx") && iconElement.classList.contains("bxs-down-arrow")) {
    langOptions.style.display = "none";//it non implementata 
  
    iconElement.classList.remove("bx", "bxs-down-arrow"); // Rimuove le classi esistenti
    iconElement.classList.add("bx", "bxs-up-arrow"); // Aggiunge la nuova classe
  } else {
    langOptions.style.display = "none";
    
    iconElement.classList.remove("bx", "bxs-up-arrow"); // Rimuove le classi esistenti
    iconElement.classList.add("bx", "bxs-down-arrow"); // Aggiunge la nuova classe
  }
  
 
};

