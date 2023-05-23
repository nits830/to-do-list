

const currentDate= function(){
const date = new Date();
const options = {year: 'numeric', month: 'long', day:'numeric'};

return date.toLocaleDateString('us-EN', options);
}

module.exports = currentDate;

// Alternative method to export
// exports.functionA = function() {
//     console.log('Function A');
//   };