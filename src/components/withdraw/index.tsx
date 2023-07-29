import type { ILogposht } from "../../@types/logposht";
import type{ Dictionary } from "lodash";
import { sum } from "../../helpers/utility";
import BigNumber from "bignumber.js";
import Icon from '@mdi/react';
import withdrawOptions from "../../helpers/withdrawOptions";

type GroupResult = {keys: string[], grouped: Dictionary<ILogposht[]>}


type WithdrawType = {data: GroupResult }

const Withdraw = ({ data }: WithdrawType) => {


    return (<div> {Object.entries(data.grouped).map(([key, value]) => {

        const getValue = sum('value');
        const sumValue = getValue(value);

        return (<div className={'flex items-center justify-around my-1 flex-row w-full'}><Icon className={'text-slate-600'} path={withdrawOptions[key].icon} size={3} /> {BigNumber(sumValue).toFormat()}</div>)
        
    })}</div>)
}


export default Withdraw