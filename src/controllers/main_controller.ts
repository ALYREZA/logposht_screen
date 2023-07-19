import { Controller } from "@hotwired/stimulus"
import { currentMonthBalance, percentageDeposit } from "../helpers/dataSource"
import { thousandSeparator } from "../helpers/utility"


class MainController extends Controller {

  static targets = ["result"]
  declare readonly resultTarget: HTMLParagraphElement
  toggle: boolean = false

  connect(): void {
    this.resultTarget.innerText = percentageDeposit;
    
  }

  changeMe():void {
        
    if (this.toggle) {
      this.resultTarget.innerText = thousandSeparator(currentMonthBalance);
      this.toggle = false;
    } else {
      this.resultTarget.innerText = percentageDeposit;
      this.toggle = true;
    }


  }

}

export default MainController;