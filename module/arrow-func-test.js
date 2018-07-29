function Timer() {
  this.a = 0;

  setTimeout(function() {
    console.log(this.a);
    this.a++;
    console.log(this.a);
  }, 1000);
}

const timer = new Timer();

console.log(timer.a);
