// Get carousel and children
var carousel = $("#s1");
var children = carousel.children();
// Shuffle the children using Fisher-Yates
while (children.length) {
    carousel.append(children.splice(Math.floor(Math.random() * children.length), 1)[0]);
}

$(window).load(function () {
    carousel.endlessScroll({ width: '100%', height: '15em', steps: -2, speed: 40, mousestop: true });
});
carousel.show()
