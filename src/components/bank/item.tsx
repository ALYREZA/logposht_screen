import Icon from '@mdi/react';

type BankItemType = {
    money: number
    icon: string
}

const BankItem = ({ money, icon }:BankItemType) => {


    return (
        <div className={'h-12 px-2 items-center bg-gray-100 my-1 flex w-full justify-between flex-row'}>
            <Icon className={'text-gray-400'} path={icon} size={1} />
            <h2>{money}</h2>
        </div>
    );
}

export default BankItem;