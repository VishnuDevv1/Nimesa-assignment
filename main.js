const {getValue, askForDate} = require('./values/getVal')
const getData = require('./data/data')
const printData = require('./options/choice')

async function getInput() {
    const input1 = await getValue();
    const input2 = await askForDate();
    getDate(input1, input2);
}

getInput();
 
let data = {};


const getDate = async (x, date) => {
  data = await getData();
  console.log(`\n\t\tWeather data on ${date}`);
  const found = data.list.filter(item => item.dt_txt.startsWith(date));

  printData(x, found);
  getInput();
}