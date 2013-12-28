var profile = (function () {
    copyOnly = function (filename, mid) {
        var list = {
            "package.json": 1,
            "package.js": 1
        };
        return (mid in list) || (/^gform\/resources\//.test(mid) && !/\.css$/.test(filename)) || /(png|jpg|jpeg|gif|tiff)$/.test(filename);
    };

    return {
        resourceTags: {
            test: function (filename, mid) {
                return false;
            },

            copyOnly: function (filename, mid) {
                return copyOnly(filename, mid);
            },

            amd: function (filename, mid) {
                return  !copyOnly(filename, mid) && /\.js$/.test(filename);
            }


        }
    };
})();



