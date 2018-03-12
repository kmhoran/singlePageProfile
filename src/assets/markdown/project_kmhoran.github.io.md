# kmhoran.github.io
### A Single-Page Portfolio

Back in November ‘17, my sister sent me a link to her [online portfolio](http://www.tortoiseandplume.com/about/). She’d been talking about her latest project and I wanted to find out more. Though presented as a simple blog, I was immediately impressed by this in-depth catalog of her favorite pieces of work, and naturally set to work building my own.

<br/>

I had been hosting my own “portfolio” of sorts through the [GitHub Pages](https://pages.github.com/) service. It was a static Html page that used only a token about of jQuery for animations. Sad. If I wanted a single-page masterpiece like my sister, I knew it had to be Angular. That new half-cousin of AngularJS which insists on bringing its friend, Typescript, to all the parties. Yep, no better way to get this portfolio site off the ground than figuring out what all that nonsense was about.

<br/>

![alt text](./assets/images/angular_friends.jpg "Photos courtesy of www.pexels.com")
<div class="image-description">Typescript, let's roll out.</div>

<br/>

### Angular and Its CLI

Of all the tools and tech I've come across in this project, nothing has impressed me more than the Angular CLI. Back when I was first jumping into AngularJS, starting up a project was a bit of a nightmare. Manually building modules and controller architecture, remembering what files needed to be included on the Html, and in what order. That first day of AngularJS, with the console glaring red with dependency anger, was enough to make me pull my hair out. Angular *tout court*, not so. With a quick bash command you’re up and running.

```bash
$ ng init profile
```

<br/>

Need a new component (the new analog to AngularJS Controller)?

```bash
$ ng g component home
```

<br/>

Heck, the CLI will even serve the app (which auto-updates on saves!).

```bash
$ ng serve --open
```

<br/>

And while other frameworks (django comes to mind) feature similar CLIs with similar functionality, even *they* require some app registration and additional tinkering. Angular CLI produces fully registered, running apps out of the box every time! I can’t give the Angular team enough praise on this.

<br/>

### Strongly Typed… JavaScript?

Honestly, the explosion of client-side frameworks and languages in the past few years has been a bit much. It seems like everyone and their mom is using a fresh-of-the-press framework that’s just sure to take off. In an environment like this this, I’m a bit reluctant to try anything new – who’s to say support won’t end in six months. 

<br/>

That being said, I’m kinda glad I got a chance to get familiar with that precompiled JavaScript language required* by Angular, Typescript. As a C# developer by day, absolutely love the strong typing  Typescript brings to the notoriously rickety JavaScript. 

<br/>

![alt text](./assets/images/bridge.jpg "Photos courtesy of www.pexels.com")
<div class="image-description">Photo of an actual JavaScript project.</div>

<br/>

I love being able to to create an interface and consistently read incoming json from an Http request. I loge being able to import resources and have the intellisense predict where I’m going. And although the configuration files still frighten and confuse me, at least package.json is becoming a staple in the Node universe.

<br/>

### DRY As Can Be

Finally, the thing that got me really excited about this project, and the feature that made me decide to use Angular for this app to begin with: web components. Now to be fair, custom web components do exist in AngularJS, but like the manual setup process, this capability is far from user friendly, and requires a deep dive into documentation. Angular 2+ is essentially built up around the component, with each new module being self contained all the way sown to Html & Css. Even custom pipes are a breeze with the CLI. 
```bash
$ ng g pipe reverse
```

<br/>

Again, what this ultimately means is a lot less time is spent writing boiler-plate code, and a lot more time is spent actually building the unique features of your app.

```javascript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    // Start my code.
    if (value) {
      return value.reverse();
    }
    // End my code.
  }
}
```


<br/>

This component-heavy architecture makes Angular much more clean than its predecessor, not to mention a lot more easier to reason about. Only the wizards of AngularJS dare to build custom directives, while Angular makes their implementation all but trivial. Angular really improved upon the framework by leaps and bounds with their marked shift toward web components. They turn out to be very intuitive givin g the developer every reason to keep DRY code.

<br/>

### Final Thoughts

This project has been a blast to make! Digging through and trying to polish up past projects has been a terrific learning experience – read all about it. All in all, Angular has been quite the fan to work with and much easier to learn than its cousin. The design is much more intuitive and the CLI makes file building a snap.

<br/>

Though it feels considerably more heavy than the original Angular, and it is , you can’t beat the suite of tools it provides. As I continue on my coding adventure I plan to make it my single-page web app framework of choice (where appropriate), and I’ll be rooting for it to survive the front-end framework bloom we’re in, if only foe a few seasons more.