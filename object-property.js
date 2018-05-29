function Super() {
    this.name = 'super';
}
Super.prototype.sayName = function() {
    console.log(this.name);
}

function Sub() {
    this.name = 'sub';
    this.year = 1;
}
Sub.prototype.sayYear = function() {
    console.log(this.year)
}

