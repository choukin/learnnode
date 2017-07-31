/**
 * Created by dipper on 2017/1/10.
 */
var gravatar = require('gravatar');
var moment = require('moment');
var md = require('markdown-it');
var pkg = require('../package');


moment.locale(pkg.locale);

module.exports = {
    get formNow(){
        return function (date) {
            return moment(date).formNow();
        }
    },
    get gravatar(){
        return gravatar.url;
    },
    get markdown (){
        return function (content) {
            return md.render(content);
        }
    }
}