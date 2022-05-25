"use strict";
exports.__esModule = true;
var express = require("express");
var formatApiResponse_1 = require("./formatApiResponse");
var csv = require("csvtojson");
var app = express();
var port = 3001;
var csvFilePath = '../sampleDistanceData.csv';
app.get('/distancedata', function (req, res) {
    csv()
        .fromFile(csvFilePath)
        .then(function (distanceData) {
        console.log(distanceData);
        /**
         * [
         *  { id: '1', datetime: '2022-08-06T16:45:47', distance: '300' },
         *  { id: '2', datetime: '2022-08-06T16:46:47', distance: '310' },
         * ]
         */
        if (distanceData.length === 0) {
            res.json((0, formatApiResponse_1["default"])(404, 'No data', distanceData));
        }
        else {
            res.json((0, formatApiResponse_1["default"])(200, 'distance data retrieved', distanceData));
        }
    });
});
app.listen(port);
