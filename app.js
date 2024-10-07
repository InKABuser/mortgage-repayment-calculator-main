const MORTGAGE_AMOUNT = document.getElementById('Amount');
const TERM = document.getElementById('Term');
const INTEREST = document.getElementById('Interest');
const CLEAR = document.getElementsByClassName('clearAll')[0];
const RADIO_1 = document.getElementById('repayment');
const RADIO_2 = document.getElementById('interest-only');
const SUBMIT = document.querySelector('button[type = submit]');
const INSTALLMENT = document.getElementsByClassName('monthly')[0];
const TOTAL = document.getElementsByClassName('total-amount')[0];

CLEAR.addEventListener('click', () => {
    document.querySelector('form').reset;
})


SUBMIT.addEventListener('click', (e) => {
    e.preventDefault();
    let placedAmount = MORTGAGE_AMOUNT.value;
    let termLength = (TERM.value) * 12;
    let perCENT = INTEREST.value / 100;
    let monthlyInterestRate = perCENT / 12;
    let mortgageType;
    let interestOnly = placedAmount * perCENT / 12;
    let repayment = (placedAmount * perCENT) + placedAmount
    if (RADIO_1.checked) {
        mortgageType = repayment;
        let monthlyPay =  placedAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, termLength)) / 
        (Math.pow(1 + monthlyInterestRate, termLength) - 1);
        INSTALLMENT.innerHTML = monthlyPay.toFixed(2);
        TOTAL.innerHTML = (monthlyPay * termLength).toFixed(2);
    } else if (RADIO_2.checked) {
        mortgageType = interestOnly;
        let monthlyPay = mortgageType;
        let totalPay = mortgageType * termLength;
        INSTALLMENT.innerHTML = monthlyPay.toFixed(2);
        TOTAL.innerHTML = totalPay;
    }
    
})