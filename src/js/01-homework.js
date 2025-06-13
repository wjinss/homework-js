// 1. 변수, 상수 작성과제

// 사용자 이름을 저장할 변수를 선언하고 "자신의 이름"을 할당하세요.
const userName = "정우진";

// "절대 영도(온도의 최저 한계)인 -273.15°C"를 담을 상수를 선언하세요.
const ABSOLUTE_ZERO = " -273.15°C";

// "로그인 여부"를 확인하는 불리언 타입 변수을 선언하고 적절한값을 할당하세요.
let isLoggedIn = true;

// "사용자 나이" 변수를 선언하고 숫자 값을 할당하세요.
let userAge = 29;

// "상품 가격(예: 39,900원)"을 담는 변수를 작성하세요.
let itemPrice = 39_900;

// 웹 페이지의 "배경색"을 담는 상수를 작성하고 적절한 값을 할당하세요.
const BG_COLOR = "#68b7f7";

// 사용자가 작성한 "댓글 수(예: 12)"를 담는 변수를 선언하고 값을 할당하세요.
let replyCount = 8;

// "현재 페이지 번호(예: 3)"를 담는 변수를 작성하고 적절한 값을 할당하세요.
let currentPage = 3;

// "회원 등급('VIP', '골드', '실버' 중 하나)"을 담는 변수를 작성해보세요.
let userGrade = "VIP";

// "버튼이 클릭되었는지 여부"를 담는 변수를 선언하고 불리언 타입 값을 설정하세요.
let isClicked = false;

// 2. 함수 작성 과제

// 2-1 인사말 메시지
// 사용자로부터 이름을 입력받아 인사말을 출력하는 함수를 작성합니다.
function greetUser(username) {
  return `안녕하세요! ${username}님. 좋은 하루되세요!`;
}
console.log(greetUser("정우진"));

// 2-2 2. 원가 계산
// 판매가를 입력 받아 원가를 계산하는 함수를 작성합니다.
// 판매가(세후 금액)에서 원가(세전 금액)를 계산하려면 판매가를 "100% + 세금 비율"로 나눠야 합니다. 해당 품목의 세금 비율은 3.3%입니다.
const calculateOriginalPrice = function (priceWithTax) {
  const TAX_RATE = 0.033;
  return parseInt(priceWithTax / (1 + TAX_RATE));
};
console.log(calculateOriginalPrice(10000)) //number 반환
console.log(calculateOriginalPrice(10000)+ "원") //string 반환

// 2-3 주류 판매 가능 여부
// 신분증의 나이를 확인해 주류 구매 가능 여부를 반환하는 함수를 작성합니다.
// 19세 이상 주류 구매가 가능합니다.
const canSellAlcohol = registrationCard => registrationCard.age >= 19 ? true : false;

const registrationCard = {
  name: '정우진',
  age: 29,
  gender: 'male',
}
console.log(canSellAlcohol(registrationCard));

// 2-4 할인가 계산
// 판매가와 할인 비율(%)을 입력 받아, 할인가를 반환하는 함수를 작성합니다.
// [예] 판매가가 18,700원이고, 할인율이 20%인 경우 계산된 할인가는 14,960원입니다.

const getDiscountedPrice = (originalPrice, discountPercent) =>{
  const DISCOUNTED_RATE = (100 - discountPercent) / 100
  return originalPrice * DISCOUNTED_RATE;
}

console.log(getDiscountedPrice(18700, 20))//number 반환
console.log(getDiscountedPrice(18700, 20)+ '원')//string 반환

// 2-5 등급 판단
// 점수를 전달받아 점수, 등급과 설명을 포함한 객체를 반환하는 함수를 작성합니다.
const testGrade = (score) => {
  let grade = "";
  let description = "";

  if (score >= 90) {
    grade = "A";
    description = "매우 우수";
  } else if (score >= 80) {
    grade = "B";
    description = "우수";
  } else if (score >= 70) {
    grade = "C";
    description = "보통";
  } else if (score >= 60) {
    grade = "D";
    description = "미달, 통과 기준 근접";
  } else {
    grade = "F";
    description = "낙제";
  }

  return { score: score, grade: grade, description: description };
};
console.log(testGrade(87));
