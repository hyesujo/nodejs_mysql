let MyApp = {}

MyApp.calculator = {
    'left' : null,
    'right' : null
}

MyApp.coordinate = {
    'left':null,
    'right' : null,
}

MyApp.calculator.left = 10;
MyApp.calculator.right = 20;

function sum() {
    return MyApp.calculator.left + MyApp.calculator.right; 
}
document.write(sum());