document.addEventListener('DOMContentLoaded', function () {
    const themeButtons = document.getElementsByClassName('theme-btn');
    const elementosItem = document.getElementsByClassName('Item');

    function applyTheme(theme) {
        if (theme === 'claro') {
            document.body.classList.remove('theme-oscuro');
            document.body.classList.add('theme-claro');
        } else if (theme === 'oscuro') {
            document.body.classList.remove('theme-claro');
            document.body.classList.add('theme-oscuro');
        }

        for (let j = 0; j < elementosItem.length; j++) {
            elementosItem[j].classList.remove('theme-oscuro', 'theme-claro');
            elementosItem[j].classList.add(theme === 'claro' ? 'theme-claro' : 'theme-oscuro');
        }
    }

    for (let i = 0; i < themeButtons.length; i++) {
        themeButtons[i].addEventListener('click', function () {
            const selectedTheme = this.dataset.theme;
            applyTheme(selectedTheme);
            localStorage.setItem('selectedTheme', selectedTheme);
        });
    }

    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
        applyTheme(savedTheme);
    }
});
