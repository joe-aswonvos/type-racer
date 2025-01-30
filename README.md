# TypeRacer
Code Institute Bootcamp - JS AI Pair Programming Challenge

## Table of Contents

- [Project Goal](#project-goal)
- [User Goals](#user-goals)
- [User Stories](#user-stories)
    - [User Story 1](#user-story-1)
    - [User Story 2](#user-story-2)
    - [User Story 3](#user-story-3)
    - [User Story 4](#user-story-4)
    - [User Story 5](#user-story-5)
- [Technologies Used](#technologies-used)

## Project Goal

To provide a tool for users to improve their typing speed

## User Goals

Users want to be able to:
- Measure and improve their typing speed.
- Know how to take the test.
- Easily take the test.
- Take a test relevant to their ability level.
- Use the test on different devices.
- See accurate results, including their words per minute (WPM).

## User Stories

### User Story 1
As a user, I want to measure my typing speed so that I can track my progress.

**Acceptance Criteria:**
- The user can start a typing test.
- The test measures words per minute (WPM).
- The results are displayed immediately after the test.

**Key Tasks:**
- Implement a typing test interface.
- Calculate WPM based on user input.
- Display the results to the user.

### User Story 2
As a user, I want to know how to take the test so that I can use the tool effectively.

**Acceptance Criteria:**
- Instructions are available on how to start and complete the test.
- Instructions are clear and easy to understand.

**Key Tasks:**
- Create a help section with test instructions.
- Ensure instructions are accessible from the main interface.

### User Story 3
As a user, I want to easily take the test so that I can focus on improving my typing speed.

**Acceptance Criteria:**
- The test interface is user-friendly.
- The test can be started with a single click.

**Key Tasks:**
- Design a simple and intuitive test interface.
- Implement a start button for the test.

### User Story 4
As a user, I want to take a test relevant to my ability level so that the test is challenging but not too difficult.

**Acceptance Criteria:**
- The user can select different difficulty levels.
- Each difficulty level has appropriate text passages.

**Key Tasks:**
- Create multiple difficulty levels.
- Assign text passages to each difficulty level.

### User Story 5
As a user, I want to use the test on different devices so that I can practice typing anywhere.

**Acceptance Criteria:**
- The test interface is responsive.
- The test works on both desktop and mobile devices.

**Key Tasks:**
- Implement responsive design for the test interface.
- Test the interface on various devices and screen sizes.

## Technologies Used

The project will utilize the following technologies:

- **HTML**: To structure the content of the web pages.
- **CSS**: To style the web pages and make them visually appealing.
- **JavaScript**: To add interactivity and functionality to the web pages.
- **Bootstrap**: To quickly design and customize responsive mobile-first sites.
- **Github Copilot**: To assist with code suggestions and improve development efficiency.


---


*The following section was written by co-pilot from the following prompt; '@workspace can you please compose a section for the readme headed features, and describe the game loop and the UE/UI features added, with justifications where appropriate, please also add a list of the 3 next best features to be added to the project'*

## Features

### Game Loop

The game loop for TypeRacer is designed to provide a seamless and engaging experience for users looking to improve their typing speed. The loop consists of the following steps:

1. **Select Difficulty**: Users can choose from three difficulty levels (Easy, Medium, Hard) to match their typing proficiency.
2. **Start Test**: Upon clicking the "Start" button, a random text passage corresponding to the selected difficulty level is displayed. The user-input area is enabled, and the timer starts.
3. **Typing Test**: Users type the displayed text in the user-input area. Real-time feedback is provided, highlighting correct words in blue, incorrect words in red, and the current word being typed in yellow.
4. **Stop Test**: Users can stop the test by clicking the "Stop" button or pressing the "Enter" key. The timer stops, and the results, including time taken and words per minute (WPM), are displayed.
5. **Retry Test**: Users can click the "Retry" button to start a new test with a different text passage.

### User Experience (UX) and User Interface (UI) Features

- **Responsive Design**: The test interface is designed to be responsive, ensuring a consistent experience across different devices and screen sizes. This allows users to practice typing on both desktop and mobile devices.
- **Difficulty Levels**: Providing multiple difficulty levels ensures that users of varying skill levels can find a suitable challenge, promoting continuous improvement.
- **Real-Time Feedback**: The real-time feedback feature enhances the user experience by providing immediate visual cues on typing accuracy. Correct words are highlighted in blue, incorrect words in red, and the current word in yellow. This helps users identify and correct mistakes as they type.
- **Clear Instructions**: The inclusion of an "Instructions" button provides users with easy access to guidelines on how to use the tool effectively, improving usability.
- **Results Display**: The results area displays the difficulty level, time taken, and WPM, giving users a clear summary of their performance. This helps users track their progress over time.

### Next Best Features to Add

1. **Leaderboard**: Implement a leaderboard to display the top scores of users. This feature would add a competitive element to the game, motivating users to improve their typing speed.
2. **Custom Text Input**: Allow users to input their own text passages for the typing test. This feature would enable users to practice typing with content relevant to their interests or work.
3. **Progress Tracking**: Add a feature to track and display users' progress over time, including historical WPM scores and accuracy rates. This would help users visualize their improvement and set goals for future practice.
