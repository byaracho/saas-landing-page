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