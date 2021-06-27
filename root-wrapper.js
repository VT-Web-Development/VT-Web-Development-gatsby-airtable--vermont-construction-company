import React from 'react'
import { createGlobalStyle } from 'styled-components'
import SimpleReactLightbox from 'simple-react-lightbox'

import { GatsbyProvider } from './src/context/context'

const GlobalStyle = createGlobalStyle`
/*
=============== 
Variables
===============
*/

:root {
  /* dark shades of primary color*/
  --clr-primary-1: hsl(56, 100%, 45%);
  --clr-primary-2: hsl(56deg 71% 71%);
  --clr-primary-3: hsl(209, 33%, 17%);
  --clr-primary-4: 	hsl(58, 95%, 50%);
  /* primary/main color */
  --clr-primary-5: hsl(0, 0%, 89%);

  /* lighter shades of primary color */
  --clr-primary-6: hsl(21, 57%, 50%);
  --clr-primary-7: hsl(21, 65%, 59%);
  --clr-primary-8: hsl(21, 80%, 74%);
  --clr-primary-9: hsl(21, 94%, 87%);
  --clr-primary-10: hsl(21, 100%, 94%);
  /* darkest grey - used for headings */
  --clr-grey-1: hsl(209, 61%, 16%);
  --clr-grey-2: hsl(211, 39%, 23%);
  --clr-grey-3: hsl(209, 34%, 30%);
  --clr-grey-4: hsl(209, 28%, 39%);
  /* grey used for paragraphs */
  --clr-grey-5: hsl(210, 22%, 49%);
  --clr-grey-6: hsl(209, 23%, 60%);
  --clr-grey-7: hsl(211, 27%, 70%);
  --clr-grey-8: hsl(210, 31%, 80%);
  --clr-grey-9: hsl(212, 33%, 89%);
  --clr-grey-10: #f1f5f8;
  --clr-white: #fff;
  --clr-red-dark: hsl(360, 67%, 44%);
  --clr-red-light: hsl(360, 71%, 66%);
  --clr-green-dark: hsl(125, 67%, 44%);
  --clr-green-light: hsl(125, 71%, 66%);
  --clr-black: #222;
  --transition: all 0.3s linear;
  --spacing: 0.1rem;
  --radius: 0.25rem;
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  --bg-transparent: rgba(238,247,243, 0.5);
  --max-width: 1170px;
  --fixed-width: 620px;
}
/*
=============== 
Global Styles
===============
*/

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
${'' /* 
html.js-focus-visible {
  display: contents;
  display: flex;
} */}

@media (max-width: 200px) {
  html.js-focus-visible {
    display: flex;
  }
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: var(--clr-white);
  color: var(--clr-grey-1);
  line-height: 1.5;
  font-size: 0.875rem;
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
}
img {
  width: 100%;
  display: block;
}

h1,
h2,
h3,
h4 {
  letter-spacing: var(--spacing);
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
  font-weight: 400;
}
h1 {
  font-size: 2rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.25rem;
}
h4 {
  font-size: 0.875rem;
}
p {
  margin-bottom: 1.25rem;
  color: var(--clr-grey-3);
}

a {
  color: var(--clr-primary-1);
}

a:hover {
  color: var(--clr-primary-2);
}

button {
    background-color: transparent;
    border: none;
    outline: none;
}

button:focus {
    outline: none;
}

@media screen and (min-width: 800px) {
  h1 {
    font-size: 3.5rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 1.75rem;
  }
  h4 {
    font-size: 1rem;
  }
  body {
    font-size: 1rem;
  }
  h1,
  h2,
  h3,
  h4 {
    line-height: 1;
  }
}
/*  global classes */

${
  '' /* .custom-button {
  text-transform: uppercase;
  background: var(--clr-primary-1);
  color: var(--clr-primary-10);
  padding: 0.375rem 0.75rem;
  letter-spacing: var(--spacing);
  display: inline-block;
  font-weight: 400;
  transition: var(--transition);
  font-size: 0.875rem;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: var(--radius);
}

.custom-button:hover {
  background: var(--clr-primary-2);

  transform: scale(1.03);
} */
}

.getAQuote, .custom-button {
  background: var(--clr-primary-1);
  ${'' /* color: var(--clr-white); */}
  text-align: center;
  font-weight: bold;
  border-radius: 20px;
  border: 5px solid rgb(230, 214, 0, 0.5);
  text-transform: capitalize;
  text-decoration: none;
  padding: 20px 16px 20px 16px;
  box-shadow: rgba(230, 214, 0, 0.25) 0px 50px 100px -20px,
    rgba(230, 214, 0, 0.3) 0px 30px 60px -30px;
  background: linear-gradient(
    45deg,
    var(--clr-primary-1),
    var(--clr-primary-2)
  );

  display: block;
  text-align: center;
  margin: 0 auto;
}

.getAQuote, .custom-button a {
  color: var(--clr-primary-3);
}

.getAQuote:hover, .custom-button:hover {
  background: var(--clr-primary-2);
  /* Effect */
  transform: scale(1.03);
}

.getAQuote:active {
  /* Effect */
  transform: scale(0.98);
}

button.call-to-action {
  color: var(--clr-white);
  text-align: center;
  font-weight: bold;
  border-radius: 20px;
  border: 2px solid rgb(230, 214, 0, 0.5);
  -webkit-text-decoration: none;
  text-decoration: none;
  padding: 20px 16px 20px 16px;
  box-shadow: inset 0 5px 0 var(--clr-primary-4), 0 8px 6px -6px #a6acac;
  background: linear-gradient(
    45deg,
    var(--clr-primary-1),
    var(--clr-primary-2)
  );
}

button.call-to-action:hover {
  background: var(--clr-primary-2);
  /* Effect */
  transform: scale(1.03);
}

button.call-to-action:active {
  /* Effect */
  transform: scale(0.98);
}

button.call-to-action a {
  text-transform: capitalize;
  letter-spacing: 5px;
  color: var(--clr-primary-3) !important;
  font-size: 1rem;
  cursor: pointer;
  transition: var(--transition);
}

/* section */
.section {
  padding: 5rem 0;
  position: relative;
}

.section-center {
  width: 90vw;
  margin: 0 auto;
  max-width: var(--max-width);
}
@media screen and (min-width: 992px) {
  .section-center {
    width: 95vw;
  }
}


`
export const wrapRootElement = ({ element }) => {
  return (
    <>
      <SimpleReactLightbox>
        <GlobalStyle />
        <GatsbyProvider>{element}</GatsbyProvider>
      </SimpleReactLightbox>
    </>
  )
}
