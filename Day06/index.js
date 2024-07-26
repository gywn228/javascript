// 1. 온도를 입력 받으면, 0 이하면 추워요
// 0~10 쌀쌀해요, 10~20 쾌적해요, 20~30살짝 더워요
// 30 이상이면 더워요 라는 함수를 만들어주세요.

const weather = Number(prompt("온도를 입력해주세요"));
function temperature(temp) {
  if (temp < 0) {
    return "추워요";
  } else if (0 <= temp && temp < 10) {
    return "쌀쌀해요";
  } else if (10 <= temp && temp < 20) {
    return "쾌적해요";
  } else if (20 <= temp && temp < 30) {
    return "살짝더워요";
  } else {
    return "더워요";
  }
}

// 2. 올리브영에서 3만원 이상 구매하면, 10프로 할인해주고
// 5만원 이상 구매하면 20% 할인 해주는 가격 계산 함수를 만들어 주세요
function oliveyoung(price) {
  if (price >= 50000) {
    return { originPrice: price, discontPrice: price * 0.8 };
  } else if (price >= 30000) {
    return { originPrice: price, discontPrice: price * 0.9 };
  } else {
    return { originPrice: price, discontPrice: price * 1 };
  }
}

