import { Controller } from "@hotwired/stimulus"

class HelloController extends Controller {
  [x: string]: any
  static targets = ["result"]
  static values = {
    url: { typ: Object, default: {"e": 112} }
  }
  declare readonly resultTarget: HTMLParagraphElement

  connect(): void {

    this.resultTarget.innerText = "10,000,000"
  }

}

export default HelloController;