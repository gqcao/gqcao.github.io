var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_se_motorway_1 = new ol.format.GeoJSON();
var features_se_motorway_1 = format_se_motorway_1.readFeatures(json_se_motorway_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_se_motorway_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_se_motorway_1.addFeatures(features_se_motorway_1);
var lyr_se_motorway_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_se_motorway_1, 
                style: style_se_motorway_1,
                interactive: true,
                title: '<img src="styles/legend/se_motorway_1.png" /> se_motorway'
            });
var format_no_motorway_2 = new ol.format.GeoJSON();
var features_no_motorway_2 = format_no_motorway_2.readFeatures(json_no_motorway_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_no_motorway_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_no_motorway_2.addFeatures(features_no_motorway_2);
var lyr_no_motorway_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_no_motorway_2, 
                style: style_no_motorway_2,
                interactive: true,
                title: '<img src="styles/legend/no_motorway_2.png" /> no_motorway'
            });
var format_nl_motorway_3 = new ol.format.GeoJSON();
var features_nl_motorway_3 = format_nl_motorway_3.readFeatures(json_nl_motorway_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nl_motorway_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nl_motorway_3.addFeatures(features_nl_motorway_3);
var lyr_nl_motorway_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_nl_motorway_3, 
                style: style_nl_motorway_3,
                interactive: true,
                title: '<img src="styles/legend/nl_motorway_3.png" /> nl_motorway'
            });
var format_nl_acc_severe_2019_4 = new ol.format.GeoJSON();
var features_nl_acc_severe_2019_4 = format_nl_acc_severe_2019_4.readFeatures(json_nl_acc_severe_2019_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nl_acc_severe_2019_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nl_acc_severe_2019_4.addFeatures(features_nl_acc_severe_2019_4);
var lyr_nl_acc_severe_2019_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_nl_acc_severe_2019_4, 
                style: style_nl_acc_severe_2019_4,
                interactive: true,
                title: '<img src="styles/legend/nl_acc_severe_2019_4.png" /> nl_acc_severe_2019'
            });
var format_dk_motorway_5 = new ol.format.GeoJSON();
var features_dk_motorway_5 = format_dk_motorway_5.readFeatures(json_dk_motorway_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dk_motorway_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dk_motorway_5.addFeatures(features_dk_motorway_5);
var lyr_dk_motorway_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_dk_motorway_5, 
                style: style_dk_motorway_5,
                interactive: true,
                title: '<img src="styles/legend/dk_motorway_5.png" /> dk_motorway'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_se_motorway_1.setVisible(true);lyr_no_motorway_2.setVisible(true);lyr_nl_motorway_3.setVisible(true);lyr_nl_acc_severe_2019_4.setVisible(true);lyr_dk_motorway_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_se_motorway_1,lyr_no_motorway_2,lyr_nl_motorway_3,lyr_nl_acc_severe_2019_4,lyr_dk_motorway_5];
lyr_se_motorway_1.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_no_motorway_2.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_nl_motorway_3.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_nl_acc_severe_2019_4.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', 'accidents': 'accidents', });
lyr_dk_motorway_5.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_se_motorway_1.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'TextEdit', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr_no_motorway_2.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'TextEdit', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr_nl_motorway_3.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'TextEdit', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr_nl_acc_severe_2019_4.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'TextEdit', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', 'accidents': 'TextEdit', });
lyr_dk_motorway_5.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'TextEdit', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr_se_motorway_1.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_no_motorway_2.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_nl_motorway_3.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_nl_acc_severe_2019_4.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'accidents': 'no label', });
lyr_dk_motorway_5.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_dk_motorway_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});