/**
 * @param {String} tweet
 * @returns {String[]}
 */
//module.exports 
var getHashTags = function (tweet) {
    
    var hashTags = tweet.split(' ').filter(isHashTagExist)
    var clearedHashTags = []
    
    hashTags.forEach(clearHashtag)

    function isHashTagExist(word) {
        return word.startsWith('#')
    }

    function clearHashtag (item) {
        if (item.length > 1) {
            clearedHashTags.push(item.slice(1))
        }
    }

    return clearedHashTags
};