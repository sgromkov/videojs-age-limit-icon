// Default options for the plugin.
const defaults = {
  /**
   * @param {number} duration
   *        Duration of the icon lifetime in milliseconds.
   *        If 0 icon will be displayed all the time.
   */
  duration: 8000,
  /**
   * @param {number | boolean} limit
   *        The limit value in the icon.
   *        If false the icon will not be displayed.
   *        If more than 18 the icon will have a left red border, as an adult content.
   */
  limit: false
};

export default defaults;
