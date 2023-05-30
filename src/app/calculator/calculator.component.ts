import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent  {
  
  Firstvalue="";
  Secondvalue="";
  title:number = 0;
  add()
  {
    this.title=parseInt(this.Firstvalue)+ parseInt(this.Secondvalue);
  }
  sub()
  {
    this.title=parseInt(this.Firstvalue)- parseInt(this.Secondvalue);
  }
  multi()
  {
    this.title=parseInt(this.Firstvalue) * parseInt(this.Secondvalue);
  }
  Div()
  {
    this.title=parseInt(this.Firstvalue) / parseInt(this.Secondvalue);
  }

}
