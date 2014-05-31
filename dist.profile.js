var profile = {

    action: "release",
    optimize: "closure",
    layerOptimize: "closure",
    cssOptimize: "comments",
    mini: true,
    packages: [
        {
            name: "dojo",
            location: "bower_components/dojo"
        },
        {
            name: "dojox",
            location: "bower_components/dojox"
        },
        {
            name: "dijit",
            location: "bower_components/dijit"
        },
        {
            name: "gform",
            location: "bower_components/gform"
        },
        {
            name: "gridx",
            location: "bower_components/gridx"
        },
        {
            name: "app",
            location: "./src"
        }
    ],
    layers: {
        "dojo/dojo": {
            include: [ "dojo/dojo" ],
            customBase: true,
            boot: true
        },
        "gform/gform": {
            include: [ "gform/createFullEditorFactory" ]
        },
        "app/example/gridx/index": {
            include: [ "app/example/gridx/GridController" ],
            exclude: ["gform/gform"]
        }
    }
};