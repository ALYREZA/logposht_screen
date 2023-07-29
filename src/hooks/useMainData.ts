import subtract from "lodash/subtract";
import type { ILogposht } from "../@types/logposht";
import { currentMonth, currentYear } from "../helpers/date";
import { filter, group, percentage, sum } from "../helpers/utility";

type useMainDataType = {value: ILogposht[]}

const useMainData = (logposht: useMainDataType) => {
    
    const allLogposhtFilter = filter(logposht.value)
    const allValueLogposht = sum('value');
    const currentMonthData = allLogposhtFilter((item) => item.jMonth === currentMonth && item.jYear === currentYear)
    
    const currentMonthFilter = filter(currentMonthData);
    
    const currentMonthWithdraw = currentMonthFilter((item) => item.type === 'withdraw')
    const currentMonthDeposit = currentMonthFilter((item) =>  item.type === 'deposit')

    const getDepositValues = allValueLogposht(currentMonthDeposit)
    const getWithdrawValues = allValueLogposht(currentMonthWithdraw)

    const currentMonthBalance = subtract(getDepositValues, getWithdrawValues)

    const totalDeposit = percentage(getDepositValues)
    const percentageDeposit = totalDeposit(currentMonthBalance)
    const totalWithdraw = percentage(getWithdrawValues)

    const currentMonthGroup = group(currentMonthWithdraw)

    const groupedOnCategory = currentMonthGroup('category')

    return { percentageDeposit,totalWithdraw, currentMonthBalance,groupedOnCategory }

}

export default useMainData;