var moment = require('moment');

console.log(moment().format());

// Januar 1st 1970 @ 12:00am -> 0
// Januar 1st 1970 @ 12:00am -> -60

var now = moment();

console.log('Current timestamp', now.unix());

var timestamp = 1507538751;
var currentMoment = moment.unix(timestamp);
console.log('current moment', currentMoment.format('D MMM, YY @ h:mm a'));

//January 3rd, 2016 @ 12:13 AM
console.log('current moment', currentMoment.format('MMM Do, YYYY @ h:mm A'));
