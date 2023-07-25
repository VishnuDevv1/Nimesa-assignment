const readline = require('readline');

const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function getValue() {
    return new Promise((resolve)=>{ r.question('\nEnter 1 for temperature, 2 for wind speed, and 3 for pressure (or 0 to exit)\n',  (value) => {
        const val = Number(value);
        if (val === 0|| val>3) {
            r.close();
        }
           else if (val >= 1 && val <=3) {
                resolve(val);
            } 
            })
    }
)}


function askForDate() {
    return new Promise((resolve)=>{r.question('Enter a date between 2019-03-27 and 2019-03-31 in YYYY-MM-DD format: ', (date)=>{
        resolve(date);
    })}
)}

module.exports = {getValue, askForDate};