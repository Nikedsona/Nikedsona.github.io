const idiomas = {
    "es": {
    "title": "Bienvenido",
    "description": "Si ya escogiste tu idioma, continuemos con la experiencia."
    },
    "en": {
    "title": "Welcome",
    "description": "If you have already chosen your language, let's continue with the experience."
    },
    "it": {
    "title": "Benvenuto",
    "description": "Se hai già scelto la tua lingua, proseguiamo con l'esperienza."
    },
    "de": {
    "title": "Willkommen",
    "description": "Wenn Sie Ihre Sprache bereits ausgewählt haben, fahren wir mit dem Erlebnis fort."
    },
    "fr": {
    "title": "Bienvenue",
    "description": "Si vous avez déjà choisi votre langue, poursuivons l'expérience."
    }
    };
    
    // Function to change language
    function ci(lang) {
    document.getElementById('title').innerText = idiomas[lang]['title'];
    document.getElementById('description').innerText = idiomas[lang]['description'];
    }