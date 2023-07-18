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
    // numberTyped এটা হচ্ছে click করার সময়ের ভ্যালু
    const calField = document.getElementById("calculator-field");

    const previousTypedNumber = calField.value;
    // calField.value এটা হচ্ছে ফাকা ঘর বা click -এর আগের ভ্যালু previousTypedNumber
    // console.log(previousTypedNumber);

    if (isNaN(numberTyped)) {
      if (numberTyped === "C") {
        calField.value = "";
      } else if (numberTyped === "<") {
        const digits = previousTypedNumber.split("");
        digits.pop();
        const remainingDigits = digits.join("");
        calField.value = remainingDigits;
      }
    } else {
      const newTypedNumber = previousTypedNumber + numberTyped;
      // click -এর আগের ভ্যালু previousTypedNumber এবং click করার সময়ের ভ্যালু ২টা এখানে যোগ করে পাশাপাশি বসানো হয়েছে।
      calField.value = newTypedNumber;
    }
  });

document.getElementById("verify-pin").addEventListener("click", function () {
  const pinGen = document.getElementById("pin-field").value;
  const typedPin = document.getElementById("calculator-field").value;

  const pinSucceeded = document.getElementById("pin-success");
  const pinFailed = document.getElementById("pin-failed");

  if (pinGen === typedPin) {
    pinSucceeded.style.display = "block";
    pinFailed.style.display = "none";
  } else {
    pinFailed.style.display = "block";
    pinSucceeded.style.display = "none";
  }
});
