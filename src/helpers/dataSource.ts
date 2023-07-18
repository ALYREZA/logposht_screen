import { currentMonth, currentYear } from "./date";
import { filter, group, percentage, sum } from "./utility";
import { subtract } from "lodash"

const normalizeLogposht = JSON.parse(window?.logposht || "{}");

const allLogposhtFilter = filter(normalizeLogposht)

const allValueLogposht = sum('value')


const currentMonthData = allLogposhtFilter((item) => item.jMonth === currentMonth && item.jYear === currentYear)

const currentMonthFilter = filter(currentMonthData);

const currentMonthDeposit = currentMonthFilter((item) =>  item.type === 'deposit')

const currentMonthWithdraw = currentMonthFilter((item) =>  item.type === 'withdraw')


const currentMonthDepositFilter = filter(currentMonthDeposit);

const getCurrentMonthBank = currentMonthDepositFilter((item) => item.category === 'savings_fund')
const getCurrentMonthPiggyBank = currentMonthDepositFilter((item) => item.category === 'piggy-bank')
const getCurrentMonthHelping = currentMonthDepositFilter((item) => item.category === 'helping_fund')

const getCurrentMonthBankValues = allValueLogposht(getCurrentMonthBank);
const getCurrentMonthPiggyBankValues = allValueLogposht(getCurrentMonthPiggyBank);
const getCurrentMonthHelpingValues = allValueLogposht(getCurrentMonthHelping);



const getWithdrawValues = allValueLogposht(currentMonthWithdraw)

const getDepositValues = allValueLogposht(currentMonthDeposit)

const currentMonthBalance = subtract(getDepositValues, getWithdrawValues)

const lastWithdraw = currentMonthWithdraw[0].value;

const totalDeposit = percentage(getDepositValues)
const totalWithdraw = percentage(getWithdrawValues)
const percentageDeposit = totalDeposit(currentMonthBalance)


const currentMonthGroup = group(currentMonthWithdraw)

const groupedOnCategory = currentMonthGroup('category')

export {
    totalWithdraw,
    totalDeposit,
    currentMonthData,
    getWithdrawValues,
    getDepositValues,
    currentMonthBalance,
    lastWithdraw,
    percentageDeposit,
    groupedOnCategory,
    getCurrentMonthBankValues,
    getCurrentMonthPiggyBankValues,
    getCurrentMonthHelpingValues
}