import { Injectable, signal } from '@angular/core';
import type { InvestmentModel, InvestmentResult } from './investment.model';

@Injectable({ providedIn: 'root' })
export class InvestmentService {
  investsData = signal<Array<InvestmentResult> | undefined>(undefined);

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
    this.investsData.set(annualData);
  }
}
