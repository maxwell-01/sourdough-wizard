import express = require('express');
import createApiResponse from "./formatApiResponse";
import csv = require("csvtojson");

const app = express();
const port = 3001

const csvFilePath='../sampleDistanceData.csv'

app.get('/distancedata', (req: express.Request, res: express.Response) => {
    csv()
        .fromFile(csvFilePath)
        .then((distanceData)=>{
            console.log(distanceData);
            /**
             * [
             *  { id: '1', datetime: '2022-08-06T16:45:47', distance: '300' },
             *  { id: '2', datetime: '2022-08-06T16:46:47', distance: '310' },
             * ]
             */

            if (distanceData.length === 0) {
                res.json(createApiResponse(404, 'No data', distanceData))
            } else {
                res.json(createApiResponse(200, 'distance data retrieved', distanceData))
            }
        })
})
app.listen(port)