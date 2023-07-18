
export interface ILogposht {
    _id: string,
    value: number,
    type: 'deposit' | 'withdraw',
    category: 'income' | string,
    smsDate?: number,
    weekNumber: number,
    weekYear: number,
    weekDay: number,
    quarter: number,
    smsId: number[],
    dayOfTheYear: number,
    jDay: number,
    jMonth: number,
    jYear:number,
    tags: string[],
    createdAt: Date,
    deletedAt?: Date,
}

declare global {
    interface Window {
      logposht: string;
      mobile: string;
    }
  }