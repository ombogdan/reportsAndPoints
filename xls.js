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
                                translate: {
                                    reportName: $filter('translate')('report.agrowork.consolidated'),
                                    processed_by_period: $filter('translate')('processed.by.period')
                                },
                                date_start_exel: $filter('date')(data.data.date_start * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                date_end_exel: $filter('date')(data.data.date_end * 1000, 'dd.MM.yyyy HH:mm:ss')
                            }
                            break;
                        case "waybillConsolidated":
                            postData.data = this.waybillConsolidated(data.data, callScope);
                            postData.params = {
                                reportType: $filter('translate')('report.waybill.consolidated'),
                                date_start_exel: $filter('date')(data.data.date_start * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                date_end_exel: $filter('date')(data.data.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                cluster_name: data.data.cluster_name
                            }
                            break;
                        case "controlTrackerData":
                            postData.data = this.controlTrackerData(data.data, callScope);
                            postData.params = {
                                reportType: $filter('translate')('report.waybill.consolidated'),
                                date_start_exel: $filter('date')(data.data.date_start * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                date_end_exel: $filter('date')(data.data.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                cluster_name: data.data.cluster_name
                            }
                            break;
                        case "bigBag":
                            postData.data = this.bigBag(data.data, callScope);
                            postData.params = {
                                date_start_exel: $filter('date')(data.data.datefrom * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                date_end_exel: $filter('date')(data.data.dateto * 1000, 'dd.MM.yyyy HH:mm:ss')
                            }
                            break;
                        case "byFuelConsolidated":
                            postData.data = this.byFuelConsolidated(data.data, callScope);
                            postData.params = {
                                date_start_exel: $filter('date')(data.data.date_start * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                date_end_exel: $filter('date')(data.data.date_end * 1000, 'dd.MM.yyyy HH:mm:ss')
                            }
                            break;
                        case "vehicleTask":
                            postData.data = this.vehicleTask(data.data, callScope);
                            postData.params = {
                                oper_day_exel: $filter('date')(data.data.oper_day, 'dd.MM.yyyy HH:mm:ss'),
                                cluster_name: data.data.cluster_name
                            }
                            break;
                        case "timesheetReport":
                            postData.data = this.timesheetReport(data.data, callScope);
                            postData.params = {
                                reportDate: data.params.month.name + " " + data.params.year,
                            }
                            break;
                        default:
                            postData = {}
                    }
                    //  console.log(JSON.stringify(postData))
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
                agroworkConsolidated: function (serverData, callScope) {
                    var data = $.extend(true, {}, serverData);
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
                                    if (a.main.name.substr(0, 1).toUpperCase() == 'І' || a.main.name.substr(0, 1).toUpperCase() == 'Є' || a.main.name.substr(0, 1).toUpperCase() == 'Ї') {
                                        return 1;
                                    }


                                    if (b.main.name.substr(0, 1).toUpperCase() == 'І' || b.main.name.substr(0, 1).toUpperCase() == 'Є' || b.main.name.substr(0, 1).toUpperCase() == 'Ї') {
                                        return -1;
                                    }

                                    if ($filter('lowercase')($filter('translate')(a.main.name)) < $filter('lowercase')($filter('translate')(b.main.name))) {
                                        return -1;
                                    }
                                    if ($filter('lowercase')($filter('translate')(a.main.name)) > $filter('lowercase')($filter('translate')(b.main.name))) {
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
                                    report_detail['factDateStartExel'] = $filter('date')(report_detail.agrooperation.fact_date_start, 'dd.MM.yyyy HH:mm:ss') !== null ? $filter('date')(report_detail.agrooperation.fact_date_start, 'dd.MM.yyyy HH:mm:ss') : '';
                                    report_detail['factDateEndExel'] = $filter('date')(report_detail.agrooperation.fact_date_end, 'dd.MM.yyyy HH:mm:ss') !== null ? $filter('date')(report_detail.agrooperation.fact_date_end, 'dd.MM.yyyy HH:mm:ss') : '';
                                    report_detail['processed_percent'] = report_detail.agrooperation.fact_square / report_detail.agrooperation.plan_square * 100;
                                    report_detail.agrooperation.fact_square = report_detail.agrooperation.fact_square ? report_detail.agrooperation.fact_square : '';

                                    if (report_detail.agrooperation.materialSeedList.length > 0) {
                                        report_detail['seedTranslate'] = [{
                                            seed: $filter('translate')('seed'),
                                            plan: $filter('translate')('plan'),
                                            fact: $filter('translate')('fact'),
                                            material_unit_price: $filter('translate')('material.unit.price'),
                                            material_full_price: $filter('translate')('material.full.price'),
                                            material_total: $filter('translate')('material.total'),
                                            material_rate: $filter('translate')('material.rate')
                                        }]

                                    } else {
                                        report_detail['plantProtectorTranslate'] = []
                                    }
                                    if (report_detail.agrooperation.materialFertilizerList.length > 0) {
                                        report_detail['fertilizerTranslate'] = [{
                                            fertilizer: $filter('translate')('fertilizer'),
                                            plan: $filter('translate')('plan'),
                                            fact: $filter('translate')('fact'),
                                            material_unit_price: $filter('translate')('material.unit.price'),
                                            material_full_price: $filter('translate')('material.full.price'),
                                            material_total: $filter('translate')('material.total'),
                                            material_rate: $filter('translate')('material.rate')
                                        }]

                                    } else {
                                        report_detail['plantProtectorTranslate'] = []
                                    }
                                    if (report_detail.agrooperation.materialPlantProtectorList.length > 0) {
                                        report_detail['plantProtectorTranslate'] = [{
                                            plant_protector: $filter('translate')('plant_protector'),
                                            plan: $filter('translate')('plan'),
                                            fact: $filter('translate')('fact'),
                                            material_unit_price: $filter('translate')('material.unit.price'),
                                            material_full_price: $filter('translate')('material.full.price'),
                                            material_total: $filter('translate')('material.total'),
                                            material_rate: $filter('translate')('material.rate')
                                        }]

                                    } else {
                                        report_detail['plantProtectorTranslate'] = []
                                    }

                                    for (var f = 0; f < report_detail.agrooperation.materialFertilizerTotalList.length; f++) {
                                        var fertilizer = report_detail.agrooperation.materialFertilizerTotalList[f];
                                        fertilizer['fertilizerRatePlanExel'] = fertilizer.fertilizerRatePlan !== 0 ? $filter('number')(fertilizer.fertilizerRatePlan, 3) + " " + callScope.getFertilizerUnit(fertilizer.fertilizerUnit).name : '';
                                        fertilizer['fertilizerRatePlanTotalExel'] = fertilizer.fertilizerRatePlanTotal !== 0 ? $filter('number')(fertilizer.fertilizerRatePlanTotal, 3) + " " + callScope.getFertilizerUnit(fertilizer.fertilizerUnit).name : '';
                                        fertilizer['fertilizerRateFactExel'] = fertilizer.fertilizerRateFact !== 0 ? $filter('number')(fertilizer.fertilizerRateFact, 3) + " " + callScope.getFertilizerUnit(fertilizer.fertilizerUnit).name : '';
                                        fertilizer['fertilizerRateFactTotalExel'] = fertilizer.fertilizerRateFactTotal !== 0 ? $filter('number')(fertilizer.fertilizerRateFactTotal, 3) + " " + callScope.getFertilizerUnit(fertilizer.fertilizerUnit).name : '';

                                        fertilizer['fertilizerTotalPrice'] = callScope.getFertilizerPrice(fertilizer, report_detail.agrooperation.fact_square) ? callScope.getFertilizerPrice(fertilizer, report_detail.agrooperation.fact_square) : 0.00;
                                        fertilizer['fertilizerName'] = $filter('translate')(fertilizer.fertilizer.name)
                                    }


                                    for (var p = 0; p < report_detail.agrooperation.materialPlantProtectorTotalList.length; p++) {
                                        var plantProtector = report_detail.agrooperation.materialPlantProtectorTotalList[p];
                                        plantProtector['plantProtectorRatePlanExel'] = plantProtector.plantProtectorRatePlan !== 0 ? $filter('number')(plantProtector.plantProtectorRatePlan, 3) + " " + callScope.getPlantProtectorUnit(plantProtector.plantProtectorUnit).name : '';
                                        plantProtector['plantProtectorRatePlanTotalExel'] = plantProtector.plantProtectorRatePlanTotal !== 0 ? $filter('number')(plantProtector.plantProtectorRatePlanTotal, 3) + " " + callScope.getPlantProtectorUnit(plantProtector.plantProtectorUnit).name : '';
                                        plantProtector['plantProtectorRateFactExel'] = plantProtector.plantProtectorRateFact !== 0 ? $filter('number')(plantProtector.plantProtectorRateFact, 3) + " " + callScope.getPlantProtectorUnit(plantProtector.plantProtectorUnit).name : '';
                                        plantProtector['plantProtectorRateFactTotalExel'] = plantProtector.plantProtectorRateFactTotal !== 0 ? $filter('number')(plantProtector.plantProtectorRateFactTotal, 3) + " " + callScope.getPlantProtectorUnit(plantProtector.plantProtectorUnit).name : '';

                                        plantProtector['plantProtectorTotalPrice'] = callScope.getPlantProtectorPrice(plantProtector, report_detail.agrooperation.fact_square) ? callScope.getPlantProtectorPrice(plantProtector, report_detail.agrooperation.fact_square) : 0.00;
                                        plantProtector['plantProtectorName'] = $filter('translate')(plantProtector.plantProtector.name)
                                    }


                                    for (var s = 0; s < report_detail.agrooperation.materialSeedTotalList.length; s++) {
                                        var seed = report_detail.agrooperation.materialSeedTotalList[s];
                                        seed['seedRatePlanExel'] = seed.seedRatePlan !== 0 ? $filter('number')(seed.seedRatePlan, 3) + " " + callScope.getSeedUnit(seed.seedUnit).name : '';
                                        seed['seedRatePlanTotalExel'] = seed.seedRatePlanTotal !== 0 ? $filter('number')(seed.seedRatePlanTotal, 3) + " " + callScope.getSeedUnit(seed.seedUnit).name : '';
                                        seed['seedRateFactExel'] = seed.seedRateFact !== 0 ? $filter('number')(seed.seedRateFact, 3) + " " + callScope.getSeedUnit(seed.seedUnit).name : '';
                                        seed['seedRateFactTotalExel'] = seed.seedRateFactTotal !== 0 ? $filter('number')(seed.seedRateFactTotal, 3) + " " + callScope.getSeedUnit(seed.seedUnit).name : '';

                                        seed['seedTotalPrice'] = callScope.getSeedPrice(seed, report_detail.agrooperation.fact_square) ? callScope.getSeedPrice(seed, report_detail.agrooperation.fact_square) : 0.00;
                                        seed['seedName'] = $filter('translate')(seed.seed.name)
                                    }
                                }
                                cluster_list['squareTotal'] = callScope.getTotal(cluster_list.detail, 'square');
                                cluster_list['totalTmc'] = callScope.getTotalTmc(cluster_list.detail) ? callScope.getTotalTmc(cluster_list.detail) : 0.00;

                            }
                        }
                    }

                    return data.repData;
                },
                waybillConsolidated: function (data, callScope) {
                    data.waybillList.sort(function (a, b) {

                        if (sortColumn.waybillConsolidated.reverse === false) {
                            if (sortColumn.waybillConsolidated.column === 'time_in_geozone' || sortColumn.waybillConsolidated.column == 'time_out') {

                                var aa = eval('a.' + (sortColumn.waybillConsolidated.column).replace(' | translate', ''))
                                var bb = eval('b.' + (sortColumn.waybillConsolidated.column).replace(' | translate', ''))

                                if (aa == null) {
                                    return 1;
                                } else if (bb == null) {
                                    return -1;
                                }

                                if (parseInt(aa) === parseInt(bb)) {
                                    return 0;
                                } else if (data.waybillList) {
                                    return parseInt(aa) < parseInt(bb) ? -1 : 1;
                                } else {
                                    return parseInt(aa) < parseInt(bb) ? 1 : -1;
                                }


                            } else {
                                try {
                                    var aa = eval('a.' + (sortColumn.waybillConsolidated.column).replace(' | translate', ''))
                                    var bb = eval('b.' + (sortColumn.waybillConsolidated.column).replace(' | translate', ''))
                                    if (aa === bb) {
                                        return 0;
                                    } else if (data.waybillList) {
                                        return aa < bb ? -1 : 1;
                                    } else {
                                        return aa < bb ? 1 : -1;
                                    }

                                } catch (e) {
                                    if (aa == null) {
                                        return 1;
                                    } else if (bb == null) {
                                        return -1;
                                    }

                                }
                            }
                        } else {
                            if (sortColumn.waybillConsolidated.column === 'time_in_geozone' || sortColumn.waybillConsolidated.column === 'time_out') {
                                var aa = eval('a.' + (sortColumn.waybillConsolidated.column).replace(' | translate', ''))
                                var bb = eval('b.' + (sortColumn.waybillConsolidated.column).replace(' | translate', ''))

                                if (aa == null) {
                                    return -1;
                                } else if (bb == null) {
                                    return 1;
                                }

                                if (parseInt(aa) === parseInt(bb)) {
                                    return 0;
                                } else if (data.waybillList) {
                                    return parseInt(aa) < parseInt(bb) ? 1 : -1;
                                } else {
                                    return parseInt(aa) < parseInt(bb) ? -1 : 1;
                                }

                            } else {
                                try {
                                    var aa = eval('a.' + (sortColumn.waybillConsolidated.column).replace(' | translate', ''))
                                    var bb = eval('b.' + (sortColumn.waybillConsolidated.column).replace(' | translate', ''))

                                    if (aa === bb) {
                                        return -1;
                                    } else if (data.waybillList) {
                                        return aa < bb ? 1 : -1;
                                    } else {
                                        return aa < bb ? -1 : 1;
                                    }
                                } catch (e) {
                                    if (aa == null) {
                                        return -1;
                                    } else if (bb == null) {
                                        return 1;
                                    }
                                }
                            }
                        }
                    });
                    for (var i = 0; i < data.waybillList.length; i++) {
                        var reportDetail = data.waybillList[i];
                        if (reportDetail.refuelingDetailList.length > 0) {
                            reportDetail['time_in_geozone_exel'] = $filter('date')(reportDetail.time_in_geozone, 'HH:mm');
                            reportDetail['time_out_exel'] = $filter('date')(reportDetail.time_out, 'HH:mm');
                            reportDetail['time_duration_exel'] = $filter('secondsToDateTime2')(reportDetail.time_duration);
                            if ($filter('number')(reportDetail.geozone ? reportDetail.geozone.square_real : '', 1) === '0,0') {
                                reportDetail['processed_exel'] = "";
                            } else {
                                reportDetail['processed_exel'] = $filter('number')(reportDetail.geozone ? reportDetail.geozone.square_real : '', 1);
                            }
                            reportDetail['date_exel'] = $filter('date')(reportDetail.date, 'dd.MM.yyyy');
                            reportDetail['cultureNameExel'] = $filter('translate')(reportDetail.culture ? reportDetail.culture.name : '');
                            reportDetail['seedNameExel'] = $filter('translate')(reportDetail.seed ? reportDetail.seed.name : '');
                            reportDetail['workTypeNameExel'] = $filter('translate')(reportDetail.workType ? reportDetail.workType.name : '');
                        }
                    }
                    return data.repData;
                },
                controlTrackerData: function (data, callScope) {
                    for (var i = 0; i < data.violationList.length; i++) {
                        var violation = data.violationList[i];
                        violation['date_start_exel'] = $filter('date')(violation.date_start, 'dd.MM.yyyy HH:mm:ss');
                        violation['date_end_exel'] = $filter('date')(violation.date_end, 'dd.MM.yyyy HH:mm:ss');
                        violation['durationExel'] = $filter('secondsToDateTime')((violation.date_end - violation.date_start) / 1000);
                        violation['violation'] = callScope.trackerViolationType(violation);
                    }
                    return data.violationList;
                },
                bigBag: function (data, callScope) {
                    data.repList.sort(function (a, b) {
                        if (a.grainPackingVehicle.name < b.grainPackingVehicle.name) {
                            return -1;
                        }
                        if (a.grainPackingVehicle.name > b.grainPackingVehicle.name) {
                            return 1;
                        }
                        return 0;
                    });

                    for (let i = 0; i < data.repList.length; i++) {
                        let bigBag = data.repList[i];
                        for (let b = 0; b < bigBag.bigBagDetail.length; b++) {
                            let bigBagdetail = bigBag.bigBagDetail[b];
                            bigBagdetail.subDetailList.sort(function (a, b) {
                                if (a.unloading_tm < b.unloading_tm) {
                                    return -1;
                                }
                                if (a.unloading_tm > b.unloading_tm) {
                                    return 1;
                                }
                                return 0;
                            });

                            for (let s = 0; s < bigBagdetail.subDetailList.length; s++) {
                                let subDetail = bigBagdetail.subDetailList[s]
                                subDetail['unloading_tm_exel'] = $filter('date')(subDetail.unloading_tm * 1000, 'dd.MM.yyyy HH:mm:ss') + "(" + $filter('secondsToDateTime')(subDetail.unloading_duration) + ")";
                            }

                            if (bigBagdetail.geozone_in_tm) {
                                bigBagdetail['geozone_in_tm_exel'] = $filter('date')(bigBagdetail.geozone_in_tm * 1000, 'dd.MM.yyyy HH:mm:ss');
                            } else {
                                bigBagdetail['geozone_in_tm_exel'] = ''
                            }

                            for (let g = 0; g < bigBagdetail.geozoneInList.length; g++) {
                                let inGeozone = bigBagdetail.geozoneInList[g]
                                bigBagdetail['geozone_in_tm_exel'] = $filter('date')(inGeozone.tm_in * 1000, 'dd.MM.yyyy HH:mm:ss');
                            }
                            bigBagdetail['geozoneInListLength'] = bigBagdetail.geozoneInList.length ? bigBagdetail.geozoneInList.length : 0
                            bigBagdetail['subDetailListLength'] = bigBagdetail.subDetailList.length
                        }
                    }
                    return data.repList;
                },
                byFuelConsolidated: function (data, callScope) {
                    data.data.sort(function (a, b) {
                        if (a.vehicle_name < b.vehicle_name) {
                            return -1;
                        }
                        if (a.vehicle_name < b.vehicle_name) {
                            return 1;
                        }
                        return 0;
                    });
                    for (var i = 0; i < data.data.length; i++) {
                        var record = data.data[i];
                        record.detailList.forEach(function (item) {
                            item['date_exel'] = $filter('date')(item.date, 'dd.MM.yyyy');
                            item['time_start_exel'] = item.time_start > 0 ? $filter('date')(item.time_start * 1000, 'dd.MM.yyyy HH:mm:ss') : '';
                            item['time_end_exel'] = item.time_end > 0 ? $filter('date')(item.time_end * 1000, 'dd.MM.yyyy HH:mm:ss') : '';
                            item['time_going_exel'] = $filter('secondsToDateTimeWithDaysFull')(item.time_going);
                            item['time_stopping_exel'] = $filter('secondsToDateTimeWithDaysFull')(item.time_stopping);
                            item['working_night_time_exel'] = $filter('secondsToDateTimeWithDaysFull')(item.working_night_time);
                            item['ignition_night_time_exel'] = $filter('secondsToDateTimeWithDaysFull')(item.ignition_night_time);
                        })
                        record['time_start_exel'] = record.time_start > 0 ? $filter('date')(record.time_start * 1000, 'dd.MM.yyyy HH:mm:ss') : '';
                        record['time_end_exel'] = record.time_end > 0 ? $filter('date')(record.time_end * 1000, 'dd.MM.yyyy HH:mm:ss') : '';
                        record['time_going_exel'] = $filter('secondsToDateTimeWithDaysFull')(record.time_going);
                        record['time_stopping_exel'] = $filter('secondsToDateTimeWithDaysFull')(record.time_stopping)
                        record['working_night_time_exel'] = $filter('secondsToDateTimeWithDaysFull')(record.working_night_time)
                        record['ignition_night_time_exel'] = $filter('secondsToDateTimeWithDaysFull')(record.ignition_night_time)
                        //---
                        record['fuelGraphData'] = []
                        //table2 drt
                        if (record.sensorList.drt) {
                            record.detailList.forEach(function (item) {
                                item['ignition_moving_time_exel'] = $filter('secondsToDateTimeWithDaysFull')(item.ignition_moving_time);
                                item['ignition_stopping_time_exel'] = $filter('secondsToDateTimeWithDaysFull')(item.ignition_stopping_time);
                                item['ignition_working_time_exel'] = $filter('secondsToDateTimeWithDaysFull')(item.ignition_working_time);
                            });

                            //total
                            record['ignition_stopping_time_exel'] = $filter('secondsToDateTimeWithDaysFull')(record.ignition_stopping_time);
                            record['ignition_working_time_exel'] = $filter('secondsToDateTimeWithDaysFull')(record.ignition_working_time);
                            // ---
                        }
                        if (record.sensorList.drt) {
                            record['drtTotal'] = [{
                                total: $filter('translate')('total'),
                                fuel_used_drt_moving: record.fuel_used_drt_moving,
                                fuel_used_drt_moving_avg: record.fuel_used_drt_moving_avg,
                                ignition_moving_time_exel: $filter('secondsToDateTimeWithDaysFull')(record.ignition_moving_time),
                                fuel_used_drt_stopping: record.fuel_used_drt_stopping,
                                fuel_used_drt_stopping_avg: record.fuel_used_drt_stopping_avg,
                                ignition_stopping_time_exel: $filter('secondsToDateTimeWithDaysFull')(record.ignition_stopping_time),
                                distance: record.distance,
                                ignition_working_time_exel: $filter('secondsToDateTimeWithDaysFull')(record.ignition_working_time),
                                fuel_used_drt_avg: record.fuel_used_drt_avg,
                                fuel_used_drt: record.fuel_used_drt,
                            }]
                        } else {
                            record['drtTotal'] = []
                        }

                        // ---

                        //table2 dut
                        var dut_content = '';
                        if (record.sensorList.dut) {
                            record.detailList.forEach(function (item) {

                                item['ignition_moving_time_exel'] = $filter('secondsToDateTimeWithDaysFull')(item.ignition_moving_time);
                                item['ignition_stopping_time_exel'] = $filter('secondsToDateTimeWithDaysFull')(item.ignition_stopping_time);
                                item['ignition_working_time_exel'] = $filter('secondsToDateTimeWithDaysFull')(item.ignition_working_time);
                            });

                            //total
                            record['ignition_moving_time_exel'] = $filter('secondsToDateTimeWithDaysFull')(record.ignition_moving_time);
                            // ---
                        }
                        if (record.sensorList.dut) {
                            record['dutTotal'] = [{
                                total: $filter('translate')('total'),
                                fuel_level_start: record.fuel_level_start,
                                fuel_level_end: record.fuel_level_end,
                                fuel_used_dut_moving: record.fuel_used_dut_moving,
                                fuel_used_dut_moving_avg: record.fuel_used_dut_moving_avg,
                                ignition_moving_time_exel: $filter('secondsToDateTimeWithDaysFull')(record.ignition_moving_time),
                                fuel_used_dut_stopping: record.fuel_used_dut_stopping,
                                fuel_used_dut_stopping_avg: record.fuel_used_dut_stopping_avg,
                                ignition_stopping_time_exel: $filter('secondsToDateTimeWithDaysFull')(record.ignition_stopping_time),
                                distance: record.distance,
                                ignition_working_time_exel: $filter('secondsToDateTimeWithDaysFull')(record.ignition_working_time),
                                fuel_used_dut_avg: record.fuel_used_dut_avg,
                                fuel_used_dut: record.fuel_used_dut,
                            }]
                        } else {
                            record['drtTotal'] = []
                        }
                        // ---

                        //table3
                        record.refuelingAndDrainList.sort(function (a, b) {
                            if (a.start_tm < b.start_tm) {
                                return -1;
                            }
                            if (a.start_tm > b.start_tm) {
                                return 1;
                            }
                            return 0;
                        });

                        record.refuelingAndDrainList.forEach(function (item) {
                            item['date_exel'] = item.start_tm > 0 ? $filter('date')(item.start_tm * 1000, 'dd.MM.yyyy HH:mm:ss') : '';
                            item['litrExel'] = item.isRefueling ? $filter('number')(item.litr, 1) : '';
                            item['litrExel2'] = !item.isRefueling ? $filter('number')(item.litr, 1) : '';
                        });

                        //table4 wayblill
                        if (record.waybillList.length > 0) {
                            record.waybillTotal = [{
                                '1': $filter('translate')('total'),
                                '3': 0,
                                '4': 0,
                                '5': 0,
                                '6': 0,
                                '7': 0,
                                '12': 0,
                                '13': 0,
                                '14': 0,
                                '15': 0,
                                '16': 0,
                                '17': 0
                            }];
                        } else {
                            record.waybillTotal = []
                        }
                        record.waybillList.forEach(function (item) {
                            item['time_in_exel'] = $filter('date')(item.time_in, 'dd.MM.yyyy HH:mm:ss')
                            item['time_out'] = $filter('date')(item.time_out, 'dd.MM.yyyy HH:mm:ss')
                            item['workingTimeExel'] = $filter('translate')($filter('secondsToDateTime')(item.time_duration + item.time_duration_moving));
                            item['time_duration_exel'] = $filter('translate')($filter('secondsToDateTime')(item.time_duration - item.stop_with_engine_processed));
                            item['stop_with_engine_processed_exel'] = $filter('translate')($filter('secondsToDateTime')(item.stop_with_engine_processed + item.stop_with_engine_moving));
                            item['time_duration_moving_exel'] = $filter('translate')($filter('secondsToDateTime')(item.time_duration_moving - item.stop_with_engine_moving));
                            item['night_working_exel'] = $filter('translate')($filter('secondsToDateTime')(item.night_working));
                            item['worktypesExel'] = !item.is_working ? $filter('translate')('crossing.name') : item.trailer && item.trailer.worktype ? $filter('translate')(item.trailer.worktype.name) : '';

                            record.waybillTotal[0]['3'] += item.time_duration + item.time_duration_moving;
                            record.waybillTotal[0]['4'] += item.time_duration - item.stop_with_engine_processed;
                            record.waybillTotal[0]['5'] += item.stop_with_engine_processed + item.stop_with_engine_moving;
                            record.waybillTotal[0]['6'] += item.time_duration_moving - item.stop_with_engine_moving;
                            record.waybillTotal[0]['7'] += item.night_working;

                            record.waybillTotal[0]['12'] += item.processed;
                            record.waybillTotal[0]['13'] += item.distance_moving;
                            record.waybillTotal[0]['14'] += item.fuel_used;
                            record.waybillTotal[0]['15'] += item.fuel_used_processed;
                            record.waybillTotal[0]['16'] += item.fuel_used_moving;
                            record.waybillTotal[0]['17'] += item.processed_count;
                        });
                        //total
                        if (record.waybillList.length > 0) {
                            record['waybillTranslate'] = [{
                                timein: $filter('translate')('timein'),
                                report_waybill: $filter('translate')('report.waybill'),
                                timeout: $filter('translate')('timeout'),
                                workingtime: $filter('translate')('workingtime'),
                                including: $filter('translate')('including'),
                                rep_working: $filter('translate')('rep.working'),
                                rep_stopping: $filter('translate')('rep.stopping'),
                                rep_moving: $filter('translate')('rep.moving'),
                                night_work: $filter('translate')('night.work'),
                                mechanic: $filter('translate')('mechanic'),
                                field: $filter('translate')('field'),
                                worktypes: $filter('translate')('worktypes'),
                                trailer: $filter('translate')('trailer'),
                                processed: $filter('translate')('processed'),
                                crossing: $filter('translate')('crossing'),
                                fuel: $filter('translate')('fuel'),
                                fuel_used_processed: $filter('translate')('fuel.used.processed'),
                                fuel_used_moving1: $filter('translate')('fuel.used.moving1'),
                                processed_counted: $filter('translate')('processed.counted')
                            }]
                        } else {
                            record['waybillTranslate'] = []
                        }


                        if (record.sensorList.drt > 0) {
                            record['drtTranslate'] = [{
                                sensor_fuel_drt: $filter('translate')('sensor.fuel.drt'),
                                date: $filter('translate')('date'),
                                fuel_level: $filter('translate')('fuel.level'),
                                going: $filter('translate')('going'),
                                stopping_working: $filter('translate')('stopping.working'),
                                distance: $filter('translate')('distance'),
                                rep_stopping: $filter('translate')('rep.stopping'),
                                ignition_working_time: $filter('translate')('ignition_working_time'),
                                fuel_100km: $filter('translate')('fuel.100km'),
                                fuel_used: $filter('translate')('fuel.used'),
                                start_litr: $filter('translate')('start_litr'),
                                end_litr: $filter('translate')('end_litr'),
                                fuel_1hour: $filter('translate')('fuel.1hour'),

                                crossing: $filter('translate')('crossing'),
                                fuel: $filter('translate')('fuel'),
                                fuel_used_processed: $filter('translate')('fuel.used.processed'),
                                fuel_used_moving1: $filter('translate')('fuel.used.moving1'),
                                processed_counted: $filter('translate')('processed.counted'),
                            }]
                        } else {
                            record['wdrtTranslate'] = []
                        }
                        let drtList = [];
                        if (record.sensorList.drt) {
                            record.detailList.forEach(function (item) {
                                drtList.push({
                                    date_exel: $filter('date')(item.date, 'dd.MM.yyyy'),
                                    fuel_used_drt_moving: item.fuel_used_drt_moving,
                                    fuel_used_drt_moving_avg: item.fuel_used_drt_moving_avg,
                                    ignition_moving_time_exel: $filter('secondsToDateTimeWithDaysFull')(item.ignition_moving_time),
                                    fuel_used_drt_stopping: item.fuel_used_drt_stopping,
                                    fuel_used_drt_stopping_avg: item.fuel_used_drt_stopping_avg,
                                    ignition_stopping_time_exel: $filter('secondsToDateTimeWithDaysFull')(item.ignition_stopping_time),
                                    distance: item.distance,
                                    ignition_working_time_exel: $filter('secondsToDateTimeWithDaysFull')(item.ignition_working_time),
                                    fuel_used_drt_avg: item.fuel_used_drt_avg,
                                    fuel_used_drt: item.fuel_used_drt,

                                })
                            });
                        }
                        record['drtList'] = drtList;
                    }
                    return data.data;
                },
                vehicleTask: function (serverData, callScope) {
                    var rep = $.extend(true, {}, serverData);
                    rep.repData.sort(function (a, b) {
                        if ((a.geozoneGroup ? a.geozoneGroup.name : '').localeCompare((b.geozoneGroup ? b.geozoneGroup.name : '')) < (b.geozoneGroup ? b.geozoneGroup.name : '').localeCompare((a.geozoneGroup ? a.geozoneGroup.name : ''))) {
                            return -1;
                        }
                        if ((a.geozoneGroup ? a.geozoneGroup.name : '').localeCompare((b.geozoneGroup ? b.geozoneGroup.name : '')) > (b.geozoneGroup ? b.geozoneGroup.name : '').localeCompare((a.geozoneGroup ? a.geozoneGroup.name : ''))) {
                            return 1;
                        }
                        return 0;
                    });

                    for (var i = 0; i < rep.repData.length; i++) {
                        var data = rep.repData[i];

                        data.reportVehicleTaskList.sort(function (a, b) {
                            if ($filter('translate')(a.workType.name).localeCompare($filter('translate')(b.workType.name)) < $filter('translate')(b.workType.name).localeCompare($filter('translate')(a.workType.name))) {
                                return -1;
                            }
                            if ($filter('translate')(a.workType.name).localeCompare($filter('translate')(b.workType.name)) > $filter('translate')(b.workType.name).localeCompare($filter('translate')(a.workType.name))) {
                                return 1;
                            }
                            return 0;
                        });

                        for (var z = 0; z < data.reportVehicleTaskList.length; z++) {
                            let item = data.reportVehicleTaskList[z];
                            item['workTypeName'] = $filter('translate')(item.workType ? item.workType.name : '')

                            item.detailCultureList.sort(function (a, b) {
                                if ($filter('translate')(a.culture ? a.culture.name : '').localeCompare($filter('translate')(b.culture ? b.culture.name : '')) < $filter('translate')(b.culture ? b.culture.name : ' ').localeCompare($filter('translate')(a.culture ? a.culture.name : ''))) {
                                    return -1;
                                }
                                if ($filter('translate')(a.culture ? a.culture.name : '').localeCompare($filter('translate')(b.culture ? b.culture.name : '')) > $filter('translate')(b.culture ? b.culture.name : ' ').localeCompare($filter('translate')(a.culture ? a.culture.name : ''))) {
                                    return 1;
                                }
                                return 0;
                            });

                            for (var q = 0; q < item.detailCultureList.length; q++) {
                                let row = item.detailCultureList[q];
                                row['cultureName'] = $filter('translate')(row.culture ? row.culture.name : '')
                                row['leftTotal'] = $filter('number')(row.plan - row.fact, 2)
                            }
                        }


                        data.reportVehicleTaskList.sort(function (a, b) {
                            if ($filter('translate')(a.workType.name).localeCompare($filter('translate')(b.workType.name)) < $filter('translate')(b.workType.name).localeCompare($filter('translate')(a.workType.name))) {
                                return -1;
                            }
                            if ($filter('translate')(a.workType.name).localeCompare($filter('translate')(b.workType.name)) > $filter('translate')(b.workType.name).localeCompare($filter('translate')(a.workType.name))) {
                                return 1;
                            }
                            return 0;
                        });

                        let newReportVehicleTaskList = [];
                        for (var k = 0; k < data.reportVehicleTaskList.length; k++) {
                            let item = data.reportVehicleTaskList[k];

                            item.detailGeozoneList.sort(function (a, b) {
                                if (a.geozone.name.localeCompare(b.geozone.name) < b.geozone.name.localeCompare(a.geozone.name)) {
                                    return -1;
                                }
                                if (a.geozone.name.localeCompare(b.geozone.name) > b.geozone.name.localeCompare(a.geozone.name)) {
                                    return 1;
                                }
                                return 0;
                            });
                            item['workTypeName'] = $filter('translate')(item.workType.name)

                            if (item.plan || item.fact) {
                                for (var d = 0; d < item.detailGeozoneList.length; d++) {
                                    let detailGeozone = item.detailGeozoneList[d];
                                    detailGeozone['cultureName'] = $filter('translate')(detailGeozone.culture.name);
                                    detailGeozone['timeInExel'] = $filter('date')(detailGeozone.time_in, 'dd.MM.yyyy HH:mm');
                                    detailGeozone['timeOutExel'] = $filter('date')(detailGeozone.time_out, 'dd.MM.yyyy HH:mm');
                                }
                            } else {
                                delete data.reportVehicleTaskList[item]
                            }
                            if (item.plan || item.fact) {
                                newReportVehicleTaskList.push(item)
                            }
                        }
                        data['newReportVehicleTaskList'] = newReportVehicleTaskList;
                    }
                    return rep.repData;
                },
                timesheetReport: function (serverData, callScope) {
                    serverData.sort(function (a, b) {
                        if (a.timesheetUser.fio.localeCompare(b.timesheetUser.fio) < b.timesheetUser.fio.localeCompare(a.timesheetUser.fio)) {
                            return -1;
                        }
                        if (a.timesheetUser.fio.localeCompare(b.timesheetUser.fio) > b.timesheetUser.fio.localeCompare(a.timesheetUser.fio)) {
                            return 1;
                        }
                        return 0;
                    });
                    for (let i = 0; i < serverData.length; i++) {
                        let item = serverData[i];
                        item['number'] = i + 1
                        item['workingTime'] = $filter('secondsToDateTime2')(item.working_time)
                    }

                    return serverData;
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
