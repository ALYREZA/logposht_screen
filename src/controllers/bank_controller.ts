import { Controller } from "@hotwired/stimulus";
import depositOptions from "../helpers/depositOption";
import { thousandSeparator } from "../helpers/utility";
import { totalDeposit } from "../helpers/dataSource";

class BankController extends Controller {

    connect(): void {
        this.element.innerHTML = '';
        depositOptions.forEach((item) => {
            const wrapper = document.createElement('div');
            wrapper.className = `h-1/2 w-1/3 flex flex-col items-center justify-evenly`;

            const iconSet = document.createElement('div');
            
                iconSet.className = `h-10 w-10 bg-gray-300`;
                iconSet.style['mask'] = `url(/icons/svg/${item.icon}.svg) no-repeat center`;
                iconSet.style['-webkitMask'] = `url(/icons/svg/${item.icon}.svg) no-repeat center`;
            
            const percentOfTotal = totalDeposit(item.currentMonth);
            const currentAmount = document.createElement('p');
                currentAmount.className = `text-xl`;
            const currentAmountText = document.createTextNode(thousandSeparator(item.currentMonth)+ " " +percentOfTotal);
                currentAmount.appendChild(currentAmountText);
        
            wrapper.appendChild(iconSet);
            wrapper.appendChild(currentAmount);
                
            this.element.appendChild(wrapper);
            
            
        })
    }

}


export default BankController;