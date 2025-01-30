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
    const retryButton = document.getElementById('retry-btn');
    const userInput = document.getElementById('user-input');
    const timeDisplay = document.getElementById('time');
    const wpmDisplay = document.getElementById('wpm');
    const accuracyDisplay = document.getElementById('accuracy');
    const levelDisplay = document.getElementById('level');
    let startTime, endTime;
    let testStarted = false;

    function updateSampleText() {
        const difficulty = difficultySelect.value;
        const textOptions = texts[difficulty];
        const randomText = textOptions[Math.floor(Math.random() * textOptions.length)];
        sampleTextDiv.textContent = randomText;
        levelDisplay.textContent = difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
    }

    function startTest() {
        startTime = new Date();
        testStarted = true;
        userInput.disabled = false;
        userInput.focus();
    }

    function stopTest() {
        endTime = new Date();
        const timeTaken = (endTime - startTime) / 1000;
        timeDisplay.textContent = timeTaken.toFixed(2);
        testStarted = false;
        userInput.disabled = true;
        calculateWPMAndAccuracy();
    }

    function retryTest() {
        userInput.value = '';
        timeDisplay.textContent = '0';
        wpmDisplay.textContent = '0';
        testStarted = false;
        userInput.disabled = true;
    }

    function handleEnterKey(event) {
        if (!testStarted && event.key !== 'Enter') {
            startTest();
        } else if (event.key === 'Enter') {
            stopTest();
        }
    }

    function calculateWPMAndAccuracy() {
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
        const accuracy = Math.round((correctWords / sampleWords.length) * 100);

        wpmDisplay.textContent = wpm;
        accuracyDisplay.textContent = accuracy;
        updateSampleText();
        userInput.value = '';
    }

    function provideRealTimeFeedback() {
        const sampleText = sampleTextDiv.textContent.trim();
        const userText = userInput.value.trim();
        const sampleWords = sampleText.split(' ');
        const userWords = userText.split(' ');

        let feedbackHTML = '';
        for (let i = 0; i < sampleWords.length; i++) {
            if (userWords[i] === undefined) {
                feedbackHTML += `<span>${sampleWords[i]}</span> `;
            } else if (userWords[i] === sampleWords[i]) {
                feedbackHTML += `<span style="color: blue;">${sampleWords[i]}</span> `;
            } else if (i === userWords.length - 1) {
                feedbackHTML += `<span style="background-color: yellow;">${sampleWords[i]}</span> `;
            } else {
                feedbackHTML += `<span style="color: red;">${sampleWords[i]}</span> `;
            }
        }
        sampleTextDiv.innerHTML = feedbackHTML.trim();
    }

    difficultySelect.addEventListener('change', updateSampleText);
    retryButton.addEventListener('click', retryTest);
    document.addEventListener('keydown', handleEnterKey);
    userInput.addEventListener('input', provideRealTimeFeedback);

    // Initialize with a random text from the default difficulty level
    updateSampleText();
    userInput.disabled = true;
});