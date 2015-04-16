var expect = require("expect.js");
var module = require(__filename.replace(/test/, "src").replace(/-test.js$/, ".js"));

describe("module", function () {

    it("getLogger should be a function object", function () {

        var actual = module.getLogger;
        
        expect(actual).to.be.ok();
        
    });

});
