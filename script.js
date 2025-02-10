function convertToRoman(num) {
  	let arr = {
      ['M',1000], 
      ['D', 500], 
      ['C', 100], 
      ['L', 50], 
      ['X', 10], 
      ['V', 5], 
      ['I', 1]
    };

  let roman ="";
	for(let i=0;i<arr.length;i++){
		let symbol=arr[i][0];
		let value=arr[i][1];
		while(num>=value){
			num=num-value;
			roman+=symbol;
		}
	}
	return roman;

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
