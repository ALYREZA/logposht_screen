import BigNumber from "bignumber.js";
import { useCallback, useRef, useState } from "preact/hooks";
import Icon from '@mdi/react';
import withdrawOptions from "../../helpers/withdrawOptions";
import { percentage } from "../../helpers/utility";

type WithdrawItemType = {totalDeposit: number,sumValue: number, title: string, clickedOn: (id: HTMLDivElement| null) => void}

type SmallType = {icon: string, value: number,totalDeposit: number }
type BigType = {value: number, title: string}
const Small = ({ icon, value, totalDeposit }:SmallType) => (
        <>
            <div className={'flex flex-row'}>
                <Icon className={'text-gray-600'} path={withdrawOptions[icon].icon} size={1} />
            </div>
            <p className={'text-gray-600'}>
                {percentage(totalDeposit)(value)}
            </p>
        </>
    )


const Big = ({value, title}: BigType) => (
    <div className={'h-full flex flex-1 flex-col items-center justify-between'}>
        <h1 className={'text-2xl text-center'}>{withdrawOptions[title].name}</h1>
        <h2 className={'text-6xl text-center'}>{BigNumber(value).toFormat()}</h2>
    </div>
)


const WithdrawItem = ({ sumValue, title,clickedOn, totalDeposit }:WithdrawItemType) => {
    const [collapse, setToCollapse] = useState(false);
    const itemRed = useRef<HTMLDivElement>(null)
    const clickMe = useCallback(() => {
        setToCollapse((cnt) => !cnt)
        clickedOn(itemRed?.current)
    }, [])
    
    const collapseClass = collapse ? 'h-full' : 'h-10';

    return (
        <div ref={itemRed} onClick={clickMe} className={`flex ${collapseClass} justify-between px-2 items-center my-2 border-b border-slate-200`}>
            {collapse ? <Big title={title} value={sumValue} /> :
                <Small icon={title} value={sumValue} totalDeposit={totalDeposit} />}
        </div>
    );
}


export default WithdrawItem;