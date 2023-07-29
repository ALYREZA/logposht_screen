import { useCallback, useState } from "preact/hooks";
import BigNumber from "bignumber.js";
type MainType = {data?: number, percentage?: string}

const Main = ({ data = 0, percentage = '' }:MainType) => {
    const [toggle, setToggle] = useState<boolean>(false);

    const changeToggle = useCallback(() => { 
        setToggle((c) => !c)
    },[toggle])

    return (<div onClick={changeToggle} className={'flex w-full select-none bg-slate-600 py-9 text-white items-center justify-center'}><p className={'text-7xl'}>{toggle ? percentage : BigNumber(data).toFormat()}</p></div>);
}



export default Main;