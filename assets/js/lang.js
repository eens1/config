
function toggleDropdown() {
        document.getElementById('languageDropdown').classList.toggle('show');
    }

    function selectLanguage(language) {
        document.getElementById('currentLanguage').textContent = language; // Update button text
        toggleDropdown(); // Close dropdown after selection
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
