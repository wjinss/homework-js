(() => {
  const PRESSED_CLASSNAME = "is-pressed";

  const calculator = document.querySelector(".calculator__container");
  const diplay = calculator.querySelector(".display");
  const stepsDispaly = calculator.querySelector(".steps");
  const buttonsContainer = calculator.querySelector(".calculator__keys");
  // 버튼만 호출
  const buttons = calculator.querySelectorAll("button");

  //연산자 버튼 반환
  const operatorButtons = calculator.querySelectorAll(
    `[data-button-type="operator"]`
  );

  // console.log(currentOperator);

  let num1 = 0;
  let num2 = 0;
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
    let buttonValue = 0;

    if (buttonType === "number") {
      if (!currentOperator) {
        buttonValue = parseInt(result === "0" ? key : result + key);
        diplay.textContent = buttonValue;
        num1 = buttonValue;
        console.log(`num1 = ${num1}`);
      } else {
        buttonValue = parseInt(result === "0" ? key : result + key);
        diplay.textContent = buttonValue;
        num2 = buttonValue;
        console.log(`num2 = ${num2}`);
      }
    }
    if (buttonType === "operator") {
      operatorButtons.forEach((btn) => btn.classList.remove(PRESSED_CLASSNAME));
      targetBtn.classList.add(PRESSED_CLASSNAME);
      operator = key;

      // diplay.textContent = `${num1} ${operator}`;
      diplay.textContent = `0`;
      console.log(operator);
    }
    if (buttonType === "equal") {
      targetBtn.classList.remove(PRESSED_CLASSNAME);
      switch (operator) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "*":
          result = num1 * num2;
          break;
        case "/":
          result = num1 / num2;
          break;
        default:
          break;
      }
      console.log(result);
      diplay.textContent = result;
    }

    if (buttonType === "clear") {
      result = "0";
      diplay.textContent = 0;
      targetBtn.classList.remove(PRESSED_CLASSNAME);
      num1 = 0;
      num2 = 0;
    }
  });
})();
