"use strict";
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
class Dreptunghi {
    constructor(point, lungime, latime, culoare) {
        this.point = point;
        this.lungime = lungime;
        this.latime = latime;
        this.culoare = culoare;
    }
}
class Cerc {
    constructor(point, raza, culoare) {
        this.point = point;
        this.raza = raza;
        this.culoare = culoare;
    }
}
class Pictor {
    constructor(context) { this.context = context; }
    deseneazaDreptunchi(dreptunghi) {
        this.context.fillStyle = dreptunghi.culoare;
        this.context.fillRect(dreptunghi.point.x, dreptunghi.point.y, dreptunghi.lungime, dreptunghi.latime);
    }
    deseneazaCerc(cerc) {
        this.context.arc(cerc.point.x, cerc.point.y, cerc.raza, 0, 360);
        this.context.fillStyle = cerc.culoare;
        this.context.fill();
    }
}
