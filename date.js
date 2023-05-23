

function currentDate(){
    const date = new Date();
    const options = {year: 'numeric', month: 'long', day:'numeric'};

    return date.toLocaleDateString('en-US', options);
    }
    
module.exports = currentDate;



// Alternative method to export
// exports.functionA = function() {
//     console.log('Function A');
//   };