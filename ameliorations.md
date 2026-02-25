<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Portfolio de Nathan Dubois, développeur web en BTS SIO SLAM. Projets, compétences et réalisations en alternance.">
    <meta name="keywords" content="Nathan Dubois, développeur, BTS SIO, SLAM, portfolio, alternance, développement web, JavaScript, HTML, CSS">
    <meta name="author" content="Nathan Dubois">
    <meta name="robots" content="index, follow">
    
    <!-- Couleur de la barre d'adresse mobile -->
    <meta name="theme-color" content="#651394">
    <meta name="msapplication-navbutton-color" content="#651394">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    
    <!--  Apercu en cas de partage -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://nathandubois.vercel.app/">
    <meta property="og:title" content="Nathan Dubois - Développeur BTS SIO SLAM">
    <meta property="og:description" content="Portfolio de Nathan Dubois, développeur web en alternance. Découvrez mes projets et compétences.">
    <meta property="og:image" content="https://nathandubois.vercel.app/assets/image/og-image.jpg">
    
    <link rel="icon" type="image/png" href="assets/image/icone.png">
    <title>Nathan Dubois - Développeur BTS SIO SLAM | Portfolio</title>
    <link rel="canonical" href="https://nathandubois.vercel.app/">
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <script type="text/javascript" src="js/script.js" defer></script>
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    
    <!-- Schema.org -->
    <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Nathan Dubois",
            "url": "https://nathandubois.vercel.app/",
            "image": "https://nathandubois.vercel.app/assets/image/profil.webp",
            "jobTitle": "Développeur web",
            "description": "Développeur web en BTS SIO option SLAM, spécialisé en développement front-end et applications web.",
            "sameAs": [
            "https://www.linkedin.com/in/nathan-dubois-602026382",
            "https://github.com/nathan-5349"
            ],
            "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Institut Informatique Appliquée de St-Berthevin"
            }
        }
    </script>
    
    <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Portfolio de Nathan Dubois",
            "url": "https://nathandubois.vercel.app/",
            "inLanguage": "fr-FR",
            "publisher": {
                "@type": "Person",
                "name": "Nathan Dubois"
            }
        }
    </script>
    
    
    <script type="text/javascript" src="js/script.js" defer></script>
</head>

<body>
    <a href="#mainContent" class="skip-link">Aller au contenu principal</a>
    
    <header class="siteHeader" role="banner">
        <div class="barreNav" role="navigation" aria-label="Barre de navigation principale" id="navigation-principale">
            <div class="barreNavContainer">
                <ul class="barreNavMenu">
                    <li><a href="#" class="barreNavLien">Accueil</a></li>
                    <li><a href="#formation" class="barreNavLien">Formation</a></li>
                    <li><a href="#profil" class="barreNavLien">Profil</a></li>
                    <li><a href="#competences" class="barreNavLien">Compétences</a></li>
                    <li><a href="#projets" class="barreNavLien">Projets</a></li>
                    <li><a href="#veille" class="barreNavLien">Veille</a></li>
                    <li><a href="#contact" class="barreNavLien">Contact</a></li>
                </ul>
            </div>
        </div>
        <button class="burger" aria-label="Ouvrir le menu" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
        </button>
        
        <!-- Nouveau menu mobile -->
        <nav class="mobileMenu" aria-hidden="true">
            <ul>
                <li><a href="#">Accueil</a></li>
                <li><a href="#formation">Formation</a></li>
                <li><a href="#profil">Profil</a></li>
                <li><a href="#competences">Compétences</a></li>
                <li><a href="#projets">Projets</a></li>
                <li><a href="#veille">Veille</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        
        <div>
            <h1 class="presTitre">Nathan Dubois</h1>
            <p class="presSousTitre">
                <span class="typeWritterWrapper">
                    <span id="typewriter" aria-live="polite">Je suis</span>
                </span>
            </p>
        </div>
        <button class="boutonScroll" aria-label="Retour en haut de page">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M12 19V5M5 12l7-7 7 7"/>
            </svg>
        </button>
    </header>
    
    <main id="mainContent" role="main">
        <!-- Section Formation  -->
        <section id="formation" class="section">
            <div class="container">
                <header class="titreSection">
                    <h2>Formation</h2>
                    <p class="sectionIntro">
                        Le BTS SIO (Services Informatiques aux Organisations) est un diplôme bac +2 qui prépare aux métiers de l'informatique.
                        Il se compose deux options principales.
                    </p>
                </header>
                
                <div class="formationComparatif" data-aos="fade-up">
                    <!-- Tabs selector -->
                    <div class="formationTabs" role="tablist" aria-label="Options du BTS SIO">
                        <button class="formationTab active" data-option="sisr" role="tab" aria-selected="true" aria-controls="panel-sisr">
                            <span class="tabIcon">🖧</span>
                            <span class="tabLabel">Option SISR</span>
                        </button>
                        <div class="tabDivider"></div>
                        <button class="formationTab" data-option="slam" role="tab" aria-selected="false" aria-controls="panel-slam">
                            <span class="tabIcon">💻</span>
                            <span class="tabLabel">Option SLAM</span>
                        </button>
                    </div>

                    <!-- Panels -->
                    <div class="formationPanels">
                        <!-- SISR Panel -->
                        <div id="panel-sisr" class="formationPanel active" role="tabpanel" aria-labelledby="tab-sisr">
                            <div class="panelImageCol">
                                <div class="panelImageWrap">
                                    <img src="assets/image/imageSISR.webp" alt="Salle serveurs infrastructure réseau" loading="lazy" width="500" height="380">
                                    <div class="panelImageOverlay"></div>
                                    <div class="panelBadge">SISR</div>
                                </div>
                            </div>
                            <div class="panelTextCol">
                                <div class="panelHeader">
                                    <h3>Solutions d'Infrastructures,<br>Système et Réseaux</h3>
                                    <p class="panelSubtitle">Pour les passionnés de réseaux et de systèmes</p>
                                </div>
                                <ul class="panelFeatures">
                                    <li>
                                        <span class="featureIcon">🔒</span>
                                        <div>
                                            <strong>Cybersécurité</strong>
                                            <span>Sécurisation des systèmes et des réseaux</span>
                                        </div>
                                    </li>
                                    <li>
                                        <span class="featureIcon">🌐</span>
                                        <div>
                                            <strong>Réseaux</strong>
                                            <span>Administration et configuration réseau</span>
                                        </div>
                                    </li>
                                    <li>
                                        <span class="featureIcon">☁️</span>
                                        <div>
                                            <strong>Cloud & Virtualisation</strong>
                                            <span>Déploiement et gestion d'infrastructures</span>
                                        </div>
                                    </li>
                                    <li>
                                        <span class="featureIcon">🖥️</span>
                                        <div>
                                            <strong>Systèmes</strong>
                                            <span>Administration Linux et Windows Server</span>
                                        </div>
                                    </li>
                                </ul>
                                <div class="panelMetier">
                                    <span class="metierLabel">Débouchés :</span>
                                    <span class="metierTags">
                                        <span>Administrateur réseau</span>
                                        <span>Technicien systèmes</span>
                                        <span>Ingénieur sécurité</span>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <!-- SLAM Panel -->
                        <div id="panel-slam" class="formationPanel" role="tabpanel" aria-labelledby="tab-slam">
                            <div class="panelImageCol">
                                <div class="panelImageWrap">
                                    <img src="assets/image/imageSLAM.jpg" alt="Éditeur de code développement logiciel" loading="lazy" width="500" height="380">
                                    <div class="panelImageOverlay"></div>
                                    <div class="panelBadge slam">SLAM</div>
                                </div>
                            </div>
                            <div class="panelTextCol">
                                <div class="panelHeader">
                                    <h3>Solutions Logicielles<br>et Applications Métiers</h3>
                                    <p class="panelSubtitle">Pour les passionnés de développement</p>
                                </div>
                                <ul class="panelFeatures">
                                    <li>
                                        <span class="featureIcon">🌍</span>
                                        <div>
                                            <strong>Développement Web</strong>
                                            <span>Création d'applications web front & back-end</span>
                                        </div>
                                    </li>
                                    <li>
                                        <span class="featureIcon">📱</span>
                                        <div>
                                            <strong>Mobile</strong>
                                            <span>Conception d'applications mobiles natives</span>
                                        </div>
                                    </li>
                                    <li>
                                        <span class="featureIcon">🗄️</span>
                                        <div>
                                            <strong>Bases de données</strong>
                                            <span>Conception et optimisation SQL/NoSQL</span>
                                        </div>
                                    </li>
                                    <li>
                                        <span class="featureIcon">🏗️</span>
                                        <div>
                                            <strong>Architecture logicielle</strong>
                                            <span>Conception et patterns de développement</span>
                                        </div>
                                    </li>
                                </ul>
                                <div class="panelMetier">
                                    <span class="metierLabel">Débouchés :</span>
                                    <span class="metierTags">
                                        <span>Développeur web</span>
                                        <span>Développeur mobile</span>
                                        <span>Analyste programmeur</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Indicateur "mon option" -->
                    <div class="formationMonOption" data-aos="fade-up" data-aos-delay="200">
                        <span class="monOptionIcon">🎓</span>
                        <p>Je suis actuellement en <strong>Option SLAM</strong> à l'Institut Informatique Appliquée de St-Berthevin</p>
                    </div>
                </div>
                
            </div>
        </section>
        
        <!-- Section Profil  -->    
        <section id="profil" class="section section-alt">
            
            <div class="container">
                <header class="titreSection">
                    <h2>Profil</h2>
                </header>
                
                <div class="profilContenu">
                    <div class="profilImage profilWrapper" data-aos="fade-right">
                        <img src="https://placehold.co/400x500/2a2a2a/e6d6f9?text=Nathan+Dubois" alt="Photo de Nathan Dubois" loading="lazy" width="400" height="500">
                    </div>
                    
                    <div class="profilTexte" data-aos="fade-left">
                        <h3>Apprenti en BTS SIO option SLAM  :</h3>
                        <p>
                            Diplômé d'un bac STI2D au lycée Immaculée Conception de Laval, 
                            je poursuis actuellement ma formation en BTS SIO option SLAM à l'Institut 
                            d'Informatique Appliquée de Saint-Berthevin en alternance à la Direction Générale des FInances Publiques.
                        </p>
                        <p>
                            Passionné par les technologies, j'aime apprendre en continu et développer des projets concrets en développement informatique.      
                        </p>
                        <p>
                            Sportif régulier depuis mon plus jeune âge, j'ai développé des qualités essentielles que je 
                            transpose aujourd'hui dans l'informatique : rigueur, gestion de la pression, et une volonté 
                            constante de progresser pour atteindre mes objectifs.    
                        </p>
                        <a href="../documents/cv.pdf" target="_blank" rel="noopener noreferrer" class="bouton">
                            <span>Télécharger mon CV</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                            </svg>
                        </a>                
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Section Compétences  -->
        <section id="competences" class="section">    
            <div class="container">
                <header class="titreSection"> 
                    <h2>Tableau de compétences</h2>
                    <p>
                        Ce tableau présente les compétences acquises et mobilisées au cours de la formation en BTS SIO.
                    </p>
                </header>
                
                <div class="competencesContenu" data-aos="fade-up">
                    <div class="competencesPreview">
                        <img src="https://placehold.co/800x400/2a2a2a/e6d6f9?text=Tableau+Competences" alt="Aperçu tableau de compétences BTS SIO" loading="lazy" width="600" height="200">
                    </div>
                    
                    <a href="connexion.html" class="bouton">
                        <span>Accéder au tableau</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </a>
                    
                    <div class="competencesInfo">
                        <svg class="competencesIconeAlerte" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <line x1="12" y1="8" x2="12" y2="12"/>
                            <line x1="12" y1="16" x2="12.01" y2="16"/>
                        </svg>
                        <p>Attention : l'accès au tableau de compétences nécessite un mot de passe.</p>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Section projet-->
        <section id="projets" class="section section-alt">
            <div class="container">
                <header class="titreSection">
                    <h2>Mes projets</h2>
                    <nav class="filterNav" aria-label="Filtres de projets">
                        <ul class="filters" role="tablist">
                            <li role="presentation">
                                <button class="filterBouton active" data-category="tous" role="tab" aria-selected="true" aria-controls="projetsGrid">
                                    Tous
                                </button>
                            </li>
                            <li role="presentation">
                                <button class="filterBouton" data-category="cours" role="tab" aria-selected="false" aria-controls="projetsGrid">
                                    Cours
                                </button>
                            </li>
                            <li role="presentation">
                                <button class="filterBouton" data-category="entreprise" role="tab" aria-selected="false" aria-controls="projetsGrid">
                                    Entreprise
                                </button>
                            </li>
                            <li role="presentation">
                                <button class="filterBouton" data-category="perso" role="tab" aria-selected="false" aria-controls="projetsGrid">
                                    Perso
                                </button>
                            </li>
                            <li class="filterSlider" aria-hidden="true"></li>
                        </ul>
                    </nav>
                </header>
            </div>
            
            <div id="projetsGrid" class="projetGrid" role="tabpanel">
                <article class="projetCarte" data-categories="cours" data-aos="fade-up">
                    <div class="projetImage">
                        <img src="https://placehold.co/400x300/651394/ffffff?text=Projet+Cours" alt="Projet réalisé en cours" loading="lazy" width="400" height="300">
                    </div>
                    <div class="projetContenu">
                        <h3>Projet Cours 1</h3>
                        <p>Un projet réalisé dans le cadre du BTS SIO, mettant en pratique les compétences en développement web.</p>
                        <div class="projetTags">
                            <span class="tag">HTML/CSS</span>
                            <span class="tag">JavaScript</span>
                        </div>
                    </div>
                </article>
                
                <article class="projetCarte" data-categories="entreprise" data-aos="fade-up" data-aos-delay="100">
                    <div class="projetImage">
                        <img src="https://placehold.co/400x300/a01e9c/ffffff?text=Projet+Entreprise" alt="Projet réalisé en entreprise" loading="lazy" width="400" height="300">
                    </div>
                    <div class="projetContenu">
                        <h3>Projet Entreprise 1</h3>
                        <p>Projet réalisé en stage ou alternance, développant une solution métier pour l'entreprise.</p>
                        <div class="projetTags">
                            <span class="tag">PHP</span>
                            <span class="tag">MySQL</span>
                        </div>
                    </div>
                </article>
                
                <article class="projetCarte" data-categories="perso" data-aos="fade-up" data-aos-delay="200">
                    <div class="projetImage">
                        <img src="https://placehold.co/400x300/651394/ffffff?text=Projet+Personnel" alt="Projet personnel" loading="lazy" width="400" height="300">
                    </div>
                    <div class="projetContenu">
                        <h3>Projet Perso 1</h3>
                        <p>Un projet personnel pour tester de nouvelles technologies et approfondir mes compétences.</p>
                        <div class="projetTags">
                            <span class="tag">React</span>
                            <span class="tag">API</span>
                        </div>
                    </div>
                </article>
                
                <article class="projetCarte" data-categories="cours perso" data-aos="fade-up" data-aos-delay="300">
                    <div class="projetImage">
                        <img src="https://placehold.co/400x300/a01e9c/ffffff?text=Projet+Mixte" alt="Projet mixte cours et personnel" loading="lazy" width="400" height="300">
                    </div>
                    <div class="projetContenu">
                        <h3>Projet Mixte</h3>
                        <p>Projet qui combine les aspects pédagogiques et personnels, permettant d'aller plus loin.</p>
                        <div class="projetTags">
                            <span class="tag">Full Stack</span>https://claude.ai/new
                            <span class="tag">Node.js</span>
                        </div>
                    </div>
                </article>
            </div>
        </section>
        
        <!-- Section veille technologique -->
        <section id="veille" class="section veille-section">
            <div class="container">
                
                <header class="titreSection">
                    <h2>Ma veille technologique</h2>
                    <p class="sectionIntro">
                        Dans le cadre du BTS SIO, je maintiens une veille technologique sur les dernières 
                        innovations et tendances du développement.
                    </p>
                </header>
                
                
            </div>
            <div class="swiper veilleSwiper">
                <div class="swiper-wrapper">
                    
                    <div class="swiper-slide">
                        <article class="veilleCarte">
                            <div class="carte-image">
                                <span class="badge-tech">IA</span>
                                <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000" alt="IA Générative" />
                            </div>
                            <div class="carte-content">
                                <h3>L'essor fulgurant des IA Génératives en 2024</h3>
                                <p>Les avancées en intelligence artificielle transforment radicalement nos méthodes de développement et créent de nouvelles opportunités.</p>
                                <a href="#" class="btn-veille">Lire l'article</a>
                            </div>
                        </article>
                    </div>
                    
                    <div class="swiper-slide">
                        <article class="veilleCarte">
                            <div class="carte-image">
                                <span class="badge-tech">WEB</span>
                                <img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1000" alt="Web Dev" />
                            </div>
                            <div class="carte-content">
                                <h3>React 19 et les Server Components</h3>
                                <p>La nouvelle version de React révolutionne le développement web moderne avec des performances accrues et une meilleure expérience.</p>
                                <a href="#" class="btn-veille">Lire l'article</a>
                            </div>
                        </article>
                    </div>
                    
                    <div class="swiper-slide">
                        <article class="veilleCarte">
                            <div class="carte-image">
                                <span class="badge-tech">IA</span>
                                <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000" alt="Machine Learning" />
                            </div>
                            <div class="carte-content">
                                <h3>Les LLM open-source en 2024</h3>
                                <p>Llama 3, Mistral et autres modèles transforment l'accessibilité de l'IA pour tous les développeurs du monde entier.</p>
                                <a href="#" class="btn-veille">Lire l'article</a>
                            </div>
                        </article>
                    </div>
                    
                    <div class="swiper-slide">
                        <article class="veilleCarte">
                            <div class="carte-image">
                                <span class="badge-tech">WEB</span>
                                <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000" alt="Cloud" />
                            </div>
                            <div class="carte-content">
                                <h3>L'Edge Computing prend son envol</h3>
                                <p>Le traitement des données à la périphérie devient essentiel pour la performance et la réactivité des applications modernes.</p>
                                <a href="#" class="btn-veille">Lire l'article</a>
                            </div>
                        </article>
                    </div>
                    
                    <div class="swiper-slide">
                        <article class="veilleCarte">
                            <div class="carte-image">
                                <span class="badge-tech">IA</span>
                                <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000" alt="AGI" />
                            </div>
                            <div class="carte-content">
                                <h3>GPT-5 et l'avenir de l'AGI</h3>
                                <p>Les nouveaux modèles d'IA générale se rapprochent de capacités cognitives humaines et ouvrent de nouvelles perspectives.</p>
                                <a href="#" class="btn-veille">Lire l'article</a>
                            </div>
                        </article>
                    </div>
                    
                    <div class="swiper-slide">
                        <article class="veilleCarte">
                            <div class="carte-image">
                                <span class="badge-tech">WEB</span>
                                <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000" alt="Security" />
                            </div>
                            <div class="carte-content">
                                <h3>La cybersécurité à l'ère de l'IA</h3>
                                <p>Comment l'intelligence artificielle renforce la protection des systèmes informatiques et anticipe les menaces futures.</p>
                                <a href="#" class="btn-veille">Lire l'article</a>
                            </div>
                        </article>
                    </div>
                    
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </section>
        
        
        <!-- Section contact -->
        <section id="contact" class="section sectionContact">
            <div class="container">
                <header class="titreSection">
                    <h2>Contactez-moi</h2>
                    <p class="sectionIntro">Une question ? Un projet ? N'hésitez pas à me contacter.</p>
                </header>
                
                <form action="https://formsubmit.co/ndub.may@gmail.com" method="post" id="formulaire" class="formulaire" data-aos="fade-up" novalidate>
                    <input type="hidden" name="_captcha" value="false">
                    <input type="hidden" name="_next" value="https://nathandubois.vercel.app/?success=1">
                    <input type="hidden" name="_subject" value="Nouveau message provenant le portfolio">
                    
                    <div class="contactFormulaire">
                        <label for="prenom" class="visually-hidden">Prénom</label>
                        <input 
                        type="text" 
                        id="prenom" 
                        name="prenom" 
                        placeholder="Prénom" 
                        required 
                        aria-required="true"
                        class="formulaireEntree"
                        >
                    </div>
                    
                    <div class="contactFormulaire">
                        <label for="email" class="visually-hidden">Email</label>
                        <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="Email" 
                        required 
                        aria-required="true"
                        class="formulaireEntree"
                        >
                    </div>
                    
                    <div class="contactFormulaire contactFormulaireComplet">
                        <label for="message" class="visually-hidden">Message</label>
                        <textarea 
                        id="message" 
                        name="message" 
                        placeholder="Message" 
                        required 
                        aria-required="true"
                        class="formulaireEntree formulaireTexte"
                        rows="5"
                        ></textarea>
                    </div>
                    
                    <input type="text" name="_gotcha" style="display:none" tabindex="-1" autocomplete="off">
                    
                    <button type="submit" class="bouton boutonEnvoi">
                        <span>Envoyer</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="22" y1="2" x2="11" y2="13"/>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                        </svg>
                    </button>
                </form>
                <div id="formNotification" class="formNotification" role="status" aria-live="polite"></div>
            </div>
        </section>
    </main>
    
    <footer class="siteFooter" role="contentinfo">
        <div class="container">
            <div class="footerGrid">
                <!-- Section À propos -->
                <div class="footerSection">
                    <div class="footerBranding">
                        <img src="assets/image/icone.png" alt="Logo Nathan Dubois" class="footerLogo" width="50" height="50">
                        <h3>Nathan Dubois</h3>
                    </div>
                    <p class="footerDescription">
                        Développeur web passionné en BTS SIO option SLAM, 
                        spécialisé dans la création d'applications web modernes.
                    </p>
                    <div class="footerSocial">
                        <a href="https://www.linkedin.com/in/nathan-dubois-602026382" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                            </svg>
                        </a>
                        <a href="https://github.com/nathan-5349" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                            </svg>
                        </a>
                    </div>
                </div>
                
                <!-- Section Navigation -->
                <div class="footerSection">
                    <h4 class="footerTitre">Navigation</h4>
                    <nav class="footerNavigation" aria-label="Navigation footer">
                        <ul>
                            <li><a href="#">Accueil</a></li>
                            <li><a href="#formation">Formation</a></li>
                            <li><a href="#profil">Profil</a></li>
                            <li><a href="#competences">Compétences</a></li>
                            <li><a href="#projets">Projets</a></li>
                            <li><a href="#veille">Veille</a></li>
                        </ul>  
                    </nav>
                </div>
                
                <!-- Section Contact -->
                <div class="footerSection">
                    <h4 class="footerTitre">Contact</h4>
                    <ul class="footerContact">
                        <li>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                <polyline points="22,6 12,13 2,6"/>
                            </svg>
                            <span><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="7d1319081f53101c043d1a101c1411531e1210">[email&#160;protected]</a></span>
                        </li>
                        <li>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                <circle cx="12" cy="10" r="3"/>
                            </svg>
                            <span>Laval, France</span>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div class="footerBottom">
                <p class="footerCopyright">
                    © 2025 Nathan Dubois. Tous droits réservés.
                </p>
                <div class="footerLegales">
                    <a href="mentions-legales.html">Mentions légales</a>
                    <span class="footerSeparator">|</span>
                    <a href="politique-confidentialite.html">Polit