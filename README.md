# Project Strong-Star

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### Screenshot

![Screenshot of Strong-Star Homepage](public/assets/frontpageportfolio.png?raw=true)

### Links

- Live Site URL: [Strong-Star](https://strong-star.netlify.app/)

- Blog URL: [Strong-Star Blog](https://strong-star.netlify.app/blog)

- GitHub URL: [Strong-Star GitHub](https://github.com/ryan-theengineer/strong-star-starter)

## My process

Most of my process can be found within the README.md file located in the Public directory of Project Strong-Star.

It closely follows the tutorial located in the Astro.js Documentation: [Astro Docs](https://docs.astro.build/en/getting-started/).

I also included many of the features that can be found in the documentation such as the [RSS Feed](https://docs.astro.build/en/guides/rss/), and the [External Link Icons](https://docs.astro.build/en/recipes/external-links/).

There are changes that I've made to updated the code and make it more responsive, you can view this commit: [Flexboxes](https://github.com/ryan-theengineer/strong-star-starter/commit/3ecdccbc2a83dcad7ac1aed706a241451e5af42c) to view the changes I made including Flexboxes in the footer section to fix links not working properly on mobile devices.

This is my first Astro.js project and I have definitely learned a lot! I'm excited to continue working on this project and closely with Astro.js.

### Built with

- [Astro.js](https://astro.build/) - JS Framework
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- TypeScript
- [React](https://reactjs.org/) - JS library

### What I learned

I learned a great deal about Astro and how powerful it it can be. I also learned how useful the documentation of the framework is. It also taught me to recall my skills using HTML and CSS.

I hope to soon contribute to Astro.js and it's community.

Some code I'm proud of:

This the div containing my flexbox that is critical to the mobile experience. As well as the CSS that makes it work!

```html
<div class="flex-container">
  <a class="button" href={`https://www.${platform}.com/${username}`}>{platform}</a>
</div>
```

```css
/* flex container and media query*/

.flex-container {
  display: flex;
  flex-direction: row;
  padding: 0.5rem;
  align-items: center;
  margin: auto;
  justify-content: center;
}

@media (max-width: 800px) {
  .flex-container {
    flex-direction: column;
  }
}
```

If you want more help with writing markdown, I'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

### Continued development

In the future I will continue to post Blogs about the development of Strong-Star. I hope to soon add the ability to like and comment on the Blog posts.

There are many quality of life things I would like to add including animations and features.

### Useful resources

- [Astro Documentation](https://astro.build/) - The Astro Docs were critical to the functionality and success of the project.
- [W3 Schools](https://www.w3schools.com/css/css3_flexbox.asp) - Arguably just as critical to the mobile design, W3 Schools refreshed my knowledge of Flexboxes and CSS.

## Author

- Created By - Mars
- Website - [Project Strong-Star](https://www.your-site.com)
- Twitter - [@ryan_the_dev1](https://twitter.com/ryan_the_dev1)
- GitHub - [@ryanthe-engineer](https://github.com/ryan-theengineer)
- LinkedIn - [@ryan-the-engineer](https://www.linkedin.com/in/ryan-the-engineer)

## Acknowledgments

I would like to thank the Astro community and developers for the vast knowledge and resources available.
