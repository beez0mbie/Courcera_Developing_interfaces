/**
 * @param {Number} hours
 * @param {Number} minutes
 * @returns {Boolean}
 */
module.exports = function (hours, minutes) {
    return 0 <= Number(hours) && Number(hours) <= 23 && 0 <= Number(minutes) && Number(minutes) <= 59;
};
