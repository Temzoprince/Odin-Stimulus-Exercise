import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ 'text', 'slide', 'label']
  static classes = [ 'primary', 'visible', 'highlight' ]
  static values = { index: Number, default: 0 }

  connect() {
    this.textTarget.classList.add(this.primaryClass)
  }

  visible() {
    this.textTarget.classList.toggle(this.primaryClass)
  }

  show() {
    this.textTarget.classList.toggle(this.visibleClass)
  }

  mark() {
    this.labelTarget.classList.toggle(this.highlightClass)
  }

  change() {
    if (this.indexValue == 0) {
        this.indexValue++
    } else {
        this.indexValue--
    }
  }

  indexValueChanged() {
    this.hideCurrent()
  }

  hideCurrent() {
    this.slideTargets.forEach((element, index) => {
        element.hidden = index !== this.indexValue
    })
  }
}