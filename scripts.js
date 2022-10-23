
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

    Walker.prototype.display = function () {

        ctx.lineTo(this.x + 5, this.y + 5)
        ctx.stroke();
        console.log(this.x++, this.y++, " this plus plus")
        //setInterval(w.display, 3000)
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

    const w = new Walker();
    walkerPositionInit = function () {
        ctx.beginPath();
        console.log(this.x, this.y)
        ctx.moveTo(this.x, this.y)
        //setInterval(draw, 300)
    }
    draw = function () {
        w.walk();
        w.display();
    };
    walkerPositionInit()

})




