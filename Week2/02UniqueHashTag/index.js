/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    normalizedHt = [];
    hashtags.forEach(getOriginHashTags);

    function getOriginHashTags(item) {
        normalizedHt.push(item.toLowerCase())
    }

    //сравниваем два элемента и удаляем второй элемент если он такой же
    for (let i = 0; i < normalizedHt.length; i++) {
        for (let j = 0; j < normalizedHt.length; j++) {
            if( normalizedHt[i] === normalizedHt[j] && i !== j )
            normalizedHt.splice(j,1)
        }
    }

    return normalizedHt.join(', ')
};
