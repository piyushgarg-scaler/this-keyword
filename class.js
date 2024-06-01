
class Remote {
    constructor(name) {
        this.name = name;
        this.temp = 28;
    }

    incrementTemp() {
        this.temp++;
    }

    decrementTemp() {
        this.temp--;
    }

    display() {
        console.log(`Remote ${this.name} is set to ${this.temp}`)
    }
}

const r1 = new Remote('white')
const r2 = new Remote('black')

r1.incrementTemp()
r1.incrementTemp()
r1.incrementTemp()
r1.incrementTemp()


r2.decrementTemp()
r2.decrementTemp()
r2.decrementTemp()

r1.display()
r2.display()