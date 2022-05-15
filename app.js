var calString = '';

function calculate(btn) {

  if (calString.length === 0 && (btn === '/' || btn === '*' || btn === '+' || btn === '-')) {
    calString = '0' + btn;

  } else if (((calString[calString.length - 1] === '/') || (calString[calString.length - 1] === '*') || (calString[calString.length - 1] === '+') || (calString[calString.length - 1] === '-')) && (btn === '/' || btn === '*' || btn === '+' || btn === '-')) {
    calString = calString.slice(0, -1);
    calString += btn;

  } else {
    calString += btn;

  }
  $('#disp').text(calString);
}

function clearString(btn) {

  if (calString.length > 0 && btn === 'back') {
    calString = calString.slice(0, -1);

  }
  if (btn === 'C') {
    calString = '';

  }

  if (calString.length === 0) {
    $('#disp').text('0');
  } else {
    $('#disp').text(calString);
  }

}

function returnAns() {

  var operands = [];
  var operators = [];
  var leftOver = 0;
  var pre = ''
  var ans = 0;
  for (var i = 0; i < calString.length; i++) {
    if (calString[i] !== '+' && calString[i] !== '-' && calString[i] !== '*' && calString[i] !== '/') {
      pre += calString[i]
    } else {
      operands.push(Number(pre));

      pre = '';
      operators.push(calString[i]);
    }
  }

  operands.push(Number(pre));

  ans = operands[0];

  for (var j = 1; j < operands.length; j++) {

    if (operators[j - 1] === '+') {
      ans = ans + operands[j];
    }
    if (operators[j - 1] === '-') {
      ans = ans - operands[j];
    }
    if (operators[j - 1] === '*') {
      ans = ans * operands[j];
    }
    if (operators[j - 1] === '/') {
      ans = ans / operands[j];
    }
  }

  $('#disp').text(ans);

}

$('button').click(function() {
  var btnClicked = this.name;
  if (btnClicked === 'back' || btnClicked === 'C') {
    clearString(btnClicked);
  } else if (btnClicked === '=') {
    returnAns();
  } else {
    calculate(btnClicked);
  }
})
