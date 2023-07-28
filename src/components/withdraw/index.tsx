import { memo } from "preact/compat"
import type { ILogposht } from "../../@types/logposht";
import type{ Dictionary } from "lodash";

type GroupResult = {keys: string[], grouped: Dictionary<ILogposht[]>}


type WithdrawType = {data: GroupResult }

const Withdraw = ({ data}:WithdrawType) => {


    return (<> {Object.entries(data.grouped).map(([key, value]) => (<h2>{key}: {value[0].value }</h2>))} </>)
}


export default memo(Withdraw)