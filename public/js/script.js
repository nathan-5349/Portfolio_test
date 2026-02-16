// ===========================
// Animation Typewriter
// ===========================
window.onload = function () {
    const texteElement = document.getElementById("typewriter");
    const mots = ["développeur", "en BTS SIO", "en alternance"];
    let indexMot = 0;
    let indexLettre = 0;
    let suppression = false;
    
    function taper() {
        const motActuel = mots[indexMot];
        const texteVisible = suppression
        ? motActuel.substring(0, indexLettre--)
        : motActuel.substring(0, indexLettre++);
        
        texteElement.textContent = "Je suis " + texteVisible;
        
        let delai = suppression ? 80 : 120;
        
        if (!suppression && indexLettre === motActuel.length + 1) {
            suppression = true;
            delai = 800;
        } else if (suppression && indexLettre === 0) {
            suppression = false;
            indexMot = (indexMot + 1) % mots.length;
            delai = suppression ? 100 : 150;
        }
        
        setTimeout(taper, delai);
    }
    
    taper();
};

// ===========================
// Bouton Retour en haut
// ===========================
const boutonScroll = document.querySelector('.boutonScroll');

if (boutonScroll) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            boutonScroll.classList.add('visible');
        } else {
            boutonScroll.classList.remove('visible');
        }
    });
    
    boutonScroll.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===========================
// Indicateur de progression de lecture
// ===========================
function createProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    progressBar.setAttribute('role', 'progressbar');
    progressBar.setAttribute('aria-label', 'Progression de lecture');
    document.body.prepend(progressBar);
    
    window.addEventListener('scroll', () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
        progressBar.setAttribute('aria-valuenow', Math.round(scrolled));
    });
}

// Créer la barre de progression
createProgressBar();

// ===========================
// Système de filtrage des projets
// ===========================
const filterBtns = document.querySelectorAll('.filterBouton');
const projets = document.querySelectorAll('.projetCarte');
const slider = document.querySelector('.filterSlider');

if (filterBtns.length > 0 && slider) {
    function positionnerSlider(bouton) {
        slider.style.width = `${bouton.offsetWidth}px`;
        slider.style.left = `${bouton.offsetLeft}px`;
    }
    
    const boutonActif = document.querySelector('.filterBouton.active');
    if (boutonActif) {
        setTimeout(() => positionnerSlider(boutonActif), 100);
    }
    
    projets.forEach((projet, index) => {
        setTimeout(() => {
            projet.classList.add('show');
        }, index * 100);
    });
    
    filterBtns.forEach(bouton => {
        bouton.addEventListener('click', () => {
            filterBtns.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-selected', 'false');
            });
            bouton.classList.add('active');
            bouton.setAttribute('aria-selected', 'true');
            
            positionnerSlider(bouton);
            
            const categorie = bouton.dataset.category;
            
            projets.forEach(projet => {
                projet.classList.remove('show');
            });
            
            setTimeout(() => {
                const projetsFiltres = Array.from(projets).filter(projet => {
                    const categories = projet.dataset.categories.split(' ');
                    return categorie === 'tous' || categories.includes(categorie);
                });
                
                projets.forEach(projet => {
                    const categories = projet.dataset.categories.split(' ');
                    if (categorie === 'tous' || categories.includes(categorie)) {
                        projet.style.display = 'block';
                    } else {
                        projet.style.display = 'none';
                    }
                });
                
                projetsFiltres.forEach((projet, index) => {
                    setTimeout(() => {
                        projet.classList.add('show');
                    }, index * 100);
                });
            }, 300);
        });
    });
    
    window.addEventListener('resize', () => {
        const boutonActif = document.querySelector('.filterBouton.active');
        if (boutonActif) {
            positionnerSlider(boutonActif);
        }
    });
}

// ===========================
// Formulaire de contact AMÉLIORÉ
// ===========================
const contactForm = document.getElementById('formulaire');

if (contactForm) {
    const prenomInput = document.getElementById('prenom');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const submitBtn = contactForm.querySelector('.boutonEnvoi');
    
    // =============================
    // 1. VALIDATION EN TEMPS RÉEL
    // =============================
    
    // Fonction pour valider l'email
    function validerEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    
    // Fonction pour valider le prénom (3-50 caractères, lettres et espaces uniquement)
    function validerPrenom(prenom) {
        const trimmed = prenom.trim();
        const regex = /^[a-zA-ZÀ-ÿ\s'-]{3,50}$/;
        return trimmed.length >= 3 && trimmed.length <= 50 && regex.test(trimmed);
    }
    
    // Fonction pour valider le message (10-500 caractères)
    function validerMessage(message) {
        const trimmed = message.trim();
        return trimmed.length >= 10 && trimmed.length <= 500;
    }
    
    // Fonction pour échapper les caractères dangereux (protection XSS basique côté client)
    function echapperHTML(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }
    
    // Fonction pour afficher l'erreur avec couleurs harmonieuses
    function afficherErreur(input, message) {
        input.style.borderColor = 'rgba(239, 68, 68, 0.6)';
        input.style.backgroundColor = 'rgba(239, 68, 68, 0.05)';
        input.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';
        
        const ancienMessage = input.parentElement.querySelector('.error-message');
        if (ancienMessage) {
            ancienMessage.remove();
        }
        
        if (message) {
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.textContent = message;
            errorDiv.style.cssText = `
                color: rgba(239, 68, 68, 0.9);
                font-size: 0.85rem;
                margin-top: 0.5rem;
                display: flex;
                align-items: center;
                gap: 0.25rem;
            `;
            input.parentElement.appendChild(errorDiv);
        }
    }
    
    // Fonction pour afficher le succès avec couleurs harmonieuses
    function afficherSucces(input) {
        input.style.borderColor = 'rgba(16, 185, 129, 0.6)';
        input.style.backgroundColor = 'rgba(16, 185, 129, 0.03)';
        input.style.boxShadow = '0 0 0 3px rgba(16, 185, 129, 0.08)';
        
        const ancienMessage = input.parentElement.querySelector('.error-message');
        if (ancienMessage) {
            ancienMessage.remove();
        }
    }
    
    // Fonction pour réinitialiser le style (important pour l'autocomplétion)
    function reinitialiserStyle(input) {
        input.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        input.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
        input.style.boxShadow = '';
        input.style.color = 'white';
        
        const ancienMessage = input.parentElement.querySelector('.error-message');
        if (ancienMessage) {
            ancienMessage.remove();
        }
    }
    
    // Validation du prénom
    prenomInput.addEventListener('blur', () => {
        const prenom = prenomInput.value.trim();
        if (prenom === '') {
            reinitialiserStyle(prenomInput);
        } else if (!validerPrenom(prenom)) {
            if (prenom.length < 3) {
                afficherErreur(prenomInput, 'Le prénom doit contenir au moins 3 caractères');
            } else if (prenom.length > 50) {
                afficherErreur(prenomInput, 'Le prénom ne peut pas dépasser 50 caractères');
            } else {
                afficherErreur(prenomInput, 'Le prénom ne peut contenir que des lettres');
            }
        } else {
            afficherSucces(prenomInput);
        }
    });
    
    prenomInput.addEventListener('input', () => {
        if (prenomInput.value.trim() !== '' && validerPrenom(prenomInput.value)) {
            afficherSucces(prenomInput);
        }
    });
    
    // Validation de l'email
    emailInput.addEventListener('blur', () => {
        const email = emailInput.value.trim();
        if (email === '') {
            reinitialiserStyle(emailInput);
        } else if (!validerEmail(email)) {
            afficherErreur(emailInput, 'Veuillez entrer une adresse email valide (ex: nom@exemple.fr)');
        } else {
            afficherSucces(emailInput);
        }
    });
    
    emailInput.addEventListener('input', () => {
        if (emailInput.value.trim() !== '' && validerEmail(emailInput.value)) {
            afficherSucces(emailInput);
        }
    });
    
    // Validation du message
    messageInput.addEventListener('blur', () => {
        const message = messageInput.value.trim();
        if (message === '') {
            reinitialiserStyle(messageInput);
        } else if (message.length < 10) {
            afficherErreur(messageInput, 'Le message doit contenir au moins 10 caractères');
        } else if (message.length > 500) {
            afficherErreur(messageInput, 'Le message ne peut pas dépasser 500 caractères');
        } else {
            afficherSucces(messageInput);
        }
    });
    
    messageInput.addEventListener('input', () => {
        const message = messageInput.value.trim();
        if (message.length >= 10 && message.length <= 500) {
            afficherSucces(messageInput);
        }
    });
    
    // =============================
    // 2. COMPTEUR DE CARACTÈRES
    // =============================
    
    const maxChars = 500;
    
    const compteurDiv = document.createElement('div');
    compteurDiv.className = 'character-counter';
    compteurDiv.innerHTML = `
        <span class="counter-text">
            <span class="counter-current">0</span>/<span class="counter-max">${maxChars}</span>
        </span>
    `;
    compteurDiv.style.cssText = `
        text-align: right;
        font-size: 0.85rem;
        margin-top: 0.5rem;
        color: rgba(255, 255, 255, 0.5);
        transition: color 0.3s ease;
    `;
    messageInput.parentElement.appendChild(compteurDiv);
    
    const counterCurrent = compteurDiv.querySelector('.counter-current');
    
    messageInput.addEventListener('input', () => {
        const count = messageInput.value.length;
        counterCurrent.textContent = count;
        
        if (count > maxChars) {
            compteurDiv.style.color = 'rgba(239, 68, 68, 0.9)';
            afficherErreur(messageInput, `Vous avez dépassé la limite de ${maxChars} caractères`);
        } else if (count > maxChars * 0.9) {
            compteurDiv.style.color = 'rgba(245, 158, 11, 0.9)';
        } else if (count >= 10) {
            compteurDiv.style.color = 'rgba(16, 185, 129, 0.8)';
        } else if (count > 0) {
            compteurDiv.style.color = 'rgba(255, 255, 255, 0.6)';
        } else {
            compteurDiv.style.color = 'rgba(255, 255, 255, 0.5)';
        }
    });
    
    // =============================
    // 3. ÉTATS DU BOUTON D'ENVOI
    // =============================
    
    const originalBtnHTML = submitBtn.innerHTML;
    
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const prenomValue = echapperHTML(prenomInput.value.trim());
        const emailValue = echapperHTML(emailInput.value.trim());
        const messageValue = echapperHTML(messageInput.value.trim());
        
        const prenomValide = validerPrenom(prenomValue);
        const emailValide = validerEmail(emailValue);
        const messageValide = validerMessage(messageValue);
        
        if (!prenomValide) {
            afficherErreur(prenomInput, 'Le prénom doit contenir entre 3 et 50 caractères (lettres uniquement)');
            prenomInput.focus();
            return;
        }
        
        if (!emailValide) {
            afficherErreur(emailInput, 'Veuillez entrer une adresse email valide');
            emailInput.focus();
            return;
        }
        
        if (!messageValide) {
            afficherErreur(messageInput, messageValue.length < 10 
                ? 'Le message doit contenir au moins 10 caractères' 
                : `Le message ne peut pas dépasser ${maxChars} caractères`);
            messageInput.focus();
            return;
        }
        
        submitBtn.innerHTML = `
            <span>Envoi en cours...</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
            </svg>
        `;
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.7';
        submitBtn.style.cursor = 'not-allowed';
        
        try {
            const formData = new FormData(this);
            const response = await fetch(this.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                submitBtn.innerHTML = `
                    <span>Message envoyé !</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                        <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                `;
                submitBtn.style.background = 'linear-gradient(135deg, rgba(16, 185, 129, 0.8), rgba(5, 150, 105, 0.8))';
                
                showNotification('✅ Message envoyé avec succès !', 'success');
                this.reset();
                
                [prenomInput, emailInput, messageInput].forEach(input => {
                    reinitialiserStyle(input);
                });
                counterCurrent.textContent = '0';
                compteurDiv.style.color = 'rgba(255, 255, 255, 0.5)';
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalBtnHTML;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                    submitBtn.style.opacity = '';
                    submitBtn.style.cursor = '';
                }, 3000);
            } else {
                throw new Error('Erreur serveur');
            }
        } catch (error) {
            submitBtn.innerHTML = `
                <span>Erreur, réessayer</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="15" y1="9" x2="9" y2="15"/>
                    <line x1="9" y1="9" x2="15" y2="15"/>
                </svg>
            `;
            submitBtn.style.background = 'linear-gradient(135deg, rgba(239, 68, 68, 0.8), rgba(220, 38, 38, 0.8))';
            
            showNotification('❌ Une erreur est survenue. Veuillez réessayer.', 'error');
            
            setTimeout(() => {
                submitBtn.innerHTML = originalBtnHTML;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
                submitBtn.style.opacity = '';
                submitBtn.style.cursor = '';
            }, 3000);
        }
    });
}

// ===========================
// Gestion de la page de connexion
// ===========================
window.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('error') === '1') {
        console.log("error=1 détecté");
        const notif = document.getElementById('notif');
        if (notif) {
            notif.textContent = "Mot de passe incorrect !";
            notif.classList.add("show");
            setTimeout(() => {
                notif.classList.remove("show");
            }, 3000);
        }
    }
    
    if (urlParams.get('success') === '1') {
        showNotification('✅ Message envoyé avec succès !', 'success');
    }
});

// ===========================
// Système de notification
// ===========================
function showNotification(message, type = 'info') {
    const existingNotif = document.querySelector('.notification');
    if (existingNotif) {
        existingNotif.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 15px 25px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        font-family: 'Inter', sans-serif;
        font-size: 0.95rem;
        max-width: 350px;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Ajouter les animations
if (!document.getElementById('notification-styles')) {
    const style = document.createElement('style');
    style.id = 'notification-styles';
    style.textContent = `
        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(100%);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        @keyframes slideOutRight {
            from {
                opacity: 1;
                transform: translateX(0);
            }
            to {
                opacity: 0;
                transform: translateX(100%);
            }
        }
        
        @keyframes spin {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }
        
        .progress-bar {
            position: fixed;
            top: 0;
            left: 0;
            height: 3px;
            background: linear-gradient(90deg, #651394, #a01e9c);
            z-index: 9999;
            transition: width 0.1s ease;
            width: 0;
        }
        
        .error-message {
            animation: fadeIn 0.3s ease;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-5px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);
}

// ===========================
// Gestion du bouton burger sur mobile
// ===========================
const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobileMenu');
const body = document.body;
const navLinks = document.querySelectorAll('.mobileMenu a');

function toggleMenu() {
    const isOpen = burger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    body.classList.toggle('no-scroll');
    burger.setAttribute('aria-expanded', isOpen);
}

burger.addEventListener('click', toggleMenu);

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('open');
        mobileMenu.classList.remove('open');
        body.classList.remove('no-scroll');
        burger.setAttribute('aria-expanded', 'false');
    });
});

// Easter egg console
console.log(`
╔═══════════════════════════════════════╗
║                                       ║
║     👋 Salut recruteur curieux !     ║
║                                       ║
║  Tu regardes la console ? Bravo !    ║
║  Moi aussi j'aime fouiller le code   ║
║                                       ║
║  📧 Contact: ndub.may@gmail.com      ║
║  💼 LinkedIn: /nathan-dubois         ║
║  🐙 GitHub: /nathan-5349             ║
║                                       ║
╚═══════════════════════════════════════╝
`);


// ===========================
// Swiper Carousel 3D - 5 cartes visibles comme l'image
// ===========================
new Swiper(".veilleSwiper", {
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: "auto",
    grabCursor: true,
    loop: true,
    speed: 600,
    
    // Configuration pour afficher 5 cartes
    coverflowEffect: {
        rotate: 0,          // Pas de rotation de base
        stretch: 80,        // Espacement entre cartes
        depth: 200,         // Profondeur 3D
        modifier: 1,        // Multiplicateur d'effet
        slideShadows: false,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: false,
    },

    // Navigation au clavier
    keyboard: {
        enabled: true,
    },

    // Breakpoints pour responsive
    breakpoints: {
        320: {
            coverflowEffect: {
                stretch: 60,
                depth: 150,
            }
        },
        768: {
            coverflowEffect: {
                stretch: 80,
                depth: 200,
            }
        }
    }
});