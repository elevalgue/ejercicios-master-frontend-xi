# Front-end Master Exercises 🍋

## Content

#### Module 01: Layout 💅

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./src/styles/main.scss" />
    <title>Layout</title>
  </head>
  <body>
    <h2>Paleta de colores dinámica</h2>
    <div class="container container-1">
      <div class="box darken-1">
        <span class="color-box-text">Darken 1</span>
      </div>
    </div>
  </body>
</html>
```

#### Module 02: Lenguage ⚙️

```
function values({...eso2o}) {
  return Object.values(eso2o)
}

console.log(values({ David: 8.25, Maria: 9.5, Jose: 6.75, Juan: 5.5, Blanca: 7.75, Carmen: 8, }));
```

#### Module 03: Bundling 🍱

```
"scripts": {
"start": "run-p -l type-check start:dev",
"build": "run-p -l type-check build:prod",
"build-dev": "run-p -l type-check build:dev",
"start:dev": "webpack serve --config webpack.dev.js",
"build:prod": "webpack --config webpack.prod.js",
"build:dev": "webpack --config webpack.dev.js",
"build:perf": "npm run type-check && webpack --config webpack.perf.js",
},
```

#### Module 04: Frameworks

##

Made with ⭐ by @elevalgue
