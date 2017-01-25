var moment = require('moment');
var now = moment();

//console.log(now.format());
//console.log(now.format('hA ddd YYYY'));
//console.log(now.format('MMM Do YYYY, h:mma'));
//console.log(now.format('X'));
//console.log(now.format('x'));

var timestamp = 1444247486704;

var timestampMoment = moment.utc(timestamp);

console.log(timestampMoment.format());

