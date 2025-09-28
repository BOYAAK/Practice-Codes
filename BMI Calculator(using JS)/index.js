// TODO: Udemy  Create a BMI Calculator


function bmiCalculator(weight, height){
  // var bmiValue = Math.floor(weight/(height*height)); //Another way to write the below line.
  var bmiValue = weight / Math.pow(height, 2);
  return Math.round (bmiValue);
}

var bmi = bmiCalculator(prompt("Enter Weight"), prompt("Enter Height")); 

document.writeln(bmi);