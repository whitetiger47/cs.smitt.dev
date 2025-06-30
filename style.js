function initNewGame() {
    const dialog = document.querySelector('#new-game-dialog');
    if (!dialog) return null;

    const goSound = new Audio('sounds/go.wav');
    const sound = new Audio('sounds/window_close.wav');

    dialog.querySelector('#new-game-start').addEventListener('click', function () {
        dialog.close();
        goSound.currentTime = 0;
        goSound.play();
    });

    dialog.querySelector('#new-game-cancel').addEventListener('click', function () {
        dialog.close();
        sound.currentTime = 0;
        sound.play();
    });

    dialog.querySelector('.close').addEventListener('click', function () {
        dialog.close();
    });

    return dialog;
}

function initQuitGame() {
    const dialog = document.querySelector('#quit-game-dialog');
    if (!dialog) return null;

    const bombSound = new Audio('sounds/cs-go-bomb-has-been-defused.mp3');
    dialog.querySelector('#quit-game-dialog-yes').addEventListener('click', function () {
        window.location.href = "https://x.com/itsoksmit";
    });

    dialog.querySelector('#quit-game-dialog-no').addEventListener('click', function () {
        dialog.close();
        bombSound.currentTime = 0;
        bombSound.play();
    });
    return dialog;
}

function initOptionsGame() {
    const select = document.querySelector('#spraypaint');
    const tintSelect = document.querySelector('#tint');
    const preview = document.querySelector('#spray-preview');
    const dialog = document.querySelector('#options-game-dialog');
    if (!dialog) return null;

    const imageMap = {
        'adult': 'images/adult.jpg',
        'city': 'images/city.jpg',
        'kid': 'images/kid.jpg'
    }

    const tintFilters = {
        'none': 'none',
        'red': 'hue-rotate(0deg) saturate(2) brightness(1.2)',
        'blue': 'hue-rotate(240deg) saturate(1.5)',
        'green': 'hue-rotate(120deg) saturate(1.5)',
        'yellow': 'hue-rotate(60deg) saturate(1.5) brightness(1.2)',
        'purple': 'hue-rotate(280deg) saturate(1.5)',
        'orange': 'hue-rotate(30deg) saturate(1.5) brightness(1.1)'
    };

    function updateImage() {
        preview.src = imageMap[select.value];
        preview.style.filter = tintFilters[tintSelect.value];
    }

    select.addEventListener('change', updateImage);
    tintSelect.addEventListener('change', updateImage);
    updateImage();

    const sound = new Audio('sounds/window_close.wav');
    const flashSound = new Audio('sounds/throwing-flashbang-sound-effect-cs-go.mp3');

    dialog.querySelector('#options-ok').addEventListener('click', function () {
        dialog.close();
        sound.currentTime = 0;
        sound.play();
    });
    dialog.querySelector('#options-apply').addEventListener('click', function () {
        dialog.close();
        flashSound.currentTime = 0;
        flashSound.play();
    });
    dialog.querySelector('#options-cancel').addEventListener('click', function () {
        dialog.close();
        sound.currentTime = 0;
        sound.play();
    });

    return dialog;
}

function initServers() {
    const dialog = document.getElementById('servers-dialog');
    if (!dialog) return null;

    const serverItems = dialog.querySelectorAll('.server-item');
    const connectBtn = dialog.querySelector('#connect-btn');
    const refreshBtn = dialog.querySelector('#refresh-btn');

    let selectedServer = null;
    function selectServer(serverItem) {
        serverItems.forEach(item => item.classList.remove('selected'));
        serverItem.classList.add('selected');
        selectedServer = serverItem;
        connectBtn.disabled = false;
    }

    serverItems.forEach(item => {
        item.addEventListener('click', function () {
            selectServer(this);
        });

        item.addEventListener('dblclick', function () {
            const url = this.getAttribute('data-url');
            window.open(url, '_blank', 'noopener');
        });
    });

    connectBtn.addEventListener('click', function () {
        if (selectedServer) {
            const url = selectedServer.getAttribute('data-url');
            window.open(url, '_blank', 'noopener');
        }
    });

    refreshBtn.addEventListener('click', function () {
        refreshBtn.disabled = true;

        const serverCountElement = dialog.querySelector('.server-list-header .project-description-column');

        serverItems.forEach(item => {
            item.style.display = 'none';
        });

        serverCountElement.textContent = 'Servers (0)';

        let delay = 50;
        serverItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.display = '';
                serverCountElement.textContent = `Servers (${index + 1})`;

                if (index === serverItems.length - 1) {
                    setTimeout(() => {
                        refreshBtn.disabled = false;
                    }, 100);
                }
            }, delay * (index + 1));
        });
    });

    dialog.querySelector('.close').addEventListener('click', function () {
        dialog.close();
    });

    return dialog;
}

document.addEventListener('DOMContentLoaded', function () {
    const newGame = initNewGame();
    const exit = initQuitGame();
    const options = initOptionsGame();
    const servers = initServers();
    const menuItems = document.querySelectorAll('.menu-item')

    const introOverlay = document.getElementById('intro-overlay');
    introOverlay.addEventListener('transitionend', () => {
        introOverlay.style.display = 'none';
    }, { once: true });

    setTimeout(() => {
        introOverlay.classList.add('hidden');
        newGame.showModal();
    }, 5100);

    const menuClickSound = new Audio('sounds/menu_click.wav');
    const menuCloseSound = new Audio('sounds/window_close.wav');

    document.querySelectorAll('.cs-dialog .close').forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            menuCloseSound.currentTime = 0;
            menuCloseSound.play();
        });
    });

    const buildLinks = document.querySelectorAll('.build-smth-link');
    buildLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            if (options && options.open) {
                options.close();
            }

            if (servers) {
                servers.showModal();
            }
        });
    });

    menuItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            menuClickSound.currentTime = 0;
            menuClickSound.play();

            const sectionID = this.getAttribute('data-section');

            switch (sectionID) {
                case 'new-game':
                    if (newGame) newGame.showModal();
                    break;

                case 'exit-game':
                    if (exit) exit.showModal();
                    break;

                case 'options':
                    if (options) options.showModal();
                    break;

                case 'find-servers':
                    if (servers) servers.showModal();
                    break;
            }
        })

    });
})