function calculateLoanRepaymentWithExtraEMI(
    principal,
    rate,
    monthlyEMI,
    tenureMonths,
    extraEmisPerYear,
    emiIncreasePercentagePerYear
  ) {
    const monthlyRate = rate / 12 / 100; // Convert annual interest rate to monthly
    let remainingPrincipal = principal;
    let totalInterestPaid = 0;
    let month = 0;
  
    while (remainingPrincipal > 0 && month < tenureMonths) {
      // Increase EMI annually by the given percentage
      if (month > 0 && month % 12 === 0) {
        monthlyEMI += (monthlyEMI * emiIncreasePercentagePerYear) / 100;
      }
  
      // Calculate interest for the month
      const monthlyInterest = remainingPrincipal * monthlyRate;
      const principalRepayment = monthlyEMI - monthlyInterest;
  
      // Ensure principal repayment doesn't exceed the remaining principal
      if (principalRepayment > remainingPrincipal) {
        totalInterestPaid += monthlyInterest;
        remainingPrincipal = 0;
        break;
      }
  
      // Deduct the principal repayment from the outstanding balance
      remainingPrincipal -= principalRepayment;
      totalInterestPaid += monthlyInterest;
      month++;
  
      // Handle extra EMIs: apply extra payments once a year (at the end of the year)
      if (extraEmisPerYear > 0 && month % 12 === 0) {
        const extraRepayment = monthlyEMI * extraEmisPerYear;
        remainingPrincipal -= extraRepayment;
      }
    }
  
    const newTenureMonths = month;
    const totalAmountPaid = totalInterestPaid + principal;
  
    return {
        month : newTenureMonths,
     // newEMI: monthlyEMI,
     totalEMIPaid: totalAmountPaid.toFixed(2),
      totalInterestPaid: totalInterestPaid.toFixed(2),

      
    };
  }
  
// function calculateLoanRepaymentWithExtraEMI(principal, annualInterestRate, emi, extraEMIsPerYear, emiIncreasePercentage) {
//     let remainingPrincipal = principal;
//     const monthlyInterestRate = annualInterestRate / 12 / 100;
//     let month = 0;
//     let totalInterestPaid = 0;
//     let totalEMIPaid = 0;

//     while (remainingPrincipal > 0) {
//         month++;
        
//         // Calculate interest for the current month
//         let interestForTheMonth = remainingPrincipal * monthlyInterestRate;

//         remainingPrincipal+=interestForTheMonth;

//         totalInterestPaid += interestForTheMonth;
        
        

//         // Apply extra EMIs at the end of every year (12 months)
//         if (month % 12 === 0 && remainingPrincipal > 0) {
//             let extraPayment = emi * extraEMIsPerYear; // Calculate total extra EMIs for the year
//             remainingPrincipal -= extraPayment; // Apply extra EMI
//             totalEMIPaid += extraPayment; // Track the extra EMIs paid

//             // Increase EMI by the specified percentage at the end of each year
//             emi += (emi * emiIncreasePercentage / 100); 
//             console.log(`EMI increased to ₹${emi.toFixed(2)} after year ${month / 12}`);
//         }

//         // Stop if the principal becomes zero or negative
//         if (remainingPrincipal <= 0) {
//             break;
//         }

//         // Output for each month (optional for detailed view)
//         console.log(`Month ${month}: Remaining Principal = ₹${remainingPrincipal.toFixed(2)}`);
//     }

//     return {
//         month,
//         totalEMIPaid: totalEMIPaid.toFixed(2),
//         totalInterestPaid: totalInterestPaid.toFixed(2),
//       };
// }

export default calculateLoanRepaymentWithExtraEMI;
