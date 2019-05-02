function getTax() {
  // Initialize input variables and basis for calculations.
  let total; // total income after adding two fields in HTML
  let afterTax; // net income after tax
  let taxTaken; // tax contribution
  const income = +document.getElementById('income-work').value;
  const income_other = +document.getElementById('income-other').value;
  const frequency = document.getElementById('frequency').value; // The calendar interval e.g. 1 = Annual
  // Assign document tags to variables
  let frequency_declared = document.getElementById('frequency-declared');
  let income_marker = document.getElementById("income-marker");
  let income_after = document.getElementById("income-after");
  let tax_taken = document.getElementById("tax-taken");
  let tax_bracket = document.getElementById("tax-bracket");
  // Tax Bracket Values
  const personal_allowance_top = 11850;
  const basic_rate_bottom = 11851;
  const basic_rate_top = 34500;
  const higher_rate_bottom = 34501;
  const higher_rate_top = 150000;
  const additional_rate_bottom = 150001;
  // Tax Bracket Percentages
  const basic_rate_percent = 0.2;
  const higher_rate_percent = 0.4;
  const additional_rate_percent = 0.45;

  if (!isNaN(income) && !isNaN(income_other)) {
    total = income + income_other;
      if (total > 0 && total <= personal_allowance_top && frequency === '1') {
        taxTaken = 0;
        frequency_declared.innerHTML = ("Annual Income and Tax");
        income_marker.innerHTML = ("$" + total);
        income_after.innerHTML = ("$" + total);
        tax_taken.innerHTML = ("$" + taxTaken);
        tax_bracket.innerHTML = "Personal Allowance (0%)";
      } else if (total >= basic_rate_bottom && total <= basic_rate_top && frequency === '1') {
        taxTaken = (total - personal_allowance_top) * basic_rate_percent;
        afterTax = total - taxTaken;
        frequency_declared.innerHTML = ("Annual Income and Tax");
        income_marker.innerHTML = ("$" + total);
        income_after.innerHTML = ("$" + afterTax);
        tax_taken.innerHTML = ("$" + taxTaken);
        tax_bracket.innerHTML = "Basic Rate (20%)";
      } else if (total >= higher_rate_bottom && total <= higher_rate_top && frequency === '1') {
        taxTaken = (basic_rate_top - basic_rate_bottom) * basic_rate_percent + (total - higher_rate_bottom) * higher_rate_percent;
        afterTax = total - taxTaken;
        frequency_declared.innerHTML = ("Annual Income and Tax");
        income_marker.innerHTML = ("$" + total);
        income_after.innerHTML = ("$" + afterTax);
        tax_taken.innerHTML = ("$" + taxTaken);
        tax_bracket.innerHTML = "Higher Rate (40%)";
      } else if (total >= additional_rate_bottom && frequency === '1') {
        taxTaken = (basic_rate_top - basic_rate_bottom) * basic_rate_percent + (higher_rate_top - higher_rate_bottom) * higher_rate_percent +
        (total - additional_rate_bottom) * additional_rate_percent;
        afterTax = total - taxTaken;
        frequency_declared.innerHTML = ("Annual Income and Tax");
        income_marker.innerHTML = ("$" + total);
        income_after.innerHTML = ("$" + afterTax);
        tax_taken.innerHTML = ("$" + taxTaken);
        tax_bracket.innerHTML = "Additional Rate (45%)";
      } else if (total > 0 && total <= personal_allowance_top && frequency === '2') {
        taxTaken = 0;
        total /= 12;
        frequency_declared.innerHTML = ("Monthly Income and Tax");
        income_marker.innerHTML = ("$" + total);
        income_after.innerHTML = ("$" + total);
        tax_taken.innerHTML = ("$" + taxTaken);
        tax_bracket.innerHTML = "Personal Allowance (0%)";
      } else if (total >= basic_rate_bottom && total <= basic_rate_top && frequency === '2') {
        taxTaken = (total - personal_allowance_top) * basic_rate_percent;
        afterTax = total - taxTaken;
        total /= 12;
        taxTaken /= 12;
        afterTax /= 12;
        frequency_declared.innerHTML = ("Monthly Income and Tax");
        income_marker.innerHTML = ("$" + total);
        income_after.innerHTML = ("$" + afterTax);
        tax_taken.innerHTML = ("$" + taxTaken);
        tax_bracket.innerHTML = "Basic Rate (20%)";
      } else if (total >= higher_rate_bottom && total <= higher_rate_top && frequency === '2') {
        taxTaken = (basic_rate_top - basic_rate_bottom) * basic_rate_percent + (total - higher_rate_bottom) * higher_rate_percent;
        afterTax = total - taxTaken;
        total /= 12;
        taxTaken /= 12;
        afterTax /= 12;
        frequency_declared.innerHTML = ("Monthly Income and Tax");
        income_marker.innerHTML = ("$" + total);
        income_after.innerHTML = ("$" + afterTax);
        tax_taken.innerHTML = ("$" + taxTaken);
        tax_bracket.innerHTML = "Higher Rate (40%)";
      } else if (total >= additional_rate_bottom && frequency === '2') {
        taxTaken = (basic_rate_top - basic_rate_bottom) * basic_rate_percent + (higher_rate_top - higher_rate_bottom) * higher_rate_percent +
        (total - additional_rate_bottom) * additional_rate_percent;
        afterTax = total - taxTaken;
        total /= 12;
        taxTaken /= 12;
        afterTax /= 12;
        frequency_declared.innerHTML = ("Monthly Income and Tax");
        income_marker.innerHTML = ("$" + total);
        income_after.innerHTML = ("$" + afterTax);
        tax_taken.innerHTML = ("$" + taxTaken);
        tax_bracket.innerHTML = "Additional Rate (45%)";
      } else if (total > 0 && total <= personal_allowance_top && frequency === '3') {
        taxTaken = 0;
        total /= 3;
        frequency_declared.innerHTML = ("Quarterly Income and Tax");
        income_marker.innerHTML = ("$" + total);
        income_after.innerHTML = ("$" + total);
        tax_taken.innerHTML = ("$" + taxTaken);
        tax_bracket.innerHTML = "Personal Allowance (0%)";
      } else if (total >= basic_rate_bottom && total <= basic_rate_top && frequency === '3') {
        taxTaken = (total - personal_allowance_top) * basic_rate_percent;
        afterTax = total - taxTaken;
        total /= 3;
        taxTaken /= 3;
        afterTax /= 3;
        frequency_declared.innerHTML = ("Quarterly Income and Tax");
        income_marker.innerHTML = ("$" + total);
        income_after.innerHTML = ("$" + afterTax);
        tax_taken.innerHTML = ("$" + taxTaken);
        tax_bracket.innerHTML = "Basic Rate (20%)";
      } else if (total >= higher_rate_bottom && total <= higher_rate_top && frequency === '3') {
        taxTaken = (basic_rate_top - basic_rate_bottom) * basic_rate_percent + (total - higher_rate_bottom) * higher_rate_percent;
        afterTax = total - taxTaken;
        total /= 3;
        taxTaken /= 3;
        afterTax /= 3;
        frequency_declared.innerHTML = ("Quarterly Income and Tax");
        income_marker.innerHTML = ("$" + total);
        income_after.innerHTML = ("$" + afterTax);
        tax_taken.innerHTML = ("$" + taxTaken);
        tax_bracket.innerHTML = "Higher Rate (40%)";
      } else if (total >= additional_rate_bottom && frequency === '3') {
        taxTaken = (basic_rate_top - basic_rate_bottom) * basic_rate_percent + (higher_rate_top - higher_rate_bottom) * higher_rate_percent +
        (total - additional_rate_bottom) * additional_rate_percent;
        afterTax = total - taxTaken;
        total /= 3;
        taxTaken /= 3;
        afterTax /= 3;
        frequency_declared.innerHTML = ("Quarterly Income and Tax");
        income_marker.innerHTML = ("$" + total);
        income_after.innerHTML = ("$" + afterTax);
        tax_taken.innerHTML = ("$" + taxTaken);
        tax_bracket.innerHTML = "Additional Rate (45%)";
    }
  }
}