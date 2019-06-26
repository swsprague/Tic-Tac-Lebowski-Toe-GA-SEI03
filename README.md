


How to represent the board in JS:

My plan is to create a 3 X 3 board using individual <div>'s for each square in the board. I will then attach event listeners to each square, which will be able to register user input. Depending on which class (x's or o's) the player decides to play as, the event triggered by the listener will enter an image of an x or an o as needed.

As far as the engine goes, I plan to utilize the array listed in the game API to track which move has been entered into the board, using the 9 indices (0-8) to track the location of the move on the board. The Board itself will be represented in the array as on a left to right readout, with the index of 0 indicating the upper left square on the board, 1 being the upper middle, 2 being upper right, 3 being middle left, and so on. Will look like this:

0 1 2
3 4 5
6 7 8

How I will approach the project:

My first move will be to set up my repository and do an initial deployment. Then I'll go about setting up the initial html for the board layout, followed by setting up the CRUD, AJAX, and API communication, as well as get the initial user authentication process up and running. Then I'll do a second deployment.

Once that's in place, I'll write the game engine in javascript, attempting to get a working version of the game as a well as the required features (score tracking, user notifications, etc) before I work on refactoring and tightening it up. I will do multiple tests for UI bugs caused by my code, rework as needed until I have a basic working version of the app, and do another deployment once it's up and running.

From there, I'll look to incorporate some CSS styling and work on implementing the unique features I envisioned at the start of the assignment. Obviously, I'll look to ensure that all the initial requirements for the project, including the Read Me and documentation requirements, are all completed before embarking on the final styling process.

User Stories:

As a player, I want to play tic-tac-toe against myself or with someone else.

As a player, I want to see where my moves are registered on the board so I know where I can make a move next.

As a user, I want to be able to keep track of my wins and losses so I can compare my record against other users.

As a player, I want to be notified when there are no further moves I can make so that I know when the result is a tie.

As a user, I want to be able to log-in and log-off with ease so that I don't have to worry about my account being compromised.

As a user, I want to be able to control sound effects and music in case I'm in an environment that's not conducive to noise.

How you plan to keep your code modular?

I intend to create unique js files for each major feature of the app. The game engine will be written separately from the event handlers, event scripting, API, UI, and AJAX documents.

I'm also considering creating separate js files to separate site features, such as a page dedicated to menu and button functions, a page for audio functions (if I have the time to get implement those), and of course a separate page that runs the game engine.

HTML and CSS files will have their own dedicated sections, and I'm hoping to have the time to incorporate SASS functionality, which will allow for increased modularity in my CSS code.

What creative spin will you add to your project?

I want the game "pieces" to be tic-tacs and toes...because that would be weird and I love puns.

I'd like each user that signs up to have a Win/Loss record, winning percentage, and current streak displayed beside their username, and access to leaderboards that track all users streaks and records/winning percentages.

How will you use version control to backup / track your project?

I will create multiple branches within my main project folder/repo:
- pre-test
- testing
- post-test (ready to push / deploy)

I will try to consistently commit and push in phases. During the pre-test phase, I will commit and push each time a section of code is written (i.e. the html, the api, the ajax, the ui, game engine, etc)

During testing phase I will commit and push each time I've debugged and refactored a piece of code to get it functioning properly

during post-test I will commit and push after consecutively running and clearing all tests cleared in the 'testing' phase.

What additional features will you build if you have extra time?

- audio cues each time a move is made, or a game ends
- modals that tell the user when they've signed in, signed up, changed password, or signed out successfully.
- low volume bed music for the duration of each game. Music change when a game ends and a new game is started.
- Leaderboards for wins, losses, and streaks
