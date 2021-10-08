sap.ui.define([
    "com/ct/CountdownTimer/controller/BaseController",
    "sap/ui/model/json/JSONModel"], 
    function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("com.ct.CountdownTimer.controller.countdown.Countdown", {
        onInit: function() {
            this.timer = {
                "days":0,
                "hours":0,
                "minutes":0,
                "seconds":0
            }
            let myTilesModel=new JSONModel(this.timer);
            this.getView().setModel(myTilesModel, "timer");

            //js function that calls a function based on the time interval
            //implementing this would also a require a function to stop the interval once the timer reaches zero
            setInterval(this.calculateTime.bind(this),1000);

        },
        
        calculateTime: function() {
            let countdownDate = new Date("Dec 31 2021");
            let currentDate = new Date();

            //gets time in number of milliseconds 
            let diff = countdownDate.getTime() - currentDate.getTime();
            
            //gets the number of days remaining
            this.timer.days = Math.floor(diff/(1000*60*60*24));

            //gets the number of hours remaining from the remainder of the previous calculation
            this.timer.hours = Math.floor((diff%(1000*60*60*24))/(1000*60*60));

            this.timer.minutes = Math.floor((diff%(1000*60*60))/(1000*60));

            this.timer.seconds = Math.floor((diff%(1000*60))/(1000));

            this.getView().getModel('timer').setData(this.timer)

        }
    });
});
