document.addEventListener('DOMContentLoaded', function() {
    // Difficulty buttons
    const difficultyBtns = document.querySelectorAll('.difficulty-btn');
    difficultyBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            difficultyBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            updateBuildOptions(); // Update build options when difficulty changes
        });
    });

    // Load challenge button
    const loadBtn = document.querySelector('.load-btn');
    
    // Build options by difficulty
    const buildOptions = {
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
    
    // App types
    const appTypes = [
        "ABSTRACT",
        "ECLIPSE",
        "INITIA",
        "CHOPIN",
        "PRISM"
    ];
    
    // User types
    const userTypes = [
        "BARISTAS",
        "STUDENTS",
        "REMOTE WORKERS",
        "PARENTS",
        "TRAVELERS",
        "FITNESS ENTHUSIASTS",
        "SMALL BUSINESS OWNERS",
        "CREATIVE PROFESSIONALS",
        "HEALTHCARE WORKERS",
        "ELDERLY USERS"
    ];
    
    function getRandomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
    
    function getCurrentDifficulty() {
        const activeBtn = document.querySelector('.difficulty-btn.active');
        return activeBtn.classList.contains('easy') ? 'easy' : 
               activeBtn.classList.contains('medium') ? 'medium' : 'hard';
    }
    
    function updateBuildOptions() {
        generateChallenge();
    }
    
    function generateChallenge() {
        const difficulty = getCurrentDifficulty();
        const buildType = getRandomItem(buildOptions[difficulty]);
        const appType = getRandomItem(appTypes);
        
        document.querySelector('.challenge-line:first-child .value').textContent = buildType.toUpperCase();
        document.querySelector('.on-value').textContent = appType;
    }
    
    // Generate initial challenge
    generateChallenge();
    
    // Load challenge button
    loadBtn.addEventListener('click', generateChallenge);
}); 