

const CalculateSWP = (totalInvestment,annualRate,timePeriod,monthlyWithdrawal) => {
    const months = timePeriod * 12; 
    const monthlyRate = annualRate / 12 / 100; 
  
    let remainingAmount = totalInvestment;
    let totalWithdrawn = 0;
  
    for (let i = 0; i < months; i++) {
      if (remainingAmount > 0) {
        remainingAmount = remainingAmount * (1 + monthlyRate) - monthlyWithdrawal; 
        totalWithdrawn += monthlyWithdrawal;
      }
    }
    totalWithdrawn = Math.round(totalWithdrawn);
    remainingAmount = Math.round(remainingAmount);
    remainingAmount-=totalWithdrawn;
    return {
      totalWithdrawn,
      remainingAmount,
    }
  };

  export default CalculateSWP;