function initNewGame() {
    const dialog = document.querySelector('#new-game-dialog');
    if (!dialog) return null;

    const goSound = new Audio('sounds/go.wav');

    dialog.querySelector('#new-game-start').addEventListener('click', function () {
        dialog.close();
        goSound.currentTime = 0;
        goSound.play();
    });

    dialog.querySelector('#new-game-cancel').addEventListener('click', function () {
        dialog.close();
    });

    dialog.querySelector('.close').addEventListener('click', function () {
        dialog.close();
    });

    return dialog;
}

function initQuitGame() {
    const dialog = document.querySelector('#quit-game-dialog');
    if(!dialog) return null;

    const exitSound = new Audio('sounds/window_close.wav');

    dialog.querySelector('#quit-game-dialog-yes').addEventListener('click', function() {
        window.location.href = "https://x.com/itsoksmit";
    });

    dialog.querySelector('#quit-game-dialog-no').addEventListener('click', function() {
        dialog.close();
        exitSound.currentTime = 0;
        exitSound.play();
    });
    return dialog;
}

function initOptionsGame() {
    const select = document.querySelector('#spraypaint');
    const preview = document.querySelector('#spray-preview');
    const dialog = document.querySelector('#options-game-dialog');
    if(!dialog) return null;

    const imageMap = {
        'bro': 'images/bro.jpg',
        '13 year old': 'images/13 year old.jpg',
        'kid': 'images/kid.jpg'
    }

    select.addEventListener('change', function() {
        preview.src = imageMap[this.value];
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