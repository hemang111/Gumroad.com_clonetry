window.addEventListener("scroll", function () {
    var header = document.getElementById("main_head");
    var headin = document.getElementById("main2");
    var scrollPosition = window.scrollY;

    if (scrollPosition > 200) {
        headin.classList.add("makeit");
    } else {
        headin.classList.remove("makeit");
    }
   
    if (scrollPosition > 200) {
        header.classList.add("fixed-header");
    } else {
        header.classList.remove("fixed-header");
    }
});
