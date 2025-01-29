document.addEventListener('DOMContentLoaded', function() {
    const texts = {
        easy: [
            "The cat sat on the mat",
            "A quick brown fox jumps over the lazy dog",
            "Hello world",
            "The sun rises in the east",
            "She sells seashells by the seashore",
            "How much wood would a woodchuck chuck",
            "Practice makes perfect",
            "Red lorry, yellow lorry",
            "Betty Botter bought some butter",
            "Fuzzy Wuzzy was a bear"
        ],
        medium: [
            "JavaScript is a versatile programming language",
            "The quick brown fox jumps over the lazy dog again!",
            "Typing speed tests are fun and challenging",
            "Peter Piper picked a peck of pickled peppers",
            "Consistency is key to improvement",
            "Typing accurately is more important than typing quickly",
            "Speed comes with time and practice",
            "Focus on the task at hand",
            "Stay calm and type on",
            "Accuracy builds confidence"
        ],
        hard: [
            "To be or not to be, that is the question.",
            "In the beginning, God created the heavens and the earth.",
            "The quick brown fox jumps over the lazy dog multiple times.",
            "She said, 'It's a beautiful day!'",
            "The quick, brown fox; jumps over: the lazy dog.",
            "Why is the sky blue? It's a question many ask.",
            "In 2021, the world faced unprecedented challenges.",
            "Coding requires patience, practice, and perseverance.",
            "He exclaimed, 'Eureka!' upon solving the problem.",
            "Complex sentences, with multiple clauses, are harder to type."
        ]
    };

    const difficultySelect = document.getElementById('difficulty');
    const sampleTextDiv = document.getElementById('sample-text');
    const startButton = document.getElementById('start-btn');
    const stopButton = document.getElementById('stop-btn');
    const retryButton = document.getElementById('retry-btn');
    const userInput = document.getElementById('user-input');
    const timeDisplay = document.getElementById('time');
    const wpmDisplay = document.getElementById('wpm');
    let startTime, endTime;

    function updateSampleText() {
        const difficulty = difficultySelect.value;
        const textOptions = texts[difficulty];
        const randomText = textOptions[Math.floor(Math.random() * textOptions.length)];
        sampleTextDiv.textContent = randomText;
    }

    function startTest() {
        startTime = new Date();
        startButton.disabled = true;
        stopButton.disabled = false;
        userInput.disabled = false;
        userInput.value = '';
        userInput.focus();
    }

    function stopTest() {
        endTime = new Date();
        const timeTaken = (endTime - startTime) / 1000;
        timeDisplay.textContent = timeTaken.toFixed(2);
        startButton.disabled = false;
        stopButton.disabled = true;
        userInput.disabled = true;
        calculateWPM();
        updateSampleText()
    }

    function retryTest() {
        updateSampleText();
        userInput.value = '';
        timeDisplay.textContent = '0';
        wpmDisplay.textContent = '0';
        startButton.disabled = false;
        stopButton.disabled = true;
        userInput.disabled = true;
    }

    function handleEnterKey(event) {
        if (event.key === 'Enter') {
            if (document.activeElement === userInput) {
                stopTest();
            } else {
                startTest();
            }
        }
    }

    function calculateWPM() {
        const sampleText = sampleTextDiv.textContent.trim();
        const userText = userInput.value.trim();
        const sampleWords = sampleText.split(' ');
        const userWords = userText.split(' ');
        let correctWords = 0;

        for (let i = 0; i < userWords.length; i++) {
            if (userWords[i] === sampleWords[i]) {
                correctWords++;
            }
        }

        const timeTaken = (endTime - startTime) / 60000; // convert to minutes
        const wpm = Math.round(correctWords / timeTaken);
        wpmDisplay.textContent = wpm;
    }

    difficultySelect.addEventListener('change', updateSampleText);
    startButton.addEventListener('click', startTest);
    stopButton.addEventListener('click', stopTest);
    retryButton.addEventListener('click', retryTest);
    document.addEventListener('keydown', handleEnterKey);

    // Initialize with a random text from the default difficulty level
    updateSampleText();
    stopButton.disabled = true;
    userInput.disabled = true;
});