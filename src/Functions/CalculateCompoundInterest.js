
function CalculateCompoundInterest(principal, annualInterestRate, years) {
    // Convert annual interest rate to a decimal
    let rate = annualInterestRate / 100;
  
    // Calculate the maturity amount using the compound interest formula
    let maturityAmount = principal * Math.pow(1 + rate, years);
  
    // Calculate the compound interest
    let compoundInterest = maturityAmount - principal;
  
    // Return both the maturity amount and the compound interest rounded to 2 decimal places
    return {
      total_amount: Math.round(maturityAmount),
      total_interest: Math.round(compoundInterest),
    };
  }

export default CalculateCompoundInterest