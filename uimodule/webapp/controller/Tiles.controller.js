sap.ui.define([
    "com/ct/CountdownTimer/controller/BaseController",
    "sap/ui/model/json/JSONModel"], 
    function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("com.ct.CountdownTimer.controller.Tiles", {
        onInit: function() {
            let myTilesModel=new JSONModel("../model/tiles.json");
            this.getView().setModel(myTilesModel, "tiles")
        },
        
        press: function(oRoute) {
            this.getOwnerComponent().getRouter().navTo(oRoute);
        }
    });
});
