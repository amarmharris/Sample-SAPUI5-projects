sap.ui.define([
    "com/ct/CountdownTimer/controller/BaseController",
    "sap/ui/model/json/JSONModel", 
    'sap/viz/ui5/api/env/Format',
    'sap/viz/ui5/format/ChartFormatter'],
    function (Controller, JSONModel, Format,ChartFormatter) {
        "use strict";

        return Controller.extend("com.ct.CountdownTimer.controller.covid.Covid", {
//            dataPath: "../../model/data.json",
            dataPath : "https://api.rootnet.in/covid19-in/stats/history",
            onInit: function () {
                Format.numericFormatter(ChartFormatter.getInstance());
                var formatPattern = ChartFormatter.DefaultPattern;

                var oVizFrame = this.oVizFrame = this.getView().byId("idVizFrame");
                oVizFrame.setVizProperties({
                    plotArea: {
                        dataLabel: {
                            formatString: formatPattern.SHORTFLOAT_MFD2,
                            visible: true
                        }
                    },
                    valueAxis: {
                        label: {
                            formatString: formatPattern.SHORTFLOAT
                        },
                        title: {
                            visible: false
                        }
                    },
                    categoryAxis: {
                        title: {
                            visible: false
                        }
                    },
                    title: {
                        visible: false,
                        text: 'Covid Cases History'
                    }
                });
                var dataModel = new JSONModel(this.dataPath);
                oVizFrame.setModel(dataModel);

                var oPopOver = this.getView().byId("idPopOver");
                oPopOver.connect(oVizFrame.getVizUid());
                oPopOver.setFormatString(formatPattern.STANDARDFLOAT);

            },
            onPressList: function () {
                    this.getOwnerComponent().getRouter().navTo("second-list");
            },
            onPressGraph: function () {
                this.getOwnerComponent().getRouter().navTo("second-pie");
            }
        });
    });
