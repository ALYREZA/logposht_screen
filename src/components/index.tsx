import type { ILogposht } from "../@types/logposht";
import useMainData from "../hooks/useMainData";
import Main from "./main";
import Withdraw from "./withdraw";
import Bank from "./bank";

type IndexType = { logposht: { value: ILogposht[] } }

const Index = ({ logposht }: IndexType) => {

    const {currentMonthBalance,percentageDeposit,groupedOnCategory, getCurrentMonthBankValues, getCurrentMonthHelpingValues, getCurrentMonthPiggyBankValues, getDepositValues } = useMainData(logposht)

        
    return (
        <div className={'flex flex-1 h-screen relative flex-col'}>
            <Main data={currentMonthBalance} percentage={percentageDeposit} />
            <Withdraw data={groupedOnCategory} totalDeposit={getDepositValues} />
            <Bank data={{ getCurrentMonthBankValues, getCurrentMonthHelpingValues, getCurrentMonthPiggyBankValues }} />
        </div>
    );
}

export default Index;