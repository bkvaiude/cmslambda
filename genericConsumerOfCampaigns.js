'use strict';

console.log('Loading final function');

var ES_HOST = 'search-sid-shaadi-search-mx5f7ddd5bgpoljfmuwanj73ua.ap-south-1.es.amazonaws.com';
var ES_INDEX = 'cluster_male_1';
// var ES_TYPE = 'profiles';
var ES_BODY = '';//{"_source":["_id","spotlight"],"query":{"bool":{"filter":[{"term":{"gender":"Male"}},{"range":{"dateofbirth_f":{"lte":"now-22y\/d","gte":"now-36y\/d+1d"}}},{"range":{"height":{"lte":"61","gte":"54"}}},{"terms":{"maritalstatus":["1"]}},{"range":{"cf_agefrom":{"lte":"29"}}},{"bool":{"should":[{"range":{"cf_ageto":{"gte":"33"}}},{"term":{"cf_ageto":0}}]}},{"range":{"cf_heightfrom":{"lte":"61"}}},{"bool":{"should":[{"range":{"cf_heightto":{"gte":"61"}}},{"term":{"cf_heightto":0}}]}},{"term":{"screened":"Y"}},{"term":{"hidden":"N"}},{"term":{"specialcases":"None"}},{"bool":{"must_not":[{"terms":{"memberlogin":{"index":"cluster_female_1","type":"interactions","id":"cSH54274819","path":"viewed"}}},{"terms":{"memberlogin":{"index":"cluster_female_1","type":"interactions","id":"cSH54274819","path":"dailyrec"}}},{"terms":{"memberlogin":{"index":"cluster_female_1","type":"interactions","id":"cSH54274819","path":"connectsent"}}},{"terms":{"memberlogin":{"index":"cluster_female_1","type":"interactions","id":"cSH54274819","path":"connectrecd"}}},{"terms":{"memberlogin":{"index":"cluster_female_1","type":"interactions","id":"cSH54274819","path":"connectresponded"}}},{"terms":{"memberlogin":{"index":"cluster_female_1","type":"interactions","id":"cSH54274819","path":"accepted"}}},{"terms":{"memberlogin":{"index":"cluster_female_1","type":"interactions","id":"cSH54274819","path":"connect_awaiting_nonfiltered"}}}]}}]}},"post_filter":{"term":{"maritalstatus":"1"}},"sort":[{"member2_dummy7":{"order":"desc"}}],"size":"600","aggs":{"photostatus":{"filter":{"term":{"maritalstatus":"1"}},"aggs":{"filtered_photostatus":{"terms":{"field":"photostatus","size":5000}}}},"recently_joined":{"filter":{"term":{"maritalstatus":"1"}},"aggs":{"17":{"filter":{"range":{"profile_activated":{"gt":"now-1d\/s"}}}},"16":{"filter":{"range":{"profile_activated":{"gt":"now-2d\/s","lte":"now-1d\/s"}}}},"15":{"filter":{"range":{"profile_activated":{"gt":"now-3d\/s","lte":"now-2d\/s"}}}},"14":{"filter":{"range":{"profile_activated":{"gt":"now-4d\/s","lte":"now-3d\/s"}}}},"13":{"filter":{"range":{"profile_activated":{"gt":"now-5d\/s","lte":"now-4d\/s"}}}},"12":{"filter":{"range":{"profile_activated":{"gt":"now-6d\/s","lte":"now-5d\/s"}}}},"11":{"filter":{"range":{"profile_activated":{"gt":"now-7d\/s","lte":"now-6d\/s"}}}},"10":{"filter":{"range":{"profile_activated":{"gt":"now-10d\/s","lte":"now-7d\/s"}}}},"9":{"filter":{"range":{"profile_activated":{"gt":"now-14d\/s","lte":"now-10d\/s"}}}},"8":{"filter":{"range":{"profile_activated":{"gt":"now-15d\/s","lte":"now-14d\/s"}}}},"7":{"filter":{"range":{"profile_activated":{"gt":"now-20d\/s","lte":"now-15d\/s"}}}},"6":{"filter":{"range":{"profile_activated":{"gt":"now-25d\/s","lte":"now-20d\/s"}}}},"5":{"filter":{"range":{"profile_activated":{"gt":"now-30d\/s","lte":"now-25d\/s"}}}},"4":{"filter":{"range":{"profile_activated":{"gt":"now-60d\/s","lte":"now-30d\/s"}}}},"3":{"filter":{"range":{"profile_activated":{"gt":"now-90d\/s","lte":"now-60d\/s"}}}},"2":{"filter":{"range":{"profile_activated":{"gt":"now-120d\/s","lte":"now-90d\/s"}}}},"1":{"filter":{"range":{"profile_activated":{"lte":"now-120d\/s"}}}}}},"search_v3_relevance":{"filter":{"term":{"maritalstatus":"1"}},"aggs":{"16":{"filter":{"range":{"lastlogindate":{"gt":"now-1d\/s"}}}},"15":{"filter":{"range":{"lastlogindate":{"gt":"now-2d\/s","lte":"now-1d\/s"}}}},"14":{"filter":{"range":{"lastlogindate":{"gt":"now-3d\/s","lte":"now-2d\/s"}}}},"13":{"filter":{"range":{"lastlogindate":{"gt":"now-4d\/s","lte":"now-3d\/s"}}}},"12":{"filter":{"range":{"lastlogindate":{"gt":"now-5d\/s","lte":"now-4d\/s"}}}},"11":{"filter":{"range":{"lastlogindate":{"gt":"now-6d\/s","lte":"now-5d\/s"}}}},"10":{"filter":{"range":{"lastlogindate":{"gt":"now-7d\/s","lte":"now-6d\/s"}}}},"9":{"filter":{"range":{"lastlogindate":{"gt":"now-10d\/s","lte":"now-7d\/s"}}}},"8":{"filter":{"range":{"lastlogindate":{"gt":"now-15d\/s","lte":"now-10d\/s"}}}},"7":{"filter":{"range":{"lastlogindate":{"gt":"now-20d\/s","lte":"now-15d\/s"}}}},"6":{"filter":{"range":{"lastlogindate":{"gt":"now-25d\/s","lte":"now-20d\/s"}}}},"5":{"filter":{"range":{"lastlogindate":{"gt":"now-30d\/s","lte":"now-25d\/s"}}}},"4":{"filter":{"range":{"lastlogindate":{"gt":"now-60d\/s","lte":"now-30d\/s"}}}},"3":{"filter":{"range":{"lastlogindate":{"gt":"now-90d\/s","lte":"now-60d\/s"}}}},"2":{"filter":{"range":{"lastlogindate":{"gt":"now-120d\/s","lte":"now-90d\/s"}}}},"1":{"filter":{"range":{"lastlogindate":{"lte":"now-120d\/s"}}}}}},"annualincome":{"filter":{"term":{"maritalstatus":"1"}},"aggs":{"filtered_annualincome":{"terms":{"field":"annualincome.raw","size":5000}}}},"maritalstatus":{"terms":{"field":"maritalstatus.raw","size":5000}},"religion":{"filter":{"term":{"maritalstatus":"1"}},"aggs":{"filtered_religion":{"terms":{"field":"religion.raw","size":5000}}}},"mothertongue":{"filter":{"term":{"maritalstatus":"1"}},"aggs":{"filtered_mothertongue":{"terms":{"field":"mothertongue.raw","size":5000}}}},"countryofresidence":{"filter":{"term":{"maritalstatus":"1"}},"aggs":{"filtered_countryofresidence":{"terms":{"field":"countryofresidence.raw","size":5000}}}},"grew_up_in":{"filter":{"term":{"maritalstatus":"1"}},"aggs":{"filtered_grew_up_in":{"terms":{"field":"grew_up_in.raw","size":5000}}}},"education":{"filter":{"term":{"maritalstatus":"1"}},"aggs":{"filtered_education":{"terms":{"field":"education.raw","size":5000}}}},"working_with":{"filter":{"term":{"maritalstatus":"1"}},"aggs":{"filtered_working_with":{"terms":{"field":"working_with.raw","size":5000}}}},"occupation_area":{"filter":{"term":{"maritalstatus":"1"}},"aggs":{"filtered_occupation_area":{"terms":{"field":"occupation_area.raw","size":5000}}}},"relationship":{"filter":{"term":{"maritalstatus":"1"}},"aggs":{"filtered_relationship":{"terms":{"field":"relationship.raw","size":5000}}}},"smoke":{"filter":{"term":{"maritalstatus":"1"}},"aggs":{"filtered_smoke":{"terms":{"field":"smoke.raw","size":5000}}}},"drink":{"filter":{"term":{"maritalstatus":"1"}},"aggs":{"filtered_drink":{"terms":{"field":"drink.raw","size":5000}}}},"diet":{"filter":{"term":{"maritalstatus":"1"}},"aggs":{"filtered_diet":{"terms":{"field":"diet.raw","size":5000}}}},"a_valid":{"filter":{"term":{"maritalstatus":"1"}},"aggs":{"filtered_a_valid":{"terms":{"field":"a_valid.raw","size":5000}}}}}};

exports.handler = function(event, context, callback) {
    //console.log(JSON.stringify(event, null, 2));

    var elasticsearch = require('elasticsearch');
    var Bluebird = require('bluebird');
    var client = new elasticsearch.Client({
      host: ES_HOST,
      // log: 'trace',
      defer: function () {
        return Bluebird.defer();
      }
    });

    var counter = 0;
    console.log('fetched events count:',Object.keys(event.Records).length);
    event.Records.forEach(function(record) {
        counter++;
        console.log("Processing the record:",counter);

        // Kinesis data is base64 encoded so decode here
        var payload = new Buffer(record.kinesis.data, 'base64').toString('ascii');
        var payloadObject = JSON.parse(payload);
        if(typeof payloadObject.es_data != "undefined")
        {
          // console.log('passed Decoded payload Data:', payloadObject.es_data);
          var esData = payloadObject.es_data;
          // console.log('Decoded payload Index:', esData);
          // console.log('Decoded payload host:', esData.es_host);
          // console.log('Decoded payload body:', JSON.parse(esData.es_body));

          ES_HOST = esData.es_host;
          ES_INDEX = esData.es_index;
          // ES_TYPE = 'profiles';
          ES_BODY = esData.es_body;
        }
        else
        {
          console.log('Failed Decoded payload Data:', payloadObject);
        }

        try
        {        

          console.log("ES Search starting record:",counter);

          client.search({
            index: ES_INDEX,
            // type: ES_TYPE,
            body: ES_BODY
          }).then(function (resp) {
            console.log("ES Search end with sucess ","Hits Total:",resp.hits.total,"Hits Took:",resp.took);
          }, function (err) {
            console.log("ES Search end with fail ","Error:",err.message);
          });
        }
        catch(err)
        {
            console.log("ES Search end with exception record:",counter,"Error:",err);
        }

    });

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

