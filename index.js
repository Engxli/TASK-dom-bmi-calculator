function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
    // converting height to m 
    height = height/100;
    let BMI = (weight/(height^2))
    // alert(BMI);
    // BMI = weight;
    if(BMI < 18.5)
    {
      alert("Below 18.5 Underweight");
    }else if(BMI <= 24.9)
    {
      alert("18.5 – 24.9 Healthy Weight");
    }else if(BMI <= 29.9)
    {
      alert("25.0 – 29.9 Overweight");
    }else
    {
      alert("30.0 and Above Obesity");
    }


}
