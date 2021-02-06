//requiring path and fs modules
const path = require('path');
const readline = require('readline');
const lineReader = require('line-reader');
const fs = require('fs');
//joining path of directory 
const directoryPath = "./";
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        // console.log(file); 
        var ext = file.substr(-3);
        // console.log(ext);
        if(ext === "txt") {
            lineReader.eachLine(file, function(line) {
                // console.log(line);
                var message = line.split(" UTC] ")[1];
                var username = message.split(": ")[0];
                var chat = message.split(": ")[1];
                // console.log(username);
                if(username != "nightbot" && username != "twitchnotify") {
                    if(chat.charAt(0) != "!" && chat.charAt(0) != "/"){
                        if(chat.split(" ").length > 7) {
                            // console.log(chat);
                            var newArray = compressArray(chat.split(" "));
                            var duplicateCount = 0;
                            for(i = 0; i < newArray.length; i++){
                                if(newArray[i].count > 2) {
                                    duplicateCount++;
                                }
                            }
                            if (duplicateCount < 1) {
                                console.log(chat);
                            }
                            
                        }
                    }
                }
            });
        }
    });
});

function compressArray(original) {
 
	var compressed = [];
	// make a copy of the input array
	var copy = original.slice(0);
 
	// first loop goes over every element
	for (var i = 0; i < original.length; i++) {
 
		var myCount = 0;	
		// loop over every element in the copy and see if it's the same
		for (var w = 0; w < copy.length; w++) {
			if (original[i] == copy[w]) {
				// increase amount of times duplicate is found
				myCount++;
				// sets item to undefined
				delete copy[w];
			}
		}
 
		if (myCount > 0) {
			var a = new Object();
			a.value = original[i];
			a.count = myCount;
			compressed.push(a);
		}
	}
 
	return compressed;
};
