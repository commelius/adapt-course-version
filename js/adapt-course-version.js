define(function (require) {

    var Adapt = require("coreJS/adapt");


    Adapt.once('app:dataReady', function () {
        //course version
        if (Adapt.course.has("version")) {
            var version = Adapt.course.get("version"),
                parts = version.split("."),
                timestamp = parts.length === 5 ? parseInt(parts[4]):-1,
                output = "Course Version: " + version + (parts.length === 5 ? ", built on " + (new Date(timestamp)) : "");
            //
            console.log(output);
        }
    });
});