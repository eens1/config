
  const languages = {
        'en': 'English',
        'fr': 'Français',
        'it': 'Italiano'
    };

    function getCurrentLanguage() {
        return document.documentElement.lang;
    }

    function setCurrentLanguage(lang) {
        document.documentElement.lang = lang;
        updateLanguageDisplay();
    }

    function updateLanguageDisplay() {
        const currentLang = getCurrentLanguage();
        document.getElementById('currentLanguage').textContent = languages[currentLang] || currentLang;
    }

    function toggleDropdown() {
        document.getElementById('languageDropdown').classList.toggle('show');
    }

    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.dropdown-toggle')) {
            var dropdowns = document.getElementsByClassName("dropdown-menu");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }

    // Set up click handlers for language selection
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            setCurrentLanguage(this.getAttribute('data-lang'));
            toggleDropdown();
        });
    });

    // Initialize the display
    updateLanguageDisplay();
