module.exports = function toReadable (number) {

    number = number.toString();
  
    let units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
    let result = '';


    if (number.length === 1) {
        result += units[+number[0]];
      return result;
    } 
  
    if (number.length === 2) {
        if (number[0] === '1') {
          result += teens[+number[1]];
         
        } else if (number[0] !== '1' && number[1] === '0') {
          result += tens[+number[0]];
          //return result;
          
        } else if (number[0] !== '1' && number[1] !== '0') {
          result += tens[+number[0]] + ' ' + units[+number[1]];
          //return result;
        } 
      return result;
    }
  
  if (number.length === 3) {
    if (number[1] === '0' && number[2] === '0') {
      result += units[+number[0]] + ' hundred';
      
    } else if (number[1] === '0' && number[2] !== '0') {
      result += units[+number[0]] + ' hundred' + ' ' + units[+number[2]];
    
    } else if (number[1] === '1') {
      result += units[+number[0]] + ' hundred' + ' ' + teens[+number[2]]; 
      
    } else if (number[1] !== '0' && number[2] === '0') {
      result += units[+number[0]] + ' hundred' + ' ' + tens[+number[1]];
   
    } else if (number[1] !== '0' && number[2] !== '0') {
      result += units[+number[0]] + ' hundred' + ' ' + tens[+number[1]] + ' ' + units[+number[2]];
    
    } 
    
    return result;
  }

}




