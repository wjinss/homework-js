(() => {
  const PRESSED_CLASSNAME = "is-pressed";

  const calculator = document.querySelector(".calculator__container");
  const diplay = calculator.querySelector(".display");
  const stepsDispaly = calculator.querySelector(".steps");
  const buttonsContainer = calculator.querySelector(".calculator__keys");
  // 버튼만 호출
  const buttons = [...buttonsContainer.querySelectorAll("button")];

  //연산자 버튼 반환
  const operatorButtons = buttons.filter(
    (button) => button.dataset.buttonType === "operator"
  );

  // // 각 상태별 초기 값 설정
  // const data = {
  //   previousValue: "",
  //   currentValue: "",
  //   operator: undefined,
  //   pressedResult: false,
  // };

  buttonsContainer.addEventListener("click", (e) => {
    const button = e.target.closest("button");
    // 클릭한 대상이 버튼이 아니면 함수 실행x
    if (!button) return;

    // 클릭한 버튼의 타입과 키 저장
    const { buttonType, key } = button.dataset;
    // 클릭한 버튼의 값을 디스플레이에 표시
    const result = diplay.textContent;
    // let currentOperator;

    removePressedClassName();
    // calculator.dataset.previousButtonType = buttonType;

    // 리셋을 클릭할 때
    if (buttonType === "clear") {
      // resetData();
      console.log("리셋");
      // return;
    }
    const { previousButtonType } = calculator.dataset;

    // 숫자를 클릭할 때
    if (buttonType === "number") {
      // 클릭한 버튼의 값이 0이면 디스플레이에 표시. > 01234~ 이렇게 표시 x
      if (result === "0") {
        diplay.textContent = key;
      } else {
        // 클릭한 버튼의 값이 0이 아니면 디스플레이에 표시된 값에 클릭한 값 추가
        diplay.textContent = result + key;
      }

      // 이전 버튼이 연산자였으면
      if (previousButtonType === "operator") {
        // if (operatorButtons.classList.contains(PRESSED_CLASSNAME)) {
        // stepsDispaly.textContent = result + currentOperator;
        // console.log(previousButtonType);
        diplay.textContent = key;
      }
    }
    calculator.dataset.previousButtonType = buttonType;

    // 소수점버튼을 클릭할 때
    if (buttonType === "decimal") {
      // 소수점 버튼을 누르면 결과값에 .을 연결해 소수점으로 표시
      diplay.textContent = result + ".";
    }

    // 연산자를 클릭할 때
    if (buttonType === "operator") {
      // 연산자를 클릭하면 이전 결과값이 서브 디스플레이에 표시
      stepsDispaly.textContent = result;
      // 연산자를 클릭하면 해당 연산자가 클릭된걸 보여주는 상태 클래스 추가
      button.classList.add(PRESSED_CLASSNAME);
      // currentOperator = button.dataset.key;
      // return currentOperator;
      calculator.dataset.firstValue = result;
      calculator.dataset.operator = button.dataset.key;
    }

    // 계산버튼을 클릭할 때
    if (buttonType === "equal") {
      // clickEqual();
      console.log("계산");
    }
  });

  // 활성 클래스가 있으면 제거한다. forEach()가 안되는 이유는
  // forEach()에서는 break를 사용할 수 없어 활성클래스를 제거했더라도 모든 요소를 순회하기 때문
  function removePressedClassName() {
    for (const button of buttons) {
      if (button.classList.contains(PRESSED_CLASSNAME)) {
        button.classList.remove(PRESSED_CLASSNAME);
        break;
      }
    }
  }
})();
