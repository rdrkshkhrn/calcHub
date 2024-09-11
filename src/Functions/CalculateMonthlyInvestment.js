

function CalculateMonthlyInvestment(goalAmount,rateValue,timePeriod){
    const months = timePeriod * 12; // Convert time period to months
     const monthlyRate = rateValue / 12 / 100; // Convert annual rate to monthly rate

     const monthlyInvestment = Math.round(goalAmount * (monthlyRate) / (Math.pow(1 + monthlyRate, months) - 1));

     return {
        monthlyInvestment,
        Total_investment : monthlyInvestment*12*timePeriod,
        Interest_earned :goalAmount - monthlyInvestment*12*timePeriod
     };
}

export default CalculateMonthlyInvestment;