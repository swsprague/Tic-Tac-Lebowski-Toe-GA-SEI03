
# Tic-Tac Lebowski-Toe - A Read Me

<h2>The Development Process: My Story</h2>

<p>I'm sure I'm not alone in saying that this project involved a series of emotional swings unlike almost anything I've worked on in my career. The process of assembling this game consisted of frustrating, failure-induced lows and exhilirating, success-driven highs, oftentimes experienced in quick succession.</p>

<p>But as tough as the process was, it was also extremely rewarding. I felt a true sense of accomplishment post-deployment, something I've been seeking in my work for quite some time now. For as many hours as I poured into this project, I never once felt like I wanted to give up, like I wanted to stop trying to improve my code, to find a solution.</p>

<p>Each time I encountered roadblocks, sure it was frustrating, but it was also exciting, another challenge to tackle en route to completion. I liken the experience to mountainclimbing - each challenge face is another part of the rock wall to scale, each problem solved is like nailing in one more foothold on your way to the moutaintop. Did the mountain seem to jut out sideways or possibly turn upside-down at times? Sure it did. But javascript ain't your typical
mountain.</p>

<p>Quick note: I was able to actually replace the X's and O's with Tic-Tacs and Toes, a bonus goal I set for myself that I was able to happily achieve!</p>

<h2>Problem Solving: My Strategy</h2>

<p>My main method of problem solving was trial and error. The ability to see my code updates reflected in near-realtime using the 'grunt serve' function was a major advantage in helping me reach MVP, as I was able to quickly determine what code was working and what was not.</p>

<p>I also found the console.log function to be extremely helpful in determining what my code was actually doing throughout the process. Without this, I would not have been able to wrap my head around the concept of the API POST and PATCH scripts, as well as how I could utilize the "store" object provided as part of our templates to literally store and use some of the information provided by the API responses.</p>

<p>On a similar note, reaching an understanding of how the API works, what it provides, and what it accepts for input was the biggest part in completing this project. It was an extremely abstract concept to me at the start, but within the span of a few days I came to understand it, and am looking forward to desiging my own API when we get to that. </p>

<p>One more thing: The issue cue saved me seemingly endless frustration at certain points. At first, I was using it to search for similar issues I had encountered and take a look at the solutions found by others who were currently or had previously worked on this project. But in the later stages I realized just how of a useful resource it could be, as I opened several of my own issues and was given some extremely useful guidance en route to finding the solutions I was seeking.</p>

<h2>Technologies Used:</h2>
<ul><h3>Methods:</h3>
<li>.hide()</li>
<li>.show()</li>
<li>.fadeIn()</li>
<li>.fadeOut()</li>
<li>.on()</li>
<li>.off()</li>
<li>.text()</li>
<li>.html()</li>
<li>event.target</li>
<li>.trigger()</li>
<li>.forEach()</li>
<li>.prepend()</li>
</ul>

<ul><h3>HTML/CSS</h3>
<li>flex</li>
<li>container</li>
<li>a lot of classes</li>
<li>a lot of id's</li>
<li>Bootstrap</li>

<h2>Unsolved Problems for Future Iterations</h2>
<ul>
<li>Making Button Placement More Intuitive, Easier to Use/Read</li>
<li>Adding Font Styling to User Messages</li>
<li>Decreasing Load Times Through Refactoring and Tightening Up Code</li>
<li>Ability To Track X Wins, O Wins, and Ties for Each User</li>
<li>Ability to View Win Streaks, Tie Streaks, and Longest Streaks for Each User</li>
<li>Adding Sound Effects Each Time a Move Is Made</li>
<li>Congratulating the Player More for a Win</li>
<li>Making a Bot to Play Against You</li>
<li>Adding Multiplayer Capabilities</li>
</ul>

![Wireframe][logo]

[logo]: https://i.imgur.com/r24VPpO.png "Tic-Tac-Toe Wireframe"


<h1>Planning Stages</h1>

<h2>User Stories:</h2>

<h3>As a player, I want to play tic-tac-toe against myself or with someone else.</h3>

<h3>As a player, I want to see where my moves are registered on the board so I know where I can make a move next.</h3>

<h3>As a player, I want to be notified when there are no further moves I can make so that I know when the result is a tie.</h3>

<h3>As a user, I want to be able to keep track of my wins and losses so I can compare my record against other users.</h3>

<h3>As a user, I want to be able to sign up to play.</h3>

<h3>As a user, I want to be able to sign in to play.</h3>

<h3>As a user, I want to be able to start a new game when signed in.</h3>

<h3>As a user, I want to be able to change my password when signed in.</h3>

<h3>As a user, I want to be able to easily sign out.</h3>

<h3>Bonus: As a user, I want to be able to control sound effects and music in case I'm in an environment that's not conducive to noise.</h3>

<h2>How to represent the board in JS:</h2>

<p>My plan was to create a 3 X 3 board using individual "div" containers for each square in the board. I would then attach event listeners to each square, which would be able to register user input. Depending on which class (x's or o's) the player decided to play as, the event triggered by the listener would enter an image of an x or an o as needed.</p>

<p>As far as the engine goes, I planned to utilize the array listed in the game API to track which move has been entered into the board, using the 9 indices (0-8) to track the location of the move on the board. The Board itself would be represented in the array on a left to right readout, with the index of 0 indicating the upper left square on the board, 1 being the upper middle, 2 being upper right, 3 being middle left, and so on. Planned to have it look like this:</p>

<p>
0 1 2
3 4 5
6 7 8
</p>

<h2>How I will approach the project:<h2>

<p>My first move will be to set up my repository and do an initial deployment. Then I'll go about setting up the initial html for the board layout, followed by setting up the API communication, as well as get the initial user authentication process up and running. Then I'll do a second deployment.</p>

<p>Once that's in place, I'll write the game engine in javascript, attempting to get a working version of the game as a well as the required features (score tracking, user notifications, etc) before I work on refactoring and tightening it up. I will do multiple tests for UI bugs caused by my code, rework as needed until I have a basic working version of the app, and do another deployment once it's up and running.</p>

<p>From there, I'll look to incorporate some CSS styling and work on implementing the unique features I envisioned at the start of the assignment. Obviously, I'll look to ensure that all the initial requirements for the project, including the Read Me and documentation requirements, are all completed before embarking on the final styling process.</p>

<h2>How you plan to keep your code modular?</h2>

<p>I intend to create unique js files for each major feature of the app. The game engine will be written separately from the event handlers, event scripting, API, UI, and AJAX documents.</p>

<p>I'm also considering creating separate js files to separate site features, such as a page dedicated to menu and button functions, a page for audio functions (if I have the time to get implement those), and of course a separate page that runs the game engine.</p>

<p>HTML and CSS files will have their own dedicated sections, and I'm hoping to have the time to incorporate SASS functionality, which will allow for increased modularity in my CSS code.</p>

<h2>What creative spin will you add to your project?</h2>

<p>I want the game "pieces" to be tic-tacs and toes...because that would be weird and I love puns.</p>

<p>I'd like each user that signs up to have a Win/Loss record, winning percentage, and current streak displayed beside their username, and access to leaderboards that track all users streaks and records/winning percentages.</p>

<h2>How will you use version control to backup / track your project?</h2>

<p>I will create multiple branches within my main project folder/repo:</p>
<ul>
<li>pre-test</li>
<li>testing</li>
<li>post-test (ready to push / deploy)</li>

<p>I will try to consistently commit in phases. During the pre-test phase, I will commit each time a section of code is written (i.e. the html, the api, the ajax, the ui, game engine, etc).</p>

<p>During testing phase I will commit each time I've debugged and refactored a piece of code to get it functioning properly.</p>

<p>During post-test I will commit after consecutively running and clearing all tests cleared in the 'testing' phase.</p>

<h2>What additional features will you build if you have extra time?</h2>
<ul>
<li>audio cues each time a move is made, or a game ends</li>
<li>modals that tell the user when they've signed in, signed up, changed password, or signed out successfully.</li>
<li>low volume bed music for the duration of each game. Music change when a game ends and a new game is started.</li>
<li>Leaderboards for wins, losses, and streaks.</li>
</ul>
