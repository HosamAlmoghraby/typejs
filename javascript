var firstName = 'Hosam';
var lastName = 'Almoghraby';
var fullName;
function buildName(firstName, lasttName) {
    return firstName + ' ' + lasttName;
}
fullName = buildName(firstName, lastName);
document.body.innerHTML = fullName;
// -----------------------------------------------------------------//
var Name1 = /** @class */ (function () {
    function Name1(firstName1, lastName1) {
        this.firstName1 = firstName1;
        this.lastName1 = lastName1;
    }
    Name1.prototype.buildName = function () {
        this.fullName1 = this.firstName1 + ' ' + this.lastName1;
        return this.fullName1;
    };
    return Name1;
}());
var fullName1 = new Name1('Moh.', 'Sawas');
document.body.innerHTML = fullName1.buildName();
// -----------------------------------------------------------------//
var Name2 = /** @class */ (function () {
    function Name2(firstName2, lastName2) {
        this.firstName2 = firstName2;
        this.lastName2 = lastName2;
    }
    Name2.prototype.buildName = function () {
        this.fullName2 = this.firstName2 + ' ' + this.lastName2;
        return this.fullName2;
    };
    return Name2;
}());
var fullName2 = new Name2('Diaa', 'Alkhatib');
document.body.innerHTML = fullName2.buildName();
