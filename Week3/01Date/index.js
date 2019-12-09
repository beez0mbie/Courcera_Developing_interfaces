/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function date(date) {

    let formatedDate = date.split(/[-]|[T]|[:]|[ ]/g)
    let years = Number(formatedDate[0])
    let months = Number(formatedDate[1] - 1)
    let days = Number(formatedDate[2])
    let hours = Number(formatedDate[3])
    let minutes = Number(formatedDate[4])
    let foo
    let newDate = new Date(Date.UTC(years,months,days,hours,minutes));

    // console.log(newDate.toISOString().split(/[-]|[T]|[:]/g));
    
    let add = function (value, time) {
        if (value >= 0) {
            switch(time) {
                case 'minutes':
                    temp = minutes + value;
                    minutes = minutes + value
                    newDate.setMinutes(temp);
                    this.value = newDate.toISOString().split(/[T]|[.]/g).slice(0,2).join(' ').slice(0,-3);
                   break
                case 'hours':             
                    temp = minutes + value * 60;        
                    newDate.setMinutes(temp);
                    this.value = newDate.toISOString().split(/[T]|[.]/g).slice(0,2).join(' ').slice(0,-3);                    
                    break
                case 'days':
                    temp = minutes + value * 24 * 60;
                    newDate.setMinutes(temp);
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
                    throw new TypeError(`unexpected time = ${time}`)
            }
        } else {
            throw new TypeError(`unexpected value = ${value}`)
        }
        return this;
    }
    let subtract = function (value, time) {
        if (value >= 0) {
            switch(time) {
                case 'minutes':
                    temp = minutes - value;
                    minutes = minutes - value;
                    newDate.setMinutes(temp);
                    this.value = newDate.toISOString().split(/[T]|[.]/g).slice(0,2).join(' ').slice(0,-3);
                   break
                case 'hours':             
                    temp = minutes - value * 60;         
                    newDate.setMinutes(temp);
                    this.value = newDate.toISOString().split(/[T]|[.]/g).slice(0,2).join(' ').slice(0,-3);                    
                    break
                case 'days':
                    temp = minutes - value * 24 * 60;
                    newDate.setMinutes(temp);
                    this.value = newDate.toISOString().split(/[T]|[.]/g).slice(0,2).join(' ').slice(0,-3);
                    break
                case 'months':
                    months -= value;
                    newDate.setMonth(months);
                    this.value = newDate.toISOString().split(/[T]|[.]/g).slice(0,2).join(' ').slice(0,-3);
                    break
                case 'years' :
                    years -= value;
                    newDate.setFullYear(years)
                    this.value = newDate.toISOString().split(/[T]|[.]/g).slice(0,2).join(' ').slice(0,-3);
                break
                default:
                    throw new TypeError(`unexpected time = ${time}`)
            }
        } else {
            throw new TypeError(`unexpected value = ${value}`)
        }
        return this;
    }
   
    return {
        add: add,
        subtract: subtract
    }

    
};



// let time = date('2016-04-03 01:05')
// .subtract(5, 'minutes')
// .subtract(1, 'hours')
// .subtract(2, 'days')
// .subtract(3, 'months')
// .subtract(1, 'years')
// console.log(time.value);

// Дата "2016-04-03 01:05" после операций "[
//     ["subtract",5,"minutes"],
//     ["subtract",1,"hours"],
//     ["subtract",2,"days"],
//     ["subtract",3,"months"],
//     ["subtract",1,"years"]]"
//     должна стать "2015-01-01 00:00",

//console.log(date.toISOString().split(/[-]|[T]|[:]/g));

// "2016-09-26T10:00:00.000Z"

// date.setMinutes(60 * 24 * 365)

// console.info(date);

// "2017-09-26T10:00:00.000Z" (сменился год)