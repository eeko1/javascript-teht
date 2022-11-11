'use script';

let kohde =  document.querySelector('#kohde')

let answer = confirm('Should I calculate the square root?');
console.log(answer);

if (answer == true)
{
    let ask = parseInt(prompt("Type number to calculate the square root"));
    if (ask < 0)
    {
        kohde.innerHTML = "The square root of a negative number is not defined";
    }
    else
    {
        result = Math.sqrt(ask);
        kohde.innerHTML = "The square root value for the given number " + ask + " is " + result + ".";
    }
}
else
{
    kohde.innerHTML = "The square root is not calculated";
}