### GameJS

A few years ago I noticed something terrible. Microsoft no longer includes that classic minsweeper game that came standard with any Windows 98 download -- the one you spent hours mastering. The one one that turned all your boring extra time into a thrilling chase for a yellow face in sunglasses. I knew something had to be done. So with a fancy new jQuery pattern in hand I went to work building my very own replacement. 

<br/>
![minesweeper](./assets/images/minesweeper_classic_1.png "image by rdiachenko")
<div>Sweet sweet victory.</div>

<br/> 

At it's heart, this game is a simple jQuery application. Unlike most jQuery projects, though, this application is built around a central, project-wide 'Main' object. This stateful object preserves the the game context by internalizing all available properties and methods. This helps the developer avoid using those troublesome global objects, and provides some stability to this framework-free design. When you use this type of pattern, everything is in scope. 

<br/>

```
Main.page.runGame = function () {

    Main.isClockRunning = true;
    Main.clock = 0;
    Main.page.updateTimer();
   
    // ...
}
```   

<br>

Anyone with jQuery experience knows how quickly it turns to spaghetti code. The list of available methods, properties along with context and state can soon become overwhelming. By attaching these to the Main app object a developer solidifies the project around a core, a library. This makes organizing everything from templates to DOM selectors a breeze. 

<br/>

```

// A library of jQuery selectors built
// into the 'Main' object.   

Main.control = {
    settingsDots: "#option-dots",  
    gameTimer: "#game-timer",
    flagsRemaining: "#mines-remaining",
    flagsRemainingFull: "#mines-remaining-full",
    gameBoard: "#gamboard",
    cellTemplate: "#div-template",
    gridCell: "div.grid-cell",
    bombTemplate: "#bomb-image"
}

```
<br/>

JQuery is not my JavaScript solution of choice. I generally prefer using the structure a framework like Angular or React provide. With all the leverage and consistency web components give you, the idea of rolling your own DOM elements can feel almost backward. That being said, small projects like this game don't necissarily need all the overhead a full JS framework brings along with it. It's lightweight, was written on 4 notepad documents, and gets the job done.  
But when you need to get away from that overhead, this jQuery app object does a good job at keeping your project organized.
