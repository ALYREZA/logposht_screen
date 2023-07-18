import { getCurrentMonthHelpingValues,getCurrentMonthBankValues,getCurrentMonthPiggyBankValues } from "./dataSource";

const depositOptions = [
    {
      "name": "صندوق اضراری",
      "percent": "10",
      "description": "۱۰درصد درآمد را برای هزینه های غیرقابل پیش‌بینی کنار می گذاریم..",
      "icon": "piggy-bank",
    "tag": "emergency_fund",
      "currentMonth": getCurrentMonthPiggyBankValues
    },
    {
      "name": "صندوق پس‌انداز",
      "percent": "5",
      "description": "۵درصد از درآمد را برای پس‌انداز کنار بگذارید",
      "icon": "bank",
      "tag": "savings_fund",
      "currentMonth": getCurrentMonthBankValues
    },
    {
      "name": "صندوق یاری دیگران",
      "percent": "5",
      "description": "۵درصد هم برای کمک به دیگران کنار می گذاریم، .",
      "icon": "handshake-outline",
      "tag": "helping_fund",
      "currentMonth": getCurrentMonthHelpingValues
    }
  ]

export default depositOptions;