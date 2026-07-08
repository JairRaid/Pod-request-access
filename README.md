# Frontend Mentor - pod request access landing page

This is a solution to the [Pod request access landing page](https://www.frontendmentor.io/challenges/pod-request-access-landing-page-eyTmdkLSG). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Your users should be able to:

- Receive an error message when the form is submitted if:
  - The Email address field is empty should show "Oops! Please add your email"
  - The email is not formatted correctly should show "Oops! Please check your email"

- View the optimal layout depending on their device's screen size
  See hover states for interactive elements

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: https://github.com/JairRaid/Pod-request-access
- Live Site URL: https://jairraid.github.io/Pod-request-access/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

During this project i learned to:

- Modify the style of the `<input type=email" />` when i select a value inside the **autocomplete dropdown** by using this CSS code :

```
input[type="email"]:-webkit-autofill,
input[type="email"]:-webkit-autofill:hover,
input[type="email"]:-webkit-autofill:focus,
input[type="email"]:-webkit-autofill:active {
  -webkit-text-fill-color: var(--white) !important;
  background-color: var(--blue-900) !important;
  box-shadow: 0 0 0 1000px var(--blue-900) inset !important;
}

input[type="email"]:-moz-autofill {
  -moz-text-fill-color: var(--white) !important;
  box-shadow: 0 0 0 1000px var(--blue-900) inset !important;
}
```

## Author

- Email: rakotonirainyriija@gmail.com
- Facebook: https://web.facebook.com/jair.rakoto.3/
