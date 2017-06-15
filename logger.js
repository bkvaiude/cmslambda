/*****************************************************************************************
Mod#			Date				Who				Description		
------------------------------------------------------------------------------------------
0000000002		09-Aug-2016			Bhushan V			Checkpoint name updated
0000000001		13-Jul-2016			Bhushan V			Created
******************************************************************************************/

var dgram = require( "dgram" );
var _ = require('lodash');

module.exports = logging = {
	configOptions : {
		logLevel:"DEBUG",
		componentId:19,//others
		"host": "10.10.0.19",
		"port": 9563
	},
	componentOptions : {
			"30" : {"status" : true, "name" : "SMS_EOI"}
	}, 
	log : function(logLevel, component, extraInfo){

		var callerInfo = {};
		var socket = dgram.createSocket( "udp4" );		
		
		var levels = ['FATAL', 'ERROR', 'WARN', 'INFO', 'DEBUG', 'TRACE'];
		var logLevel = (_.indexOf(levels, logLevel) != -1) ? logLevel : "OFF";
		
		// Fetching value(true/false) of component id from json file based on component provided
		var loggingConfig = logging.componentOptions;
		
		// Checking condition if provided component is true and logLevel is not OFF
		if (loggingConfig[component].status == true && logLevel !== 'OFF') {
			
			if (logLevel == 'DEBUG' || logLevel == 'ERROR') {
				
				// to trace files
				Error.stackTraceLimit = 6;
	   			var callerInfo = new Error().stack;
			}

		    var scriptName = null;
		    if(process.argv[1]){
		    	// console.log('process info-----', process.hrtime());

		        var filePathParts = process.argv[1].split("/");
		        scriptName = filePathParts[filePathParts.length -1];

		        scriptName 	= process.argv[2] ? scriptName+":"+process.argv[2] : scriptName;//group
		        scriptName 	= process.argv[3] ? scriptName+":"+process.argv[3] : scriptName;//bucket
		        scriptName  = process.argv[4] ? scriptName+":"+process.argv[4] : scriptName;//vendor

		    }

			var data = {
			        "logLevel"		: logLevel,
			        "component"		: component,
			        "transactionId" : 0,
			        "ScriptName"	: scriptName
			        
			      }

			// merging data and extraInfo
			var finalData = _.merge(data, extraInfo);
			var jsonData = JSON.stringify(finalData);
			
	                // console.log( "jsonData : ", jsonData );//on success, value will be zero
			var bufferJsonData = new Buffer(jsonData, "utf-8");

			// msg <Buffer> | <String> | <Array> Message to be sent
			// offset <Number> Integer. Optional. Offset in the buffer where the message starts.
			// length <Number> Integer. Optional. Number of bytes in the message.
			// port <Number> Integer. Destination port.
			// address <String> Destination hostname or IP address.
			// INFO :- If msg is a String, then it is automatically converted to a Buffer with 'utf8' encoding
			socket.send(bufferJsonData, 0, Buffer.byteLength(jsonData), logging.configOptions.port, logging.configOptions.host,
				function( error, byteLength ) {
					socket.close();
					// if(error > 0)
	    //             console.log( "error : ", error );//on success, value will be zero
	                // console.log( "byteLength : ", byteLength );//length of the message
            	}
			);
		}
	}
}

//Usage
// var ELKLogging = require('./logging');
// ELKLogging.log("INFO", 30, logData);
