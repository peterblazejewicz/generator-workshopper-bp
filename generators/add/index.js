'use strict';
var yo = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
//
module.exports = yo.generators.Base.extend({
  constructor: function() {
    yo.generators.Base.apply(this, arguments);
    this.argument('name', {description: 'The name for new exercise', type: String, required: true});
    this.name = this._.camelize(this.name);
    this.log(this.name);
  },
  end: function() {
    this.log('end');
  }
});