'use strict';
// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
// reviews 배열의 index값을 이용해 object 데이터를 가져오기 위해 만든 변수.
// 따라서 이 변수에는 반드시 0 ~ 3 사이의 값만 할당되어야 함. 그 이상의 숫자가 들어오면
// index = 4 인 item이 없기 때문에 하단의 const item = undefined가 되어버림.
let currentItem = 0;

// load initial items
/**
 * DOMContentLoaded 이벤트는 초기 HTML 문서를 완전히 불러오고 분석했을 때 발생함.
 * 스타일 시트, 이미지, 하위 프레임의 로딩은 기다리지 않음.
 * 즉, window에 index.html 파일'만' load되면 해당 콜백함수를 실행하는 것! 
 * 그래서 이거는 처음 화면이 로드될 때 0번 index의 data를 가져와서 첫번째 페이지를 보여주는 콜백함수임.
 */
window.addEventListener('DOMContentLoaded', function(){
  // 똑같은 함수의 내용을 반복해서 쓰기 싫으니 외부 블록에서 함수를 정의해놓고, 그거를 콜백함수 안에서 호출하는 것.
  showPerson();
});

// show person based on item
// parameter로 currentItem 값을 전달받아 review 카드의 내용을 변화시켜주는 함수

function showPerson(){
  const item = reviews[currentItem]; // 이렇게 const item을 정의하는 이유는 매번 reviews[currentItem]을 써서 값을 할당하기 번거로우니까!
  img.src = item.img; // img태그 안에서도 src속성값을 바꾸는 거니까!
  author.textContent = item.name;
  /**
   * textContent vs HTMLElement.innerHTML
   * Element.innerHTML는 이름 그대로 HTML을 반환합니다. 
   * 간혹 innerHTML을 사용해 요소의 텍스트를 가져오거나 쓰는 경우가 있지만, 
   * HTML로 분석할 필요가 없다는 점에서 textContent의 성능이 더 좋습니다.
   * 
   * Node.textContent vs HTMLElement.innerText
   * textContent는 <script>와 <style> 요소를 포함한 모든 요소의 콘텐츠를 가져옵니다. 
   * 반면 innerText는 "사람이 읽을 수 있는" 요소만 처리합니다.
   * textContent는 노드의 모든 요소를 반환합니다. 
   * 그에 비해 innerText는 스타일링을 고려하며, "숨겨진" 요소의 텍스트는 반환하지 않습니다.
   */
  job.textContent = item.job;
  info.textContent = item.text;
}

// show next person
// next-btn 버튼을 누를때마다 currentItem값이 1씩 증가해서 해당 index의 data를 보여줌.

nextBtn.addEventListener('click', function(){
  currentItem++;
  if(currentItem > reviews.length - 1){
    currentItem = 0;
    // index가 3을 넘으면 reviews에 해당하는 value가 존재하지 않음. 따라서 0으로 초기화시키는 것.
  }
  showPerson();
})

// show prev person

prevBtn.addEventListener('click', function(){
  currentItem--;
  if(currentItem < 0){
    currentItem = reviews.length - 1;
    // index가 0보다 작을수는 없음. 따라서 0보다 작아지면 마지막 인덱스(3)으로 넘어갈 수 있도록 함.
  }
  showPerson();
})

// show random person

randomBtn.addEventListener('click', function(){
  // 랜덤 숫자 뽑는거는 colorFlipper 만들때 배웠지? 0~3 사이의 랜덤 실수를 받으려면 배열 길이 수 만큼을 곱해야 함.
  // Math.floor() 함수는 주어진 수 이하의 가장 큰 정수를 return해줌.
  currentItem = Math.floor(Math.random() * reviews.length);
  console.log(currentItem);
  showPerson();
})