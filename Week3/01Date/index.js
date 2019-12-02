/**
 * @param {String} date
 * @returns {Object}
 */
// module.exports = 
function date(date) {

    let formatedDate = date.split(/[-]|[T]|[:]|[ ]/g)
    let years = Number(formatedDate[0])
    let months = Number(formatedDate[1] - 1)
    let days = Number(formatedDate[2])
    let hours = Number(formatedDate[3])
    let minutes = Number(formatedDate[4])
    let foo
    let newDate = new Date(Date.UTC(years,months,days,hours,minutes));

    console.log(newDate.toISOString().split(/[-]|[T]|[:]/g));
    
    let add = function (value, time) {
        if (value >= 0) {
            switch(time) {
                case 'minutes':
                    minutes += value;
                    newDate.setMinutes(minutes);
                    this.value = newDate.toISOString().split(/[T]|[.]/g).slice(0,2).join(' ').slice(0,-3);
                   break
                case 'hours':
                    hours += value;
                    newDate.setHours(hours);
                    this.value = newDate.toISOString().split(/[T]|[.]/g).slice(0,2).join(' ').slice(0,-3);
                    break
                case 'days':
                    days += value;
                    newDate.setDate(days);
                    this.value = newDate.toISOString().split(/[T]|[.]/g).slice(0,2).join(' ').slice(0,-3);
                    break
                case 'months':
                    months += value;
                    newDate.setMonth(months);
                    this.value = newDate.toISOString().split(/[T]|[.]/g).slice(0,2).join(' ').slice(0,-3);
                    break
                case 'years' :
                    years += value;
                    newDate.setFullYear(years)
                    this.value = newDate.toISOString().split(/[T]|[.]/g).slice(0,2).join(' ').slice(0,-3);
                break
                default:
                    throw new Error(`unexpected time = ${time}`)
            }
        } else {
            throw new Error(`unexpected value = ${value}`)
        }
        return this;
    }
    let subtract = function () {
        return this;
    }
   
    return {
        add: add,
        subtract: subtract
        //newDate.toISOString().split(/[T]|[.]/g).slice(0,2).join(' ').slice(0,-3)
    }

    
};



let time = date('2017-05-16 13:45').add(3, 'minutes').add(3, 'days').add(15, 'minutes').add(24, 'hours');
console.log(time.value);


//console.log(date.toISOString().split(/[-]|[T]|[:]/g));

// "2016-09-26T10:00:00.000Z"

// date.setMinutes(60 * 24 * 365)

// console.info(date);

// "2017-09-26T10:00:00.000Z" (сменился год)