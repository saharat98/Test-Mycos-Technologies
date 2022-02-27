class employee {
  constructor(firstname, lastname, birthday, startatwork, salary, pdvRate) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthday = birthday;
    this.startatwork = startatwork;
    this.salary = salary;
    this.pdvRate = pdvRate;
  }
  calculatePvdperyear() {
    let datework = new Date(this.startatwork);
    let datenow = new Date();
    let getMountpvd =
      Math.abs(
        datework.getMonth() -
          datenow.getMonth() +
          12 * (datework.getFullYear() - datenow.getFullYear())
      ) - 3;
    if (getMountpvd <= 12) {
      let pvdperMount =
        ((this.salary * 10) / 100) * getMountpvd +
        ((this.salary * this.pdvRate) / 100) * getMountpvd;
      return pvdperMount ;
    } else if (getMountpvd <= 36 && getMountpvd > 12) {
      let pvdperMount =
        ((this.salary * 30) / 100) * getMountpvd +
        ((this.salary * this.pdvRate) / 100) * getMountpvd;
     
      return pvdperMount;
    } else if (getMountpvd <= 60 && getMountpvd > 36) {
      let pvdperMount =
        ((this.salary * 50) / 100) * getMountpvd +
        ((this.salary * this.pdvRate) / 100) * getMountpvd;
      
      return pvdperMount ;
    } else if (getMountpvd > 60) {
      let pvdperMount =
        ((this.salary * 80) / 100) * getMountpvd +
        ((this.salary * this.pdvRate) / 100) * getMountpvd;
     
      return pvdperMount;
    } else {
      return null;
    }
  }
}
module.exports = employee;


