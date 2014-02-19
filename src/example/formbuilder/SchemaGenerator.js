define([
    'dojo/_base/json',
    'gform/util/Resolver',
    'gform/schema/transform',
    "dojo/_base/declare",
    "dojo/text!gform/schema/group.json"
], function (json, Resolver, transform, declare, group) {


    return declare("SchemaGenerator", [], {

        loadDefault: function (baseUrl) {
            var meta = json.fromJson(group);
            var t = transform;
            return this.load(meta, baseUrl, transform);
        },
        load: function (group, baseUrl, transform) {
            var resolver = new Resolver({baseUrl: baseUrl, transformations: transform});
            return resolver.resolve(group);
        }
    });


});
