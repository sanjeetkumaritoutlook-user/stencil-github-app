[![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)](https://stenciljs.com)

## Usage

install the package and use:

in this format : 

```html
<github-repo-card owner="stenciljs" repo="core"></github-repo-card>
```

To start using this library:

in another Angular app/React app

```bash
npm i stencil-github-app
```
then in main.ts (Angular)/ in React component file (React):
```tsx
import { defineCustomElements } from 'stencil-github-app/loader';
// Initialize the custom elements
defineCustomElements(window);
```
Make sure you have in app.module.ts in Angular or the standalone component.ts itself(not needed in React)
```tsx
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
```

then in app.component.html (Angular)/ App.tsx(React) ,
they can be added as simple tag with any attribute as property in dash-case
such as:
```html
<github-repo-card owner="stenciljs" repo="core"></github-repo-card>
```

in another stencilJS application:

two ways :

first one works (use live url)

```html
<script type="module" src="https://sanjeetkumaritoutlook-user.github.io/stencil-github-app/build/stencil-github-app.esm.js"></script>
  <script nomodule src="https://sanjeetkumaritoutlook-user.github.io/stencil-github-app/build/stencil-github-app.js"></script>

```

and then use the html tag

second way (may not work)

in src/global/app.ts:
```tsx
import { defineCustomElements } from 'stencil-github-app/loader';

defineCustomElements();
```

where owner and repo are Props taking value from github

## two ways to set up stencil app in local:

1. npm init stencil (if this doesnt work, then)

2.npx create-stencil@latest


then cd folder-name , npm install, npm start

to create new component in stenciljs:  npm run generate 

## publish to npm
npm run build

npm publish --access public






