

var myHeader = document.getElementById("header");
var isHeaderVisible = true;
var prevScrollPos = window.pageYOffset;


window.addEventListener("scroll", function () {
    var currentScrollPos = window.pageYOffset;

    if (currentScrollPos > prevScrollPos) {
        // 스크롤을 아래로 내릴 때
        if (isHeaderVisible) {
            myHeader.style.top = "-200px";
            isHeaderVisible = false;
        }
    } else {
        // 스크롤을 위로 올릴 때
        if (!isHeaderVisible) {
            myHeader.style.top = "0";
            isHeaderVisible = true;
        }
    }

    prevScrollPos = currentScrollPos;
});

// scroll
