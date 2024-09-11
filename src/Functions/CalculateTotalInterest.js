
function CalculateTotalInterest(principal, annualInterestRate, years) {
    let monthlyInterestRate = annualInterestRate / (12 * 100);
    let numberOfEMIs = years * 12;
    let emi =
      (principal *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, numberOfEMIs)) /
      (Math.pow(1 + monthlyInterestRate, numberOfEMIs) - 1);
    emi = Math.round(emi);
    let totalPayment = emi * numberOfEMIs;
  
    let totalInterest = totalPayment - principal;
  
    return {
      monthly_emi: emi, // Monthly EMI
      total_interest: Math.round(totalInterest), // Total Interest
      total_amount: Math.round(totalPayment), // Total Payment (Principal + Interest)
    };
  }

export default CalculateTotalInterest;