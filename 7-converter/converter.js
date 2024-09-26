const RUB_TO_USD = 0.011;
const RUB_TO_EUR = 0.0099;
const USD_TO_RUB = 90.9;
const USD_TO_EUR = 0.9;
const EUR_TO_RUB = 100.45;
const EUR_TO_USD = 1.1;

const convertCurrency = (sum, originalCurrency, targetCurrency) => {
    originalCurrency = originalCurrency.toUpperCase();
    targetCurrency = targetCurrency.toUpperCase();

    switch (originalCurrency) {
        case 'RUB':
            switch (targetCurrency) {
                case 'USD':
                    return sum *= RUB_TO_USD;
                case 'EUR':
                    return sum *= RUB_TO_EUR;
                default:
                    return null;
            }
        case 'USD':
            switch (targetCurrency) {
                case 'RUB':
                    return sum *= USD_TO_RUB;
                case 'EUR':
                    return sum *= USD_TO_EUR;
                default:
                    return null;
            }
        case 'EUR':
            switch (targetCurrency) {
                case 'RUB':
                    return sum *= EUR_TO_RUB;
                case 'USD':
                    return sum *= EUR_TO_USD;
                default:
                    return null;
            }
        default:
            return null;
    }
}

console.log(convertCurrency(1000, 'rub', 'usd'));
console.log(convertCurrency(1000, 'rub', 'eur'));
console.log(convertCurrency(1000, 'usd', 'rub'));
console.log(convertCurrency(1000, 'usd', 'eur'));
console.log(convertCurrency(1000, 'eur', 'rub'));
console.log(convertCurrency(1000, 'eur', 'usd'));

// function converter(sum, currency, targetCurrency) {
//     const USD = 90;
//     const EUR = 100;

//     currency = currency.toUpperCase();
//     targetCurrency = targetCurrency.toUpperCase();

//     switch (currency) {
//         case 'USD':
//             switch (targetCurrency) {
//                 case 'RUB':
//                     return sum * USD;
//                 case 'EUR':
//                     return (sum * USD) / EUR;
//                 default:
//                     return null;
//             }
//         case 'EUR':
//             switch (targetCurrency) {
//                 case 'RUB':
//                     return sum * EUR;
//                 case 'USD':
//                     return (sum * EUR) / USD;
//                 default:
//                     return null;
//             }
//         case 'RUB':
//             switch (targetCurrency) {
//                 case 'USD':
//                     return sum / USD;
//                 case 'EUR':
//                     return sum / EUR;
//                 default:
//                     return null;
//             }
//         default:
//             return null;
//     }
// }