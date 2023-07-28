import { useCallback, useState } from "preact/hooks";
import { memo } from "preact/compat"
type MainType = {data?: number, percentage?: string}

const Main = ({ data = 0, percentage = '' }:MainType) => {
    const [toggle, setToggle] = useState<boolean>(false);

    const changeToggle = useCallback(() => { 
        setToggle((c) => !c)
    },[toggle])

    return (<div onClick={changeToggle} className={'flex w-full bg-red-500 text-white items-center justify-center'}><p className={'text-7xl'}>{toggle ? percentage : data}</p></div>);
}



export default memo(Main);