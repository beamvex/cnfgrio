class PageTitleController {

    constructor (app) {
        this.app = app;
        this.onchange = this.onchange.bind(this);
        this.onkeypress = this.onkeypress.bind(this);
        this.onfocus = this.onfocus.bind(this);
        this.onok = this.onok.bind(this);
        this.oncancel = this.oncancel.bind(this);
        this.hidecontrols = this.hidecontrols.bind(this);
    }

    onchange() {
        
    }

    onkeypress(key) {
        if( key.keyCode == 13 ) {

            this.onok();

        }
    }

    onfocus() {
        this.pagetitletextbox.classList.add('show-border');
        this.pagetitletextbox.classList.remove('innercontrol');
        this.basicaddon2.classList.add('show-it');
        this.pagetitlecontroldropdown.classList.add('display-box');
    }

    onok() {
        //this.pagetitle.innerText = this.pagetitletextbox.value;
        this.hidecontrols();
    }

    oncancel() {
        //this.pagetitletextbox.value = this.pagetitle.innerText;
        this.hidecontrols();
    }

    hidecontrols() {
        this.pagetitletextbox.classList.remove('show-border');
        this.pagetitletextbox.classList.add('innercontrol');
        this.basicaddon2.classList.remove('show-it');
        this.pagetitlecontroldropdown.classList.remove('display-box');
        this.pagetitletextbox.blur();
    }

    loaded(params) {
        this.pagetitlecontroldropdown = document.getElementById('pagetitle-control-dropdown');
        this.pagetitlecontrolcontainer = document.getElementById('pagetitle-control-container');
        this.pagetitlecontainer = document.getElementById('pagetitle-container');
        this.pagetitletextbox = document.getElementById('pagetitle-textbox');
        //this.pagetitle = document.getElementById('pagetitle');
        this.editok = document.getElementById('edit-ok');
        this.editcancel = document.getElementById('edit-cancel');
        this.basicaddon2 = document.getElementById('basic-addon2');
        this.pagetitletextbox.addEventListener('change', this.onchange);
        this.pagetitletextbox.addEventListener('focus', this.onfocus);
        this.pagetitletextbox.addEventListener('keyup', this.onkeypress);

        this.editok.addEventListener('click', this.onok);
        this.editcancel.addEventListener('click', this.oncancel);
    }

  }
  
  module.exports = PageTitleController;