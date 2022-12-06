var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRISatellite_1 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_ESRIGraylight_2 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_LocalizacinHogaresGeriatricosCercanosalaUT_3 = new ol.format.GeoJSON();
var features_LocalizacinHogaresGeriatricosCercanosalaUT_3 = format_LocalizacinHogaresGeriatricosCercanosalaUT_3.readFeatures(json_LocalizacinHogaresGeriatricosCercanosalaUT_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LocalizacinHogaresGeriatricosCercanosalaUT_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocalizacinHogaresGeriatricosCercanosalaUT_3.addFeatures(features_LocalizacinHogaresGeriatricosCercanosalaUT_3);cluster_LocalizacinHogaresGeriatricosCercanosalaUT_3 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_LocalizacinHogaresGeriatricosCercanosalaUT_3
});
var lyr_LocalizacinHogaresGeriatricosCercanosalaUT_3 = new ol.layer.Vector({
                declutter: true,
                source:cluster_LocalizacinHogaresGeriatricosCercanosalaUT_3, 
                style: style_LocalizacinHogaresGeriatricosCercanosalaUT_3,
                interactive: true,
                title: '<img src="styles/legend/LocalizacinHogaresGeriatricosCercanosalaUT_3.png" /> Localización Hogares Geriatricos Cercanos a la UT'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_ESRISatellite_1.setVisible(true);lyr_ESRIGraylight_2.setVisible(true);lyr_LocalizacinHogaresGeriatricosCercanosalaUT_3.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_ESRISatellite_1,lyr_ESRIGraylight_2,lyr_LocalizacinHogaresGeriatricosCercanosalaUT_3];
lyr_LocalizacinHogaresGeriatricosCercanosalaUT_3.set('fieldAliases', {'ec5_uuid': 'ec5_uuid', 'created_at': 'created_at', 'uploaded_at': 'uploaded_at', 'created_by': 'created_by', 'title': 'title', '1_Nombre': '1_Nombre', 'lat_2_Localizacion': 'lat_2_Localizacion', 'long_2_Localizacion': 'long_2_Localizacion', 'accuracy_2_Localizacion': 'accuracy_2_Localizacion', 'UTM_Northing_2_Localizacion': 'UTM_Northing_2_Localizacion', 'UTM_Easting_2_Localizacion': 'UTM_Easting_2_Localizacion', 'UTM_Zone_2_Localizacion': 'UTM_Zone_2_Localizacion', '3_Telefono': '3_Telefono', '4_Residentes': '4_Residentes', '5_Tipo_de_Residencia': '5_Tipo_de_Residencia', '6_Personal_Medico': '6_Personal_Medico', '7_Sitio_Web': '7_Sitio_Web', '8_Fecha_Visita': '8_Fecha_Visita', '9_Hora_Visita': '9_Hora_Visita', '10_Foto': '10_Foto', });
lyr_LocalizacinHogaresGeriatricosCercanosalaUT_3.set('fieldImages', {'ec5_uuid': 'TextEdit', 'created_at': 'DateTime', 'uploaded_at': 'DateTime', 'created_by': 'TextEdit', 'title': 'TextEdit', '1_Nombre': 'TextEdit', 'lat_2_Localizacion': 'TextEdit', 'long_2_Localizacion': 'TextEdit', 'accuracy_2_Localizacion': 'Range', 'UTM_Northing_2_Localizacion': 'Range', 'UTM_Easting_2_Localizacion': 'Range', 'UTM_Zone_2_Localizacion': 'TextEdit', '3_Telefono': 'TextEdit', '4_Residentes': 'Range', '5_Tipo_de_Residencia': 'TextEdit', '6_Personal_Medico': 'TextEdit', '7_Sitio_Web': 'TextEdit', '8_Fecha_Visita': 'TextEdit', '9_Hora_Visita': 'DateTime', '10_Foto': 'TextEdit', });
lyr_LocalizacinHogaresGeriatricosCercanosalaUT_3.set('fieldLabels', {'ec5_uuid': 'no label', 'created_at': 'no label', 'uploaded_at': 'no label', 'created_by': 'no label', 'title': 'no label', '1_Nombre': 'inline label', 'lat_2_Localizacion': 'no label', 'long_2_Localizacion': 'no label', 'accuracy_2_Localizacion': 'no label', 'UTM_Northing_2_Localizacion': 'no label', 'UTM_Easting_2_Localizacion': 'no label', 'UTM_Zone_2_Localizacion': 'no label', '3_Telefono': 'inline label', '4_Residentes': 'inline label', '5_Tipo_de_Residencia': 'inline label', '6_Personal_Medico': 'inline label', '7_Sitio_Web': 'inline label', '8_Fecha_Visita': 'inline label', '9_Hora_Visita': 'inline label', '10_Foto': 'inline label', });
lyr_LocalizacinHogaresGeriatricosCercanosalaUT_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});