//유저에게 주말에 먹었던 음식들을 입력받고
//콘솔로그로 먹었던 음식들 나열하기

//토요일 아침 : 국밥
//토요일 점심 : 파스타
//일요일 점심 : 김치찌개
//일요일 저녁 : 치킨

//주말에 먹은 음식들 [파스타,김치찌개,떡볶이,치킨]
const food = []
food.push(prompt("토요일 점심"))
food.push(prompt("토요일 저녁"))
food.push(prompt("일요일 점심"))
food.push(prompt("일요일 저녁"))
console.log(`주말에 먹은 음식들 ${food}`)