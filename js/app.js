function getPin() {
  const pinDigits = generatePin();
  //   console.log(pinDigits);
  if (pinDigits.length === 4) {
    return pinDigits;
  } else {
    // console.log("pin digits in not 4 digits");
    return getPin();
  }
}

function generatePin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";
  return pinString;
}

document.getElementById("btn-genPin").addEventListener("click", function () {
  const pin = getPin();
  const pinField = document.getElementById("pin-field");
  pinField.value = pin;
});

document
  .getElementById("calculator")
  .addEventListener("click", function (event) {
    const numberTyped = event.target.innerText;
    const calField = document.getElementById("calculator-field");
    const numberTypedValue = calField.value;
    console.log(numberTypedValue);

    if (isNaN(numberTyped)) {
      if (numberTyped === "C") {
        calField.value = "";
      } else if (numberTyped === "<") {
        const digits = numberTypedValue.split("");
        digits.pop();
        const remainingDigits = digits.join("");
        calField.value = remainingDigits;
      }
    } else {
      const newTypedNumber = numberTypedValue + numberTyped;
      calField.value = newTypedNumber;
    }
  });
