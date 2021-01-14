# videojs-age-limit-icon

A Video.js plugin for displaying age limit icon over the video

## Installation

```sh
npm install --save videojs-age-limit-icon
```

## Usage

To include videojs-age-limit-icon on your website or web application, use any of the following methods.

### `<script>` Tag

This is the simplest case. Get the script in whatever way you prefer and include the plugin _after_ you include [video.js][videojs], so that the `videojs` global is available.

```html
<script src="//path/to/video.min.js"></script>
<script src="//path/to/videojs-age-limit-icon.min.js"></script>
<script>
  var player = videojs('my-video');

  player.ageLimitIcon();
</script>
```

### Browserify/CommonJS

When using with Browserify, install videojs-age-limit-icon via npm and `require` the plugin as you would any other module.

```js
var videojs = require('video.js');

// The actual plugin function is exported by this module, but it is also
// attached to the `Player.prototype`; so, there is no need to assign it
// to a variable.
require('videojs-age-limit-icon');

var player = videojs('my-video');

player.ageLimitIcon();
```

### RequireJS/AMD

When using with RequireJS (or another AMD library), get the script in whatever way you prefer and `require` the plugin as you normally would:

```js
require(['video.js', 'videojs-age-limit-icon'], function(videojs) {
  var player = videojs('my-video');

  player.ageLimitIcon();
});
```

## License

MIT. Copyright (c) Sergey Gromkov &lt;sgromkov@gmail.com&gt;


[videojs]: http://videojs.com/
