import type { ILogposht } from "../@types/logposht";
import useMainData from "../hooks/useMainData";
import Main from "./main";
import Withdraw from "./withdraw";
import Bank from "./bank";

type IndexType = { logposht: { value: ILogposht[] } }

const Index = ({ logposht }: IndexType) => {

    const {currentMonthBalance,percentageDeposit,groupedOnCategory, getCurrentMonthBankValues, getCurrentMonthHelpingValues, getCurrentMonthPiggyBankValues, getDepositValues } = useMainData(logposht)
    
    const hasLogposht = logposht.value.length > 0;
    return (
        <div className={'flex flex-1 h-screen relative flex-col'}>
            {hasLogposht ? (
                <>
                    <Main data={currentMonthBalance} percentage={percentageDeposit} />
                    <Withdraw data={groupedOnCategory} totalDeposit={getDepositValues} />
                    <Bank data={{ getCurrentMonthBankValues, getCurrentMonthHelpingValues, getCurrentMonthPiggyBankValues }} />
                </>
            ): 
                (
                    <div className={'flex h-full flex-col justify-center text-right justify-start px-5'}>
                        <h1 className={'text-2xl font-bold'}>روش کار </h1>
                        <p>
                            اول روی دکمه + بزنید
                        </p>
                        <p>
                            سپس درأمد خود را وارد کنید
                        </p>
                        <p>
                            بعد هزینه های خود را به مرور وارد کنید
                        </p>
                        <hr className={'my-1 border-2'} />
                        <h2 className={'text-xl font-bold'}> گارانتی میشود </h2>
                        <p>
                            دیتای شما در موبایل خود شما ذخیره میشود
                        </p>
                        <p>
                            انتقال اطلاعات به هیچ نوع سروری یا دیتابیسی صورت نمیگیرد، فقط نمایش اطلاعات به صورت داینامک است که به صورت اوپن‌سورس در گیت‌هاب موجود است
                        </p>
                        <p>
                            در اپ سعی شده به روش کنزین باعث کاهش هزینه های شما شویم
                        </p>
                        <p>
                            حداقل ۴ ماه باید از اپ استفاده کنید و هزینه های خود را وارد کنید تا دیتای لازم برای بودجه بندی داشته باشیم
                        </p>

                    </div>
            )}
    
        </div>
    );
}

export default Index;