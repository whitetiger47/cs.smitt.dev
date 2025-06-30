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
    if(!dialog) return null;

    const bombSound = new Audio('sounds/cs-go-bomb-has-been-defused.mp3');
    dialog.querySelector('#quit-game-dialog-yes').addEventListener('click', function() {
        window.location.href = "https://x.com/itsoksmit";
    });

    dialog.querySelector('#quit-game-dialog-no').addEventListener('click', function() {
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
    if(!dialog) return null;

    const imageMap = {
        'bro': 'images/bro.jpg',
        '13 year old': 'images/13 year old.jpg',
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

    dialog.querySelector('#options-ok').addEventListener('click', function() {
        dialog.close();
        sound.currentTime = 0;
        sound.play();
    });
    dialog.querySelector('#options-apply').addEventListener('click', function() {
        dialog.close();
        flashSound.currentTime = 0;
        flashSound.play();
    });
    dialog.querySelector('#options-cancel').addEventListener('click', function() {
        dialog.close();
        sound.currentTime = 0;
        sound.play();
    });

    return dialog;
}

document.addEventListener('DOMContentLoaded', function () {
    const newGame = initNewGame();
    const exit = initQuitGame();
    const options = initOptionsGame();
    const menuItems = document.querySelectorAll('.menu-item')
    menuItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            const sectionID = this.getAttribute('data-section');

            switch (sectionID) {
                case 'new-game':
                    if (newGame) newGame.showModal();
                    break;

                case 'exit-game':
                    if(exit) exit.showModal();
                    break;

                case 'options':
                    if(options) options.showModal();
                    break;
            }
        })

    });
})