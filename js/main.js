import confetti from 'canvas-confetti';

/**
 * 서울신답초등학교 학교폭력 예방 O/X 퀴즈 키오스크 (1080x1920 Signage)
 * Main JavaScript Module - Interactive Implementation
 */

function triggerCelebrationConfetti() {
  try {
    // Left cannon
    confetti({
      particleCount: 80,
      angle: 60,
      spread: 85,
      origin: { x: 0.05, y: 0.7 },
      zIndex: 9999,
      colors: ['#2563EB', '#10B981', '#F59E0B', '#EC4899', '#8B5CF6', '#3B82F6', '#EF4444']
    });

    // Right cannon
    confetti({
      particleCount: 80,
      angle: 120,
      spread: 85,
      origin: { x: 0.95, y: 0.7 },
      zIndex: 9999,
      colors: ['#2563EB', '#10B981', '#F59E0B', '#EC4899', '#8B5CF6', '#3B82F6', '#EF4444']
    });

    // Second wave after 200ms
    setTimeout(() => {
      confetti({
        particleCount: 60,
        angle: 65,
        spread: 70,
        origin: { x: 0.1, y: 0.65 },
        zIndex: 9999,
        colors: ['#38BDF8', '#F43F5E', '#FACC15', '#A855F7']
      });
      confetti({
        particleCount: 60,
        angle: 115,
        spread: 70,
        origin: { x: 0.9, y: 0.65 },
        zIndex: 9999,
        colors: ['#38BDF8', '#F43F5E', '#FACC15', '#A855F7']
      });
    }, 200);
  } catch (e) {
    console.error("Confetti error:", e);
  }
}

// ==========================================
// 1. DATA: 서울신답초등학교 환경보호 O/X 퀴즈 데이터 (100문제)
// ==========================================
const QUIZ_DATA = {
  schoolName: "",
  title: "환경보호 O/X 퀴즈",
  questions: [
    { id: 1, question: "플라스틱 페트병을 분리수거할 때는 비닐 라벨을 떼고 깨끗이 씻어서 착착 눌러 배출해야 한다.", answer: "O", explanation: "맞아요! 비닐 라벨을 제거하고 내부 이물질을 헹군 뒤 눌러서 배출하면 재활용 품질이 크게 높아집니다." },
    { id: 2, question: "종이팩(우유팩)은 일반 종이류와 함께 섞어서 버려도 재활용이 잘된다.", answer: "X", explanation: "틀려요! 우유팩 등 종이팩은 안쪽에 특수 코팅이 되어 있어 일반 종이와 따로 분리수거함에 버려야 재활용이 가능합니다." },
    { id: 3, question: "양치할 때 양치 컵에 물을 받아 사용하면 물을 크게 절약할 수 있다.", answer: "O", explanation: "맞아요! 양치 컵을 사용하면 물을 그냥 틀어놓고 쓸 때보다 약 5리터 이상의 소중한 물을 아낄 수 있습니다." },
    { id: 4, question: "음식물 쓰레기통에 닭 뼈나 조개 껍데기, 동물의 뼈를 넣어서 버려도 된다.", answer: "X", explanation: "틀려요! 동물의 뼈나 조개 껍데기는 단단해서 가축 사료로 쓸 수 없으므로 일반 쓰레기로 버려야 합니다." },
    { id: 5, question: "지구가 따뜻해지는 '지구 온난화'의 주요 원인은 이산화탄소 같은 온실가스의 증가이다.", answer: "O", explanation: "맞아요! 석탄과 석유 등 화석 연료를 태울 때 나오는 이산화탄소가 지구 온도를 올리는 온실효과를 일으킵니다." },
    { id: 6, question: "미세플라스틱은 바다 생물뿐만 아니라 먹이사슬을 통해 사람의 건강에도 나쁜 영향을 미친다.", answer: "O", explanation: "맞아요! 바다로 흘러든 미세플라스틱을 물고기가 먹고, 이를 사람이 다시 섭취하면서 건강을 위협할 수 있습니다." },
    { id: 7, question: "북극곰의 서식지가 줄어드는 것은 지구 온난화로 북극의 빙하가 녹고 있기 때문이다.", answer: "O", explanation: "맞아요! 지구 기온이 올라가 북극 얼음이 녹으면서 북극곰이 사냥하고 쉴 곳을 잃어가고 있습니다." },
    { id: 8, question: "장바구니나 에코백을 사용하면 일회용 비닐봉투 사용을 줄여 환경을 보호할 수 있다.", answer: "O", explanation: "맞아요! 비닐봉투는 썩는 데 수백 년이 걸리므로 에코백이나 장바구니를 늘 챙겨 사용하는 것이 좋습니다." },
    { id: 9, question: "전기 코드를 사용하지 않을 때 꽂아두어도 전력이 전혀 소비되지 않는다.", answer: "X", explanation: "틀려요! 전자제품을 켜지 않아도 플러그가 꽂혀 있으면 '대기 전력'이 계속 소비되므로 뽑아두어야 합니다." },
    { id: 10, question: "나무는 공기 중의 이산화탄소를 흡수하고 사람이 숨 쉬는 데 필요한 산소를 배출한다.", answer: "O", explanation: "맞아요! 나무는 광합성을 통해 이산화탄소를 흡수하고 깨끗한 산소를 만들어 공기를 정화해 줍니다." },
    { id: 11, question: "텀블러(보온병)를 챙겨 다니면 일회용 종이컵이나 플라스틱 컵 사용을 크게 줄일 수 있다.", answer: "O", explanation: "맞아요! 개인 텀블러를 쓰면 매일 엄청난 양의 일회용 컵 쓰레기를 줄이고 자원을 아낄 수 있습니다." },
    { id: 12, question: "비닐봉지나 스티로폼은 땅속에 묻히면 몇 달 만에 깨끗하게 자연 분해된다.", answer: "X", explanation: "틀려요! 비닐과 스티로폼은 땅속에서 분해되는 데 500년 이상 오랜 시간이 걸리거나 완전히 썩지 않습니다." },
    { id: 13, question: "에어컨 설정 온도를 1~2도 높이고 선풍기를 함께 쓰면 전기를 크게 아낄 수 있다.", answer: "O", explanation: "맞아요! 에어컨 온도를 26~28도로 유지하고 선풍기를 함께 돌리면 에너지 절약과 냉방병 예방에 도움이 됩니다." },
    { id: 14, question: "깨진 유리제품이나 도자기 그릇은 유리병 재활용함에 버려야 한다.", answer: "X", explanation: "틀려요! 깨진 유리나 도자기는 재활용이 되지 않으므로 불연성 쓰레기 봉투나 일반 쓰레기로 신문지에 싸서 안전하게 버려야 합니다." },
    { id: 15, question: "'지구의 날'은 매년 4월 22일로, 지구 환경 오염 문제의 심각성을 알리기 위해 제정된 날이다.", answer: "O", explanation: "맞아요! 매년 4월 22일 지구의 날에는 저녁에 10분간 불을 끄는 소등 행사 등 지구를 생각하는 활동이 열립니다." },
    { id: 16, question: "사용한 휴지나 물티슈는 종이류로 재활용 수거함에 분리배출해야 한다.", answer: "X", explanation: "틀려요! 오염된 휴지나 플라스틱 성분이 들어있는 물티슈는 재활용할 수 없어 일반 쓰레기통에 버려야 합니다." },
    { id: 17, question: "태양광, 풍력, 수력 발전은 화석연료와 달리 온실가스를 배출하지 않는 친환경 재생에너지이다.", answer: "O", explanation: "맞아요! 햇빛, 바람, 물을 이용한 재생에너지는 탄소를 거의 배출하지 않아 지구 환경 보호에 핵심 역할을 합니다." },
    { id: 18, question: "자전거를 타거나 걸어서 등교하면 자동차 매연과 탄소 배출을 줄일 수 있다.", answer: "O", explanation: "맞아요! 가까운 거리는 걷거나 자전거를 타면 대기 오염과 온실가스를 줄여 공기가 깨끗해집니다." },
    { id: 19, question: "헌 옷이나 쓰지 않는 물건을 나눔 장터에 내놓거나 재사용하는 것은 자원 절약에 도움이 된다.", answer: "O", explanation: "맞아요! 내가 쓰지 않는 물건을 버리지 않고 나눔하면 자원을 아끼고 쓰레기 발생을 줄일 수 있습니다." },
    { id: 20, question: "형광등이나 건전지는 수은 같은 유해물질이 들어있으므로 전용 수거함에 따로 버려야 한다.", answer: "O", explanation: "맞아요! 폐건전지와 형광등을 일반 쓰레기와 섞어 버리면 토양과 지하수가 심각하게 오염될 수 있습니다." },
    { id: 21, question: "식물을 많이 심으면 미세먼지를 줄이고 공기를 깨끗하게 만드는 데 도움이 된다.", answer: "O", explanation: "맞아요! 식물 잎은 미세먼지를 흡착하고 깨끗한 산소를 배출하여 교실과 우리 주변의 공기를 정화합니다." },
    { id: 22, question: "패스트 패션(옷을 자주 사고 쉽게 버리는 문화)은 환경에 아무런 영향을 주지 않는다.", answer: "X", explanation: "틀려요! 옷을 만드는 과정에서 엄청난 물과 화학물질이 소모되고, 버려지는 옷은 심각한 환경 오염을 만듭니다." },
    { id: 23, question: "씻지 않은 라면 용기나 기름때가 심하게 묻은 스티로폼은 재활용이 가능하다.", answer: "X", explanation: "틀려요! 음식물이나 기름때로 오염된 스티로폼은 재활용할 수 없어 깨끗이 씻거나 일반 쓰레기로 버려야 합니다." },
    { id: 24, question: "빗물을 모아서 화분에 물을 주거나 청소할 때 재사용하면 수자원을 절약할 수 있다.", answer: "O", explanation: "맞아요! 버려지는 빗물을 받아 청소나 화단 가꾸기에 활용하면 소중한 수자원을 아낄 수 있습니다." },
    { id: 25, question: "쓰레기를 함부로 태우면 유독가스와 미세먼지가 발생하여 대기를 오염시킨다.", answer: "O", explanation: "맞아요! 쓰레기 불법 소각은 다이옥신 등 인체에 해로운 유해 물질과 미세먼지를 일으킵니다." },
    { id: 26, question: "친환경 마크(에코마크)가 붙은 제품은 생산과정에서 환경 오염을 상대적으로 적게 일으킨 제품이다.", answer: "O", explanation: "맞아요! 친환경 인증 마크는 자원 절약과 환경 오염을 줄인 우수 상품에 부여되는 마크입니다." },
    { id: 27, question: "물에 설거지감을 담가 받아서 씻으면 흐르는 물에 씻는 것보다 물을 훨씬 많이 사용한다.", answer: "X", explanation: "틀려요! 설거지통에 물을 받아 씻으면 수전에서 물을 계속 틀어둘 때보다 수십 리터의 물을 아낄 수 있습니다." },
    { id: 28, question: "사용하지 않는 방의 조명을 끄는 습관은 전기를 아끼고 이산화탄소 배출을 줄이는 쉬운 행동이다.", answer: "O", explanation: "맞아요! 사용하지 않는 불을 끄는 작은 실천이 모이면 발전소의 탄소 배출량을 크게 줄입니다." },
    { id: 29, question: "해양 쓰레기의 대부분은 바다에서 직접 생기는 것이 아니라 육지에서 버려져 흘러 들어간 것이다.", answer: "O", explanation: "맞아요! 땅에 함부로 버린 쓰레기가 강과 하천을 타고 바다로 가 해양 생태계를 파괴하게 됩니다." },
    { id: 30, question: "종이 한 장을 아껴 쓰면 나무를 보호하고 종이를 만드는 데 들어가는 물과 전기도 절약된다.", answer: "O", explanation: "맞아요! 종이 소비를 줄이면 숲이 보호되고 종이 제조 공정의 탄소 배출도 감축할 수 있습니다." },
    { id: 31, question: "화학 비료나 농약을 과도하게 사용하면 흙 속의 이로운 미생물이 죽고 토양이 오염된다.", answer: "O", explanation: "맞아요! 화학물질을 지나치게 쓰면 땅이 산성화되고 토양 생물들이 살 수 없게 됩니다." },
    { id: 32, question: "과자 봉지나 빵 봉지 같은 비닐류는 내용물을 비우고 '비닐류' 분리수거함에 배출해야 한다.", answer: "O", explanation: "맞아요! 이물질이 없는 깨끗한 비닐류는 분리배출하면 새로운 비닐이나 훌륭한 자원으로 재활용됩니다." },
    { id: 33, question: "샴푸 용기는 내용물을 깨끗이 비우고 펌프 스프링 등의 부품을 분류하여 버려야 재활용률이 높다.", answer: "O", explanation: "맞아요! 디스펜서 펌프 안에는 금속 스프링이 있어 분리해 주어야 플라스틱 재활용이 제대로 이루어집니다." },
    { id: 34, question: "낮 시간에 창문으로 들어오는 자연 햇빛을 활용하면 전등을 켜지 않아도 밝게 생활할 수 있다.", answer: "O", explanation: "맞아요! 햇빛이 잘 드는 낮 시간에는 전등을 끄고 자연광을 이용하면 전기를 아낄 수 있습니다." },
    { id: 35, question: "일회용 빨대는 플라스틱 재활용함에 넣으면 100% 깔끔하게 재활용된다.", answer: "X", explanation: "틀려요! 빨대는 크기가 너무 작아 선별기에서 그냥 버려지기 때문에 되도록 빨대를 쓰지 않는 것이 제일 좋습니다." },
    { id: 36, question: "음식을 남기지 않고 다 먹는 것은 음식물 쓰레기를 줄이고 온실가스 배출을 막는 좋은 습관이다.", answer: "O", explanation: "맞아요! 음식물 쓰레기를 수거하고 처리할 때 많은 에너지가 들고 온실가스가 발생하므로 잔반을 남기지 않아야 합니다." },
    { id: 37, question: "온실가스는 지구에 전혀 필요 없으므로 0%가 되면 지구가 가장 살기 좋아진다.", answer: "X", explanation: "틀려요! 적당한 온실가스는 지구 기온을 생물이 살기 좋게 유지하는 온돌 이불 역할을 합니다. 문제는 지나친 증가입니다." },
    { id: 38, question: "냉장고 문을 자주 열고 닫으면 내부 온도가 올라가 전기가 더 많이 소비된다.", answer: "O", explanation: "맞아요! 냉장고 문을 열 때마다 찬 공기가 빠져나가 다시 낮추기 위해 많은 전력이 쓰입니다." },
    { id: 39, question: "환경을 생각하는 '제로 웨이스트'는 쓰레기 배출을 줄여 최종적으로 0에 가깝게 만드는 친환경 운동이다.", answer: "O", explanation: "맞아요! 포장재를 줄이고 재사용 제품을 써서 지구에 쓰레기를 남기지 않으려는 멋진 운동입니다." },
    { id: 40, question: "택배 상자를 버릴 때는 붙어있는 비닐 테이프와 운송장 스티커를 반드시 떼고 버려야 한다.", answer: "O", explanation: "맞아요! 박스의 테이프와 스티커를 제거해야 종이 재활용 공정에서 깨끗한 재생종이로 만들어집니다." },
    { id: 41, question: "유통기한이 지난 약은 하수구나 변기에 버려도 수질 오염을 일으키지 않는다.", answer: "X", explanation: "틀려요! 폐의약품을 하수구에 버리면 화학 성분이 수자원과 생태계를 오염시키므로 약국이나 보건소 전용 수거함에 버려야 합니다." },
    { id: 42, question: "대중교통(버스, 지하철)을 이용하면 자가용을 탈 때보다 1인당 탄소 배출량이 훨씬 적다.", answer: "O", explanation: "맞아요! 대중교통은 여러 사람이 함께 이용하여 연료 절약과 대기 오염 저감에 큰 도움을 줍니다." },
    { id: 43, question: "천연 수세미나 삼베 수세미를 사용하면 미세플라스틱이 하수로 흘러가는 것을 막을 수 있다.", answer: "O", explanation: "맞아요! 플라스틱 성분 수세미 대신 식물성 천연 수세미를 쓰면 미세플라스틱 오염을 막을 수 있습니다." },
    { id: 44, question: "전자제품을 살 때 '에너지 소비 효율 1등급' 제품을 선택하면 전기를 크게 아낄 수 있다.", answer: "O", explanation: "맞아요! 1등급 제품은 5등급보다 에너지를 훨씬 적게 사용하여 전기 절약과 환경 보호에 이롭습니다." },
    { id: 45, question: "'탄소중립'이란 배출하는 탄소량과 흡수하는 탄소량을 같게 하여 실질 배출량을 0으로 만드는 것이다.", answer: "O", explanation: "맞아요! 온실가스 배출은 줄이고 숲을 가꾸어 탄소를 흡수함으로써 온난화를 막는 인류의 핵심 목표입니다." },
    { id: 46, question: "부탄가스 용기나 스프레이캔은 가스를 완전히 뺀 뒤 금속캔으로 버려야 안전하다.", answer: "O", explanation: "맞아요! 가스가 남아있으면 쓰레기 처리 과정에서 폭발 위험이 있으므로 꼭 통풍이 잘되는 곳에서 가스를 내보내야 합니다." },
    { id: 47, question: "샤워 시간을 2~3분 줄이는 것은 물과 데우는 전기를 절약하는 데 큰 효과가 있다.", answer: "O", explanation: "맞아요! 샤워 시간을 조금만 줄여도 수십 리터의 소중한 물과 이산화탄소 배출을 줄일 수 있습니다." },
    { id: 48, question: "도심에 공원과 옥상 정원을 가꾸면 도시의 온도가 이상 상승하는 '열섬 현상'을 완화할 수 있다.", answer: "O", explanation: "맞아요! 식물이 많은 녹지는 햇빛을 흡수하고 수분을 증발시켜 도시 전체의 온도를 낮춰 줍니다." },
    { id: 49, question: "실제로는 친환경이 아니면서 친환경인 것처럼 위장하여 홍보하는 것을 '그린워싱(위장 환경주의)'이라고 한다.", answer: "O", explanation: "맞아요! 소비자를 속이는 과장 친환경 마케팅을 유의 깊게 살펴보고 진짜 녹색제품을 골라야 합니다." },
    { id: 50, question: "폐식용유를 하수구에 버리면 관이 막히고 하천과 바다가 심각하게 오염된다.", answer: "O", explanation: "맞아요! 식용유는 하수구에서 단단히 굳어 관을 막고 수질을 오염시키므로 폐식용유 수거함에 버려야 합니다." },
    { id: 51, question: "컴퓨터를 쓰지 않고 자리를 비울 때는 절전 모드로 바꾸거나 전원을 꺼두어야 한다.", answer: "O", explanation: "맞아요! 컴퓨터를 켜둔 채 방치하면 전기가 계속 낭비되므로 절전 모드나 전원 끄기를 실천해야 합니다." },
    { id: 52, question: "제품이 만들어지고 소비되어 폐기될 때까지 들어가는 총 물의 양을 나타낸 것을 '물발자국'이라고 한다.", answer: "O", explanation: "맞아요! 우리가 먹고 쓰는 모든 물건에는 수많은 물이 소모되므로 물발자국을 줄이는 노력이 필요합니다." },
    { id: 53, question: "합성섬유 옷을 세탁할 때 미세플라스틱 차단 세탁망을 사용하면 바다 오염을 줄일 수 있다.", answer: "O", explanation: "맞아요! 세탁 과정에서 떨어져 나오는 미세 플라스틱 섬유를 세탁망이 가두어 바다 유입을 막아줍니다." },
    { id: 54, question: "수소차나 전기차 같은 친환경 차는 운행 중에 온실가스를 배출하지 않아 대기질 개선에 도움이 된다.", answer: "O", explanation: "맞아요! 친환경 이동수단은 매연과 탄소 배출이 없어 지구온난화와 미세먼지를 줄여줍니다." },
    { id: 55, question: "매년 6월 5일은 지구 환경 보호의 중요성을 세계적으로 되새기는 '환경의 날'이다.", answer: "O", explanation: "맞아요! 6월 5일 세계 환경의 날에는 전 세계가 환경 지키기 약속과 다채로운 행사를 실시합니다." },
    { id: 56, question: "일회용 나무젓가락이나 스티로폼 컵은 씻지 않고 땅에 묻어도 금방 썩는다.", answer: "X", explanation: "틀려요! 일회용 나무젓가락도 화학 처리 때문에 썩는 데 수년이 걸리며 스티로폼은 수백 년 동안 안 썩습니다." },
    { id: 57, question: "여름철 실내 적정 냉방 온도는 26~28도를 유지하는 것이 온실가스 절감에 좋다.", answer: "O", explanation: "맞아요! 실내외 온도 차이를 너무 크게 하지 않고 26~28도를 유지하면 건강도 지키고 에너지도 아낍니다." },
    { id: 58, question: "물건을 살 때 불필요한 포장재가 적은 과대포장 개선 상품을 고르는 것도 친환경 행동이다.", answer: "O", explanation: "맞아요! 포장이 포장박스로 겹겹이 쌓인 제품보다 간소한 포장 제품을 사면 포장 쓰레기가 저절로 줄어듭니다." },
    { id: 59, question: "바다로 흘러간 비닐봉지를 바다거북이 먹이인 해파리로 착각해 먹고 목숨을 잃기도 한다.", answer: "O", explanation: "맞아요! 비닐봉지는 물속에서 해파리와 비슷하게 보여 바다 동물이 먹고 죽는 불행한 일이 일어납니다." },
    { id: 60, question: "개인 수저와 장바구니를 늘 소지하고 다니는 것은 일회용품 사용을 막는 착한 실천이다.", answer: "O", explanation: "맞아요! 나만의 수저, 텀블러, 에코백을 챙겨 다니면 일상속 쓰레기를 눈에 띄게 줄일 수 있습니다." },
    { id: 61, question: "종이컵은 나무로 만드니까 마음껏 사용하고 버려도 환경 오염이 전혀 되지 않는다.", answer: "X", explanation: "틀려요! 종이컵을 만들기 위해 무수한 나무가 베어지고 내부 비닐 코팅 때문에 재활용도 잘 안됩니다." },
    { id: 62, question: "멸종위기 야생 동식물을 보호하는 것은 지구 생물 다양성을 지키는 중요한 일이다.", answer: "O", explanation: "맞아요! 여러 생물이 함께 살아가는 균형 잡힌 생태계가 유지되어야 지구 전체가 건강합니다." },
    { id: 63, question: "내용물만 다시 채워 넣는 '리필 스테이션'을 이용하면 플라스틱 용기 쓰레기를 크게 줄인다.", answer: "O", explanation: "맞아요! 기존 플라스틱 통을 재사용하고 알맹이만 채우면 매번 새 통을 살 필요가 없습니다." },
    { id: 64, question: "수도꼭지를 틀어놓고 비누칠을 하는 것이 끄고 비누칠하는 것보다 물이 아껴진다.", answer: "X", explanation: "틀려요! 비누칠을 하거나 손을 문지를 때 수도꼭지를 잠그면 엄청난 양의 수자원을 절약합니다." },
    { id: 65, question: "배달 앱을 쓸 때 일회용 수저 안 받기를 선택하는 작은 행동도 쓰레기를 줄여준다.", answer: "O", explanation: "맞아요! 가정에서 집 수저를 쓰고 일회용 수저를 거절하면 버려지는 플라스틱을 막을 수 있습니다." },
    { id: 66, question: "자가용 차량의 타이어 공기압을 적정하게 유지하면 연비가 좋아져 온실가스가 줄어든다.", answer: "O", explanation: "맞아요! 타이어 상태를 점검하는 자동차 관리도 연료 소비를 줄이고 탄소 배출을 줄여줍니다." },
    { id: 67, question: "비닐장갑이나 지퍼백을 깨끗하게 사용한 뒤 씻어 재사용하는 것은 자원 절약에 좋다.", answer: "O", explanation: "맞아요! 한 번 쓰고 쉽게 버리지 않고 깨끗한 지퍼백을 재사용하면 비닐 쓰레기를 원천 단축합니다." },
    { id: 68, question: "종이 영수증 대신 모바일 전자영수증을 받으면 영수증 종이와 나무를 아낄 수 있다.", answer: "O", explanation: "맞아요! 하루에도 엄청나게 버려지는 종이 영수증 대신 전자영수증을 이용하면 환경에 큰 도움이 됩니다." },
    { id: 69, question: "갯벌과 바다 숲(잘피 등)은 육지 숲보다 탄소를 더 빠르게 흡수하는 '블루카본' 역할을 한다.", answer: "O", explanation: "맞아요! 갯벌과 해양 생태계는 엄청난 양의 이산화탄소를 저장해 온난화를 막아주는 고마운 존재입니다." },
    { id: 70, question: "길가에 떨어진 가을 낙엽을 한곳에 모아 불을 피워 태워도 공기는 깨끗하다.", answer: "X", explanation: "틀려요! 낙엽이나 쓰레기를 불법 소각하면 미세먼지와 연기, 탄소가 대량 발생해 대기를 오염시킵니다." },
    { id: 71, question: "비 오는 날 일회용 비닐 우산 커버 대신 빗물 털이개나 우산 털이 융을 쓰면 비닐이 절약된다.", answer: "O", explanation: "맞아요! 빗물 털이개를 사용하면 젖은 비닐 커버가 낭비되는 것을 막고 환경을 지킵니다." },
    { id: 72, question: "겨울철 실내 난방 온도를 18~20도로 맞추고 내복을 입으면 에너지를 크게 아낀다.", answer: "O", explanation: "맞아요! 내복이나 무릎덮개를 활용해 적정 난방 온도를 지키면 난방비와 탄소를 함께 줄입니다." },
    { id: 73, question: "학용품을 살 때 녹색제품 인증이나 친환경 마크가 그려진 공책과 연필을 고르는 것이 좋다.", answer: "O", explanation: "맞아요! 친환경 인증 문구류는 재생 자원을 쓰고 유해물질을 줄여 만든 착한 학용품입니다." },
    { id: 74, question: "폐건전지를 일반 쓰레기통에 넣으면 매립지에서 중금속이 흘러나와 토양을 오염시킨다.", answer: "O", explanation: "맞아요! 폐건전지는 수은, 납 등이 들어있어 꼭 아파트나 학교의 전용 수거함에 분리배출해야 합니다." },
    { id: 75, question: "물티슈는 종이로 만들어져서 물에 넣으면 자연스럽게 풀어져 녹는다.", answer: "X", explanation: "틀려요! 물티슈의 대부분은 플라스틱 섬유(폴리에스터)로 만들어져 녹지 않고 변기를 막히게 합니다." },
    { id: 76, question: "음식을 끓이거나 조리할 때 냄비 뚜껑을 덮으면 가스나 전기 에너지가 절약된다.", answer: "O", explanation: "맞아요! 뚜껑을 덮으면 열 손실이 줄어들어 음식이 훨씬 빨리 조리되고 에너지도 절약됩니다." },
    { id: 77, question: "마트에서 곧 소비할 음식을 살 때 유통기한이 임박해 할인하는 상품을 사면 음식물 폐기를 줄인다.", answer: "O", explanation: "맞아요! 바로 먹을 재료는 그린 장보기를 통해 버려질 수 있는 음식을 구하고 자원도 아낍니다." },
    { id: 78, question: "'플로깅(Plogging)'은 걷거나 달리면서 주변 쓰레기를 줍는 환경 운동이다.", answer: "O", explanation: "맞아요! 운동으로 건강도 챙기고 동네의 쓰레기를 주워 환경도 깨끗하게 만드는 일석이조 활동입니다." },
    { id: 79, question: "세수를 하거나 양치를 할 때 수도꼭지를 내내 틀어두면 물이 대량으로 버려진다.", answer: "O", explanation: "맞아요! 받아놓고 쓰지 않고 그냥 흘려보내는 수돗물 양이 하루에 수십 리터에 달합니다." },
    { id: 80, question: "충전이 끝난 스마트폰의 충전기를 콘센트에 계속 뽑지 않고 놔두면 대기전력이 미세하게 소모된다.", answer: "O", explanation: "맞아요! 충전을 마친 뒤에는 충전기 플러그를 뽑아두어야 대기 전력 낭비를 막을 수 있습니다." },
    { id: 81, question: "스티로폼 상자에 비닐 테이프와 운송장이 그대로 붙어있어도 재활용이 잘 진행된다.", answer: "X", explanation: "틀려요! 스티로폼 상자의 박스테이프와 운송장을 완전히 떼어내 깨끗한 상태로 버려야 재활용됩니다." },
    { id: 82, question: "학교 주변이나 길거리 쓰레기를 주우면 비에 쓸려 바다로 들어가는 해양 쓰레기를 줄일 수 있다.", answer: "O", explanation: "맞아요! 길거리의 쓰레기가 배수구를 타고 바다로 가기 전에 주워내면 바다 생태계를 보호합니다." },
    { id: 83, question: "무분별하게 숲의 나무를 베어내면 지구의 온실가스 흡수 능력이 떨어져 기후위기가 심해진다.", answer: "O", explanation: "맞아요! 숲은 지구의 허파로서 탄소를 마시고 산소를 주는 고마운 곳이므로 잘 보호해야 합니다." },
    { id: 84, question: "버려진 에어팟, 휴대폰, 전자장난감 같은 소형 가전은 소형가전 전용 수거함에 버려야 한다.", answer: "O", explanation: "맞아요! 소형 가전제품 안에는 리튬 배터리와 귀금속 자원이 들어있어 전용 수거함에 버려야 재활용됩니다." },
    { id: 85, question: "베이킹소다나 구연산 같은 천연 세제를 사용하면 하천 수질 오염을 크게 줄일 수 있다.", answer: "O", explanation: "맞아요! 화학 계면활성제가 적은 친환경 천연 세제를 쓰면 물속 미생물과 물고기가 안전해집니다." },
    { id: 86, question: "차를 세워두었을 때 시동을 계속 켜놓는 공회전은 연비를 높여주는 좋은 방법이다.", answer: "X", explanation: "틀려요! 자동차 공회전은 쓸데없이 기름을 태우고 매연과 온실가스를 배출하므로 시동을 꺼야 합니다." },
    { id: 87, question: "종이 상자를 버릴 때는 접어서 납작하게 만들어 배출해야 부피를 줄이고 수거가 쉽다.", answer: "O", explanation: "맞아요! 박스를 펼치고 테이프를 뗀 뒤 펴서 배출하면 운반차량 부피도 줄고 수거가 용이해집니다." },
    { id: 88, question: "지구 온난화로 바닷물 기온이 올라가면 산호초가 하얗게 말라 죽는 '백화현상'이 발생한다.", answer: "O", explanation: "맞아요! 바다 온도가 높아지면 산호가 생명력을 잃고 하얗게 죽어 바다 생물들의 집이 파괴됩니다." },
    { id: 89, question: "재활용 마크가 표기되어 있다면 이물질이 잔뜩 묻어있어도 모두 재활용된다.", answer: "X", explanation: "틀려요! 음식물이나 양념이 오염된 상태라면 재활용되지 못하고 매립되거나 소각됩니다." },
    { id: 90, question: "스마트폰에서 안 쓰는 앱을 지우고 메일함을 정리하는 것도 '디지털 탄소'를 줄이는 행동이다.", answer: "O", explanation: "맞아요! 데이터 센터를 가동할 때도 전기가 대량 소모되므로 디지털 정리가 탄소 절감에 기여합니다." },
    { id: 91, question: "우리 동네나 가까운 지역에서 자란 농산물(로컬 푸드)을 먹으면 푸드 마일리지와 탄소가 줄어든다.", answer: "O", explanation: "맞아요! 멀리서 수송되어 오는 비행기나 배의 탄소 배출을 줄여 신선하고 친환경적인 음식을 먹을 수 있습니다." },
    { id: 92, question: "플라스틱 페트병의 뚜껑은 크기가 작아 분리수거함에서 따로 모아 내면 새 자원이 된다.", answer: "O", explanation: "맞아요! 병뚜껑 같은 작은 플라스틱을 따로 모아 기부하면 예쁜 업사이클링 생활용품으로 탄생합니다." },
    { id: 93, question: "일회용 종이컵 안쪽에는 방수용 비닐(PE) 코팅이 되어 있어 생각보다 재활용률이 낮다.", answer: "O", explanation: "맞아요! 종이와 비닐을 분리하기 까다로워 대부분 소각되므로 텀블러를 쓰는 것이 제일 좋습니다." },
    { id: 94, question: "냉장고 속에 음식을 100% 꽉 채워두어야 냉기가 달아나지 않아 전력이 아껴진다.", answer: "X", explanation: "틀려요! 냉장고는 60~70% 정도만 채워야 냉기 순환이 잘 되어 전력을 훨씬 덜 소모합니다." },
    { id: 95, question: "버려지는 쓰레기에 아이디어와 디자인을 더해 새로운 멋진 제품으로 만드는 것을 '업사이클링(새활용)'이라고 한다.", answer: "O", explanation: "맞아요! 폐현수막으로 가방을 만들거나 폐타이어로 신발을 만드는 등 가치를 높이는 활동입니다." },
    { id: 96, question: "올바른 쓰레기 분리배출 4대 원칙은 '비운다, 헹군다, 분리한다, 섞지 않는다'이다.", answer: "O", explanation: "맞아요! 깨끗하게 비우고, 씻고, 이물질을 분리해서 모으면 훌륭한 재생 자원이 됩니다." },
    { id: 97, question: "미세먼지가 심한 날에는 실내 공기 환기를 하루 종일 단 1번도 하지 않는 것이 안전하다.", answer: "X", explanation: "틀려요! 미세먼지가 높더라도 실내 오염물질 축적을 막기 위해 하루 2~3번 짧게 환기 후 공기청정기를 써야 합니다." },
    { id: 98, question: "가전제품에 붙어있는 '에너지 절약 마크'는 대기 전력을 효과적으로 차단하는 제품임을 알려준다.", answer: "O", explanation: "맞아요! 에너지 절약 마크가 부착된 상품은 쓰지 않을 때 전력 손실을 줄여주는 우수 상품입니다." },
    { id: 99, question: "실내 공장에서 석탄이나 가스를 태울 때 생성되는 유해 가스로 발생한 산성비는 수질과 토양을 오염시킨다.", answer: "O", explanation: "맞아요! 대기 오염물질이 빗물에 녹아 내리는 산성비는 삼림과 하천을 오염시켜 자연에 해를 입힙니다." },
    { id: 100, question: "우리 모두가 생활 속에서 작은 환경 보호를 실천하면 깨끗하고 아름다운 지구를 만들 수 있다.", answer: "O", explanation: "맞아요! 우리 한 사람 한 사람의 소중한 환경 실천이 모여 푸른 미래를 만들어 나갑니다! 🌱" }
  ]
};

// ==========================================
// 2. AUDIO SYNTHESIZER (Web Audio API)
// ==========================================
class SoundFX {
  constructor() {
    this.ctx = null;
    this.muted = false;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playClick() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(520, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.05);
    gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.05);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.05);
  }

  playOptionSelect() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(659.25, this.ctx.currentTime); // E5
    gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.08);
  }

  playCorrect() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq;
      const startTime = this.ctx.currentTime + idx * 0.08;
      gain.gain.setValueAtTime(0.25, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.3);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(startTime);
      osc.stop(startTime + 0.3);
    });
  }

  playWrong() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(220, this.ctx.currentTime);
    osc.frequency.setValueAtTime(180, this.ctx.currentTime + 0.1);
    gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.25);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.25);
  }

  playMelodyTune(onComplete) {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const melody = [
      { f: 392.00, d: 0.35 }, { f: 440.00, d: 0.35 }, { f: 523.25, d: 0.6 }, { f: 523.25, d: 0.35 },
      { f: 587.33, d: 0.35 }, { f: 659.25, d: 0.6 }, { f: 587.33, d: 0.35 }, { f: 523.25, d: 0.7 }
    ];

    let now = this.ctx.currentTime;
    melody.forEach(note => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = note.f;
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + note.d);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + note.d);
      now += note.d + 0.05;
    });

    if (onComplete) {
      setTimeout(onComplete, (now - this.ctx.currentTime) * 1000);
    }
  }

  playApplause() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;

    // 1. Multi-clap noise bursts to simulate enthusiastic audience applause
    const sampleRate = this.ctx.sampleRate;
    const clapLen = Math.floor(sampleRate * 0.05); // 50ms per clap pulse
    const clapBuffer = this.ctx.createBuffer(1, clapLen, sampleRate);
    const data = clapBuffer.getChannelData(0);
    for (let i = 0; i < clapLen; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (clapLen * 0.25));
    }

    // Schedule ~70 randomized clapping pulses over 2.5 seconds
    for (let i = 0; i < 70; i++) {
      const time = now + Math.random() * 2.2;
      const src = this.ctx.createBufferSource();
      src.buffer = clapBuffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 700 + Math.random() * 1600;
      filter.Q.value = 1.0 + Math.random() * 1.5;

      const gain = this.ctx.createGain();
      const vol = 0.12 + Math.random() * 0.22;
      gain.gain.setValueAtTime(vol, time);
      gain.gain.exponentialRampToValueAtTime(0.001, time + 0.05);

      src.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      src.start(time);
    }

    // 2. Triumphant Fanfare Arpeggio
    const fanfareNotes = [
      { f: 523.25, t: 0, d: 0.2 },    // C5
      { f: 659.25, t: 0.15, d: 0.2 }, // E5
      { f: 783.99, t: 0.3, d: 0.2 },  // G5
      { f: 1046.50, t: 0.45, d: 0.7 } // C6
    ];

    fanfareNotes.forEach(note => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(note.f, now + note.t);

      gain.gain.setValueAtTime(0.3, now + note.t);
      gain.gain.exponentialRampToValueAtTime(0.001, now + note.t + note.d);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + note.t);
      osc.stop(now + note.t + note.d);
    });
  }
}

const sfx = new SoundFX();

// ==========================================
// 3. GAME STATE & RANDOM SELECTION
// ==========================================
function getRandomQuestions(allQuestions, count = 10) {
  const oList = allQuestions.filter(q => q.answer === 'O');
  const xList = allQuestions.filter(q => q.answer === 'X');

  const shuffle = (arr) => {
    const list = [...arr];
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
  };

  const shuffledO = shuffle(oList);
  const shuffledX = shuffle(xList);

  const half = Math.floor(count / 2);
  const selected = [
    ...shuffledO.slice(0, half),
    ...shuffledX.slice(0, count - half)
  ];

  let finalQuestions = shuffle(selected);

  // Prevent more than 2 consecutive same answers for better variety
  for (let attempts = 0; attempts < 15; attempts++) {
    let has3InARow = false;
    for (let i = 0; i < finalQuestions.length - 2; i++) {
      if (finalQuestions[i].answer === finalQuestions[i+1].answer && 
          finalQuestions[i+1].answer === finalQuestions[i+2].answer) {
        has3InARow = true;
        break;
      }
    }
    if (!has3InARow) break;
    finalQuestions = shuffle(selected);
  }

  return finalQuestions;
}

const state = {
  questions: [], // 1회 세션당 추출된 10문제
  currentIndex: 0,
  score: 0,
  correctCount: 0,
  timeRemaining: 300, // 5분
  timerInterval: null,
  userAnswers: {}, // Map questionIndex -> chosen answer 'O' | 'X'
  isAnswered: {}, // Map questionIndex -> boolean
  isCompleted: false
};

// ==========================================
// 4. AUTO-SCALING KIOSK ENGINE
// ==========================================
function setupAutoScaling() {
  const stage = document.getElementById('app-stage');
  if (!stage) return;

  function updateScale() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const scaleX = windowWidth / 1080;
    const scaleY = windowHeight / 1920;
    const scale = Math.min(scaleX, scaleY);

    stage.style.transform = `scale(${scale})`;
  }

  window.addEventListener('resize', updateScale);
  updateScale();
}

// ==========================================
// 5. VIEW RENDER ENGINE
// ==========================================

function initGameSession() {
  state.questions = getRandomQuestions(QUIZ_DATA.questions, 10);
  state.currentIndex = 0;
  state.score = 0;
  state.correctCount = 0;
  state.timeRemaining = 300; // 5분
  state.userAnswers = {};
  state.isAnswered = {};
  state.isCompleted = false;

  startTimer();
  renderMainGameUI();
}

function startTimer() {
  if (state.timerInterval) clearInterval(state.timerInterval);
  state.timerInterval = setInterval(() => {
    state.timeRemaining--;
    updateTimerDisplay();

    if (state.timeRemaining <= 0) {
      clearInterval(state.timerInterval);
      sfx.playWrong();
      showResultModal();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const timerBadge = document.getElementById('timer-pill-badge');
  if (timerBadge) {
    const mins = Math.floor(state.timeRemaining / 60);
    const secs = state.timeRemaining % 60;
    const timeStr = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    
    timerBadge.innerHTML = `⏱ 남은 시간 ${timeStr}`;
    
    if (state.timeRemaining <= 30) {
      timerBadge.classList.add('warning');
    } else {
      timerBadge.classList.remove('warning');
    }
  }
}

function renderMainGameUI() {
  const qData = state.questions[state.currentIndex];
  const totalQ = state.questions.length;
  const main = document.getElementById('view-container');
  const footer = document.getElementById('app-footer');

  const selectedChoice = state.userAnswers[state.currentIndex] || null;
  const answered = state.isAnswered[state.currentIndex] || false;
  const isCorrect = answered && selectedChoice === qData.answer;

  const imgOSrc = selectedChoice === 'O' ? '/image_o_2.png' : '/image_o-1.png';
  const imgXSrc = selectedChoice === 'X' ? '/image_x_2.png' : '/image_x-1.png';

  // Chalkboard Question Content
  const chalkboardContentHtml = `
    <!-- Question Number Badge -->
    <div class="chalk-header-badge-row">
      <span class="chalk-badge-qnum">문제 ${state.currentIndex + 1} / ${totalQ}</span>
    </div>

    <!-- Question Text Card -->
    <div class="chalk-question-box">
      <p class="chalk-question-text">
        "${qData.question}"
      </p>
    </div>

    <!-- Answer Feedback & Detailed Educational Explanation Banner -->
    ${answered ? `
      <div class="chalk-explanation-box ${isCorrect ? 'exp-correct' : 'exp-wrong'}">
        <div class="exp-header">
          <span class="exp-icon">${isCorrect ? '🎉' : '💡'}</span>
          <span class="exp-status-text">${isCorrect ? '정답입니다!' : '아쉽네요! (정답: ' + qData.answer + ')'}</span>
        </div>
        <p class="exp-body-text">
          ${qData.explanation}
        </p>
      </div>
    ` : ''}
  `;

  main.innerHTML = `
    <!-- Title Banner Area -->
    <div class="title-banner-wrapper">
      <div class="title-center-block">
        <img src="/image12.png" alt="환경보호 OX퀴즈" class="title-text-img" referrerPolicy="no-referrer">
        <div id="timer-pill-badge" class="timer-pill-badge">
          ⏱ 남은 시간 05:00
        </div>
      </div>
    </div>

    <!-- Main Green Chalkboard -->
    <div class="chalkboard-container">
      ${chalkboardContentHtml}

      <!-- Chalkboard Bottom Ledge Tray -->
      <div class="chalkboard-tray">
        <div class="tray-eraser"></div>
        <div class="tray-chalks-row">
          <div class="chalk-stick chalk-white"></div>
          <div class="chalk-stick chalk-yellow"></div>
          <div class="chalk-stick chalk-pink"></div>
          <div class="chalk-stick chalk-blue"></div>
        </div>
      </div>
    </div>

    <!-- Bottom O / X Choice Selection Box Tray (칠판 아래 O / X 선택칸) -->
    <div class="ox-selection-tray">
      <div class="ox-buttons-grid">
        <button id="btn-choice-o" class="ox-btn ox-btn-o ${selectedChoice === 'O' ? 'selected' : ''} ${answered && qData.answer === 'O' ? 'is-answer' : ''}">
          <img src="${imgOSrc}" alt="O" class="ox-img" referrerPolicy="no-referrer">
        </button>

        <button id="btn-choice-x" class="ox-btn ox-btn-x ${selectedChoice === 'X' ? 'selected' : ''} ${answered && qData.answer === 'X' ? 'is-answer' : ''}">
          <img src="${imgXSrc}" alt="X" class="ox-img" referrerPolicy="no-referrer">
        </button>
      </div>

      <!-- Control Buttons Row directly under OX Tray -->
      <div class="keypad-actions-row">
        <button id="btn-next-q" class="ctrl-btn ctrl-btn-pri" ${!answered ? 'disabled style="opacity: 0.5; cursor: not-allowed;"' : ''}>
          <span>${state.currentIndex < totalQ - 1 ? '다음 문제' : '결과 보기'}</span>
        </button>
      </div>
    </div>
  `;

  updateTimerDisplay();
  footer.innerHTML = '';
  attachEventHandlers();
}

function handleAnswerSelection(choice) {
  const qData = state.questions[state.currentIndex];
  state.userAnswers[state.currentIndex] = choice;
  state.isAnswered[state.currentIndex] = true;

  const isCorrect = choice === qData.answer;

  if (isCorrect) {
    sfx.playCorrect();
    triggerCelebrationConfetti();
    state.correctCount++;
    state.score += 10;
    showToast("정답입니다! 🎉👏", false);
  } else {
    sfx.playWrong();
    showToast("아쉬워요! 💡", true);
  }

  renderMainGameUI();
}

function attachEventHandlers() {
  const totalQ = state.questions.length;

  // O Button Click
  const btnO = document.getElementById('btn-choice-o');
  if (btnO) {
    btnO.addEventListener('click', () => {
      sfx.playOptionSelect();
      handleAnswerSelection('O');
    });
  }

  // X Button Click
  const btnX = document.getElementById('btn-choice-x');
  if (btnX) {
    btnX.addEventListener('click', () => {
      sfx.playOptionSelect();
      handleAnswerSelection('X');
    });
  }

  // Prev Button
  const btnPrev = document.getElementById('btn-prev-q');
  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      if (state.currentIndex > 0) {
        sfx.playClick();
        state.currentIndex--;
        renderMainGameUI();
      }
    });
  }

  // Next Question or Result Button
  const btnNext = document.getElementById('btn-next-q');
  if (btnNext) {
    btnNext.addEventListener('click', () => {
      if (btnNext.disabled || btnNext.dataset.submitting === 'true' || document.querySelector('.result-overlay')) return;

      sfx.playClick();
      if (state.currentIndex < totalQ - 1) {
        state.currentIndex++;
        renderMainGameUI();
      } else {
        btnNext.disabled = true;
        btnNext.dataset.submitting = 'true';
        btnNext.style.opacity = '0.5';
        btnNext.style.cursor = 'not-allowed';

        if (state.timerInterval) clearInterval(state.timerInterval);
        showResultModal();
      }
    });
  }

  // Reset Selection Button
  const btnReset = document.getElementById('btn-reset-q');
  if (btnReset) {
    btnReset.addEventListener('click', () => {
      sfx.playClick();
      delete state.userAnswers[state.currentIndex];
      delete state.isAnswered[state.currentIndex];
      renderMainGameUI();
    });
  }
}

function showToast(message, isWrong = false) {
  const stage = document.getElementById('app-stage');
  if (!stage) return;

  const existingToast = document.querySelector('.game-toast-popup');
  if (existingToast) existingToast.remove();

  const toast = document.createElement('div');
  toast.className = `game-toast-popup ${isWrong ? 'wrong-toast' : 'success-toast'}`;
  toast.innerHTML = `
    <div class="toast-icon">${isWrong ? '💡' : '💯'}</div>
    <div class="toast-text">${message}</div>
  `;

  stage.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('fade-out');
    setTimeout(() => {
      if (toast.parentNode) toast.remove();
    }, 400);
  }, 700);
}

function showResultModal() {
  const stage = document.getElementById('app-stage');
  if (!stage) return;

  if (document.querySelector('.result-overlay')) return;

  const totalQ = state.questions.length || 10;
  const finalScore = Math.round((state.correctCount / totalQ) * 100);

  if (finalScore === 100) {
    sfx.playApplause();
  } else {
    sfx.playMelodyTune();
  }

  let medalIcon = '🏆';
  let evalText = '지구 수호 어린이 박사!';
  if (finalScore === 100) {
    medalIcon = '🥇';
    evalText = '환경 보호 완벽 Master!';
  } else if (finalScore >= 70) {
    medalIcon = '🥈';
    evalText = '멋진 지구 지킴이!';
  } else {
    medalIcon = '🥉';
    evalText = '더 깨끗한 지구를 위해 재도전해보세요!';
  }

  const modalHtml = `
    <div class="result-overlay">
      <div class="result-dialog">
        <div class="result-trophy">${medalIcon}</div>
        <h2 class="result-title-text">${evalText}</h2>
        
        <div class="result-score-big">${finalScore} 점</div>
        <div class="result-correct-detail">총 ${totalQ} 문제 중 <b>${state.correctCount}</b> 문제 정답!</div>

        <div style="font-size: 30px; color: #1e3a8a; font-weight: 700; line-height: 1.45; background: #ecfdf5; border: 2px solid #a7f3d0; padding: 24px; border-radius: 20px; width: 100%; text-align: center;">
          지구를 생각하는 따뜻한 마음!<br>
          친구들과 힘을 모아 푸른 지구를 지켜요! 🌱
        </div>

        <div style="display: flex; gap: 20px; width: 100%; margin-top: 20px;">
          <button id="btn-modal-retry" class="ctrl-btn ctrl-btn-pri" style="height: 100px;">
            <span>다시 풀어보기</span>
          </button>
        </div>
      </div>
    </div>
  `;

  stage.insertAdjacentHTML('beforeend', modalHtml);
  triggerCelebrationConfetti();

  const retryBtn = document.getElementById('btn-modal-retry');
  if (retryBtn) {
    retryBtn.addEventListener('click', () => {
      sfx.playClick();
      const overlay = document.querySelector('.result-overlay');
      if (overlay) overlay.remove();
      initGameSession();
    });
  }
}

// ==========================================
// 6. INITIALIZATION & GLOBAL LISTENERS
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  setupAutoScaling();

  // Top-Left Global Circular Back Button
  const btnGlobalBack = document.getElementById('btn-global-back');
  if (btnGlobalBack) {
    btnGlobalBack.addEventListener('click', () => {
      sfx.playClick();
      const overlay = document.querySelector('.result-overlay');
      if (overlay) {
        overlay.remove();
        return;
      }
      if (state.currentIndex > 0) {
        state.currentIndex--;
        renderMainGameUI();
      } else {
        initGameSession();
      }
    });
  }

  // Header Back Button
  const btnBack = document.getElementById('btn-back');
  if (btnBack) {
    btnBack.addEventListener('click', () => {
      sfx.playClick();
      initGameSession();
    });
  }

  // Header Home / Close Button
  const btnClose = document.getElementById('btn-close');
  if (btnClose) {
    btnClose.addEventListener('click', () => {
      sfx.playClick();
      initGameSession();
    });
  }

  // Start initial game session immediately
  initGameSession();
});
