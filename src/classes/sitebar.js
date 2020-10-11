export class Sitebar {
    constructor(selector) {
        this.$el = document.querySelector(selector)

        this.init()
    }

    init() {
        this.$el.innerHTML = this.template
    }

    get template() {
        return [
            block('text'),
            block('title')
        ].join('')
    }
}
function block(type) {
    return `
    <form name="${type}">
      <h5>${type}</h5>
      <div class="form-group">
        <input class="form-control form-control-sm" name="value" placeholder="value">
      </div>
      <div class="form-group">
        <input class="form-control form-control-sm" name="styles" placeholder="styles">
      </div>
      <button type="submit" class="btn btn-primary btn-sm">Create</button>
    </form>
    <hr />
  `
}
