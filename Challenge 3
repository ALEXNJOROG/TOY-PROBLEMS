function NetSalaryCalculator() {
  
    let basicSalary = parseFloat(prompt("Enter basic salary:"));
    let benefits = parseFloat(prompt("Enter benefits:"));
    
    const taxRate = 0.15; 
    const nhifRate = 0.05;
    const nssfRate = 0.06; 
    
    const grossSalary = basicSalary + benefits;
    
    const payee = grossSalary * taxRate;
    const nhifDeduction = grossSalary * nhifRate;
    const nssfDeduction = grossSalary * nssfRate;
    
    const netSalary = grossSalary - (payee + nhifDeduction + nssfDeduction);
    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`Payee (Tax): ${payee}`);
    console.log(`NHIF Deductions: ${nhifDeduction}`);
    console.log(`NSSF Deductions: ${nssfDeduction}`);
    console.log(`Net Salary: ${netSalary}`);
}


NetSalaryCalculator();
