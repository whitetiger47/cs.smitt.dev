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

document.addEventListener('DOMContentLoaded', function () {
    const newGame = initNewGame();
    const menuItems = document.querySelectorAll('.menu-item')
    menuItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            const sectionID = this.getAttribute('data-section');

            switch (sectionID) {
                case 'new-game':
                    if (newGame) newGame.showModal();
                    break;
            }
        })

    });
})