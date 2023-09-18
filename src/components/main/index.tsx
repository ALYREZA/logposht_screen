import { useCallback, useState } from "preact/hooks";
import BigNumber from "bignumber.js";
type MainType = {data?: number, percentage?: string}

const Main = ({ data = 0, percentage = '' }:MainType) => {
    const [toggle, setToggle] = useState<boolean>(true);

    const changeToggle = useCallback(() => { 
        setToggle((c) => !c)
    },[])

    const onToggle = toggle ? percentage : BigNumber(data).toFormat();
    return (
        <div onClick={changeToggle} className={'flex flex-1 w-full select-none py-9 text-black items-center justify-center'}>
            <p className={'text-7xl'}>{onToggle}</p>
        </div>
    );
}



export default Main;