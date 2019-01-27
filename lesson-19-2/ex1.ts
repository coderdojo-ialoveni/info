
class Point {
    x: number
    y: number
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

class Dreptunghi {
    point: Point
    lungime: number
    latime: number
    culoare: string

    constructor(point: Point, lungime: number, latime: number, culoare: string) {
        this.point = point;
        this.lungime = lungime;
        this.latime = latime;
        this.culoare = culoare;
    }
}

class Cerc {
    point: Point
    raza: number
    culoare: string

    constructor(point: Point, raza: number, culoare: string) {
        this.point = point;
        this.raza = raza;
        this.culoare = culoare;
    }
}

class Pictor {
    private context: CanvasRenderingContext2D
    constructor(context: CanvasRenderingContext2D) { this.context = context; }

    deseneazaDreptunchi(dreptunghi: Dreptunghi) {
        this.context.fillStyle = dreptunghi.culoare;
        this.context.fillRect(dreptunghi.point.x, dreptunghi.point.y, dreptunghi.lungime, dreptunghi.latime);
    }

    deseneazaCerc(cerc: Cerc) {
        this.context.arc(cerc.point.x, cerc.point.y, cerc.raza, 0, 360);
        this.context.fillStyle = cerc.culoare;
        this.context.fill();
    }
}
