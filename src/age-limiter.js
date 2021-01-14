import defaults from './defaults';

/**
 * Class representing the age-limit-icon plugin
 */
class AgeLimiter {
  /**
   * Plugin initialization
   *
   * @param    {Player} player
   *           A Video.js player object.
   *
   * @param    {Object} [options={}]
   *           A plain object containing options for the plugin.
   */
  constructor(player, options) {
    this.player = player;
    this.options = options;

    this.onPlayStarted = this.onPlayStarted.bind(this);
    this.hide = this.hide.bind(this);
  }

  /**
   * The event triggers on first "Play" event
   */
  onPlayStarted() {
    this.show();
    this.hideByTimer();
  }

  /**
   * Hide icon after some time.
   */
  hideByTimer() {
    let duration = parseInt(this.options.duration, 10);

    if (!isFinite(duration)) {
      duration = defaults.duration;
    }

    if (duration !== 0) {
      setTimeout(this.hide, duration);
    }
  }

  /**
   * Create icon element and show it.
   */
  show() {
    const limit = parseInt(this.options.limit, 10);
    const ageLimiterComponent = this.player.addChild('Component', {});

    ageLimiterComponent.addClass('vjs-age-limit-icon-block');
    if (limit >= 18) {
      ageLimiterComponent.addClass('vjs-age-limit-icon-block_content_adult');
    }

    ageLimiterComponent.el().innerHTML = `<span>${limit}+</span>`;

    this.component = ageLimiterComponent;
  }

  /**
   * Remove icon element from player.
   */
  hide() {
    this.component.dispose();
  }

  /**
   * Init plugin in the very beginning.
   */
  init() {
    this.player.one('play', this.onPlayStarted);
  }
}

export default AgeLimiter;
