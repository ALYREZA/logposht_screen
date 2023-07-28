const now = new Date()
const currentMonth = parseInt(new Intl.DateTimeFormat('en-US-u-ca-persian', {month: '2-digit'}).format(now));
const currentDay = parseInt(new Intl.DateTimeFormat('en-US-u-ca-persian', {day: '2-digit'}).format(now));
const currentYear = parseInt(new Intl.DateTimeFormat('en-US-u-ca-persian', {year: 'numeric'}).format(now));

const lastMonthDate = (currMonth: number,currYear: number) => {
    let lastMonth = currMonth - 1;
    let lastYear = currYear;
    if (lastMonth === 0) {
        lastMonth = 12;
        lastYear = currYear - 1;
    }

    return {lastMonth, lastYear}
}

const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
const firstDayOfWeek = firstDayOfMonth.getDay();
const weekNumber = Math.ceil((currentDay + firstDayOfWeek) / 7);

export { currentMonth,weekNumber,currentYear,lastMonthDate }