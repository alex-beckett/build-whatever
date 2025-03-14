// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');
    
    // Build variables by difficulty
    const buildVariables = {
        easy: [
            "A tic tac toe game",
            "A tamagotchi-style game",
            "A meme generator",
            "A mini arcade game"
        ],
        medium: [
            "A deck-building game",
            "An AI-powered trading agent",
            "A twitter clone",
            "A stablecoin-powered payment app",
            "A NOVM messenger rollup application"
        ],
        hard: [
            "A CLOB DEX",
            "A certificate transparency browser extension",
            "A prediction market using social data",
            "A verifiable exchange",
            "An attested image-editing stack"
        ]
    };
    
    // App platform variables
    const appPlatforms = [
        "ABSTRACT",
        "ECLIPSE",
        "INITIA",
        "CHOPIN",
        "PRISM"
    ];
    
    // Current difficulty level
    let currentDifficulty = 'easy';
    
    // Get DOM elements
    const easyButton = document.querySelector('.easy');
    const mediumButton = document.querySelector('.medium');
    const hardButton = document.querySelector('.hard');
    const loadChallengeButton = document.querySelector('.load-challenge');
    const gameTypeElement = document.querySelector('.game-type');
    const themeElement = document.querySelector('.theme');
    
    console.log('Easy button:', easyButton);
    console.log('Medium button:', mediumButton);
    console.log('Hard button:', hardButton);
    console.log('Load challenge button:', loadChallengeButton);
    
    // Add event listeners
    if (easyButton) {
        easyButton.onclick = function() {
            console.log('Easy button clicked');
            currentDifficulty = 'easy';
            updateActiveDifficulty('easy');
            generateChallenge();
        };
    }
    
    if (mediumButton) {
        mediumButton.onclick = function() {
            console.log('Medium button clicked');
            currentDifficulty = 'medium';
            updateActiveDifficulty('medium');
            generateChallenge();
        };
    }
    
    if (hardButton) {
        hardButton.onclick = function() {
            console.log('Hard button clicked');
            currentDifficulty = 'hard';
            updateActiveDifficulty('hard');
            generateChallenge();
        };
    }
    
    if (loadChallengeButton) {
        loadChallengeButton.onclick = function() {
            console.log('Load challenge button clicked');
            generateChallenge();
        };
    }
    
    // Update active difficulty button
    function updateActiveDifficulty(difficulty) {
        console.log('Updating active difficulty to:', difficulty);
        
        // Reset all buttons
        easyButton.style.opacity = '0.7';
        mediumButton.style.opacity = '0.7';
        hardButton.style.opacity = '0.7';
        
        // Highlight active button
        if (difficulty === 'easy') {
            easyButton.style.opacity = '1';
        } else if (difficulty === 'medium') {
            mediumButton.style.opacity = '1';
        } else if (difficulty === 'hard') {
            hardButton.style.opacity = '1';
        }
    }
    
    // Generate a random challenge
    function generateChallenge() {
        console.log('Generating challenge for difficulty:', currentDifficulty);
        
        // Get build variables based on current difficulty
        const gameTypes = buildVariables[currentDifficulty];
        
        // Select random game type and platform
        const randomGameType = gameTypes[Math.floor(Math.random() * gameTypes.length)];
        const randomPlatform = appPlatforms[Math.floor(Math.random() * appPlatforms.length)];
        
        console.log('Selected game type:', randomGameType);
        console.log('Selected platform:', randomPlatform);
        
        // Update the UI
        gameTypeElement.textContent = randomGameType.toUpperCase();
        themeElement.textContent = randomPlatform;
    }
    
    // Initialize with default difficulty
    updateActiveDifficulty('easy');
    generateChallenge();
    
    // REMOVED: No longer adding dynamic background elements
    // addBackgroundElements();
    
    // REMOVED: Functions for adding background elements have been removed
    // The static background elements in the HTML will remain
}); 