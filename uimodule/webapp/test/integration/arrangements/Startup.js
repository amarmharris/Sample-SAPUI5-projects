sap.ui.define(["sap/ui/test/Opa5"], function (Opa5) {
    "use strict";

    return Opa5.extend("com.ct.CountdownTimer.test.integration.arrangements.Startup", {
        iStartMyApp: function () {
            this.iStartMyUIComponent({
                componentConfig: {
                    name: "com.ct.CountdownTimer",
                    async: true,
                    manifest: true
                }
            });
        }
    });
});
