import { Controller } from "@hotwired/stimulus";
import { groupedOnCategory, totalDeposit, totalWithdraw } from "../helpers/dataSource";
import { sum, thousandSeparator } from "../helpers/utility";
import withdrawOptions from "../helpers/withdrawOptions";



class WithdrawController extends Controller {


    connect(): void {
        const { grouped } = groupedOnCategory;
        this.element.innerHTML = '';
        Object.entries(grouped).forEach(([key, value]) => {

            const getValue = sum('value');
            const sumValue = getValue(value);
            const lengthOfGroup = value.length;
            const div = document.createElement('div');
            div.className = `h-5/6 shadow-xl relative flex flex-col rounded-2xl items-center  justify-center px-5 min-w-1/2 mx-3 bg-white`

            const para1 = document.createElement('p');
            para1.className = `absolute top-0 right-0 h-10 flex flex-1 justify-center text-xl rounded-tr-2xl items-center bg-blue-100`;
            const newContent1 = document.createTextNode(withdrawOptions[key].name);
            para1.appendChild(newContent1);

            const iconSet = document.createElement('div');
            iconSet.className = `absolute top-0 right-0 h-10 flex flex-1 justify-center text-xl items-center w-10 bg-gray-300`;
            iconSet.style['mask'] = `url(/icons/svg/${withdrawOptions[key].icon}.svg) no-repeat center`;
            iconSet.style['-webkitMask'] = `url(/icons/svg/${withdrawOptions[key].icon}.svg) no-repeat center`;

            const para2 = document.createElement('p');
            para2.className = `text-4xl text-gray-950`;
            const newContent2 = document.createTextNode(thousandSeparator(String(sumValue)));
            para2.appendChild(newContent2);

            const para3 = document.createElement('p');
            para3.className = `text-xl text-green-300 absolute bottom-0 right-3`;
            const newContent3 = document.createTextNode(String(totalDeposit(sumValue)));
            para3.appendChild(newContent3);

            const para4 = document.createElement('p');
            para4.className = `text-xl text-red-300 absolute bottom-0 left-3`;
            const newContent4 = document.createTextNode(String(totalWithdraw(sumValue)));
            para4.appendChild(newContent4);

            const label = document.createElement('div')
            label.className = `absolute top-0 left-3 h-10 text-gray-300 flex flex-1 justify-center text-xl items-center`;
            const labelNewContent = document.createTextNode(String(lengthOfGroup));
            label.appendChild(labelNewContent);

            div.appendChild(iconSet);
            div.appendChild(para3);
            div.appendChild(para2);
            div.appendChild(para4);
            div.appendChild(label);

            this.element.appendChild(div);

        });

        
        
    }


}


export default WithdrawController;