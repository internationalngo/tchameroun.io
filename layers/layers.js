var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Autredpartement_1 = new ol.format.GeoJSON();
var features_Autredpartement_1 = format_Autredpartement_1.readFeatures(json_Autredpartement_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Autredpartement_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Autredpartement_1.addFeatures(features_Autredpartement_1);
var lyr_Autredpartement_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Autredpartement_1, 
                style: style_Autredpartement_1,
                popuplayertitle: "Autre département",
                interactive: true,
                title: '<img src="styles/legend/Autredpartement_1.png" /> Autre département'
            });
var format_Dpartementdintervention_2 = new ol.format.GeoJSON();
var features_Dpartementdintervention_2 = format_Dpartementdintervention_2.readFeatures(json_Dpartementdintervention_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dpartementdintervention_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dpartementdintervention_2.addFeatures(features_Dpartementdintervention_2);
var lyr_Dpartementdintervention_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dpartementdintervention_2, 
                style: style_Dpartementdintervention_2,
                popuplayertitle: "Département d'intervention",
                interactive: true,
                title: '<img src="styles/legend/Dpartementdintervention_2.png" /> Département d\'intervention'
            });
var format_ProvinceRgion_3 = new ol.format.GeoJSON();
var features_ProvinceRgion_3 = format_ProvinceRgion_3.readFeatures(json_ProvinceRgion_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProvinceRgion_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProvinceRgion_3.addFeatures(features_ProvinceRgion_3);
var lyr_ProvinceRgion_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProvinceRgion_3, 
                style: style_ProvinceRgion_3,
                popuplayertitle: "Province / Région",
                interactive: false,
                title: '<img src="styles/legend/ProvinceRgion_3.png" /> Province / Région'
            });
var format_Frontirepays_4 = new ol.format.GeoJSON();
var features_Frontirepays_4 = format_Frontirepays_4.readFeatures(json_Frontirepays_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Frontirepays_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Frontirepays_4.addFeatures(features_Frontirepays_4);
var lyr_Frontirepays_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Frontirepays_4, 
                style: style_Frontirepays_4,
                popuplayertitle: "Frontière pays",
                interactive: false,
                title: '<img src="styles/legend/Frontirepays_4.png" /> Frontière pays'
            });
var format_PointdintertSI_5 = new ol.format.GeoJSON();
var features_PointdintertSI_5 = format_PointdintertSI_5.readFeatures(json_PointdintertSI_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PointdintertSI_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PointdintertSI_5.addFeatures(features_PointdintertSI_5);
var lyr_PointdintertSI_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PointdintertSI_5, 
                style: style_PointdintertSI_5,
                popuplayertitle: "Point d'interêt SI",
                interactive: true,
    title: 'Point d\'interêt SI<br />\
    <img src="styles/legend/PointdintertSI_5_0.png" /> Coordination<br />\
    <img src="styles/legend/PointdintertSI_5_1.png" /> Base<br />\
    <img src="styles/legend/PointdintertSI_5_2.png" /> Sous base<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Autredpartement_1.setVisible(true);lyr_Dpartementdintervention_2.setVisible(true);lyr_ProvinceRgion_3.setVisible(true);lyr_Frontirepays_4.setVisible(true);lyr_PointdintertSI_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Autredpartement_1,lyr_Dpartementdintervention_2,lyr_ProvinceRgion_3,lyr_Frontirepays_4,lyr_PointdintertSI_5];
lyr_Autredpartement_1.set('fieldAliases', {'Nom_dept': 'Département', 'Nom_region': 'Région', 'Nom_pays': 'Pays', });
lyr_Dpartementdintervention_2.set('fieldAliases', {'Nom_dept': 'Département', 'Nom_region': 'Région', 'Nom_pays': 'Pays', 'Ad_Nombre': 'Ad_Nombre', 'Ad_Projet': 'Projet', 'Ad_Arrondi': 'Arrondissement(s) touchée(s)', 'Ad_Secteur': 'Secteur', 'Ad_Descrip': 'Description', 'Ad_SAME': 'Ad_SAME', 'Ad_EHA': 'Ad_EHA', 'Ad_Partena': 'Partenaire(s)', 'ECHO': 'ECHO', 'CDCS': 'CDCS', 'AFD': 'AFD', 'BHA': 'BHA', 'PRM': 'PRM', });
lyr_ProvinceRgion_3.set('fieldAliases', {'Nom_region': 'Nom_region', 'Nom_pays': 'Nom_pays', 'Prov_name': 'Prov_name', });
lyr_Frontirepays_4.set('fieldAliases', {'Nom_pays': 'Nom_pays', });
lyr_PointdintertSI_5.set('fieldAliases', {'id': 'id', 'Localite': 'Localite', 'Type': 'Type', });
lyr_Autredpartement_1.set('fieldImages', {'Nom_dept': 'TextEdit', 'Nom_region': 'TextEdit', 'Nom_pays': 'TextEdit', });
lyr_Dpartementdintervention_2.set('fieldImages', {'Nom_dept': 'TextEdit', 'Nom_region': 'TextEdit', 'Nom_pays': 'TextEdit', 'Ad_Nombre': 'TextEdit', 'Ad_Projet': 'TextEdit', 'Ad_Arrondi': 'TextEdit', 'Ad_Secteur': 'TextEdit', 'Ad_Descrip': 'TextEdit', 'Ad_SAME': 'TextEdit', 'Ad_EHA': 'TextEdit', 'Ad_Partena': 'TextEdit', 'ECHO': 'TextEdit', 'CDCS': 'TextEdit', 'AFD': 'TextEdit', 'BHA': 'TextEdit', 'PRM': 'TextEdit', });
lyr_ProvinceRgion_3.set('fieldImages', {'Nom_region': 'TextEdit', 'Nom_pays': 'TextEdit', 'Prov_name': 'TextEdit', });
lyr_Frontirepays_4.set('fieldImages', {'Nom_pays': 'TextEdit', });
lyr_PointdintertSI_5.set('fieldImages', {'id': 'TextEdit', 'Localite': 'TextEdit', 'Type': 'TextEdit', });
lyr_Autredpartement_1.set('fieldLabels', {'Nom_dept': 'inline label - always visible', 'Nom_region': 'inline label - always visible', 'Nom_pays': 'inline label - always visible', });
lyr_Dpartementdintervention_2.set('fieldLabels', {'Nom_dept': 'inline label - always visible', 'Nom_region': 'inline label - always visible', 'Nom_pays': 'inline label - always visible', 'Ad_Nombre': 'hidden field', 'Ad_Projet': 'inline label - always visible', 'Ad_Arrondi': 'inline label - always visible', 'Ad_Secteur': 'inline label - always visible', 'Ad_Descrip': 'inline label - always visible', 'Ad_SAME': 'hidden field', 'Ad_EHA': 'hidden field', 'Ad_Partena': 'inline label - always visible', 'ECHO': 'hidden field', 'CDCS': 'hidden field', 'AFD': 'hidden field', 'BHA': 'hidden field', 'PRM': 'hidden field', });
lyr_ProvinceRgion_3.set('fieldLabels', {'Nom_region': 'no label', 'Nom_pays': 'no label', 'Prov_name': 'no label', });
lyr_Frontirepays_4.set('fieldLabels', {'Nom_pays': 'no label', });
lyr_PointdintertSI_5.set('fieldLabels', {'id': 'no label', 'Localite': 'inline label - always visible', 'Type': 'inline label - always visible', });
lyr_PointdintertSI_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});