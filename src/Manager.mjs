import Employee from "./Employee.mjs";
export default class Manager extends Employee {
  constructor(id, department, basicSalary, factor) {
    super(id, department, basicSalary);
    this.factor = factor;
  }
  getFactor() {
    return this.factor;
  }
  computeSalary() {
    return super.computeSalary() * this.factor;
  }
}
