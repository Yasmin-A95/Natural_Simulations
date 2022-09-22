const Walker = function () {
    this.x = width / 2;
    this.y = width / 2;
};

Walker.prototype.display = function () {
    stroke(0, 0, 0);
    point(this.x, this.y);
};

Walker.prototype.walk = function () {
    let choice = Math.floor(Math.random() * 5);
    if (choice === 0) {
        this.x++;
    } else if (choice === 1) {
        this.x--;
    } else if (choice === 2) {
        this.y++;
    } else {
        this.y--;
    }
};

const w = new Walker();

draw = function () {
    w.walk();
    w.display();
};

canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d')

document.addEventListener("DOMContentLoaded", function () {
    console.log("dom content loaded")
})

