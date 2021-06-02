'use strict';

angular.module('agro.utils.xls', ['ngResource'])

    .factory('UtilsXlsService', ['$resource', 'DataCache', '$http', '$filter', '$q', '$interval', '$location', '$timeout', '$translate',
        function ($resource, DataCache, $http, $filter, $q, $interval, $location, $timeout, $translate) {
            //var loadXlsDefer = null;

            var xls = {
                loadXlsDefer: null,

                makeXls: function (data, type, callScope) {

                    var postData = {
                        templateName: type,
                        params: data.params
                    };

                    switch (type) {
                        case "materialUsedSeed":
                            postData.data = this.materialUsedSeed(data.data, callScope);
                            break;
                        case "materialUsedFertPlant":
                            postData.data = this.materialUsedFertPlant(data.data, callScope);
                            break;
                        case "agroworkGeneral":
                            postData.data = this.agroworkGeneral(data.data, callScope);
                            postData.params = {
                                date_start_exel: $filter('date')(data.data['date_start'] * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                date_end_exel: $filter('date')(data.data['date_end'] * 1000, 'dd.MM.yyyy HH:mm:ss')
                            }
                            break;
                        case "waybill":
                            postData.data = this.waybill(data.data, callScope);
                            postData.params = {
                                date_start_exel: $filter('date')(data.data['date_start'] * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                date_end_exel: $filter('date')(data.data['date_end'] * 1000, 'dd.MM.yyyy HH:mm:ss')
                            }
                            break;
                        case "agrowork":
                            postData.data = this.agrowork(data.data, callScope);
                            postData.params = {
                                vehicle_name: data.data.vehicle_name,
                                date_start_exel: $filter('date')(data.data['date_start'] * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                date_end_exel: $filter('date')(data.data['date_end'] * 1000, 'dd.MM.yyyy HH:mm:ss')
                            }
                            break;
                        case "vehicleTrailer":
                            postData.data = this.vehicleTrailer(data.data, callScope);
                            postData.params = {
                                reportType: $filter('translate')('report.vehicle.trailer')
                            }
                            break;
                        case "agroworkToday":
                            postData.data = this.agroworkToday(data.data, callScope);
                            postData.params = {
                                reportType: $filter('translate')('report.agrowork.today'),
                                date_exel: $filter('date')(data.data.date, 'dd.MM.yyyy HH:mm:ss'),
                                cluster_name: data.data.cluster_name
                            }
                            break;
                        case "agrooperationWorkType":
                            postData.data = this.agrooperationWorkType(data.data, callScope);

                            postData.params = {
                                reportType: $filter('translate')('report.agrooperation.workType'),
                                date_start_exel: $filter('date')(data.data.date_start * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                date_end_exel: $filter('date')(data.data.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                geozone_total: data.data.geozone_total,
                                geozone_total_exel: data.data.geozone_total - data.data.working_total,
                                workType_name: $filter('translate')(data.data.workType_name),
                                cluster_name: data.data.cluster_name,
                                culture_name: $filter('translate')(data.data.culture_name),
                                working_total: data.data.working_total,
                                translate: {
                                    square_by_cropRotation: $filter('translate')('square.by.cropRotation')
                                }
                            }
                            break;
                        case "agrooperationMaterials":
                            postData.data = this.agrooperationMaterialsSeed(data.data, callScope);
                            postData.data1 = this.agrooperationMaterialsFertilizer(data.data, callScope);
                            postData.data2 = this.agrooperationMaterialsPlantProtector(data.data, callScope);
                            postData.params = {
                                reportName: $filter('translate')('report.agrooperation.materials'),
                                date_start_exel: $filter('date')(data.data.date_start * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                date_end_exel: $filter('date')(data.data.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                materialSeedSquare: callScope.getTotal(data.data.repData.materialSeedList, 'square'),
                                materialSeedPrice: callScope.getTotal(data.data.repData.materialSeedList, 'seedPrice'),
                                materialFertilizerSquare: callScope.getTotal(data.data.repData.materialFertilizerList, 'square'),
                                materialFertilizerPrice: callScope.getTotal(data.data.repData.materialFertilizerList, 'fertilizerPrice'),
                                materialPlantProtectorSquare: callScope.getTotal(data.data.repData.materialPlantProtectorList, 'square'),
                                materialPlantProtectorPrice: callScope.getTotal(data.data.repData.materialPlantProtectorList, 'plantProtectorPrice'),
                            }
                            break;
                        case "agroworkConsolidated":
                            postData.data = this.agroworkConsolidated(data.data, callScope);
                            postData.params = {
                                translate:{
                                    reportName: $filter('translate')('report.agrowork.consolidated'),
                                    processed_by_period: $filter('translate')('processed.by.period')
                                },
                                date_start_exel: $filter('date')(data.data.date_start * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                date_end_exel: $filter('date')(data.data.date_end * 1000, 'dd.MM.yyyy HH:mm:ss')
                            }
                            console.log(JSON.stringify(postData))
                            break;
                        default:
                            postData = {}
                    }
                    this.sendRequest(postData);

                },
                agroworkGeneral: function (data, callScope) {
                    let res = [];
                    var workTypeList = data.repData;
                    workTypeList.sort(function (a, b) {
                        if ($filter('translate')(a.workType.name) < $filter('translate')(b.workType.name)) {
                            return -1;
                        }
                        if ($filter('translate')(a.workType.name) > $filter('translate')(b.workType.name)) {
                            return 1;
                        }
                        return 0;
                    });


                    for (let r = 0; r < data.repData.length; r++) {
                        let report_header = data.repData[r];
                        report_header.workType.name = $filter('translate')(report_header.workType.name);
                        for (let k = 0; k < report_header.clusterList.length; k++) {
                            let cluster_list = report_header.clusterList[k]
                            cluster_list.detail['processed_total'] = $filter('number')(callScope.getTotal(cluster_list.detail, 'square'), 2);
                            cluster_list.detail['fuel_total'] = $filter('number')(callScope.getTotal(cluster_list.detail, 'litr'), 2);

                            for (let i = 0; i < cluster_list.detail.length; i++) {
                                let report = cluster_list.detail[i];
                                report['time_in_exel'] = $filter('date')(report['time_in'], 'dd.MM.yyyy HH:mm:ss')
                                report['time_out_exel'] = $filter('date')(report['time_out'], 'dd.MM.yyyy HH:mm:ss')
                                report['percent'] = (report.agrooperation.fact_square / report.agrooperation.plan_square) * 100;
                            }
                        }
                    }

                    return data.repData;
                },
                materialUsedSeed: function (data, callScope) {
                    var res = [];
                    for (var i = 0; i < data.length; i++) {
                        res.push({
                            'seed': data[i].material ? $filter('translate')(data[i].material.name) : '',
                            'culture': data[i].material ? $filter('translate')(data[i].material.cultureName) : '',
                            'geozoneName': data[i].geozone ? data[i].geozone.name : '',
                            'geozoneGroupName': data[i].agrooperation && data[i].agrooperation.geozone ? data[i].agrooperation.geozone.geozone_group_name : '',
                            'geozoneSquare': data[i].geozone ? data[i].geozone.square_real : '',
                            'unitName': callScope.getUnitName(data[i].materialUnit),
                            'byHaPlan': '',
                            'totalPlan': '',
                            'byHaFact': data[i].materialRateFact,
                            'totalFact': data[i].materialRateFactTotal
                        });
                    }
                    res.sort((a, b) => (a.seed > b.seed) ? 1 : ((b.seed > a.seed) ? -1 : 0))
                    return res;
                },

                materialUsedFertPlant: function (data, callScope) {
                    var res = [];
                    for (var i = 0; i < data.length; i++) {
                        res.push({
                            'materialName': data[i].material ? $filter('translate')(data[i].material.name) : '',
                            'geozoneName': data[i].geozone ? data[i].geozone.name : '',
                            'geozoneGroupName': data[i].agrooperation && data[i].agrooperation.geozone ? data[i].agrooperation.geozone.geozone_group_name : '',
                            'geozoneSquare': data[i].geozone ? data[i].geozone.square_real : '',
                            'unitName': callScope.getUnitName(data[i].materialUnit),
                            'byHaPlan': '',
                            'totalPlan': '',
                            'byHaFact': data[i].materialRateFact,
                            'totalFact': data[i].materialRateFactTotal
                        });
                    }
                    res.sort((a, b) => (a.materialName > b.materialName) ? 1 : ((b.materialName > a.materialName) ? -1 : 0))
                    return res;
                },

                waybill: function (data, callScope) {

                    for (let i = 0; i < data.agrooperationList.length; i++) {
                        let report = data.agrooperationList[i];
                        report['time_in_exel'] = $filter('date')(report['time_in'], 'dd.MM.yyyy HH:mm:ss')
                        report['time_out_exel'] = $filter('date')(report['time_out'], 'dd.MM.yyyy HH:mm:ss')
                        if (report.trailer) {
                            report['distance'] = ''
                            report['crossing_name_exel'] = $filter('translate')(report.trailer.worktype.name)
                        } else {
                            report['crossing_name_exel'] = $filter('translate')('crossing.name')
                        }
                        if (report['square'] === null) {
                            report['square'] = '';
                        }

                    }

                    return data.agrooperationList;
                },

                agrowork: function (data, callScope) {

                    for (var i = 0; i < data.agroworkList.length; i++) {
                        var report = data.agroworkList[i];

                        report['working_time_exel'] = $filter('secondsToDateTime')(report.working_time);
                        report['stop_exel'] = report.stop_num + "(" + $filter('secondsToDateTime')(report.stop_time) + ")";
                        report['parking_exel'] = report.parking_num + "(" + $filter('secondsToDateTime')(report.parking_time) + ")";
                        report['workType_name'] = $filter('translate')(report.workType ? report.workType.name : '');

                        for (var q = 0; q < report.agroworkDetail.length; q++) {
                            var reportDetail = report.agroworkDetail[q];
                            reportDetail['worktype_name'] = $filter('translate')(reportDetail.trailer ? reportDetail.trailer.worktype.name : '');
                            reportDetail['parking_exel'] = reportDetail.parking_num + "(" + $filter('secondsToDateTime')(reportDetail.parking_time) + ")";
                            reportDetail['stop_exel'] = reportDetail.stop_num + "(" + $filter('secondsToDateTime')(reportDetail.stop_time) + ")";
                            reportDetail['time_in_exel'] = $filter('date')(reportDetail.time_in, 'dd.MM.yyyy HH:mm:ss');
                            reportDetail['time_out_exel'] = $filter('date')(reportDetail.time_out, 'dd.MM.yyyy HH:mm:ss');
                            reportDetail['working_time_exel'] = $filter('secondsToDateTime')(reportDetail.working_time);
                            reportDetail['ignition_working_time_exel'] = $filter('secondsToDateTime')(reportDetail.ignition_working_time);


                            if (reportDetail.geozone) {
                                var culture = "";
                                for (var l = 0; l < reportDetail.geozone.cultureList.length; l++) {
                                    if (reportDetail.geozone.cultureList.length !== l + 1) {
                                        culture = culture + $filter('translate')(reportDetail.geozone.cultureList[l].name) + ", ";
                                    } else {
                                        culture = culture + $filter('translate')(reportDetail.geozone.cultureList[l].name);
                                    }
                                }
                                reportDetail['culture_exel'] = culture;
                                reportDetail['square_percent_vehicle_exel'] = reportDetail.square_percent_vehicle + "% (" + $filter('number')(reportDetail.square_percent_geozone, 2) + "%)";
                                reportDetail['geozone_square_real_exel'] = reportDetail.geozone.square_real;
                                reportDetail['geozone_name_exel'] = reportDetail.geozone.name;
                            } else {

                                reportDetail['culture_exel'] = '';
                                reportDetail['square_percent_vehicle_exel'] = '';
                                reportDetail['geozone_square_real_exel'] = '';
                                reportDetail['geozone_name_exel'] = '';
                            }

                        }
                    }

                    return data.agroworkList;
                },
                vehicleTrailer: function (data, callScope) {
                    for (var i = 0; i < data.length; i++) {
                        let report = data[i];
                        if (report.is_manual === false) {
                            data['is_manual_exel'] = $filter('translate')('yes');
                        } else {
                            data['is_manual_exel'] = ''
                        }
                    }
                    return data;
                },
                agroworkToday: function (data, callScope) {
                    for (var l = 0; l < data.repData.length; l++) {
                        let report_header = data.repData[l];
                        report_header['workType_name_exel'] = $filter('translate')(report_header.workType ? report_header.workType.name : '');

                        for (var k = 0; k < report_header.clusterList.length; k++) {
                            var cluster_list = report_header.clusterList[k];
                            if (data.claster_name) {
                                cluster_list['clusterName_exel'] = $filter('translate')(data.claster_name)
                            } else {
                                cluster_list['clusterName_exel'] = $filter('translate')(cluster_list.main ? cluster_list.main.name : '')
                            }
                            cluster_list['total_exel'] = callScope.getTotal(cluster_list.detail, 'square')
                            for (var i = 0; i < cluster_list.detail.length; i++) {
                                var report = cluster_list.detail[i];
                                report['percent_exel'] = (report.agrooperation.fact_square / report.agrooperation.plan_square) * 100;
                            }
                        }
                    }
                    return data.repData;
                },
                agrooperationWorkType: function (data, callScope) {
                    data.repData.sort(function (a, b) {
                        if (a.geozone.name.localeCompare(b.geozone.name) < b.geozone.name.localeCompare(a.geozone.name)) {
                            return -1;
                        }
                        if (a.geozone.name.localeCompare(b.geozone.name) > b.geozone.name.localeCompare(a.geozone.name)) {
                            return 1;
                        }
                        return 0;
                    });
                    for (var l = 0; l < data.repData.length; l++) {
                        let item = data.repData[l];
                        if (item.total !== 0) {
                            item['total'] = item.total;
                        } else {
                            item['total'] = '';
                        }
                        item['cropRotation_exel'] = item.cropRotation_square - item.total;
                    }
                    return data.repData;
                },
                agrooperationMaterialsSeed: function (data, callScope) {
                    data.repData.materialSeedList.sort(function (a, b) {
                        if (a.seed.name.substr(0, 1).toUpperCase() === 'І' || a.seed.name.substr(0, 1).toUpperCase() === 'Є' || a.seed.name.substr(0, 1).toUpperCase() === 'Ї') {
                            return 1;
                        }
                        if (b.seed.name.substr(0, 1).toUpperCase() === 'І' || b.seed.name.substr(0, 1).toUpperCase() === 'Є' || b.seed.name.substr(0, 1).toUpperCase() === 'Ї') {
                            return -1;
                        }
                        if ($filter('lowercase')($filter('translate')(a.seed.name)) < $filter('lowercase')($filter('translate')(b.seed.name))) {
                            return -1;
                        }
                        if ($filter('lowercase')($filter('translate')(a.seed.name)) > $filter('lowercase')($filter('translate')(b.seed.name))) {
                            return 1;
                        }
                        return 0;
                    });
                    for (let r = 0; r < data.repData.materialSeedList.length; r++) {
                        let item_seed = data.repData.materialSeedList[r];
                        let unit = "";
                        if (item_seed.seedUnit === 'Quantity') {
                            unit = $filter('translate')('material.unit.qnt_s')
                        } else if (item_seed.seedUnit === 'Kg') {
                            unit = $filter('translate')('material.unit.kg_s')
                        } else if (item_seed.seedUnit === 'Litr') {
                            unit = $filter('translate')('material.unit.litr1_s')
                        }

                        item_seed['unit'] = unit;
                        item_seed['seedRateFact'] = $filter('number')(item_seed.seedRateFact, 3);
                        item_seed['seedName'] = $filter('translate')(item_seed.seed.name);
                    }
                    return data.repData.materialSeedList;
                },
                agrooperationMaterialsFertilizer: function (data, callScope) {
                    data.repData.materialFertilizerList.sort(function (a, b) {
                        if (a.fertilizer.name.substr(0, 1).toUpperCase() === 'І' || a.fertilizer.name.substr(0, 1).toUpperCase() === 'Є' || a.fertilizer.name.substr(0, 1).toUpperCase() === 'Ї') {
                            return 1;
                        }
                        if (b.fertilizer.name.substr(0, 1).toUpperCase() === 'І' || b.fertilizer.name.substr(0, 1).toUpperCase() === 'Є' || b.fertilizer.name.substr(0, 1).toUpperCase() === 'Ї') {
                            return -1;
                        }
                        if ($filter('lowercase')($filter('translate')(a.fertilizer.name)) < $filter('lowercase')($filter('translate')(b.fertilizer.name))) {
                            return -1;
                        }
                        if ($filter('lowercase')($filter('translate')(a.fertilizer.name)) > $filter('lowercase')($filter('translate')(b.fertilizer.name))) {
                            return 1;
                        }
                        return 0;
                    });

                    for (let r = 0; r < data.repData.materialFertilizerList.length; r++) {
                        let item_fertilizers = data.repData.materialFertilizerList[r];
                        let unit = "";
                        if (item_fertilizers.fertilizerUnit === 'Quantity') {
                            unit = $filter('translate')('material.unit.qnt_s')
                        } else if (item_fertilizers.fertilizerUnit === 'Kg') {
                            unit = $filter('translate')('material.unit.kg_s')
                        } else if (item_fertilizers.fertilizerUnit === 'Litr') {
                            unit = $filter('translate')('material.unit.litr1_s')
                        }
                        item_fertilizers['unit'] = unit;
                        item_fertilizers['fertilizerRateFact'] = $filter('number')(item_fertilizers.fertilizerRateFact, 3);
                        item_fertilizers['fertilizerName'] = $filter('translate')(item_fertilizers.fertilizer.name);
                    }
                    return data.repData.materialFertilizerList;
                },
                agrooperationMaterialsPlantProtector: function (data, callScope) {
                    data.repData.materialPlantProtectorList.sort(function (a, b) {
                        if (a.plantProtector.name.substr(0, 1).toUpperCase() === 'Є' || a.plantProtector.name.substr(0, 1).toUpperCase() === 'І' || a.plantProtector.name.substr(0, 1).toUpperCase() === 'Ї') {
                            return 1;
                        }
                        if (b.plantProtector.name.substr(0, 1).toUpperCase() === 'Є' || b.plantProtector.name.substr(0, 1).toUpperCase() === 'І' || b.plantProtector.name.substr(0, 1).toUpperCase() === 'Ї') {
                            return -1;
                        }
                        if ($filter('lowercase')($filter('translate')(a.plantProtector.name)) < $filter('lowercase')($filter('translate')(b.plantProtector.name))) {
                            return -1;
                        }
                        if ($filter('lowercase')($filter('translate')(a.plantProtector.name)) > $filter('lowercase')($filter('translate')(b.plantProtector.name))) {
                            return 1;
                        }
                        return 0;
                    });

                    for (let r = 0; r < data.repData.materialPlantProtectorList.length; r++) {
                        let item_plant_protector = data.repData.materialPlantProtectorList[r];
                        let unit = ""
                        if (item_plant_protector.plantProtectorUnit === 'Quantity') {
                            unit = $filter('translate')('material.unit.qnt_s')
                        } else if (item_plant_protector.plantProtectorUnit === 'Kg') {
                            unit = $filter('translate')('material.unit.kg_s')
                        } else if (item_plant_protector.plantProtectorUnit === 'Litr') {
                            unit = $filter('translate')('material.unit.litr1_s')
                        }
                        item_plant_protector['unit'] = unit;
                        item_plant_protector['plantProtectorRateFact'] = $filter('number')(item_plant_protector.plantProtectorRateFact, 3);
                        item_plant_protector['plantProtectorName'] = $filter('translate')(item_plant_protector.plantProtector.name);

                    }
                    return data.repData.materialPlantProtectorList;
                },
                agroworkConsolidated: function (data, callScope) {
                    data.repData.sort(function (a, b) {
                        if ($filter('lowercase')($filter('translate')(a.workType.name)) < $filter('lowercase')($filter('translate')(b.workType.name))) {
                            return -1;
                        }
                        if ($filter('lowercase')($filter('translate')(a.workType.name)) > $filter('lowercase')($filter('translate')(b.workType.name))) {
                            return 1;
                        }
                        return 0;
                    });
                    for (var l = 0; l < data.repData.length; l++) {
                        var rep_data = data.repData[l];
                        rep_data['workTypeName'] = $filter('translate')(rep_data.workType.name);
                        for (var k = 0; k < rep_data.clusterList.length; k++) {
                            if (!data.claster_name) {
                                var list = rep_data.clusterList;
                                list.sort(function (a, b) {
                                    if ($filter('translate')(a.main ? a.main.name : '') < $filter('translate')(b.main ? b.main.name : '')) {
                                        return -1;
                                    }
                                    if ($filter('translate')(a.main ? a.main.name : '') > $filter('translate')(b.main ? b.main.name : '')) {
                                        return 1;
                                    }
                                    return 0;
                                });
                                var cluster_list = rep_data.clusterList[k]

                                if (data.claster_name) {
                                    cluster_list['clusterName'] = data.claster_name;
                                } else {
                                    cluster_list['clusterName'] = cluster_list.main ? cluster_list.main.name : '';
                                }


                                for (var d = 0; d < cluster_list.detail.length; d++) {
                                    var report_detail = cluster_list.detail[d]
                                    report_detail['factDateStartExel'] = $filter('date')(report_detail.agrooperation.fact_date_start, 'dd.MM.yyyy HH:mm:ss')!== null ? $filter('date')(report_detail.agrooperation.fact_date_start, 'dd.MM.yyyy HH:mm:ss') : '';
                                    report_detail['factDateEndExel'] = $filter('date')(report_detail.agrooperation.fact_date_end, 'dd.MM.yyyy HH:mm:ss') !== null ? $filter('date')(report_detail.agrooperation.fact_date_end, 'dd.MM.yyyy HH:mm:ss') : '';
                                    report_detail['processed_percent'] = report_detail.agrooperation.fact_square / report_detail.agrooperation.plan_square * 100;
                                    report_detail.agrooperation.fact_square = report_detail.agrooperation.fact_square ? report_detail.agrooperation.fact_square : '';

                                    if(report_detail.agrooperation.materialSeedList.length>0){
                                        report_detail['seedTranslate'] = [{
                                            plant_protector: $filter('translate')('seed'),
                                            plan: $filter('translate')('plan'),
                                            fact: $filter('translate')('fact'),
                                            material_unit_price: $filter('translate')('material.unit.price'),
                                            material_full_price: $filter('translate')('material.full.price'),
                                            material_total: $filter('translate')('material.total'),
                                            material_rate: $filter('translate')('material.rate')
                                        }]

                                    }else{
                                        report_detail['plantProtectorTranslate'] = []
                                    }
                                    if(report_detail.agrooperation.materialFertilizerList.length>0){
                                        report_detail['fertilizerTranslate'] = [{
                                            plant_protector: $filter('translate')('fertilizer'),
                                            plan: $filter('translate')('plan'),
                                            fact: $filter('translate')('fact'),
                                            material_unit_price: $filter('translate')('material.unit.price'),
                                            material_full_price: $filter('translate')('material.full.price'),
                                            material_total: $filter('translate')('material.total'),
                                            material_rate: $filter('translate')('material.rate')
                                        }]

                                    }else{
                                        report_detail['plantProtectorTranslate'] = []
                                    }
                                    if(report_detail.agrooperation.materialPlantProtectorList.length>0){
                                        report_detail['plantProtectorTranslate'] = [{
                                            plant_protector: $filter('translate')('plant_protector'),
                                            plan: $filter('translate')('plan'),
                                            fact: $filter('translate')('fact'),
                                            material_unit_price: $filter('translate')('material.unit.price'),
                                            material_full_price: $filter('translate')('material.full.price'),
                                            material_total: $filter('translate')('material.total'),
                                            material_rate: $filter('translate')('material.rate')
                                        }]

                                    }else{
                                        report_detail['plantProtectorTranslate'] = []
                                    }

                                    for (var f = 0; f < report_detail.agrooperation.materialFertilizerList.length; f++) {
                                        var fertilizer = report_detail.agrooperation.materialFertilizerList[f];
                                        fertilizer['fertilizerRatePlan'] = fertilizer.fertilizerRatePlan !== 0 &&  fertilizer.fertilizerRatePlan ? fertilizer.fertilizerRatePlan : '';
                                        fertilizer['fertilizerRatePlan_square'] = (report_detail.agrooperation.plan_square * fertilizer.fertilizerRatePlan !== 0 && report_detail.agrooperation.plan_square * fertilizer.fertilizerRatePlan) ? report_detail.agrooperation.plan_square * fertilizer.fertilizerRatePlan : '';
                                        fertilizer['fertilizerRateFact'] = (fertilizer.fertilizerRateFact !==0 && fertilizer.fertilizerRateFact) ? fertilizer.fertilizerRateFact : ''
                                        fertilizer['fertilizerRateFact_square'] = (report_detail.agrooperation.fact_square * fertilizer.fertilizerRateFact !==0 && report_detail.agrooperation.fact_square * fertilizer.fertilizerRateFact) ? report_detail.agrooperation.fact_square * fertilizer.fertilizerRateFact : '';

                                        fertilizer['fertilizerTotalPrice'] = callScope.getFertilizerPrice(fertilizer, report_detail.agrooperation.fact_square);
                                        fertilizer['fertilizerName'] = $filter('translate')(fertilizer.fertilizer.name)
                                    }



                                    for (var p = 0; p < report_detail.agrooperation.materialPlantProtectorList.length; p++) {
                                        var plantProtector = report_detail.agrooperation.materialPlantProtectorList[p];
                                        plantProtector['plantProtectorRatePlan'] = plantProtector.plantProtectorRatePlan !== 0 &&  plantProtector.plantProtectorRatePlan ? plantProtector.plantProtectorRatePlan : '';
                                        plantProtector['plantProtectorRatePlan_square'] = (report_detail.agrooperation.plan_square * plantProtector.plantProtectorRatePlan !== 0 && report_detail.agrooperation.plan_square * plantProtector.plantProtectorRatePlan) ? report_detail.agrooperation.plan_square * plantProtector.plantProtectorRatePlan : '';
                                        plantProtector['plantProtectorRateFact'] = (plantProtector.plantProtectorRateFact !==0 && plantProtector.plantProtectorRateFact) ? plantProtector.plantProtectorRateFact : ''
                                        plantProtector['plantProtectorRateFact_square'] = (report_detail.agrooperation.fact_square * plantProtector.plantProtectorRateFact !==0 && report_detail.agrooperation.fact_square * plantProtector.plantProtectorRateFact) ? report_detail.agrooperation.fact_square * plantProtector.plantProtectorRateFact : '';

                                        plantProtector['plantProtectorTotalPrice'] = callScope.getPlantProtectorPrice(plantProtector, report_detail.agrooperation.fact_square);
                                        plantProtector['plantProtectorName'] = $filter('translate')(plantProtector.plantProtector.name)
                                    }

                                    for (var s = 0; s < report_detail.agrooperation.materialSeedList.length; s++) {
                                        var seed = report_detail.agrooperation.materialSeedList[s];
                                        seed['seedRatePlan'] = seed.seedRatePlan !== 0 &&  seed.seedRatePlan ? seed.seedRatePlan : '';
                                        seed['seedRatePlan_square'] = (report_detail.agrooperation.plan_square * seed.seedRatePlan !== 0 && report_detail.agrooperation.plan_square * seed.seedRatePlan) ? report_detail.agrooperation.plan_square * seed.seedRatePlan : '';
                                        seed['seedRateFact'] = (seed.seedRateFact !==0 && seed.seedRateFact) ? seed.seedRateFact : ''
                                        seed['seedRateFact_square'] = (report_detail.agrooperation.fact_square * seed.seedRateFact !==0 && report_detail.agrooperation.fact_square * seed.seedRateFact) ? report_detail.agrooperation.fact_square * seed.seedRateFact : '';

                                        seed['seedTotalPrice'] = callScope.getSeedPrice(seed, report_detail.agrooperation.fact_square)
                                        seed['seedName'] = $filter('translate')(seed.seed.name)
                                    }



                                    report_detail['squareTotal'] = callScope.getTotal(cluster_list.detail, 'square');
                                    report_detail['totalTmc'] = callScope.getTotalTmc(cluster_list.detail);
                                }
                            }
                        }
                    }

                    return data.repData;
                },
                sendRequest: function (postData, filename) {
                    var self = this;

                    if (this.loadXlsDefer && this.loadXlsDefer != null) {
                        return;
                    }

                    this.loadXlsDefer = $q.defer();

                    var lng = $translate.use();
                    //if (lng=='ukr'){lng='uk'}
                    postData.lng = lng;
                    $http.post("/xls", postData, {
                        timeout: this.loadXlsDefer.promise,
                        responseType: 'arraybuffer'
                    }).success(function (data) {
                        var blob = new Blob([data], {
                            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                        });
                        saveAs(blob, filename || 'report' + '.xlsx');
                    })
                        .error(function (data) {
                        })
                        .finally(function (data) {
                            self.loadXlsDefer = null;
                        })
                }
            }
            return xls;
        }
    ]);
