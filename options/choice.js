function printData(x, found) {
    if (x === 1) {
        choice = printTemp;
      } else if (x === 2) {
        choice = printSpeed;
      } else if (x === 3) {
        choice = printPress;
      }

      found.forEach(ele => {
        choice(ele);
      });
}

function printTemp(obj) {
    console.log(`\nThe temperature at ${obj.dt_txt.split(" ")[1]} hours is ${obj.main.temp} degrees  `);
  }
  
function printSpeed(obj) {
    console.log(`\nThe speed of the wind at ${obj.dt_txt.split(" ")[1]} hours is ${obj.wind.speed} kmph  `);
  }
  
function printPress(obj) {
    console.log(`\nThe pressure at ${obj.dt_txt.split(" ")[1]} hours is:  ${obj.main.pressure}   `);
  }

module.exports = printData;