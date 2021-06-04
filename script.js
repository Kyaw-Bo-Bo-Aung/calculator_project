// alert('ok');
var operation = document.getElementById('operation');
var initial_operation = '';
var result = document.getElementById('result');

function setNumber (e = '') {
	var calculation_value = operation.innerText += e;
	initial_operation = calculation_value;
};



function clearScreen(){
	operation.innerText = '';
	result.innerText = '';
};


function calculate () {
	var solution = eval(initial_operation);
	var length = parseInt(solution).toString().length;
	result.innerText = solution.toPrecision(length+2);
};

