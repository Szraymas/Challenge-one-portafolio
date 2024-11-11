//EmailJS con USER_ID
emailjs.init("-pCO4Doe0bcKELPRe");  

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Enviar el formulario usando EmailJS
    emailjs.sendForm("service_5y4y8no", "template_ocsusne", this)
        .then(function(response) {
            console.log("Éxito:", response);
            alert("¡Mensaje enviado con éxito!");
        }, function(error) {
            console.error("Error:", error);
            alert("Hubo un error al enviar tu mensaje. Intenta nuevamente.");
        });
});

