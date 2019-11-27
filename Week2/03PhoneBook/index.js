// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    
    var parsedCommand = command.split(' ')
    var commandName = parsedCommand[0]
    if (parsedCommand.length > 1 ) {
        var name = parsedCommand.filter(getName)
        var phones = parsedCommand.filter(getPhones)[0].split(',')
    }

    function getPhones(item) {
        return Number(item[0])
    }
    function getName(item) {
        return !Number(item[0]) && item !== 'ADD' && item !== 'SHOW' && item !== 'REMOVE_PHONE'
    }

    function addContact(name, phones) {
        phoneBook[name] = name in phoneBook ? 
        phoneBook[name] = phoneBook[name].concat(phones) :
        phoneBook[name] = phones
    }
    
    function removeContact(phone) {
        for ( let key in phoneBook) {
            var index = phoneBook[key].findIndex(isPhone)
            if (index !== -1) {
                var removed = phoneBook[key].splice(index, 1)
            }
        }
        function isPhone(element) {
            return element === phone[0]
        }
        return removed !== undefined
    }
    
    function showPhoneBook() {
        var arrayPhoneBook = []
        for(let key in phoneBook){
            if (phoneBook[key].length > 0)
            arrayPhoneBook.push(key + ':' + ' ' + phoneBook[key].join(', '))
        }
        return arrayPhoneBook.sort()
    }

    if (commandName === 'ADD') {
       return addContact(name, phones)
    } else if (commandName === 'REMOVE_PHONE') {
        return removeContact(phones)
    } else if (commandName === 'SHOW') {
        return showPhoneBook()
    }
};