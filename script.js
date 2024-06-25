// 헤더 드롭다운
const dropdownBtn = document.querySelector(".dropdown-toggle");
const dropdownContent = document.querySelector(".dropdown-content");
const toggleArrow = document.querySelector(".arrow");

const toggleDropdown = function () {
    dropdownContent.classList.toggle("show");
    toggleArrow.classList.toggle("rotate");
};


dropdownBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleDropdown();
});


document.documentElement.addEventListener("click", function () {
    if (dropdownContent.classList.contains("show")) {
        toggleDropdown();
    }
});

// 아티클 슬라이드
let pages = 0;
let positionValue = 0;
// const feedbackWidth = document.querySelector(".feedback").clientWidth;

const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")
const feedbacks = document.querySelector(".feedbacks")

function next() {
    if (pages < 2) {
        prevBtn.removeAttribute('disabled')// 뒤로 이동해 더이상 disabled가 아니여서 속성을 삭제한다.
        positionValue -= document.querySelector(".feedback").clientWidth;// feedbackWidth의 증감을 positionValue에 저장한다.
        feedbacks.style.transform = `translateX(${positionValue}px)`;
        // x축으로 positionValue만큼의 px을 이동한다.
        pages += 1; // 다음 페이지로 이동해서 pages를 1증가 시킨다.
    }
    if (pages === 2) { //
        nextBtn.setAttribute('disabled', 'true')// 마지막 장일 때 next버튼이 disabled된다.
    }
}

function back() {
    if (pages > 0) {
        nextBtn.removeAttribute('disabled')
        positionValue += document.querySelector(".feedback").clientWidth;
        feedbacks.style.transform = `translateX(${positionValue}px)`;
        pages -= 1; // 이전 페이지로 이동해서 pages를 1감소 시킨다.
    }
    if (pages === 0) {
        prevBtn.setAttribute('disabled', 'true')// 마지막 장일 때 back버튼이 disabled된다.
    }
}

function init() {  // 초기 화면 상태
    prevBtn.setAttribute('disabled', 'true'); // 속성이 disabled가 된다.
    prevBtn.addEventListener("click", back); // 클릭시 다음으로 이동한다.
    nextBtn.addEventListener("click", next);// 클릭시 이전으로 이동한다.
}
init();

// 디테일 상세보기
const iconRemove = "public/remove.svg"
const iconAdd = "public/add.svg"

const showMoreBtns = document.querySelectorAll(".show-more");
const detailContents = document.querySelectorAll(".detail-content");
const showIcons = document.querySelectorAll(".show-icon");

const toggleShowMore = function (i) {
    let detailContent = detailContents[i]
    let showIcon = showIcons[i]

    detailContents[i].classList.toggle("hidden");
    if (showIcons[i].src.endsWith(iconAdd)) {
        showIcons[i].src = iconRemove
    } else {
        showIcons[i].src = iconAdd
    };
};

for (let i = 0; i < showMoreBtns.length; i++) {
    showMoreBtns[i].addEventListener("click", function (e) {
        e.stopPropagation();
        toggleShowMore(i);
    })
}
