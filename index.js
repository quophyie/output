'use strict'

const chalk = require('chalk')

module.exports = {
  /**
   * Displays Formatted start time message
   *
   * @param  {Date} startTime
   * @return {string} Formatted number of millisecond from start
   */
  displayStartTime: (startTime) => {
    console.log(chalk.grey(`Started in ${new Date() - startTime}ms`))
  },

  /**
   * Displays colored error message
   *
   * [exports description]
   * @param {string} msg
   */
  displayError: (msg) => {
    console.log(chalk.red(msg))
  }
}
