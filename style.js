function newGame() {
    // Create dialog element
    const dialog = document.createElement('dialog');
    dialog.className = 'cs-dialog';
    dialog.id = 'newGameDialog';
    
    // Create form content
    dialog.innerHTML = `
        <form method="dialog">
            <div class="heading">
                <div class="wrapper">
                    <div class="icon"></div>
                    <p class="text">New Game</p>
                </div>
                <button class="cs-btn close" onclick="closeNewGameDialog()"></button>
            </div>
            <div class="cs-tabs">
                <input
                    class="radiotab"
                    name="tabs"
                    tabindex="1"
                    type="radio"
                    id="tabone"
                    checked="checked"
                />
                <label class="label" for="tabone">Tab One</label>
                <div class="panel" tabindex="1">
                    <label class="cs-select__label" for="maps">Map</label>
                    <select class="cs-select" name="maps" id="maps">
                        <option value="de_home">de_home</option>
                    </select>
                    
                    <p>Hello, I'm Smit. This website is a little tribute to Counter Strike.</p>
                       
                       <p>I first played Counter Strike 1.6 when I was 12 years old. Since then, this game has been a big part of my life.
                       What began as a pixelated escape from real world, soon became a corner stone of my identity and a digital home where I made new friends.</p>

                       <p>As a kid, I could leave behind the weight of school stress or family struggles, diving headfirst into the adrenaline-pumping rhythm of de_dust2 or cs_office. 
                       The crack of an AK-47, the satisfying clink of a well-placed headshot, and the tense silence before a clutch moment were my refuge. 
                       It didn't matter who I was outside the server; in those moments, I was a strategist, a teammate, a survivor.
                       </p>
                      <p>Counter-Strike is a legacy, a shared language spoken by millions across servers and decades. 
                      It's the rush of planting the bomb with seconds to spare, the heartbreak of a whiffed shot, and the camaraderie of shouting "Rush B!" with reckless abandon. 
                      From my first frag in 1.6 to my latest clutch in CS2, this game has been a constant companion, reminding me that no matter how tough life gets, there's always a round to win, a team to carry, and a community to call home.</p>

                      <p>Here's to Counter-Strike, the game that shaped a generation, and the one I'll always load up, ready for one more match.</p>
                </div>
            </div>
            
            <menu class="footer-btns">
                <button class="cs-btn" onclick="startGame()">Start</button>
                <button class="cs-btn" onclick="closeNewGameDialog()">Cancel</button>
            </menu>
        </form>
    `;
    
    // Add dialog to page
    document.body.appendChild(dialog);
    
    // Show the dialog
    dialog.showModal();
}

function closeNewGameDialog() {
    const dialog = document.getElementById('newGameDialog');
    if (dialog) {
        dialog.close();
        dialog.remove();
    }
}

function startGame() {
    const gameMode = document.getElementById('gameMode').value;
    const map = document.getElementById('mapSelect').value;
    const maxPlayers = document.getElementById('maxPlayers').value;
    const serverName = document.getElementById('serverName').value;
    
    // Here you can add logic to actually start the game
    console.log('Starting game with:', {
        gameMode,
        map,
        maxPlayers,
        serverName
    });
    
    // For now, just show an alert and close the dialog
    alert(`Starting ${gameMode} game on ${map} with ${maxPlayers} players!\nServer: ${serverName}`);
    closeNewGameDialog();
}