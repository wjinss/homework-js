# 프론트엔드 부트캠프 과제 저장소

**14기 정우진**

## 5주차 과제

### JS - 계산기를 구현하자!

js를 이용해서 계산기를 구현한다고 했을 땐, 노션을 최대한 참고하지 말고 구현해보자! 라는 목표를 가졌었습니다. 그에 맞게 각 상황별 흐름을 노트에 직접 적어보고, 직접 로직도 짜보면서 이벤트 리스너의 각 버튼에 맞는 로직을 차근차근 구현해보았습니다. 하지만 생각보다 신경써야할 변수가 많았으며 값의 계산이 원하는 대로 이루어지지 않았습니다. 처음 썼던 로직을 갈아엎으면서 구현해봤던 계산기 ver.1은 일부 기능을 하지 못하고 미완성으로 남아있습니다. 그렇게 계산기 ver.2가 탄생했습니다.

#### 계산기 ver.1

계산기 ver.1에서의 실패요인은 계산 결과가 사칙연산으로 이뤄지지 않는 다는 점이 제일 큰 문제였습니다. num1, num2에 좌측 피연산자, 우측 피연산자를 갈당 할당헤서 num1 operator num2로 계산결과를 표현했고, 이때 num1과 num2를 나누는 기준은 연산자에 활성 클래스가 있을 때 숫자를 클릭하면 num2에 값이 저장되는 방식이었습니다. 만약 사용자가 추가로 연산을 진행하면 num1 operator num2의 값을 num1에 재핡당 하고 추가적으로 클릭한 숫자의 값을 num2에 할당하는 로직을 구현해봤으나, 이 부분에서 계산식이 사칙연산을 할 수 없는 계산식으로 만들어졌습니다. 디버깅을 해보아도 코드를 다시금 전체적으로 수정하는 방법 밖에 떠오르지 않아서 결국 새로 로직을 구현했습니다.

#### 계산기 ver.2

계산기 ver.2는 저 혼자서 만든 로직은 아닙니다. 지인한테 팁과 힌트를 받았으며, 기존 로직의 방식이 아닌 새로운 로직으로 구현해보는 연습을 해보자! 라는 명목하에 만들어본 계산기입니다. 새로운 방법이 뭐가 있을까 고민하던 중, 클릭된 버튼의 값을 배열에 넣어보면 어떨까? 하는 생각이 들었습니다. 이때 같이 공부하던 지인이 "후위 표기법"을 알려주면서 큐, 스택의 방식을 활용한 로직에 대한 흐름을 알려주었습니다. 후위 표기법에 대한 개념을 찾아보고 로직을 구현하는 힌트를 받으며 결국 로직을 완성하고 사칙연산이 정상적으로 작동하는 계산기를 구현했습니다. 이전에 찾아봤던 계산기에 대한 로직과는 전혀 다른 방식이었으며, 간단하게 구현한할 줄 알았지만 기존보다 난이도가 높았던 방식이었습니다. 도움을 받으면서 구현한 로직이었지만, 작업 흐름을 구성하는 방식에 대한 새로운 방식을 본 것 같습니다. 확실히 아는 것이 많아야 다양한 방법을 생각할 수 있으며, 그 방법을 구현할 수 있는 프로그래밍적인 사고방식이 필요하다고 느껴진 과제였습니다.

### 회고

최근들어 저의 공부 방식에 문제점이 있다고 생각했습니다. 기존 공부 방식인 DeepDive를 위주로 복습하는 것이 시간적 소요가 많이 되고, 실습 시간이 부족해져 실습을 많이 하지 못한다는 점이었습니다. 이론적인 부분만 공부해서 js를 잘 할 수 있을까? 라고 하면 모두가 아니라고 말할 것 입니다. 수업때 배운 내용을 다시 한 번 적어보면서 익혔다고 생각했지만, 더 많은 양의 코드를 직접 쳐보면서 부딪혀보고, 오류를 생기면 고쳐보는 실습이 더욱 필요할 것 같습니다. 이 생각이 수업 후반부에 들었던게 아쉽지만 앞으로 더 많이 노력하고 공부하면 된다고 생각합니다.
