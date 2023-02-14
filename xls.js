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
                    const regex = /&#179;/gi;

                    switch (type) {
                        case "materialUsedSeed":
                            postData.data = this.materialUsedSeed(data.data, callScope);
                            postData.params = {
                                storeName: data.params.storeName,
                                structurel_unit: data.params.geozoneName !== '' ? data.params.geozoneName : data.params.geozoneGroupName,
                                agricultural_enterprise: data.params.clusterName,
                                date_from: data.params['date_from'],
                                date_to: data.params['date_to']
                            }
                            break;
                        case "materialUsedFertPlant":
                            postData.data = this.materialUsedFertPlant(data.data, callScope);
                            postData.params = {
                                storeName: data.params.storeName,
                                structurel_unit: data.params.geozoneName !== '' ? data.params.geozoneName : data.params.geozoneGroupName,
                                agricultural_enterprise: data.params.clusterName,
                                date_from: data.params['date_from'],
                                date_to: data.params['date_to']
                            }
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
                            let header = {};
                            if(data.data.repData.length>0){
                                (data.data.repData[0].detailList).map((item, index)=>{
                                    header[index+1] = item.vehicle ? item.vehicle.name : '';
                                });
                            }

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
                                header: header,
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
                        case "landBankGeozoneDetail":
                            let resultObject = this.landBankGeozoneDetail(data, callScope);
                            postData.data = resultObject.data;
                            console.log(data.data)

                            postData.params = {
                                total: resultObject.total,
                                technologicalLossesSquare: $filter('number')(data.params.technologicalLossesSquare, 2),
                                selfCaptureSquare: $filter('number')(data.params.selfCaptureSquare, 2),
                                geozone_name: callScope.shareDetailTitle
                            }
                            break;
                        case "farmByDevice":
                            postData.data = this.farmByDevice(data.data, callScope);
                            postData.params = {
                                dateStartExel: $filter('date')(data.data.date_start * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                dateEndExel: $filter('date')(data.data.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                weightNettoTotal: callScope.getTotalByArray(data.data.repDetail, 'weightNetto')
                            }
                            break;
                        case "controlWeightByUnloading":
                            postData.data = this.controlWeightByUnloading(data.data, callScope);
                            postData.params = {
                                dateStartExel: $filter('date')(data.data.date_start * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                dateEndExel: $filter('date')(data.data.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                weight_m_kub: $filter('translate')('weight.m_kub').replace(regex, '³'),
                                farm_device_name: data.data.farm_device_name
                            }
                            break;
                        case "weightAndUnloading":
                            postData.data = this.weightAndUnloading(data.data, callScope);
                            postData.params = {
                                dateStartExel: $filter('date')(data.data.date_start * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                dateEndExel: $filter('date')(data.data.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                weight_m_kub: $filter('translate')('weight.m_kub').replace(regex, '³'),
                                farm_device_name: data.data.farm_device_name
                            }
                            break;
                        case "byVehicleAssign":
                            postData.data = this.byVehicleAssign(data.data, callScope);
                            postData.params = {
                                dateStartExel: $filter('date')(data.data.date_start * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                dateEndExel: $filter('date')(data.data.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                            }
                            break;
                        case "controlUnloadingPlace":
                            postData.data = this.controlUnloadingPlace(data.data, callScope);
                            postData.params = {
                                dateStartExel: $filter('date')(data.data.date_start * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                dateEndExel: $filter('date')(data.data.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                weight_m_kub: $filter('translate')('weight.m_kub').replace(regex, '³'),
                            }
                            break;
                        case "byCombine":
                            postData.data = this.byCombine(data.data, callScope);
                            postData.params = {
                                dateStartExel: $filter('date')(data.data.date_start * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                dateEndExel: $filter('date')(data.data.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                weight_m_kub: $filter('translate')('weight.m_kub').replace(regex, '³'),
                                weight_kub: callScope.getTotalByArray(data.data.repDetail, 'weight_kub'),
                                weight_kg: callScope.getTotalByArray(data.data.repDetail, 'weight_kg'),
                                square: callScope.getTotalByArray(data.data.repDetail, 'square'),
                                vehicle_name: data.data.vehicle_from_name
                            }
                            break;
                        case "byFarmDevice":
                            postData.data = this.byFarmDevice(data.data, callScope);
                            postData.params = {
                                dateStartExel: $filter('date')(data.data.date_start * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                dateEndExel: $filter('date')(data.data.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                weight_m_kub: $filter('translate')('weight.m_kub').replace(regex, '³'),
                                weightNetto: callScope.getTotalByArray(data.data.repDetail, 'weightNetto', 0),
                                farm_name: data.data.farm_name
                            }
                            break;
                        case "unloadingByField":
                            postData.data = this.unloadingByField(data.data, callScope);
                            postData.params = {
                                date_rep: $filter('date')(data.data.oper_day, 'dd.MM.yyyy'),
                            }
                            break;
                        case "byOverloader":
                            postData.data = this.byOverloader(data.data, callScope);

                            postData.params = {
                                date_start: $filter('date')(data.data.date_start * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                date_end: $filter('date')(data.data.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                weight_m_kub: $filter('translate')('weight.m_kub').replace(regex, '³'),
                                harvestUnloadingToListLength: data.data.harvestUnloadingToList.length,
                                harvestUnloadingFromListLength: data.data.harvestUnloadingFromList.length,
                                weight_kub_to: callScope.getTotal(data.data.harvestUnloadingToList, 'weight_kub'),
                                weight_kub_from: callScope.getTotal(data.data.harvestUnloadingToList, 'weight_kg'),
                                weight_kg_from: callScope.getTotal(data.data.harvestUnloadingToList, 'weight_kub'),
                                weight_kg_to: callScope.getTotal(data.data.harvestUnloadingToList, 'weight_kg'),
                            }
                            break;
                        case "byOverloaderConsolidated":
                            postData.data = this.byOverloaderConsolidated(data.data, callScope);

                            postData.params = {
                                date_start: $filter('date')(data.data.date_start * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                date_end: $filter('date')(data.data.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                weight_m_kub: $filter('translate')('weight.m_kub').replace(regex, '³'),
                                overloader: data.data.overloader ? data.data.overloader : ''
                            }
                            break;
                        case "grainToFarm":
                            postData.data = this.grainToFarm(data.data, callScope);

                            postData.params = {
                                date_start: $filter('date')(data.data.date_start * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                date_end: $filter('date')(data.data.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                weight_m_kub: $filter('translate')('weight.m_kub').replace(regex, '³'),
                                farm_name: data.data.farm_name ? data.data.farm_name : ''
                            }
                            break;
                        case "grainToFarmConsolidated":
                            postData.data = this.grainToFarmConsolidated(data.data, callScope);

                            postData.params = {
                                date_start: $filter('date')(data.data.date_start * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                date_end: $filter('date')(data.data.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                weight_m_kub: $filter('translate')('weight.m_kub').replace(regex, '³'),
                                farm_name: data.data.farm_name ? data.data.farm_name : ''
                            }
                            break;

                        case "materialWaybill":
                            let resultData = this.materialWaybill(data.params, callScope);

                            let totalPrice = 0;
                            for (let i = 0; i < resultData.length; i++) {
                                totalPrice += resultData[i].intPrice ? parseFloat(resultData[i].intPrice) : 0;
                            }

                            let {
                                number,
                                date,
                                storageStore,
                                storeKeeper,
                                storageStoreTo,
                                vehicle,
                                driver,
                                comment
                            } = data.params.materialWaybill;

                            postData.params = {
                                number: number ? number : '',
                                date: $filter('date')(date, 'dd.MM.yyyy'),
                                storeFrom: storageStore.name + " (" + storeKeeper.name + ")",
                                storeTo: storageStoreTo.name + (comment ? ' - ' + comment : ''),
                                byVehicle: driver ? vehicle.name + " (" + driver.name + ")" : vehicle.name,
                                totalPrice: $filter('number')(totalPrice, 2)
                            }

                            postData.data = resultData;
                            break;
                        case "materialLeft":
                            postData.data = this.materialLeft(data.data, callScope);

                            postData.params = {}
                            break;
                        case "fuelAnalytic":
                            postData.data = this.fuelAnalytic(data.data, callScope);

                            postData.params = {
                                date_start: $filter('date')(data.data.date_start * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                date_end: $filter('date')(data.data.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                            }
                            break;
                        case "landBankDashboardDetail":
                            let result = this.landBankDashboardDetail(data, callScope);
                            postData.data = result.data;

                            postData.params = {
                                total: result.total,
                                title: data.params.shareDetailTitle
                            }
                            break;
                        case "byField":
                            postData.data = this.byField(data, callScope);
                            let rep = data.data
                            var cultures = "";
                            for (var z = 0; z < rep.cultureList.length; z++) {
                                var culture = rep.cultureList[z]
                                cultures += $filter('translate')(culture.name) + " ";
                            }

                            postData.params = {
                                cultures: cultures,
                                geozone_name: rep.geozone_name,
                                square: rep.square,
                                perimetr: rep.perimetr,
                                processed: (rep.square - rep.notprocessed),
                                notprocessed: (rep.square - rep.notprocessed),
                                fieldName: rep.geozone_name,
                                date_start_exel: $filter('date')(rep.date_start * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                date_end_exel: $filter('date')(rep.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                            }
                            break;
                        case "byVehicleNew":
                            postData.data = this.byVehicleNew(data, callScope);
                            postData.params = {
                                vehicle_name: data.data.vehicle_name,
                                distance: $filter('number')(data.data.distance, 2),
                                distance_exel: $filter('number')(data.data.distance - data.data.distance_out_field, 2),
                                distance_out_field: $filter('number')(data.data.distance_out_field, 2),
                                processed_exel: $filter('number')(callScope.getFloatTotal(data.data.reportDetailList, 'processed'), 2),
                                speed_avg: data.data.speed_avg,
                                speed_max: data.data.speed_max,
                                stop_num_exel: $filter('translate')(data.data.stop_num + "(" + $filter('translate')($filter('secondsToDateTime')(data.data.stop_time))),
                                parking_num_exel: $filter('translate')(data.data.parking_num + "(" + $filter('translate')($filter('secondsToDateTime')(data.data.parking_time))),
                                ignition_working_time: $filter('translate')($filter('secondsToDateTime')(data.data.ignition_working_time)),
                                fuel_used: $filter('number')(data.data.fuel_used, 2),
                                petrol_refueling: $filter('number')(data.data.petrol_refueling, 2),
                                date_start_exel: $filter('date')(data.data.date_start * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                date_end_exel: $filter('date')(data.data.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                            }
                            break;
                        case "byVehicleCar":
                            postData.data = this.byVehicleCar(data, callScope);
                            postData.params = {
                                fuel_used: data.data.distance,
                                distance: data.data.distance,
                                vehicle_name: data.data.vehicle_name,
                                date_start_exel: $filter('date')(data.data.time_start * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                date_end_exel: $filter('date')(data.data.time_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                            }
                            break;
                        case "byFuelDetail":
                            postData.data = this.byFuelDetail(data, callScope);
                            let repByFuelDetail = data.data;
                            postData.params = {
                                date_start_exel: $filter('date')(repByFuelDetail.time_start * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                date_end_exel: $filter('date')(repByFuelDetail.time_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                distance: repByFuelDetail.distance,
                                going_time_exel: $filter('translate')($filter('secondsToDateTime')(repByFuelDetail.going_time)),
                                stop_with_engine: $filter('translate')($filter('secondsToDateTime')((repByFuelDetail.ignition_working_time - repByFuelDetail.going_time))),
                                parking_time_exel: $filter('translate')($filter('secondsToDateTime')(repByFuelDetail.parking_time)),
                                ignition_working_time_exel: $filter('translate')($filter('secondsToDateTime')(repByFuelDetail.ignition_working_time)),
                                start_litr: $filter('number')(repByFuelDetail.start_litr, 2),
                                end_litr: $filter('number')(repByFuelDetail.end_litr, 2),
                                refueling: repByFuelDetail.refueling,
                                petrol_refueling: repByFuelDetail.petrol_refueling,
                                fuel_drain: repByFuelDetail.fuel_drain,
                                fuel_used: repByFuelDetail.fuel_used,
                                vehicle_name: repByFuelDetail.vehicle_name,
                            }
                            break;
                        case "byVehicleGroup":
                            postData.data = this.byVehicleGroup(data, callScope);
                            let repByVehicleGroup = data.data;
                            postData.params = {
                                date_start_exel: $filter('date')(repByVehicleGroup.date_start * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                date_end_exel: $filter('date')(repByVehicleGroup.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                group_name: repByVehicleGroup.group_name,
                                geozone_speed: repByVehicleGroup.geozone_speed,
                                distanceSpeedGeather: $filter('translate')('distance.speed.geather', {'speed': " " + repByVehicleGroup.geozone_speed}),
                                distanceSpeedLess: $filter('translate')('distance.speed.less', {'speed': " " + repByVehicleGroup.geozone_speed}),
                            }
                            break;
                        case "byRoute":
                            postData.data = this.byRoute(data, callScope);
                            let repByRoute = data.data;
                            postData.params = {
                                date_start_exel: $filter('date')(repByRoute.date_start * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                date_end_exel: $filter('date')(repByRoute.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                routeName: repByRoute.route_name,
                            }
                            break;
                        case "cropRotation":
                            postData.data = this.сropRotation(data, callScope);
                            let yearObject = {};
                            for (let i = 0; i < data.params.yearList.length; i++) {
                                yearObject[i] = data.params.yearList[i]
                            }

                            postData.params = {
                                yearObject: yearObject,
                            }
                            break;
                        case "vehicleTaskAgronom":
                            postData.data = this.vehicleTaskAgronom(data, callScope);
                            postData.params = {
                                oper_day: $filter('date')(data.data.oper_day, 'dd.MM.yyyy'),
                            }
                            break;
                        case "vehicleTaskBySource":
                            postData.data = this.vehicleTaskBySource(data, callScope);
                            postData.params = {
                                oper_day: $filter('date')(data.data.oper_day, 'dd.MM.yyyy'),
                                plan_square: $filter('number')(callScope.getTotalByField('plan_square', data.data), 2),
                                plan_fuel_used: $filter('number')(callScope.getTotalByField('plan_fuel_used', data.data), 2),
                                fact_square: $filter('number')(callScope.getTotalByField('fact_square', data.data), 2),
                                fact_fuel_used: $filter('number')(callScope.getTotalByField('fact_fuel_used', data.data), 2),
                            }
                            break;
                        case "timesheetReportDetail":
                            postData.data = this.timesheetReportDetail(data.data, callScope);
                            postData.params = {
                                reportDate: data.params.month.name + " " + data.params.year,
                            }
                            break;
                        case "grainToFarmConsolidatedCar":
                            postData.data = this.grainToFarmConsolidatedCar(data, callScope);
                            let grainToFarmConsolidatedCar = data.data;
                            postData.params = {
                                date_start_exel: $filter('date')(grainToFarmConsolidatedCar.date_start * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                date_end_exel: $filter('date')(grainToFarmConsolidatedCar.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                farm_name: grainToFarmConsolidatedCar.farm_name
                            }
                            break;
                        case "agrooperationPlan":
                            postData.data = this.agrooperationPlan(data, callScope);
                            let agrooperationPlan = data.data;
                            postData.params = {
                                year: agrooperationPlan.year
                            }
                            break;
                        default:
                            postData = {}
                    }
                    // console.log(JSON.stringify(postData))
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
                                report['workByAgronom'] = report.agrooperation.is_confirmation ?
                                    (report.agrooperation.agrooperationFactSquareAgronomType === "Full" ?
                                        $filter('translate')('geozone.processed.type.full') : $filter('translate')('geozone.processed.type.part') + ": " + $filter('number')(report.agrooperation.factSquareByAgronom, 2)) :
                                    (report.agrooperation.factSquareByAgronom ? $filter('number')(report.agrooperation.factSquareByAgronom, 2) : '')
                            }
                        }
                    }

                    return data.repData;
                },
                materialUsedSeed: function (data, callScope) {
                    var res = [];
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].materialRateFactTotal > 0 || data[i].materialRateFact > 0) {
                            res.push({
                                'seed': data[i].material ? $filter('translate')(data[i].material.name) : '',
                                'culture': data[i].material ? $filter('translate')(data[i].material.cultureName) : '',
                                'geozoneName': data[i].geozone ? data[i].geozone.name : '',
                                'geozoneGroupName': data[i].agrooperation && data[i].agrooperation.geozone ? data[i].agrooperation.geozone.geozone_group_name : '',
                                'factSquare': data[i].agrooperation ? data[i].agrooperation.fact_square : data[i].fact_processed || '',
                                'unitName': callScope.getUnitName(data[i].materialUnit),
                                'byHaPlan': '',
                                'totalPlan': '',
                                'byHaFact': data[i].materialRateFact,
                                'totalFact': data[i].materialRateFactTotal,
                                'price': data[i].materialUnitPrice ? data[i].materialUnitPrice : '',
                                'priceSum': data[i].materialUnitPrice ? (parseFloat(data[i].materialUnitPrice) * parseFloat(data[i].materialRateFactTotal)) : '',
                            });
                        }
                    }
                    res.sort((a, b) => (a.seed > b.seed) ? 1 : ((b.seed > a.seed) ? -1 : 0))
                    return res;
                },

                materialUsedFertPlant: function (data, callScope) {
                    var res = [];
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].materialRateFactTotal > 0 || data[i].materialRateFact > 0) {
                            res.push({
                                'materialName': data[i].material ? $filter('translate')(data[i].material.name) : '',
                                'geozoneName': data[i].geozone ? data[i].geozone.name : '',
                                'geozoneGroupName': data[i].agrooperation && data[i].agrooperation.geozone ? data[i].agrooperation.geozone.geozone_group_name : '',
                                'factSquare': data[i].agrooperation ? data[i].agrooperation.fact_square : data[i].fact_processed || '',
                                'unitName': callScope.getUnitName(data[i].materialUnit),
                                'byHaPlan': '',
                                'totalPlan': '',
                                'byHaFact': data[i].materialRateFact,
                                'totalFact': data[i].materialRateFactTotal
                            });
                        }
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
                            reportDetail['worktype_name'] = $filter('translate')(report.workType ? report.workType.name : '');
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

                    data.agroworkList.sort(function (a, b) {
                        if ($filter('lowercase')($filter('translate')(a.vehicle.name)) < $filter('lowercase')($filter('translate')(b.vehicle.name))) {
                            return -1;
                        }
                        if ($filter('lowercase')($filter('translate')(a.vehicle.name)) > $filter('lowercase')($filter('translate')(b.vehicle.name))) {
                            return 1;
                        }
                        return 0;
                    });


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
                        let vehicle = {};
                        if(item.detailList.length>0){
                            (item.detailList).map((item, index)=>{
                                vehicle[index+1] = item;
                            });
                        }
                        item.vehicle = vehicle
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
                        if (record.waybillList.length > 0) {
                            record.waybillTotal[0]['3'] = $filter('secondsToDateTime')(record.waybillTotal[0]['3'])
                            record.waybillTotal[0]['4'] = $filter('secondsToDateTime')(record.waybillTotal[0]['4'])
                            record.waybillTotal[0]['5'] = $filter('secondsToDateTime')(record.waybillTotal[0]['5'])
                            record.waybillTotal[0]['6'] = $filter('secondsToDateTime')(record.waybillTotal[0]['6'])
                            record.waybillTotal[0]['7'] = $filter('secondsToDateTime')(record.waybillTotal[0]['7'])
                        }
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
                landBankGeozoneDetail: function (data, callScope) {
                    let serverData = $.extend(true, [], data.data);
                    let sortColumn = data.params.sortColumn;

                    let bankOrganizationList = callScope.bankOrganizationList;
                    let newArray = [];
                    for (let o = 0; o < bankOrganizationList.length; o++) {
                        for (let i = 0; i < serverData.length; i++) {
                            let item = serverData[i];
                            let tenant = null;
                            if (item.bank_organization_id === bankOrganizationList[o].id) {
                                for (let l = 0; l < newArray.length; l++) {
                                    if (newArray[l].id === item.bank_organization_id) {
                                        tenant = newArray[l]
                                        break;
                                    }
                                }
                                if (!tenant) {
                                    tenant = {
                                        id: bankOrganizationList[o].id,
                                        name: bankOrganizationList[o].name,
                                        isOwn: bankOrganizationList[o].isOwn

                                    }
                                    tenant['items'] = [];
                                    newArray.push(tenant);
                                }
                                tenant.items.push(item)
                            }
                        }
                    }

                    newArray.sort(function (a, b) {
                        if ((a.isOwn) < (b.isOwn)) {
                            return 1;
                        }
                        if ((a.isOwn) > (b.isOwn)) {
                            return -1;
                        }
                        return 0;
                    });

                    for (let i = 0; i < newArray.length; i++) {
                        let bank_organization = newArray[i]

                        //soooooorttt---------------------------------------------
                        if (sortColumn.reverse === false) {
                            bank_organization.items.sort(function (a, b) {
                                var aa = eval("a." + (sortColumn.column))
                                var bb = eval("b." + (sortColumn.column))
                                if (aa == null) {
                                    return 1;
                                } else if (bb == null) {
                                    return -1;
                                }
                                if (aa < bb) {
                                    return -1;
                                }
                                if (aa > bb) {
                                    return 1;
                                }
                                return 0;
                            });
                        } else {
                            bank_organization.items.sort(function (a, b) {
                                var aa = eval("a." + (sortColumn.column))
                                var bb = eval("b." + (sortColumn.column))
                                if (aa == null) {
                                    return -1;
                                } else if (bb == null) {
                                    return 1;
                                }
                                if (aa < bb) {
                                    return 1;
                                }
                                if (aa > bb) {
                                    return 1;
                                }
                                return 0;
                            });
                        }
                        //------------------------------------------------------

                        for (let z = 0; z < bank_organization.items.length; z++) {
                            let share = bank_organization.items[z];
                            let right1_fio = ""
                            for (let z = 0; z < share.right1FioList.length; z++) {
                                right1_fio = right1_fio + "  " + share.right1FioList[z] ? (share.right1FioList[z] === null ? "" : share.right1FioList[z]) : '';
                            }

                            let right2_fio = ''
                            if (share.bankTenant) {
                                right2_fio = share.bankTenant.name;
                            } else if (share.right2_fio) {
                                right2_fio = share.right2_fio;
                            }
                            share['right1_fio'] = right1_fio;
                            share['right2_fio'] = right2_fio;


                            let kadastr_number = share.kadastr_number

                            for (let h = 0; h < share.bankShareExchangeList.length; h++) {
                                let record = share.bankShareExchangeList[h]
                                kadastr_number += "   " + record.kadastr_number + " (" + $filter('number')(record.bankShareToSquare, 4) + ")";
                            }
                            share['kadastr_number'] = kadastr_number;
                            share['shareSquareExel'] = callScope.getShareSquare(share, bank_organization);
                            share['contractDateToExel'] = share.contract_date_to ? $filter('date')(share.contract_date_to, 'dd.MM.yyyy') : ''
                            share['contractSupplementaryDateToExel'] = share.contract_supplementary_date_to ? $filter('date')(share.contract_supplementary_date_to, 'dd.MM.yyyy') : ''
                            share['contractStatusExel'] = callScope.getContractStatus(share)

                        }
                        bank_organization['totalBank'] = callScope.countShareSquare(bank_organization.items, callScope.shareDetailFilter, {bank_organization_id: bank_organization.id}) + callScope.countRoadSquare(callScope.bankGeozoneRoadList, callScope.shareDetailFilter, bank_organization.isOwn);

                    }
                    let total = $filter('number')(callScope.countShareSquare(serverData, callScope.shareDetailFilter, {}) + callScope.countRoadSquare(callScope.bankGeozoneRoadList, callScope.shareDetailFilter, true), 4);
                    return {
                        data: newArray,
                        total: total
                    };
                },
                farmByDevice: function (data, callScope) {
                    let newData = []
                    let serverData = $.extend(true, [], data);
                    for (var i = 0; i < serverData['repDetail'].length; i++) {
                        var reportDetail = serverData['repDetail'][i];
                        reportDetail['detailData'] = {}
                        let newArray = []
                        for (var r = 0; r < reportDetail.length; r++) {
                            var detail = reportDetail[r]

                            detail['tmExel'] = $filter('date')(detail.tm * 1000, 'dd.MM.yyyy HH:mm:ss');
                            detail['culture_name_exel'] = detail.culture_name ? $filter('translate')(detail.culture_name) : '';

                            if (detail.farmElevatorFrom_name) {
                                detail['farmElevatorFrom_name'] = detail.farmElevatorFrom_name
                            } else {
                                detail['farmElevatorFrom_name'] = ''
                            }

                            if (detail.farmStoreFrom_name) {
                                detail['farmStoreFrom_name'] = detail.farmStoreFrom_name
                            } else {
                                detail['farmStoreFrom_name'] = ''
                            }

                            if (detail.farmDryingFrom_name) {
                                detail['farmDryingFrom_name'] = detail.farmDryingFrom_name
                            } else {
                                detail['farmDryingFrom_name'] = ''
                            }

                            if (detail.farmStoreTo_name) {
                                detail['farmStoreTo_name'] = detail.farmStoreTo_name
                            } else {
                                detail['farmStoreTo_name'] = ''
                            }

                            if (detail.farmDryingTo_name) {
                                detail['farmDryingTo_name'] = detail.farmDryingTo_name
                            } else {
                                detail['farmDryingTo_name'] = ''
                            }

                            if (detail.farmElevatorTo_name) {
                                detail['farmElevatorTo_name'] = detail.farmElevatorTo_name
                            } else {
                                detail['farmElevatorTo_name'] = ''
                            }

                            if (detail.farmContractor_name) {
                                detail['farmContractor_name'] = detail.farmContractor_name
                            } else {
                                detail['farmContractor_name'] = ''
                            }

                            if (detail.farmMovingType_name) {
                                detail['farmMovingType_name'] = $filter('translate')(detail.farmMovingType_name)
                            } else {
                                detail['farmMovingType_name'] = ''
                            }

                            if (detail.weightCar) {
                                detail['weightCar'] = detail.weightCar
                            } else {
                                detail['weightCar'] = ''
                            }

                            if (detail.weightTareCar) {
                                detail['weightTareCar'] = detail.weightTareCar
                            } else {
                                detail['weightTareCar'] = ''
                            }

                            if (detail.tmTareCar) {
                                detail['tmTareCar'] = $filter('date')(detail.tmTareCar * 1000, 'dd.MM.yyyy HH:mm:ss')
                            } else {
                                detail['tmTareCar'] = ''
                            }

                            if (detail.weightTrailer) {
                                detail['weightTrailer'] = detail.weightTrailer
                            } else {
                                detail['weightTrailer'] = ''
                            }

                            if (detail.weightTareTrailer) {
                                detail['weightTareTrailer'] = detail.weightTareTrailer;
                            } else {
                                detail['weightTareTrailer'] = '';
                            }

                            if (detail.tmTareTrailer) {
                                detail['tmTareTrailer'] = $filter('date')(detail.tmTareTrailer * 1000, 'dd.MM.yyyy HH:mm:ss');
                            } else {
                                detail['tmTareTrailer'] = '';
                            }

                            if (detail.humidity === null) {
                                detail['humidity'] = '';
                            }
                            if (detail.distance === null) {
                                detail['distance'] = '';
                            }
                            detail.ttn = detail['ttn'] ? detail['ttn'] : '';
                            detail.driver_name = detail.driver_name ? detail.driver_name : '';

                            detail['geozoneList'] = detail['geozoneList'] ? detail['geozoneList'] : '',
                                newArray.push(detail)
                        }
                        console.log(detail['ttn'])
                        newData.push({
                            detailArr: newArray,
                            tmByExel: $filter('date')(reportDetail[0].tm * 1000, 'dd.MM.yyyy '),
                            weightNettoBy: callScope.getTotal(reportDetail, 'weightNetto'),

                        });
                        console.log(detail)

                    }
                    return newData;
                },
                controlWeightByUnloading: function (data, callScope) {
                    let rep = $.extend(true, [], data);
                    let newArray = [];
                    for (var i = 0; i < data.repDetail.length; i++) {
                        var reportDetail = rep.repDetail[i];
                        for (var r = 0; r < reportDetail.length; r++) {
                            var detail = reportDetail[r]
                            detail['tmExel'] = $filter('date')(detail.tm * 1000, 'dd.MM.yyyy HH:mm:ss');
                            detail['culture_name_exel'] = detail.culture_name ? $filter('translate')(detail.culture_name) : '';

                            if (detail.harvestUnloadingList.length > 0) {
                                for (var h = 0; h < detail.harvestUnloadingList.length; h++) {
                                    var unloading = detail.harvestUnloadingList[h]

                                    detail.harvestUnloadingList.sort(function (a, b) {
                                        if (a.tm < b.tm) {
                                            return -1;
                                        }
                                        if (a.tm > b.tm) {
                                            return 1;
                                        }
                                        return 0;
                                    });
                                    unloading['tmExel'] = $filter('date')(unloading.tm * 1000, 'dd.MM.yyyy HH:mm:ss');
                                }
                            }
                        }
                        newArray.push(reportDetail)
                    }
                    if (newArray.length > 0) {
                        return newArray[0];
                    } else {
                        return [{}];
                    }
                },
                weightAndUnloading: function (data, callScope) {
                    let rep = $.extend(true, [], data);
                    let newArray = [];
                    for (var i = 0; i < rep.repDetail.length; i++) {
                        var reportDetail = rep.repDetail[i];
                        for (var r = 0; r < reportDetail.length; r++) {
                            var detail = reportDetail[r]
                            detail['tmExel'] = $filter('date')(detail.tm * 1000, 'dd.MM.yyyy HH:mm:ss');
                            detail['culture_name_exel'] = detail.culture_name ? $filter('translate')(detail.culture_name) : '';
                            for (var h = 0; h < detail.harvestUnloadingList.length; h++) {
                                var unloading = detail.harvestUnloadingList[h]
                                detail.harvestUnloadingList.sort(function (a, b) {
                                    if (a.tm < b.tm) {
                                        return -1;
                                    }
                                    if (a.tm > b.tm) {
                                        return 1;
                                    }
                                    return 0;
                                });
                                unloading['tmExel'] = $filter('date')(unloading.tm * 1000, 'dd.MM.yyyy HH:mm:ss')
                            }
                        }
                        newArray.push(reportDetail)
                    }
                    if (newArray.length > 0) {
                        return newArray[0];
                    } else {
                        return [{}];
                    }
                }, byVehicleAssign: function (data, callScope) {
                    let rep = $.extend(true, [], data);
                    rep.repDetail.sort(function (a, b) {
                        if (a.tm < b.tm) {
                            return -1;
                        }
                        if (a.tm > b.tm) {
                            return 1;
                        }
                        return 0;
                    });

                    for (var i = 0; i < rep.repDetail.length; i++) {
                        var reportDetail = rep.repDetail[i];

                        reportDetail['timeStartExel'] = $filter('date')(reportDetail.time_start * 1000, 'dd.MM.yyyy HH:mm:ss')
                        reportDetail['timeEndExel'] = $filter('date')(reportDetail.time_end * 1000, 'dd.MM.yyyy HH:mm:ss')
                        reportDetail['durationExel'] = $filter('translate')($filter('secondsToDateTime')(reportDetail.time_end - reportDetail.time_start))

                    }
                    return rep.repDetail
                }, controlUnloadingPlace: function (data, callScope) {
                    let rep = $.extend(true, [], data);
                    rep.repDetail.sort(function (a, b) {
                        if (a.tm < b.tm) {
                            return -1;
                        }
                        if (a.tm > b.tm) {
                            return 1;
                        }
                        return 0;
                    });

                    for (var i = 0; i < rep.repDetail.length; i++) {
                        var reportDetail = rep.repDetail[i];

                        reportDetail['tmExel'] = $filter('date')(reportDetail.tm * 1000, 'dd.MM.yyyy HH:mm:ss');
                        reportDetail['culture_name_exel'] = reportDetail.culture_name ? $filter('translate')(reportDetail.culture_name) : '';
                        reportDetail['driver_to_name'] = reportDetail.driver_to_name ? reportDetail.driver_to_name : '';
                    }
                    return rep.repDetail
                }, byCombine: function (data, callScope) {
                    let rep = $.extend(true, [], data);
                    rep.repDetail.sort(function (a, b) {
                        if (a.tm < b.tm) {
                            return -1;
                        }
                        if (a.tm > b.tm) {
                            return 1;
                        }
                        return 0;
                    });

                    let newArray = []
                    for (var i = 0; i < rep.repDetail.length; i++) {
                        var reportDetail = rep.repDetail[i];
                        let reportDetailArray = []
                        for (var r = 0; r < reportDetail.length; r++) {
                            var detail = reportDetail[r]
                            detail['tmExel'] = $filter('date')(detail.tm * 1000, 'dd.MM.yyyy HH:mm:ss');
                            detail['time_unloading_exel'] = $filter('translate')($filter('secondsToDateTime')(detail.tm_end - detail.tm));
                            detail['culture_name_exel'] = $filter('translate')(detail.culture_name);
                            detail['totalByTm'] = $filter('date')(reportDetail[0].tm * 1000, 'dd.MM.yyyy');
                            if (!detail.driver_from_name) {
                                detail.driver_from_name = ''
                            }
                            if (!detail.driver_to_name) {
                                detail.driver_to_name = ''
                            }
                            if (!detail.weight_kg) {
                                detail.weight_kg = 0
                            }


                            if (detail.level_start < rep.bunker_size || detail.level_end > 0) {
                                detail['redRow'] = false;
                            } else {
                                detail['redRow'] = true;
                            }
                            reportDetailArray.push(detail)

                        }
                        newArray.push({
                            reportDetailArray: reportDetailArray,
                            weightKubExel: callScope.getTotal(reportDetail, 'weight_kub'),
                            weightKgExel: callScope.getTotal(reportDetail, 'weight_kg'),
                            squareExel: callScope.getTotal(reportDetail, 'square'),
                            totalByTm: $filter('date')(reportDetail[0].tm * 1000, 'dd.MM.yyyy'),
                        })
                    }
                    return newArray
                }, byFarmDevice: function (data, callScope) {
                    let rep = $.extend(true, [], data);
                    rep.repDetail.sort(function (a, b) {
                        if (a.tm < b.tm) {
                            return -1;
                        }
                        if (a.tm > b.tm) {
                            return 1;
                        }
                        return 0;
                    });
                    let newArray = [];
                    for (var i = 0; i < rep.repDetail.length; i++) {
                        var reportDetail = rep.repDetail[i];
                        let detailArray = []
                        for (var r = 0; r < reportDetail.length; r++) {
                            var detail = reportDetail[r];
                            detail['tmExel'] = $filter('date')(detail.tm * 1000, 'dd.MM.yyyy HH:mm:ss')
                            detail['culture_name_exel'] = detail.culture_name ? $filter('translate')(detail.culture_name) : '';
                            detail['driver_to_name'] = detail.driver_to_name ? detail.driver_to_name : '';
                            if (!detail.driver_name) {
                                detail.driver_name = ''
                            }
                            if (!detail.hunidity) {
                                detail.hunidity = ''
                            }
                            detail.harvestUnloadingList.sort(function (a, b) {
                                if (a.tm < b.tm) {
                                    return -1;
                                }
                                if (a.tm > b.tm) {
                                    return 1;
                                }
                                return 0;
                            });

                            for (var l = 0; l < detail.harvestUnloadingList.length; l++) {
                                var unloading = detail.harvestUnloadingList[l];
                                unloading['tmExel'] = $filter('date')(unloading.tm * 1000, 'dd.MM.yyyy HH:mm:ss')
                                unloading['culture_name_exel'] = unloading.culture_name ? $filter('translate')(unloading.culture_name) : '';
                            }
                            detailArray.push(detail);
                        }
                        newArray.push({
                            reportDetailArray: detailArray,
                            byDate: $filter('date')(reportDetail[0].tm * 1000, 'dd.MM.yyyy'),
                            byWeightNetto: callScope.getTotal(reportDetail, 'weightNetto')
                        })
                    }
                    return newArray
                }, unloadingByField: function (data, callScope) {
                    let rep = $.extend(true, [], data);

                    rep.repDetail.sort(function (a, b) {
                        if (a.geozone_name.substr(0, 1).toUpperCase() === 'І' || a.geozone_name.substr(0, 1).toUpperCase() === 'Є' || a.geozone_name.substr(0, 1).toUpperCase() === 'Ї') {
                            return 1;
                        }
                        if (b.geozone_name.substr(0, 1).toUpperCase() === 'І' || b.geozone_name.substr(0, 1).toUpperCase() === 'Є' || b.geozone_name.substr(0, 1).toUpperCase() === 'Ї') {
                            return -1;
                        }
                        if ($filter('lowercase')(a.geozone_name) < $filter('lowercase')(b.geozone_name)) {
                            return -1;
                        }
                        if ($filter('lowercase')(a.geozone_name) > $filter('lowercase')(b.geozone_name)) {
                            return 1;
                        }
                        return 0;
                    });
                    const regex = /&#179;/gi;

                    for (var i = 0; i < rep.repDetail.length; i++) {
                        var detail = rep.repDetail[i];
                        detail['plan_productivity'] = detail['plan_productivity'] ? detail['plan_productivity'] : '';
                        detail['culture_name_exel'] = detail.culture_name ? $filter('translate')(detail.culture_name) : '';
                        detail['seed_name_exel'] = detail.seed_name ? $filter('translate')(detail.seed_name) : '';
                        detail['date_harvest_exel'] = detail.date_harvest ? $filter('date')(detail.date_harvest, 'dd.MM.yyyy') : '';
                        detail['delivery_unloading_exel'] = detail.oper_day_without_weight_cnt > 0 ? (detail.oper_day_without_weight_cnt + " (" + $filter('number')(detail.oper_day_without_weight_kub, 0) + $filter('translate')('m_kub').replace(regex, '³') + ")") : '';
                    }
                    return rep.repDetail;
                }, byOverloader: function (data, callScope) {
                    let rep = $.extend(true, [], data);
                    for (var i = 0; i < rep.harvestUnloadingToList.length; i++) {
                        var detail = rep.harvestUnloadingToList[i];
                        detail['tmExel'] = $filter('date')(detail.tm * 1000, 'dd.MM.yyyy HH:mm:ss')
                        detail['timeUnloadingExel'] = $filter('secondsToDateTime')(detail.tm_end - detail.tm)
                        if (!detail.vehicle_from_name) {
                            detail.vehicle_from_name = ''
                        }
                        if (!detail.vehicle_to_name) {
                            detail.vehicle_to_name = ''
                        }
                        if (!detail.driver_to_name) {
                            detail.driver_to_name = ''
                        }
                        detail['culture_name_exel'] = detail.culture_name ? $filter('translate')(detail.culture_name) : '';
                    }

                    for (var l = 0; l < rep.harvestUnloadingFromList.length; l++) {
                        var detail = rep.harvestUnloadingFromList[l];
                        detail['tmExel'] = $filter('date')(detail.tm * 1000, 'dd.MM.yyyy HH:mm:ss')
                        detail['timeUnloadingExel'] = $filter('secondsToDateTime')(detail.tm_end - detail.tm)
                        detail['culture_name_exel'] = detail.culture_name ? $filter('translate')(detail.culture_name) : '';

                        if (!detail.vehicle_from_name) {
                            detail.vehicle_from_name = ''
                        }
                        if (!detail.vehicle_to_name) {
                            detail.vehicle_to_name = ''
                        }
                        if (!detail.driver_to_name) {
                            detail.driver_to_name = ''
                        }
                    }

                    return rep;
                }, byOverloaderConsolidated: function (data, callScope) {
                    let rep = $.extend(true, [], data);

                    for (var i = 0; i < rep.dataList.length; i++) {
                        var repDetail = rep.dataList[i]
                        repDetail['harvestUnloadingListLength'] = repDetail.harvestUnloadingList.length

                        for (var h = 0; h < repDetail.harvestUnloadingList.length; h++) {
                            var unloading = repDetail.harvestUnloadingList[h];
                            unloading['tmExel'] = $filter('date')(unloading.tm * 1000, 'dd.MM.yyyy HH:mm:ss');
                            unloading['unloadingTmExel'] = $filter('secondsToDateTime')(unloading.tm_end - unloading.tm);
                            unloading['culture_name_exel'] = $filter('translate')(unloading.culture_name);
                            if (!unloading['weight']) {
                                unloading['weight_kg'] = ''
                            }
                        }
                    }

                    return rep.dataList;
                }, grainToFarm: function (data, callScope) {
                    let rep = $.extend(true, [], data);
                    rep.repData.sort(function (a, b) {
                        if (a.tmFarm == null) {
                            return 1;
                        } else if (b.tmFarm == null) {
                            return -1;
                        }
                        if (a.tmFarm < b.tmFarm) {
                            return -1;
                        }
                        if (a.tmFarm > b.tmFarm) {
                            return 1;
                        }
                        return 0;

                    });

                    for (var i = 0; i < rep.repData.length; i++) {
                        var repDetail = rep.repData[i]

                        if (repDetail.vehicle) {
                            repDetail['vehicle'] = repDetail.vehicle.name;
                        } else {
                            repDetail['vehicle'] = '';
                        }

                        if (repDetail.driver) {
                            repDetail['driver'] = repDetail.driver.name;
                        } else {
                            repDetail['driver'] = '';
                        }

                        if (repDetail.tmFarm) {
                            repDetail['tmFarm'] = $filter('date')(repDetail.tmFarm * 1000, 'dd.MM.yyyy HH:mm:ss');
                        } else {
                            repDetail['tmFarm'] = '';
                        }

                        repDetail['tmUnloadingExel'] = $filter('date')(repDetail.tmUnloading * 1000, 'dd.MM.yyyy HH:mm:ss');
                        repDetail['time_start_going_exel'] = $filter('date')(repDetail.time_start_going * 1000, 'dd.MM.yyyy HH:mm:ss');
                        repDetail['time_going_exel'] = $filter('secondsToDateTime')(repDetail.time_going);
                        for (var h = 0; h < repDetail.detailUnloadingList.length; h++) {
                            var unloading = repDetail.detailUnloadingList[h];
                            unloading['harvestUnloadingTmExel'] = $filter('date')(unloading.harvestUnloading.tm * 1000, 'dd.MM.yyyy HH:mm:ss');
                            unloading['culture_name_exel'] = unloading.harvestUnloading.culture_name ? $filter('translate')(unloading.harvestUnloading.culture_name) : '';
                            unloading['harvestUnloadingTmEnd'] = $filter('secondsToDateTime')(unloading.harvestUnloading.tm_end - unloading.harvestUnloading.tm);
                            if (!unloading.weight) {
                                unloading.weight = ''
                            }
                            if (!unloading.harvestUnloading.driver_from_name) {
                                unloading.harvestUnloading.driver_from_name = ''
                            }
                            if (!unloading.harvestUnloading.vehicle_from_name) {
                                unloading.harvestUnloading.vehicle_from_name = ''
                            }

                            for (var u = 0; u < unloading.unloadingToOverloaderList.length; u++) {
                                var toOverloader = unloading.unloadingToOverloaderList[u];
                                toOverloader['tmExel'] = $filter('date')(toOverloader.tm * 1000, 'dd.MM.yyyy HH:mm:ss')
                                toOverloader['culture_name_exel'] = toOverloader.culture_name ? $filter('translate')(toOverloader.culture_name) : '';
                                toOverloader['toOverloaderTmEnd'] = $filter('secondsToDateTime')(toOverloader.tm_end - toOverloader.tm);
                                if (!toOverloader.weight_kg) {
                                    toOverloader.weight_kg = ''
                                }
                                if (!toOverloader.driver_from_name) {
                                    toOverloader.driver_from_name = ''
                                }
                                if (!toOverloader.vehicle_from_name) {
                                    toOverloader.vehicle_from_name = ''
                                }
                            }
                        }
                    }
                    return rep.repData;
                }, grainToFarmConsolidated: function (serverData, callScope) {
                    let rep = $.extend(true, [], serverData);
                    rep.repData.sort(function (a, b) {
                        if (a.tmFarm === b.tmFarm) {
                            return 0;
                        } else if (a.tmFarm === null) {
                            return 1;
                        } else if (b.tmFarm === null) {
                            return -1;
                        } else if (rep.repData.tmFarm) {
                            return a.tmFarm < b.tmFarm ? 11 : -1;
                        } else {
                            return a.tmFarm < b.tmFarm ? -1 : 1;
                        }
                    });


                    for (var i = 0; i < rep.repData.length; i++) {
                        var data = rep.repData[i]
                        var geozones = '';
                        var geozoneGroups = '';

                        for (var z = 0; z < data.geozoneList.length; z++) {
                            geozones += data.geozoneList[z]
                        }
                        for (var z = 0; z < data.geozoneGroupList.length; z++) {
                            geozoneGroups += data.geozoneGroupList[z]
                        }
                        data['geozones_exel'] = geozones
                        data['geozoneGroups_exel'] = geozoneGroups

                        if (data.tmFarm !== null) {
                            data['tmFarmExel'] = $filter('date')(data.tmFarm * 1000, 'dd.MM.yyyy HH:mm:ss');
                        }

                        data['culture_exel'] = ''
                        if (data.geozoneUnloading) {
                            if (data.geozoneUnloading.culture) {
                                data['culture_exel'] = data.geozoneUnloading.culture.name ? $filter('translate')(data.geozoneUnloading.culture.name) : '';
                            }
                        }
                        data['vehicle_exel'] = '';
                        if (data.vehicle) {
                            data['vehicle_exel'] = data.vehicle.name;
                        }
                        data['driver_exel'] = '';
                        if (data.driver) {
                            data['driver_exel'] = data.driver.name
                        }
                        data['tmUnloadingExel'] = $filter('date')(data.tmUnloading * 1000, 'dd.MM.yyyy HH:mm:ss');
                        data['time_start_going_exel'] = $filter('date')(data.time_start_going * 1000, 'dd.MM.yyyy HH:mm:ss');
                        data['time_going_exel'] = $filter('secondsToDateTime')(data.time_going);
                    }

                    return rep.repData;
                }, materialWaybill: function (serverData, callScope) {
                    let rep = $.extend(true, [], serverData.materialWaybill);
                    let newMaterialsArray = [];
                    for (let i = 0; i < rep.storageStoreSeedMovingList.length; i++) {
                        let item = rep.storageStoreSeedMovingList[i];
                        let newObject = {};
                        newObject['number'] = newMaterialsArray.length + 1;
                        newObject['materialName'] = $filter('translate')(item['seed']['name']) + "(" + $filter('translate')(item['seed']['cultureName']) + ")";
                        newObject['materialUnit'] = callScope.getUnitName(item['materialUnit']);
                        newObject['quantity'] = item['quantity'] ? item['quantity'] : '';
                        newObject['priceUnit'] = item['priceUnit'] ? $filter('number')(item['priceUnit'], 2) : '';
                        newObject['price'] = item['price'] > 0 ? $filter('number')(item['price'], 2) : '';
                        newObject['intPrice'] = item['price'] > 0 ? item['price'] : '';
                        newMaterialsArray.push(newObject);
                    }

                    for (let i = 0; i < rep.storageStoreFertilizerMovingList.length; i++) {
                        let item = rep.storageStoreFertilizerMovingList[i];
                        let newObject = {};
                        newObject['number'] = newMaterialsArray.length + 1;
                        newObject['materialName'] = $filter('translate')(item['fertilizer']['name']);
                        newObject['materialUnit'] = callScope.getUnitName(item['materialUnit']);
                        newObject['quantity'] = item['quantity'] ? item['quantity'] : '';
                        newObject['priceUnit'] = item['priceUnit'] ? $filter('number')(item['priceUnit'], 2) : '';
                        newObject['price'] = item['price'] > 0 ? $filter('number')(item['price'], 2) : '';
                        newObject['intPrice'] = item['price'] > 0 ? item['price'] : '';
                        newMaterialsArray.push(newObject);
                    }

                    for (let i = 0; i < rep.storageStorePlantProtectorMovingList.length; i++) {
                        let item = rep.storageStorePlantProtectorMovingList[i];
                        let newObject = {};
                        newObject['number'] = newMaterialsArray.length + 1;
                        newObject['materialName'] = $filter('translate')(item['plantProtector']['name']);
                        newObject['materialUnit'] = callScope.getUnitName(item['materialUnit']);
                        newObject['quantity'] = item['quantity'] ? item['quantity'] : '';
                        newObject['priceUnit'] = item['priceUnit'] ? $filter('number')(item['priceUnit'], 2) : '';
                        newObject['price'] = item['price'] > 0 ? $filter('number')(item['price'], 2) : '';
                        newObject['intPrice'] = item['price'] > 0 ? item['price'] : '';
                        newMaterialsArray.push(newObject);
                    }

                    if (newMaterialsArray.length < 11) {
                        let length = 11 - newMaterialsArray.length;
                        for (let i = 0; i < length; i++) {
                            newMaterialsArray.push({
                                number: '',
                                materialName: '',
                                materialUnit: '',
                                quantity: '',
                                priceUnit: '',
                                price: ''
                            })
                        }
                    }

                    return newMaterialsArray;
                },
                materialLeft: function (serverData, callScope) {
                    let rep = $.extend(true, [], serverData);
                    let newArray = [];
                    for (let i = 0; i < rep.length; i++) {
                        let item = rep[i];
                        let newRecord = {};
                        newRecord['storeName'] = item['storageStore'] ? item['storageStore']['name'] : '';
                        newRecord['materialName'] = $filter('translate')(item['material_name']);
                        newRecord['balance'] = item['balance'];
                        newRecord['unit'] = callScope.getLeftUnit(item['materialUnit']);
                        newRecord['priceAvg'] = item['unitPrice'];
                        newRecord['priceSum'] = item['price'];
                        newArray.push(newRecord)
                    }

                    return newArray;
                },
                fuelAnalytic: function (serverData, callScope) {
                    let rep = $.extend(true, [], serverData);
                    let newArray = [];
                    rep.repData.sort((a, b) => {
                        var workTypeSort = parseInt($filter('translate')(a.workType ? a.workType.name : '').localeCompare($filter('translate')(b.workType ? b.workType.name : '')));
                        var vehicleSort = parseInt((a.vehicle.name).localeCompare(b.vehicle.name));
                        if (workTypeSort !== 0) {
                            return workTypeSort;
                        }
                        return vehicleSort;
                    });

                    for (let i = 0; i < rep.repData.length; i++) {
                        let item = rep.repData[i];
                        let trailers = '';
                        for (var t = 0; t < item.trailerList.length; t++) {
                            trailers = trailers + " " + item.trailerList[t].name + "\n";
                        }

                        let prices = '';
                        for (var p = 0; p < item.referencePriceList.length; p++) {
                            prices = prices + " " + $filter('number')(item.referencePriceList[p].fuelRate, 2) +
                                callScope.getTypeName(item.referencePriceList[p].fuelRateType, callScope.fuelRateTypeList);
                        }
                        item['workTypeExel'] = $filter('translate')(item.workType ? item.workType.name : '')
                        item['prices'] = prices;
                        item['trailers'] = trailers;
                        newArray.push(item)
                    }

                    return newArray;
                },
                landBankDashboardDetail: function (data, callScope) {
                    let serverData = $.extend(true, [], data.data);
                    let sortColumn = data.params.sortColumn;
                    if (sortColumn.reverse === false) {
                        serverData.sort(function (a, b) {
                            var aa = eval("a." + (sortColumn.column))
                            var bb = eval("b." + (sortColumn.column))
                            if (aa == null) {
                                return 1;
                            } else if (bb == null) {
                                return -1;
                            }
                            if (aa < bb) {
                                return -1;
                            }
                            if (aa > bb) {
                                return 1;
                            }
                            return 0;
                        });
                    } else {
                        serverData.sort(function (a, b) {
                            var aa = eval("a." + (sortColumn.column))
                            var bb = eval("b." + (sortColumn.column))
                            if (aa == null) {
                                return -1;
                            } else if (bb == null) {
                                return 1;
                            }
                            if (aa < bb) {
                                return 1;
                            }
                            if (aa > bb) {
                                return 1;
                            }
                            return 0;
                        });
                    }

                    let newArray = [];
                    for (let z = 0; z < serverData.length; z++) {
                        let share = serverData[z];
                        let right1_fio = ""
                        for (let z = 0; z < share.right1FioList.length; z++) {
                            right1_fio = right1_fio + "  " + share.right1FioList[z] ? (share.right1FioList[z] === null ? "" : share.right1FioList[z]) : '';
                        }

                        let right2_fio = ''
                        if (share.bankTenant) {
                            right2_fio = share.bankTenant.name;
                        } else if (share.right2_fio) {
                            right2_fio = share.right2_fio;
                        }
                        share['right1_fio'] = right1_fio;
                        share['right2_fio'] = right2_fio;
                        share['kadastr_number'] = share.kadastr_number;
                        share['shareSquareExel'] = callScope.getShareSquare(share, null, {
                            isGiven: callScope.activeRow == 'exchange.exchangeGiven',
                            isReceived: callScope.activeRow == 'exchange.exchangeReceived'
                        });
                        share['contractDateToExel'] = share.contract_date_to ? $filter('date')(share.contract_date_to, 'dd.MM.yyyy') : ''
                        share['contractSupplementaryDateToExel'] = share.contract_supplementary_date_to ? $filter('date')(share.contract_supplementary_date_to, 'dd.MM.yyyy') : ''
                        share['right3ContractDateToExel'] = share.right3_contract_date_to ? $filter('date')(share.right3_contract_date_to, 'dd.MM.yyyy') : ''
                        share['contractStatusExel'] = callScope.getContractStatus(share)
                        share['right3_contract_number'] = share.right3_contract_number ? share.right3_contract_number : '';
                        share['right3_contractor_name'] = share.right3_contractor_name ? share.right3_contractor_name : '';
                        share['right3_cluster_name'] = share.right3_cluster_name ? share.right3_cluster_name : '';
                        share['right3_contract_date_to_exel'] = share.right3_contract_date_to ? $filter('date')(share.right3_contract_date_to, 'dd.MM.yyyy') : '';
                        share['right3_contract_date_exel'] = share.right3_contract_date ? $filter('date')(share.right3_contract_date, 'dd.MM.yyyy') : ''
                        newArray.push(share);
                    }

                    let total = $filter('number')(callScope.countShareSquare(serverData, {}, {}, {
                        isGiven: callScope.activeRow == 'exchange.exchangeGiven',
                        isReceived: callScope.activeRow == 'exchange.exchangeReceived'
                    }), 4);
                    return {
                        data: newArray,
                        total: total
                    };
                },
                byField: function (data, callScope) {
                    let serverData = $.extend(true, {}, data.data);
                    let newArray = [];
                    for (var i = 0; i < serverData.vehicles.length; i++) {
                        var vehicle = serverData.vehicles[i]
                        var trailer = "";
                        var driver = "";

                        if (vehicle.trailerList.length > 0) {
                            for (var t = 0; t < vehicle.trailerList.length; t++) {
                                var tr = vehicle.trailerList[t]
                                trailer += $filter('translate')(tr.name) + " "
                            }
                        } else {
                            trailer += "-";
                        }

                        if (vehicle.driverList.length) {
                            for (var d = 0; d < vehicle.driverList.length; d++) {
                                var dr = vehicle.driverList[d];
                                driver += dr.name + " ";
                            }
                        } else {
                            driver += "-";
                        }

                        for (var l = 0; l < vehicle.reportDetailList.length; l++) {
                            var vehicleDetail = vehicle.reportDetailList[l]
                            var trailer1 = '';
                            var driver1 = '';
                            if (vehicleDetail.trailer) {
                                trailer1 += $filter('translate')(vehicleDetail.trailer.name) + " ";
                            } else {
                                trailer1 += "-";
                            }

                            if (vehicleDetail.driver) {
                                driver1 += vehicleDetail.driver.name + " ";
                            } else {
                                driver1 += "-";
                            }
                            vehicleDetail['time_in_field_exel'] = $filter('date')(vehicleDetail.time_in_field * 1000, 'dd.MM.yyyy HH:mm:ss');
                            vehicleDetail['time_out_field_exel'] = $filter('date')(vehicleDetail.time_out_field * 1000, 'dd.MM.yyyy HH:mm:ss');
                            vehicleDetail['working_time_exel'] = $filter('translate')($filter('secondsToDateTime')(vehicleDetail.working_time));
                            vehicleDetail['ignition_working_time_exel'] = $filter('translate')($filter('secondsToDateTime')(vehicleDetail.ignition_working_time));
                            vehicleDetail['processed_exel'] = $filter('number')(vehicleDetail.processed, 2) + " (" + $filter('number')(vehicleDetail.processed / data.square * 100, 2) + "%)";
                            vehicleDetail['trailers'] = trailer1;
                            vehicleDetail['drivers'] = driver1;
                            vehicleDetail['stop_num_exel'] = vehicleDetail.stop_num + "(" + $filter('secondsToDateTime')(vehicleDetail.stop_time) + ")"
                            vehicleDetail['parking_num_exel'] = vehicleDetail.parking_num + "(" + $filter('secondsToDateTime')(vehicleDetail.parking_time) + ")"
                        }
                        newArray.push({
                            vehicle_name: vehicle.vehicle_name,
                            time_in_field_exel: $filter('date')(vehicle.time_in_field * 1000, 'dd.MM.yyyy HH:mm:ss'),
                            time_out_field_exel: $filter('date')(vehicle.time_out_field * 1000, 'dd.MM.yyyy HH:mm:ss'),
                            working_time_exel: $filter('translate')($filter('secondsToDateTime')(vehicle.working_time)),
                            ignition_working_time_exel: $filter('translate')($filter('secondsToDateTime')(vehicle.ignition_working_time)),
                            processed_exel: $filter('number')(vehicle.processed, 2) + " (" + $filter('number')(vehicle.processed / data.square * 100, 2) + "%)",
                            trailers: trailer,
                            drivers: driver,
                            stop_num_exel: vehicle.stop_num + "(" + $filter('secondsToDateTime')(vehicle.stop_time) + ")",
                            parking_num_exel: vehicle.parking_num + "(" + $filter('secondsToDateTime')(vehicle.parking_time) + ")",
                            speed_avg: vehicle.speed_avg,
                            speed_max: vehicle.speed_max,
                            fuel_used: vehicle.fuel_used,
                            szr_used: vehicle.szr_used,
                            reportDetailList: vehicle.reportDetailList
                        })

                    }
                    return newArray;
                },
                byVehicleNew: function (data, callScope) {
                    let serverData = $.extend(true, {}, data.data);

                    for (var i = 0; i < serverData.reportDetailList.length; i++) {
                        var reportDetail = serverData.reportDetailList[i]

                        var type = '';
                        if (reportDetail.isParking) {
                            type += $filter('translate')('parking1') + " ";
                        } else {
                            type += $filter('translate')('going') + " ";
                        }

                        var trailer = "";
                        if (reportDetail.trailer) {
                            trailer += reportDetail.trailer.name + " ";
                        } else {
                            trailer += "-";
                        }

                        var driver = "";
                        if (reportDetail.driver) {
                            driver += reportDetail.driver.name;
                        } else {
                            driver += "-";
                        }

                        var unit = "";
                        var geozone = "";
                        if (reportDetail.geozone != null) {
                            geozone += (reportDetail.geozone ? reportDetail.geozone.name : '') + " ";
                            unit += $filter('translate')('ha') + " ";
                        } else {
                            geozone += $filter('translate')('crossing') + " ";
                            unit += $filter('translate')('km') + " ";
                        }

                        var cultures = "";
                        var square_real = "";
                        var geozone_group_name = "";
                        if (reportDetail.geozone) {
                            if (reportDetail.geozone.cultureList.length > 0) {
                                for (var k = 0; k < reportDetail.geozone.cultureList.length; k++) {
                                    var culture = reportDetail.geozone.cultureList[k];
                                    cultures += $filter('translate')(culture.name) + " ";
                                }
                            } else {
                                cultures += " "
                            }
                            square_real += reportDetail.geozone.square_real + " "
                            geozone_group_name += reportDetail.geozone.geozone_group_name + " ";

                        } else {
                            square_real += " ";
                            geozone_group_name += " ";
                        }

                        reportDetail.type = type;
                        reportDetail.geozone = geozone;
                        reportDetail.time_in_field_exel = $filter('date')(reportDetail.time_in_field * 1000, 'dd.MM.yyyy HH:mm:ss');
                        reportDetail.time_out_field_exel = $filter('date')(reportDetail.time_out_field * 1000, 'dd.MM.yyyy HH:mm:ss');
                        reportDetail.time_out_field_exel1 = $filter('translate')($filter('secondsToDateTime')((reportDetail.time_out_field - reportDetail.time_in_field)));
                        reportDetail.ignition_working_time_exel = $filter('translate')($filter('secondsToDateTime')(reportDetail.ignition_working_time));
                        reportDetail.workingHoursExel = $filter('translate')($filter('secondsToDateTime')(reportDetail.workingHours));
                        reportDetail.trailers = trailer;
                        reportDetail.driver = driver;
                        reportDetail.stop_num_exel = reportDetail.stop_num + "(" + $filter('translate')($filter('secondsToDateTime')(reportDetail.stop_time)) + ")";
                        reportDetail.parking_num_exel = reportDetail.parking_num + "(" + $filter('translate')($filter('secondsToDateTime')(reportDetail.parking_time)) + ")";
                        reportDetail.geozone_group_name = geozone_group_name;
                        reportDetail.vehicle_group_name = serverData.vehicle_group_name;
                        reportDetail.unit = unit;
                        reportDetail.square_real = square_real;
                        reportDetail.cultures = cultures;
                        reportDetail.going_time_exel = $filter('secondsToDateTime')(reportDetail.going_time);
                        reportDetail.stop_with_engine_time_exel = $filter('translate')($filter('secondsToDateTime')(reportDetail.ignition_working_time - reportDetail.going_time));
                    }
                    return serverData.reportDetailList;
                },
                byVehicleCar: function (data) {
                    let serverData = $.extend(true, {}, data.data);

                    for (var i = 0; i < serverData.reportDetailList.length; i++) {
                        var reportDetail = serverData.reportDetailList[i]

                        var type = "";
                        if (reportDetail.isParking) {
                            type += $filter('translate')('parking1');
                        } else {
                            type += $filter('translate')('going');
                        }

                        var adress = "";
                        if (reportDetail.stopPoint != null) {
                            adress += reportDetail.stopPoint.address;
                        } else {
                            adress += " ";
                        }

                        var driver = '';
                        if (reportDetail.driver) {
                            driver += reportDetail.driver.name;
                        } else {
                            driver += "-";
                        }

                        var geozone = "";
                        if (reportDetail.stopPoint != null) {
                            geozone += reportDetail.stopPoint.geozone_name ? reportDetail.stopPoint.geozone_name : '';
                        } else {
                            driver += " ";
                        }

                        reportDetail.type = type;
                        reportDetail.time_in_field_exel = $filter('date')(reportDetail.time_in_field * 1000, 'dd.MM.yyyy HH:mm:ss');
                        reportDetail.time_out_field_exel = $filter('date')(reportDetail.time_out_field * 1000, 'dd.MM.yyyy HH:mm:ss');
                        reportDetail.duration_exel = $filter('translate')($filter('secondsToDateTime')((reportDetail.time_out_field - reportDetail.time_in_field)));
                        reportDetail.adress = adress;
                        reportDetail.geozone = geozone;
                        reportDetail.vehicle_name = serverData.vehicle_name;
                        reportDetail.driver = driver;
                    }
                    return serverData.reportDetailList;
                },
                byFuelDetail: function (data) {
                    let serverData = $.extend(true, {}, data.data);
                    for (var i = 0; i < serverData.reportDetailList.length; i++) {
                        var reportDetail = serverData.reportDetailList[i];
                        console.log(reportDetail.workingHours)
                        reportDetail.date_exel = $filter('date')(reportDetail.time_in_field * 1000, 'dd.MM.yyyy');
                        reportDetail.going_time_exel = $filter('secondsToDateTime')(reportDetail.going_time);
                        reportDetail.stop_with_engine_exel = $filter('translate')($filter('secondsToDateTime')((reportDetail.ignition_working_time - reportDetail.going_time)));
                        reportDetail.parking_time_exel = $filter('translate')($filter('secondsToDateTime')(reportDetail.parking_time));
                        reportDetail.workingHoursExel = $filter('translate')($filter('secondsToDateTime')(reportDetail.ignition_working_time));
                    }
                    return serverData.reportDetailList;
                },
                byVehicleGroup: function (data) {
                    let serverData = $.extend(true, {}, data.data);

                    serverData.reportDetail.sort(function (a, b) {
                        if (a.vehicle_name.substr(0, 1).toUpperCase() == 'І' || a.vehicle_name.substr(0, 1).toUpperCase() == 'Є' || a.vehicle_name.substr(0, 1).toUpperCase() == 'Ї') {
                            return 1;
                        }

                        if (b.vehicle_name.substr(0, 1).toUpperCase() == 'І' || b.vehicle_name.substr(0, 1).toUpperCase() == 'Є' || b.vehicle_name.substr(0, 1).toUpperCase() == 'Ї') {
                            return -1;
                        }
                        if ($filter('lowercase')(a.vehicle_name) < $filter('lowercase')(b.vehicle_name)) {
                            return -1;
                        }
                        if ($filter('lowercase')(a.vehicle_name) > $filter('lowercase')(b.vehicle_name)) {
                            return 1;
                        }
                        return 0;
                    });

                    for (var i = 0; i < serverData.reportDetail.length; i++) {
                        var reportDetail = serverData.reportDetail[i]
                        reportDetail.distance_exel = $filter('number')(reportDetail.distance - reportDetail.distance1, 2);
                        reportDetail.ignition_working_time_go_exel = $filter('translate')($filter('secondsToDateTime')(reportDetail.ignition_working_time_go));
                    }
                    return serverData.reportDetail;
                },
                byRoute: function (data, callScope) {
                    let serverData = $.extend(true, {}, data.data);
                    serverData.reportDetail.sort(function (a, b) {
                        if (a.vehicle_name < b.vehicle_name) {
                            return -1;
                        }
                        if (a.vehicle_name > b.vehicle_name) {
                            return 1;
                        }
                        return 0;
                    });
                    for (var i = 0; i < serverData.reportDetail.length; i++) {
                        var reportDetail = serverData.reportDetail[i];
                        var notifications = "";

                        for (var n = 0; n < reportDetail.notificationList.length; n++) {
                            var notification = reportDetail.notificationList[n];
                            notifications += $filter('date')(notification.tm, 'dd.MM.yyyy HH:mm:ss') + " " + callScope.getNotificationMessage(notification) + "\n";
                        }
                        reportDetail.notifications = notifications;
                    }
                    return serverData.reportDetail;
                },
                сropRotation: function (data, callScope) {
                    let serverData = $.extend(true, [], data.data);

                    serverData.sort((a, b) => {
                        var geozoneGroupSort = parseInt(a.geozone_group_name.localeCompare(b.geozone_group_name));
                        var geozoneSort = parseInt((a.geozone_name).localeCompare(b.geozone_name));
                        if (geozoneGroupSort !== 0) {
                            return geozoneGroupSort;
                        }
                        return geozoneSort;
                    })


                    for (let i = 0; i < serverData.length; i++) {
                        for (let d = 0; d < serverData[i].detailList.length; d++) {
                            let item = serverData[i].detailList[d];
                            let cultureNames = '';
                            for (let l = 0; l < item.detail2List.length; l++) {
                                let record = item.detail2List[l];
                                if (item.detail2List.length === 1 || l === 0) {
                                    cultureNames = $filter('translate')(record.culture.name) + (record.seed ? (" (" + $filter('translate')(record.seed.name) + ") ") : '');
                                } else if (l !== 0) {
                                    cultureNames += " \n\r" + $filter('translate')(record.culture.name) + (record.seed ? (" (" + $filter('translate')(record.seed.name) + ") ") : '');
                                }
                            }
                            serverData[i]['col' + (d + 1)] = cultureNames
                        }
                    }
                    console.log(serverData)
                    return serverData;
                },
                vehicleTaskAgronom: function (data, callScope) {
                    let serverData = $.extend(true, [], data.data.repData);

                    serverData.sort(function (a, b) {
                        if ($filter('lowercase')($filter('translate')(a.agronom ? a.agronom.name : 'я')) < $filter('lowercase')($filter('translate')(b.agronom ? b.agronom.name : 'я'))) {
                            return -1;
                        }
                        if ($filter('lowercase')($filter('translate')(a.agronom ? a.agronom.name : 'я')) > $filter('lowercase')($filter('translate')(b.agronom ? b.agronom.name : 'я'))) {
                            return 1;
                        }
                        return 0;
                    });

                    for (let i = 0; i < serverData.length; i++) {
                        var item = serverData[i];
                        item['agronomNameExel'] = item.agronom ? item.agronom.name : $filter('translate')('agronom.not.setting');
                        item['squareAgronomExel'] = $filter('number')(item.square_by_agronom, 2);
                        item['squareExel'] = $filter('number')(item.square_vehicle_working, 2);
                        item.workTypeList.sort(function (a, b) {
                            if ($filter('lowercase')($filter('translate')(a.workType ? a.workType.name : 'я')) < $filter('lowercase')($filter('translate')(b.workType ? b.workType.name : 'я'))) {
                                return -1;
                            }
                            if ($filter('lowercase')($filter('translate')(a.workType ? a.workType.name : 'я')) > $filter('lowercase')($filter('translate')(b.workType ? b.workType.name : 'я'))) {
                                return 1;
                            }
                            return 0;
                        });
                        for (let w = 0; w < item.workTypeList.length; w++) {
                            let workTypeItem = item.workTypeList[w];
                            workTypeItem.geozoneGroupList.sort(function (a, b) {
                                if ($filter('lowercase')($filter('translate')(a.geozoneGroup ? a.geozoneGroup.name : 'я')) < $filter('lowercase')($filter('translate')(b.geozoneGroup ? b.geozoneGroup.name : 'я'))) {
                                    return -1;
                                }
                                if ($filter('lowercase')($filter('translate')(a.geozoneGroup ? a.geozoneGroup.name : 'я')) > $filter('lowercase')($filter('translate')(b.geozoneGroup ? b.geozoneGroup.name : 'я'))) {
                                    return 1;
                                }
                                return 0;
                            });
                            workTypeItem['workTypeNameExel'] = workTypeItem.workType ? $filter('translate')(workTypeItem.workType.name) : $filter('translate')('workType.not.setting');
                            workTypeItem['squareAgronomExel'] = $filter('number')(workTypeItem.square_by_agronom, 2);
                            workTypeItem['squareExel'] = $filter('number')(workTypeItem.square_vehicle_working, 2);

                            for (let g = 0; g < workTypeItem.geozoneGroupList.length; g++) {
                                let geozoneGroupItem = workTypeItem.geozoneGroupList[g];
                                geozoneGroupItem['geozoneGroupNameExel'] = geozoneGroupItem.geozoneGroup ? geozoneGroupItem.geozoneGroup.name : $filter('translate')('without.group');
                                geozoneGroupItem['squareExel'] = $filter('number')(geozoneGroupItem.square, 2);
                                geozoneGroupItem['squareAgronomExel'] = $filter('number')(geozoneGroupItem.square_by_agronom, 2);

                                geozoneGroupItem.geozoneList.sort(function (a, b) {
                                    if ($filter('lowercase')($filter('translate')(a.geozone ? a.geozone.name : 'я')) < $filter('lowercase')($filter('translate')(b.geozone ? b.geozone.name : 'я'))) {
                                        return -1;
                                    }
                                    if ($filter('lowercase')($filter('translate')(a.geozone ? a.geozone.name : 'я')) > $filter('lowercase')($filter('translate')(b.geozone ? b.geozone.name : 'я'))) {
                                        return 1;
                                    }
                                    return 0;
                                });
                                for (let e = 0; e < geozoneGroupItem.geozoneList.length; e++) {
                                    let geozoneItem = geozoneGroupItem.geozoneList[e];
                                    geozoneItem['geozoneNameExel'] = geozoneItem.geozone ? geozoneItem.geozone.name : '';
                                    geozoneItem['squareAgronomExel'] =  $filter('number')(geozoneItem.square_by_agronom, 2);
                                    geozoneItem['squareExel'] = $filter('number')(geozoneItem.square_vehicle_working, 2);
                                }
                            }
                        }
                    }

                    return serverData;
                },
                vehicleTaskBySource: function (data) {
                    let serverData = $.extend(true, [], data.data);

                    serverData.sort(function (a, b) {
                        if ($filter('lowercase')($filter('translate')(a.date_start)) < $filter('lowercase')($filter('translate')(b.date_start))) {
                            return -1;
                        }
                        if ($filter('lowercase')($filter('translate')(a.date_start)) > $filter('lowercase')($filter('translate')(b.date_start))) {
                            return 1;
                        }
                        return 0;
                    });

                    for (let i = 0; i < serverData.length; i++) {
                        var vehicleTask = serverData[i];
                        vehicleTask['date_start_exel'] = $filter('date')(vehicleTask['date_start'], 'dd.MM.yyyy HH:mm');
                        vehicleTask['date_end_exel'] = $filter('date')(vehicleTask['date_end'], 'dd.MM.yyyy HH:mm');
                        vehicleTask['workTypeNameExel'] = $filter('translate')(vehicleTask.workType ? vehicleTask.workType.name : '');
                        if (!vehicleTask['plan_square']) {
                            vehicleTask['plan_square'] = ''
                        }
                        if (!vehicleTask['plan_fuel_used']) {
                            vehicleTask['plan_fuel_used'] = ''
                        }
                        if (!vehicleTask['fact_square']) {
                            vehicleTask['fact_square'] = ''
                        }
                        if (!vehicleTask['fact_fuel_used']) {
                            vehicleTask['fact_fuel_used'] = ''
                        }
                        if (!vehicleTask['engineerName']) {
                            vehicleTask['engineerName'] = ''
                        }
                        if (!vehicleTask['agronomName']) {
                            vehicleTask['agronomName'] = ''
                        }
                        let geozoneExel = "";
                        for (let i = 0; i < vehicleTask.geozoneList.length; i++) {
                            if (geozoneExel === "") {
                                geozoneExel += vehicleTask.geozoneList[i].name;
                            } else {
                                geozoneExel += ", " + vehicleTask.geozoneList[i].name;
                            }
                        }
                        let geozoneGroupExel = "";
                        for (let i = 0; i < vehicleTask.geozoneAllGroupList.length; i++) {
                            if (geozoneGroupExel === "") {
                                geozoneGroupExel += vehicleTask.geozoneAllGroupList[i].name;
                            } else {
                                geozoneGroupExel += ", " + vehicleTask.geozoneAllGroupList[i].name;
                            }
                        }
                        vehicleTask['geozoneExel'] = geozoneExel;
                        vehicleTask['geozoneGroupExel'] = geozoneGroupExel;
                    }
                    return serverData;
                },
                timesheetReportDetail: function (data) {
                    let serverData = $.extend(true, [], data);
                    console.log(serverData)
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
                        item['number'] = i + 1;
                        for (let variable in item) {

                            if (Object.keys(item[variable]).length !== 0) {
                                item[variable].val = item[variable].val ? item[variable].val : '';
                                if (item[variable].cls === 'weekend') {
                                    item[variable].val = item[variable].val ? "B/" + item[variable].val : 'B';
                                }
                                if (item[variable].absent_title !== '') {
                                    item[variable].val = item[variable].absent_title;
                                }
                            }
                        }
                    }

                    console.log(serverData);
                    return serverData;
                },
                grainToFarmConsolidatedCar: function (data, callScope) {
                    let serverData = $.extend(true, {}, data.data);
                    serverData.repData.sort(function (a, b) {
                        if (a.vehicle_name < b.vehicle_name) {
                            return -1;
                        }
                        if (a.vehicle_name > b.vehicle_name) {
                            return 1;
                        }
                        return 0;
                    });
                    for (var i = 0; i < serverData.repData.length; i++) {
                        var reportDetail = serverData.repData[i];

                        reportDetail.time_going_exel = $filter('secondsToDateTime')(reportDetail.time_going);
                    }
                    return serverData.repData;
                },
                agrooperationPlan: function (data) {
                    let serverData = $.extend(true, [], data.data.repData);

                    serverData.sort(function (a, b) {
                        if ($filter('lowercase')($filter('translate')(a.agronom ? a.agronom.name : 'я')) < $filter('lowercase')($filter('translate')(b.agronom ? b.agronom.name : 'я'))) {
                            return -1;
                        }
                        if ($filter('lowercase')($filter('translate')(a.agronom ? a.agronom.name : 'я')) > $filter('lowercase')($filter('translate')(b.agronom ? b.agronom.name : 'я'))) {
                            return 1;
                        }
                        return 0;
                    });

                    for (let i = 0; i < serverData.length; i++) {
                        var item = serverData[i];
                        item['cultureNameExel'] = item.culture ? $filter('translate')(item.culture.name) : $filter('translate')('culture.not.setting');
                        item['squareTotalExel'] = $filter('number')(item.total_square, 2);
                        item.workTypeList.sort(function (a, b) {
                            if ($filter('lowercase')($filter('translate')(a.workType ? a.workType.name : 'я')) < $filter('lowercase')($filter('translate')(b.workType ? b.workType.name : 'я'))) {
                                return -1;
                            }
                            if ($filter('lowercase')($filter('translate')(a.workType ? a.workType.name : 'я')) > $filter('lowercase')($filter('translate')(b.workType ? b.workType.name : 'я'))) {
                                return 1;
                            }
                            return 0;
                        });
                        for (let w = 0; w < item.workTypeList.length; w++) {
                            let workTypeItem = item.workTypeList[w];
                            workTypeItem.geozoneGroupList.sort(function (a, b) {
                                if ($filter('lowercase')($filter('translate')(a.geozoneGroup ? a.geozoneGroup.name : 'я')) < $filter('lowercase')($filter('translate')(b.geozoneGroup ? b.geozoneGroup.name : 'я'))) {
                                    return -1;
                                }
                                if ($filter('lowercase')($filter('translate')(a.geozoneGroup ? a.geozoneGroup.name : 'я')) > $filter('lowercase')($filter('translate')(b.geozoneGroup ? b.geozoneGroup.name : 'я'))) {
                                    return 1;
                                }
                                return 0;
                            });
                            workTypeItem['workTypeNameExel'] = workTypeItem.workType ? $filter('translate')(workTypeItem.workType.name) : $filter('translate')('workType.not.setting');
                            workTypeItem['squareTotalExel'] = $filter('number')(workTypeItem.total_square, 2);

                            for (let g = 0; g < workTypeItem.geozoneGroupList.length; g++) {
                                let geozoneGroupItem = workTypeItem.geozoneGroupList[g];
                                geozoneGroupItem['geozoneGroupNameExel'] = geozoneGroupItem.geozoneGroup ? geozoneGroupItem.geozoneGroup.name : $filter('translate')('without.group');
                                geozoneGroupItem['squareTotalExel'] = $filter('number')(geozoneGroupItem.total_square, 2);

                                geozoneGroupItem.geozoneList.sort(function (a, b) {
                                    if ($filter('lowercase')($filter('translate')(a.geozone ? a.geozone.name : 'я')) < $filter('lowercase')($filter('translate')(b.geozone ? b.geozone.name : 'я'))) {
                                        return -1;
                                    }
                                    if ($filter('lowercase')($filter('translate')(a.geozone ? a.geozone.name : 'я')) > $filter('lowercase')($filter('translate')(b.geozone ? b.geozone.name : 'я'))) {
                                        return 1;
                                    }
                                    return 0;
                                });
                                for (let e = 0; e < geozoneGroupItem.geozoneList.length; e++) {
                                    let geozoneItem = geozoneGroupItem.geozoneList[e];
                                    geozoneItem['geozoneNameExel'] = geozoneItem.geozone ? geozoneItem.geozone.name : '';
                                    geozoneItem['squareTotalExel'] =  $filter('number')(geozoneItem.plan_square, 2);
                                }
                            }
                        }
                    }

                    return serverData;
                },
                sendRequest:

                    function (postData, filename) {
                        var self = this;

                        if (this.loadXlsDefer && this.loadXlsDefer != null) {
                            return;
                        }

                        this.loadXlsDefer = $q.defer();

                        var lng = $translate.use();
                        //if (lng=='ukr'){lng='uk'}
                        postData.lng = lng;
                        return $http.post("/xls", postData, {
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
