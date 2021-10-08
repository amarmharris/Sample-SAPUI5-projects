sap.ui.define([
    "com/ct/CountdownTimer/controller/BaseController",
    "sap/ui/model/json/JSONModel"],
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("com.ct.CountdownTimer.controller.covid.Covid", {
            dataPath: "test-resources/sap/viz/demokit/dataset/milk_production_testing_data/revenue_cost_consume",
            onInit: function () {
                Format.numericFormatter(ChartFormatter.getInstance());
                var formatPattern = ChartFormatter.DefaultPattern;
                // set explored app's demo model on this sample
                var oModel = new JSONModel(this.settingsModel);
                oModel.setDefaultBindingMode(BindingMode.OneWay);
                this.getView().setModel(oModel);

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
                        text: 'Revenue by City and Store Name'
                    }
                });
                var dataModel = new JSONModel(this.dataPath + "/betterMedium.json");
                oVizFrame.setModel(dataModel);

                var oPopOver = this.getView().byId("idPopOver");
                oPopOver.connect(oVizFrame.getVizUid());
                oPopOver.setFormatString(formatPattern.STANDARDFLOAT);

            },
            oVizFrame: null,
            onPressList: function () {
                alert("list");
            },
            onPressGraph: function () {
                alert("graph");
            }
        });
    });
