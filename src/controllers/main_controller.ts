import { Controller } from "@hotwired/stimulus"
import { currentMonthBalance, lastWithdraw, percentageDeposit } from "../helpers/dataSource"
import { thousandSeparator } from "../helpers/utility"
import { weekNumber } from "../helpers/date"


class MainController extends Controller {
  [x: string]: any
  static targets = ["result"]
  static values = {
    url: { typ: Object, default: {"e": 112} }
  }
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