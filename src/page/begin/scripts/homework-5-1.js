(() => {
  const PRESSED_CLASSNAME = "is-pressed";

  const calculator = document.querySelector(".calculator__container");
  const diplay = calculator.querySelector(".display");
  const stepsDispaly = calculator.querySelector(".steps");

  //연산자 버튼 반환
  const operatorButtons = calculator.querySelectorAll(
    `[data-button-type="operator"]`
  );

  // console.log(currentOperator);

  let num1;
  let num2;
  let operator = null;

  calculator.addEventListener("click", (e) => {
    const targetBtn = e.target.closest("button");
    if (!targetBtn) return;

    // 활성화된 연산자 버튼 찾기
    let currentOperator = [...operatorButtons].find((operator) =>
      operator.classList.contains(PRESSED_CLASSNAME)
    );

    const { buttonType, key } = targetBtn.dataset;
    let result = diplay.textContent;
    let buttonValue;

    if (buttonType === "number") {
      if (!currentOperator) {
        buttonValue = result === "0" ? key : result + key;
        diplay.textContent = buttonValue;
        num1 = buttonValue;
        console.log(`num1 = ${num1}`);
      } else {
        buttonValue = result === "0" ? key : result + key;
        diplay.textContent = buttonValue;
        num2 = buttonValue;
        console.log(`num2 = ${num2}`);
      }
    }
    if (buttonType === "decimal") {
      diplay.textContent = `${diplay.textContent}.`;
    }
    if (buttonType === "operator") {
      operatorButtons.forEach((btn) => btn.classList.remove(PRESSED_CLASSNAME));
      targetBtn.classList.add(PRESSED_CLASSNAME);
      operator = key;
      if (num1 !== undefined && num2 !== undefined) {
        switch (operator) {
          case "+":
            num1 = Number(num1) + Number(num2);
            break;
          case "-":
            num1 = Number(num1) - Number(num2);
            break;
          case "*":
            num1 = Number(num1) * Number(num2);
            break;
          case "/":
            num1 = Number(num1) / Number(num2);
            break;
          default:
            break;
        }
      }
      result = 0;
      // diplay.textContent = `${num1} ${operator}`;
      diplay.textContent = `0`;
      console.log(operator);
    }
    if (buttonType === "equal") {
      targetBtn.classList.remove(PRESSED_CLASSNAME);
      switch (operator) {
        case "+":
          result = Number(num1) + Number(num2);
          break;
        case "-":
          result = Number(num1) - Number(num2);
          break;
        case "*":
          result = Number(num1) * Number(num2);
          break;
        case "/":
          result = Number(num1) / Number(num2);
          break;
        default:
          break;
      }
      console.log(result);

      // 0으로 나눴을 때
      if (result === Infinity) {
        diplay.textContent = `∞`;
      } else {
        diplay.textContent = result;
      }
    }

    if (buttonType === "clear") {
      result = "0";
      diplay.textContent = 0;
      operatorButtons.forEach((btn) => btn.classList.remove(PRESSED_CLASSNAME));
      num1 = 0;
      num2 = 0;
    }
  });
})();
