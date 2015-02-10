export class Welcome{
  constructor(){
    this.heading = 'Test';
    this.firstName = 'Vadimir';
    this.lastName = 'Alexeev';
  }

  get fullName(){
    return `${this.firstName} ${this.lastName}`;
  }

  welcome(){
    alert(`Welcome, ${this.fullName}!`);
  }
}