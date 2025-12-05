/* =========================================
   1. TYPING EFFECT (Qoraalka is qoraya)
   ========================================= */
const textElement = document.querySelector(".typing-text");
const words = ["Web Developer", "Gymer", "Baller"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChars = currentWord.substring(0, charIndex);

    if (textElement) {
        textElement.textContent = currentChars;
    }

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 100); // Xawaaraha Qorista
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 50);  // Xawaaraha Tirtirida
    } else {
        isDeleting = !isDeleting;
        // U gudub ereyga xiga haddii aan la tirtirayn
        if (!isDeleting) {
            wordIndex = (wordIndex + 1) % words.length;
        }
        setTimeout(typeEffect, 1000); // Hakadka
    }
};

/* =========================================
   2. EMAILJS FUNCTIONALITY
   ========================================= */
document.addEventListener("DOMContentLoaded", function () {
    
    // Bilow Typing Effect
    if (textElement) {
        setTimeout(typeEffect, 1000);
    }

    // Raadi Form-ka
    const form = document.getElementById("contact-form");

    // Hubi in form-ka jiro
    if (form) {
        // Init EmailJS (Public Key-gaaga)
        emailjs.init("og9XKIHVyQjtfZq3e");

        form.addEventListener("submit", function (e) {
            e.preventDefault(); // Jooji refresh-ka bogga

            // Beddel badhanka qoraalkiisa si loo ogaado inuu shaqeynayo
            const btn = form.querySelector('.btn');
            const originalText = btn.value;
            btn.value = "Sending...";

            // Xogta la dirayo
            const params = {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                message: document.getElementById("message").value
            };

            // Dirista (Service ID, Template ID, Params)
            emailjs.send("service_uatsryk", "template_r16eyd1", params)
                .then(() => {
                    alert("Message sent successfully! ✅");
                    form.reset(); // Nadiifi form-ka
                    btn.value = originalText;
                })
                .catch((err) => {
                    console.error("Error:", err);
                    alert("Failed to send. Please try again. ❌");
                    btn.value = originalText;
                });
        });
    }
});