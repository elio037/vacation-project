const cardData = [
  {
    id: "deepdream",
    name: "신한 Deep Dream 체크 (미니언즈)",
    benefits: ["point", "transport", "taxi"],
    description: "기본 적립 0.2%, DREAM 영역 최대 1.0%, 택시 할인 포함",
    image: "images/mini.png.png"
  },
  {
    id: "nori",
    name: "KB 노리 체크카드",
    benefits: ["point", "coffee", "netflix"],
    description: "3만원 캐시백, 커피/넷플릭스 할인",
    image: "images/nori.png.png"
  },
  {
    id: "teenup",
    name: "KB 틴업 체크카드",
    benefits: ["point", "transport"],
    description: "청소년 전용, 교통 할인, 포인트 적립",
    image: "images/tniping.png"
  },
  {
    id: "toss",
    name: "토스뱅크 체크카드",
    benefits: ["coffee", "taxi"],
    description: "커피 할인과 택시 할인",
    image: "images/toss.png.png"
  },
  {
  id: "kakao",
  name: "카카오페이 체크카드",
  benefits: ["point", "convenience", "fun"],
  description: "귀여운 디자인과 다양한 제휴 할인 혜택 제공",
  image: "images/kakao.png.png"
},
{
  id: "mgcard",
  name: "새마을금고 더나은 체크카드",
  benefits: ["transport", "youth", "design"],
  description: "청소년 전용 혜택과 감성 일러스트",
  image: "images/mgcard.png.png"
},
{
  id: "kpass",
  name: "NH농협 티켓 체크카드",
  benefits: ["transport", "metro", "bus"],
  description: "지하철·버스 통합 교통 기능 포함",
  image: "images/kpass.png.png"
},
{
  id: "onecheck",
  name: "신한 Wallace & Gromit 카드",
  benefits: ["fun", "design"],
  description: "월레스와 그로밋 캐릭터 카드로 개성 표현",
  image: "images/onecheck.png.png"
}
  
];

function filterCards() {
  const selected = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
    .map(cb => cb.value);

  const results = document.getElementById("cardResults");
  results.innerHTML = "";

  const filtered = cardData.filter(card =>
    selected.every(benefit => card.benefits.includes(benefit))
  );

  if (filtered.length === 0) {
    results.innerHTML = "<p>선택한 조건에 맞는 카드를 찾을 수 없습니다.</p>";
    return;
  }

  filtered.forEach(card => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <img src="${card.image}" alt="${card.name}" class="card-img"
           style="width: 100%; max-height: 180px; object-fit: contain;"
           onerror="this.src='images/nori.png.png'">
      <h3>${card.name}</h3>
      <p>${card.description}</p>
      <a href="details.html?cardId=${card.id}" class="btn">자세히 보기</a>
    `;
    results.appendChild(div);
  });
}
