function getCurrentYear() {
    const date = new Date();
    return date.getFullYear();
  }
  
  export default function getBudgetForCurrentYear(income, gdp, capita) {
    const incomeYear = `income-${getCurrentYear()}`;
    const gdpYear = `gdp-${getCurrentYear()}`;
    const capitaYear = `capita-${getCurrentYear()}`;
  
    const budget = {
        [incomeYear]: income,
        [gdpYear]: gdp,
        [capitaYear]: capita,
    };
    return budget;
  }