# __Now We Flip__ - Interactive Memory Game 

_Now We Flip_ is the _"Rock, Paper, Scissors"_ meets the _"Memory"_ game. The intention was to create an interactive game that was something more than just a "find 2 matching cards" game.
I wanted to make slightly more complex and hopefully more interesting card matching system by adding additional outcomes for the 2 cards flipped (apart from standard two outcomes: 1 - matching; 2 - not matching) and making things more dynamic by having cards creating different types of matches with different cards.
This was possible with throwing in a _"Rock, Paper, Scissors"_ game mechanic, where 3 different results can be rendered for each card, ex: 1 - Rock ties with Rock; 2 - Rock beats Scissors; 3 - Rock gets beaten by Paper.
In this game the player has to memorise the positions of the cards in such a way that the own - green cards eliminate and don't get eliminated by the red cards.
I have tested this game extensively in real life with my kids and the original mechanics of the game work quite well, but the full mechanics didn't fit the scope of this project, therefore there is a big potential for further development (explained in detail below).

<img src="assets/images_readme/ms2-readme-overview.png" alt="Now We Flip - website overview">

# Link to live project - [CLICK HERE](https://lukaszpasich.github.io/Now-We-Flip-MS2-/index.html)

#### Contents
1. [UX](#ux)
	- [User Goals (Strategy)](#user-goals)
	- [Stakeholder Goals (Strategy)](#stakeholder-goals)
	- [User Stories (Strategy)](#user-stories)
	- [Project Scope (Scope)](#project-scope)
	- [Information Architecture and Interaction Design (Structure)](#information-architecture-and-interaction-design)
	- [Wireframes (low fidelity wireframes) (Skeleton)](#wireframes-(low-fidelity))
	- [Prototype (high fidelity wireframes) (Skeleton)](#prototype-(high-fidelity))
	- [Design (Surface)](#design)
2. [Features](#features)
	- [Feature One](#feature-one)
	- [Features to Implement in the Future](#features-to-implement-in-the-future)
3. [Technologies](#technologies)
	- [Tools](#tools)
	- [Libraries](#libraries)
	- [Languages](#languages)
4. [Testing](#testing)
	- [Automated Testing](#automated-testing)
	- [UX Testing](#ux-testing)
	- [Manual Testing](#manual-testing)
	- [Bugs](#bugs)
5. [Deployment](#deployment)
    - [Github Pages Deployment](#github-pages-deployment)
    - [Cloning](#cloning)
6. [Credits](#credits)
	- [Content](#content)
	- [Media](#media)
	- [Code](#code)
    - [Resources](#resources)
	- [Acknowledgements](#acknowledgements)
7. [Contact](#contact)


---


## UX

### User Goals.
- Pass time and have fun playing a simple, enjoyable game - an outlet for a quick procrastination moment.
- Jog the memory with the challenge presented by the game.
- Discover an original game mechaninc mix.

### Stakeholder Goals
- Create a game experience that will attract users to the website, keep users playing (staying on the website) and coming back to play the game (returning users).

### User Stories

1. As a first time user I want the game interface to be simple and easy to navigate, I want to be able to proceed to play the game without unnecessary delays, settings or other non-play interaction with the website.
2. As a first time user I want the rules of the game to be explained, outlining clearly all rules, scoring system and winning/losing conditions.
3. As a user of the game I want the game to be laid out clearly, with an intuitive interaction.
4. As a user of the game I want to be able to click on what I expect being clickable in the game and receive feedback to my actions from the game.
5. As a user of the game I expect any unpredicted interaction to be handled or prevented so that the game can't be unexpectedly broken, thus ruining the gaming experience.
6. As a returning user I want the game to be quick and fun enough, so that I would like to play it again and again.
7. As a returning user I want the game to have some way of increasing game difficulty, so that the game remains challenging, interesting and makes me come back to play it again.

### Project Scope
Originally the game came to life on an actual real table with the real cards and was supposed to be a 2-player game.
I have tested it many times and the mechanics passed my own playability test, but a lot of features have been re-evaluated during the course of development.

- __Players vs. Player game__ - this feature has been abandoned. I decided that asking 2 players swapping mouse every 2 clicks was a poor UX.
- __Player vs. Computer game__ - this feature has been abondened due to complexity of creating a Computer player.
I decided that the only way I can make this game a solo game with current dev skills available is by adapting a 2-player game into a solo game.
The player will do all the card turns trying to avoid pairs where green card could be eliminated (in the normal player vs. player mode players would actively seek to eliminate the opponent's colour).
- __X card activated__ - this feature has also been abandoned due to complexity.
In the original game the X card was suppose to act as a 4th card in the suit that a player loses first (ex. as soon as the three green Rocks were eliminated - as player's first full suit eliminated - the green X had become another green Rock; also explained in the [prototype](https://xd.adobe.com/view/302ca869-8919-4726-a9ca-0125f59e3156-657f/)).
This feature worked really well in the game maechinc tests, but a combination of the looming deadline and insufficient level of dev skills moved this feature onto the 'Further Future Development' shelf.
- __Game Sounds & Music__ - also didn't make it to the final version. I was concerned with making the game work first and left this as a bonus feature in case I had more time left, but that didn't happen in the end.

### Information Architecture and Interaction Design

#### Site Map
description

<img src="assets/images_readme/ms2-readme-ux-sitemap.jpg" alt="Now We Flip - website site map">

#### User Flow
description

<img src="assets/images_readme/ms2-readme-ux-userflow.jpg" alt="Now We Flip - website user flow">

### Wireframes (low fidelity)
description
- [Wireframes for the game AVAILABLE HERE](https://indd.adobe.com/view/41e1dcd7-ca60-4028-b5ac-60c370c98092)

### Prototype (high fidelity)
decription
- [Prototype - desktop version of the game AVAILABLE HERE](https://xd.adobe.com/view/302ca869-8919-4726-a9ca-0125f59e3156-657f/)
- [Prototype - mobile version of the game AVAILABLE HERE](https://xd.adobe.com/view/41f2cbf8-b4f8-4b1c-8561-e580ba0675ed-14a1/)

### Design

#### The Name

Why _"Now We Flip"_?

description

#### Logo
description

Reference images:
<img src="assets/images_readme/ms2-readme-ux-logoref.jpg" alt="Now We Flip website logo reference">

Anaconda MAA final logo:
<img src="assets/images_readme/ms1-readme-ux-logo.jpg" alt="Now We Flip logo">

#### Colours
description 

<img src="assets/images_readme/ms2-readme-ux-colours.jpg" alt="Now We Flip website colours">

#### Typography
description


[Back to top](#contents)

---

## Features
### Feature One
description

<img src="assets/images_readme/ms2-readme-features-?desktop.png" alt="Now We Flip website ? on desktops">

<img src="assets/images_readme/ms2-readme-features-?rphone.png" alt="Now We Flip website ? on phone">
	

### Features to Implement in the Future
- Definitely needed in the near future.
	- description
- Potentially something to look at in the future.
	- description

[Back to top](#contents)

---

## Technologies
### Tools
- [GitHub](https://github.com) was an IDE used for the project.
- [GitPod](https://gitpod.io/workspaces/) was used for version control.
- [Balsamiq](https://balsamiq.com) was used to create low fidelity wireframes.
- [Adobe XD](https://www.adobe.com/ie/products/xd.html) was used to build the high fidelity prototype.
- [Adobe Illustrator](https://www.adobe.com/ie/products/illustrator.html) was used to create the logo and also create/manipulate vector illustration icons and for saving vectors in .svg format.
- [Adobe Photoshop](https://www.adobe.com/ie/products/photoshop.html) was used to edit, crop and save images.
- [Adobe InDesign](https://www.adobe.com/ie/products/indesign.html) was used to create some visuals for this _Readme_ file and InDesign's online publish feature was used to store some of those visuals.
- [Am I Responsive](http://ami.responsivedesign.is) was used to create the images of each page displayed on different screen sizes in this _Readme_ file.

### Libraries
- [Bootstrap](https://getbootstrap.com/) grids were used in particular to create and maintain the design layout across different screen/viewport sizes and make the website responsive easily.
- [Google Fonts](https://fonts.google.com) was used for linking _Raleway_ and _Roboto Slab_ fonts to the website.
- [Font Awesome](https://fontawesome.com) was used for icons in the footer.

### Languages
- HTML
- CSS
- JavaScript

[Back to top](#contents)

---

## Testing

### Automated Testing
- [W3C Markup Validator](https://validator.w3.org/) was used for HTML validation:
	- _Landing page_ validator result [HERE](https://validator.w3.org/...) - Errors: 0, Warnings: 0
    - _How to Play page_ validator result [HERE](https://validator.w3.org/...) - Errors: 0, Warnings: 0
    - _Play page_ validator result [HERE](https://validator.w3.org/...) - Errors: 0, Warnings: 0

- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) was used for CSS validation:
	- CSS Validation by URI input result [HERE](https://jigsaw.w3.org/css-validator/...) - Errors: 0
	- CSS validation by direct input - Errors: 0
	
    <img src="assets/images_readme/ms2-readme-testing-cssvalidation.png" alt="Now We Flip website testing - CSS validator">

- [Web Accessibility](https://www.webaccessibility.com) was used to validate website's accessibility:
	- _Landing page_ accessibility test result [HERE](https://www.webaccessibility.com/results/...) - Violations: 0, Compliance score: 100%
    - _How to Play page_ accessibility test result [HERE](https://www.webaccessibility.com/results/...) - Violations: 0, Compliance score: 100%
    - _Play page_ accessibility test result [HERE](https://www.webaccessibility.com/results/...) - Violations: 0, Compliance score: 100%
	
    <img src="assets/images_readme/ms2-readme-testing-access.png" alt="Now We Flip website testing - accessibility assesment">

- [Google Mobile Friendly Test](https://search.google.com/test/mobile-friendly) was used to test responsiveness of the website:
	- _Landing page_ responsiveness test result [HERE](https://search.google.com/test/mobile-friendly?...) - Mobile friendly
    - _How to Play page_ responsiveness test result [HERE](https://search.google.com/test/mobile-friendly?...) - Mobile friendly
    - _Play page_ responsiveness test result [HERE](https://search.google.com/test/mobile-friendly?...) - Mobile friendly
	
	<img src="assets/images_readme/ms2-readme-testing-mobilefriendly.png" alt="Now We Flip website testing - mobile friendly test">
	
### UX Testing
#### User Stories Testing

1. As a user of the app I want ...
    - description


### Manual Testing
#### Elements and Links (in various screen sizes) Working Correctly Check
- Feature One
	- test description - YES
	

#### Various Internet Browsers Check

Website has been tested on the following Internet Browsers:

- Google Chrome - no issues detected
- Safari - no issues detected
- Mozilla Firefox - no issues detected
- Microsoft Edge - no issues detected
	
#### Various Devices Check

Website has been checked on Desktop, Laptop and iPhone6. No issues specific to devices were discovered.
	
### Bugs

#### Bugs Fixed
1.	- PROBLEM: description...
	- SOLUTION: description...

<img src="assets/images_readme/ms2-readme-testing-bugfix1.png" alt="Now We Flip website - bugs fixed">

#### Bugs not Fixed
1.	- PROBLEM: description...
	- SOLUTION: description...

img src="assets/images_readme/ms2-readme-testing-bugnotfix1.png" alt="Now We Flip website - bugs not fixed">

[Back to top](#contents)


---


## Deployment

### GitHub Pages Deployment

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com).
2. At the top of the Repository, locate the _Settings_ button on the menu and click on it.

<img src="assets/images_readme/ms2-readme-deployment-one.png" alt="Now We Flip website - deployment instructions">

3. Scroll down the Settings page until you locate the _GitHub Pages_ section.

4. Under _Source_, click the dropdown _Branch: None_ and select _Branch: Master_.

<img src="assets/images_readme/ms2-readme-deployment-two.png" alt="Now We Flip website - deployment instructions">

5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site link in the _GitHub Pages_ section.

<img src="assets/images_readme/ms2-readme-deployment-three.png" alt="Now We Flip website - deployment instructions">

7. The project has been now deployed - the link can be opened in the browser.


### Cloning

Description of cloning steps.


[Back to top](#contents)


---


## Credits
### Content
The textual content was influenced by or taken from the websites:
- [Website Name](https://www....)

### Media
- Rock, Paper, Scissors icons - by nightwolfdezines, downloaded from [www.vecteezy.com](https://www.vecteezy.com/vector-art/690865-rock-paper-scissors-line-icons)
- Poker table felt background - by klikk, downloaded from [www.adobestock.com](https://stock.adobe.com/ie/images/poker-table-felt/1414609)

### Code
- Code/feature description - code found on _www...._ website [https://www....](https://www....), (style.css file lines 000-000). 

### Resources
Websites I have accessed for solutions/ questions and extra resources:
- [www.w3schools.com](https://www.w3schools.com)
- [www.stackoverflow.com](https://stackoverflow.com)
- [www.developer.mozilla.org](https://developer.mozilla.org/en-US/)
- [www.css.tricks.com](https://css-tricks.com)
- [Code Institute course content](https://codeinstitute.net/)

### Acknowledgements
- Thank you to my mentor __Nishant Kumar__ for his guidance, support and continuous helpful feedback throughout this project.
- Tutor Support at Code Institute and the Slack Community for a solution to any question at any time.

[Back to top](#contents)

---

## Contact
For any queries related to this project, you can contact me at: lukas (dot) zed81 (at) gmail (dot) com.

[Back to top](#contents)

---

## THANK YOU FOR TAKING TIME TO VIEW THIS PROJECT!