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

    function updateSampleText() {
        const difficulty = difficultySelect.value;
        const textOptions = texts[difficulty];
        const randomText = textOptions[Math.floor(Math.random() * textOptions.length)];
        sampleTextDiv.textContent = randomText;
    }

    difficultySelect.addEventListener('change', updateSampleText);

    // Initialize with a random text from the default difficulty level
    updateSampleText();
});