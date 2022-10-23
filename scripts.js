
document.addEventListener("DOMContentLoaded", function () {
    console.log("dom content loaded")
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d')
    const width = canvas.width;
    const height = canvas.height;

    const Walker = function () {
        this.x = width / 2;
        this.y = height / 2;
    };

    Walker.prototype.init = function () {
        ctx.beginPath();
        console.log(this.x, this.y)
        ctx.moveTo(this.x, this.y)
        setInterval(draw, 300)
    }
    Walker.prototype.display = function () {

        ctx.lineTo(this.x, this.y)
        ctx.stroke();
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
        console.log(choice)
    };


    draw = function () {
        w.walk();
        w.display();
    };

    const w = new Walker();
    w.init()
})




