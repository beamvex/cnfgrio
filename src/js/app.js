const PageTitleController = require('./controllers/pagetitle');

class App {
    constructor () {
        this.pageTitleController = new PageTitleController(this);
    }

    loaded(params) {
        this.pageTitleController.loaded(params);
    }

  }
  
  module.exports = App;