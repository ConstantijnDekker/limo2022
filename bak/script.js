/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */

for (var i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[Math.random() * i | 0]);
}
