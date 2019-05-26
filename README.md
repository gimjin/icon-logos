[![Powered By @ixiaer/icon](https://img.shields.io/github/package-json/dependency-version/ixiaer/icon-logos/dev/@ixiaer/icon.svg)](https://github.com/ixiaer/icon)

## 📦 Compiling

```bash
$ icon symbol -n logos -i 'logos/logos/*.svg'
# Or alias package.json
$ npm run icon
```

## 💎 Usage

```javascript
// Webpack
import 'assets/scripts/logos.js'
```

```html
<!-- Or Browser -->
<script type="text/javascript" src="assets/scripts/logos.js"></script>
```

```html
<!-- Use icons -->
<svg class="logos" aria-hidden="true">
  <use xlink:href="#logos-vue" />
</svg>
<svg class="logos" aria-hidden="true">
  <use xlink:href="#logos-react" />
</svg>
```

* [icon names](https://github.com/gilbarbara/logos/tree/master/logos).
* [Example](https://ixiaer.github.io/icon-logos/example.html)
