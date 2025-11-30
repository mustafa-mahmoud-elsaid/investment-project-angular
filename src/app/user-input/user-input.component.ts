import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface InvestmentModel {
  initialInvestment: number;
  annualInvestment: number;
  expectedInvestment: number;
  duration: number;
}

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '0';
  @Output() submit = new EventEmitter<InvestmentModel>();
  onSubmit() {
    this.submit.emit({
      initialInvestment: +this.enteredInitialInvestment,
      annualInvestment: +this.enteredAnnualInvestment,
      expectedInvestment: +this.enteredExpectedReturn,
      duration: +this.enteredDuration,
    });
  }
}
