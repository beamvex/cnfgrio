class PageTitleController {

    constructor (app) {
        this.app = app;
        this.onchange = this.onchange.bind(this);
    }

    onchange() {
        this.pagetitle.innerText = this.pagetitletextbox.value;
    }

    loaded(params) {
        this.pagetitletextbox = document.getElementById('pagetitle-textbox');
        this.pagetitle = document.getElementById('pagetitle');

        this.pagetitletextbox.addEventListener('change', this.onchange);
    }

  }
  
  module.exports = PageTitleController;