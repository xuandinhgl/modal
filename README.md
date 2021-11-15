# Modal

A simple library to create modal.


## Installation

- Install via npm or yarn:

```bash
$ npm install @xuandinhgl/simple-modal
# install with yarn
$ yarn add @xuandinhgl/simple-modal
```

## Usage

- In a modular environment.

Javascript
```js
import modal from '@xuandinhgl/simple-modal'
```

SCSS
```scss
@import "~/@xuandinhgl/simple-modal/src/scss/modal.scss";
```

- In browsers.
```html
<head>
    <link rel="stylesheet" href="https://unpkg.com/@xuandinhgl/simple-modal@:0.1.0/dist/css/modal.css">
</head>
<body>
    <!-- Using with anchor -->
    <a class="btn btn-primary" href="#" data-toggle="modal" data-target="#demo-modal">Open modal</a>    
    
    <!-- Using with button -->
    <button class="btn btn-primary" data-toggle="modal" data-target="#demo-modal">Open modal</button>
    
    <div id="demo-modal" class="xdi-modal">
        <div class="xdi-modal__backdrop js-modal-backdrop"></div>
        <div class="xdi-modal__dialog">
            <button class="xdi-modal__close js-modal-close"></button>
            <div class="xdi-modal__inner">
                <h3>Modal title</h3>
                <p>Modal body</p>
            </div>
        </div>
    </div>
    <script src="https://unpkg.com/@xuandinhgl/simple-modal@:0.1.0/dist/js/modal.umd.js"></script>
    <script>
        window.addEventListener('DOMContentLoaded', function() {
            modal();
        })
    </script>
</body>
```

If you want to add `preventDefault` or `stopPropagation` to anchor, just add `data-prevent="true"`
`data-stop="true"` to html attribute.

## Contribute

All contributions, big or small, are warmheartedly welcome! Please follow these steps if you want to contribute to this project.

### Clone and install dependencies

```bash
git clone https://github.com/xuandinhgl/modal.git
cd modal
npm install
```

### Build the library

```bash
# For dev
npm run dev

# For prod
npm run build
```

Once you're happy with the changes, commit the file and create a PR.

## License
MIT © [Xuan Dinh](https://github.com/xuandinhgl)
