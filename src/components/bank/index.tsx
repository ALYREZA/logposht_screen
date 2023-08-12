import BankItem from "./item"
import { mdiPiggyBank,mdiHandshake,mdiBank }  from '@mdi/js';
type BankType = {
    data: {
        getCurrentMonthBankValues: number
        getCurrentMonthHelpingValues: number
        getCurrentMonthPiggyBankValues: number
    }
}

const Bank = ({ data }: BankType) => {
    
    return (
        <div className={"flex flex-1 flex-col justify-between items-start"}>
            <BankItem icon={mdiBank} money={data.getCurrentMonthBankValues} />
            <BankItem icon={mdiPiggyBank} money={data.getCurrentMonthHelpingValues} />
            <BankItem icon={mdiHandshake} money={data.getCurrentMonthPiggyBankValues} />
        </div>
    );
}

export default Bank;