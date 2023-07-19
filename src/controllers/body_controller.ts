import { Controller } from "@hotwired/stimulus";
import { normalizeLogposht } from "../helpers/dataSource";

class BodyController extends Controller {
    [x: string]: any

    static targets = ["backdrop"]
    static classes = [ "loading","loaded" ]
    declare readonly backdropTarget: HTMLDivElement;
    
    initialize(): void {
        this.backdropTarget.classList.add(this.loadingClass)
    }

    connect(): void {
        this.backdropTarget.classList.remove(this.loadingClass)
        this.backdropTarget.classList.add(this.loadedClass)
    }

    disconnect(): void {
    }

}


export default BodyController;