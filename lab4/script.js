const book = {
    name: "book",
    author: "author",
    rok: "2000",
}

function infoAboutBook(obj) {
    console.log(`Nazwa: ${obj["name"]}, author: ${obj["author"]}, rok: ${obj["rok"]}`)
}

infoAboutBook(book)

//

class student {
    constructor(firstName, lastName, numerAlbomu, ocena1, ocena2, ocena3) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.numerAlbomu = numerAlbomu;
        this.ocena1 = ocena1;
        this.ocena2 = ocena2;
        this.ocena3 = ocena3;
    }
    sredniaOcena() {
        return (this.ocena1 + this.ocena2 + this.ocena3) / 3;
    }
}

const student1 = new student("Pavlo", "Kowalskiy", "w68149", 5, 4, 5);
console.log(student1.sredniaOcena())


//

class car {
    constructor(marka, model, rok, kolor, speed) {
        this.marka = marka;
        this.model = model;
        this.rok = rok;
        this.kolor = kolor;
        this.speed = speed;
        
    }
    makeSpeedLess(a) {
        this.speed = this.speed - a;
    }
    makeSpeedBigger(a) {
        this.speed = this.speed + a;
    }
    infoAboutCar(obj) {
        return (this.marka + " " + this.model + " (" + this.rok + "), Kolor: " + this.kolor + ", Predkosc: " + this.speed);
    }
}

const car1 = new car("lamborgihni", "Huracan", 2018, "orange", 350);
console.log(car1.infoAboutCar());
car1.makeSpeedBigger(20);
console.log(car1.infoAboutCar());
car1.makeSpeedLess(40);
console.log(car1.infoAboutCar());

///


class recktangle {
    constructor(x1,y1, x2,y2, x3,y3, x4,y4) {
        this.ax = x1;
        this.bx = x2;
        this.cx = x3;
        this.dx = x4;
        this.ay = y1;
        this.by = y2;
        this.cy = y3;
        this.dy = y4;
    }

    pole() {
        let ab = Math.sqrt(Math.pow(this.ax - this.bx, 2) + Math.pow(this.ay - this.by, 2));
        let ad = Math.sqrt(Math.pow(this.ax - this.dx, 2) + Math.pow(this.ay - this.dy, 2));
        return ab * ad;
    }
    isItSquare() {
        let ab = Math.sqrt(Math.pow(this.ax - this.bx, 2) + Math.pow(this.ay - this.by, 2));
        let ad = Math.sqrt(Math.pow(this.ax - this.dx, 2) + Math.pow(this.ay - this.dy, 2));
        if (ab == ad)
            return ("This rectangle is also a square");
        else
            return ("This rectangle isn't' also a square");
    }
}

const rec1 = new recktangle(0, 0, 0, 4, 4, 4, 4, 0);
console.log(rec1.pole());
console.log(rec1.isItSquare());

