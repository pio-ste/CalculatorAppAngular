import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  inputOperation = '';
  result = '';
  operator = '';
  number1 = '';
  number2 = '';
  resultSet = false;
  operatorSet = false;
  number1Number: number;
  number2Number: number;

  clear() {
    this.inputOperation = '';
    this.result = '';
    this.number1 = '';
    this.number2 = '';
    this.operatorSet = false;
    this.resultSet = false;
  }

  clickDigit(button: string){
    if(this.operatorSet == false){
      this.number1 += button;
    }else if(this.operatorSet == true){
      this.number2 += button;
    } else {
      this.inputOperation = 'Error'
    }
    this.inputOperation += button;
  }
  clickOperator(button: string){
    if(button === '/' || button === 'x' || button === '-' || button === '+'){
      this.operator = button;
      this.operatorSet = true;
      if(this.resultSet){
        this.inputOperation = this.result;
      }
    }
    this.inputOperation += button;
  }

  getResult(){
    this.number1Number = parseFloat(this.number1);
    this.number2Number = parseFloat(this.number2);
    if (this.operator === '/') {
      this.result = (this.number1Number / this.number2Number).toString();
      if(this.number2Number === 0){
        this.inputOperation = 'Nie wolno dzielić przez 0';
      }
    } else if (this.operator === 'x') {
      this.result = (this.number1Number * this.number2Number).toString();
    } else if (this.operator === '-') {
      this.result = (this.number1Number - this.number2Number).toString();
    } else if (this.operator === '+') {
      this.result = (this.number1Number + this.number2Number).toString();
    } else {
      this.inputOperation = 'ERROR: Invalid Operation';
    }
    this.resultSet = true;
    this.number2 = '';
    this.number1 = this.result;
  }

}
