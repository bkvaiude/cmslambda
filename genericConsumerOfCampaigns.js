'use strict';

console.log('Loading final function');

var ES_HOST = 'search-sid-shaadi-search-mx5f7ddd5bgpoljfmuwanj73ua.ap-south-1.es.amazonaws.com';
var ES_INDEX = 'cluster_male_1';
// var ES_TYPE = 'profiles';
var ES_BODY = '';//{"_source":["_id","spotlight"],"query":{"bool":{"filter":[{"term":{"gender":"Male"}},{"range":{"dateofbirth_f":{"lte":"now-22y\/d","gte":"now-36y\/d+1d"}}},{"range":{"height":{"lte":"61","gte":"54"}}},{"terms":{"maritalstatus":["1"]}},{"range":{"cf_agefrom":{"lte":"29"}}},{"bool":{"should":[{"range":{"cf_ageto":{"gte":"33"}}},{"term":{"cf_ageto":0}}]}},{"range":{"cf_heightfrom":{"lte":"61"}}},{"bool":{"should":[{"range":{"cf_heightto":{"gte":"61"}}},{"term":{"cf_heightto":0}}]}},{"term":{"screened":"Y"}},{"term":{"hidden":"N"}},{"term":{"specialcases":"None"}},{"bool":{"must_not":[{"terms":{"memberlogin":{"index":"cluster_female_1","type":"interactions","id":"cSH54274819","path":"viewed"}}},{"terms":{"memberlogin":{"index":"cluster_female_1","type":"interactions","id":"cSH54274819","path":"dailyrec"}}},{"terms":{"memberlogin":{"index":"cluster_female_1","type":"interactions","id":"cSH54274819","path":"connectsent"}}},{"terms":{"memberlogin":{"index":"cluster_female_1","type":"interactions","id":"cSH54274819","path":"connectrecd"}}},{"terms":{"memberlogin":{"index":"cluster_female_1","type":"interactions","id":"cSH54274819","path":"connectresponded"}}},{"terms":{"memberlogin":{"index":"cluster_female_1","type":"interactions","id":"cSH54274819","path":"accepted"}}},{"terms":{"memberlogin":{"index":"cluster_female_1","type":"interactions","id":"cSH54274819","path":"connect_awaiting_nonfiltered"}}}]}}]}},"post_filter":{"term":{"maritalstatus":"1"}},"sort":[{"member2_dummy7":{"order":"desc"}}],"size":"600","aggs":{"photostatus":{"filter":{"term":{"maritalstatus":"1"}},"aggs":{"filtered_photostatus":{"terms":{"field":"photostatus","size":5000}}}},"recently_joined":{"filter":{"term":{"maritalstatus":"1"}},"aggs":{"17":{"filter":{"range":{"profile_activated":{"gt":"now-1d\/s"}}}},"16":{"filter":{"range":{"profile_activated":{"gt":"now-2d\/s","lte":"now-1d\/s"}}}},"15":{"filter":{"range":{"profile_activated":{"gt":"now-3d\/s","lte":"now-2d\/s"}}}},"14":{"filter":{"range":{"profile_activated":{"gt":"now-4d\/s","lte":"now-3d\/s"}}}},"13":{"filter":{"range":{"profile_activated":{"gt":"now-5d\/s","lte":"now-4d\/s"}}}},"12":{"filter":{"range":{"profile_activated":{"gt":"now-6d\/s","lte":"now-5d\/s"}}}},"11":{"filter":{"range":{"profile_activated":{"gt":"now-7d\/s","lte":"now-6d\/s"}}}},"10":{"filter":{"range":{"profile_activated":{"gt":"now-10d\/s","lte":"now-7d\/s"}}}},"9":{"filter":{"range":{"profile_activated":{"gt":"now-14d\/s","lte":"now-10d\/s"}}}},"8":{"filter":{"range":{"profile_activated":{"gt":"now-15d\/s","lte":"now-14d\/s"}}}},"7":{"filter":{"range":{"profile_activated":{"gt":"now-20d\/s","lte":"now-15d\/s"}}}},"6":{"filter":{"range":{"profile_activated":{"gt":"now-25d\/s","lte":"now-20d\/s"}}}},"5":{"filter":{"range":{"profile_activated":{"gt":"now-30d\/s","lte":"now-25d\/s"}}}},"4":{"filter":{"range":{"profile_activated":{"gt":"now-60d\/s","lte":"now-30d\/s"}}}},"3":{"filter":{"range":{"profile_activated":{"gt":"now-90d\/s","lte":"now-60d\/s"}}}},"2":{"filter":{"range":{"profile_activated":{"gt":"now-120d\/s","lte":"now-90d\/s"}}}},"1":{"filter":{"range":{"profile_activated":{"lte":"now-120d\/s"}}}}}},"search_v3_relevance":{"filter":{"term":{"maritalstatus":"1"}},"aggs":{"16":{"filter":{"range":{"lastlogindate":{"gt":"now-1d\/s"}}}},"15":{"filter":{"range":{"lastlogindate":{"gt":"now-2d\/s","lte":"now-1d\/s"}}}},"14":{"filter":{"range":{"lastlogindate":{"gt":"now-3d\/s","lte":"now-2d\/s"}}}},"13":{"filter":{"range":{"lastlogindate":{"gt":"now-4d\/s","lte":"now-3d\/s"}}}},"12":{"filter":{"range":{"lastlogindate":{"gt":"now-5d\/s","lte":"now-4d\/s"}}}},"11":{"filter":{"range":{"lastlogindate":{"gt":"now-6d\/s","lte":"now-5d\/s"}}}},"10":{"filter":{"range":{"lastlogindate":{"gt":"now-7d\/s","lte":"now-6d\/s"}}}},"9":{"filter":{"range":{"lastlogindate":{"gt":"now-10d\/s","lte":"now-7d\/s"}}}},"8":{"filter":{"range":{"lastlogindate":{"gt":"now-15d\/s","lte":"now-10d\/s"}}}},"7":{"filter":{"range":{"lastlogindate":{"gt":"now-20d\/s","lte":"now-15d\/s"}}}},"6":{"filter":{"range":{"lastlogindate":{"gt":"now-25d\/s","lte":"now-20d\/s"}}}},"5":{"filter":{"range":{"lastlogindate":{"gt":"now-30d\/s","lte":"now-25d\/s"}}}},"4":{"filter":{"range":{"lastlogindate":{"gt":"now-60d\/s","lte":"now-30d\/s"}}}},"3":{"filter":{"range":{"lastlogindate":{"gt":"now-90d\/s","lte":"now-60d\/s"}}}},"2":{"filter":{"range":{"lastlogindate":{"gt":"now-120d\/s","lte":"now-90d\/s"}}}},"1":{"filter":{"range":{"lastlogindate":{"lte":"now-120d\/s"}}}}}},"annualincome":{"filter":{"term":{"maritalstatus":"1"}},"aggs":{"filtered_annualincome":{"terms":{"field":"annualincome.raw","size":5000}}}},"maritalstatus":{"terms":{"field":"maritalstatus.raw","size":5000}},"religion":{"filter":{"term":{"maritalstatus":"1"}},"aggs":{"filtered_religion":{"terms":{"field":"religion.raw","size":5000}}}},"mothertongue":{"filter":{"term":{"maritalstatus":"1"}},"aggs":{"filtered_mothertongue":{"terms":{"field":"mothertongue.raw","size":5000}}}},"countryofresidence":{"filter":{"term":{"maritalstatus":"1"}},"aggs":{"filtered_countryofresidence":{"terms":{"field":"countryofresidence.raw","size":5000}}}},"grew_up_in":{"filter":{"term":{"maritalstatus":"1"}},"aggs":{"filtered_grew_up_in":{"terms":{"field":"grew_up_in.raw","size":5000}}}},"education":{"filter":{"term":{"maritalstatus":"1"}},"aggs":{"filtered_education":{"terms":{"field":"education.raw","size":5000}}}},"working_with":{"filter":{"term":{"maritalstatus":"1"}},"aggs":{"filtered_working_with":{"terms":{"field":"working_with.raw","size":5000}}}},"occupation_area":{"filter":{"term":{"maritalstatus":"1"}},"aggs":{"filtered_occupation_area":{"terms":{"field":"occupation_area.raw","size":5000}}}},"relationship":{"filter":{"term":{"maritalstatus":"1"}},"aggs":{"filtered_relationship":{"terms":{"field":"relationship.raw","size":5000}}}},"smoke":{"filter":{"term":{"maritalstatus":"1"}},"aggs":{"filtered_smoke":{"terms":{"field":"smoke.raw","size":5000}}}},"drink":{"filter":{"term":{"maritalstatus":"1"}},"aggs":{"filtered_drink":{"terms":{"field":"drink.raw","size":5000}}}},"diet":{"filter":{"term":{"maritalstatus":"1"}},"aggs":{"filtered_diet":{"terms":{"field":"diet.raw","size":5000}}}},"a_valid":{"filter":{"term":{"maritalstatus":"1"}},"aggs":{"filtered_a_valid":{"terms":{"field":"a_valid.raw","size":5000}}}}}};
var _ = require('lodash');
var S3StreamLogger = require('s3-streamlogger').S3StreamLogger;
var s3stream = new S3StreamLogger({
             bucket: "cpmslogs",
      access_key_id: "AKIAI7K3NAZM5XSNNRXA",
  secret_access_key: "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"
});
var moment = require('moment-timezone');

function doLogging(extraInfo)
{
    var data = {"messageLevel":"INFO","component":30,"transactionId":0,"APP":"AWS_LAMBDA", "timestamp":moment.tz('Asia/Kolkata').format("YYYY-MM-DD HH:mm:ss")};
    var finalData = _.merge(data, extraInfo);
    var jsonData = JSON.stringify(finalData);
    s3stream.write(jsonData+",");
}

exports.handler = function(event, context, callback) {

//Event  checkout:"batch-processing"started log     
var processStartTime =moment.tz('Asia/Kolkata').format("YYYY-MM-DD HH:mm:ss");      
var t0 = new Date();

    var elasticsearch = require('elasticsearch');
    var Bluebird = require('bluebird');
    // var ELKLogging = require('./logger');
    // ELKLogging.log("INFO", 30, {"APP":"AWS_LAMBDA","checkpoint":"actualLambdaFunction"});



    // var client = new elasticsearch.Client({
    //   host: ES_HOST,
    //   // log: 'trace',
    //   defer: function () {
    //     return Bluebird.defer();
    //   }
    // });

    var batchId = "";
    var memberlogin = "";
    var counter = 0;
    event.Records.forEach(function(record) {
        // Kinesis data is base64 encoded so decode here
        var payload = new Buffer(record.kinesis.data, 'base64').toString('ascii');
        var payloadObject = JSON.parse(payload);
        if(typeof payloadObject.es_data != "undefined")
        {
          var esData = payloadObject.es_data;

          ES_INDEX = esData.es_index;
          ES_BODY = esData.es_body;
          batchId = payloadObject.batchId;
          memberlogin = payloadObject.memberlogin;
        }
        else
        {
          console.log('Failed Decoded payload Data:', payloadObject);
        }

        try
        {        
          doLogging({"batchId":batchId, "memberlogin":memberlogin, "checkpoint":"member-info"});
          sleep(100, function(){//ES profile search
            doLogging({"batchId":batchId, "memberlogin":memberlogin, "checkpoint":"es-sucess-response", "es_total":100, "es_took":100});
            sleep(150, function(){//payload preparation and SES
              doLogging({"batchId":batchId, "memberlogin":memberlogin, "checkpoint":"SES-sucess-response", "response":true});
            });

          });
          
          // client.search({
          //   index: ES_INDEX,
          //   body: ES_BODY
          // }).then(function (resp) {
          //   doLogging({"batchId":batchId, "memberlogin":memberlogin, "checkpoint":"es-sucess-response", "es_total":resp.hits.total, "es_took":resp.took});
          // //log checkpoint:es-sucess-response

          // }, function (err) {
          // //log checkpoint:es-error-response
          //   doLogging({"batchId":batchId, "memberlogin":memberlogin, "checkpoint":"es-error-response", "es_error":err});
          //   console.log("ES Search end with fail ","Error:",err);
          // });
        }
        catch(err)
        {
            doLogging({"batchId":batchId, "memberlogin":memberlogin, "checkpoint":"es-catched-response", "es_error":err});
        }

    });
//Event checkout:"batch-processing" ended log
    var processEndTime = moment.tz('Asia/Kolkata').format("YYYY-MM-DD HH:mm:ss"); 
    var t1 = new Date();
    doLogging({"batchId":batchId, "events_count":Object.keys(event.Records).length, "checkpoint":"batch-processing", "start-time":processStartTime, "end-time":processEndTime, "total-exe-time":(t1-t0)/1000})

    callback(null, "All is well. Bhushan!");
};

// exports.handler = (event, context, callback) => {
//     //console.log('Received event:', JSON.stringify(event, null, 2));
//     console.log('value1 =', event.key1);
//     console.log('value2 =', event.key2);
//     console.log('value3 =', event.key3);
//     callback(null, event.key1);  // Echo back the first key value
//     //callback('Something went wrong');
// };

