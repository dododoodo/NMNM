AOS.init();
/* 주석부분과 같이 AOS API - Global Setting 가능
AOS.init({
    offset: 120,
    delay: 0,
    duration: 400,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom'
});    
*/

const mouseMove = (e) => {
    // 마우스 좌표값 가져오기
    let mousePageX = e. pageX;
    let mousePageY = e. pageY;

    // 마우스 좌표값 기준점을 가운데로 변경
    let centerPageX = window.innerWidth/2 - mousePageX;
    let centerPageY = window.innerHeight/2 - mousePageY;

    // centerPage 최소값 -100 최대값 100 설정 (! Point)
    let maxPageX = Math.max(-200, Math.min(100, centerPageX));
    let maxPageY = Math.max(-200, Math.min(100, centerPageY));

    // 각도 줄이는 설정
    let anglePageX = maxPageX * 0.1;
    let anglePageY = maxPageY * 0.1;

    // 부드럽게 설정
    let softPageX = softPageY = 0;
    softPageX += (anglePageX - softPageX)* 0.4;
    softPageY += (anglePageY - softPageY)* 0.4;

    // 이미지 움직이기
    const imgMove = document.querySelector(".mouse__img");
    imgMove.style.transform = "perspective(600px) rotateX(" + softPageY + "deg) rotateY(" + -softPageX + "deg)"

};

window.addEventListener("mousemove", mouseMove);
// = document.addEventListener("mousemove", mouseMove);





window.addEventListener('scroll', function() {
    const sec10 = document.getElementById('sec10');
    const color1 = document.getElementById('color1');
    const color2 = document.getElementById('color2');
    const color3 = document.getElementById('color3');

    const sec10Top = sec10.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

if (sec10Top <= screenHeight / 2) {
    color1.classList.add('animation');
    setTimeout(function() {
    color2.classList.add('animation');
    }, 500);
    setTimeout(function() {
    color3.classList.add('animation');
    }, 1000);
} else {
    [color1, color2, color3].forEach(function(element) {
    element.classList.remove('animation');
    void element.offsetWidth; // Reflow to restart animation
    });
}
});

// modal
let modal = document.getElementById("myModal");
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");

document.querySelectorAll('.modal-btn').forEach(item => {
    item.addEventListener('click', event => {
        modal.style.display = "block";
        modalImg.src = event.currentTarget.getAttribute('data-img');

        // 이미지 크기 조절
        modalImg.style.width = '60%'; // 가로 길이
        modalImg.style.height = '60%'; // 세로 길이

        captionText.innerHTML = event.target.alt;
    })
})

let span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
    modal.style.display = "none";
}

// modal slide

let modalContents = ['k1', 'k2', 'k3', 'k4', 'k5', 'k6']; // 모달 컨텐츠 id 목록
let currentIndex = 0; // 현재 표시 중인 모달 컨텐츠의 인덱스

function showNextModalContent() {
  // 현재 모달 컨텐츠를 숨김
  document.getElementById(modalContents[currentIndex]).style.display = 'none';
  
  // 다음 모달 컨텐츠의 인덱스를 계산
  currentIndex = (currentIndex + 1) % modalContents.length;
  
  // 다음 모달 컨텐츠를 표시
  document.getElementById(modalContents[currentIndex]).style.display = 'block';
}

function showPreviousModalContent() {
  // 현재 모달 컨텐츠를 숨김
  document.getElementById(modalContents[currentIndex]).style.display = 'none';
  
  // 이전 모달 컨텐츠의 인덱스를 계산
  currentIndex = (currentIndex - 1 + modalContents.length) % modalContents.length;
  
  // 이전 모달 컨텐츠를 표시
  document.getElementById(modalContents[currentIndex]).style.display = 'block';
}

// 화살표 버튼에 이벤트 리스너를 추가
document.getElementById('nextArrow').addEventListener('click', showNextModalContent);
document.getElementById('prevArrow').addEventListener('click', showPreviousModalContent);

