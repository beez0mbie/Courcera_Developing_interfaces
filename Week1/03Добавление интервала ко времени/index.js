/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
    if (0 <= Number(hours) && Number(hours) <= 23 && 0 <= Number(minutes) && Number(minutes) <= 59) {
        minutes = minutes + interval;
        if (minutes >= 60) {
           var tempHours = Math.floor(minutes / 60);
           minutes = minutes % 60;
           hours += tempHours;
        } 
        if (minutes <= 9) {
            minutes = '0' + minutes;
        }
        if (hours >= 24) {
            hours = hours % 24;
        }
        if (hours <= 9) {
            hours = '0' + hours;
        }
        return hours + ":" + minutes;
    }
    return null
};