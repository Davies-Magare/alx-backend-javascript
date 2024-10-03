function getCurrentYear() {
    const date = new Date();
    return date.getFullYear();
  }
  
  export default function getBudgetForCurrentYear(income, gdp, capita) {
    const budget = {};
    const incomeYear = `income-${getCurrentYear()}`;
    const gdpYear = `gdp-${getCurrentYear()}`;
    const capitaYear = `capita-${getCurrentYear()}`;
  
    budget[incomeYear] = income;
    budget[gdpYear] = gdp;
    budget[capitaYear] = capita;
  
    return budget;
  }