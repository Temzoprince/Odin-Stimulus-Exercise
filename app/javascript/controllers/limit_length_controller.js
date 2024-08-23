import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = [ 'text', 'input' ]
    static classes = [ 'highlight' ]

    connect() {}

    check() {
        if (this.inputTarget.value.length > 40) {
            this.textTarget.textContent = `You have gone over characters: ${50 - this.inputTarget.value.length} left`
        } else {
            this.textTarget.textContent = ''
        }
    }
}