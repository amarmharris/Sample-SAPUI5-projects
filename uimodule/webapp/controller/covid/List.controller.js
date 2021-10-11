sap.ui.define([
    "com/ct/CountdownTimer/controller/BaseController",
    "sap/ui/model/json/JSONModel", 
    'sap/viz/ui5/api/env/Format',
    'sap/viz/ui5/format/ChartFormatter'],
    function (Controller, JSONModel, Format,ChartFormatter) {
        "use strict";

        return Controller.extend("com.ct.CountdownTimer.controller.covid.List", {
//            dataPath: "../../model/data.json",
            dataPath : "https://api.rootnet.in/covid19-in/stats/latest",
            onInit: function () {
                
               
                var dataModel = new JSONModel(this.dataPath);
                this.getView().setModel(dataModel, "Latest");


            }
        });
    });
