(() => {
  const calculator = document.querySelector(".calculator__container");
  const display = calculator.querySelector(".display");
  const subDisplay = calculator.querySelector(".sub-display");

  let result = [];
  let targetValue = "";

  const operators = {
    "*": 2,
    "/": 2,
    "+": 1,
    "-": 1,
  };

  const operatorsArray = [];
  let calculateArray = [];
  let subDisplayText = "";

  calculator.addEventListener("click", (e) => {
    const target = e.target.closest("button");

    if (!target) return;

    const { buttonType, key } = target.dataset;

    if (buttonType === "number") {
      if (targetValue === "") {
        targetValue = key;
      } else {
        targetValue = targetValue + key;
      }
      subDisplayText = `${subDisplayText}${key}`;
      display.textContent = targetValue;
    }

    if (buttonType === "decimal") {
      targetValue = `${targetValue}.`;
    }

    if (buttonType === "operator") {
      result.push(Number(targetValue));
      targetValue = "";
      result.push(key);
      subDisplayText = `${subDisplayText} ${key} `;
      // console.log(result);
    }

    if (buttonType === "clear") {
      targetValue = "";
      result = [];
      calculateArray = [];
      subDisplayText = "0";
      display.textContent = "0";
    }

    if (buttonType === "equal") {
      if (result.length === 0) return;
      result.push(Number(targetValue));
      for (let i = 0, l = result.length; i < l; i++) {
        // 반복된 항목이 연산자면
        if (typeof result[i] === "string") {
          // 넣을려는 항목 점수가 들어있는 연산자의 점수보다 낮을때(연산자 배열의 값이 없으면 0을 반환)
          if (operators[result[i]] < operators[operatorsArray.at(-1) ?? 0]) {
            // 배열에 들어있는 연산자를 빼고 계산 배열에 넣는다.
            calculateArray.push(operatorsArray.pop());
            operatorsArray.push(result[i]);
            // console.log(`연산자 배열 : ${calculateArray}`);
          } else {
            // 넣을려는 항목 점수가 들어있는 연산자의 점수보다 높으면
            // 연산자를 배열에 넣는다.
            operatorsArray.push(result[i]);
            // console.log(`계산 배열 : ${operatorsArray}`);
          }
        } else {
          // 반복되는 항목이 숫자면 계산 배열에 넣는다.
          calculateArray.push(result[i]);
        }
      }
      while (operatorsArray.length > 0) {
        calculateArray.push(operatorsArray.pop());
      }

      for (let i = 0, l = calculateArray.length; i < l; i++) {
        if (typeof calculateArray[i] === "string") {
          let calculateValue = calculate(
            calculateArray[i - 2],
            calculateArray[i - 1],
            calculateArray[i]
          );

          calculateArray[i] = calculateValue;
          calculateArray[i - 2] = undefined;
          calculateArray[i - 1] = undefined;

          calculateArray = calculateArray.filter((item) => item !== undefined);
          i = 0;
        }
      }
      console.log(calculateArray);
      if (calculateArray[0] == Infinity) {
        display.textContent = `∞`;
      } else {
        display.textContent = calculateArray;
      }
    }
    subDisplay.textContent = subDisplayText;
  });

  function calculate(num1, num2, operator) {
    switch (operator) {
      case "+":
        return Number(num1) + Number(num2);
      case "-":
        return Number(num1) - Number(num2);
      case "*":
        return Number(num1) * Number(num2);
      case "/":
        return Number(num1) / Number(num2);
      default:
        break;
    }
  }
})();
