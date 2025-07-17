const cardData = [
  {
    id: "deepdream",
    name: "신한 Deep Dream 체크 (미니언즈)",
    image: "images/mini.png.png",
    details: "기본 적립 외에도 DREAM 영역에서 추가 적립 혜택을 제공하며 택시 할인도 적용됩니다."
  },
  {
    id: "nori",
    name: "KB 노리 체크카드",
    image: "images/nori.png.png",
    details: "KB Pay 결제 시 넷플릭스, 커피, 영화 등 콘텐츠 소비에 강력한 혜택을 제공합니다."
  },
  {
    id: "teenup",
    name: "KB 틴업 체크카드 (헤어리 스프링)",
    image: "images/tniping.png",
    details: "청소년 전용 카드로 대중교통 할인, 포인트 적립이 가능합니다."
  },
  {
    id: "toss",
    name: "토스뱅크 체크카드",
    image: "images/toss.png.png",
    details: "심플한 디자인, 커피 및 택시 할인에 특화된 카드입니다."
  },
  {
  id: "kakao",
  name: "카카오페이 체크카드",
  description: "귀여운 디자인과 다양한 제휴 할인 혜택 제공",
  image: "images/kakao.png.png",
  details:"카카오페이 결제 시 적립, 대중교통기능, 영화 할인이 가능합니다"
},
{
  id: "mgcard",
  name: "새마을금고 더나은 체크카드",
  description: "청소년 전용 혜택과 감성 일러스트",
  image: "images/mgcard.png.png",
  details:"간편 결제 할인과 온라인쇼핑, 커피전문점 할인등 할인에 특화된 카드입니다"
},
{
  id: "kpass",
  name: "NH농협 티켓 체크카드",
  description: "지하철·버스 통합 교통 기능 포함",
  image: "images/kpass.png.png",
  details:"대중교통 할인과 자동차 관련 할인이 많이 있습니다."
},
{
  id: "onecheck",
  name: "신한 Wallace & Gromit 카드",
  description: "월레스와 그로밋 캐릭터 카드로 개성 표현",
  image: "images/onecheck.png.png",
  details:"캐시백에 특화된 카드입니다."
}
];

function getQueryParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

window.onload = function () {
  const cardId = getQueryParam("cardId");
  let card = cardData.find(c => c.id === cardId);

  // ✅ cardId가 없거나 잘못된 경우 → 첫 번째 카드 보여주기
  if (!card) {
    card = cardData[0];
  }

  const container = document.getElementById("cardDetail");

  container.innerHTML = `
    <div style="max-width: 400px; margin: auto; text-align: center;">
      <img src="${card.image}" alt="${card.name}" style="max-width: 100%; border-radius: 10px;" onerror="this.src='images/nori.png.png'">
      <h2>${card.name}</h2>
      <p>${card.details}</p>
      <a href="index.html">← 돌아가기</a>
    </div>
  `;
};
