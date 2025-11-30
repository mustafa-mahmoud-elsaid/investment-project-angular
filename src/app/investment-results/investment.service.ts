import { Injectable } from '@angular/core';
import type { InvestmentModel, InvestmentResult } from './investment.model';

@Injectable({ providedIn: 'root' })
export class InvestmentService {
  investsData?: Array<InvestmentResult>;

  calculateInvestmentResults(data: InvestmentModel) {
    const annualData: Array<InvestmentResult> = [];

    const { initialInvestment, expectedReturn, annualInvestment, duration } =
      data;

    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    this.investsData = annualData;
    console.log(this.investsData);
  }
}
