function calculateBMI() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert('Please enter valid values for weight and height.');
        return;
    }

    var bmi = calculateBMIValue(weight, height);
    var category = classifyBMI(bmi);
    displayResult(bmi, category);
    updateBMIMeter(bmi);
}
function calculateBMIValue(weight, height) {
    
    var heightInMeters = height / 100;
    return (weight / (heightInMeters * heightInMeters)).toFixed(2);
}


function classifyBMI(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
        return 'Normal weight';
    } else if (bmi >= 25 && bmi < 30) {
        return 'Overweight';
    } else {
        return 'Obesity';
    }
}


function displayResult(bmi, category) {
    var resultElement = document.getElementById('result');
    resultElement.textContent = `Your BMI is ${bmi}. You are classified as ${category}.`;
}
function updateBMIMeter(bmi) {
    var meterElement = document.getElementById('bmiMeter');
    var meterColor = getMeterColor(bmi);
    meterElement.style.backgroundColor = meterColor;

    updateNeedleAngle(bmi);
}

function updateNeedleAngle(bmi) {
    var meterElement = document.getElementById('bmiMeter');
    var needleElement = meterElement.querySelector('.needle');

    
    var rotationAngle = (bmi - 18.5) * (180 / (30 - 18.5));

    
    needleElement.style.transform = `translateX(-50%) rotate(${rotationAngle}deg)`;
}


function getMeterColor(bmi) {
    if (bmi < 18.5) {
        return 'blue'; 
    } else if (bmi >= 18.5 && bmi < 25) {
        return 'green'; 
    } else if (bmi >= 25 && bmi < 30) {
        return 'orange'; 
    } else {
        return 'red'; 
    }
}