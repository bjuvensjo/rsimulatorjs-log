var expect = require("expect.js");
var logger = require(__filename.replace(/test/, "src").replace(/-test.js$/, ".js"));

describe("getLogger", function () {

    it("getLogger", function () {
        
        expect(logger.getLogger()).to.be.ok();
        
    });
    
    it("getLogger.info", function () {

        expect(logger.getLogger().info).to.be.ok();

    });

});
