var chalk = require('chalk');

var lodash = require('lodash.chunk');
var lodash = require('lodash.join');
const Moment = require('moment');
const MomentRange = require('moment-range');
const moment = MomentRange.extendMoment(Moment);
const range = moment.range(2019-1-1, 2019-12-31);
console.log(moment.months());

for (let month of range.by('month')) {
    month.format('YYYY-MM-DD');
  }
  const start = moment("2019-01-01T13:30:00");
  const end = moment("2019-12-31T01:45:12");
  const r1 = moment.range(start, end);
  const r2 = r1.snapTo('day');
  
  console.log(Array.from(r1.by('months')).map(m => m.format('MM')));

  console.log(Array.from(r2.by('days')).map(m => m.format('DD')));