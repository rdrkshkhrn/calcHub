
function CalculateSip(monthlyInvestment,timePeriod,rateValue){
    const total_investment = monthlyInvestment * 12 * timePeriod;
    const monthlyRate = rateValue / 12 / 100;
    const months = timePeriod * 12;
    const final_amount = (monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate)) * (1 + monthlyRate);

    return {
      total_investment,
      finalAmount: Math.round(final_amount),
    };
  };

export default CalculateSip