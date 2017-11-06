class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction = "up";

  }

  start() {
   let go = setInterval (() => {
    this.update();
  }, 1000);
};

  stop() {
  clearInterval(go); }

  update() {
  this.log(); }

  _passengersEnter() { }

  _passengersLeave() { }

  floorUp() { }

  floorDown() { }

  call() {
   }

  log() {
  console.log("direction " + this.direction + "floor " + this.floor);
};

}
module.exports = Elevator;
