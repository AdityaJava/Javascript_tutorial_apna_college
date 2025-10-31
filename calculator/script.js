document.addEventListener( 'DOMContentLoaded', () => {
  console.log( "in" )
  let num1 = document.getElementById( 'num1' );
  let num2 = document.getElementById( 'num2' );
  const calculateBtn = document.getElementById( 'calculateBtn' );
  const resultElement = document.getElementById( 'result' );
  console.dir( calculateBtn )

  calculateBtn.addEventListener( 'click', calculate );

  function getSelectedOperation() {
    const operation = document.querySelector( 'input[name="MathOperation"]:checked' );
    return operation ? operation.value : 'add';
  }

  function calculate( event ) {
    const selectedOperation = getSelectedOperation();
    let res = 0;
    let n1 = Number( num1.value
    );
    let n2 = Number( num2.value );
    console.log( selectedOperation )
    debugger
    switch ( selectedOperation ) {
      case 'add':
        res = n1 + n2;
        break;
      case 'sub':
        res = n1 - n2;
        break;
      case 'mul':
        res = n1 * n2;
        break;
      case 'div':
        res = n1 / n2;
        break;
    }
    showResult( 'Result = ' + res )
  }

  function showResult( message ) {
    resultElement.innerHTML = message;
  }

} )