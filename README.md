**Welcome to my Star Wars Trivia Game web-app!**

The single page view with `film` category:

<img width="784" alt="Screen Shot 2022-07-27 at 5 03 49 PM" src="https://user-images.githubusercontent.com/52838675/181374036-c0239cd8-6afb-4679-96a6-cf0d3b94c453.png">

A closer view on the revealed answer:

<img width="464" alt="Screen Shot 2022-07-27 at 5 03 58 PM" src="https://user-images.githubusercontent.com/52838675/181374098-c1553bfa-10c3-493d-8815-42b603d00364.png">

***What does this app do?***

This is a single page application. Upon loading the app, there will be a button to generate a random trivia card from Star Wars. 

After the button is clicked, a card of one of six categories will be randomly chosen: films, people, vehicles, starships, species, and planets. The card will have some information, and the user has to guess the correct item. At the bottom of the card there is a button that reveals the correct answer.

***What tech-stack was used?***

This is a React/TypeScript app that uses css for styling and axios for the API call. The icons, buttons and some of the UI elements are from MUI library.

***Highlights from the design proccess:***

1. Early on, I started the design proccess with a few sketches, and I wasn't sure what I wanted to do, until I settled on this general idea. By the time I started coding, I had already settled on the idea, and had the structure in mind.

2. The goal was to use the 'box model'. There are multiple containers in use here: there is the general full-page which has the background. On top of that, there is the `Trivia` container which has the button to generate a card and the card. The main card consists of the `defaultCard` which contains the media, and a child that contains the actual card, such as `filmCard`.

3. I decided for all of the children to be identical in design, and only differ in color in their background. That way, the user can tell more easily when the category changes.

4. Due to time limitations, I had to compromise. This is not the perfect app, and given more time/effort there are many things I could add or improve.

***So, what would I do next if I came back to this project?***

1. I would add an `about/home` page, with a legend of the colors and some info about the game.

2. I would stylize fonts more

3. Consider adding some counters for correct guesses or correct guesses in a row.

4. Non visually, the code isn't perfect. It does exactly what I want it to do, but it has a lot of repetition that isn't necessary and I could easily improve upon. It was a little too late in the proccess to rework the code (tech debt!)

By all means, this is not a perfect app, but it is able to capture the functionality in a relatively simple manner, while also communicating effectively the theme of Star Wars.

***Some progress pictures:***
While developing the card:

<img width="758" alt="Screen Shot 2022-07-26 at 10 38 56 PM" src="https://user-images.githubusercontent.com/52838675/181374462-9fb71a90-679d-4370-bfea-677f761f5a19.png">

Adding the colors to the categories:

 <img width="763" alt="Screen Shot 2022-07-27 at 1 23 12 AM" src="https://user-images.githubusercontent.com/52838675/181374526-477f13e2-836a-4008-a0fb-38f29b69a453.png">

The initial generic card and button from MUI with random colors and pictures:

<img width="760" alt="Screen Shot 2022-07-26 at 8 35 45 PM" src="https://user-images.githubusercontent.com/52838675/181374627-66e3caf2-fd2e-4ad7-9e6b-8e12495ab6a1.png">
