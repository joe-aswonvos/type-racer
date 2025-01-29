document.addEventListener('DOMContentLoaded', function() {
    const texts = {
        easy: [
            "The cat sat on the mat.",
            "A quick brown fox jumps over the lazy dog.",
            "Hello world!"
        ],
        medium: [
            "JavaScript is a versatile programming language.",
            "The quick brown fox jumps over the lazy dog.",
            "Typing speed tests are fun and challenging."
        ],
        hard: [
            "To be or not to be, that is the question.",
            "In the beginning, God created the heavens and the earth.",
            "The quick brown fox jumps over the lazy dog multiple times."
        ]
    };

    const difficultySelect = document.getElementById('difficulty');
    const sampleTextDiv = document.getElementById('sample-text');
    const startButton = document.getElementById('start-btn');
    const stopButton = document.getElementById('stop-btn');
    const retryButton = document.getElementById('retry-btn');
    const userInput = document.getElementById('user-input');
    const timeDisplay = document.getElementById('time');
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
    }

    function retryTest() {
        updateSampleText();
        userInput.value = '';
        timeDisplay.textContent = '0';
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