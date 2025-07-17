const cardData = [
  {
    id: "deepdream",
    name: "신한 Deep Dream 체크 (미니언즈)",
    image: "images/mini.png.png",
    benefits: ["point", "transport", "taxi"],
    details: "기본 적립 외에도 DREAM 영역에서 추가 적립 혜택을 제공하며 택시 할인도 적용됩니다."
  },
  {
    id: "nori",
    name: "KB 노리 체크카드",
    image: "images/nori.png.png",
    benefits: ["netflix", "coffee", "point"],
    details: "넷플릭스, 커피, 영화 등 콘텐츠 소비에 강력한 혜택"
  },
  {
    id: "teenup",
    name: "KB 틴업 체크카드",
    image: "images/tniping.png",
    benefits: ["transport", "point"],
    details: "청소년 전용 카드로 대중교통 할인, 포인트 적립"
  },
  {
    id: "toss",
    name: "토스뱅크 체크카드",
    image: "images/toss.png.png",
    benefits: ["coffee", "taxi"],
    details: "심플한 디자인, 커피 및 택시 할인"
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
    .map(input => input.value);

  const resultContainer = document.getElementById("cardResults");
  resultContainer.innerHTML = "";

  const filtered = selected.length > 0
    ? cardData.filter(card =>
        Array.isArray(card.benefits) &&
        selected.every(tag => card.benefits.includes(tag))
      )
    : cardData; // 아무 선택 없으면 전체 카드 표시

  if (filtered.length === 0) {
    resultContainer.innerHTML = "<p>조건에 맞는 카드가 없습니다.</p>";
    return;
  }

  filtered.forEach(card => {
    const cardElement = document.createElement("div");
    cardElement.className = "card";
    cardElement.innerHTML = `
      <img src="${card.image}" alt="${card.name}" />
      <h3>${card.name}</h3>
      <p>${card.details || card.description}</p>
      <button onclick="goToDetail('${card.id}', '${selected.join(',')}')">자세히 보기</button>
    `;
    resultContainer.appendChild(cardElement);
  });

  // URL에 selected 정보 저장
  const baseUrl = window.location.pathname;
  history.replaceState(null, "", `${baseUrl}?selected=${selected.join(',')}`);
}

function goToDetail(cardId, selected) {
  const fromUrl = `${window.location.pathname}?selected=${selected}`;
  window.location.href = `details.html?cardId=${cardId}&from=${encodeURIComponent(fromUrl)}`;
}

// ✅ 페이지 로드 시 selected 복원 + 필터 실행
window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const selectedStr = urlParams.get("selected");

  if (selectedStr) {
    const selectedValues = selectedStr.split(",").filter(Boolean);
    selectedValues.forEach(value => {
      const checkbox = document.querySelector(`input[type="checkbox"][value="${value}"]`);
      if (checkbox) checkbox.checked = true;
    });

    // 선택값 있을 때만 카드 보여주기
    filterCards();
  }
  filterCards(); // 무조건 실행 (selected 없어도 전체 카드 보이게)
};
