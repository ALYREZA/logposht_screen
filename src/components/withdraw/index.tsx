import type { ILogposht } from "../../@types/logposht";
import type{ Dictionary } from "lodash";
import { sum } from "../../helpers/utility";
import WithdrawItem from "./item";
import orderBy from "lodash/orderBy";
import { useCallback } from "preact/hooks";

type GroupResult = {keys: string[], grouped: Dictionary<ILogposht[]>}


type WithdrawType = {data: GroupResult, totalDeposit: number }

const Withdraw = ({ data, totalDeposit }: WithdrawType) => {

    const items = Object.entries(data.grouped).map(([key, value]) => {
        const getValue = sum('value');
        const sumValue = getValue(value);
        return ({title: key, total:sumValue })
    });
    const onClickedEvent = useCallback((element: HTMLDivElement | null) => {
        setTimeout(() => { 
            element?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        },100)
    },[]);
    const sorted = orderBy(items, 'total','desc');
    return (
        <div className={'w-full min-h-1/2 overflow-y-scroll'}>
            {sorted.map((item) => <WithdrawItem totalDeposit={totalDeposit} clickedOn={onClickedEvent} key={item.title} sumValue={item.total} title={item.title}  />)}
        </div>
    )
}


export default Withdraw