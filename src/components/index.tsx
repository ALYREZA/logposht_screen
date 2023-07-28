import type { ILogposht } from "../@types/logposht";
import useMainData from "../hooks/useMainData";
import Main from "./main";
import Withdraw from "./withdraw";

type IndexType = {logposht:ILogposht[] }

const Index = ({ logposht }: IndexType) => {

    const {currentMonthBalance,percentageDeposit,groupedOnCategory } = useMainData(logposht)

        
    return (
        <div className={'flex flex-1 relative flex-col'}>
            <Main data={currentMonthBalance} percentage={percentageDeposit} />
            <Withdraw data={groupedOnCategory} />
        </div>
    );
}

export default Index;