/*
<==================README FILE====================>

1. Body 
-> To position the snake exactly to the bottom left of th screen 
    background-size: 100vh 100vw;
-> flex box in flexible box layout (to allign div side by side)
-> linear-gradient is used to give two colors 

->  display: grid;
    grid-template-rows: repeat(18, 1fr);
    grid-template-columns: repeat(18, 1fr);

    divides the the div named board into a grid of 18 X 18 soo that the snake 
    can move in a defined path 

-> gameloop is used to paint our screen again and again after a definite 
    anount of time

-> The requestAnimationFrame() is one of the methods present in JavaScript to powerfully incorporate amazing 
    and simple animations within our project. Earlier methods like setTimeout() or setInterval() were used which was okay but they slow down the whole process. 
    The main problem with them was of synchronization. 
    The transition time was very slow and didn’t match with the user’s system perfectly.

    Here, requestAnimationFrame() came into the picture. 
    Basically, requestAnimationFrame() method easily syncs in with your browser timings and 
    generate a call to perform the specific animation before the actual loading of the screen. 
    Further, it also slows down its process when the animation is actually not in the use thus saving resources.
    Flicker is also avoided 
    Gives highest fps 
    

*/