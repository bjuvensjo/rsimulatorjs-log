var buster = require('buster');
var module = require(__filename.replace(/test/, 'src').replace(/-test.js$/, '.js'));

buster.testCase('module', {

    'getLogger should be a function object': function () {

        var actual = module.getLogger;
        assert(actual);
    
    }

});
