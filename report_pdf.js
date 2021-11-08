'use strict';

let factory = angular.module('agro.report.pdf', ['ngResource'])
    .factory('ReportPdf', ['$resource', '$filter', function ($resource, $filter) {

        var private_var = "Private";

        function getPdf(rep, type, params) {
            if (type == 'byFuelConsolidated') {
                byFuelConsolidated(rep);
            } else if (type == 'byParking') {
                byParking(rep);
            } else if (type == 'byFuel') {
                setTimeout(function () {
                    $('#chartTab > a').click();
                }, 10);
                setTimeout(function () {
                    byFuel(rep, params);
                }, 3000);
            } else if (type == 'agrowork') {
                agroWork(rep);
            } else if (type == 'waybill') {
                waybill(rep);
            } else if (type == 'agroworkGeneral') {
                agroworkGeneral(rep, params);
            } else if (type == 'vehicleTrailer') {
                vehicleTrailer(rep);
            } else if (type == 'agroworkToday') {
                agroworkToday(rep, params);
            } else if (type == 'agroworkConsolidated') {
                agroworkConsolidated(rep, params);
            } else if (type == 'agrooperationMaterials') {
                agrooperationMaterials(rep, params)
            } else if (type == 'materialsDetail') {
                materialsDetail(rep, params)
            } else if (type == 'waybillConsolidated') {
                waybillConsolidated(rep, params.sortColumn)
            } else if (type == 'waybillConsolidatedCar') {
                waybillConsolidatedCar(rep)
            } else if (type == 'byAzs') {
                byAzs(rep, params)
            } else if (type == 'byAzsBalances') {
                byAzsBalances(rep, params)
            } else if (type == 'controlRefuelingPlace') {
                controlRefuelingPlace(rep)
            } else if (type == 'controlRefueling') {
                controlRefueling(rep, params)
            } else if (type == 'byAzsMoving') {
                byAzsMoving(rep, params)
            } else if (type == 'byVehicleAssign') {
                byVehicleAssign(rep)
            } else if (type == 'controlUnloadingPlace') {
                controlUnloadingPlace(rep)
            } else if (type == 'byCombine') {
                byCombine(rep, params)
            } else if (type == 'byFarmDevice') {
                byFarmDevice(rep, params)
            } else if (type == 'unloadingByField') {
                unloadingByField(rep)
            } else if (type == 'byOverloader') {
                byOverloader(rep, params)
            } else if (type == 'byOverloaderConsolidated') {
                byOverloaderConsolidated(rep)
            } else if (type == 'grainToFarm') {
                grainToFarm(rep)
            } else if (type == 'grainToFarmConsolidated') {
                grainToFarmConsolidated(rep)
            } else if (type == 'byField') {
                byField(rep)
            } else if (type == 'byVehicleNew') {
                byVehicleNew(rep, params)
            } else if (type == 'byVehicleCar') {
                byVehicleCar(rep)
            } else if (type == 'byFuelDetail') {
                byFuelDetail(rep)
            } else if (type == 'byControlSeeder') {
                byControlSeeder(rep)
            } else if (type == 'byVehicleGroup') {
                byVehicleGroup(rep)
            } else if (type == 'byRoute') {
                byRoute(rep, params)
            } else if (type == 'byWorkType') {
                byWorkType(rep, params)
            } else if (type == 'controlVehicleInPoint') {
                controlVehicleInPoint(rep)
            } else if (type == 'byDistance') {
                byDistance(rep, params)
            } else if (type == 'byDistanceList') {
                byDistanceList(rep)
            } else if (type == 'farmByDevice') {
                farmByDevice(rep, params)
            } else if (type == 'controlWeightByUnloading') {
                controlWeightByUnloading(rep)
            } else if (type == 'weightAndUnloading') {
                weightAndUnloading(rep)
            } else if (type == 'meteoAggregate') {
                meteoAggregate(rep, params)
            } else if (type == 'meteoDetail') {
                meteoDetail(rep)
            } else if (type == 'serviceSensors') {
                serviceSensors(rep)
            } else if (type == 'servicePoints') {
                servicePoints(rep)
            } else if (type == 'bigBag') {
                bigBag(rep)
            } else if (type == 'agrooperationWorkType') {
                agrooperationWorkType(rep)
            } else if (type == 'fuelByCluster') {
                fuelByCluster(rep)
            } else if (type == 'exchangeContract') {
                exchangeContract(rep)
            } else if (type == 'controlTrackerData') {
                controlTrackerData(rep, params)
            } else if (type == 'servicePointsAzs') {
                servicePointsAzs(rep, params)
            } else if (type == 'servicePointsLibra') {
                servicePointsLibra(rep, params)
            } else if (type == 'servicePointsMeteo') {
                servicePointsMeteo(rep, params)
            } else if (type == 'referenceDriver') {
                referenceDriver(rep, params)
            } else if (type == 'referenceTrailer') {
                referenceTrailer(rep, params)
            } else if (type == 'referenceVehicle') {
                referenceVehicle(rep, params)
            } else if (type == 'trackerStatus') {
                trackerStatus(rep, params)
            } else if (type == 'landBankAnalytic') {
                landBankAnalytic(rep)
            } else if (type == 'vehicleTask') {
                vehicleTask(rep)
            } else if (type == 'landBankGeozoneDetail') {
                landBankGeozoneDetail(rep, params)
            } else if (type == 'fuelAnalytic') {
                fuelAnalytic(rep, params)
            } else if (type == 'landBankDashboardDetail') {
                landBankDashboardDetail(rep, params)
            } else {
                console.log("Not Found " + type)
            }
        }

        function getXls(rep, type, params, func) {
            if (type == 'byFuelConsolidated') {
                byFuelConsolidated(rep, func);
            } else if (type == 'byParking') {
                byParking(rep, func);
            } else if (type == 'byFuel') {
                byFuel(rep, func);
            } else if (type == 'agroWork') {
                agroWork(rep, func);
            } else if (type == 'waybill') {
                waybill(rep, func);
            } else if (type == 'agroworkGeneral') {
                agroworkGeneral(rep, func);
            } else if (type == 'vehicleTrailer') {
                vehicleTrailer(rep, func);
            } else if (type == 'agroworkToday') {
                agroworkToday(rep, func);
            } else if (type == 'agroworkConsolidated') {
                agroworkConsolidated(rep, func);
            } else if (type == 'waybillConsolidatedCar') {
                waybillConsolidatedCar(rep, func)
            } else if (type == 'byAzs') {
                byAzs(rep, func)
            } else if (type == 'byAzsBalances') {
                byAzsBalances(rep, func)
            } else if (type == 'controlRefuelingPlace') {
                controlRefuelingPlace(rep, func)
            } else if (type == 'controlRefueling') {
                controlRefueling(rep, func)
            } else if (type == 'byAzsMoving') {
                byAzsMoving(rep, func)
            } else if (type == 'byVehicleAssign') {
                byVehicleAssign(rep, func)
            } else if (type == 'controlUnloadingPlace') {
                controlUnloadingPlace(rep, func)
            } else if (type == 'byCombine') {
                byCombine(rep, func)
            } else if (type == 'byFarmDevice') {
                byFarmDevice(re, func)
            } else if (type == 'unloadingByField') {
                unloadingByField(rep)
            } else if (type == 'byOverloader') {
                byOverloader(rep, func)
            } else if (type == 'byOverloaderConsolidated') {
                byOverloaderConsolidated(rep, func)
            } else if (type == 'grainToFarm') {
                grainToFarm(rep, func)
            } else if (type == 'grainToFarmConsolidated') {
                grainToFarmConsolidated(rep)
            } else if (type == 'byField') {
                byField(rep, func)
            } else if (type == 'byVehicleNew') {
                byVehicleNew(rep, func)
            } else if (type == 'byVehicleCar') {
                byVehicleCar(rep, func)
            } else if (type == 'byFuelDetail') {
                byFuelDetail(rep, func)
            } else if (type == 'byControlSeeder') {
                byControlSeeder(rep, func)
            } else if (type == 'byVehicleGroup') {
                byVehicleGroup(rep, func)
            } else if (type == 'byRoute') {
                byRoute(rep, params, func)
            } else if (type == 'byWorkType') {
                byWorkType(rep, params, func)
            } else if (type == 'controlVehicleInPoint') {
                controlVehicleInPoint(rep, params, func)
            } else if (type == 'byDistance') {
                byDistance(rep, params, func)
            } else if (type == 'byDistanceList') {
                byDistanceList(rep, func)
            } else if (type == 'farmByDevice') {
                farmByDevice(rep, params, func)
            } else if (type == 'controlWeightByUnloading') {
                controlWeightByUnloading(rep, func)
            } else if (type == 'weightAndUnloading') {
                weightAndUnloading(rep, func)
            } else if (type == 'meteoAggregate') {
                meteoAggregate(rep, func)
            } else {
                console.log("Not Found " + type)
            }

        }

        function byParking(rep, func) {

            var content_detail = [];
            for (var i = 0; i < rep.data.length; i++) {
                var record = rep.data[i];

                //table1
                var table1_body = [
                    [
                        {
                            text: record.vehicle_name,
                            style: 'tableHeader',
                            colSpan: 7,
                            alignment: 'center',
                            fillColor: '#c0c0c0'
                        },
                        {},
                        {},
                        {},
                        {},
                        {},
                        {}
                    ],
                    [
                        {},
                        {
                            text: $filter('translate')('time.start.parking'),
                            style: 'tableHeader',
                            alignment: 'center'
                        },
                        {
                            text: $filter('translate')('time.end.parking'),
                            style: 'tableHeader',
                            alignment: 'center'
                        },
                        {
                            text: $filter('translate')('parking.time'),
                            style: 'tableHeader',
                            alignment: 'center'
                        },
                        {
                            text: $filter('translate')('distance.parking1'),
                            style: 'tableHeader',
                            alignment: 'center'
                        },
                        {
                            text: $filter('translate')('distance.parking2'),
                            style: 'tableHeader',
                            alignment: 'center'
                        },
                        {
                            text: $filter('translate')('address'),
                            style: 'tableHeader'
                        }
                    ]
                ];

                var idx = 1;
                record.detailList.forEach(function (item) {
                    table1_body.push([
                        {'text': idx, alignment: 'center', style: 'td'},
                        {
                            'text': item.time_start > 0 ? $filter('date')(item.time_start * 1000, 'dd.MM.yyyy HH:mm:ss') : '',
                            alignment: 'center',
                            style: 'td'
                        },
                        {
                            'text': item.time_end > 0 ? $filter('date')(item.time_end * 1000, 'dd.MM.yyyy HH:mm:ss') : '',
                            alignment: 'center',
                            style: 'td'
                        },
                        {
                            'text': $filter('secondsToDateTimeWithDaysFull')(item.time_stopping),
                            alignment: 'center',
                            style: 'td'
                        },
                        {'text': $filter('number')(item.distance, 1), alignment: 'center', style: 'td'},
                        {
                            'text': $filter('number')(item.distance_from_parking, 1),
                            alignment: 'center',
                            style: 'td'
                        },
                        {'text': item.address, alignment: 'left', style: 'td'}
                    ]);
                    idx++;
                });

                //total
                table1_body.push([
                    {'text': $filter('translate')('total'), bold: true, style: 'td', colSpan: 3},
                    {},
                    {},
                    {
                        'text': $filter('secondsToDateTimeWithDaysFull')(record.time_stopping),
                        bold: true,
                        alignment: 'center',
                        style: 'td'
                    },
                    {'text': $filter('number')(record.distance, 1), bold: true, alignment: 'center', style: 'td'},
                    {},
                    {}
                ]);
                //---

                content_detail.push(
                    {
                        style: 'tableExample',
                        color: '#444',
                        table: {
                            widths: [24, 'auto', 'auto', 'auto', 'auto', 'auto', 'auto'],
                            dontBreakRows: true,
                            body: table1_body
                        }
                    });
            }

            var content = {
                info: {
                    title: 'Agrocontrol',
                    author: 'Agrocontrol',
                    subject: '',
                    keywords: '',
                },
                footer: {
                    columns: [
                        {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 20, 10]}
                    ]
                },
                pageMargins: [15, 20, 15, 30],

                content: [
                    {
                        'text': $filter('translate')('reportType') + ' ' + $filter('translate')('report.special.byParking'),
                        style: 'repTitle',
                        alignment: 'center'
                    },
                    {
                        'text': $filter('date')(rep.date_start * 1000, 'dd.MM.yyyy HH:mm:ss') + ' - ' + $filter('date')(rep.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                        bold: 'true',
                        alignment: 'center'
                    },
                    {
                        'text': $filter('translate')('min.parking.time') + ': ' + rep.min_parking_time + '' + $filter('translate')('s_min'),
                        bold: 'true',
                        alignment: 'center'
                    },
                    content_detail
                ],

                styles: {
                    tableExample: {
                        margin: [0, 5, 0, 15],
                        fontSize: 9
                    },
                    td: {
                        fontSize: 8
                    },
                    tableOpacityExample: {
                        margin: [0, 5, 0, 15],
                        fillColor: 'blue',
                        fillOpacity: 0.3
                    },
                    tableHeader: {
                        bold: true,
                        fontSize: 9,
                        color: 'black'
                    },

                    table2: {
                        fontSize: 9,
                        margin: [0, 5, 0, 15]
                    },
                    tableHeaderSmall: {
                        bold: true,
                        fontSize: 8,
                        color: 'black'
                    },
                    tdSmall: {
                        fontSize: 8
                    },


                },

            };

            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });


            } else {
                cratePdf(content);
            }

        }

//Сводный по топливу
        function byFuelConsolidated(rep, func) {
            var charts = {},
                charts_remaining = 0;
            for (var i = 0; i < rep.graphIdList.length; i++) {
                for (var x = 0; x < AmCharts.charts.length; x++) {
                    if (AmCharts.charts[x].div.id == rep.graphIdList[i] && $(AmCharts.charts[x].chartDiv).height() > 0) {
                        charts[rep.graphIdList[i]] = AmCharts.charts[x];
                        charts_remaining++;
                    }
                }
            }

            if (charts_remaining == 0) {
                generateData(rep, func);
            } else {
                for (var x in charts) {
                    if (charts.hasOwnProperty(x)) {
                        var chart = charts[x];
                        chart["export"].capture({}, function () {
                            this.toJPG({}, function (data) {

                                this.setup.chart.exportedImage = data;

                                charts_remaining--;

                                if (charts_remaining == 0) {
                                    generateData(rep, func);
                                }

                            });
                        });
                    }
                }
            }
            rep.data.sort(function (a, b) {
                if (a.vehicle_name < b.vehicle_name) {
                    return -1;
                }
                if (a.vehicle_name < b.vehicle_name) {
                    return 1;
                }
                return 0;
            });

            function generateData(rep, func) {
                var content_detail = [];
                for (var i = 0; i < rep.data.length; i++) {
                    var record = rep.data[i];

                    //table1
                    var table1_body = [
                        [
                            {
                                text: record.vehicle_name,
                                style: 'tableHeader',
                                colSpan: 8,
                                alignment: 'center',
                                fillColor: '#c0c0c0'
                            },
                            {},
                            {},
                            {},
                            {},
                            {},
                            {},
                            {},
                        ],
                        [
                            {
                                text: $filter('translate')('date'),
                                style: 'tableHeader',
                                alignment: 'center',
                                rowSpan: 2,
                            },
                            {
                                text: $filter('translate')('time.start.going'),
                                style: 'tableHeader',
                                alignment: 'center',
                                rowSpan: 2,
                            },
                            {
                                text: $filter('translate')('time.end.going'),
                                style: 'tableHeader',
                                alignment: 'center',
                                rowSpan: 2,
                            },
                            {
                                text: $filter('translate')('distance'),
                                style: 'tableHeader',
                                alignment: 'center',
                                rowSpan: 2,
                            },
                            {
                                text: $filter('translate')('time.going'),
                                style: 'tableHeader',
                                alignment: 'center',
                                rowSpan: 2,
                            },
                            {
                                text: $filter('translate')('parking.time'),
                                style: 'tableHeader',
                                alignment: 'center',
                                rowSpan: 2,
                            },
                            {
                                text: $filter('translate')('night.work'),
                                style: 'tableHeader',
                                alignment: 'center',
                                colSpan: 2,
                            },
                            {},

                        ],
                        [
                            {},
                            {},
                            {},
                            {},
                            {},
                            {},
                            {
                                text: $filter('translate')('workingtime'),
                                style: 'tableHeader',
                                alignment: 'center',
                            },
                            {
                                text: $filter('translate')('ignition_working_time'),
                                style: 'tableHeader',
                                alignment: 'center',
                            },
                        ],
                    ];

                    record.detailList.forEach(function (item) {
                        table1_body.push([
                            {'text': $filter('date')(item.date, 'dd.MM.yyyy'), alignment: 'center', style: 'td'},
                            {
                                'text': item.time_start > 0 ? $filter('date')(item.time_start * 1000, 'dd.MM.yyyy HH:mm:ss') : '',
                                alignment: 'center',
                                style: 'td'
                            },
                            {
                                'text': item.time_end > 0 ? $filter('date')(item.time_end * 1000, 'dd.MM.yyyy HH:mm:ss') : '',
                                alignment: 'center',
                                style: 'td'
                            },
                            {'text': $filter('number')(item.distance, 1), alignment: 'center', style: 'td'},
                            {
                                'text': $filter('secondsToDateTimeWithDaysFull')(item.time_going),
                                alignment: 'center',
                                style: 'td'
                            },
                            {
                                'text': $filter('secondsToDateTimeWithDaysFull')(item.time_stopping),
                                alignment: 'center',
                                style: 'td'
                            },
                            {
                                'text': $filter('secondsToDateTimeWithDaysFull')(item.working_night_time),
                                alignment: 'center',
                                style: 'td'
                            },
                            {
                                'text': $filter('secondsToDateTimeWithDaysFull')(item.ignition_night_time),
                                alignment: 'center',
                                style: 'td'
                            }
                        ]);
                    });

                    //total
                    table1_body.push([
                        {'text': $filter('translate')('total'), bold: true, style: 'td'},
                        {
                            'text': record.time_start > 0 ? $filter('date')(record.time_start * 1000, 'dd.MM.yyyy HH:mm:ss') : '',
                            bold: true,
                            alignment: 'center',
                            style: 'td'
                        },
                        {
                            'text': record.time_end > 0 ? $filter('date')(record.time_end * 1000, 'dd.MM.yyyy HH:mm:ss') : '',
                            bold: true,
                            alignment: 'center',
                            style: 'td'
                        },
                        {
                            'text': $filter('number')(record.distance, 1),
                            bold: true,
                            alignment: 'center',
                            style: 'td'
                        },
                        {
                            'text': $filter('secondsToDateTimeWithDaysFull')(record.time_going),
                            bold: true,
                            alignment: 'center',
                            style: 'td'
                        },
                        {
                            'text': $filter('secondsToDateTimeWithDaysFull')(record.time_stopping),
                            bold: true,
                            alignment: 'center',
                            style: 'td'
                        },
                        {
                            'text': $filter('secondsToDateTimeWithDaysFull')(record.working_night_time),
                            bold: true,
                            alignment: 'center',
                            style: 'td'
                        },
                        {
                            'text': $filter('secondsToDateTimeWithDaysFull')(record.ignition_night_time),
                            bold: true,
                            alignment: 'center',
                            style: 'td'
                        }
                    ]);
                    //---

                    //table2 drt
                    var drt_content = '';
                    if (record.sensorList.drt) {
                        var table2_body = [
                            [
                                {
                                    text: $filter('translate')('sensor.fuel.drt'),
                                    style: 'tableHeaderSmall',
                                    colSpan: 13,
                                    alignment: 'center',
                                    fillColor: '#c0c0c0'
                                },
                                {},
                                {},
                                {},
                                {},
                                {},
                                {},
                                {},
                                {},
                                {},
                                {},
                                {},
                                {}
                            ],

                            [
                                {
                                    text: $filter('translate')('date'),
                                    style: 'tableHeaderSmall',
                                    alignment: 'center',
                                    rowSpan: 2,
                                },
                                {
                                    text: $filter('translate')('fuel.level'),
                                    style: 'tableHeaderSmall',
                                    alignment: 'center',
                                    colSpan: 2,
                                },
                                {},
                                {
                                    text: $filter('translate')('going'),
                                    style: 'tableHeaderSmall',
                                    alignment: 'center',
                                    colSpan: 3,
                                },
                                {},
                                {},
                                {
                                    text: $filter('translate')('stopping.working'),
                                    style: 'tableHeaderSmall',
                                    alignment: 'center',
                                    colSpan: 3,
                                },
                                {},
                                {},
                                {
                                    text: $filter('translate')('distance'),
                                    style: 'tableHeaderSmall',
                                    alignment: 'center',
                                    rowSpan: 2,
                                },
                                {
                                    text: $filter('translate')('ignition_working_time'),
                                    style: 'tableHeaderSmall',
                                    alignment: 'center',
                                    rowSpan: 2,
                                },
                                {
                                    text: $filter('translate')('fuel.100km'),
                                    style: 'tableHeaderSmall',
                                    alignment: 'center',
                                    rowSpan: 2,
                                },
                                {
                                    text: $filter('translate')('fuel.used'),
                                    style: 'tableHeaderSmall',
                                    alignment: 'center',
                                    rowSpan: 2,
                                },


                            ],
                            [
                                {},
                                {
                                    text: $filter('translate')('start_litr'),
                                    style: 'tableHeaderSmall',
                                    alignment: 'center',
                                },
                                {
                                    text: $filter('translate')('end_litr'),
                                    style: 'tableHeaderSmall',
                                    alignment: 'center',
                                },
                                {
                                    text: $filter('translate')('fuel.used'),
                                    style: 'tableHeaderSmall',
                                    alignment: 'center',
                                },
                                {
                                    text: $filter('translate')('fuel.100km'),
                                    style: 'tableHeaderSmall',
                                    alignment: 'center',
                                },
                                {
                                    text: $filter('translate')('ignition_working_time'),
                                    style: 'tableHeaderSmall',
                                    alignment: 'center',
                                },
                                {
                                    text: $filter('translate')('fuel.used'),
                                    style: 'tableHeaderSmall',
                                    alignment: 'center',
                                },
                                {
                                    text: $filter('translate')('fuel.1hour'),
                                    style: 'tableHeaderSmall',
                                    alignment: 'center',
                                },
                                {
                                    text: $filter('translate')('ignition_working_time'),
                                    style: 'tableHeaderSmall',
                                    alignment: 'center',
                                },
                                {},
                                {},
                                {},
                                {},
                            ],
                        ];

                        record.detailList.forEach(function (item) {
                            table2_body.push([
                                {
                                    'text': $filter('date')(item.date, 'dd.MM.yyyy'),
                                    alignment: 'center',
                                    style: 'tdSmall'
                                },
                                {'text': '', alignment: 'center', style: 'tdSmall'},
                                {'text': '', alignment: 'center', style: 'tdSmall'},
                                {
                                    'text': $filter('number')(item.fuel_used_drt_moving, 2),
                                    alignment: 'center',
                                    style: 'tdSmall'
                                },
                                {
                                    'text': $filter('number')(item.fuel_used_drt_moving_avg, 2),
                                    alignment: 'center',
                                    style: 'tdSmall'
                                },
                                {
                                    'text': $filter('secondsToDateTimeWithDaysFull')(item.ignition_moving_time),
                                    alignment: 'center',
                                    style: 'tdSmall'
                                },
                                {
                                    'text': $filter('number')(item.fuel_used_drt_stopping, 2),
                                    alignment: 'center',
                                    style: 'tdSmall'
                                },
                                {
                                    'text': $filter('number')(item.fuel_used_drt_stopping_avg, 2),
                                    alignment: 'center',
                                    style: 'tdSmall'
                                },
                                {
                                    'text': $filter('secondsToDateTimeWithDaysFull')(item.ignition_stopping_time),
                                    alignment: 'center',
                                    style: 'tdSmall'
                                },
                                {
                                    'text': $filter('number')(item.distance, 2),
                                    alignment: 'center',
                                    style: 'tdSmall'
                                },
                                {
                                    'text': $filter('secondsToDateTimeWithDaysFull')(item.ignition_working_time),
                                    alignment: 'center',
                                    style: 'tdSmall'
                                },
                                {
                                    'text': $filter('number')(item.fuel_used_drt_avg, 2),
                                    alignment: 'center',
                                    style: 'tdSmall'
                                },
                                {
                                    'text': $filter('number')(item.fuel_used_drt, 2),
                                    alignment: 'center',
                                    style: 'tdSmall'
                                },

                            ]);
                        });

                        //total
                        table2_body.push([
                            {'text': $filter('translate')('total'), bold: true, style: 'tdSmall'},
                            {'text': '', alignment: 'center', bold: true, style: 'tdSmall'},
                            {'text': '', alignment: 'center', bold: true, style: 'tdSmall'},
                            {
                                'text': $filter('number')(record.fuel_used_drt_moving, 2),
                                alignment: 'center',
                                bold: true,
                                style: 'tdSmall'
                            },
                            {
                                'text': $filter('number')(record.fuel_used_drt_moving_avg, 2),
                                alignment: 'center',
                                bold: true,
                                style: 'tdSmall'
                            },
                            {
                                'text': $filter('secondsToDateTimeWithDaysFull')(record.ignition_moving_time),
                                alignment: 'center',
                                bold: true,
                                style: 'tdSmall'
                            },
                            {
                                'text': $filter('number')(record.fuel_used_drt_stopping, 2),
                                alignment: 'center',
                                bold: true,
                                style: 'tdSmall'
                            },
                            {
                                'text': $filter('number')(record.fuel_used_drt_stopping_avg, 2),
                                alignment: 'center',
                                bold: true,
                                style: 'tdSmall'
                            },
                            {
                                'text': $filter('secondsToDateTimeWithDaysFull')(record.ignition_stopping_time),
                                alignment: 'center',
                                bold: true,
                                style: 'tdSmall'
                            },
                            {
                                'text': $filter('number')(record.distance, 2),
                                alignment: 'center',
                                bold: true,
                                style: 'tdSmall'
                            },
                            {
                                'text': $filter('secondsToDateTimeWithDaysFull')(record.ignition_working_time),
                                alignment: 'center',
                                bold: true,
                                style: 'tdSmall'
                            },
                            {
                                'text': $filter('number')(record.fuel_used_drt_avg, 2),
                                alignment: 'center',
                                bold: true,
                                style: 'tdSmall'
                            },
                            {
                                'text': $filter('number')(record.fuel_used_drt, 2),
                                alignment: 'center',
                                bold: true,
                                style: 'tdSmall'
                            },
                        ]);

                        // ---

                        drt_content = {
                            style: 'table2',
                            color: '#444',
                            table: {
                                widths: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto'],
                                headerRows: 3,
                                body: table2_body
                            },
                        };

                    }
                    // ---

                    //table2 dut
                    var dut_content = '';
                    if (record.sensorList.dut) {
                        var table2_body = [
                            [
                                {
                                    text: $filter('translate')('sensor.fuel.dut'),
                                    style: 'tableHeaderSmall',
                                    colSpan: 13,
                                    alignment: 'center',
                                    fillColor: '#c0c0c0'
                                },
                                {},
                                {},
                                {},
                                {},
                                {},
                                {},
                                {},
                                {},
                                {},
                                {},
                                {},
                                {},
                            ],

                            [
                                {
                                    text: $filter('translate')('date'),
                                    style: 'tableHeaderSmall',
                                    alignment: 'center',
                                    rowSpan: 2,
                                },
                                {
                                    text: $filter('translate')('fuel.level'),
                                    style: 'tableHeaderSmall',
                                    alignment: 'center',
                                    colSpan: 2,
                                },
                                {},
                                {
                                    text: $filter('translate')('going'),
                                    style: 'tableHeaderSmall',
                                    alignment: 'center',
                                    colSpan: 3,
                                },
                                {},
                                {},
                                {
                                    text: $filter('translate')('stopping.working'),
                                    style: 'tableHeaderSmall',
                                    alignment: 'center',
                                    colSpan: 3,
                                },
                                {},
                                {},
                                {
                                    text: $filter('translate')('distance'),
                                    style: 'tableHeaderSmall',
                                    alignment: 'center',
                                    rowSpan: 2,
                                },
                                {
                                    text: $filter('translate')('ignition_working_time'),
                                    style: 'tableHeaderSmall',
                                    alignment: 'center',
                                    rowSpan: 2,
                                },
                                {
                                    text: $filter('translate')('fuel.100km'),
                                    style: 'tableHeaderSmall',
                                    alignment: 'center',
                                    rowSpan: 2,
                                },
                                {
                                    text: $filter('translate')('fuel.used'),
                                    style: 'tableHeaderSmall',
                                    alignment: 'center',
                                    rowSpan: 2,
                                },


                            ],
                            [
                                {},
                                {
                                    text: $filter('translate')('start_litr'),
                                    style: 'tableHeaderSmall',
                                    alignment: 'center',
                                },
                                {
                                    text: $filter('translate')('end_litr'),
                                    style: 'tableHeaderSmall',
                                    alignment: 'center',
                                },
                                {
                                    text: $filter('translate')('fuel.used'),
                                    style: 'tableHeaderSmall',
                                    alignment: 'center',
                                },
                                {
                                    text: $filter('translate')('fuel.100km'),
                                    style: 'tableHeaderSmall',
                                    alignment: 'center',
                                },
                                {
                                    text: $filter('translate')('ignition_working_time'),
                                    style: 'tableHeaderSmall',
                                    alignment: 'center',
                                },
                                {
                                    text: $filter('translate')('fuel.used'),
                                    style: 'tableHeaderSmall',
                                    alignment: 'center',
                                },
                                {
                                    text: $filter('translate')('fuel.1hour'),
                                    style: 'tableHeaderSmall',
                                    alignment: 'center',
                                },
                                {
                                    text: $filter('translate')('ignition_working_time'),
                                    style: 'tableHeaderSmall',
                                    alignment: 'center',
                                },
                                {},
                                {},
                                {},
                                {},
                            ],
                        ];

                        record.detailList.forEach(function (item) {
                            table2_body.push([
                                {
                                    'text': $filter('date')(item.date, 'dd.MM.yyyy'),
                                    alignment: 'center',
                                    style: 'tdSmall'
                                },
                                {
                                    'text': $filter('number')(item.fuel_level_start, 2),
                                    alignment: 'center',
                                    style: 'tdSmall'
                                },
                                {
                                    'text': $filter('number')(item.fuel_level_end, 2),
                                    alignment: 'center',
                                    style: 'tdSmall'
                                },
                                {
                                    'text': $filter('number')(item.fuel_used_dut_moving, 2),
                                    alignment: 'center',
                                    style: 'tdSmall'
                                },
                                {
                                    'text': $filter('number')(item.fuel_used_dut_moving_avg, 2),
                                    alignment: 'center',
                                    style: 'tdSmall'
                                },
                                {
                                    'text': $filter('secondsToDateTimeWithDaysFull')(item.ignition_moving_time),
                                    alignment: 'center',
                                    style: 'tdSmall'
                                },
                                {
                                    'text': $filter('number')(item.fuel_used_dut_stopping, 2),
                                    alignment: 'center',
                                    style: 'tdSmall'
                                },
                                {
                                    'text': $filter('number')(item.fuel_used_dut_stopping_avg, 2),
                                    alignment: 'center',
                                    style: 'tdSmall'
                                },
                                {
                                    'text': $filter('secondsToDateTimeWithDaysFull')(item.ignition_stopping_time),
                                    alignment: 'center',
                                    style: 'tdSmall'
                                },
                                {
                                    'text': $filter('number')(item.distance, 2),
                                    alignment: 'center',
                                    style: 'tdSmall'
                                },
                                {
                                    'text': $filter('secondsToDateTimeWithDaysFull')(item.ignition_working_time),
                                    alignment: 'center',
                                    style: 'tdSmall'
                                },
                                {
                                    'text': $filter('number')(item.fuel_used_dut_avg, 2),
                                    alignment: 'center',
                                    style: 'tdSmall'
                                },
                                {
                                    'text': $filter('number')(item.fuel_used_dut, 2),
                                    alignment: 'center',
                                    style: 'tdSmall'
                                },

                            ]);
                        });

                        //total
                        table2_body.push([
                            {'text': $filter('translate')('total'), bold: true, style: 'tdSmall'},
                            {
                                'text': $filter('number')(record.fuel_level_start, 2),
                                alignment: 'center',
                                bold: true,
                                style: 'tdSmall'
                            },
                            {
                                'text': $filter('number')(record.fuel_level_end, 2),
                                alignment: 'center',
                                bold: true,
                                style: 'tdSmall'
                            },
                            {
                                'text': $filter('number')(record.fuel_used_dut_moving, 2),
                                alignment: 'center',
                                bold: true,
                                style: 'tdSmall'
                            },
                            {
                                'text': $filter('number')(record.fuel_used_dut_moving_avg, 2),
                                alignment: 'center',
                                bold: true,
                                style: 'tdSmall'
                            },
                            {
                                'text': $filter('secondsToDateTimeWithDaysFull')(record.ignition_moving_time),
                                alignment: 'center',
                                bold: true,
                                style: 'tdSmall'
                            },
                            {
                                'text': $filter('number')(record.fuel_used_dut_stopping, 2),
                                alignment: 'center',
                                bold: true,
                                style: 'tdSmall'
                            },
                            {
                                'text': $filter('number')(record.fuel_used_dut_stopping_avg, 2),
                                alignment: 'center',
                                bold: true,
                                style: 'tdSmall'
                            },
                            {
                                'text': $filter('secondsToDateTimeWithDaysFull')(record.ignition_stopping_time),
                                alignment: 'center',
                                bold: true,
                                style: 'tdSmall'
                            },
                            {
                                'text': $filter('number')(record.distance, 2),
                                alignment: 'center',
                                bold: true,
                                style: 'tdSmall'
                            },
                            {
                                'text': $filter('secondsToDateTimeWithDaysFull')(record.ignition_working_time),
                                alignment: 'center',
                                bold: true,
                                style: 'tdSmall'
                            },
                            {
                                'text': $filter('number')(record.fuel_used_dut_avg, 2),
                                alignment: 'center',
                                bold: true,
                                style: 'tdSmall'
                            },
                            {
                                'text': $filter('number')(record.fuel_used_dut, 2),
                                alignment: 'center',
                                bold: true,
                                style: 'tdSmall'
                            },
                        ]);

                        // ---

                        dut_content = {
                            style: 'table2',
                            color: '#444',
                            table: {
                                widths: [50, 50, 50, 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto'],
                                headerRows: 3,
                                body: table2_body
                            },
                        }
                    }
                    // ---

                    //table3
                    var table3_body = [
                        [
                            {
                                text: $filter('translate')('date'),
                                style: 'tableHeader',
                                alignment: 'center'
                            },
                            {
                                text: $filter('translate')('start_litr'),
                                style: 'tableHeader',
                                alignment: 'center'
                            },
                            {
                                text: $filter('translate')('fuel.refuel.dut'),
                                style: 'tableHeader',
                                alignment: 'center'
                            },
                            {
                                text: $filter('translate')('petrol.refueling.litr'),
                                style: 'tableHeader',
                                alignment: 'center'
                            },
                            {
                                text: $filter('translate')('fuel.drain.param'),
                                style: 'tableHeader',
                                alignment: 'center'
                            },
                            {
                                text: $filter('translate')('end_litr'),
                                style: 'tableHeader',
                                alignment: 'center'
                            },
                            {
                                text: $filter('translate')('address'),
                                style: 'tableHeader',
                                alignment: 'center'
                            },
                        ],
                    ];

                    record.refuelingAndDrainList.forEach(function (item) {
                        table3_body.push([
                            {
                                'text': item.start_tm > 0 ? $filter('date')(item.start_tm * 1000, 'dd.MM.yyyy HH:mm:ss') : '',
                                alignment: 'center',
                                style: 'td'
                            },
                            {'text': $filter('number')(item.start_litr, 1), alignment: 'center', style: 'td'},
                            {
                                'text': item.isRefueling ? $filter('number')(item.litr, 1) : '',
                                alignment: 'center',
                                style: 'td'
                            },
                            {
                                'text': item.refuelingByAzs ? $filter('number')(item.refuelingByAzs, 1) : '',
                                alignment: 'center',
                                style: 'td'
                            },
                            {
                                'text': !item.isRefueling ? $filter('number')(item.litr, 1) : '',
                                alignment: 'center',
                                style: 'td'
                            },
                            {'text': $filter('number')(item.end_litr, 1), alignment: 'center', style: 'td'},
                            {'text': item.address, alignment: 'center', style: 'td'}
                        ]);
                    });

                    //total
                    table3_body.push([
                        {'text': $filter('translate')('total'), bold: true, style: 'td'},
                        {},
                        {
                            'text': $filter('number')(record.totalRefueling, 1),
                            alignment: 'center',
                            bold: true,
                            style: 'td'
                        },
                        {
                            'text': $filter('number')(record.totalRefuelingAzs, 1),
                            alignment: 'center',
                            bold: true,
                            style: 'td'
                        },
                        {
                            'text': $filter('number')(record.totalDrain, 1),
                            alignment: 'center',
                            bold: true,
                            style: 'td'
                        },
                        {},
                        {}
                    ]);
                    // ---

                    //table4 wayblill
                    var table4_body = [
                        [
                            {
                                text: $filter('translate')('report.waybill'),
                                style: 'tableHeaderSmall',
                                colSpan: 17,
                                alignment: 'center',
                                fillColor: '#c0c0c0'
                            },
                            {},
                            {},
                            {},
                            {},
                            {},
                            {},
                            {},
                            {},
                            {},
                            {},
                            {},
                            {},
                            {},
                            {},
                            {},
                            {}
                        ],
                        [
                            {
                                text: $filter('translate')('timein'),
                                style: 'tableHeaderSmall',
                                alignment: 'center',
                                rowSpan: 2
                            },
                            {
                                text: $filter('translate')('timeout'),
                                style: 'tableHeaderSmall',
                                alignment: 'center',
                                rowSpan: 2
                            },
                            {
                                text: $filter('translate')('workingtime'),
                                style: 'tableHeaderSmall',
                                alignment: 'center',
                                rowSpan: 2
                            },
                            {
                                text: $filter('translate')('including'),
                                style: 'tableHeaderSmall',
                                colSpan: 3,
                                alignment: 'center'
                            },
                            {},
                            {},

                            {
                                text: $filter('translate')('night.work'),
                                style: 'tableHeaderSmall',
                                alignment: 'center',
                                rowSpan: 2
                            },
                            {
                                text: $filter('translate')('mechanic'),
                                style: 'tableHeaderSmall',
                                alignment: 'center',
                                rowSpan: 2
                            },
                            {
                                text: $filter('translate')('field'),
                                style: 'tableHeaderSmall',
                                alignment: 'center',
                                rowSpan: 2
                            },
                            {
                                text: $filter('translate')('worktypes'),
                                style: 'tableHeaderSmall',
                                alignment: 'center',
                                rowSpan: 2
                            },
                            {
                                text: $filter('translate')('trailer'),
                                style: 'tableHeaderSmall',
                                alignment: 'center',
                                rowSpan: 2
                            },
                            {
                                text: $filter('translate')('processed'),
                                style: 'tableHeaderSmall',
                                alignment: 'center',
                                rowSpan: 2
                            },
                            {
                                text: $filter('translate')('crossing'),
                                style: 'tableHeaderSmall',
                                alignment: 'center',
                                rowSpan: 2
                            },
                            {
                                text: $filter('translate')('fuel'),
                                style: 'tableHeaderSmall',
                                alignment: 'center',
                                rowSpan: 2
                            },
                            {
                                text: $filter('translate')('including'),
                                style: 'tableHeaderSmall',
                                colSpan: 2,
                                alignment: 'center'
                            },
                            {},
                            {
                                text: $filter('translate')('processed.counted'),
                                style: 'tableHeaderSmall',
                                alignment: 'center',
                                rowSpan: 2
                            }
                        ],
                        [
                            {},
                            {},
                            {},
                            {
                                text: $filter('translate')('rep.working'),
                                style: 'tableHeaderSmall',
                                alignment: 'center'
                            },
                            {
                                text: $filter('translate')('rep.stopping'),
                                style: 'tableHeaderSmall',
                                alignment: 'center'
                            },
                            {
                                text: $filter('translate')('rep.moving'),
                                style: 'tableHeaderSmall',
                                alignment: 'center'
                            },
                            {},
                            {},
                            {},
                            {},
                            {},
                            {},
                            {},
                            {},
                            {
                                text: $filter('translate')('fuel.used.processed'),
                                style: 'tableHeaderSmall',
                                alignment: 'center'
                            },
                            {
                                text: $filter('translate')('fuel.used.moving1'),
                                style: 'tableHeaderSmall',
                                alignment: 'center'
                            },
                            {}
                        ],
                    ];

                    record.waybillTotal = {
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
                    };
                    record.waybillList.forEach(function (item) {
                        table4_body.push([
                            {
                                'text': $filter('date')(item.time_in, 'dd.MM.yyyy HH:mm:ss'),
                                alignment: 'center',
                                style: 'tdSmall'
                            },
                            {
                                'text': $filter('date')(item.time_out, 'dd.MM.yyyy HH:mm:ss'),
                                alignment: 'center',
                                style: 'tdSmall'
                            },
                            {
                                'text': $filter('translate')($filter('secondsToDateTime')(item.time_duration + item.time_duration_moving)),
                                alignment: 'center',
                                style: 'tdSmall'
                            },
                            {
                                'text': $filter('translate')($filter('secondsToDateTime')(item.time_duration - item.stop_with_engine_processed)),
                                alignment: 'center',
                                style: 'tdSmall'
                            },
                            {
                                'text': $filter('translate')($filter('secondsToDateTime')(item.stop_with_engine_processed + item.stop_with_engine_moving)),
                                alignment: 'center',
                                style: 'tdSmall'
                            },
                            {
                                'text': $filter('translate')($filter('secondsToDateTime')(item.time_duration_moving - item.stop_with_engine_moving)),
                                alignment: 'center',
                                style: 'tdSmall'
                            },
                            {
                                'text': $filter('translate')($filter('secondsToDateTime')(item.night_working)),
                                alignment: 'center',
                                style: 'tdSmall'
                            },
                            {'text': item.driver ? item.driver.name : '', alignment: 'center', style: 'tdSmall'},
                            {'text': item.geozone ? item.geozone.name : '', alignment: 'center', style: 'tdSmall'},
                            {
                                'text': !item.is_working ? $filter('translate')('crossing.name') : item.trailer && item.trailer.worktype ? $filter('translate')(item.trailer.worktype.name) : '',
                                alignment: 'center',
                                style: 'tdSmall'
                            },
                            {'text': item.trailer ? item.trailer.name : '', alignment: 'center', style: 'tdSmall'},

                            {'text': $filter('number')(item.processed, 1), alignment: 'center', style: 'tdSmall'},
                            {
                                'text': $filter('number')(item.distance_moving, 1),
                                alignment: 'center',
                                style: 'tdSmall'
                            },
                            {'text': $filter('number')(item.fuel_used, 1), alignment: 'center', style: 'tdSmall'},
                            {
                                'text': $filter('number')(item.fuel_used_processed, 1),
                                alignment: 'center',
                                style: 'tdSmall'
                            },
                            {
                                'text': $filter('number')(item.fuel_used_moving, 1),
                                alignment: 'center',
                                style: 'tdSmall'
                            },
                            {
                                'text': $filter('number')(item.processed_count, 1),
                                alignment: 'center',
                                style: 'tdSmall'
                            }
                        ]);

                        record.waybillTotal['3'] += item.time_duration + item.time_duration_moving;
                        record.waybillTotal['4'] += item.time_duration - item.stop_with_engine_processed;
                        record.waybillTotal['5'] += item.stop_with_engine_processed + item.stop_with_engine_moving;
                        record.waybillTotal['6'] += item.time_duration_moving - item.stop_with_engine_moving;
                        record.waybillTotal['7'] += item.night_working;

                        record.waybillTotal['12'] += item.processed;
                        record.waybillTotal['13'] += item.distance_moving;
                        record.waybillTotal['14'] += item.fuel_used;
                        record.waybillTotal['15'] += item.fuel_used_processed;
                        record.waybillTotal['16'] += item.fuel_used_moving;
                        record.waybillTotal['17'] += item.processed_count;
                    });

                    //total
                    table4_body.push([
                        {'text': $filter('translate')('total'), bold: true, colSpan: 2, style: 'tdSmall'},
                        {},
                        {
                            'text': $filter('translate')($filter('secondsToDateTime')(record.waybillTotal['3'])),
                            bold: true,
                            alignment: 'center',
                            style: 'tdSmall'
                        },
                        {
                            'text': $filter('translate')($filter('secondsToDateTime')(record.waybillTotal['4'])),
                            bold: true,
                            alignment: 'center',
                            style: 'tdSmall'
                        },
                        {
                            'text': $filter('translate')($filter('secondsToDateTime')(record.waybillTotal['5'])),
                            bold: true,
                            alignment: 'center',
                            style: 'tdSmall'
                        },
                        {
                            'text': $filter('translate')($filter('secondsToDateTime')(record.waybillTotal['6'])),
                            bold: true,
                            alignment: 'center',
                            style: 'tdSmall'
                        },
                        {
                            'text': $filter('translate')($filter('secondsToDateTime')(record.waybillTotal['7'])),
                            bold: true,
                            alignment: 'center',
                            style: 'tdSmall'
                        },
                        {},
                        {},
                        {},
                        {},
                        {
                            'text': $filter('number')(record.waybillTotal['12'], 1),
                            bold: true,
                            alignment: 'center',
                            style: 'tdSmall'
                        },
                        {
                            'text': $filter('number')(record.waybillTotal['13'], 1),
                            bold: true,
                            alignment: 'center',
                            style: 'tdSmall'
                        },
                        {
                            'text': $filter('number')(record.waybillTotal['14'], 1),
                            bold: true,
                            alignment: 'center',
                            style: 'tdSmall'
                        },
                        {
                            'text': $filter('number')(record.waybillTotal['15'], 1),
                            bold: true,
                            alignment: 'center',
                            style: 'tdSmall'
                        },
                        {
                            'text': $filter('number')(record.waybillTotal['16'], 1),
                            bold: true,
                            alignment: 'center',
                            style: 'tdSmall'
                        },
                        {
                            'text': $filter('number')(record.waybillTotal['17'], 1),
                            bold: true,
                            alignment: 'center',
                            style: 'tdSmall'
                        }
                    ]);

                    // ---

                    content_detail.push(
                        {
                            style: 'tableExample',
                            color: '#444',
                            table: {
                                widths: [90, 100, 90, 90, 90, 90, 100, 100],
                                headerRows: 3,
                                body: table1_body
                            }
                        }
                    );

                    if (record.sensorList.drt) {
                        content_detail.push(drt_content);
                    }
                    if (record.sensorList.dut) {
                        content_detail.push(dut_content);
                    }

                    content_detail.push({
                        style: 'tableExample',
                        color: '#444',
                        table: {
                            widths: [120, 100, 100, 100, 110, 108, 120],
                            headerRows: 1,
                            body: table3_body
                        },
                    });

                    if (record.sensorList.dut) {
                        content_detail.push({
                            "width": "700",
                            'height': 300,
                            alignment: 'center',
                            "image": charts["fuelChart" + record.vehicle_id].exportedImage,
                            //"fit": [350, 400]
                        });
                    }

                    if (record.waybillList.length) {
                        content_detail.push({
                            style: 'tableExample',
                            color: '#444',
                            table: {
                                widths: [40, 40, 38, 40, 40, 33, 43, 45, 45, 40, 40, 40, 35, 35, 42, 42, 30],
                                headerRows: 3,
                                body: table4_body
                            },
                        });
                    }

                }

                var content = {
                    info: {
                        title: 'Agrocontrol',
                        author: 'Agrocontrol',
                        subject: '',
                        keywords: '',
                    },
                    footer: {
                        columns: [
                            '',//Left part
                            {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 20, 5]}
                        ]
                    },
                    pageMargins: [10, 20, 10, 30],
                    pageOrientation: 'landscape',

                    content: [
                        {
                            'text': $filter('translate')('reportType') + ' ' + $filter('translate')('report.special.byFuelConsolidated'),
                            style: 'repTitle',
                            alignment: 'center',
                            fontSize: 11
                        },
                        {
                            'text': $filter('date')(rep.date_start * 1000, 'dd.MM.yyyy HH:mm:ss') + ' - ' + $filter('date')(rep.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),

                            alignment: 'center'
                        },
                        content_detail


                    ],

                    styles: {
                        tableExample: {
                            margin: [0, 5, 0, 15],
                            fontSize: 10
                        },
                        td: {
                            fontSize: 8
                        },
                        tableOpacityExample: {
                            margin: [0, 5, 0, 15],
                            fillColor: 'blue',
                            fillOpacity: 0.3
                        },
                        tableHeader: {
                            bold: true,
                            fontSize: 10,
                            color: 'black'
                        },

                        table2: {
                            fontSize: 10,
                            margin: [0, 5, 0, 15]
                        },
                        tableHeaderSmall6: {
                            bold: true,
                            fontSize: 7,
                            color: 'black'
                        },
                        tableHeaderSmall: {
                            bold: true,
                            fontSize: 9,
                            color: 'black'
                        },
                        tdSmall: {
                            fontSize: 8
                        },
                        tdSmall6: {
                            fontSize: 6
                        },
                        repTitle: {
                            fontSize: 16,
                            bold: true
                        },
                        repDate: {
                            fontSize: 10,
                            bold: true
                        }

                    },

                };

                if (func) {
                    const pdfDocGenerator = pdfMake.createPdf(content);
                    pdfDocGenerator.getBase64((data) => {
                        func.call(this, data);
                    });


                } else {
                    cratePdf(content);
                }

            }

        }

// По топливу
        function byFuel(rep, params, func) {

            if (params.scope.pdfLoading == true) {
                return;
            } else {
                params.scope.pdfLoading = true;
            }

            var myStoppingVar = setInterval(checkAddress, 100, rep, params, func);

            function checkAddress(rep, params, func) {
                console.time('stopAddress');
                if (rep.byFuel.stopPointList.length > 0) {
                    for (var i = 0; i < rep.byFuel.stopPointList.length; i++) {
                        var stop = rep.byFuel.stopPointList[i];
                        params.scope.loadAddress(stop.stopPoint)
                        var last_element = rep.byFuel.stopPointList.length - 1
                        if (!stop.stopPoint.address) {
                            break;
                        } else if (stop.stopPoint.address && rep.byFuel.stopPointList[last_element].stopPoint.address != undefined) {
                            myStoppingVar = clearInterval(myStoppingVar)
                            console.timeEnd('stopAddress');
                            break;
                        }
                    }
                } else {
                    myStoppingVar = clearInterval(myStoppingVar)
                }
            }

            var myTripVar = setInterval(checkTripAddress, 100, rep, params, func);

            function checkTripAddress(rep, params, func) {
                console.time('TripAddress');
                if (rep.byTrip.reportDetailList.length > 0) {
                    for (var i = 0; i < rep.byTrip.reportDetailList.length; i++) {
                        var reportDetail = rep.byTrip.reportDetailList[i];
                        params.scope.loadAddress(reportDetail.firstPoint)
                        params.scope.loadAddress(reportDetail.lastPoint)
                        var last_element = rep.byTrip.reportDetailList.length - 1

                        if (!reportDetail.firstPoint.address && !reportDetail.lastPoint.address) {
                            break;
                        } else if (reportDetail.firstPoint.address && reportDetail.lastPoint.address && rep.byTrip.reportDetailList[last_element].lastPoint.address != undefined) {
                            myTripVar = clearInterval(myTripVar)
                            console.timeEnd('TripAddress');
                            break;
                        }
                    }
                } else {
                    myTripVar = clearInterval(myTripVar)
                }
            }

            var myParkingVar = setInterval(checkStopAddress, 100, rep, params, func);

            function checkStopAddress(rep, params, func) {
                console.time('parkingAddress');
                if (rep.byFuel.parkingPointList.length > 0) {
                    for (var i = 0; i < rep.byFuel.parkingPointList.length; i++) {
                        var parking = rep.byFuel.parkingPointList[i];
                        params.scope.loadAddress(parking.stopPoint)
                        var last_element = rep.byFuel.parkingPointList.length - 1

                        if (!parking.stopPoint.address) {
                            break;
                        } else if (parking.stopPoint.address && rep.byFuel.parkingPointList[last_element].stopPoint.address != undefined && !myStoppingVar && !myTripVar) {
                            generateData(rep, params, func);
                            myParkingVar = clearInterval(myParkingVar)
                            console.timeEnd('parkingAddress');
                            break;
                        }
                    }
                } else {
                    myParkingVar = clearInterval(myParkingVar)
                }
            }

            function generateData(rep, params, func) {

                var charts = {},

                    charts_remaining = 0;
                if (AmCharts.charts.length > 0) {
                    charts[rep.byFuel.fuelGraphData] = AmCharts.charts[AmCharts.charts.length - 1];
                    charts_remaining++;
                }

                if (charts_remaining == 0) {
                    checkAddress(rep, params, func);
                } else {
                    for (var x in charts) {
                        if (charts.hasOwnProperty(x)) {
                            var chart = charts[x];
                            chart["export"].capture({}, function () {
                                this.toJPG({}, function (data) {
                                    this.setup.chart.exportedImage = data;
                                    checkAddress(rep, params, func);
                                });
                            });
                        }
                    }
                }


                var table1_body = [];
                var content_detail = [];
                var record = rep.byFuel

                table1_body.push([{'text': $filter('translate')('vehicle'), style: 'header'},
                    {'text': record.vehicle_name, style: 'firstTD'}]);
                table1_body.push([{'text': $filter('translate')('distance'), style: 'header'},
                    {'text': record.distance.toFixed(2), style: 'firstTD'}]);
                table1_body.push([{'text': $filter('translate')('fuel.100km'), style: 'header'},
                    {'text': record.fuel_used_avg.toFixed(2), style: 'firstTD'}]);
                table1_body.push([{'text': $filter('translate')('fuel.100km.moving'), style: 'header'},
                    {'text': record.fuel_used_avg_moving.toFixed(2), style: 'firstTD'}]);
                table1_body.push([{'text': $filter('translate')('fuel.used'), style: 'header'},
                    {'text': record.fuel_used.toFixed(2), style: 'firstTD'}]);
                table1_body.push([{'text': $filter('translate')('fuel.used.dut'), style: 'header'},
                    {'text': record.fuel_used_dut.toFixed(2), style: 'firstTD'}]);
                table1_body.push([{'text': $filter('translate')('fuel.used.drt'), style: 'header'},
                    {'text': record.fuel_used_drt.toFixed(2), style: 'firstTD'}]);
                table1_body.push([{'text': $filter('translate')('fuel.used.moving'), style: 'header'},
                    {'text': record.fuel_used_moving.toFixed(2), style: 'firstTD'}]);
                table1_body.push([{'text': $filter('translate')('litr.start'), style: 'header'},
                    {'text': record.start_litr.toFixed(2), style: 'firstTD'}]);
                table1_body.push([{'text': $filter('translate')('litr.end'), style: 'header'},
                    {'text': record.end_litr.toFixed(2), style: 'firstTD'}]);
                table1_body.push([{'text': $filter('translate')('avgspeed'), style: 'header'},
                    {'text': record.speed_avg, style: 'firstTD'}]);
                table1_body.push([{'text': $filter('translate')('maxspeed'), style: 'header'},
                    {'text': record.speed_max, style: 'firstTD'}]);
                table1_body.push([{'text': $filter('translate')('stop'), style: 'header'},
                    {
                        'text': record.stop_num + '(' + $filter('secondsToDateTime')(record.stop_time) + ')',
                        style: 'firstTD'
                    }]);
                table1_body.push([{'text': $filter('translate')('parking'), style: 'header'},
                    {
                        'text': record.parking_num + '(' + $filter('secondsToDateTime')(record.parking_time) + ')',
                        style: 'firstTD'
                    }]);
                table1_body.push([{'text': $filter('translate')('time.going'), style: 'header'},
                    {'text': $filter('secondsToDateTime')(record.going_time), style: 'firstTD'}]);
                table1_body.push([{'text': $filter('translate')('ignition_working_time'), style: 'header'},
                    {'text': $filter('secondsToDateTime')(record.ignition_working_time), style: 'firstTD'}]);
                if (record.vehicleWorkingSensor) {
                    table1_body.push([{'text': record.vehicleWorkingSensor.name, style: 'header'},
                        {'text': $filter('secondsToDateTime')(record.workingHours), style: 'firstTD'}]);
                }
                table1_body.push([{'text': $filter('translate')('petrol.refueling.litr'), style: 'header'},
                    {'text': record.petrol_refueling, style: 'firstTD'}]);
                table1_body.push([{'text': $filter('translate')('fuel.refuel.dut'), style: 'header'},
                    {'text': record.refueling_num + '(' + record.refueling.toFixed(2) + ')', style: 'firstTD'}]);
                table1_body.push([{'text': $filter('translate')('fuel_drain'), style: 'header'},
                    {'text': record.fuel_drain_num + "(" + record.fuel_drain.toFixed(2) + ")", style: 'firstTD'}]);

                content_detail.push(
                    {text: $filter('translate')('tab.main'), alignment: 'center', bold: 'true', margin: [0, 0, 0, 10]},
                    {
                        style: 'tableExample',
                        color: '#444',
                        fontSize: 8,
                        margin: [200, 0, 0, 20],
                        table: {
                            widths: [190, 190],
                            headersRows: 2,
                            heights: 10,
                            body: table1_body
                        }
                    }
                );

                var table2_body = []

                table2_body.push([
                    {'text': $filter('translate')('address.from'), style: 'tableHeader'},
                    {'text': $filter('translate')('address.to'), style: 'tableHeader'},
                    {'text': $filter('translate')('distance'), style: 'tableHeader'},
                    {'text': $filter('translate')('timestart'), style: 'tableHeader'},
                    {'text': $filter('translate')('timeend'), style: 'tableHeader'},
                    {'text': $filter('translate')('duration'), style: 'tableHeader'},
                    {'text': $filter('translate')('avgspeed'), style: 'tableHeader'},
                    {'text': $filter('translate')('maxspeed'), style: 'tableHeader'},
                    {'text': $filter('translate')('fuel'), style: 'tableHeader'},
                    {'text': $filter('translate')('fuel.100km'), style: 'tableHeader'},
                    {'text': $filter('translate')('driver'), style: 'tableHeader'},
                ]);

                for (var i = 0; i < rep.byTrip.reportDetailList.length; i++) {
                    var reportDetail = rep.byTrip.reportDetailList[i];
                    if (!reportDetail.isParking && reportDetail.distance >= 1) {
                        params.scope.loadAddress(reportDetail.firstPoint)
                        params.scope.loadAddress(reportDetail.lastPoint)

                        table2_body.push([
                            {'text': reportDetail.firstPoint.address, style: 'td'},
                            {'text': reportDetail.lastPoint.address, style: 'td'},
                            {'text': $filter('number')(reportDetail.distance, 2), style: 'td'},
                            {
                                'text': $filter('date')(reportDetail.time_in_field * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                style: 'td'
                            },
                            {
                                'text': $filter('date')(reportDetail.time_out_field * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                style: 'td'
                            },
                            {
                                'text': $filter('secondsToDateTime')((reportDetail.time_out_field - reportDetail.time_in_field), 'HH:mm:ss'),
                                style: 'td'
                            },
                            {'text': reportDetail.speed_avg, style: 'td'},
                            {'text': reportDetail.speed_max, style: 'td'},
                            {'text': reportDetail.fuel_used.toFixed(2), style: 'td'},
                            {'text': reportDetail.fuel_used_avg.toFixed(2), style: 'td'},
                            {'text': reportDetail.driver ? reportDetail.driver.name : '', style: 'td'}
                        ]);
                    }
                }

                if (table2_body.length > 1) {
                    content_detail.push(
                        {text: $filter('translate')('trip'), alignment: 'center', bold: 'true', margin: [0, 0, 0, 10]},
                        {
                            margin: [0, 0, 0, 20],
                            table: {
                                widths: [90, 90, 50, 45, 50, 90, 60, 65, 50, 45, 70],
                                heights: 10,
                                body: table2_body,
                                dontBreakRows: true,
                            },
                        });
                }

                if (rep.byFuel.stopPointList.length > 0) {
                    var table3_body = []

                    table3_body.push([
                        {'text': $filter('translate')('date.start'), style: 'tableHeader'},
                        {'text': $filter('translate')('date.end'), style: 'tableHeader'},
                        {'text': $filter('translate')('duration'), style: 'tableHeader'},
                        {'text': $filter('translate')('address'), style: 'tableHeader'},
                    ]);

                    var stop_address = [];
                    for (var i = 0; i < rep.byFuel.stopPointList.length; i++) {
                        var stop = rep.byFuel.stopPointList[i];

                        stop_address.push([stop.stopPoint.address])
                    }

                    for (var i = 0; i < rep.byFuel.stopPointList.length; i++) {
                        var stop = rep.byFuel.stopPointList[i];
                        params.scope.loadAddress(stop.stopPoint)


                        table3_body.push([
                            {
                                'text': $filter('date')(stop.stopPoint.tm * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                style: 'td'
                            },
                            {
                                'text': $filter('date')(stop.startPoint.tm * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                style: 'td'
                            },
                            {
                                'text': $filter('secondsToDateTime')(stop.stop_tm),
                                style: 'td'
                            },
                            {'text': stop.stopPoint.address, style: 'td'},]);


                    }

                    content_detail.push(
                        {
                            text: $filter('translate')('stop'),
                            alignment: 'center',
                            bold: 'true',
                            margin: [0, 0, 0, 10]
                        },
                        {
                            margin: [0, 0, 0, 20],
                            table: {
                                widths: [190, 190, 190, 195],
                                heights: 10,
                                body: table3_body
                            },
                        });
                }


                if (rep.byFuel.parkingPointList.length > 0) {
                    var table4_body = []
                    table4_body.push([
                        {'text': $filter('translate')('date.start'), style: 'tableHeader'},
                        {'text': $filter('translate')('date.end'), style: 'tableHeader'},
                        {'text': $filter('translate')('duration'), style: 'tableHeader'},
                        {'text': $filter('translate')('address'), style: 'tableHeader'},
                    ]);


                    for (var i = 0; i < rep.byFuel.parkingPointList.length; i++) {
                        var parking = rep.byFuel.parkingPointList[i];

                        params.scope.loadAddress(parking.stopPoint)

                        table4_body.push([
                            {
                                'text': $filter('date')(parking.stopPoint.tm * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                style: 'td'
                            },
                            {
                                'text': $filter('date')(parking.startPoint.tm * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                style: 'td'
                            },
                            {
                                'text': $filter('secondsToDateTime')(parking.stop_tm),
                                style: 'td'
                            },
                            {'text': parking.stopPoint.address, style: 'td'},]);
                    }

                    content_detail.push(
                        {
                            text: $filter('translate')('parking'),
                            alignment: 'center',
                            bold: true,
                            margin: [0, 0, 0, 10]
                        },
                        {
                            margin: [0, 0, 0, 20],
                            table: {
                                widths: [190, 190, 190, 195],
                                heights: 10,
                                body: table4_body
                            },
                        });
                }

                if (rep.byFuel.fuelRefuelingByAzsList) {
                    var table5_body = []
                    table5_body.push([
                        {'text': $filter('translate')('date'), style: 'tableHeader'},
                        {'text': $filter('translate')('refueling'), style: 'tableHeader'},
                        {'text': $filter('translate')('driver'), style: 'tableHeader'},
                        {'text': $filter('translate')('petrol.azs'), style: 'tableHeader'}]);

                    for (var i = 0; i < rep.byFuel.fuelRefuelingByAzsList.length; i++) {
                        var petrol_fuel = rep.byFuel.fuelRefuelingByAzsList[i];
                        table5_body.push([
                            {
                                'text': $filter('date')(petrol_fuel.tm * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                style: 'td'
                            },
                            {'text': petrol_fuel.litr.toFixed(2), style: 'td'},
                            {'text': petrol_fuel.driver ? petrol_fuel.driver : '', style: 'td'},
                            {'text': petrol_fuel.petrolAzs.name, style: 'td'}]);
                    }

                    content_detail.push(
                        {
                            text: $filter('translate')('petrol.refueling'),
                            alignment: 'center',
                            bold: 'true',
                            margin: [0, 0, 0, 10]
                        },
                        {
                            text: $filter('translate')('petrol.refueling.litr'),
                            alignment: 'center',
                            bold: 'true',
                            margin: [0, 0, 0, 10]
                        },
                        {
                            margin: [0, 0, 0, 20],
                            table: {
                                widths: [190, 190, 190, 195],
                                heights: 10,
                                body: table5_body
                            },
                        });
                }


                if (rep.byFuel.fuelRefuelingList.length > 0) {
                    var table6_body = []
                    table6_body.push([
                        {'text': $filter('translate')('date'), style: 'tableHeader'},
                        {'text': $filter('translate')('start_litr'), style: 'tableHeader'},
                        {'text': $filter('translate')('end_litr'), style: 'tableHeader'},
                        {'text': $filter('translate')('refueling'), style: 'tableHeader'},
                        {'text': $filter('translate')('driver'), style: 'tableHeader'},
                    ]);

                    for (var i = 0; i < rep.byFuel.fuelRefuelingList.length; i++) {
                        var fuel = rep.byFuel.fuelRefuelingList[i];
                        table6_body.push([
                            {
                                'text': $filter('date')(fuel.start_tm * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                bold: 'true',
                                style: 'td'
                            },
                            {'text': fuel.start_litr.toFixed(2), style: 'td'},
                            {'text': fuel.end_litr.toFixed(2), style: 'td'},
                            {'text': (fuel.end_litr - fuel.start_litr).toFixed(2), style: 'td'},
                            {'text': fuel.driver ? fuel.driver.name : '', style: 'td'}]);
                    }

                    content_detail.push(
                        {
                            text: $filter('translate')('fuel.refuel.dut'),
                            alignment: 'center',
                            bold: 'true',
                            margin: [0, 0, 0, 10]
                        }, {
                            margin: [0, 0, 0, 20],
                            table: {
                                widths: [150, 150, 150, 150, 150],
                                heights: 10,
                                body: table6_body
                            },
                        });
                }


                if (rep.byFuel.fuelDrainList.length > 0) {
                    var table7_body = []
                    table7_body.push([
                        {'text': $filter('translate')('date'), style: 'tableHeader'},
                        {'text': $filter('translate')('start_litr'), style: 'tableHeader'},
                        {'text': $filter('translate')('end_litr'), style: 'tableHeader'},
                        {'text': $filter('translate')('fuel_drain'), style: 'tableHeader'},
                        {'text': $filter('translate')('driver'), style: 'tableHeader'},
                    ]);

                    for (var i = 0; i < rep.byFuel.fuelDrainList.length; i++) {
                        var fuelDrain = rep.byFuel.fuelDrainList[i];
                        table7_body.push([
                            {
                                'text': $filter('date')(fuelDrain.start_tm * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                style: 'td'
                            },
                            {'text': fuelDrain.start_litr.toFixed(2), style: 'td'},
                            {'text': fuelDrain.end_litr.toFixed(2), style: 'td'},
                            {'text': (fuelDrain.start_litr - fuelDrain.end_litr).toFixed(2), style: 'td'},
                            {'text': fuelDrain.driver ? fuelDrain.driver.name : '', style: 'td'}])
                    }

                    content_detail.push(
                        {
                            text: $filter('translate')('fuel.drain'),
                            alignment: 'center',
                            bold: 'true',
                            margin: [0, 0, 0, 10]
                        }, {
                            style: 'tableExample',
                            color: '#444',
                            fontSize: 8,
                            margin: [0, 0, 0, 20],
                            table: {
                                widths: [150, 150, 150, 150, 150,],
                                heights: 10,
                                body: table7_body
                            },
                        });
                }

                for (var x in charts) {
                    var chart = charts[x];

                    content_detail.push({
                        alignment: 'center',
                        "width": "800",
                        "image": chart.exportedImage,
                        //"fit": [350, 400]
                    });
                }

                var content = {
                    info: {
                        title: 'Agrocontrol',
                        author: 'Agrocontrol',
                        subject: '',
                        keywords: '',
                    },
                    footer: {
                        columns: [
                            {text: 'agrocontrol.net', alignment: 'right', margin: [0, 0, 40, 5]}
                        ]
                    },
                    pageMargins: [20, 25, 20, 30],
                    pageOrientation: 'landscape',
                    content: [
                        {
                            'text': $filter('translate')('reportType') + " " + $filter('lowercase')($filter('translate')('report.byFuel')) + ": " + record.vehicle_name,
                            alignment: 'center',
                            bold: 'true'
                        },
                        {
                            'text': $filter('date')(record.date_start * 1000, 'dd.MM.yyyy HH:mm:ss') + ' - ' + $filter('date')(record.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                            alignment: 'center',
                            bold: 'true',
                            margin: [0, 0, 0, 20]
                        },
                        content_detail
                    ],
                    styles: {
                        tableHeader: {
                            alignment: 'center',
                            fillColor: '#A9A9A9',
                            color: 'black',
                            fontSize: 9,
                            bold: 'true'
                        },
                        header: {
                            color: 'black',
                            fontSize: 9,
                            bold: 'true'
                        },
                        td: {
                            alignment: 'center',
                            fontSize: 8
                        },
                        firstTD: {
                            fontSize: 8,
                            color: 'black'
                        }
                    }
                };

                if (func) {
                    const pdfDocGenerator = pdfMake.createPdf(content);
                    pdfDocGenerator.getBase64((data) => {
                        func.call(this, data);
                    });
                    params.scope.pdfLoading = false;
                } else {
                    cratePdf(content);
                    params.scope.pdfLoading = false;
                }
            }

        }

//--------------------
        function agroWork(rep, func) {
            var table_body = [];
            var table1_body = [];
            var content_detail = [];

            rep.agroworkList.sort(function (a, b) {
                if ($filter('lowercase')(a.vehicle.name) < $filter('lowercase')(b.vehicle.name)) {
                    return -1;
                }
                if ($filter('lowercase')(a.vehicle.name) > $filter('lowercase')(b.vehicle.name)) {
                    return 1;
                }
                return 0;
            });

            table_body.push([
                {'text': $filter('translate')('vehicle'), alignment: 'center', style: 'tableHeader'},
                {'text': $filter('translate')('worktype'), alignment: 'center', style: 'tableHeader'},
                {'text': $filter('translate')('driver'), alignment: 'center', style: 'tableHeader'},
                {'text': $filter('translate')('trailer'), alignment: 'center', style: 'tableHeader'},
                {'text': $filter('translate')('trailer.width'), alignment: 'center', style: 'tableHeader'},
                {'text': $filter('translate')('field'), alignment: 'center', style: 'tableHeader'},
                {'text': $filter('translate')('square'), alignment: 'center', style: 'tableHeader'},
                {'text': $filter('translate')('culture'), alignment: 'center', style: 'tableHeader'},
                {'text': $filter('translate')('processed'), alignment: 'center', style: 'tableHeader'},
                {'text': $filter('translate')('processed.percent'), alignment: 'center', style: 'tableHeader'},
                {'text': $filter('translate')('distance'), alignment: 'center', style: 'tableHeader'}]);

            for (var i = 0; i < rep.agroworkList.length; i++) {
                var report = rep.agroworkList[i];
                table_body.push([
                    {'text': report.vehicle.name, bold: 'true', style: 'td'},
                    {
                        'text': $filter('translate')(report.workType ? report.workType.name : ''),
                        bold: 'true',
                        style: 'td'
                    },
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {'text': $filter('number')(report.square, 2), bold: 'true', style: 'td'},
                    {},
                    {'text': $filter('number')(report.distance, 2), bold: 'true', style: 'td'}])

                for (var q = 0; q < report.agroworkDetail.length; q++) {
                    var reportDetail = report.agroworkDetail[q]
                    if (reportDetail.geozone) {
                        var culture = [];
                        for (var l = 0; l < reportDetail.geozone.cultureList.length; l++) {
                            culture.push([{
                                'text': $filter('translate')(reportDetail.geozone.cultureList[l].name),
                                bold: 'true',
                                style: 'td'
                            }])
                        }
                        table_body.push([
                            {},
                            {
                                'text': $filter('translate')(reportDetail.trailer.worktype ? reportDetail.trailer.worktype.name : ''),
                                bold: 'true',
                                style: 'td'
                            },
                            {
                                'text': reportDetail.driver ? reportDetail.driver.name : '',
                                bold: 'true',
                                style: 'td'
                            },
                            {'text': reportDetail.trailer.name, bold: 'true', style: 'td'},
                            {
                                'text': $filter('number')(reportDetail.trailer.real_width, 1),
                                bold: 'true',
                                style: 'td'
                            },
                            {'text': reportDetail.geozone.name, bold: 'true', style: 'td'},
                            {
                                'text': $filter('number')(reportDetail.geozone.square_real, 2),
                                bold: 'true',
                                style: 'td'
                            },
                            culture,
                            {'text': $filter('number')(reportDetail.square, 2), bold: 'true', style: 'td'},
                            {
                                'text': reportDetail.square_percent_vehicle + "% (" + $filter('number')(reportDetail.square_percent_geozone, 2) + "%)",
                                bold: 'true',
                                style: 'td'
                            },
                            {'text': $filter('number')(reportDetail.distance, 2), bold: 'true', style: 'td'}]);

                    } else {
                        table_body.push([
                            {},
                            {
                                'text': $filter('translate')(reportDetail.workType ? reportDetail.workType.name : ''),
                                bold: 'true',
                                style: 'td'
                            },
                            {
                                'text': reportDetail.driver ? reportDetail.driver.name : '',
                                bold: 'true',
                                style: 'td'
                            },
                            {'text': reportDetail.trailer.name, bold: 'true', style: 'td'},
                            {
                                'text': $filter('number')(reportDetail.trailer.real_width, 1),
                                bold: 'true',
                                style: 'td'
                            },
                            {'text': '', bold: 'true', style: 'td'},
                            {'text': '', bold: 'true', style: 'td'},
                            {'text': '', bold: 'true', style: 'td'},
                            {'text': $filter('number')(reportDetail.square, 2), bold: 'true', style: 'td'},
                            {'text': '', bold: 'true', style: 'td'},
                            {'text': $filter('number')(reportDetail.distance, 2), bold: 'true', style: 'td'}]);
                    }
                }
            }


            table1_body.push([
                {'text': $filter('translate')('timein'), alignment: 'center', style: 'tableHeader'},
                {'text': $filter('translate')('timeout'), alignment: 'center', style: 'tableHeader'},
                {'text': $filter('translate')('workingtime'), alignment: 'center', style: 'tableHeader'},
                {'text': $filter('translate')('ignition_working_time'), alignment: 'center', style: 'tableHeader'},
                {'text': $filter('translate')('stop'), alignment: 'center', style: 'tableHeader'},
                {'text': $filter('translate')('parking'), alignment: 'center', style: 'tableHeader'},
                {'text': $filter('translate')('limitspeed'), alignment: 'center', style: 'tableHeader'},
                {'text': $filter('translate')('avgspeed'), alignment: 'center', style: 'tableHeader'},
                {'text': $filter('translate')('maxspeed'), alignment: 'center', style: 'tableHeader'},
                {'text': $filter('translate')('fuel'), alignment: 'center', style: 'tableHeader'},
                {'text': $filter('translate')('fuel.ha'), alignment: 'center', style: 'tableHeader'},
                {'text': $filter('translate')('fuel.km'), alignment: 'center', style: 'tableHeader'},
                {'text': $filter('translate')('location'), alignment: 'center', style: 'tableHeader'}]);

            for (var i = 0; i < rep.agroworkList.length; i++) {
                var report = rep.agroworkList[i];
                table1_body.push([
                    {},
                    {},
                    {'text': $filter('secondsToDateTime')(report.working_time), bold: 'true', style: 'td'},
                    {},
                    {
                        'text': report.stop_num + "(" + $filter('secondsToDateTime')(report.stop_time) + ")",
                        bold: 'true',
                        style: 'td'
                    },
                    {
                        'text': report.parking_num + "(" + $filter('secondsToDateTime')(report.parking_time) + ")",
                        bold: 'true',
                        style: 'td'
                    },
                    {},
                    {},
                    {},
                    {'text': $filter('number')(report.fuel_used, 2), bold: 'true', style: 'td'},
                    {'text': $filter('number')(report.fuel_used_ha, 2), bold: 'true', style: 'td'},
                    {'text': $filter('number')(report.fuel_used_km, 2), bold: 'true', style: 'td'},
                    {},])

                for (var q = 0; q < report.agroworkDetail.length; q++) {
                    var reportDetail = report.agroworkDetail[q]

                    table1_body.push([
                        {
                            'text': $filter('date')(reportDetail.time_in, 'dd.MM.yyyy HH:mm:ss'),
                            bold: 'true',
                            style: 'td'
                        },
                        {
                            'text': $filter('date')(reportDetail.time_out, 'dd.MM.yyyy HH:mm:ss'),
                            bold: 'true',
                            style: 'td'
                        },
                        {
                            'text': $filter('secondsToDateTime')(reportDetail.working_time),
                            bold: 'true',
                            style: 'td'
                        },
                        {
                            'text': $filter('secondsToDateTime')(reportDetail.ignition_working_time),
                            bold: 'true',
                            style: 'td'
                        },
                        {
                            'text': reportDetail.stop_num + "(" + $filter('secondsToDateTime')(reportDetail.stop_time) + ")",
                            bold: 'true',
                            style: 'td'
                        },
                        {
                            'text': reportDetail.parking_num + "(" + $filter('secondsToDateTime')(reportDetail.parking_time) + ")",
                            bold: 'true',
                            style: 'td'
                        },
                        {
                            'text': $filter('number')(reportDetail.trailer.worktype ? reportDetail.trailer.worktype.max_speed : '', 0),
                            bold: 'true',
                            style: 'td'
                        },
                        {'text': $filter('number')(reportDetail.speed_avg, 0), bold: 'true', style: 'td'},
                        {'text': $filter('number')(reportDetail.speed_max, 0), bold: 'true', style: 'td'},
                        {'text': $filter('number')(reportDetail.fuel_used, 2), bold: 'true', style: 'td'},
                        {'text': $filter('number')(reportDetail.fuel_used_ha, 2), bold: 'true', style: 'td'},
                        {'text': $filter('number')(reportDetail.fuel_used_km, 2), bold: 'true', style: 'td'},
                        {
                            'text': reportDetail.geozone ? reportDetail.geozone.geozone_group_name : '',
                            bold: 'true',
                            style: 'td'
                        },

                    ])
                }
            }
            if (rep.vehicle_name) {
                content_detail.push(
                    {
                        'text': $filter('translate')('reportType') + " " + $filter('lowercase')($filter('translate')('report.agrowork')),
                        alignment: 'center',
                        bold: 'true'
                    },
                    {
                        'text': rep.vehicle_name,
                        alignment: 'center',
                        bold: 'true'
                    },
                    {
                        'text': $filter('translate')('reportType') + " " + $filter('lowercase')($filter('translate')('report.agrowork')),
                        alignment: 'center',
                        bold: 'true',
                        margin: [0, 0, 0, 20]
                    },
                    {
                        color: '#444',
                        fontSize: 8,
                        margin: [0, 0, 0, 20],
                        table: {
                            widths: [105, 85, 55, 95, 40, 74, 40, 59, 55, 56, 35],
                            heights: 50,
                            headersRows: 2,
                            body: table_body,
                            dontBreakRows: true,
                        },
                    });
            } else {
                content_detail.push(
                    {
                        'text': $filter('translate')('reportType') + " " + $filter('lowercase')($filter('translate')('report.agrowork')),
                        alignment: 'center',
                        bold: 'true'
                    },
                    {
                        'text': $filter('date')(rep.date_start * 1000, 'dd.MM.yyyy HH:mm:ss') + ' - ' + $filter('date')(rep.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                        alignment: 'center',
                        bold: 'true',
                        margin: [0, 0, 0, 20]
                    },
                    {
                        color: '#444',
                        fontSize: 8,
                        margin: [0, 0, 0, 20],
                        vertical_align: 'center',
                        table: {
                            widths: [105, 85, 55, 95, 40, 74, 40, 59, 55, 56, 35],
                            heights: 50,
                            headersRows: 2,
                            body: table_body,
                            dontBreakRows: true,
                        },
                    });
            }

            if (rep.vehicle_name) {
                content_detail.push(
                    {
                        pageBreak: 'before',
                        'text': $filter('translate')('reportType') + " " + $filter('lowercase')($filter('translate')('report.agrowork')),
                        alignment: 'center',
                        bold: 'true'
                    },
                    {
                        'text': rep.vehicle_name,
                        alignment: 'center',
                        bold: 'true'
                    },
                    {
                        'text': $filter('date')(rep.date_start * 1000, 'dd.MM.yyyy HH:mm:ss') + ' - ' + $filter('date')(rep.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                        alignment: 'center',
                        bold: 'true',
                        margin: [0, 0, 0, 20]
                    },

                    {
                        color: '#444',

                        fontSize: 8,
                        margin: [0, 0, 0, 20],
                        table: {
                            widths: ["auto", "auto", "auto", "auto", "auto", "auto", "auto", "auto", "auto", "auto", "auto", "auto", "auto"],
                            heights: 50,
                            headersRows: 2,
                            body: table1_body,
                            dontBreakRows: true,
                        },
                    });
            } else {
                content_detail.push(
                    {
                        pageBreak: 'before',
                        'text': $filter('translate')('reportType') + " " + $filter('lowercase')($filter('translate')('report.agrowork')),
                        alignment: 'center',
                        bold: 'true'
                    },
                    {
                        'text': $filter('date')(rep.date_start * 1000, 'dd.MM.yyyy HH:mm:ss') + ' - ' + $filter('date')(rep.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                        alignment: 'center',
                        bold: 'true',
                        margin: [0, 0, 0, 20]
                    },

                    {
                        color: '#444',

                        fontSize: 8,
                        margin: [0, 0, 0, 20],
                        table: {
                            widths: ["auto", "auto", "auto", "auto", "auto", "auto", "auto", "auto", "auto", "auto", "auto", "auto", "auto"],
                            heights: 50,
                            headersRows: 2,
                            body: table1_body,
                            dontBreakRows: true,
                        },
                    })
            }


            var content = {
                info: {
                    title: 'Agrocontrol',
                    author: 'Agrocontrol',
                    subject: '',
                    keywords: '',
                },
                footer: {
                    columns: [
                        {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 20, 5]}
                    ]
                },
                pageMargins: [20, 30, 20, 40],
                pageOrientation: 'landscape',
                extend: 'pdfHtml5',
                pageSize: 'A4',
                content: [
                    content_detail
                ],

                styles: {
                    tableHeader: {
                        alignment: 'center',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 10,
                        bold: 'true'
                    },
                    td: {
                        alignment: 'center',
                        height: '100',
                    }
                }
            };

            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });


            } else {
                cratePdf(content);
            }
        }

//Шляховий лист
        function waybill(rep, func) {
            var table_body = []
            var content_detail = [];

            table_body.push([
                {'text': $filter('translate')('timein'), alignment: 'center', style: 'tableHeader'},
                {'text': $filter('translate')('timeout'), alignment: 'center', style: 'tableHeader'},
                {'text': $filter('translate')('field'), alignment: 'center', style: 'tableHeader'},
                {'text': $filter('translate')('square'), alignment: 'center', style: 'tableHeader'},
                {'text': $filter('translate')('driver'), alignment: 'center', style: 'tableHeader'},
                {'text': $filter('translate')('trailer'), alignment: 'center', style: 'tableHeader'},
                {'text': $filter('translate')('worktypes'), alignment: 'center', style: 'tableHeader'},
                {'text': $filter('translate')('distance'), alignment: 'center', style: 'tableHeader'},
                {'text': $filter('translate')('processed'), alignment: 'center', style: 'tableHeader'},
                {'text': $filter('translate')('fuel'), alignment: 'center', style: 'tableHeader'}]);

            for (var i = 0; i < rep.agrooperationList.length; i++) {
                var report = rep.agrooperationList[i];
                if (report.trailer) {
                    table_body.push([
                        {'text': $filter('date')(report.time_in, 'dd.MM.yyyy HH:mm:ss'), bold: 'true', style: 'td'},
                        {
                            'text': $filter('date')(report.time_out, 'dd.MM.yyyy HH:mm:ss'),
                            bold: 'true',
                            style: 'td'
                        },
                        {'text': report.geozone ? report.geozone.name : '', bold: 'true', style: 'td'},
                        {'text': report.geozone ? report.geozone.square_real : '', bold: 'true', style: 'td'},
                        {'text': report.driver ? report.driver.name : '', bold: 'true', style: 'td'},
                        {'text': report.trailer ? report.trailer.name : '', bold: 'true', style: 'td'},
                        {'text': $filter('translate')(report.trailer.worktype.name), bold: 'true', style: 'td'},
                        {'text': '', bold: 'true', style: 'td'},
                        {'text': $filter('number')(report.square, 2), bold: 'true', style: 'td'},
                        {'text': $filter('number')(report.litr, 2), bold: 'true', style: 'td'},])
                } else {
                    table_body.push([
                        {'text': $filter('date')(report.time_in, 'dd.MM.yyyy HH:mm:ss'), bold: 'true', style: 'td'},
                        {
                            'text': $filter('date')(report.time_out, 'dd.MM.yyyy HH:mm:ss'),
                            bold: 'true',
                            style: 'td'
                        },
                        {'text': report.geozone ? report.geozone.name : '', bold: 'true', style: 'td'},
                        {'text': report.geozone ? report.geozone.square_real : '', bold: 'true', style: 'td'},
                        {'text': report.driver ? report.driver.name : '', bold: 'true', style: 'td'},
                        {'text': report.trailer ? report.trailer.name : '', bold: 'true', style: 'td'},
                        {'text': $filter('translate')('crossing.name'), bold: 'true', style: 'td'},
                        {'text': $filter('number')(report.distance, 2), bold: 'true', style: 'td'},
                        {'text': $filter('number')(report.square, 2), bold: 'true', style: 'td'},
                        {'text': $filter('number')(report.litr, 2), bold: 'true', style: 'td'},])
                }
            }

            content_detail.push({
                color: '#444',
                margin: [0, 0, 0, 20],
                table: {
                    widths: [50, 50, 110, 50, 110, 100, 50, 50, 50, 50],
                    heights: 20,
                    headersRows: 2,
                    body: table_body,
                    alignment: 'center',
                    dontBreakRows: true,
                },
            })


            var content = {
                info: {
                    title: 'Agrocontrol',
                    author: 'Agrocontrol',
                    subject: '',
                    keywords: '',
                },
                footer: {
                    columns: [
                        {'text': 'agrocontrol.net', alignment: 'right', margin: [10, -15, 25, 10]}
                    ]
                },
                pageMargins: [35, 20, 25, 45],
                extend: 'pdfHtml5',
                pageSize: 'A4',
                pageOrientation: 'landscape',
                content: [
                    {
                        'text': $filter('translate')('reportType') + ": " + $filter('translate')('report.waybill'),
                        alignment: 'center',
                        bold: 'true'
                    },
                    {'text': rep.vehicle_name, alignment: 'center', bold: 'true'},
                    {'text': rep.driver_name, alignment: 'center', bold: 'true'},
                    {
                        'text': $filter('date')(rep.date_start * 1000, 'dd.MM.yyyy HH:mm:ss') + ' - ' + $filter('date')(rep.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                        alignment: 'center',
                        bold: 'true',
                        margin: [0, 0, 0, 15]
                    },
                    content_detail
                ],

                styles: {
                    tableHeader: {
                        alignment: 'center',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    td: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8,
                    }
                }
            };

            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });
            } else {
                cratePdf(content);
            }
        }


//Агро работы (общий)
        function agroworkGeneral(rep, params, func) {
            var table_body = [];
            var content_detail = [];
            var workTypeList = rep.repData;
            workTypeList.sort(function (a, b) {
                if ($filter('translate')(a.workType.name) < $filter('translate')(b.workType.name)) {
                    return -1;
                }
                if ($filter('translate')(a.workType.name) > $filter('translate')(b.workType.name)) {
                    return 1;
                }
                return 0;
            });

            for (var l = 0; l < rep.repData.length; l++) {
                var report_header = rep.repData[l];
                table_body.push([
                    {
                        'text': $filter('translate')(report_header.workType.name),
                        bold: 'true',
                        style: 'header',
                        colSpan: 5,
                        border: [false, false, false, false],
                        margin: [-5, 0, 0, 0],
                        fontSize: 10,
                    },
                    {},
                    {},
                    {},
                    {},
                    {
                        'text': $filter('translate')('processed.by.period') + ": " + $filter('number')(report_header.square, 2),
                        bold: 'true',
                        style: 'header',
                        alignment: 'right',
                        colSpan: 2,
                        fontSize: 10,
                        border: [false, false, false, false],

                    },
                    {},
                    {
                        'text': $filter('translate')('fuel') + ": " + $filter('number')(report_header.litr, 2),
                        bold: 'true',
                        style: 'header',
                        alignment: 'right',
                        colSpan: 2,
                        fontSize: 10,
                        border: [false, false, false, false]
                    },
                    {}]);


                if (rep.claster_name) {
                    cosole.log("test")
                } else {
                    var list = report_header.clusterList;
                    list.sort(function (a, b) {

                        if ($filter('translate')(a.main ? a.main.name : '') < $filter('translate')(b.main ? b.main.name : '')) {
                            return -1;
                        }
                        if ($filter('translate')(a.main ? a.main.name : '') > $filter('translate')(b.main ? b.main.name : '')) {
                            return 1;
                        }
                        return 0;
                    });
                }

                for (var k = 0; k < report_header.clusterList.length; k++) {
                    var cluster_list = report_header.clusterList[k]
                    if (rep.claster_name) {
                        table_body.push([
                            {
                                'text': $filter('translate')(rep.claster_name),
                                bold: 'true',
                                italics: 'true',
                                style: 'header',
                                colSpan: 5,
                                border: [false, false, false, false],
                                margin: [-5, 0, 0, 0],
                            },
                            {},
                            {},
                            {},
                            {},
                            {
                                'text': $filter('translate')('processed.by.period') + ": " + $filter('number')(cluster_list.square, 2),
                                bold: 'true',
                                italics: 'true',
                                style: 'header',
                                alignment: 'right',
                                colSpan: 2,
                                border: [false, false, false, false],

                            },
                            {},
                            {
                                'text': $filter('translate')('fuel') + ": " + $filter('number')(cluster_list.litr, 2),
                                bold: 'true',
                                italics: 'true',
                                style: 'header',
                                alignment: 'right',
                                colSpan: 2,
                                border: [false, false, false, false],
                            },
                            {}]);
                    } else {
                        table_body.push([
                            {
                                'text': $filter('translate')(cluster_list.main ? cluster_list.main.name : ''),
                                bold: 'true',
                                italics: 'true',
                                style: 'header',
                                colSpan: 5,
                                border: [false, false, false, false],
                                margin: [-5, 0, 0, 0],
                            },
                            {},
                            {},
                            {},
                            {},
                            {
                                'text': $filter('translate')('processed.by.period') + ": " + $filter('number')(cluster_list.square, 2),
                                bold: 'true',
                                italics: 'true',
                                style: 'header',
                                alignment: 'right',
                                colSpan: 2,
                                border: [false, false, false, false],
                            },
                            {},
                            {
                                'text': $filter('translate')('fuel') + ": " + $filter('number')(cluster_list.litr, 2),
                                bold: 'true',
                                italics: 'true',
                                style: 'header',
                                alignment: 'right',
                                colSpan: 2,
                                border: [false, false, false, false],
                            },
                            {}]);
                    }
                    table_body.push([
                        {'text': $filter('translate')('field'), alignment: 'center', style: 'tableHeader'},
                        {'text': $filter('translate')('square'), alignment: 'center', style: 'tableHeader'},
                        {'text': $filter('translate')('timein'), alignment: 'center', style: 'tableHeader'},
                        {'text': $filter('translate')('timeout'), alignment: 'center', style: 'tableHeader'},
                        {
                            'text': $filter('translate')('processed.by.period'),
                            alignment: 'center',
                            style: 'tableHeader'
                        },
                        {
                            'text': $filter('translate')('processed.plan.agrooperation'),
                            alignment: 'center',
                            style: 'tableHeader'
                        },
                        {
                            'text': $filter('translate')('processed.fact.agrooperation'),
                            alignment: 'center',
                            style: 'tableHeader'
                        },
                        {
                            'text': $filter('translate')('processed.percent'),
                            alignment: 'center',
                            style: 'tableHeader'
                        },
                        {'text': $filter('translate')('fuel'), alignment: 'center', style: 'tableHeader'}]);

                    for (var i = 0; i < cluster_list.detail.length; i++) {
                        var report = cluster_list.detail[i];

                        table_body.push([
                            {'text': report.agrooperation.geozone.name, bold: 'true', style: 'td'},
                            {'text': report.agrooperation.geozone.square_real, bold: 'true', style: 'td'},
                            {
                                'text': $filter('date')(report.time_in, 'dd.MM.yyyy HH:mm:ss'),
                                bold: 'true',
                                style: 'td'
                            },
                            {
                                'text': $filter('date')(report.time_out, 'dd.MM.yyyy HH:mm:ss'),
                                bold: 'true',
                                style: 'td'
                            },
                            {'text': $filter('number')(report.square, 2), bold: 'true', style: 'td'},
                            {
                                'text': $filter('number')(report.agrooperation.plan_square, 2),
                                bold: 'true',
                                style: 'td'
                            },
                            {
                                'text': $filter('number')(report.agrooperation.fact_square, 2),
                                bold: 'true',
                                style: 'td'
                            },
                            {
                                'text': $filter('number')((report.agrooperation.fact_square / report.agrooperation.plan_square) * 100, 2),
                                bold: 'true',
                                style: 'td'
                            },
                            {'text': $filter('number')(report.litr, 2), bold: 'true', style: 'td'}])
                    }

                    table_body.push([
                        {
                            'text': $filter('translate')('total') + ":   " + $filter('number')(params.scope.getTotal(cluster_list.detail, 'square'), 2),
                            bold: 'true',
                            fontSize: 9,
                            colSpan: 5,
                            color: 'black',
                            alignment: 'right',
                            border: [true, true, false, true],
                        },
                        {},
                        {},
                        {},
                        {},
                        {'text': "", colSpan: 3,},
                        {},
                        {},
                        {
                            'text': $filter('number')(params.scope.getTotal(cluster_list.detail, 'litr'), 2),
                            bold: 'true',
                            style: 'header',
                            alignment: 'center'
                        }]);

                    table_body.push([
                        {'text': "", colSpan: 9, border: [false, false, false, false]},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {'text': "", border: [false, false, false, false]}]);
                }

            }


            content_detail.push(
                {
                    color: '#444',
                    margin: [0, 0, 0, 20],
                    table: {
                        widths: ["auto", "auto", "auto", "auto", "auto", "auto", "auto", "auto", "auto"],
                        heights: 17,
                        body: table_body,
                        alignment: 'center',
                        dontBreakRows: true,
                    },
                })

            var content = {
                info: {
                    title: 'Agrocontrol',
                    author: 'Agrocontrol',
                    subject: '',
                    keywords: '',
                },
                footer: {
                    columns: [
                        {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 25, 5]}
                    ]
                },
                pageMargins: [25, 20, 25, 30],
                extend: 'pdfHtml5',
                pageSize: 'A4',
                pageOrientation: 'landscape',
                content: [
                    {
                        'text': $filter('translate')('reportType') + ": " + $filter('translate')('report.agrowork.general'),
                        alignment: 'center',
                        bold: 'true'
                    },
                    {'text': rep.cluster_name, alignment: 'center', bold: 'true'},
                    {
                        'text': $filter('date')(rep.date_start * 1000, 'dd.MM.yyyy HH:mm:ss') + ' - ' + $filter('date')(rep.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                        alignment: 'center',
                        bold: 'true',
                        margin: [0, 0, 0, 20]
                    },
                    content_detail
                ],

                styles: {
                    tableHeader: {
                        alignment: 'center',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    td: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8,
                    },
                    header: {
                        fontSize: 9,
                        bold: 'true',
                        color: 'black',
                    }
                }
            };

            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });
            } else {
                cratePdf(content);
            }
        }

//Текущее навесное оборудование
        function vehicleTrailer(rep, func) {
            var table_body = [];
            var content_detail = [];
            rep.sort(function (a, b) {
                if ($filter('lowercase')(a.vehicle.name) < $filter('lowercase')(b.vehicle.name)) {
                    return -1;
                }
                if ($filter('lowercase')(a.vehicle.name) > $filter('lowercase')(b.vehicle.name)) {
                    return 1;
                }
                return 0;
            });


            table_body.push([
                {'text': $filter('translate')('vehicle'), alignment: 'center', style: 'tableHeader'},
                {'text': $filter('translate')('trailer'), alignment: 'center', style: 'tableHeader'},
                {'text': $filter('translate')('trailer.width'), alignment: 'center', style: 'tableHeader'},
                {'text': $filter('translate')('trailer.is_auto'), alignment: 'center', style: 'tableHeader'},
            ]);
            var report = rep.vehicle;

            for (var i = 0; i < rep.length; i++) {
                var report = rep[i]

                if (report.is_manual == false) {
                    table_body.push([
                        {'text': $filter('translate')(report.vehicle.name), bold: 'true', style: 'td'},
                        {
                            'text': report.trailer ? $filter('translate')(report.trailer.name) : "",
                            bold: 'true',
                            style: 'td'
                        },
                        {
                            'text': report.trailer ? $filter('number')(report.trailer.real_width, 1) + " " + $filter('translate')('m_short') : '',
                            bold: 'true',
                            style: 'td'
                        },
                        {'text': $filter('translate')('yes'), bold: 'true', style: 'td'},
                    ])
                } else {
                    table_body.push([
                        {'text': $filter('translate')(report.vehicle.name), bold: 'true', style: 'td'},
                        {
                            'text': report.trailer ? $filter('translate')(report.trailer.name) : "",
                            bold: 'true',
                            style: 'td'
                        },
                        {
                            'text': report.trailer ? $filter('number')(report.trailer.real_width, 1) + " " + $filter('translate')('m_short') : '',
                            bold: 'true',
                            style: 'td'
                        },
                        {'text': '', bold: 'true', style: 'td'},
                    ])
                }
            }


            content_detail.push({
                color: '#444',
                margin: [0, 0, 20, 0],
                table: {
                    widths: [145, 145, 90, 108],
                    heights: 15,
                    headersRows: 2,
                    body: table_body,
                    alignment: 'center',
                    dontBreakRows: true,
                },
            })


            var content = {
                info: {
                    title: 'Agrocontrol',
                    author: 'Agrocontrol',
                    subject: '',
                    keywords: '',
                },
                footer: {
                    columns: [
                        {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 25, 5]}
                    ]
                },
                pageMargins: [35, 20, 35, 30],
                extend: 'pdfHtml5',
                pageSize: 'A4',
                content: [
                    {
                        'text': $filter('translate')('reportType') + " " + $filter('lowercase')($filter('translate')('report.vehicle.trailer')),
                        alignment: 'center',
                        bold: 'true',
                        margin: [0, 0, 0, 20]
                    },
                    content_detail
                ],

                styles: {
                    tableHeader: {
                        alignment: 'center',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    td: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8,
                    }
                }
            };

            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });
            } else {
                cratePdf(content);
            }
        }

//Агро работы
        function agroworkToday(rep, params, func) {
            var table_body = [];
            var content_detail = [];

            for (var l = 0; l < rep.repData.length; l++) {
                var report_header = rep.repData[l];

                table_body.push([
                    {
                        'text': $filter('translate')(report_header.workType.name),
                        border: [false, false, false, false],
                        margin: [-5, 0, 0, 0],
                        bold: 'true',
                        style: 'header',
                        fontSize: 10,
                        colSpan: 3
                    },
                    {},
                    {},
                    {
                        'text': $filter('translate')('square.today') + ": " + $filter('number')(report_header.square, 2),
                        border: [false, false, false, false],
                        bold: 'true',
                        style: 'header',
                        fontSize: 10,
                        colSpan: 2
                    },
                    {}]);

                for (var k = 0; k < report_header.clusterList.length; k++) {
                    var cluster_list = report_header.clusterList[k]
                    if (rep.claster_name) {
                        table_body.push([
                            {
                                'text': $filter('translate')(rep.claster_name),
                                border: [false, false, false, false],
                                margin: [5, 0, 0, 0],
                                bold: 'true',
                                style: 'header',
                                colSpan: 3,
                            },
                            {},
                            {},
                            {
                                'text': $filter('translate')('square.today') + ": " + $filter('number')(cluster_list.square, 2),
                                border: [false, false, false, false],
                                bold: 'true',
                                style: 'header',
                                alignment: 'right',
                                colSpan: 2
                            },
                            {}]);
                    } else {
                        table_body.push([
                            {
                                'text': $filter('translate')((cluster_list.main ? cluster_list.main.name : '')),
                                bold: 'true',
                                style: 'header',
                                colSpan: 3,
                                border: [false, false, false, false],
                                margin: [-5, 0, 0, 0],
                                italics: true
                            },
                            {},
                            {},
                            {
                                'text': $filter('translate')('square.today') + ": " + $filter('number')(cluster_list.square, 2),
                                bold: 'true',
                                style: 'header',
                                colSpan: 2,
                                border: [false, false, false, false],
                                italics: true
                            },
                            {}]);
                    }
                    table_body.push([
                        {'text': $filter('translate')('field'), alignment: 'center', style: 'tableHeader'},
                        {
                            'text': $filter('translate')('processed.plan.agrooperation'),
                            alignment: 'center',
                            style: 'tableHeader'
                        },
                        {
                            'text': $filter('translate')('processed.fact.agrooperation'),
                            alignment: 'center',
                            style: 'tableHeader'
                        },
                        {'text': $filter('translate')('square.today'), alignment: 'center', style: 'tableHeader'},
                        {
                            'text': $filter('translate')('processed.percent'),
                            alignment: 'center',
                            style: 'tableHeader'
                        },]);

                    for (var i = 0; i < cluster_list.detail.length; i++) {
                        var report = cluster_list.detail[i];

                        table_body.push([
                            {'text': report.agrooperation.geozone.name, bold: 'true', style: 'td'},
                            {
                                'text': $filter('number')(report.agrooperation.plan_square, 2),
                                bold: 'true',
                                style: 'td'
                            },
                            {
                                'text': $filter('number')(report.agrooperation.fact_square, 2),
                                bold: 'true',
                                style: 'td'
                            },
                            {
                                'text': $filter('number')(report.agrooperation.fact_square_today, 2),
                                bold: 'true',
                                style: 'td'
                            },
                            {
                                'text': $filter('number')((report.agrooperation.fact_square / report.agrooperation.plan_square) * 100, 2),
                                bold: 'true',
                                style: 'td'
                            }])
                    }

                    table_body.push([
                        {
                            'text': $filter('translate')('total') + ": ",
                            bold: 'true',
                            fontSize: 9,
                            colSpan: 3,
                            color: 'black',
                            alignment: "right",
                            border: [true, true, true, true]
                        },
                        {},
                        {},
                        {
                            'text': $filter('number')(params.scope.getTotal(cluster_list.detail, 'square'), 2),
                            bold: 'true',
                            color: 'black',
                            fontSize: 9,
                            alignment: 'center',
                            border: [false, false, false, true]
                        },
                        {'text': '', border: [false, true, true, true]}]);

                    table_body.push([
                        {'text': "", colSpan: 5, border: [false, false, false, false]},
                        {},
                        {},
                        {},
                        {}]);
                }

            }


            content_detail.push(
                {
                    color: '#444',
                    margin: [0, 0, 0, 0],
                    table: {
                        widths: [140, 80, 80, 80, 80],
                        heights: 20,
                        body: table_body,
                        alignment: 'center',
                        dontBreakRows: true,
                    },
                })

            var content = {
                info: {
                    title: 'Agrocontrol',
                    author: 'Agrocontrol',
                    subject: '',
                    keywords: '',
                },
                footer: {
                    columns: [
                        {'text': 'agrocontrol.net', alignment: 'right', margin: [10, -15, 25, 0]}
                    ]
                },
                pageMargins: [45, 20, 25, 20],
                extend: 'pdfHtml5',
                pageSize: 'A4',
                content: [
                    {
                        'text': $filter('translate')('report.agrowork.today'),
                        alignment: 'center',
                        bold: 'true'
                    },
                    {'text': rep.cluster_name, alignment: 'center', bold: 'true'},
                    {
                        'text': $filter('date')(rep.date, 'dd.MM.yyyy HH:mm:ss'),
                        alignment: 'center',
                        bold: 'true',
                        margin: [0, 0, 0, 0]
                    },
                    content_detail
                ],

                styles: {
                    tableHeader: {
                        alignment: 'center',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    td: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8,
                    },
                    header: {
                        fontSize: 9,
                        bold: 'true',
                        color: 'black',
                    }
                }
            };

            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });
            } else {
                cratePdf(content);
            }
        }

//Агро работы (сводный)
        function agroworkConsolidated(rep, params, func) {

            var table_body = [];
            var content_detail = [];
            for (var l = 0; l < rep.repData.length; l++) {
                rep.repData.sort(function (a, b) {
                    if ($filter('lowercase')($filter('translate')(a.workType.name)) < $filter('lowercase')($filter('translate')(b.workType.name))) {
                        return -1;
                    }
                    if ($filter('lowercase')($filter('translate')(a.workType.name)) > $filter('lowercase')($filter('translate')(b.workType.name))) {
                        return 1;
                    }
                    return 0;
                });
                var rep_data = rep.repData[l];

                table_body.push([
                    {
                        'text': $filter('translate')(rep_data.workType.name),
                        border: [false, false, false, false],
                        margin: [-5, 0, 0, 0],
                        bold: 'true',
                        style: 'header',
                        fontSize: 10,
                        colSpan: 5
                    },
                    {},
                    {},
                    {},
                    {},
                    {
                        'text': $filter('translate')('processed.by.period') + ": " + $filter('number')(rep_data.square, 2),
                        border: [false, false, false, false],
                        bold: 'true',
                        style: 'header',
                        fontSize: 10,
                        colSpan: 3,
                        alignment: 'right'
                    },
                    {},
                    {}]);


                for (var k = 0; k < rep_data.clusterList.length; k++) {
                    if (rep.claster_name) {
                        cosole.log("test")
                    } else {
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

                    }
                    var cluster_list = rep_data.clusterList[k]

                    if (rep.claster_name) {
                        table_body.push([
                            {
                                'text': $filter('translate')(rep.claster_name),
                                border: [false, false, false, false],
                                margin: [0, 0, 0, 0],
                                bold: 'true',
                                italics: 'true',
                                style: 'header',
                                colSpan: 5,
                            },
                            {},
                            {},
                            {},
                            {},
                            {
                                'text': $filter('translate')('processed.by.period') + ": " + $filter('number')(cluster_list.square, 2),
                                border: [false, false, false, false],
                                bold: 'true',
                                italics: 'true',
                                style: 'header',
                                alignment: 'right',
                                colSpan: 3,
                            },
                            {},
                            {}]);

                    } else {
                        table_body.push([
                            {
                                'text': $filter('translate')(cluster_list.main ? cluster_list.main.name : ''),
                                bold: 'true',
                                italics: 'true',
                                style: 'header',
                                colSpan: 5,
                                border: [false, false, false, false],
                                margin: [-5, 0, 0, 0],
                            },
                            {},
                            {},
                            {},
                            {},
                            {
                                'text': $filter('translate')('square.today') + ": " + $filter('number')(cluster_list.square, 2),
                                bold: 'true',
                                italics: 'true',
                                style: 'header',
                                colSpan: 3,
                                border: [false, false, false, false],
                                alignment: 'right'
                            },
                            {},
                            {}]);
                    }


                    table_body.push([
                        {'text': $filter('translate')('field'), alignment: 'center', style: 'tableHeader'},
                        {'text': $filter('translate')('square'), alignment: 'center', style: 'tableHeader'},
                        {'text': $filter('translate')('start.date'), alignment: 'center', style: 'tableHeader'},
                        {'text': $filter('translate')('end.date'), alignment: 'center', style: 'tableHeader'},
                        {
                            'text': $filter('translate')('processed.plan.agrooperation'),
                            alignment: 'center',
                            style: 'tableHeader'
                        },
                        {
                            'text': $filter('translate')('processed.fact.agrooperation'),
                            alignment: 'center',
                            style: 'tableHeader'
                        },
                        {
                            'text': $filter('translate')('processed.percent'),
                            alignment: 'center',
                            style: 'tableHeader'
                        },
                        {
                            'text': $filter('translate')('storage'),
                            alignment: 'center',
                            style: 'tableHeader',
                        }]);

                    for (var d = 0; d < cluster_list.detail.length; d++) {
                        var report_detail = cluster_list.detail[d]
                        var tmc_header = [];
                        var tmc_seed_table = [];
                        var tmc_plantProtector_table = [];
                        var tmc_fertilizer_table = [];
//TMC Table
                        //Добрива
                        tmc_header.push([
                            {
                                'text': $filter('translate')('materials') + ":",
                                border: [false, false, false, false],
                                bold: 'true',
                                style: 'header',
                                colSpan: 7,
                                alignment: 'left'
                            },
                            {},
                            {},
                            {},
                            {},
                            {},
                            {}])

                        tmc_fertilizer_table.push([
                            {
                                'text': $filter('translate')('fertilizer'),
                                style: 'header',
                                rowSpan: 2,
                                alignment: 'center'
                            },
                            {
                                'text': $filter('translate')('plan'),
                                style: 'header',
                                alignment: 'center',
                                colSpan: 2
                            },
                            {},
                            {
                                'text': $filter('translate')('fact'),
                                style: 'header',
                                alignment: 'center',
                                colSpan: 2
                            },
                            {},
                            {
                                'text': $filter('translate')('material.unit.price'),
                                style: 'header',
                                rowSpan: 2,
                                alignment: 'center'
                            },
                            {
                                'text': $filter('translate')('material.full.price'),
                                style: 'header',
                                rowSpan: 2,
                                alignment: 'center'
                            }
                        ])

                        tmc_fertilizer_table.push([
                            {'text': ""},
                            {'text': $filter('translate')('material.rate'), style: 'header', alignment: 'center'},
                            {'text': $filter('translate')('material.total'), style: 'header', alignment: 'center'},
                            {'text': $filter('translate')('material.rate'), style: 'header', alignment: 'center'},
                            {'text': $filter('translate')('material.total'), style: 'header', alignment: 'center'},
                            {'text': ""},
                            {'text': ""}
                        ])

                        //Насіння

                        tmc_seed_table.push([
                            {
                                'text': $filter('translate')('seed'),
                                style: 'header',
                                rowSpan: 2,
                                alignment: 'center'
                            },
                            {
                                'text': $filter('translate')('plan'),
                                style: 'header',
                                alignment: 'center',
                                colSpan: 2
                            },
                            {},
                            {
                                'text': $filter('translate')('fact'),
                                style: 'header',
                                alignment: 'center',
                                colSpan: 2
                            },
                            {},
                            {
                                'text': $filter('translate')('material.unit.price'),
                                style: 'header',
                                rowSpan: 2,
                                alignment: 'center'
                            },
                            {
                                'text': $filter('translate')('material.full.price'),
                                style: 'header',
                                rowSpan: 2,
                                alignment: 'center'
                            },
                        ])

                        tmc_seed_table.push([
                            {'text': ""},
                            {
                                'text': $filter('translate')('material.seed.rate'),
                                style: 'header',
                                alignment: 'center'
                            },
                            {'text': $filter('translate')('material.total'), style: 'header', alignment: 'center'},
                            {
                                'text': $filter('translate')('material.seed.rate'),
                                style: 'header',
                                alignment: 'center'
                            },
                            {'text': $filter('translate')('material.total'), style: 'header', alignment: 'center'},
                            {'text': ""},
                            {'text': ""}
                        ])

                        //СЗР
                        tmc_plantProtector_table.push([
                            {
                                'text': $filter('translate')('plant_protector'),
                                style: 'header',
                                rowSpan: 2,
                                alignment: 'center'
                            },
                            {
                                'text': $filter('translate')('plan'),
                                style: 'header',
                                alignment: 'center',
                                colSpan: 2
                            },
                            {},
                            {
                                'text': $filter('translate')('fact'),
                                style: 'header',
                                alignment: 'center',
                                colSpan: 2
                            },
                            {},
                            {
                                'text': $filter('translate')('material.unit.price'),
                                style: 'header',
                                rowSpan: 2,
                                alignment: 'center'
                            },
                            {
                                'text': $filter('translate')('material.full.price'),
                                style: 'header',
                                rowSpan: 2,
                                alignment: 'center'
                            }
                        ])

                        tmc_plantProtector_table.push([
                            {'text': ""},
                            {'text': $filter('translate')('material.rate'), style: 'header', alignment: 'center'},
                            {'text': $filter('translate')('material.total'), style: 'header', alignment: 'center'},
                            {'text': $filter('translate')('material.rate'), style: 'header', alignment: 'center'},
                            {'text': $filter('translate')('material.total'), style: 'header', alignment: 'center'},
                            {'text': ""},
                            {'text': ""}
                        ])
                        //------------

                        //Добрива
                        for (var f = 0; f < report_detail.agrooperation.materialFertilizerTotalList.length; f++) {
                            var fertilizer = report_detail.agrooperation.materialFertilizerTotalList[f];

                            var fertilizerRatePlan = {'text': '', style: 'td'}
                            var fertilizerRatePlan_square = {'text': '', style: 'td'}
                            var fertilizerRateFact = {'text': ''}
                            var fertilizerRateFact_square = {'text': '', style: 'td'}

                            if (fertilizer.fertilizerRatePlan !== 0) {
                                fertilizerRatePlan = {
                                    'text': $filter('number')(fertilizer.fertilizerRatePlan, 3) + " " + params.scope.getFertilizerUnit(fertilizer.fertilizerUnit).name,
                                    style: 'td'
                                }
                            }

                            if (fertilizer.fertilizerRatePlanTotal !== 0) {
                                fertilizerRatePlan_square = {
                                    'text': $filter('number')(fertilizer.fertilizerRatePlanTotal, 3) + " " + params.scope.getFertilizerUnit(fertilizer.fertilizerUnit).name,
                                    style: 'td'
                                }
                            }


                            if (fertilizer.fertilizerRateFact !== 0) {
                                fertilizerRateFact = {
                                    'text': $filter('number')(fertilizer.fertilizerRateFact, 3) + " " + params.scope.getFertilizerUnit(fertilizer.fertilizerUnit).name,
                                    style: 'td'
                                }
                            }

                            if (fertilizer.fertilizerRateFactTotal !== 0) {
                                fertilizerRateFact_square = {
                                    'text': $filter('number')(fertilizer.fertilizerRateFactTotal, 3) + " " + params.scope.getFertilizerUnit(fertilizer.fertilizerUnit).name,
                                    style: 'td'
                                }
                            }

                            tmc_fertilizer_table.push([
                                {'text': $filter('translate')(fertilizer.fertilizer.name), style: 'td'},
                                fertilizerRatePlan,
                                fertilizerRatePlan_square,
                                fertilizerRateFact,
                                fertilizerRateFact_square,
                                {
                                    'text': $filter('number')(fertilizer.fertilizerUnitPrice, 2),
                                    style: 'td',
                                },
                                {
                                    'text': $filter('number')(params.scope.getFertilizerPrice(fertilizer, report_detail.agrooperation.fact_square), 2),
                                    style: 'td',
                                }
                            ])

                        }

                        //Насіння

                        for (let f = 0; f < report_detail.agrooperation.materialSeedTotalList.length; f++) {
                            var seed = report_detail.agrooperation.materialSeedTotalList[f]

                            var seedRatePlan = {'text': '', style: 'td'}
                            var seedRatePlan_square = {'text': '', style: 'td'}
                            var seedRateFact = {'text': ''}
                            var seedRateFact_square = {'text': '', style: 'td'}
                            if (seed.seedRatePlan !== 0) {
                                seedRatePlan = {
                                    'text': $filter('number')(seed.seedRatePlan, 3) + " " + params.scope.getSeedUnit(seed.seedUnit).name,
                                    style: 'td'
                                }
                            }

                            if (seed.seedRatePlanTotal !== 0) {
                                seedRatePlan_square = {
                                    'text': $filter('number')(seed.seedRatePlanTotal, 3) + " " + params.scope.getSeedUnit(seed.seedUnit).name,
                                    style: 'td'
                                }
                            }


                            if (seed.seedRateFact !== 0) {
                                seedRateFact = {
                                    'text': $filter('number')(seed.seedRateFact, 3) + " " + params.scope.getSeedUnit(seed.seedUnit).name,
                                    style: 'td'
                                }
                            }

                            if (seed.seedRateFactTotal !== 0) {
                                seedRateFact_square = {
                                    'text': $filter('number')(seed.seedRateFactTotal, 3) + " " + params.scope.getSeedUnit(seed.seedUnit).name,
                                    style: 'td'
                                }
                            }

                            tmc_seed_table.push([
                                {'text': $filter('translate')(seed.seed.name), style: 'td'},
                                seedRatePlan,
                                seedRatePlan_square,
                                seedRateFact,
                                seedRateFact_square,
                                {
                                    'text': $filter('number')(seed.seedUnitPrice, 2),
                                    style: 'td',
                                },
                                {
                                    'text': $filter('number')(params.scope.getSeedPrice(seed, report_detail.agrooperation.fact_square), 2),
                                    style: 'td',
                                }
                            ])
                        }
                        //СЗР
                        for (var f = 0; f < report_detail.agrooperation.materialPlantProtectorTotalList.length; f++) {
                            var plantProtector = report_detail.agrooperation.materialPlantProtectorTotalList[f]

                            var plantProtectorRatePlan = {'text': '', style: 'td'}
                            var plantProtectorRatePlan_square = {'text': '', style: 'td'}
                            var plantProtectorRateFact = {'text': ''}
                            var plantProtectorRateFact_square = {'text': '', style: 'td'}
                            if (plantProtector.plantProtectorRatePlan !== 0) {
                                plantProtectorRatePlan = {
                                    'text': $filter('number')(plantProtector.plantProtectorRatePlan, 3) + " " + params.scope.getPlantProtectorUnit(plantProtector.plantProtectorUnit).name,
                                    style: 'td'
                                }
                            }

                            if (plantProtector.plantProtectorRatePlanTotal !== 0) {
                                plantProtectorRatePlan_square = {
                                    'text': $filter('number')(plantProtector.plantProtectorRatePlanTotal, 3) + " " + params.scope.getPlantProtectorUnit(plantProtector.plantProtectorUnit).name,
                                    style: 'td'
                                }
                            }


                            if (plantProtector.plantProtectorRateFact !== 0) {
                                plantProtectorRateFact = {
                                    'text': $filter('number')(plantProtector.plantProtectorRateFact, 3) + " " + params.scope.getPlantProtectorUnit(plantProtector.plantProtectorUnit).name,
                                    style: 'td'
                                }
                            }

                            if (plantProtector.plantProtectorRateFactTotal !== 0) {
                                plantProtectorRateFact_square = {
                                    'text': $filter('number')(plantProtector.plantProtectorRateFactTotal, 3) + " " + params.scope.getPlantProtectorUnit(plantProtector.plantProtectorUnit).name,
                                    style: 'td'
                                }
                            }

                            tmc_plantProtector_table.push([
                                {'text': $filter('translate')(plantProtector.plantProtector.name), style: 'td'},
                                plantProtectorRatePlan,
                                plantProtectorRatePlan_square,
                                plantProtectorRateFact,
                                plantProtectorRateFact_square,
                                {
                                    'text': $filter('number')(plantProtector.plantProtectorUnitPrice, 2),
                                    style: 'td',
                                },
                                {
                                    'text': $filter('number')(params.scope.getPlantProtectorPrice(plantProtector, report_detail.agrooperation.fact_square), 2),
                                    style: 'td',
                                }
                            ])
                        }


                        tmc_fertilizer_table.push([
                            {'text': "", colSpan: 7, border: [false, false, false, false]},
                            {},
                            {},
                            {},
                            {},
                            {},
                            {'text': "", border: [false, false, false, false]}])

                        tmc_seed_table.push([
                            {'text': "", colSpan: 7, border: [false, false, false, false]},
                            {},
                            {},
                            {},
                            {},
                            {},
                            {'text': "", border: [false, false, false, false]}])

                        tmc_plantProtector_table.push([
                            {'text': "", colSpan: 7, border: [false, false, false, false]},
                            {},
                            {},
                            {},
                            {},
                            {},
                            {'text': "", border: [false, false, false, false]}])


                        var fertilizer_length = report_detail.agrooperation.materialFertilizerList.length
                        var plantProtector_length = report_detail.agrooperation.materialPlantProtectorList.length
                        var seed_length = report_detail.agrooperation.materialSeedList.length
                        //основна таблиця
                        if (fertilizer_length <= 0 && plantProtector_length <= 0 && seed_length <= 0) {
                            table_body.push([
                                {'text': report_detail.geozone.name, bold: 'true', style: 'td'},
                                {
                                    'text': $filter('number')(report_detail.geozone.square_real, 2),
                                    bold: 'true',
                                    style: 'td'
                                },
                                {
                                    'text': $filter('date')(report_detail.agrooperation.fact_date_start, 'dd.MM.yyyy HH:mm:ss'),
                                    bold: 'true',
                                    style: 'td'
                                },
                                {
                                    'text': $filter('date')(report_detail.agrooperation.fact_date_end, 'dd.MM.yyyy HH:mm:ss'),
                                    bold: 'true',
                                    style: 'td'
                                },
                                {
                                    'text': $filter('number')(report_detail.agrooperation.plan_square, 2),
                                    bold: 'true',
                                    style: 'td'
                                },
                                {
                                    'text': $filter('number')(report_detail.agrooperation.fact_square, 2),
                                    bold: 'true',
                                    style: 'td'
                                },
                                {
                                    'text': $filter('number')(report_detail.agrooperation.fact_square / report_detail.agrooperation.plan_square * 100, 2),
                                    bold: 'true',
                                    style: 'td',
                                },
                                {},

                            ])

                        } else {
                            if (fertilizer_length == 0) {
                                tmc_fertilizer_table = [];
                            }
                            if (plantProtector_length == 0) {
                                tmc_plantProtector_table = [];
                            }
                            if (seed_length == 0) {
                                tmc_seed_table = []
                            }

                            table_body.push([
                                {'text': report_detail.geozone.name, bold: 'true', style: 'td'},
                                {
                                    'text': $filter('number')(report_detail.geozone.square_real, 2),
                                    bold: 'true',
                                    style: 'td'
                                },
                                {
                                    'text': $filter('date')(report_detail.agrooperation.fact_date_start, 'dd.MM.yyyy HH:mm:ss'),
                                    bold: 'true',
                                    style: 'td'
                                },
                                {
                                    'text': $filter('date')(report_detail.agrooperation.fact_date_end, 'dd.MM.yyyy HH:mm:ss'),
                                    bold: 'true',
                                    style: 'td'
                                },
                                {
                                    'text': $filter('number')(report_detail.agrooperation.plan_square, 2),
                                    bold: 'true',
                                    style: 'td'
                                },
                                {
                                    'text': $filter('number')(report_detail.agrooperation.fact_square, 2),
                                    bold: 'true',
                                    style: 'td'
                                },
                                {
                                    'text': $filter('number')(report_detail.agrooperation.fact_square / report_detail.agrooperation.plan_square * 100, 2),
                                    bold: 'true',
                                    style: 'td'
                                },
                                {
                                    table: {
                                        widths: [80, 50, 50, 50, 50, 45, 45],
                                        body:
                                            tmc_header.concat(tmc_seed_table).concat(tmc_fertilizer_table).concat(tmc_plantProtector_table)
                                    },

                                }])
                        }
                    }

                    table_body.push([
                        {
                            'text': $filter('translate')('total') + ":",
                            colSpan: 5,
                            border: [true, false, false, true],
                            alignment: 'right',
                            style: 'header'
                        },
                        {},
                        {},
                        {},
                        {},
                        {
                            'text': $filter('number')(params.scope.getTotal(cluster_list.detail, 'square'), 3),
                            border: [false, false, false, true],
                            style: 'header',
                            alignment: 'right'
                        },
                        {},
                        {
                            'text': $filter('number')(params.scope.getTotalTmc(cluster_list.detail), 3),
                            border: [false, false, true, true],
                            style: 'header',
                            alignment: 'center'
                        }]);

                    table_body.push([
                        {'text': "", colSpan: 8, border: [false, false, false, false]},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {'text': "", border: [false, false, false, false]}]);
                }
            }


            content_detail.push(
                {
                    color: '#444',
                    margin: [0, 0, 0, 20],
                    table: {
                        widths: [55, 35, 40, 40, 45, 45, 55, '*'],
                        heights: 20,
                        body: table_body,
                        alignment: 'center',
                        dontBreakRows: true,
                    },
                })


            var content = {
                info: {
                    title: 'Agrocontrol',
                    author: 'Agrocontrol',
                    subject: '',
                    keywords: '',
                },
                footer: {
                    columns: [
                        {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 25, 5]}
                    ]
                },
                pageMargins: [10, 25, 10, 30],
                extend: 'pdfHtml5',
                pageSize: 'A4',
                pageOrientation: 'landscape',
                content: [
                    {
                        'text': $filter('translate')('reportType') + " " + $filter('lowercase')($filter('translate')('report.agrowork.consolidated')),
                        alignment: 'center',
                        bold: 'true'
                    },
                    {'text': rep.cluster_name, alignment: 'center', bold: 'true'},
                    {
                        'text': $filter('date')(rep.date_start * 1000, 'dd.MM.yyyy HH:mm:ss') + " - " + $filter('date')(rep.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                        alignment: 'center',
                        bold: 'true',
                        margin: [0, 0, 0, 20]
                    },
                    content_detail
                ],

                styles: {
                    tableHeader: {
                        alignment: 'center',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    td: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8,
                    },
                    header: {
                        fontSize: 9,
                        bold: 'true',
                        color: 'black',
                    },
                    header1: {
                        fontSize: 9,
                        bold: 'true',
                        color: 'black',
                        alignment: 'center'
                    }
                }
            };

            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });
            } else {
                cratePdf(content);
            }
        }

//-------------
//Учет ТМЦ
        function agrooperationMaterials(rep, params, func) {
            var table_seed1 = [];
            var table_fertilizers = [];
            var table_plant_protectors = [];
            var content_detail = [];

            //Насіння
            rep.repData.materialSeedList.sort(function (a, b) {
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

            if (rep.repData.materialSeedList.length > 0) {
                table_seed1.push([
                    {
                        'text': $filter('translate')('seed1'),
                        border: [false, false, false, false],
                        bold: 'true',
                        style: 'header',
                        alignment: 'center',
                        fontSize: 10,
                        colSpan: 4
                    },
                    {},
                    {},
                    {}]);

                table_seed1.push([
                    {'text': $filter('translate')('seed'), style: 'header'},
                    {'text': $filter('translate')('fact'), style: 'header'},
                    {'text': $filter('translate')('square'), style: 'header'},
                    {'text': $filter('translate')('price'), style: 'header'}]);


                for (var r = 0; r < rep.repData.materialSeedList.length; r++) {
                    var item_seed = rep.repData.materialSeedList[r];
                    if (item_seed.seedUnit === 'Quantity') {
                        var unit = $filter('translate')('material.unit.qnt_s')
                    } else if (item_seed.seedUnit === 'Kg') {
                        var unit = $filter('translate')('material.unit.kg_s')
                    } else if (item_seed.seedUnit === 'Litr') {
                        var unit = $filter('translate')('material.unit.litr1_s')
                    }

                    table_seed1.push([
                        {'text': $filter('translate')(item_seed.seed.name), style: 'td', alignment: 'left'},
                        {
                            'text': $filter('number')(item_seed.seedRateFact, 3) + " " + unit,
                            style: 'td'
                        },
                        {'text': $filter('number')(item_seed.square, 2), style: 'td'},
                        {'text': $filter('number')(item_seed.seedPrice, 2), style: 'td'},]);
                }


                table_seed1.push([
                    {'text': $filter('translate')('total') + ": ", colSpan: 2, style: 'header', alignment: 'left'},
                    {},
                    {
                        'text': $filter('number')(params.scope.getTotal(rep.repData.materialSeedList, 'square'), 2),
                        style: 'header'
                    },
                    {
                        'text': $filter('number')(params.scope.getTotal(rep.repData.materialSeedList, 'seedPrice'), 2),
                        style: 'header'
                    }]);

                table_seed1.push([
                    {'text': "", colSpan: 4, border: [false, false, false, false]},
                    {},
                    {},
                    {'text': "",}]);


                content_detail.push(
                    {
                        color: '#444',
                        margin: [17, 0, 0, 10],
                        table: {
                            widths: [140, 110, 110, 110],
                            heights: 20,
                            body: table_seed1,
                            alignment: 'center',
                            dontBreakRows: true,
                        },
                    })
            }
            //---------------------Насіння
            //Добрива
            rep.repData.materialFertilizerList.sort(function (a, b) {
                if (a.fertilizer.name.substr(0, 1).toUpperCase() == 'І' || a.fertilizer.name.substr(0, 1).toUpperCase() == 'Є' || a.fertilizer.name.substr(0, 1).toUpperCase() == 'Ї') {
                    return 1;
                }

                if (b.fertilizer.name.substr(0, 1).toUpperCase() == 'І' || b.fertilizer.name.substr(0, 1).toUpperCase() == 'Є' || b.fertilizer.name.substr(0, 1).toUpperCase() == 'Ї') {
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
            if (rep.repData.materialFertilizerList.length > 0) {
                table_fertilizers.push([
                    {
                        'text': $filter('translate')('fertilizers'),
                        border: [false, false, false, false],
                        bold: 'true',
                        style: 'header',
                        alignment: 'center',
                        fontSize: 10,
                        colSpan: 4
                    },
                    {},
                    {},
                    {}]);

                table_fertilizers.push([
                    {'text': $filter('translate')('name'), style: 'header'},
                    {'text': $filter('translate')('fact'), style: 'header'},
                    {'text': $filter('translate')('square'), style: 'header'},
                    {'text': $filter('translate')('price'), style: 'header'}]);

                for (var r = 0; r < rep.repData.materialFertilizerList.length; r++) {
                    var item_fertilizers = rep.repData.materialFertilizerList[r];

                    if (item_fertilizers.fertilizerUnit == 'Quantity') {
                        var unit = $filter('translate')('material.unit.qnt_s')
                    } else if (item_fertilizers.fertilizerUnit == 'Kg') {
                        var unit = $filter('translate')('material.unit.kg_s')
                    } else if (item_fertilizers.fertilizerUnit == 'Litr') {
                        var unit = $filter('translate')('material.unit.litr1_s')
                    }

                    table_fertilizers.push([
                        {
                            'text': $filter('translate')(item_fertilizers.fertilizer.name),
                            style: 'td',
                            alignment: 'left'
                        },
                        {
                            'text': $filter('number')(item_fertilizers.fertilizerRateFact, 3) + " " + unit,
                            style: 'td'
                        },
                        {'text': $filter('number')(item_fertilizers.square, 2), style: 'td'},
                        {'text': $filter('number')(item_fertilizers.fertilizerPrice, 2), style: 'td'},]);
                }

                table_fertilizers.push([
                    {'text': $filter('translate')('total') + ": ", style: 'header', colSpan: 2, alignment: 'left'},
                    {},
                    {
                        'text': $filter('number')(params.scope.getTotal(rep.repData.materialFertilizerList, 'square'), 2),
                        style: 'header'
                    },
                    {
                        'text': $filter('number')(params.scope.getTotal(rep.repData.materialFertilizerList, 'fertilizerPrice'), 2),
                        style: 'header'
                    }]);

                table_fertilizers.push([
                    {'text': "", colSpan: 4, border: [false, false, false, false]},
                    {},
                    {},
                    {}]);

                content_detail.push(
                    {
                        color: '#444',
                        margin: [17, 0, 0, 10],
                        table: {
                            widths: [140, 110, 110, 110],
                            heights: 20,
                            body: table_fertilizers,
                            alignment: 'center',
                            dontBreakRows: true,
                        },
                    })
            }
//---------------------Добрива
//СЗР
            rep.repData.materialPlantProtectorList.sort(function (a, b) {
                if (a.plantProtector.name.substr(0, 1).toUpperCase() == 'Є' || a.plantProtector.name.substr(0, 1).toUpperCase() == 'І' || a.plantProtector.name.substr(0, 1).toUpperCase() == 'Ї') {
                    return 1;
                }

                if (b.plantProtector.name.substr(0, 1).toUpperCase() == 'Є' || b.plantProtector.name.substr(0, 1).toUpperCase() == 'І' || b.plantProtector.name.substr(0, 1).toUpperCase() == 'Ї') {
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

            if (rep.repData.materialPlantProtectorList.length > 0) {
                table_plant_protectors.push([
                    {
                        'text': $filter('translate')('plant_protectors'),
                        border: [false, false, false, false],
                        bold: 'true',
                        style: 'header',
                        alignment: 'center',
                        fontSize: 10,
                        colSpan: 4
                    },
                    {},
                    {},
                    {}]);

                table_plant_protectors.push([
                    {'text': $filter('translate')('name'), style: 'header'},
                    {'text': $filter('translate')('fact'), style: 'header'},
                    {'text': $filter('translate')('square'), style: 'header'},
                    {'text': $filter('translate')('price'), style: 'header'}]);


                for (var r = 0; r < rep.repData.materialPlantProtectorList.length; r++) {
                    var item_plant_protector = rep.repData.materialPlantProtectorList[r];

                    if (item_plant_protector.plantProtectorUnit == 'Quantity') {
                        var unit = $filter('translate')('material.unit.qnt_s')
                    } else if (item_plant_protector.plantProtectorUnit == 'Kg') {
                        var unit = $filter('translate')('material.unit.kg_s')
                    } else if (item_plant_protector.plantProtectorUnit == 'Litr') {
                        var unit = $filter('translate')('material.unit.litr1_s')
                    }

                    table_plant_protectors.push([
                        {
                            'text': $filter('translate')(item_plant_protector.plantProtector.name),
                            style: 'td',
                            alignment: 'left'
                        },
                        {
                            'text': $filter('number')(item_plant_protector.plantProtectorRateFact, 3) + " " + unit,
                            style: 'td'
                        },
                        {'text': $filter('number')(item_plant_protector.square, 2), style: 'td'},
                        {
                            'text': $filter('number')(item_plant_protector.plantProtectorPrice, 2),
                            style: 'td'
                        },]);

                }


                table_plant_protectors.push([
                    {'text': $filter('translate')('total') + ": ", style: 'header', colSpan: 2, alignment: 'left'},
                    {},
                    {
                        'text': $filter('number')(params.scope.getTotal(rep.repData.materialPlantProtectorList, 'square'), 2),
                        style: 'header'
                    },
                    {
                        'text': $filter('number')(params.scope.getTotal(rep.repData.materialPlantProtectorList, 'plantProtectorPrice'), 2),
                        style: 'header'
                    }]);

                table_plant_protectors.push([
                    {'text': "", colSpan: 4, border: [false, false, false, false]},
                    {},
                    {},
                    {'text': "",}]);

                content_detail.push(
                    {
                        color: '#444',
                        margin: [17, 0, 0, 20],
                        table: {
                            widths: [140, 110, 110, 110],
                            heights: 20,
                            body: table_plant_protectors,
                            alignment: 'center',
                            dontBreakRows: true,
                        },
                    })
            }
            var content = {
                info: {
                    title: 'Agrocontrol',
                    author: 'Agrocontrol',
                    subject: '',
                    keywords: '',
                },
                footer: {
                    columns: [
                        {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 25, 5]}
                    ]
                },
                pageMargins: [25, 20, 25, 30],
                extend: 'pdfHtml5',
                pageSize: 'A4',
                content: [
                    {
                        'text': $filter('translate')('reportType') + " " + $filter('lowercase1')($filter('translate')('report.agrooperation.materials')),
                        alignment: 'center',
                        bold: 'true'
                    },
                    {'text': rep.cluster_name, alignment: 'center', bold: 'true'},
                    {
                        'text': $filter('date')(rep.date_start * 1000, 'dd.MM.yyyy HH:mm:ss') + " - " + $filter('date')(rep.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                        alignment: 'center',
                        bold: 'true',
                        margin: [0, 0, 0, 20]
                    },
                    content_detail
                ],

                styles: {
                    tableHeader: {
                        alignment: 'center',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    td: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8,
                    },
                    header: {
                        fontSize: 9,
                        bold: 'true',
                        color: 'black',
                        alignment: 'center'
                    }
                }
            };

            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });
            } else {
                cratePdf(content);
            }
        }

//----------
//Детальна інформація по ТМЦ
        function materialsDetail(rep, params, func) {
            var table_body = [];
            var content_detail = [];

            rep.sort(function (a, b) {
                if (a.fact_date_start < b.fact_date_start) {
                    return -1;
                }
                if (a.fact_date_start > b.fact_date_start) {
                    return 1;
                }
                return 0;
            });


            table_body.push([
                {'text': $filter('translate')('date'), style: 'tableHeader'},
                {'text': $filter('translate')('geozone'), style: 'tableHeader'},
                {'text': $filter('translate')('fact'), style: 'tableHeader'},
                {'text': $filter('translate')('square'), style: 'tableHeader'},
                {'text': $filter('translate')('worktype'), style: 'tableHeader'},
                {'text': $filter('translate')('culture'), style: 'tableHeader'}]);


            for (var i = 0; i < rep.length; i++) {
                var data = rep[i];
                if (data.unit == 'Quantity') {
                    table_body.push([
                        {
                            'text': $filter('date')(data.fact_date_start, 'dd.MM.yyyy') + " - " + $filter('date')(data.fact_date_end, 'dd.MM.yyyy'),
                            style: 'td'
                        },
                        {'text': data.geozone.name, style: 'td'},
                        {
                            'text': $filter('number')(data.fact_material, 2) + " " + $filter('translate')('material.unit.qnt_s'),
                            style: 'td'
                        },
                        {'text': $filter('number')(data.fact_square, 2), style: 'td'},
                        {'text': $filter('translate')(data.workType.name), style: 'td'},
                        {'text': $filter('translate')(data.culture ? data.culture.name : ''), style: 'td'}]);
                }
                if (data.unit == 'Kg') {
                    table_body.push([
                        {
                            'text': $filter('date')(data.fact_date_start, 'dd.MM.yyyy') + " - " + $filter('date')(data.fact_date_end, 'dd.MM.yyyy'),
                            style: 'td'
                        },
                        {'text': data.geozone ? data.geozone.name : '', style: 'td'},
                        {
                            'text': $filter('number')(data.fact_material, 2) + " " + $filter('translate')('material.unit.kg_s'),
                            style: 'td'
                        },
                        {'text': $filter('number')(data.fact_square, 2), style: 'td'},
                        {'text': $filter('translate')(data.workType.name), style: 'td'},
                        {'text': $filter('translate')(data.culture ? data.culture.name : ''), style: 'td'}]);
                }
                if (data.unit == 'Litr') {
                    table_body.push([
                        {
                            'text': $filter('date')(data.fact_date_start, 'dd.MM.yyyy') + " - " + $filter('date')(data.fact_date_end, 'dd.MM.yyyy'),
                            style: 'td'
                        },
                        {'text': data.geozone ? data.geozone.name : '', style: 'td'},
                        {
                            'text': $filter('number')(data.fact_material, 2) + " " + $filter('translate')('material.unit.litr1_s'),
                            style: 'td'
                        },
                        {'text': $filter('number')(data.fact_square, 2), style: 'td'},
                        {'text': $filter('translate')(data.workType.name), style: 'td'},
                        {'text': $filter('translate')(data.culture ? data.culture.name : ''), style: 'td'}]);
                }

            }
            content_detail.push(
                {
                    color: '#444',
                    margin: [0, 0, 0, 20],
                    table: {
                        widths: [50, 110, 60, 70, 115, 85],
                        heights: 20,
                        body: table_body,
                        alignment: 'center',
                        dontBreakRows: true,
                    },
                })

            var content = {
                info: {
                    title: 'Agrocontrol',
                    author: 'Agrocontrol',
                    subject: '',
                    keywords: '',
                },
                footer: {
                    columns: [
                        {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 25, 5]}
                    ]
                },
                pageMargins: [25, 25, 25, 35],
                extend: 'pdfHtml5',
                pageSize: 'A4',
                content: [
                    {
                        'text': $filter('translate')(params.materialName),
                        alignment: 'center',
                        bold: 'true',
                        fontSize: 10,
                        margin: [0, 0, 0, 20]
                    },
                    content_detail
                ],

                styles: {
                    tableHeader: {
                        alignment: 'center',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    td: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8,
                    },
                    header: {
                        fontSize: 9,
                        bold: 'true',
                        color: 'black',
                    }
                }
            };

            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });
            } else {
                cratePdf(content);
            }
        }

//------------
//Путевой лист(сводный)
        function waybillConsolidated(rep, sortColumn, func) {
            var table_body = [];
            var table1_body = [];
            var content_detail = [];
            rep.waybillList.sort(function (a, b) {

                if (sortColumn.waybillConsolidated.reverse == false) {
                    if (sortColumn.waybillConsolidated.column == 'time_in_geozone' || sortColumn.waybillConsolidated.column == 'time_out') {

                        var aa = eval('a.' + (sortColumn.waybillConsolidated.column).replace(' | translate', ''))
                        var bb = eval('b.' + (sortColumn.waybillConsolidated.column).replace(' | translate', ''))

                        if (aa == null) {
                            return 1;
                        } else if (bb == null) {
                            return -1;
                        }

                        if (parseInt(aa) == parseInt(bb)) {
                            return 0;
                        } else if (rep.waybillList) {
                            return parseInt(aa) < parseInt(bb) ? -1 : 1;
                        } else {
                            return parseInt(aa) < parseInt(bb) ? 1 : -1;
                        }


                    } else {
                        try {
                            var aa = eval('a.' + (sortColumn.waybillConsolidated.column).replace(' | translate', ''))
                            var bb = eval('b.' + (sortColumn.waybillConsolidated.column).replace(' | translate', ''))

//                             if (aa == null) {
//                                 return 1;
//                             } else if (bb == null) {
//                                 return -1;
//                             }
                            if (aa === bb) {
                                return 0;
                            } else if (rep.waybillList) {
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
                    if (sortColumn.waybillConsolidated.column == 'time_in_geozone' || sortColumn.waybillConsolidated.column == 'time_out') {
                        var aa = eval('a.' + (sortColumn.waybillConsolidated.column).replace(' | translate', ''))
                        var bb = eval('b.' + (sortColumn.waybillConsolidated.column).replace(' | translate', ''))

                        if (aa == null) {
                            return -1;
                        } else if (bb == null) {
                            return 1;
                        }

                        if (parseInt(aa) == parseInt(bb)) {
                            return 0;
                        } else if (rep.waybillList) {
                            return parseInt(aa) < parseInt(bb) ? 1 : -1;
                        } else {
                            return parseInt(aa) < parseInt(bb) ? -1 : 1;
                        }

                    } else {
                        try {
                            var aa = eval('a.' + (sortColumn.waybillConsolidated.column).replace(' | translate', ''))
                            var bb = eval('b.' + (sortColumn.waybillConsolidated.column).replace(' | translate', ''))

//                             if (aa == null) {
//                                 return -1;
//                             } else if (bb == null) {
//                                 return 1;
//                             }

                            if (aa === bb) {
                                return -1;
                            } else if (rep.waybillList) {
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

            table_body.push([
                {'text': $filter('translate')('date'), style: 'tableHeader'},
                {'text': $filter('translate')('driver'), style: 'tableHeader'},
                {'text': $filter('translate')('vehicle'), style: 'tableHeader'},
                {'text': $filter('translate')('cluster'), style: 'tableHeader'},
                {'text': $filter('translate')('geozone'), style: 'tableHeader'},
                {'text': $filter('translate')('culture'), style: 'tableHeader'},
                {'text': $filter('translate')('seed'), style: 'tableHeader'},
                {'text': $filter('translate')('trailer'), style: 'tableHeader'},
                {'text': $filter('translate')('worktypes'), style: 'tableHeader'},
                {'text': $filter('translate')('square'), style: 'tableHeader'},
                {'text': $filter('translate')('processed'), style: 'tableHeader'},
                {'text': $filter('translate')('square.left'), style: 'tableHeader'},]);

            table1_body.push([
                {'text': $filter('translate')('timein'), style: 'tableHeader'},
                {'text': $filter('translate')('timeout'), style: 'tableHeader'},
                {'text': $filter('translate')('duration'), style: 'tableHeader'},
                {'text': $filter('translate')('crossing'), style: 'tableHeader'},
                {'text': $filter('translate')('avgspeed'), style: 'tableHeader'},
                {'text': $filter('translate')('fuel.used.processed'), style: 'tableHeader'},
                {'text': $filter('translate')('fuel.used.processed.avg'), style: 'tableHeader'},
                {'text': $filter('translate')('fuel.used.moving1'), style: 'tableHeader'},
                {'text': $filter('translate')('fuel.used.moving1.avg'), style: 'tableHeader'},
                {'text': $filter('translate')('fuel'), style: 'tableHeader'},
                {'text': $filter('translate')('petrol.refueling.litr'), style: 'tableHeader'},
                {'text': $filter('translate')('fuel.refuel.dut'), style: 'tableHeader'},
                {'text': $filter('translate')('refueling.detail'), style: 'tableHeader'}]);


            for (var i = 0; i < rep.waybillList.length; i++) {
                var reportDetail = rep.waybillList[i];
                var table_refueling = [];
                if (reportDetail.refuelingDetailList.length > 0) {
                    for (var r = 0; r < reportDetail.refuelingDetailList.length; r++) {
                        var refueling = reportDetail.refuelingDetailList[r];
                        table_refueling.push([
                            {'text': $filter('date')(refueling.tm * 1000, 'dd.MM.yyyy HH:mm'), style: 'td'},
                            {'text': refueling.petrolAzs_name, style: 'td'},
                            {'text': $filter('number')(refueling.litr, 1), style: 'td'}])
                    }
                    let time_in = {'text': "", style: 'td'}
                    if (reportDetail.time_in_geozone) {
                        time_in = {'text': $filter('date')(reportDetail.time_in_geozone, 'HH:mm'), style: 'td'}
                    } else {
                        time_in = {'text': $filter('date')(reportDetail.time_in, 'HH:mm'), style: 'td'}
                    }

                    table1_body.push([
                        time_in,
                        {'text': $filter('date')(reportDetail.time_out, 'HH:mm'), style: 'td'},
                        {'text': $filter('secondsToDateTime2')(reportDetail.time_duration), style: 'td'},
                        {'text': $filter('number')(reportDetail.distance_moving, 1), style: 'td'},
                        {'text': $filter('number')(reportDetail.avg_speed, 1), style: 'td'},
                        {'text': $filter('number')(reportDetail.fuel_used_processed, 1), style: 'td'},
                        {'text': $filter('number')(reportDetail.fuel_processed_avg, 1), style: 'td'},
                        {'text': $filter('number')(reportDetail.fuel_used_moving, 1), style: 'td'},
                        {'text': $filter('number')(reportDetail.fuel_moving_avg, 1), style: 'td'},
                        {'text': $filter('number')(reportDetail.fuel_used, 1), style: 'td'},
                        {'text': $filter('number')(reportDetail.fuel_refueling_azs, 1), style: 'td'},
                        {'text': $filter('number')(reportDetail.fuel_refueling_dut, 1), style: 'td'},
                        {
                            table: {
                                widths: [40, 75, 29],
                                body:
                                table_refueling
                            },
                        }]);
                } else {
                    table_refueling = [];
                    let time_in = {'text': "", style: 'td'}
                    if (reportDetail.time_in_geozone) {
                        time_in = {'text': $filter('date')(reportDetail.time_in_geozone, 'HH:mm'), style: 'td'}
                    } else {
                        time_in = {'text': $filter('date')(reportDetail.time_in, 'HH:mm'), style: 'td'}
                    }

                    table1_body.push([
                        time_in,
                        {'text': $filter('date')(reportDetail.time_out, 'HH:mm'), style: 'td'},
                        {'text': $filter('secondsToDateTime2')(reportDetail.time_duration), style: 'td'},
                        {'text': $filter('number')(reportDetail.distance_moving, 1), style: 'td'},
                        {'text': $filter('number')(reportDetail.avg_speed, 1), style: 'td'},
                        {'text': $filter('number')(reportDetail.fuel_used_processed, 1), style: 'td'},
                        {'text': $filter('number')(reportDetail.fuel_processed_avg, 1), style: 'td'},
                        {'text': $filter('number')(reportDetail.fuel_used_moving, 1), style: 'td'},
                        {'text': $filter('number')(reportDetail.fuel_moving_avg, 1), style: 'td'},
                        {'text': $filter('number')(reportDetail.fuel_used, 1), style: 'td'},
                        {'text': $filter('number')(reportDetail.fuel_refueling_azs, 1), style: 'td'},
                        {'text': $filter('number')(reportDetail.fuel_refueling_dut, 1), style: 'td'},
                        {'text': ''}]);
                }


                if ($filter('number')(reportDetail.geozone ? reportDetail.geozone.square_real : '', 1) == '0,0') {
                    var processed = {
                        'text': "",
                        style: 'td'
                    }
                } else {
                    var processed = {
                        'text': $filter('number')(reportDetail.geozone ? reportDetail.geozone.square_real : '', 1),
                        style: 'td'
                    }
                }
                table_body.push([
                    {'text': $filter('date')(reportDetail.date, 'dd.MM.yyyy'), style: 'td', align: 'middle'},
                    {'text': reportDetail.driver ? reportDetail.driver.name : '', style: 'td'},
                    {'text': reportDetail.vehicle.name, style: 'td'},
                    {'text': reportDetail.geozoneGroup ? reportDetail.geozoneGroup.name : '', style: 'td'},
                    {'text': reportDetail.geozone ? reportDetail.geozone.name : '', style: 'td'},
                    {
                        'text': $filter('translate')(reportDetail.culture ? reportDetail.culture.name : ''),
                        style: 'td'
                    },
                    {'text': $filter('translate')(reportDetail.seed ? reportDetail.seed.name : ''), style: 'td'},
                    {'text': reportDetail.trailer ? reportDetail.trailer.name : '', style: 'td'},
                    {
                        'text': $filter('translate')(reportDetail.workType ? reportDetail.workType.name : ''),
                        style: 'td'
                    },
                    processed,
                    {'text': $filter('number')(reportDetail.processed, 1), style: 'td'},
                    {'text': $filter('number')(reportDetail.square_left, 1), style: 'td'},]);


            }


            for (var i = 0; i < rep.waybillList.length; i++) {
                var reportDetail = rep.waybillList[i];


            }

            content_detail.push(
                {
                    'text': $filter('translate')('reportType') + " " + $filter('lowercase')($filter('translate')('report.waybill.consolidated')),
                    alignment: 'center',
                    bold: 'true'
                },
                {'text': rep.cluster_name, alignment: 'center', bold: 'true'},
                {
                    'text': $filter('date')(rep.date_start * 1000, 'dd.MM.yyyy HH:mm:ss') + " - " + $filter('date')(rep.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                    alignment: 'center',
                    bold: 'true',
                    margin: [0, 0, 0, 20]
                },
                {
                    color: '#444',
                    margin: [0, 0, 0, 20],
                    table: {
                        widths: [43, 70, 95, 60, 60, 55, 60, 88, 65, 37, 40, 40],
                        heights: 45,
                        body: table_body,
                        alignment: 'center',
                        dontBreakRows: true,
                    },
                })

            content_detail.push(
                {
                    'text': $filter('translate')('report.waybill.consolidated'),
                    alignment: 'center',
                    bold: 'true',
                    pageBreak: 'before',
                },
                {'text': rep.cluster_name, alignment: 'center', bold: 'true'},
                {
                    'text': $filter('date')(rep.date_start * 1000, 'dd.MM.yyyy HH:mm:ss') + " - " + $filter('date')(rep.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                    alignment: 'center',
                    bold: 'true',
                    margin: [0, 0, 0, 20]
                },
                {
                    color: '#444',
                    margin: [0, 0, 0, 20],
                    table: {
                        widths: [35, 35, 45, 37, 55, 60, 45, 60, 45, 35, 40, 40, '*'],
                        heights: 45,
                        body: table1_body,
                        alignment: 'center',
                        dontBreakRows: true,
                    },
                })

            var content = {
                info: {
                    title: 'Agrocontrol',
                    author: 'Agrocontrol',
                    subject: '',
                    keywords: '',
                },
                footer: {
                    columns: [
                        {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 25, 5]}
                    ]
                },
                pageMargins: [10, 25, 10, 30],
                extend: 'pdfHtml5',
                pageSize: 'A4',
                pageOrientation: 'landscape',
                content: [
                    content_detail
                ],

                styles: {
                    tableHeader: {
                        alignment: 'center',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    td: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8,
                    },
                    header: {
                        fontSize: 9,
                        bold: 'true',
                        color: 'black',
                    }
                }
            };

            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });
            } else {
                cratePdf(content);
            }
        }

//------------
//Путевой лист автомобили
        function waybillConsolidatedCar(rep, func) {
            var table_body = [];
            var table1_body = [];
            var content_detail = [];


            table_body.push([
                {'text': $filter('translate')('date'), style: 'tableHeader'},
                {'text': $filter('translate')('name'), style: 'tableHeader'},
                {'text': $filter('translate')('vehicle.state.number'), style: 'tableHeader'},
                {'text': $filter('translate')('driver'), style: 'tableHeader'},
                {'text': $filter('translate')('time.start.going'), style: 'tableHeader'},
                {'text': $filter('translate')('time.end.going'), style: 'tableHeader'},
                {'text': $filter('translate')('hour_shift.duration'), style: 'tableHeader'},
                {'text': $filter('translate')('time.going'), style: 'tableHeader'},]);

            for (var i = 0; i < rep.waybillList.length; i++) {
                var reportDetail = rep.waybillList[i];

                table_body.push([
                    {'text': $filter('date')(reportDetail.date, 'dd.MM.yyyy'), style: 'td'},
                    {'text': reportDetail.vehicle ? reportDetail.vehicle.name : '', style: 'td'},
                    {'text': reportDetail.vehicle.state_number, style: 'td'},
                    {'text': reportDetail.driver ? reportDetail.driver.name : '', style: 'td'},
                    {'text': $filter('date')(reportDetail.time_moving_start, 'HH:mm'), style: 'td'},
                    {'text': $filter('date')(reportDetail.time_moving_end, 'HH:mm'), style: 'td'},
                    {
                        'text': $filter('translate')($filter('secondsToDateTime')(reportDetail.time_duration)),
                        style: 'td'
                    },
                    {
                        'text': $filter('translate')($filter('secondsToDateTime')(reportDetail.time_moving_duration)),
                        style: 'td'
                    },]);
            }


            table1_body.push([
                {'text': $filter('translate')('parking.time'), style: 'tableHeader'},
                {'text': $filter('translate')('distance'), style: 'tableHeader'},
                {'text': $filter('translate')('left.before'), style: 'tableHeader'},
                {'text': $filter('translate')('left.after'), style: 'tableHeader'},
                {'text': $filter('translate')('fuel.refueling'), style: 'tableHeader'},
                {'text': $filter('translate')('petrol.refueling.litr'), style: 'tableHeader'},
                {'text': $filter('translate')('fuel.refuel.dut'), style: 'tableHeader'},
                {'text': $filter('translate')('fuel.used'), style: 'tableHeader'},
                {'text': $filter('translate')('fuel.avg'), style: 'tableHeader'},
                {'text': $filter('translate')('refueling.detail'), style: 'tableHeader'}]);

            for (var i = 0; i < rep.waybillList.length; i++) {
                var reportDetail = rep.waybillList[i];
                var table_refueling = [];
                if (reportDetail.refuelingDetailList.length > 0) {
                    for (var r = 0; r < reportDetail.refuelingDetailList.length; r++) {
                        var refueling = reportDetail.refuelingDetailList[r];
                        table_refueling.push([
                            {'text': $filter('date')(refueling.tm * 1000, 'dd.MM.yyyy HH:mm'), style: 'td'},
                            {'text': refueling.petrolAzs_name, style: 'td'},
                            {'text': $filter('number')(refueling.litr, 1), style: 'td'}])

                    }
                    table1_body.push([

                        {
                            'text': $filter('translate')($filter('secondsToDateTime')(reportDetail.time_duration - reportDetail.time_moving_duration)),
                            style: 'td'
                        },
                        {'text': $filter('number')(reportDetail.distance, 2), style: 'td'},
                        {'text': $filter('number')(reportDetail.fuel_level_start, 0), style: 'td'},
                        {'text': $filter('number')(reportDetail.fuel_level_end, 0), style: 'td'},
                        {'text': $filter('number')(reportDetail.fuel_refueling, 0), style: 'td'},
                        {'text': $filter('number')(reportDetail.fuel_refueling_azs, 1), style: 'td'},
                        {'text': $filter('number')(reportDetail.fuel_refueling_dut, 0), style: 'td'},
                        {'text': $filter('number')(reportDetail.fuel_used, 0), style: 'td'},
                        {'text': $filter('number')(reportDetail.fuel_used_avg, 1), style: 'td'},
                        {
                            table: {
                                widths: [40, 60, 20],
                                body:
                                table_refueling
                            },
                        }]);
                } else {
                    table1_body.push([

                        {
                            'text': $filter('translate')($filter('secondsToDateTime')(reportDetail.time_duration - reportDetail.time_moving_duration)),
                            style: 'td'
                        },
                        {'text': $filter('number')(reportDetail.distance, 2), style: 'td'},
                        {'text': $filter('number')(reportDetail.fuel_level_start, 0), style: 'td'},
                        {'text': $filter('number')(reportDetail.fuel_level_end, 0), style: 'td'},
                        {'text': $filter('number')(reportDetail.fuel_refueling, 0), style: 'td'},
                        {'text': $filter('number')(reportDetail.fuel_refueling_azs, 1), style: 'td'},
                        {'text': $filter('number')(reportDetail.fuel_refueling_dut, 0), style: 'td'},
                        {'text': $filter('number')(reportDetail.fuel_used, 0), style: 'td'},
                        {'text': $filter('number')(reportDetail.fuel_used_avg, 1), style: 'td'},
                        {}]);
                }
            }

            content_detail.push(
                {
                    'text': $filter('translate')('reportType') + " " + $filter('lowercase')($filter('translate')('report.waybill.consolidated.car')),
                    alignment: 'center',
                    bold: 'true'
                },
                {'text': rep.cluster_name, alignment: 'center', bold: 'true'},
                {
                    'text': $filter('date')(rep.date_start * 1000, 'dd.MM.yyyy HH:mm:ss') + " - " + $filter('date')(rep.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                    alignment: 'center',
                    bold: 'true',
                    margin: [0, 0, 0, 20]
                },
                {
                    color: '#444',
                    margin: [15, 0, 0, 0],
                    table: {
                        widths: [60, 137, 110, 120, 90, 60, 60, 60],
                        heights: 30,
                        body: table_body,
                        alignment: 'center',
                        dontBreakRows: true,
                    },
                })

            content_detail.push(
                {
                    'text': $filter('translate')('reportType') + " " + $filter('lowercase')($filter('translate')('report.waybill.consolidated.car')),
                    alignment: 'center',
                    bold: 'true',
                    pageBreak: 'before',
                },
                {'text': rep.cluster_name, alignment: 'center', bold: 'true'},
                {
                    'text': $filter('date')(rep.date_start * 1000, 'dd.MM.yyyy HH:mm:ss') + " - " + $filter('date')(rep.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                    alignment: 'center',
                    bold: 'true',
                    margin: [0, 0, 0, 20]
                },
                {
                    color: '#444',
                    margin: [15, 0, 15, 0],
                    table: {
                        widths: [50, 60, 60, 50, 50, 50, 50, 80, 80, 150],
                        heights: 30,
                        body: table1_body,
                        alignment: 'center',
                        dontBreakRows: true,
                    },
                })

            var content = {
                info: {
                    title: 'Agrocontrol',
                    author: 'Agrocontrol',
                    subject: '',
                    keywords: '',
                },
                footer: {
                    columns: [
                        {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 25, 5]}
                    ]
                },
                pageMargins: [20, 25, 20, 30],
                extend: 'pdfHtml5',
                pageSize: 'A4',
                pageOrientation: 'landscape',
                content: [
                    content_detail
                ],

                styles: {
                    tableHeader: {
                        alignment: 'center',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    td: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8,
                    },
                    header: {
                        fontSize: 9,
                        bold: 'true',
                        color: 'black',
                    }
                }
            };

            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });
            } else {
                cratePdf(content);
            }


        }

//----------------------
//Заправки
        function byAzs(rep, params, func) {
            var table_body = [];
            var content_detail = [];

            table_body.push([
                {'text': $filter('translate')('date'), style: 'tableHeader'},
                {'text': $filter('translate')('vehicle'), style: 'tableHeader'},
                {'text': $filter('translate')('petrol.fueltype'), style: 'tableHeader'},
                {'text': $filter('translate')('driver'), style: 'tableHeader'},
                {'text': $filter('translate')('comment'), style: 'tableHeader'},
                {'text': $filter('translate')('litr.refuel'), style: 'tableHeader'}]);

            for (var i = 0; i < rep.repDetail.length; i++) {
                var rep_detail = rep.repDetail[i];
                for (var d = 0; d < rep_detail.length; d++) {
                    var detail = rep_detail[d];
                    table_body.push([
                        {'text': $filter('date')(detail.tm * 1000, 'dd.MM.yyyy HH:mm:ss'), style: 'td'},
                        {'text': detail.vehicle_name, style: 'td'},
                        {'text': detail.fueltype_name, style: 'td'},
                        {'text': detail.driver_name, style: 'td'},
                        {'text': detail.comment, style: 'td'},
                        {'text': $filter('number')(detail.litr, 2), style: 'td'}]);
                }

                table_body.push([
                    {
                        'text': $filter('translate')('total.by') + "  " + $filter('date')(rep_detail[0].tm * 1000, 'dd.MM.yyyy'),
                        style: 'header',
                        colSpan: 5,
                        alignment: 'right'
                    },
                    {},
                    {},
                    {},
                    {},
                    {
                        'text': $filter('number')(params.scope.getTotal(rep_detail, 'litr'), 2),
                        style: 'header',
                        alignment: 'center'
                    }]);


                table_body.push([
                    {'text': '', colSpan: 6, border: [false, false, false, false]},
                    {},
                    {},
                    {},
                    {},
                    {'text': '', border: [true, false, true, true]}]);

            }

            table_body.push([
                {'text': $filter('translate')('total.by.period'), style: 'header', alignment: 'right', colSpan: 5},
                {},
                {},
                {},
                {},
                {
                    'text': $filter('number')(params.scope.getTotalByArray(rep.repDetail, 'litr'), 2),
                    style: 'header',
                    alignment: 'center'
                }])
            content_detail.push(
                {
                    color: '#444',
                    margin: [0, 0, 0, 0],
                    table: {
                        widths: [60, 125, 60, 90, 75, 80],
                        heights: 15,
                        body: table_body,
                        alignment: 'center',
                        dontBreakRows: true,
                    },


                })

            var content = {
                info: {
                    title: 'Agrocontrol',
                    author: 'Agrocontrol',
                    subject: '',
                    keywords: '',
                },
                footer: {
                    columns: [
                        {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 25, 5]}
                    ]
                },
                pageMargins: [25, 20, 25, 35],
                extend: 'pdfHtml5',
                pageSize: 'A4',
                content: [
                    {
                        'text': $filter('translate')('reportType') + ' ' + $filter('lowercase')($filter('translate')('report.byAzs')) + ": " + rep.azs_name,
                        alignment: 'center',
                        bold: 'true'
                    },
                    {'text': rep.cluster_name, alignment: 'center', bold: 'true'},
                    {
                        'text': $filter('date')(rep.date_start * 1000, 'dd.MM.yyyy HH:mm:ss') + " - " + $filter('date')(rep.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                        alignment: 'center',
                        bold: 'true',
                        margin: [0, 0, 0, 20]
                    },
                    content_detail

                ],

                styles: {
                    tableHeader: {
                        alignment: 'center',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    td: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8,
                    },
                    header: {
                        fontSize: 9,
                        bold: 'true',
                        color: 'black',
                    }
                }
            };

            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });
            } else {
                cratePdf(content);
            }

        }

//------------------
//Остатки по АЗС
        function byAzsBalances(rep, params, func) {
            var table_body = [];
            var content_detail = [];

            rep.repDetail.sort(function (a, b) {
                if ($filter('lowercase')(a.azs_name) < $filter('lowercase')(b.azs_name)) {
                    return -1;
                }
                if ($filter('lowercase')(a.azs_name) > $filter('lowercase')(b.azs_name)) {
                    return 1;
                }
                return 0;
            });

            table_body.push([
                {'text': $filter('translate')('petrol.azs'), style: 'tableHeader'},
                {'text': $filter('translate')('petrol.fueltype'), style: 'tableHeader'},
                {'text': $filter('translate')('petrol.balances'), style: 'tableHeader'},
                {'text': $filter('translate')('petrol.balance.byDut'), style: 'tableHeader'}]);

            for (var i = 0; i < rep.repDetail.length; i++) {
                var reportDetail = rep.repDetail[i];
                if (reportDetail.litr_dut !== null && $filter('number')(reportDetail.litr_dut, 2) > 0) {
                    table_body.push([
                        {'text': reportDetail.azs_name, style: 'td'},
                        {'text': reportDetail.fueltype_name, style: 'td'},
                        {'text': $filter('number')(reportDetail.litr, 2), style: 'td'},
                        {
                            'text': $filter('number')(reportDetail.litr_dut, 2) + "(" + $filter('date')(reportDetail.tm_dut * 1000, 'dd.MM.yyyy HH:mm:ss') + ")",
                            style: 'td'
                        }]);
                } else {
                    table_body.push([
                        {'text': reportDetail.azs_name, style: 'td'},
                        {'text': reportDetail.fueltype_name, style: 'td'},
                        {'text': $filter('number')(reportDetail.litr, 2), style: 'td'},
                        {'text': '', style: 'td'}]);

                }
            }

            table_body.push([
                {
                    'text': $filter('translate')('total') + ": ",
                    style: 'header',
                    colSpan: 2,
                    alignment: 'right'
                },
                {},
                {
                    'text': $filter('number')(params.scope.getTotal(rep.repDetail, 'litr'), 2),
                    style: 'header',
                    alignment: 'center'
                },
                {
                    'text': $filter('number')(params.scope.getTotal(rep.repDetail, 'litr_dut'), 2),
                    style: 'header',
                    alignment: 'center'
                }]);

            content_detail.push(
                {
                    color: '#444',
                    margin: [10, 0, 20, 0],
                    table: {
                        widths: [200, 100, 100, 100],
                        heights: 20,
                        body: table_body,
                        alignment: 'center',
                        dontBreakRows: true,
                    },
                })

            var content = {
                info: {
                    title: 'Agrocontrol',
                    author: 'Agrocontrol',
                    subject: '',
                    keywords: '',
                },
                footer: {
                    columns: [
                        {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 20, 0]}
                    ]
                },
                pageMargins: [20, 25, 25, 40],
                extend: 'pdfHtml5',
                pageSize: 'A4',
                content: [
                    {
                        'text': $filter('translate')('reportType') + " " + $filter('lowercase1')($filter('translate')('report.byAzsBalances')),
                        alignment: 'center',
                        bold: 'true'
                    },
                    {'text': rep.cluster_name, alignment: 'center', bold: 'true'},
                    {
                        'text': $filter('date')(rep.date_rep * 1000, 'dd.MM.yyyy HH:mm:ss'),
                        alignment: 'center',
                        bold: 'true',
                        margin: [0, 0, 0, 20]
                    },
                    content_detail,
                ],

                styles: {
                    tableHeader: {
                        alignment: 'center',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    td: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8,
                    },
                    header: {
                        fontSize: 9,
                        bold: 'true',
                        color: 'black',
                    }
                }
            };

            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });
            } else {
                cratePdf(content);
            }
        }

//------------
// Контроль местоположения ТС и заправщика
        function controlRefuelingPlace(rep, params, func) {

            var table_body = [];
            var content_detail = [];

            rep.repDetail.sort(function (a, b) {
                if ($filter('lowercase')(a.tm) < $filter('lowercase')(b.tm)) {
                    return -1;
                }
                if ($filter('lowercase')(a.tm) > $filter('lowercase')(b.tm)) {
                    return 1;
                }
                return 0;
            });


            if (rep.repDetail.length > 0) {
                table_body.push([
                    {'text': $filter('translate')('date'), style: 'tableHeader'},
                    {'text': $filter('translate')('petrol.azs'), style: 'tableHeader'},
                    {'text': $filter('translate')('vehicle'), style: 'tableHeader'},
                    {'text': $filter('translate')('petrol.fueltype'), style: 'tableHeader'},
                    {'text': $filter('translate')('driver'), style: 'tableHeader'},
                    {'text': $filter('translate')('litr.refuel'), style: 'tableHeader'},
                    {'text': $filter('translate')('petrol.distance'), style: 'tableHeader'},
                    {'text': $filter('translate')('vehicle.point.tm'), style: 'tableHeader'}]);

                for (var i = 0; i < rep.repDetail.length; i++) {
                    var detail = rep.repDetail[i];

                    table_body.push([
                        {'text': $filter('date')(detail.tm * 1000, 'dd.MM.yyyy HH:mm:ss'), style: 'td'},
                        {'text': detail.azs_name, style: 'td'},
                        {'text': detail.vehicle_name, style: 'td'},
                        {'text': detail.fueltype_name, style: 'td'},
                        {'text': detail.driver_name, style: 'td'},
                        {'text': $filter('number')(detail.litr, 2), style: 'td'},
                        {'text': $filter('number')(detail.distance, 2), style: 'td'},
                        {'text': $filter('date')(detail.vehicle_tm * 1000, 'dd.MM.yyyy HH:mm:ss'), style: 'td'}]);
                }

                content_detail.push(
                    {
                        color: '#444',
                        margin: [5, 0, 0, 20],
                        table: {
                            widths: [40, 85, 95, 40, 60, 50, 60, 45],
                            heights: 20,
                            body: table_body,
                            alignment: 'center',
                            dontBreakRows: true,
                        },
                    })

                var content = {
                    info: {
                        title: 'Agrocontrol',
                        author: 'Agrocontrol',
                        subject: '',
                        keywords: '',
                    },
                    footer: {
                        columns: [
                            {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 20, 5]}
                        ]
                    },
                    pageMargins: [20, 25, 25, 30],
                    extend: 'pdfHtml5',
                    pageSize: 'A4',
                    content: [
                        {
                            'text': $filter('translate')('reportType') + " " + $filter('lowercase')($filter('translate')('report.controlRefuelingPlace')),
                            alignment: 'center',
                            bold: 'true'
                        },
                        {'text': rep.azs_name, alignment: 'center', bold: 'true'},
                        {
                            'text': $filter('date')(rep.date_start * 1000, 'dd.MM.yyyy HH:mm:ss') + " - " + $filter('date')(rep.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                            alignment: 'center',
                            bold: 'true',
                            margin: [0, 0, 0, 20]
                        },
                        content_detail,
                    ],

                    styles: {
                        tableHeader: {
                            alignment: 'center',
                            fillColor: '#A9A9A9',
                            color: 'black',
                            fontSize: 9,
                            bold: 'true'
                        },
                        td: {
                            alignment: 'center',
                            height: '100',
                            fontSize: 8,
                        },
                        header: {
                            fontSize: 9,
                            bold: 'true',
                            color: 'black',
                        }
                    }
                };
            } else {
                var content = {
                    info: {
                        title: 'Agrocontrol',
                        author: 'Agrocontrol',
                        subject: '',
                        keywords: '',
                    },
                    footer: {
                        columns: [
                            {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 20, 5]}
                        ]
                    },
                    pageMargins: [20, 25, 25, 30],
                    extend: 'pdfHtml5',
                    pageSize: 'A4',
                    content: [
                        {
                            'text': $filter('translate')('report.controlRefuelingPlace'),
                            alignment: 'center',
                            bold: 'true'
                        },
                        {'text': rep.azs_name, alignment: 'center', bold: 'true'},
                        {
                            'text': $filter('date')(rep.date_start * 1000, 'dd.MM.yyyy HH:mm:ss') + " - " + $filter('date')(rep.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                            alignment: 'center',
                            bold: 'true',
                            margin: [0, 0, 0, 20]
                        },
                        {'text': $filter('translate')('no.violations'), alignment: 'center', bold: 'true'},
                    ],
                }
            }


            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });
            } else {
                cratePdf(content);
            }
        }

//-----------------
//Контроль заправок
        function controlRefueling(rep, params, func) {
            var table_body = [];
            var content_detail = [];

            rep.repDetail.sort(function (a, b) {
                if (a.tm < b.tm) {
                    return -1;
                }
                if (a.tm > b.tm) {
                    return 1;
                }
                return 0;
            });


            table_body.push([
                {'text': $filter('translate')('date'), style: 'tableHeader'},
                {'text': $filter('translate')('petrol.azs'), style: 'tableHeader'},
                {'text': $filter('translate')('vehicle'), style: 'tableHeader'},
                {'text': $filter('translate')('driver'), style: 'tableHeader'},
                {'text': $filter('translate')('litr.refuel'), style: 'tableHeader'},
                {'text': $filter('translate')('fuel.used.drt'), style: 'tableHeader'},
                {'text': $filter('translate')('fuel.refuel.dut'), style: 'tableHeader'},
                {'text': $filter('translate')('distance'), style: 'tableHeader'},
                {'text': $filter('translate')('fuel.avg'), style: 'tableHeader'},
                {'text': $filter('translate')('fuel.percent_drt'), style: 'tableHeader'},
                {'text': $filter('translate')('fuel.percent_dut'), style: 'tableHeader'}]);

            for (var i = 0; i < rep.repDetail.length; i++) {
                var detail = rep.repDetail[i];
                table_body.push([
                    {'text': $filter('date')(detail.tm * 1000, 'dd.MM.yyyy HH:mm:ss'), style: 'td'},
                    {'text': detail.azs_name, style: 'td'},
                    {'text': detail.vehicle_name, style: 'td'},
                    {'text': detail.driver_name, style: 'td'},
                    {'text': $filter('number')(detail.litr, 2), style: 'td'},
                    {'text': $filter('number')(detail.litr_drt, 2), style: 'td'},
                    {'text': $filter('number')(detail.litr_dut, 2), style: 'td'},
                    {'text': $filter('number')(detail.distance, 0), style: 'td'},
                    {'text': $filter('number')(detail.fuel_avg, 0), style: 'td'},
                    {'text': $filter('number')(detail.percent_drt, 1), style: 'td'},
                    {'text': $filter('number')(detail.percent_dut, 1), style: 'td'}]);
            }
            if (params.scope.getTotal(rep.repDetail, 'litr_drt') == 0) {
                table_body.push([
                    {
                        'text': $filter('translate')('total.by.period') + ":",
                        style: 'header',
                        alignment: 'right',
                        colSpan: 4
                    },
                    {},
                    {},
                    {},
                    {'text': $filter('number')(params.scope.getTotal(rep.repDetail, 'litr'), 2), style: 'header'},
                    {
                        'text': $filter('number')(params.scope.getTotal(rep.repDetail, 'litr_drt'), 2),
                        style: 'header'
                    },
                    {
                        'text': $filter('number')(params.scope.getTotal(rep.repDetail, 'litr_dut'), 2),
                        style: 'header'
                    },
                    {
                        'text': $filter('number')(params.scope.getTotal(rep.repDetail, 'distance'), 0),
                        style: 'header'
                    },
                    {},
                    {},
                    {
                        'text': $filter('number')((params.scope.getTotal(rep.repDetail, 'litr') - params.scope.getTotal(rep.repDetail, 'litr_dut')) / params.scope.getTotal(rep.repDetail, 'litr') * 100, 2),
                        style: 'header'
                    }]);
            } else if (params.scope.getTotal(rep.repDetail, 'litr_dut') == 0) {
                table_body.push([
                    {
                        'text': $filter('translate')('total.by.period') + ":",
                        style: 'header',
                        alignment: 'right',
                        colSpan: 4
                    },
                    {},
                    {},
                    {},
                    {'text': $filter('number')(params.scope.getTotal(rep.repDetail, 'litr'), 2), style: 'header'},
                    {
                        'text': $filter('number')(params.scope.getTotal(rep.repDetail, 'litr_drt'), 2),
                        style: 'header'
                    },
                    {
                        'text': $filter('number')(params.scope.getTotal(rep.repDetail, 'litr_dut'), 2),
                        style: 'header'
                    },
                    {
                        'text': $filter('number')(params.scope.getTotal(rep.repDetail, 'distance'), 0),
                        style: 'header'
                    },
                    {},
                    {
                        'text': $filter('number')((params.scope.getTotal(rep.repDetail, 'litr') - params.scope.getTotal(rep.repDetail, 'litr_drt')) / params.scope.getTotal(rep.repDetail, 'litr') * 100, 2),
                        style: 'header',
                    },
                    {}]);
            } else {
                table_body.push([
                    {
                        'text': $filter('translate')('total.by.period') + ":",
                        style: 'header',
                        alignment: 'right',
                        colSpan: 4
                    },
                    {},
                    {},
                    {},
                    {'text': $filter('number')(params.scope.getTotal(rep.repDetail, 'litr'), 2), style: 'header'},
                    {
                        'text': $filter('number')(params.scope.getTotal(rep.repDetail, 'litr_drt'), 2),
                        style: 'header'
                    },
                    {
                        'text': $filter('number')(params.scope.getTotal(rep.repDetail, 'litr_dut'), 2),
                        style: 'header'
                    },
                    {
                        'text': $filter('number')(params.scope.getTotal(rep.repDetail, 'distance'), 0),
                        style: 'header'
                    },
                    {},
                    {
                        'text': $filter('number')((params.scope.getTotal(rep.repDetail, 'litr') - params.scope.getTotal(rep.repDetail, 'litr_drt')) / params.scope.getTotal(rep.repDetail, 'litr') * 100, 2),
                        style: 'header',
                    },
                    {
                        'text': $filter('number')((params.scope.getTotal(rep.repDetail, 'litr') - params.scope.getTotal(rep.repDetail, 'litr_dut')) / params.scope.getTotal(rep.repDetail, 'litr') * 100, 2),
                        style: 'header'
                    }]);
            }


            content_detail.push(
                {
                    color: '#444',
                    margin: [0, 0, 0, 20],
                    table: {
                        widths: [50, 60, 75, 60, 65, 60, 60, 60, 70, 70, 70],
                        heights: 20,
                        body: table_body,
                        alignment: 'center',
                        dontBreakRows: true,
                    },
                })

            var content = {
                info: {
                    title: 'Agrocontrol',
                    author: 'Agrocontrol',
                    subject: '',
                    keywords: '',
                },
                footer: {
                    columns: [
                        {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 20, 5]}
                    ]
                },
                pageMargins: [20, 25, 20, 30],
                extend: 'pdfHtml5',
                pageSize: 'A4',
                pageOrientation: 'landscape',
                content: [
                    {
                        'text': $filter('translate')('reportType') + " " + $filter('lowercase')($filter('translate')('report.controlRefueling')),
                        alignment: 'center',
                        bold: 'true'
                    },
                    {'text': rep.vehicle_name, alignment: 'center', bold: 'true'},
                    {
                        'text': $filter('date')(rep.date_start * 1000, 'dd.MM.yyyy HH:mm:ss') + " - " + $filter('date')(rep.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                        alignment: 'center',
                        bold: 'true',
                        margin: [0, 0, 0, 20]
                    },
                    content_detail,
                ],

                styles: {
                    tableHeader: {
                        alignment: 'center',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    td: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8,
                    },
                    header: {
                        fontSize: 9,
                        bold: 'true',
                        color: 'black',
                        alignment: 'center'
                    }
                }
            };


            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });
            } else {
                cratePdf(content);
            }
        }

//-----------------
//Движение топлива по АЗС
        function byAzsMoving(rep, params, func) {
            var table_body = [];
            var content_detail = [];

            rep.repDetail.sort(function (a, b) {
                if (a.tm < b.tm) {
                    return -1;
                }
                if (a.tm > b.tm) {
                    return 1;
                }
                return 0;
            });


            table_body.push([
                {'text': $filter('translate')('start1.date'), style: 'tableHeader', rowSpan: 2},
                {'text': $filter('translate')('end1.date'), style: 'tableHeader', rowSpan: 2},
                {'text': $filter('translate')('vehicle'), style: 'tableHeader', rowSpan: 2},
                {'text': $filter('translate')('driver'), style: 'tableHeader', rowSpan: 2},
                {
                    'text': $filter('translate')('petrol.fuel.volume'),
                    style: 'tableHeader',
                    colSpan: 3,
                    alignment: 'center'
                },
                {},
                {},
                {'text': $filter('translate')('petrol.left.azs'), style: 'tableHeader'},
                {'text': $filter('translate')('petrol.fueltype'), style: 'tableHeader'}]);

            table_body.push([
                {},
                {},
                {},
                {},
                {'text': $filter('translate')('litr.refuel'), style: 'tableHeader'},
                {'text': $filter('translate')('petrol.azs.refueling1'), style: 'tableHeader'},
                {'text': $filter('translate')('petrol.balances'), style: 'tableHeader'},
                {'text': $filter('number')(rep.left_litr, 2), style: 'tableHeader'},
                {'text': rep.left_fuel_type, style: 'tableHeader'}]);

            for (var i = 0; i < rep.repDetail.length; i++) {
                var detail = rep.repDetail[i];

                if (detail.isInventorization == true) {
                    table_body.push([
                        {
                            'text': $filter('date')(detail.tm_start * 1000, 'dd.MM.yyyy HH:mm:ss'),
                            style: 'header',
                            colSpan: 2,
                            color: 'red'
                        },
                        {},
                        {'text': $filter('translate')('inventory'), style: 'header', color: 'red', colSpan: 2},
                        {},
                        {},
                        {},
                        {
                            'text': $filter('number')(detail.litr_azs_inventorization, 2),
                            style: 'header',
                            color: 'red'
                        },
                        {'text': $filter('number')(detail.litr_azs_left, 2), style: 'td'},
                        {'text': $filter('translate')(rep.left_fuel_type), style: 'td',},
                    ]);

                } else if (detail.litr_azs_refueling > 0) {
                    table_body.push([
                        {
                            'text': $filter('date')(detail.tm_start * 1000, 'dd.MM.yyyy HH:mm:ss'),
                            colSpan: 2,
                            style: 'header',
                            alignment: 'center'
                        },
                        {},
                        {
                            'text': $filter('translate')('petrol.fuel.in'),
                            colSpan: 2,
                            style: 'header',
                            alignment: 'center'
                        },
                        {},
                        {},
                        {
                            'text': $filter('number')(detail.litr_azs_refueling, 2),
                            style: 'header',
                            alignment: 'center'
                        },
                        {},
                        {'text': $filter('number')(detail.litr_azs_left, 2), style: 'td'},
                        {'text': detail.fueltype_name, style: 'td'}]);
                } else {
                    table_body.push([
                        {'text': $filter('date')(detail.tm_start * 1000, 'dd.MM.yyyy HH:mm:ss'), style: 'td'},
                        {'text': $filter('date')(detail.tm_end * 1000, 'dd.MM.yyyy HH:mm:ss'), style: 'td'},
                        {'text': detail.vehicle_name, style: 'td'},
                        {'text': detail.driver_name, style: 'td'},
                        {'text': $filter('number')(detail.litr_refueling, 2), style: 'td'},
                        {},
                        {},
                        {'text': $filter('number')(detail.litr_azs_left, 2), style: 'td'},
                        {'text': detail.fueltype_name, style: 'td'}]);
                }
            }
            if (!rep.repDetail[rep.repDetail.length - 1].litr_azs_left) {
                table_body.push([
                    {'text': $filter('translate')('total') + ":", style: 'header', colSpan: 4, alignment: 'right'},
                    {},
                    {},
                    {},
                    {
                        'text': $filter('number')(params.scope.getTotal(rep.repDetail, 'litr_refueling'), 2),
                        style: 'header'
                    },
                    {
                        'text': $filter('number')(params.scope.getTotal(rep.repDetail, 'litr_azs_refueling'), 2),
                        style: 'header'
                    },
                    {},
                    {'text': $filter('number')(rep.left_litr, 2), style: 'header'},
                    {'text': $filter('translate')(rep.left_fuel_type), style: 'header',},
                ]);
            } else {
                table_body.push([
                    {'text': $filter('translate')('total') + ":", style: 'header', colSpan: 4, alignment: 'right'},
                    {},
                    {},
                    {},
                    {
                        'text': $filter('number')(params.scope.getTotal(rep.repDetail, 'litr_refueling'), 2),
                        style: 'header'
                    },
                    {
                        'text': $filter('number')(params.scope.getTotal(rep.repDetail, 'litr_azs_refueling'), 2),
                        style: 'header'
                    },
                    {},
                    {
                        'text': $filter('number')(rep.repDetail[rep.repDetail.length - 1].litr_azs_left, 2),
                        style: 'header'
                    },
                    {'text': $filter('translate')(rep.left_fuel_type), style: 'header',},
                ]);
            }
            content_detail.push(
                {
                    color: '#444',
                    margin: [17, 0, 0, 20],
                    table: {
                        widths: [50, 60, 100, 100, 65, 80, 80, 80, 70],
                        heights: 20,
                        body: table_body,
                        alignment: 'center',
                        dontBreakRows: true,
                    },
                })

            var content = {
                info: {
                    title: 'Agrocontrol',
                    author: 'Agrocontrol',
                    subject: '',
                    keywords: '',
                },
                footer: {
                    columns: [
                        {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 20, 5]}
                    ]
                },
                pageMargins: [20, 25, 20, 30],
                extend: 'pdfHtml5',
                pageSize: 'A4',
                pageOrientation: 'landscape',
                content: [
                    {
                        'text': $filter('translate')('reportType') + " " + $filter('lowercase')($filter('translate')('report.byAzsMoving')) + ": " + rep.azs_name,
                        alignment: 'center',
                        bold: 'true'
                    },
                    {
                        'text': $filter('date')(rep.date_start * 1000, 'dd.MM.yyyy HH:mm:ss') + " - " + $filter('date')(rep.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                        alignment: 'center',
                        bold: 'true',
                        margin: [0, 0, 0, 20]
                    },
                    content_detail,
                ],

                styles: {
                    tableHeader: {
                        alignment: 'center',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    td: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8,
                    },
                    header: {
                        fontSize: 9,
                        bold: 'true',
                        color: 'black',
                        alignment: 'center'
                    }
                }
            };


            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });
            } else {
                cratePdf(content);
            }
        }

//---------------Уборка
//Выгрузки (общие)
        function byVehicleAssign(rep, func) {
            var table_body = [];
            var content_detail = [];
            rep.repDetail.sort(function (a, b) {
                if (a.tm < b.tm) {
                    return -1;
                }
                if (a.tm > b.tm) {
                    return 1;
                }
                return 0;
            });

            table_body.push([
                {'text': $filter('translate')('vehicle'), style: 'tableHeader'},
                {'text': $filter('translate')('timestart'), style: 'tableHeader'},
                {'text': $filter('translate')('timeend'), style: 'tableHeader'},
                {'text': $filter('translate')('duration'), style: 'tableHeader'},
                {'text': $filter('translate')('mechanic'), style: 'tableHeader'},
                {'text': $filter('translate')('field'), style: 'tableHeader'},
                {'text': $filter('translate')('unloaded.in'), style: 'tableHeader'},
                {'text': $filter('translate')('unloading.coordinates'), style: 'tableHeader'}]);


            for (var i = 0; i < rep.repDetail.length; i++) {
                var reportDetail = rep.repDetail[i];

                table_body.push([
                    {'text': reportDetail.vehicle_name, style: 'td'},
                    {'text': $filter('date')(reportDetail.time_start * 1000, 'dd.MM.yyyy HH:mm:ss'), style: 'td'},
                    {'text': $filter('date')(reportDetail.time_end * 1000, 'dd.MM.yyyy HH:mm:ss'), style: 'td'},
                    {
                        'text': $filter('translate')($filter('secondsToDateTime')(reportDetail.time_end - reportDetail.time_start)),
                        style: 'td'
                    },
                    {'text': reportDetail.driver_name, style: 'td'},
                    {'text': reportDetail.geozone_name, style: 'td'},
                    {'text': reportDetail.vehicle_assign_name, style: 'td'},
                    {'text': reportDetail.lat + ' ' + reportDetail.lon, style: 'td',},
                ]);


            }

            content_detail.push(
                {
                    color: '#444',
                    margin: [20, 0, 0, 20],
                    table: {
                        widths: [120, 60, 60, 90, 70, 100, 100, 90],
                        heights: 20,
                        body: table_body,
                        alignment: 'center',
                        dontBreakRows: true,
                    },
                })

            var content = {
                info: {
                    title: 'Agrocontrol',
                    author: 'Agrocontrol',
                    subject: '',
                    keywords: '',
                },
                footer: {
                    columns: [
                        {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 20, 5]}
                    ]
                },
                pageMargins: [20, 25, 20, 30],
                extend: 'pdfHtml5',
                pageSize: 'A4',
                pageOrientation: 'landscape',
                content: [
                    {
                        'text': $filter('translate')('reportType') + " " + $filter('lowercase')($filter('translate')('report.byVehicleAssign')),
                        alignment: 'center',
                        bold: 'true'
                    },
                    {
                        'text': $filter('date')(rep.date_start * 1000, 'dd.MM.yyyy HH:mm:ss') + " - " + $filter('date')(rep.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                        alignment: 'center',
                        bold: 'true',
                        margin: [0, 0, 0, 20]
                    },
                    content_detail,
                ],

                styles: {
                    tableHeader: {
                        alignment: 'center',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    td: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8,
                    },
                    header: {
                        fontSize: 9,
                        bold: 'true',
                        color: 'black',
                        alignment: 'center'
                    }
                }
            };


            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });
            } else {
                cratePdf(content);
            }
        }

//-------------
//Контроль выгрузок
        function controlUnloadingPlace(rep, func) {
            var table_body = [];
            var content_detail = [];
            rep.repDetail.sort(function (a, b) {
                if (a.tm < b.tm) {
                    return -1;
                }
                if (a.tm > b.tm) {
                    return 1;
                }
                return 0;
            });

            const regex = /&#179;/gi;

            table_body.push([
                {'text': $filter('translate')('date'), style: 'tableHeader'},
                {'text': $filter('translate')('vehicle.from'), style: 'tableHeader'},
                {'text': $filter('translate')('driver.from'), style: 'tableHeader'},
                {'text': $filter('translate')('vehicle.to'), style: 'tableHeader'},
                {'text': $filter('translate')('driver.to'), style: 'tableHeader'},
                {'text': $filter('translate')('field'), style: 'tableHeader'},
                {'text': $filter('translate')('culture'), style: 'tableHeader'},
                {'text': $filter('translate')('weight.m_kub').replace(regex, '³'), style: 'tableHeader'},
                {'text': $filter('translate')('weight'), style: 'tableHeader'},
                {'text': $filter('translate')('petrol.distance'), style: 'tableHeader'}]);


            for (var i = 0; i < rep.repDetail.length; i++) {
                var detail = rep.repDetail[i];

                table_body.push([
                    {'text': $filter('date')(detail.tm * 1000, 'dd.MM.yyyy HH:mm:ss'), style: 'td'},
                    {'text': detail.vehicle_from_name, style: 'td'},
                    {'text': detail.driver_from_name, style: 'td'},
                    {'text': detail.vehicle_to_name, style: 'td'},
                    {'text': detail.driver_to_name, style: 'td'},
                    {'text': detail.geozone_name, style: 'td'},
                    {'text': $filter('translate')(detail.culture_name), style: 'td'},
                    {'text': $filter('number')(detail.weight_kub, 2), style: 'td'},
                    {'text': $filter('number')(detail.weight, 2), style: 'td'},
                    {'text': $filter('number')(detail.distance, 2), style: 'td',},
                ]);


            }

            content_detail.push(
                {
                    color: '#444',
                    margin: [5, 0, 0, 20],
                    table: {
                        widths: [60, 80, 70, 90, 70, 90, 90, 40, 40, 70],
                        heights: 20,
                        body: table_body,
                        alignment: 'center',
                        dontBreakRows: true,
                    },
                })

            var content = {
                info: {
                    title: 'Agrocontrol',
                    author: 'Agrocontrol',
                    subject: '',
                    keywords: '',
                },
                footer: {
                    columns: [
                        {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 20, 5]}
                    ]
                },
                pageMargins: [20, 25, 20, 30],
                extend: 'pdfHtml5',
                pageSize: 'A4',
                pageOrientation: 'landscape',
                content: [
                    {
                        'text': $filter('translate')('reportType') + " " + $filter('translate')('report.controlUnloadingPlace'),
                        alignment: 'center',
                        bold: 'true'
                    },
                    {'text': rep.vehicle_from_name, alignment: 'center', bold: 'true'},
                    {
                        'text': $filter('date')(rep.date_start * 1000, 'dd.MM.yyyy HH:mm:ss') + " - " + $filter('date')(rep.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                        alignment: 'center',
                        bold: 'true',
                        margin: [0, 0, 0, 20]
                    },
                    content_detail,
                ],

                styles: {
                    tableHeader: {
                        alignment: 'center',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    td: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8,
                    },
                    header: {
                        fontSize: 9,
                        bold: 'true',
                        color: 'black',
                        alignment: 'center'
                    }
                }
            };


            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });
            } else {
                cratePdf(content);
            }
        }

//-----------------
//Выгрузки зерна из бункера
        function byCombine(rep, params, func) {
            var table_body = [];
            var content_detail = [];
            rep.repDetail.sort(function (a, b) {
                if (a.tm < b.tm) {
                    return -1;
                }
                if (a.tm > b.tm) {
                    return 1;
                }
                return 0;
            });

            const regex = /&#179;/gi;

            table_body.push([
                {'text': $filter('translate')('date'), style: 'tableHeader'},
                {'text': $filter('translate')('time.unloading'), style: 'tableHeader'},
                {'text': $filter('translate')('vehicle.from'), style: 'tableHeader'},
                {'text': $filter('translate')('driver.from'), style: 'tableHeader'},
                {'text': $filter('translate')('vehicle.to'), style: 'tableHeader'},
                {'text': $filter('translate')('driver.to'), style: 'tableHeader'},
                {'text': $filter('translate')('field'), style: 'tableHeader'},
                {'text': $filter('translate')('culture').replace(regex, '³'), style: 'tableHeader'},
                {'text': $filter('translate')('comment'), style: 'tableHeader'},
                {'text': $filter('translate')('level.start'), style: 'tableHeader'},
                {'text': $filter('translate')('level.end'), style: 'tableHeader'},
                {'text': $filter('translate')('weight.m_kub').replace(regex, '³'), style: 'tableHeader'},
                {'text': $filter('translate')('weight'), style: 'tableHeader'},
                {'text': $filter('translate')('square'), style: 'tableHeader'},
            ]);


            for (var i = 0; i < rep.repDetail.length; i++) {
                var reportDetail = rep.repDetail[i];

                for (var r = 0; r < reportDetail.length; r++) {
                    var detail = reportDetail[r]

                    table_body.push([
                        {'text': $filter('date')(detail.tm * 1000, 'dd.MM.yyyy HH:mm:ss'), style: 'td'},
                        {
                            'text': $filter('translate')($filter('secondsToDateTime')(detail.tm_end - detail.tm)),
                            style: 'td'
                        },
                        {'text': detail.vehicle_from_name, style: 'td'},
                        {'text': detail.driver_from_name, style: 'td'},
                        {'text': detail.vehicle_to_name, style: 'td'},
                        {'text': detail.driver_to_name, style: 'td'},
                        {'text': detail.geozone_name, style: 'td'},
                        {'text': $filter('translate')(detail.culture_name), style: 'td'},
                        {'text': detail.comment, style: 'td'},
                        {'text': $filter('number')(detail.level_start, 2), style: 'td'},
                        {'text': $filter('number')(detail.level_end, 2), style: 'td'},
                        {'text': $filter('number')(detail.weight_kub, 2), style: 'td'},
                        {'text': $filter('number')(detail.weight_kg, 2), style: 'td'},
                        {'text': $filter('number')(detail.square, 2), style: 'td'}
                    ]);
                }
                table_body.push([
                    {
                        'text': $filter('translate')('total.by') + " " + $filter('date')(reportDetail[0].tm * 1000, 'dd.MM.yyyy'),
                        style: 'header',
                        colSpan: 11,
                        alignment: 'left'
                    },
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {
                        'text': $filter('number')(params.scope.getTotal(reportDetail, 'weight_kub'), 2),
                        style: 'header'
                    },
                    {
                        'text': $filter('number')(params.scope.getTotal(reportDetail, 'weight_kg'), 2),
                        style: 'header'
                    },
                    {'text': $filter('number')(params.scope.getTotal(reportDetail, 'square'), 2), style: 'header'}
                ]);

            }

            table_body.push([
                {'text': $filter('translate')('total.by.period'), style: 'header', colSpan: 11, alignment: 'left'},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {
                    'text': $filter('number')(params.scope.getTotalByArray(rep.repDetail, 'weight_kub'), 2),
                    style: 'header'
                },
                {
                    'text': $filter('number')(params.scope.getTotalByArray(rep.repDetail, 'weight_kg'), 2),
                    style: 'header'
                },
                {
                    'text': $filter('number')(params.scope.getTotalByArray(rep.repDetail, 'square'), 2),
                    style: 'header'
                }
            ]);

            content_detail.push(
                {
                    color: '#444',
                    margin: [0, 0, 0, 20],
                    table: {
                        widths: [40, 45, 55, 50, 70, 60, 50, 45, 40, 50, 45, 40, 50, 37],
                        heights: 20,
                        body: table_body,
                        alignment: 'center',
                        dontBreakRows: true,
                    },
                })

            var content = {
                info: {
                    title: 'Agrocontrol',
                    author: 'Agrocontrol',
                    subject: '',
                    keywords: '',
                },
                footer: {
                    columns: [
                        {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 20, 5]}
                    ]
                },
                pageMargins: [20, 25, 20, 30],
                extend: 'pdfHtml5',
                pageSize: 'A4',
                pageOrientation: 'landscape',
                content: [
                    {
                        'text': $filter('translate')('reportType') + " " + $filter('lowercase')($filter('translate')('report.byCombine')) + ': ' + rep.vehicle_from_name,
                        alignment: 'center',
                        bold: 'true'
                    },
                    {
                        'text': $filter('date')(rep.date_start * 1000, 'dd.MM.yyyy HH:mm:ss') + " - " + $filter('date')(rep.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                        alignment: 'center',
                        bold: 'true',
                        margin: [0, 0, 0, 20]
                    },
                    content_detail,
                ],

                styles: {
                    tableHeader: {
                        alignment: 'center',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    td: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8,
                        fillColor: '#F2DEDE',
                    },
                    header: {
                        fontSize: 9,
                        bold: 'true',
                        color: 'black',
                        alignment: 'center'
                    }
                }
            };


            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });
            } else {
                cratePdf(content);
            }
        }

//---------------------
//По хозяйству
        function byFarmDevice(rep, params, func) {
            var table_body = [];
            var content_detail = [];

            rep.repDetail.sort(function (a, b) {
                if (a.tm < b.tm) {
                    return -1;
                }
                if (a.tm > b.tm) {
                    return 1;
                }
                return 0;
            });

            table_body.push([
                {'text': $filter('translate')('date'), style: 'tableHeader'},
                {'text': $filter('translate')('vehicle'), style: 'tableHeader'},
                {'text': $filter('translate')('driver'), style: 'tableHeader'},
                {'text': $filter('translate')('culture'), style: 'tableHeader'},
                {'text': $filter('translate')('weight.full'), style: 'tableHeader'},
                {'text': $filter('translate')('weight.tare'), style: 'tableHeader'},
                {'text': $filter('translate')('weight.netto'), style: 'tableHeader'},
                {'text': $filter('translate')('humidity'), style: 'tableHeader'},
                {'text': $filter('translate')('comment'), style: 'tableHeader'},
            ]);

            for (var i = 0; i < rep.repDetail.length; i++) {
                var reportDetail = rep.repDetail[i];
                for (var r = 0; r < reportDetail.length; r++) {
                    var detail = reportDetail[r];
                    table_body.push([
                        {'text': $filter('date')(detail.tm * 1000, 'dd.MM.yyyy HH:mm:ss'), style: 'td'},
                        {'text': detail.vehicle_name, style: 'td'},
                        {'text': detail.driver_name, style: 'td'},
                        {'text': $filter('translate')(detail.culture_name), style: 'td'},
                        {'text': $filter('number')(detail.weightFull, 0), style: 'td'},
                        {'text': $filter('number')(detail.weightTare, 0), style: 'td'},
                        {'text': $filter('number')(detail.weightNetto, 0), style: 'td'},
                        {'text': $filter('number')(detail.humidity, 2), style: 'td'},
                        {'text': detail.comment, style: 'td'}
                    ]);

                    const regex = /&#179;/gi;
                    table_body.push([
                        {'text': '', border: [false, false, true, false]},
                        {'text': $filter('translate')('date'), style: 'tableHeader'},
                        {'text': $filter('translate')('vehicle'), style: 'tableHeader'},
                        {'text': $filter('translate')('driver'), style: 'tableHeader'},
                        {'text': $filter('translate')('field'), style: 'tableHeader'},
                        {'text': $filter('translate')('culture'), style: 'tableHeader'},
                        {'text': $filter('translate')('weight.m_kub').replace(regex, '³'), style: 'tableHeader'},
                        {'text': $filter('translate')('weight'), style: 'tableHeader'},
                        {'text': $filter('translate')('time.unloading'), style: 'tableHeader'},
                    ]);

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

                        table_body.push([
                            {'text': '', border: [false, false, true, false]},
                            {'text': $filter('date')(unloading.tm * 1000, 'dd.MM.yyyy HH:mm:ss'), style: 'td'},
                            {'text': unloading.vehicle_from_name, style: 'td'},
                            {'text': unloading.driver_from_name, style: 'td'},
                            {'text': unloading.geozone_name, style: 'td'},
                            {'text': $filter('translate')(unloading.culture_name), style: 'td'},
                            {'text': $filter('number')(unloading.weight_kub, 0), style: 'td'},
                            {'text': $filter('number')(unloading.weight_kg, 0), style: 'td'},
                            {'text': $filter('secondsToDateTime')(unloading.tm_end - unloading.tm), style: 'td'}
                        ]);
                    }
                    if (r != reportDetail.length - 1) {
                        table_body.push([
                            {'text': '', style: 'header', colSpan: 9, border: [false, false, false, false]},
                            {},
                            {},
                            {},
                            {},
                            {},
                            {},
                            {},
                            {'text': '', border: [false, false, false, false]}
                        ]);
                    }
                }

                table_body.push([
                    {
                        'text': $filter('translate')('total.by') + " " + $filter('date')(reportDetail[0].tm * 1000, 'dd.MM.yyyy'),
                        style: 'header',
                        colSpan: 6
                    },
                    {},
                    {},
                    {},
                    {},
                    {},
                    {
                        'text': $filter('number')(params.scope.getTotal(reportDetail, 'weightNetto'), 0),
                        style: 'header',
                        alignment: 'center'
                    },
                    {'text': '', border: [true, true, false, true]},
                    {'text': '', border: [false, true, true, true]}
                ]);

                if (i != rep.repDetail.length - 1) {
                    table_body.push([
                        {'text': '', style: 'header', colSpan: 9, border: [false, false, false, false]},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {'text': '', border: [false, false, false, false]}
                    ]);
                }
            }

            table_body.push([
                {'text': $filter('translate')('total.by.period'), style: 'header', colSpan: 6},
                {},
                {},
                {},
                {},
                {},
                {
                    'text': $filter('number')(params.scope.getTotalByArray(rep.repDetail, 'weightNetto', 0)),
                    style: 'header',
                    alignment: 'center'
                },
                {'text': '', border: [true, true, false, true]},
                {'text': '', border: [false, true, true, true]}
            ]);

            content_detail.push(
                {
                    color: '#444',
                    margin: [0, 0, 0, 20],
                    table: {
                        widths: [40, 70, 70, 50, 50, 45, 50, 50, 60],
                        heights: 20,
                        body: table_body,
                        alignment: 'center',
                        dontBreakRows: true,
                    },
                })

            var content = {
                info: {
                    title: 'Agrocontrol',
                    author: 'Agrocontrol',
                    subject: '',
                    keywords: '',
                },
                footer: {
                    columns: [
                        {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 20, 5]}
                    ]
                },
                pageMargins: [15, 25, 15, 30],
                extend: 'pdfHtml5',
                pageSize: 'A4',
                content: [
                    {
                        'text': $filter('translate')('reportType') + " " + $filter('lowercase')($filter('translate')('report.byFarmDevice')) + ': ' + rep.farm_name,
                        alignment: 'center',
                        bold: 'true'
                    },
                    {
                        'text': $filter('date')(rep.date_start * 1000, 'dd.MM.yyyy HH:mm:ss') + " - " + $filter('date')(rep.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                        alignment: 'center',
                        bold: 'true',
                        margin: [0, 0, 0, 20]
                    },
                    content_detail,
                ],
                styles: {
                    tableHeader: {
                        alignment: 'center',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    td: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8
                    },
                    header: {
                        fontSize: 9,
                        bold: 'true',
                        color: 'black',
                    }
                }
            };

            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });
            } else {
                cratePdf(content);
            }
        }

//--------------------
//Урожайность
        function unloadingByField(rep, func) {
            var table_body = [];
            var content_detail = [];

            rep.repDetail.sort(function (a, b) {
                if (a.geozone_name.substr(0, 1).toUpperCase() == 'І' || a.geozone_name.substr(0, 1).toUpperCase() == 'Є' || a.geozone_name.substr(0, 1).toUpperCase() == 'Ї') {
                    return 1;
                }

                if (b.geozone_name.substr(0, 1).toUpperCase() == 'І' || b.geozone_name.substr(0, 1).toUpperCase() == 'Є' || b.geozone_name.substr(0, 1).toUpperCase() == 'Ї') {
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


            table_body.push([
                {'text': $filter('translate')('field'), style: 'tableHeader', rowSpan: 2},
                {'text': $filter('translate')('culture'), style: 'tableHeader', rowSpan: 2},
                {'text': $filter('translate')('seed'), style: 'tableHeader', rowSpan: 2},
                {'text': $filter('translate')('plan'), style: 'tableHeader', colSpan: 3},
                {},
                {},
                {'text': $filter('translate')('fact'), style: 'tableHeader', colSpan: 4},
                {},
                {},
                {},
                {'text': $filter('translate')('byHarvestModule'), style: 'tableHeader', colSpan: 2},
                {},
                {'text': $filter('translate')('harvest.date'), style: 'tableHeader', rowSpan: 2},
            ]);

            table_body.push([
                {},
                {},
                {},
                {'text': $filter('translate')('productivity'), style: 'tableHeader'},
                {'text': $filter('translate')('square'), style: 'tableHeader'},
                {'text': $filter('translate')('gross.harvest'), style: 'tableHeader'},
                {'text': $filter('translate')('productivity'), style: 'tableHeader'},
                {'text': $filter('translate')('square'), style: 'tableHeader'},
                {'text': $filter('translate')('gross.harvest'), style: 'tableHeader'},
                {'text': $filter('translate')('humidity'), style: 'tableHeader'},
                {'text': $filter('translate')('productivity'), style: 'tableHeader'},
                {'text': $filter('translate')('gross.harvest'), style: 'tableHeader'},
                {},
            ]);

            for (var i = 0; i < rep.repDetail.length; i++) {
                var data = rep.repDetail[i];

                table_body.push([
                    {'text': data.geozone_name, style: 'td'},
                    {'text': $filter('translate')(data.culture_name), style: 'td'},
                    {'text': $filter('translate')(data.seed_name), style: 'td'},
                    {'text': $filter('number')(data.plan_productivity, 2), style: 'td'},
                    {'text': $filter('number')(data.plan_square, 2), style: 'td'},
                    {'text': $filter('number')(data.plan_gross_harvest, 2), style: 'td'},
                    {'text': $filter('number')(data.fact_productivity, 2), style: 'td'},
                    {'text': $filter('number')(data.fact_square, 2), style: 'td'},
                    {'text': $filter('number')(data.fact_gross_harvest, 2), style: 'td'},
                    {'text': $filter('number')(data.fact_humidity, 2), style: 'td'},
                    {'text': $filter('number')(data.count_fact_productivity, 2), style: 'td'},
                    {'text': $filter('number')(data.count_fact_gross_harvest, 2), style: 'td'},
                    {'text': $filter('date')(data.date_harvest, 'dd.MM.yyyy'), style: 'td'}
                ]);

            }


            content_detail.push(
                {
                    color: '#444',
                    margin: [0, 0, 0, 20],
                    table: {
                        widths: [80, 75, 70, 55, 39, 45, 55, 39, 45, 48, 55, 45, 43],
                        heights: 20,
                        body: table_body,
                        alignment: 'center',
                        dontBreakRows: true,
                    },
                })

            var content = {
                info: {
                    title: 'Agrocontrol',
                    author: 'Agrocontrol',
                    subject: '',
                    keywords: '',
                },
                footer: {
                    columns: [
                        {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 20, 5]}
                    ]
                },
                pageMargins: [15, 25, 15, 30],
                extend: 'pdfHtml5',
                pageSize: 'A4',
                pageOrientation: 'landscape',
                content: [
                    {
                        'text': $filter('translate')('reportType') + " " + $filter('lowercase')($filter('translate')('report.unloadingByField')),
                        alignment: 'center',
                        bold: 'true'
                    },
                    {
                        'text': $filter('date')(rep.date_rep * 1000, 'dd.MM.yyyy HH:mm:ss'),
                        alignment: 'center',
                        bold: 'true',
                        margin: [0, 0, 0, 20]
                    },
                    content_detail,
                ],

                styles: {
                    tableHeader: {
                        alignment: 'center',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    td: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8
                    },
                    header: {
                        fontSize: 9,
                        bold: 'true',
                        color: 'black',
                    }
                }
            };


            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });
            } else {
                cratePdf(content);
            }
        }

//--------------------
//По перегрузчику
        function byOverloader(rep, params, func) {
            var table_body = [];
            var table1_body = [];
            var table2_body = [];
            var content_detail = [];

            const regex = /&#179;/gi;

            table_body.push([
                {'text': $filter('translate')('unloading.toOverloader.cnt'), style: 'tableHeader'},
                {
                    'text': ($filter('translate')('unloading.toOverloader.kub')).replace(regex, '³'),
                    style: 'tableHeader'
                },
                {'text': $filter('translate')('unloading.toOverloader.kg'), style: 'tableHeader'},
                {'text': $filter('translate')('unloading.fromOverloader.cnt'), style: 'tableHeader'},
                {
                    'text': ($filter('translate')('unloading.fromOverloader.kub')).replace(regex, '³'),
                    style: 'tableHeader'
                },
                {'text': $filter('translate')('unloading.fromOverloader.kg'), style: 'tableHeader'}]);

            table_body.push([
                {'text': rep.harvestUnloadingToList.length, style: 'td'},
                {
                    'text': $filter('number')(params.scope.getTotal(rep.harvestUnloadingToList, 'weight_kub'), 2),
                    style: 'td'
                },
                {
                    'text': $filter('number')(params.scope.getTotal(rep.harvestUnloadingToList, 'weight_kg'), 2),
                    style: 'td'
                },
                {'text': rep.harvestUnloadingFromList.length, style: 'td'},
                {
                    'text': $filter('number')(params.scope.getTotal(rep.harvestUnloadingFromList, 'weight_kub'), 2),
                    style: 'td'
                },
                {
                    'text': $filter('number')(params.scope.getTotal(rep.harvestUnloadingFromList, 'weight_kg'), 2),
                    style: 'td'
                }]);


            content_detail.push(
                {
                    color: '#444',
                    margin: [0, 0, 0, 20],
                    table: {
                        widths: [124, 124, 124, 124, 124, 124],
                        heights: 20,
                        body: table_body,
                        alignment: 'center',
                        dontBreakRows: true,
                    },
                })

            table1_body.push([
                {'text': $filter('translate')('date'), style: 'tableHeader'},
                {'text': $filter('translate')('time.unloading'), style: 'tableHeader'},
                {'text': $filter('translate')('vehicle.from'), style: 'tableHeader'},
                {'text': $filter('translate')('driver.from'), style: 'tableHeader'},
                {'text': $filter('translate')('vehicle.type.overloader'), style: 'tableHeader'},
                {'text': $filter('translate')('field'), style: 'tableHeader'},
                {'text': $filter('translate')('culture'), style: 'tableHeader'},
                {'text': ($filter('translate')('weight.m_kub')).replace(regex, '³'), style: 'tableHeader'},
                {'text': $filter('translate')('weight'), style: 'tableHeader'},
                {'text': $filter('translate')('comment'), style: 'tableHeader'}]);

            for (var i = 0; i < rep.harvestUnloadingToList.length; i++) {
                var detail = rep.harvestUnloadingToList[i];
                table1_body.push([
                    {'text': $filter('date')(detail.tm * 1000, 'dd.MM.yyyy HH:mm:ss'), style: 'td'},
                    {
                        'text': $filter('secondsToDateTime')(detail.tm_end - detail.tm),
                        style: 'td'
                    },
                    {'text': detail.vehicle_from_name, style: 'td'},
                    {'text': detail.driver_from_name, style: 'td'},
                    {
                        'text': detail.vehicle_to_name,
                        style: 'td'
                    },
                    {'text': detail.geozone_name, style: 'td'},
                    {'text': $filter('translate')(detail.culture_name), style: 'td'},
                    {'text': $filter('number')(detail.weight_kub, 2), style: 'td'},
                    {'text': $filter('number')(detail.weight_kg, 2), style: 'td'},
                    {'text': detail.comment, style: 'td'}]);
            }

            table1_body.push([
                {'text': $filter('translate')('total.by.period'), style: 'header', colSpan: 7},
                {},
                {},
                {},
                {},
                {},
                {},
                {
                    'text': $filter('number')(params.scope.getTotal(rep.harvestUnloadingToList, 'weight_kub'), 2),
                    style: 'header',
                    alignment: 'center'
                },
                {
                    'text': $filter('number')(params.scope.getTotal(rep.harvestUnloadingToList, 'weight_kg'), 2),
                    style: 'header',
                    alignment: 'center'
                },
                {}
            ]);

            content_detail.push(
                {
                    'text': $filter('translate')('unloading.toOverloader'),
                    bold: 'true',
                    alignment: 'center',
                    margin: [0, 0, 0, 15]
                },
                {
                    color: '#444',
                    margin: [0, 0, 0, 20],
                    table: {
                        widths: [50, 50, 90, 94, 94, 90, 60, 57, 55, 70],
                        heights: 20,
                        body: table1_body,
                        alignment: 'center',
                        dontBreakRows: true,
                    },
                })

            table2_body.push([
                {'text': $filter('translate')('date'), style: 'tableHeader'},
                {
                    'text': $filter('translate')('time.unloading'),
                    style: 'tableHeader'
                },
                {'text': $filter('translate')('vehicle.type.overloader'), style: 'tableHeader'},
                {'text': $filter('translate')('vehicle.to'), style: 'tableHeader'},
                {
                    'text': $filter('translate')('driver.to'),
                    style: 'tableHeader'
                },
                {'text': $filter('translate')('field'), style: 'tableHeader'},
                {'text': $filter('translate')('culture'), style: 'tableHeader'},
                {'text': ($filter('translate')('weight.m_kub')).replace(regex, '³'), style: 'tableHeader'},
                {'text': $filter('translate')('weight'), style: 'tableHeader'},
                {'text': $filter('translate')('comment'), style: 'tableHeader'}]);

            for (var i = 0; i < rep.harvestUnloadingFromList.length; i++) {
                var detail = rep.harvestUnloadingFromList[i];
                table2_body.push([
                    {'text': $filter('date')(detail.tm * 1000, 'dd.MM.yyyy HH:mm:ss'), style: 'td'},
                    {
                        'text': $filter('secondsToDateTime')(detail.tm_end - detail.tm),
                        style: 'td'
                    },
                    {'text': detail.vehicle_from_name, style: 'td'},
                    {'text': detail.vehicle_to_name, style: 'td'},
                    {'text': detail.driver_to_name, style: 'td'},
                    {'text': detail.geozone_name, style: 'td'},
                    {'text': $filter('translate')(detail.culture_name), style: 'td'},
                    {'text': $filter('number')(detail.weight_kub, 2), style: 'td'},
                    {'text': $filter('number')(detail.weight_kg, 2), style: 'td'},
                    {'text': detail.comment, style: 'td'},]);
            }

            table2_body.push([
                {'text': $filter('translate')('total.by.period'), style: 'header', colSpan: 7},
                {},
                {},
                {},
                {},
                {},
                {},
                {
                    'text': $filter('number')(params.scope.getTotal(rep.harvestUnloadingFromList, 'weight_kub'), 2),
                    style: 'header',
                    alignment: 'center'
                },
                {
                    'text': $filter('number')(params.scope.getTotal(rep.harvestUnloadingFromList, 'weight_kg'), 2),
                    style: 'header',
                    alignment: 'center'
                },
                {}]);

            content_detail.push(
                {
                    'text': $filter('translate')('unloading.fromOverloader'),
                    bold: 'true',
                    alignment: 'center',
                    margin: [0, 0, 0, 15]
                },
                {
                    color: '#444',
                    margin: [0, 0, 0, 20],
                    table: {
                        widths: [50, 50, 90, 94, 94, 90, 60, 57, 55, 70],
                        heights: 20,
                        body: table2_body,
                        alignment: 'center',
                        dontBreakRows: true,
                    },
                })

            var content = {
                info: {
                    title: 'Agrocontrol',
                    author: 'Agrocontrol',
                    subject: '',
                    keywords: '',
                },
                footer: {
                    columns: [
                        {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 20, 5]}
                    ]
                },
                pageMargins: [20, 25, 20, 30],
                extend: 'pdfHtml5',
                pageSize: 'A4',
                pageOrientation: 'landscape',
                content: [
                    {
                        'text': $filter('translate')('reportType') + " " + $filter('lowercase')($filter('translate')('report.byOverloader')),
                        alignment: 'center',
                        bold: 'true'
                    },
                    {
                        'text': $filter('date')(rep.date_start * 1000, 'dd.MM.yyyy HH:mm:ss') + " - " + $filter('date')(rep.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                        alignment: 'center',
                        bold: 'true',
                        margin: [0, 0, 0, 20]
                    },
                    content_detail,
                ],

                styles: {
                    tableHeader: {
                        alignment: 'center',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    td: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8
                    },
                    header: {
                        fontSize: 9,
                        bold: 'true',
                        color: 'black',
                    }
                }
            };


            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });
            } else {
                cratePdf(content);
            }
        }

//-------------------
//По перегрузчикам(сводный)
        function byOverloaderConsolidated(rep, func) {
            var table_body = [];
            var content_detail = [];

            const regex = /&#179;/gi;

            table_body.push([
                {'text': $filter('translate')('vehicle.type.overloader'), style: 'tableHeader'},
                {'text': $filter('translate')('time.unloading'), style: 'tableHeader'},
                {'text': $filter('translate')('time.unloading1'), style: 'tableHeader'},
                {'text': $filter('translate')('vehicle.type.combine'), style: 'tableHeader'},
                {'text': $filter('translate')('driver'), style: 'tableHeader'},
                {'text': $filter('translate')('unloading.geozone'), style: 'tableHeader'},
                {'text': $filter('translate')('culture'), style: 'tableHeader'},
                {'text': ($filter('translate')('weight.m_kub')).replace(regex, '³'), style: 'tableHeader'},
                {'text': $filter('translate')('weight.netto'), style: 'tableHeader'},
                {'text': $filter('translate')('unloading.toOverloader.cnt'), style: 'tableHeader'}]);


            for (var i = 0; i < rep.dataList.length; i++) {
                var data = rep.dataList[i]
                table_body.push([
                    {
                        'text': data.overloader_name,
                        style: 'td_1',
                        alignment: 'left',
                        border: [true, true, false, true],
                        colSpan: 7,
                    },
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {'text': $filter('number')(data.weight_kub, 1), style: 'td_1'},
                    {'text': $filter('number')(data.weight_kg, 0), style: 'td_1'},
                    {'text': data.harvestUnloadingList.length, style: 'td_1'}]);

                for (var h = 0; h < data.harvestUnloadingList.length; h++) {
                    var unloading = data.harvestUnloadingList[h];
                    table_body.push([
                        {},
                        {'text': $filter('date')(unloading.tm * 1000, 'dd.MM.yyyy HH:mm:ss'), style: 'td'},
                        {'text': $filter('secondsToDateTime')(unloading.tm_end - unloading.tm), style: 'td'},
                        {'text': unloading.vehicle_from_name, style: 'td'},
                        {'text': unloading.driver_from_name, style: 'td'},
                        {'text': unloading.geozone_name, style: 'td'},
                        {'text': $filter('translate')(unloading.culture_name), style: 'td'},
                        {'text': $filter('number')(unloading.weight_kub, 1), style: 'td'},
                        {'text': $filter('number')(unloading.weight_kg, 0), style: 'td'},
                        {}
                    ]);

                }
            }

            content_detail.push(
                {
                    color: '#444',
                    margin: [0, 0, 0, 20],
                    table: {
                        widths: [80, 50, 63, 120, 90, 80, 74, 47, 47, 60],
                        heights: 20,
                        body: table_body,
                        alignment: 'center',
                        dontBreakRows: true,
                    },
                })

            if (rep.overloader_name) {
                var overloader = rep.overloader_name
            } else {
                var overloader = ''
            }

            var content = {
                info: {
                    title: 'Agrocontrol',
                    author: 'Agrocontrol',
                    subject: '',
                    keywords: '',
                },
                footer: {
                    columns: [
                        {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 20, 5]}
                    ]
                },
                pageMargins: [20, 25, 20, 30],
                extend: 'pdfHtml5',
                pageSize: 'A4',
                pageOrientation: 'landscape',
                content: [
                    {
                        'text': $filter('translate')('reportType') + " " + $filter('lowercase')($filter('translate')('report.byOverloaderConsolidated')) + ": " + overloader,
                        alignment: 'center',
                        bold: 'true'
                    },
                    {
                        'text': $filter('date')(rep.date_start * 1000, 'dd.MM.yyyy HH:mm:ss') + " - " + $filter('date')(rep.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                        alignment: 'center',
                        bold: 'true',
                        margin: [0, 0, 0, 20]
                    },
                    content_detail,
                ],

                styles: {
                    tableHeader: {
                        alignment: 'center',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    td: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8
                    },
                    header: {
                        fontSize: 9,
                        bold: 'true',
                        color: 'black',
                    },
                    td_1: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8,
                        fillColor: '#DCDCDC',
                    }
                }
            };


            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });
            } else {
                cratePdf(content);
            }
        }

//--------------------
//Доставка зерна на весовую/элеватор
        function grainToFarm(rep, func) {
            var table_body = [];
            var content_detail = [];
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

            const regex = /&#179;/gi;

            table_body.push([
                {'text': $filter('translate')('unloading.date'), style: 'tableHeader'},
                {'text': $filter('translate')('time.start.going'), style: 'tableHeader'},
                {'text': $filter('translate')('unloading.geozone'), style: 'tableHeader'},
                {'text': $filter('translate')('culture'), style: 'tableHeader'},
                {'text': $filter('translate')('farm.date'), style: 'tableHeader'},
                {'text': $filter('translate')('farm.elevator'), style: 'tableHeader'},
                {'text': ($filter('translate')('weight.m_kub')).replace(regex, '³'), style: 'tableHeader'},
                {'text': $filter('translate')('weight.netto'), style: 'tableHeader'},
                {'text': $filter('translate')('vehicle'), style: 'tableHeader'},
                {'text': $filter('translate')('driver'), style: 'tableHeader'},
                {'text': ($filter('translate')('avgspeed')).replace(regex, '³'), style: 'tableHeader'},
                {'text': $filter('translate')('maxspeed'), style: 'tableHeader'},
                {'text': $filter('translate')('distance'), style: 'tableHeader'},
                {'text': $filter('translate')('time.grain.going'), style: 'tableHeader'}]);

            for (var i = 0; i < rep.repData.length; i++) {
                var data = rep.repData[i]

                if (data.vehicle) {
                    var vehicle = {'text': data.vehicle.name, style: 'td'}
                } else {
                    var vehicle = {'text': '', style: 'td'}
                }

                if (data.driver) {
                    var driver = {'text': data.driver.name, style: 'td'}
                } else {
                    var driver = {'text': '', style: 'td'}
                }

                if (data.tmFarm) {
                    var tmFarm = {'text': $filter('date')(data.tmFarm * 1000, 'dd.MM.yyyy HH:mm:ss'), style: 'td'}
                } else {
                    var tmFarm = {'text': '', style: 'td'}
                }


                table_body.push([
                    {'text': $filter('date')(data.tmUnloading * 1000, 'dd.MM.yyyy HH:mm:ss'), style: 'td'},
                    {'text': $filter('date')(data.time_start_going * 1000, 'dd.MM.yyyy HH:mm:ss'), style: 'td'},
                    {'text': data.geozoneUnloading ? data.geozoneUnloading.name : '', style: 'td'},
                    {'text': $filter('translate')(""), style: 'td'},
                    tmFarm,
                    {'text': data.farm_name, style: 'td'},
                    {'text': $filter('number')(data.weight_kub, 1), style: 'td'},
                    {'text': $filter('number')(data.weight, 0), style: 'td'},
                    vehicle,
                    driver,
                    {'text': $filter('number')(data.avg_speed, 0), style: 'td'},
                    {'text': $filter('number')(data.max_speed, 0), style: 'td'},
                    {'text': $filter('number')(data.distance, 2), style: 'td'},
                    {'text': $filter('secondsToDateTime')(data.time_going), style: 'td'}]);

                for (var h = 0; h < data.detailUnloadingList.length; h++) {
                    var unloading = data.detailUnloadingList[h];
                    table_body.push([
                        {
                            'text': $filter('date')(unloading.harvestUnloading.tm * 1000, 'dd.MM.yyyy HH:mm:ss'),
                            style: 'td',
                            colSpan: 2
                        },
                        {},
                        {'text': unloading.harvestUnloading.geozone_name, style: 'td'},
                        {'text': $filter('translate')(unloading.harvestUnloading.culture_name), style: 'td'},
                        {},
                        {},
                        {'text': $filter('number')(unloading.harvestUnloading.weight_kub, 1), style: 'td'},
                        {'text': $filter('number')(unloading.harvestUnloading.weight_kg, 0), style: 'td'},
                        {'text': unloading.harvestUnloading.vehicle_from_name, style: 'td'},
                        {'text': unloading.harvestUnloading.driver_from_name, style: 'td', colSpan: 4},
                        {},
                        {},
                        {},
                        {
                            'text': $filter('secondsToDateTime')(unloading.harvestUnloading.tm_end - unloading.harvestUnloading.tm),
                            style: 'td'
                        }]);

                    for (var u = 0; u < unloading.unloadingToOverloaderList.length; u++) {
                        var toOverloader = unloading.unloadingToOverloaderList[u];
                        table_body.push([
                            {
                                'text': $filter('date')(toOverloader.tm * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                style: 'td',
                                alignment: 'right',
                                colSpan: 2
                            },
                            {},
                            {'text': toOverloader.geozone_name, style: 'td'},
                            {'text': $filter('translate')(toOverloader.culture_name), style: 'td'},
                            {},
                            {},
                            {'text': $filter('number')(toOverloader.weight_kub, 1), style: 'td'},
                            {'text': $filter('number')(toOverloader.weight_kg, 0), style: 'td'},
                            {'text': toOverloader.vehicle_from_name, style: 'td'},
                            {'text': toOverloader.driver_from_name, style: 'td', colSpan: 4},
                            {},
                            {},
                            {},
                            {
                                'text': $filter('secondsToDateTime')(toOverloader.tm_end - toOverloader.tm),
                                style: 'td'
                            }]);

                    }


                }
                table_body.push([
                    {
                        'text': '',
                        colSpan: 14,
                        border: [false, false, false, false]
                    },
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {
                        'text': '',
                        style: 'td',
                        border: [false, false, false, false]
                    }]);
            }

            content_detail.push(
                {
                    color: '#444',
                    margin: [0, 0, 0, 20],
                    table: {
                        widths: [45, 45, 60, 60, 45, 48, 35, 47, 75, 55, 40, 50, 33, 45],
                        heights: 20,
                        body: table_body,
                        alignment: 'center',
                        dontBreakRows: true,
                    },
                })

            var content = {
                info: {
                    title: 'Agrocontrol',
                    author: 'Agrocontrol',
                    subject: '',
                    keywords: '',
                },
                footer: {
                    columns: [
                        {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 20, 5]}
                    ]
                },
                pageMargins: [15, 25, 15, 30],
                extend: 'pdfHtml5',
                pageSize: 'A4',
                pageOrientation: 'landscape',
                content: [
                    {
                        'text': $filter('translate')('reportType') + " " + $filter('lowercase')($filter('translate')('report.grainToFarm')) + ": " + rep.farm_name,
                        alignment: 'center',
                        bold: 'true'
                    },
                    {
                        'text': $filter('date')(rep.date_start * 1000, 'dd.MM.yyyy HH:mm:ss') + " - " + $filter('date')(rep.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                        alignment: 'center',
                        bold: 'true',
                        margin: [0, 0, 0, 20]
                    },
                    content_detail,
                ],

                styles: {
                    tableHeader: {
                        alignment: 'center',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    td: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8
                    },
                    header: {
                        fontSize: 9,
                        bold: 'true',
                        color: 'black',
                    }
                }
            };


            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });
            } else {
                cratePdf(content);
            }
        }

//---------------------
//Доставка зерна на весовую/элеватор(сводный)
        function grainToFarmConsolidated(rep, func) {
            var table_body = [];
            var content_detail = [];

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

            const regex = /&#179;/gi;

            table_body.push([
                {'text': $filter('translate')('unloading.date'), style: 'tableHeader'},
                {'text': $filter('translate')('time.start.going'), style: 'tableHeader'},
                {'text': $filter('translate')('unloading.geozone'), style: 'tableHeader'},
                {'text': $filter('translate')('culture'), style: 'tableHeader'},
                {'text': $filter('translate')('farm.date'), style: 'tableHeader'},
                {'text': $filter('translate')('farm.elevator'), style: 'tableHeader'},
                {'text': ($filter('translate')('weight.m_kub')).replace(regex, '³'), style: 'tableHeader'},
                {'text': $filter('translate')('weight.netto'), style: 'tableHeader'},
                {'text': $filter('translate')('vehicle'), style: 'tableHeader'},
                {'text': $filter('translate')('driver'), style: 'tableHeader'},
                {'text': ($filter('translate')('avgspeed')).replace(regex, '³'), style: 'tableHeader'},
                {'text': $filter('translate')('maxspeed'), style: 'tableHeader'},
                {'text': $filter('translate')('distance'), style: 'tableHeader'},
                {'text': $filter('translate')('time.grain.going'), style: 'tableHeader'}]);


            for (var i = 0; i < rep.repData.length; i++) {
                var data = rep.repData[i]
                var geozones = [];
                var tmFarm_list = [];
                var m_kub = [];
                for (var z = 0; z < data.geozoneList.length; z++) {
                    var geo = data.geozoneList[z]
                    geozones.push([{'text': geo, style: 'td'}])
                }

                if (data.tmFarm !== null) {
                    tmFarm_list.push([
                        {'text': $filter('date')(data.tmFarm * 1000, 'dd.MM.yyyy HH:mm:ss'), style: 'td'}])
                }

                if (data.weight_kub > 0) {
                    m_kub.push([{'text': $filter('number')(data.weight_kub, 1), style: 'td'}])
                }

                if (data.geozoneUnloading) {
                    if (data.geozoneUnloading.culture) {
                        var culture = {
                            'text': $filter('translate')(data.geozoneUnloading.culture.name),
                            style: 'td'
                        }
                    } else {
                        var culture = {'text': '', style: 'td'}
                    }
                } else {
                    var culture = {'text': '', style: 'td'}
                }

                if (data.vehicle) {
                    var vehicle = {'text': data.vehicle.name, style: 'td'}
                } else {
                    var vehicle = {'text': '', style: 'td'}
                }

                if (data.driver) {
                    var driver = {'text': data.driver.name, style: 'td'}
                } else {
                    var driver = {'text': '', style: 'td'}
                }


                table_body.push([
                    {'text': $filter('date')(data.tmUnloading * 1000, 'dd.MM.yyyy HH:mm:ss'), style: 'td'},
                    {'text': $filter('date')(data.time_start_going * 1000, 'dd.MM.yyyy HH:mm:ss'), style: 'td'},
                    geozones,
                    culture,
                    tmFarm_list,
                    {'text': data.farm_name, style: 'td'},
                    m_kub,
                    {'text': $filter('number')(data.weight, 0), style: 'td'},
                    {'text': vehicle, style: 'td'},
                    {'text': driver, style: 'td'},
                    {'text': $filter('number')(data.avg_speed, 0), style: 'td'},
                    {'text': $filter('number')(data.max_speed, 0), style: 'td'},
                    {'text': $filter('number')(data.distance, 2), style: 'td'},
                    {'text': $filter('secondsToDateTime')(data.time_going), style: 'td'}]);
            }

            content_detail.push(
                {
                    color: '#444',
                    margin: [0, 0, 0, 20],
                    table: {
                        widths: [45, 45, 60, 60, 45, 48, 35, 47, 75, 55, 40, 50, 33, 45],
                        heights: 20,
                        body: table_body,
                        alignment: 'center',
                        dontBreakRows: true,
                    },
                })

            var content = {
                info: {
                    title: 'Agrocontrol',
                    author: 'Agrocontrol',
                    subject: '',
                    keywords: '',
                },
                footer: {
                    columns: [
                        {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 20, 5]}
                    ]
                },
                pageMargins: [15, 25, 15, 30],
                extend: 'pdfHtml5',
                pageSize: 'A4',
                pageOrientation: 'landscape',
                content: [
                    {
                        'text': $filter('translate')('reportType') + " " + $filter('lowercase')($filter('translate')('report.grainToFarm.consolidated')) + ": " + rep.farm_name,
                        alignment: 'center',
                        bold: 'true'
                    },
                    {
                        'text': $filter('date')(rep.date_start * 1000, 'dd.MM.yyyy HH:mm:ss') + " - " + $filter('date')(rep.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                        alignment: 'center',
                        bold: 'true',
                        margin: [0, 0, 0, 20]
                    },
                    content_detail,
                ],

                styles: {
                    tableHeader: {
                        alignment: 'center',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    td: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8
                    },
                    header: {
                        fontSize: 9,
                        bold: 'true',
                        color: 'black',
                    }
                }
            };


            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });
            } else {
                cratePdf(content);
            }
        }

//----------------------
//По полю
        function byField(rep, func) {
            var table_body = [];
            var table1_body = [];
            var content_detail = [];

            table_body.push([
                {'text': $filter('translate')('field'), style: 'tableHeader'},
                {'text': $filter('translate')('square'), style: 'tableHeader'},
                {'text': $filter('translate')('perimetr'), style: 'tableHeader'},
                {'text': $filter('translate')('culture'), style: 'tableHeader'},
                {'text': $filter('translate')('processed'), style: 'tableHeader'},
                {'text': $filter('translate')('notprocessed'), style: 'tableHeader'}]);

            var cultures = [];
            for (var z = 0; z < rep.cultureList.length; z++) {
                var culture = rep.cultureList[z]
                cultures.push([{'text': $filter('translate')(culture.name), style: 'td'}])
            }

            table_body.push([
                {'text': rep.geozone_name, style: 'td'},
                {'text': $filter('number')(rep.square, 2), style: 'td'},
                {'text': $filter('translate')(rep.perimetr, 2), style: 'td'},
                cultures,
                {'text': $filter('number')((rep.square - rep.notprocessed), 2), style: 'td'},
                {'text': $filter('number')(rep.notprocessed, 2), style: 'td'}]);

            content_detail.push(
                {
                    color: '#444',
                    margin: [0, 0, 0, 20],
                    table: {
                        widths: [126, 126, 126, 126, 126, 126],
                        heights: 20,
                        body: table_body,
                        alignment: 'center',
                        dontBreakRows: true,
                    },
                })

            table1_body.push([
                {'text': $filter('translate')('vehicle'), style: 'tableHeader'},
                {'text': $filter('translate')('timein'), style: 'tableHeader'},
                {'text': $filter('translate')('timeout'), style: 'tableHeader'},
                {'text': $filter('translate')('workingtime'), style: 'tableHeader'},
                {'text': $filter('translate')('ignition_working_time'), style: 'tableHeader'},
                {'text': $filter('translate')('processed'), style: 'tableHeader'},
                {'text': $filter('translate')('trailer'), style: 'tableHeader'},
                {'text': $filter('translate')('driver'), style: 'tableHeader'},
                {'text': $filter('translate')('avgspeed'), style: 'tableHeader'},
                {'text': $filter('translate')('maxspeed'), style: 'tableHeader'},
                {'text': $filter('translate')('stop'), style: 'tableHeader'},
                {'text': $filter('translate')('parking'), style: 'tableHeader'},
                {'text': $filter('translate')('fuel'), style: 'tableHeader'},
                {'text': $filter('translate')('applied.szr'), style: 'tableHeader'}]);

            for (var i = 0; i < rep.vehicles.length; i++) {
                var vehicle = rep.vehicles[i]
                var trailer = [];
                var driver = [];

                if (vehicle.trailerList.length > 0) {
                    for (var t = 0; t < vehicle.trailerList.length; t++) {
                        var tr = vehicle.trailerList[t]
                        trailer.push([{'text': $filter('translate')(tr.name), style: 'td'}])
                    }
                } else {
                    trailer.push([{'text': "-", style: 'td'}])
                }

                if (vehicle.driverList.length) {
                    for (var d = 0; d < vehicle.driverList.length; d++) {
                        var dr = vehicle.driverList[d];
                        driver.push([{'text': dr.name, style: 'td'}])
                    }
                } else {
                    driver.push([{'text': "-", style: 'td'}])

                }


                table1_body.push([
                    {'text': vehicle.vehicle_name, style: 'td'},
                    {'text': $filter('date')(vehicle.time_in_field * 1000, 'dd.MM.yyyy HH:mm:ss'), style: 'td'},
                    {
                        'text': $filter('date')(vehicle.time_out_field * 1000, 'dd.MM.yyyy HH:mm:ss'),
                        style: 'td'
                    },
                    {
                        'text': $filter('translate')($filter('secondsToDateTime')(vehicle.working_time)),
                        style: 'td'
                    },
                    {
                        'text': $filter('translate')($filter('secondsToDateTime')(vehicle.ignition_working_time)),
                        style: 'td'
                    },
                    {
                        'text': $filter('number')(vehicle.processed, 2) + " (" + $filter('number')(vehicle.processed / rep.square * 100, 2) + "%)",
                        style: 'td'
                    },
                    trailer,
                    driver,
                    {'text': vehicle.speed_avg, style: 'td'},
                    {'text': vehicle.speed_max, style: 'td'},
                    {
                        'text': vehicle.stop_num + "(" + $filter('secondsToDateTime')(vehicle.stop_time) + ")",
                        style: 'td'
                    },
                    {
                        'text': vehicle.parking_num + "(" + $filter('secondsToDateTime')(vehicle.parking_time) + ")",
                        style: 'td'
                    },
                    {'text': $filter('number')(vehicle.fuel_used, 2), style: 'td'},
                    {'text': $filter('number')(vehicle.szr_used, 0), style: 'td'}]);

                for (var l = 0; l < vehicle.reportDetailList.length; l++) {
                    var vehicleDetail = vehicle.reportDetailList[l]
                    var trailer1 = [];
                    var driver1 = [];

                    if (vehicleDetail.trailer) {
                        trailer1.push([{'text': $filter('translate')(vehicleDetail.trailer.name), style: 'td'}])
                    } else {
                        trailer1.push([{'text': "-", style: 'td'}])
                    }

                    if (vehicleDetail.driver) {
                        driver1.push([{'text': vehicleDetail.driver.name, style: 'td'}])
                    } else {
                        driver1.push([{'text': "-", style: 'td'}])
                    }

                    table1_body.push([
                        {},
                        {
                            'text': $filter('date')(vehicleDetail.time_in_field * 1000, 'dd.MM.yyyy HH:mm:ss'),
                            style: 'td'
                        },
                        {
                            'text': $filter('date')(vehicleDetail.time_out_field * 1000, 'dd.MM.yyyy HH:mm:ss'),
                            style: 'td'
                        },
                        {
                            'text': $filter('translate')($filter('secondsToDateTime')(vehicleDetail.working_time)),
                            style: 'td'
                        },
                        {
                            'text': $filter('translate')($filter('secondsToDateTime')(vehicleDetail.ignition_working_time)),
                            style: 'td'
                        },
                        {
                            'text': $filter('number')(vehicleDetail.processed, 2) + " (" + $filter('number')(vehicleDetail.processed / rep.square * 100, 2) + "%)",
                            style: 'td'
                        },
                        trailer1,
                        driver1,
                        {'text': vehicleDetail.speed_avg, style: 'td'},
                        {'text': vehicleDetail.speed_max, style: 'td'},
                        {
                            'text': vehicleDetail.stop_num + "(" + $filter('secondsToDateTime')(vehicleDetail.stop_time) + ")",
                            style: 'td'
                        },
                        {
                            'text': vehicleDetail.parking_num + "(" + $filter('secondsToDateTime')(vehicleDetail.parking_time) + ")",
                            style: 'td'
                        },
                        {'text': $filter('number')(vehicleDetail.fuel_used, 2), style: 'td'},
                        {'text': $filter('number')(vehicleDetail.szr_used, 0), style: 'td'}]);
                }
            }

            content_detail.push(
                {
                    color: '#444',
                    margin: [0, 0, 0, 20],
                    table: {
                        widths: [80, 40, 40, 40, 45, 40, 84, 72, 31, 42, 47, 42, 33, 48],
                        heights: 20,
                        body: table1_body,
                        alignment: 'center',
                        dontBreakRows: true,
                    },
                })

            var content = {
                info: {
                    title: 'Agrocontrol',
                    author: 'Agrocontrol',
                    subject: '',
                    keywords: '',
                },
                footer: {
                    columns: [
                        {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 20, 5]}
                    ]
                },
                pageMargins: [15, 25, 15, 30],
                extend: 'pdfHtml5',
                pageSize: 'A4',
                pageOrientation: 'landscape',
                content: [
                    {
                        'text': $filter('translate')('reportType') + " " + $filter('lowercase')($filter('translate')('report.byField')) + ": " + rep.geozone_name,
                        alignment: 'center',
                        bold: 'true'
                    },
                    {
                        'text': $filter('translate')(rep.worktype_name),
                        alignment: 'center',
                        bold: 'true'
                    },
                    {
                        'text': rep.trailer_name,
                        alignment: 'center',
                        bold: 'true'
                    },
                    {
                        'text': rep.vehicle_name,
                        alignment: 'center',
                        bold: 'true'
                    },
                    {
                        'text': $filter('date')(rep.date_start * 1000, 'dd.MM.yyyy HH:mm:ss') + " - " + $filter('date')(rep.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                        alignment: 'center',
                        bold: 'true',
                        margin: [0, 0, 0, 20]
                    },
                    content_detail,
                ],

                styles: {
                    tableHeader: {
                        alignment: 'center',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    td: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8
                    },
                    header: {
                        fontSize: 9,
                        bold: 'true',
                        color: 'black',
                    }
                }
            };


            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });
            } else {
                cratePdf(content);
            }
        }

//----------------------
//По транспортному средству
        function byVehicleNew(rep, params, func) {
            var table_body = [];
            var table1_body = [];
            var table2_body = [];
            var content_detail = [];
            var first_table = [];
            var second_table = [];

            if (rep.vehicleWorkingSensor) {
                table_body.push([
                    {'text': $filter('translate')('vehicle'), style: 'tableHeader'},
                    {'text': $filter('translate')('distance'), style: 'tableHeader'},
                    {'text': $filter('translate')('distance_in_field'), style: 'tableHeader'},
                    {'text': $filter('translate')('distance_out_field'), style: 'tableHeader'},
                    {'text': $filter('translate')('processed'), style: 'tableHeader'},
                    {'text': $filter('translate')('avgspeed'), style: 'tableHeader'},
                    {'text': $filter('translate')('maxspeed'), style: 'tableHeader'},
                    {'text': $filter('translate')('stop'), style: 'tableHeader'},
                    {'text': $filter('translate')('parking'), style: 'tableHeader'},
                    {'text': $filter('translate')('ignition_working_time'), style: 'tableHeader'},
                    {'text': $filter('translate')(rep.vehicleWorkingSensor.name), style: 'tableHeader'},
                    {'text': $filter('translate')('fuel'), style: 'tableHeader'},
                    {'text': $filter('translate')('petrol.refueling.litr'), style: 'tableHeader'}]);

                table_body.push([
                    {'text': rep.vehicle_name, style: 'td'},
                    {'text': $filter('number')(rep.distance, 2), style: 'td'},
                    {'text': $filter('number')(rep.distance - rep.distance_out_field, 2), style: 'td'},
                    {'text': $filter('number')(rep.distance_out_field, 2), style: 'td'},
                    {
                        'text': $filter('number')(params.scope.getFloatTotal(rep.reportDetailList, 'processed'), 2),
                        style: 'td'
                    },
                    {'text': rep.speed_avg, style: 'td'},
                    {'text': rep.speed_max, style: 'td'},
                    {
                        'text': $filter('translate')(rep.stop_num + "(" + $filter('translate')($filter('secondsToDateTime')(rep.stop_time))),
                        style: 'td'
                    },
                    {
                        'text': $filter('translate')(rep.parking_num + "(" + $filter('translate')($filter('secondsToDateTime')(rep.parking_time))),
                        style: 'td'
                    },
                    {
                        'text': $filter('translate')($filter('secondsToDateTime')(rep.ignition_working_time)),
                        style: 'td'
                    },
                    {
                        'text': $filter('translate')($filter('secondsToDateTime')(rep.workingHours)),
                        style: 'td'
                    },
                    {'text': $filter('number')(rep.fuel_used, 2), style: 'td'},
                    {'text': $filter('number')(rep.petrol_refueling, 2), style: 'td'}
                ]);
            } else {
                table_body.push([
                    {'text': $filter('translate')('vehicle'), style: 'tableHeader'},
                    {'text': $filter('translate')('distance'), style: 'tableHeader'},
                    {'text': $filter('translate')('distance_in_field'), style: 'tableHeader'},
                    {'text': $filter('translate')('distance_out_field'), style: 'tableHeader'},
                    {'text': $filter('translate')('processed'), style: 'tableHeader'},
                    {'text': $filter('translate')('avgspeed'), style: 'tableHeader'},
                    {'text': $filter('translate')('maxspeed'), style: 'tableHeader'},
                    {'text': $filter('translate')('stop'), style: 'tableHeader'},
                    {'text': $filter('translate')('parking'), style: 'tableHeader'},
                    {'text': $filter('translate')('ignition_working_time'), style: 'tableHeader'},
                    {'text': $filter('translate')('fuel'), style: 'tableHeader'},
                    {'text': $filter('translate')('petrol.refueling.litr'), style: 'tableHeader'}]);

                table_body.push([
                    {'text': rep.vehicle_name, style: 'td'},
                    {'text': $filter('number')(rep.distance, 2), style: 'td'},
                    {'text': $filter('number')(rep.distance - rep.distance_out_field, 2), style: 'td'},
                    {'text': $filter('number')(rep.distance_out_field, 2), style: 'td'},
                    {
                        'text': $filter('number')(params.scope.getFloatTotal(rep.reportDetailList, 'processed'), 2),
                        style: 'td'
                    },
                    {'text': rep.speed_avg, style: 'td'},
                    {'text': rep.speed_max, style: 'td'},
                    {
                        'text': $filter('translate')(rep.stop_num + "(" + $filter('translate')($filter('secondsToDateTime')(rep.stop_time))),
                        style: 'td'
                    },
                    {
                        'text': $filter('translate')(rep.parking_num + "(" + $filter('translate')($filter('secondsToDateTime')(rep.parking_time))),
                        style: 'td'
                    },
                    {
                        'text': $filter('translate')($filter('secondsToDateTime')(rep.ignition_working_time)),
                        style: 'td'
                    },
                    {'text': $filter('number')(rep.fuel_used, 2), style: 'td'},
                    {'text': $filter('number')(rep.petrol_refueling, 2), style: 'td'}
                ]);
            }

            if (rep.vehicleWorkingSensor) {
                table1_body.push([
                    {'text': $filter('translate')('type'), style: 'tableHeader'},
                    {'text': $filter('translate')('field'), style: 'tableHeader'},
                    {'text': $filter('translate')('timeout'), style: 'tableHeader'},
                    {'text': $filter('translate')('timeout'), style: 'tableHeader'},
                    {'text': $filter('translate')('workingtime'), style: 'tableHeader'},
                    {'text': $filter('translate')('ignition_working_time'), style: 'tableHeader'},
                    {'text': $filter('translate')(rep.vehicleWorkingSensor.name), style: 'tableHeader'},
                    {'text': $filter('translate')('distance'), style: 'tableHeader'},
                    {'text': $filter('translate')('processed'), style: 'tableHeader'},
                    {'text': $filter('translate')('vehicle'), style: 'tableHeader'},
                    {'text': $filter('translate')('trailer'), style: 'tableHeader'},
                    {'text': $filter('translate')('driver'), style: 'tableHeader'},
                ]);

                table2_body.push([
                    {'text': $filter('translate')('avgspeed'), style: 'tableHeader'},
                    {'text': $filter('translate')('maxspeed'), style: 'tableHeader'},
                    {'text': $filter('translate')('stop'), style: 'tableHeader'},
                    {'text': $filter('translate')('parking'), style: 'tableHeader'},
                    {'text': $filter('translate')('fuel'), style: 'tableHeader'},
                    {'text': $filter('translate')('geozone.group_name'), style: 'tableHeader'},
                    {'text': $filter('translate')('vehicle.group_name'), style: 'tableHeader'},
                    {'text': $filter('translate')('unit'), style: 'tableHeader'},
                    {'text': $filter('translate')('square'), style: 'tableHeader'},
                    {'text': $filter('translate')('culture'), style: 'tableHeader'},
                    {'text': $filter('translate')('ignition_go'), style: 'tableHeader'},
                    {'text': $filter('translate')('stop_with_engine'), style: 'tableHeader'}]);

                for (var i = 0; i < rep.reportDetailList.length; i++) {
                    var reportDetail = rep.reportDetailList[i]

                    var type = [];
                    if (reportDetail.isParking) {
                        type.push([{'text': $filter('translate')('parking1'), style: 'td'}])
                    } else {
                        type.push([{'text': $filter('translate')('going'), style: 'td'}])
                    }

                    var trailer = [];
                    if (reportDetail.trailer) {
                        trailer.push([{'text': reportDetail.trailer.name, style: 'td'}])
                    } else {
                        trailer.push([{'text': "-", style: 'td'}])
                    }

                    var driver = [];
                    if (reportDetail.driver) {
                        driver.push([{'text': reportDetail.driver.name, style: 'td'}])
                    } else {
                        driver.push([{'text': "-", style: 'td'}])
                    }

                    var unit = [];
                    var geozone = [];
                    if (reportDetail.geozone != null) {
                        geozone.push([{'text': reportDetail.geozone ? reportDetail.geozone.name : '', style: 'td'}])
                        unit.push([{'text': $filter('translate')('ha'), style: 'td'}])
                    } else {
                        geozone.push([{'text': $filter('translate')('crossing'), style: 'td'}])
                        unit.push([{'text': $filter('translate')('km'), style: 'td'}])
                    }

                    var cultures = [];
                    var square_real = [];
                    var geozone_group_name = [];
                    if (reportDetail.geozone) {
                        if (reportDetail.geozone.cultureList.length > 0) {
                            for (var k = 0; k < reportDetail.geozone.cultureList.length; k++) {
                                var culture = reportDetail.geozone.cultureList[k];
                                cultures.push([{'text': $filter('translate')(culture.name), style: 'td'}])
                            }
                        } else {
                            cultures.push([{'text': " ", style: 'td'}])
                        }
                        square_real.push([{'text': reportDetail.geozone.square_real, style: 'td'}])
                        geozone_group_name.push([{'text': reportDetail.geozone.geozone_group_name, style: 'td'}])

                    } else {
                        square_real.push([{'text': " ", style: 'td'}])
                        geozone_group_name.push([{'text': " ", style: 'td'}])
                    }

                    table1_body.push([
                        type,
                        geozone,
                        {
                            'text': $filter('date')(reportDetail.time_in_field * 1000, 'dd.MM.yyyy HH:mm:ss'),
                            style: 'td'
                        },
                        {
                            'text': $filter('date')(reportDetail.time_out_field * 1000, 'dd.MM.yyyy HH:mm:ss'),
                            style: 'td'
                        },
                        {
                            'text': $filter('translate')($filter('secondsToDateTime')((reportDetail.time_out_field - reportDetail.time_in_field))),
                            style: 'td'
                        },
                        {
                            'text': $filter('translate')($filter('secondsToDateTime')(reportDetail.ignition_working_time)),
                            style: 'td'
                        },
                        {
                            'text': $filter('translate')($filter('secondsToDateTime')(reportDetail.workingHours)),
                            style: 'td'
                        },
                        {'text': $filter('number')(reportDetail.distance, 2), style: 'td'},
                        {
                            'text': $filter('number')(reportDetail.processed, 2),
                            style: 'td'
                        },
                        {
                            'text': rep.vehicle_name,
                            style: 'td'
                        },
                        trailer,
                        driver
                    ]);

                    table2_body.push([
                        {'text': reportDetail.speed_avg, style: 'td'},
                        {'text': reportDetail.speed_max, style: 'td'},
                        {
                            'text': reportDetail.stop_num + "(" + $filter('translate')($filter('secondsToDateTime')(reportDetail.stop_time)) + ")",
                            style: 'td'
                        },
                        {
                            'text': reportDetail.parking_num + "(" + $filter('translate')($filter('secondsToDateTime')(reportDetail.parking_time)) + ")",
                            style: 'td'
                        },
                        {
                            'text': $filter('number')(reportDetail.fuel_used, 2),
                            style: 'td'
                        },
                        geozone_group_name,
                        {'text': rep.vehicle_group_name, style: 'td'},
                        unit,
                        square_real,
                        cultures,
                        {'text': $filter('secondsToDateTime')(reportDetail.going_time), style: 'td'},
                        {
                            'text': $filter('translate')($filter('secondsToDateTime')(reportDetail.ignition_working_time - reportDetail.going_time)),
                            style: 'td'
                        }
                    ]);

                }

                content_detail.push(
                    {
                        'text': $filter('translate')('reportType') + " " + $filter('lowercase')($filter('translate')('report.byVehicleNew')) + ": " + rep.vehicle_name,
                        alignment: 'center',
                        bold: 'true',
                    },
                    {
                        'text': $filter('date')(rep.date_start * 1000, 'dd.MM.yyyy HH:mm:ss') + " - " + $filter('date')(rep.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                        alignment: 'center',
                        bold: 'true',
                        margin: [0, 0, 0, 20]
                    },
                    {
                        color: '#444',
                        margin: [0, 0, 0, 20],
                        table: {
                            widths: [115, 50, 35, 40, 50, 55, 64, 50, 50, 45, 50, 36, 50],
                            heights: 20,
                            body: table_body,
                            alignment: 'center',
                            dontBreakRows: true,
                        },
                    }, {
                        color: '#444',
                        margin: [0, 0, 0, 20],
                        table: {
                            widths: [50, 60, 40, 40, 40, 45, 50, 30, 50, 105, 100, 92],
                            heights: 30,
                            body: table1_body,
                            alignment: 'center',
                            dontBreakRows: true,
                        },
                    })
            } else {
                table1_body.push([
                    {'text': $filter('translate')('type'), style: 'tableHeader'},
                    {'text': $filter('translate')('field'), style: 'tableHeader'},
                    {'text': $filter('translate')('timeout'), style: 'tableHeader'},
                    {'text': $filter('translate')('timeout'), style: 'tableHeader'},
                    {'text': $filter('translate')('workingtime'), style: 'tableHeader'},
                    {'text': $filter('translate')('ignition_working_time'), style: 'tableHeader'},
                    {'text': $filter('translate')('distance'), style: 'tableHeader'},
                    {'text': $filter('translate')('processed'), style: 'tableHeader'},
                    {'text': $filter('translate')('vehicle'), style: 'tableHeader'},
                    {'text': $filter('translate')('trailer'), style: 'tableHeader'},
                    {'text': $filter('translate')('driver'), style: 'tableHeader'},
                ]);

                table2_body.push([
                    {'text': $filter('translate')('avgspeed'), style: 'tableHeader'},
                    {'text': $filter('translate')('maxspeed'), style: 'tableHeader'},
                    {'text': $filter('translate')('stop'), style: 'tableHeader'},
                    {'text': $filter('translate')('parking'), style: 'tableHeader'},
                    {'text': $filter('translate')('fuel'), style: 'tableHeader'},
                    {'text': $filter('translate')('geozone.group_name'), style: 'tableHeader'},
                    {'text': $filter('translate')('vehicle.group_name'), style: 'tableHeader'},
                    {'text': $filter('translate')('unit'), style: 'tableHeader'},
                    {'text': $filter('translate')('square'), style: 'tableHeader'},
                    {'text': $filter('translate')('culture'), style: 'tableHeader'},
                    {'text': $filter('translate')('ignition_go'), style: 'tableHeader'},
                    {'text': $filter('translate')('stop_with_engine'), style: 'tableHeader'}]);

                for (var i = 0; i < rep.reportDetailList.length; i++) {
                    var reportDetail = rep.reportDetailList[i]

                    var type = [];
                    if (reportDetail.isParking) {
                        type.push([{'text': $filter('translate')('parking1'), style: 'td'}])
                    } else {
                        type.push([{'text': $filter('translate')('going'), style: 'td'}])
                    }

                    var trailer = [];
                    if (reportDetail.trailer) {
                        trailer.push([{'text': reportDetail.trailer.name, style: 'td'}])
                    } else {
                        trailer.push([{'text': "-", style: 'td'}])
                    }

                    var driver = [];
                    if (reportDetail.driver) {
                        driver.push([{'text': reportDetail.driver.name, style: 'td'}])
                    } else {
                        driver.push([{'text': "-", style: 'td'}])
                    }

                    var unit = [];
                    var geozone = [];
                    if (reportDetail.geozone != null) {
                        geozone.push([{'text': reportDetail.geozone ? reportDetail.geozone.name : '', style: 'td'}])
                        unit.push([{'text': $filter('translate')('ha'), style: 'td'}])
                    } else {
                        geozone.push([{'text': $filter('translate')('crossing'), style: 'td'}])
                        unit.push([{'text': $filter('translate')('km'), style: 'td'}])
                    }

                    var cultures = [];
                    var square_real = [];
                    var geozone_group_name = [];
                    if (reportDetail.geozone) {
                        if (reportDetail.geozone.cultureList.length > 0) {
                            for (var k = 0; k < reportDetail.geozone.cultureList.length; k++) {
                                var culture = reportDetail.geozone.cultureList[k];
                                cultures.push([{'text': $filter('translate')(culture.name), style: 'td'}])
                            }
                        } else {
                            cultures.push([{'text': " ", style: 'td'}])
                        }
                        square_real.push([{'text': reportDetail.geozone.square_real, style: 'td'}])
                        geozone_group_name.push([{'text': reportDetail.geozone.geozone_group_name, style: 'td'}])

                    } else {
                        square_real.push([{'text': " ", style: 'td'}])
                        geozone_group_name.push([{'text': " ", style: 'td'}])
                    }


                    table1_body.push([
                        type,
                        geozone,
                        {
                            'text': $filter('date')(reportDetail.time_in_field * 1000, 'dd.MM.yyyy HH:mm:ss'),
                            style: 'td'
                        },
                        {
                            'text': $filter('date')(reportDetail.time_out_field * 1000, 'dd.MM.yyyy HH:mm:ss'),
                            style: 'td'
                        },
                        {
                            'text': $filter('translate')($filter('secondsToDateTime')((reportDetail.time_out_field - reportDetail.time_in_field))),
                            style: 'td'
                        },
                        {
                            'text': $filter('translate')($filter('secondsToDateTime')(reportDetail.ignition_working_time)),
                            style: 'td'
                        },
                        {'text': $filter('number')(reportDetail.distance, 2), style: 'td'},
                        {
                            'text': $filter('number')(reportDetail.processed, 2),
                            style: 'td'
                        },
                        {
                            'text': rep.vehicle_name,
                            style: 'td'
                        },
                        trailer,
                        driver
                    ]);

                    table2_body.push([
                        {'text': reportDetail.speed_avg, style: 'td'},
                        {'text': reportDetail.speed_max, style: 'td'},
                        {
                            'text': reportDetail.stop_num + "(" + $filter('translate')($filter('secondsToDateTime')(reportDetail.stop_time)) + ")",
                            style: 'td'
                        },
                        {
                            'text': reportDetail.parking_num + "(" + $filter('translate')($filter('secondsToDateTime')(reportDetail.parking_time)) + ")",
                            style: 'td'
                        },
                        {
                            'text': $filter('number')(reportDetail.fuel_used, 2),
                            style: 'td'
                        },
                        geozone_group_name,
                        {'text': rep.vehicle_group_name, style: 'td'},
                        unit,
                        square_real,
                        cultures,
                        {'text': $filter('secondsToDateTime')(reportDetail.going_time), style: 'td'},
                        {
                            'text': $filter('translate')($filter('secondsToDateTime')(reportDetail.ignition_working_time - reportDetail.going_time)),
                            style: 'td'
                        }
                    ]);
                }

                content_detail.push(
                    {
                        'text': $filter('translate')('reportType') + " " + $filter('lowercase')($filter('translate')('report.byVehicleNew')) + ": " + rep.vehicle_name,
                        alignment: 'center',
                        bold: 'true',
                    },
                    {
                        'text': $filter('date')(rep.date_start * 1000, 'dd.MM.yyyy HH:mm:ss') + " - " + $filter('date')(rep.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                        alignment: 'center',
                        bold: 'true',
                        margin: [0, 0, 0, 20]
                    },
                    {
                        color: '#444',
                        margin: [0, 0, 0, 10],
                        table: {
                            widths: [125, 50, 50, 50, 50, 55, 64, 50, 50, 50, 55, 50],
                            heights: 20,
                            body: table_body,
                            alignment: 'center',
                            dontBreakRows: true,
                        },
                    },
                    {
                        color: '#444',
                        margin: [0, 0, 0, 20],
                        table: {
                            widths: [50, 60, 40, 40, 40, 45, 50, 30, 120, 122, 110],
                            heights: 30,
                            body: table1_body,
                            alignment: 'center',
                            dontBreakRows: true,
                        },
                    })
            }

            content_detail.push(
                {
                    color: '#444',

                    pageBreak: 'before',
                    margin: [0, 110, 0, 0],
                    table: {
                        widths: [60, 40, 50, 50, 50, 80, 60, 60, 60, 80, 47, 64],
                        heights: 30,
                        body: table2_body,
                        alignment: 'center',
                        dontBreakRows: true,
                    },
                })

            var content = {
                info: {
                    title: 'Agrocontrol',
                    author: 'Agrocontrol',
                    subject: '',
                    keywords: '',
                },
                footer: {
                    columns: [
                        {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 20, 5]}
                    ]
                },
                pageMargins: [15, 25, 15, 30],
                extend: 'pdfHtml5',
                pageSize: 'A4',
                pageOrientation: 'landscape',
                content: [

                    content_detail,
                ],
                styles: {
                    tableHeader: {
                        alignment: 'center',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    td: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8
                    },
                    header: {
                        fontSize: 9,
                        bold: 'true',
                        color: 'black',
                    }
                }
            };


            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });
            } else {
                cratePdf(content);
            }
        }

//----------------------
//Отчет для легкового/грузового транспорта
        function byVehicleCar(rep, func) {
            var table_body = [];
            var table1_body = [];
            var content_detail = [];

            table_body.push([
                {'text': $filter('translate')('vehicle'), style: 'tableHeader'},
                {'text': $filter('translate')('distance'), style: 'tableHeader'},
                {'text': $filter('translate')('fuel'), style: 'tableHeader'},
            ]);


            table_body.push([
                {'text': rep.vehicle_name, style: 'td'},
                {'text': $filter('number')(rep.distance, 2), style: 'td'},
                {'text': $filter('number')(rep.fuel_used, 2), style: 'td'}
            ]);

            table1_body.push([
                {'text': $filter('translate')('type'), style: 'tableHeader'},
                {'text': $filter('translate')('timestart'), style: 'tableHeader'},
                {'text': $filter('translate')('timeend'), style: 'tableHeader'},
                {'text': $filter('translate')('duration'), style: 'tableHeader'},
                {'text': $filter('translate')('distance'), style: 'tableHeader'},
                {'text': $filter('translate')('fuel'), style: 'tableHeader'},
                {'text': $filter('translate')('fuel_by_norm'), style: 'tableHeader'},
                {'text': $filter('translate')('address'), style: 'tableHeader'},
                {'text': $filter('translate')('geozone'), style: 'tableHeader'},
                {'text': $filter('translate')('vehicle'), style: 'tableHeader'},
                {'text': $filter('translate')('driver'), style: 'tableHeader'},
                {'text': $filter('translate')('vehicle.group_name'), style: 'tableHeader'},
            ]);

            for (var i = 0; i < rep.reportDetailList.length; i++) {
                var reportDetail = rep.reportDetailList[i]

                var type = [];
                if (reportDetail.isParking) {
                    type.push([{'text': $filter('translate')('parking1'), style: 'td'}])
                } else {
                    type.push([{'text': $filter('translate')('going'), style: 'td'}])
                }

                var adress = [];
                if (reportDetail.stopPoint != null) {
                    adress.push([{'text': reportDetail.stopPoint.address, style: 'td'}])
                } else {
                    adress.push([{'text': " ", style: 'td'}])
                }

                var driver = [];
                if (reportDetail.driver) {
                    driver.push([{'text': reportDetail.driver.name, style: 'td'}])
                } else {
                    driver.push([{'text': "-", style: 'td'}])
                }

                var geozone = [];
                if (reportDetail.stopPoint != null) {
                    geozone.push([{'text': reportDetail.stopPoint.geozone_name, style: 'td'}])
                } else {
                    driver.push([{'text': " ", style: 'td'}])
                }

                table1_body.push([
                    type,
                    {
                        'text': $filter('date')(reportDetail.time_in_field * 1000, 'dd.MM.yyyy HH:mm:ss'),
                        style: 'td'
                    },
                    {
                        'text': $filter('date')(reportDetail.time_out_field * 1000, 'dd.MM.yyyy HH:mm:ss'),
                        style: 'td'
                    },
                    {
                        'text': $filter('translate')($filter('secondsToDateTime')((reportDetail.time_out_field - reportDetail.time_in_field))),
                        style: 'td'
                    },
                    {
                        'text': $filter('number')(reportDetail.distance, 2),
                        style: 'td'
                    },
                    {
                        'text': $filter('number')(reportDetail.fuel_used, 2),
                        style: 'td'
                    },
                    {'text': ''},
                    adress,
                    geozone,
                    {
                        'text': rep.vehicle_name,
                        style: 'td'
                    },
                    driver,
                    {
                        'text': reportDetail.vehicle_group_name,
                        style: 'td'
                    }
                ]);
            }

            content_detail.push(
                {
                    color: '#444',
                    margin: [0, 0, 0, 20],
                    table: {
                        widths: [255, 255, 255,],
                        heights: 20,
                        body: table_body,
                        alignment: 'center',
                        dontBreakRows: true,
                    },
                }, {
                    color: '#444',
                    margin: [0, 0, 0, 20],
                    table: {
                        widths: [45, 45, 48, 45, 30, 35, 50, 70, 70, 95, 90, 60],
                        heights: 30,
                        body: table1_body,
                        alignment: 'center',
                        dontBreakRows: true,
                    },
                })


            var content = {
                info: {
                    title: 'Agrocontrol',
                    author: 'Agrocontrol',
                    subject: '',
                    keywords: '',
                },
                footer: {
                    columns: [
                        {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 20, 5]}
                    ]
                },
                pageMargins: [20, 25, 20, 30],
                extend: 'pdfHtml5',
                pageSize: 'A4',
                pageOrientation: 'landscape',
                content: [
                    {
                        'text': $filter('translate')('reportType') + " " + $filter('lowercase')($filter('translate')('report.byVehicleCar')) + ": " + rep.vehicle_name,
                        alignment: 'center',
                        bold: 'true',
                    },
                    {
                        'text': $filter('date')(rep.time_start * 1000, 'dd.MM.yyyy HH:mm:ss') + " - " + $filter('date')(rep.time_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                        alignment: 'center',
                        bold: 'true',
                        margin: [0, 0, 0, 20]
                    },
                    content_detail,
                ],

                styles: {
                    tableHeader: {
                        alignment: 'center',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    td: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8
                    },
                    header: {
                        fontSize: 9,
                        bold: 'true',
                        color: 'black',
                    }
                }
            };

            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });
            } else {
                cratePdf(content);
            }
        }


//----------------------
//По топливу детальный
        function byFuelDetail(rep, func) {
            var table_body = [];
            var table1_body = [];
            var content_detail = [];

            if (rep.vehicleWorkingSensor) {
                var sensor = {'text': $filter('translate')(rep.vehicleWorkingSensor.name), style: 'tableHeader'}

                table_body.push([
                    {'text': $filter('translate')('vehicle'), style: 'tableHeader'},
                    {'text': $filter('translate')('distance'), style: 'tableHeader'},
                    {'text': $filter('translate')('ignition_working_time_go'), style: 'tableHeader'},
                    {'text': $filter('translate')('stop_with_engine'), style: 'tableHeader'},
                    {'text': $filter('translate')('stopping.time.sum'), style: 'tableHeader'},
                    {'text': $filter('translate')('ignition_working_time'), style: 'tableHeader'},
                    sensor,
                    {'text': $filter('translate')('start_litr'), style: 'tableHeader'},
                    {'text': $filter('translate')('end_litr'), style: 'tableHeader'},
                    {'text': $filter('translate')('refueling'), style: 'tableHeader'},
                    {'text': $filter('translate')('petrol.refueling.litr'), style: 'tableHeader'},
                    {'text': $filter('translate')('fuel_drain'), style: 'tableHeader'},
                    {'text': $filter('translate')('fuel'), style: 'tableHeader'}
                ]);

                table_body.push([
                    {'text': $filter('date')(rep.vehicle_name), style: 'td'},
                    {'text': $filter('number')(rep.distance, 2), style: 'td'},
                    {'text': $filter('translate')($filter('secondsToDateTime')(rep.going_time)), style: 'td'},
                    {
                        'text': $filter('translate')($filter('secondsToDateTime')((rep.ignition_working_time - rep.going_time))),
                        style: 'td'
                    },
                    {'text': $filter('translate')($filter('secondsToDateTime')(rep.parking_time)), style: 'td'},
                    {
                        'text': $filter('translate')($filter('secondsToDateTime')(rep.ignition_working_time)),
                        style: 'td'
                    },
                    {'text': $filter('translate')($filter('secondsToDateTime')(rep.workingHours)), style: 'td'},
                    {'text': $filter('number')(rep.start_litr, 2), style: 'td'},
                    {'text': $filter('number')(rep.end_litr, 2), style: 'td'},
                    {'text': $filter('number')(rep.refueling, 2), style: 'td'},
                    {'text': $filter('number')(rep.petrol_refueling, 2), style: 'td'},
                    {'text': $filter('number')(rep.fuel_drain, 2), style: 'td'},
                    {'text': $filter('number')(rep.fuel_used, 2), style: 'td'},
                ]);
            } else {
                var sensor = {'text': '-', style: 'tableHeader'}
                var sensor_data = {'text': " ", style: 'td'}
                table_body.push([
                    {'text': $filter('translate')('vehicle'), style: 'tableHeader'},
                    {'text': $filter('translate')('distance'), style: 'tableHeader'},
                    {'text': $filter('translate')('ignition_working_time_go'), style: 'tableHeader'},
                    {'text': $filter('translate')('stop_with_engine'), style: 'tableHeader'},
                    {'text': $filter('translate')('stopping.time.sum'), style: 'tableHeader'},
                    {'text': $filter('translate')('ignition_working_time'), style: 'tableHeader'},
                    {'text': $filter('translate')('start_litr'), style: 'tableHeader'},
                    {'text': $filter('translate')('end_litr'), style: 'tableHeader'},
                    {'text': $filter('translate')('refueling'), style: 'tableHeader'},
                    {'text': $filter('translate')('petrol.refueling.litr'), style: 'tableHeader'},
                    {'text': $filter('translate')('fuel_drain'), style: 'tableHeader'},
                    {'text': $filter('translate')('fuel'), style: 'tableHeader'}
                ]);

                table_body.push([
                    {'text': $filter('date')(rep.vehicle_name), style: 'td'},
                    {'text': $filter('number')(rep.distance, 2), style: 'td'},
                    {'text': $filter('translate')($filter('secondsToDateTime')(rep.going_time)), style: 'td'},
                    {
                        'text': $filter('translate')($filter('secondsToDateTime')((rep.ignition_working_time - rep.going_time))),
                        style: 'td'
                    },
                    {'text': $filter('translate')($filter('secondsToDateTime')(rep.parking_time)), style: 'td'},
                    {
                        'text': $filter('translate')($filter('secondsToDateTime')(rep.ignition_working_time)),
                        style: 'td'
                    },
                    {'text': $filter('number')(rep.start_litr, 2), style: 'td'},
                    {'text': $filter('number')(rep.end_litr, 2), style: 'td'},
                    {'text': $filter('number')(rep.refueling, 2), style: 'td'},
                    {'text': $filter('number')(rep.petrol_refueling, 2), style: 'td'},
                    {'text': $filter('number')(rep.fuel_drain, 2), style: 'td'},
                    {'text': $filter('number')(rep.fuel_used, 2), style: 'td'},
                ]);
            }


            if (rep.vehicleWorkingSensor) {

                table1_body.push([
                    {'text': $filter('translate')('date'), style: 'tableHeader'},
                    {'text': $filter('translate')('distance'), style: 'tableHeader'},
                    {'text': $filter('translate')('ignition_working_time_go'), style: 'tableHeader'},
                    {'text': $filter('translate')('stop_with_engine'), style: 'tableHeader'},
                    {'text': $filter('translate')('stopping.time.sum'), style: 'tableHeader'},
                    {'text': $filter('translate')('ignition_working_time'), style: 'tableHeader'},
                    {'text': $filter('translate')(rep.vehicleWorkingSensor.name), style: 'tableHeader'},
                    {'text': $filter('translate')('start_litr'), style: 'tableHeader'},
                    {'text': $filter('translate')('end_litr'), style: 'tableHeader'},
                    {'text': $filter('translate')('refueling'), style: 'tableHeader'},
                    {'text': $filter('translate')('petrol.refueling.litr'), style: 'tableHeader'},
                    {'text': $filter('translate')('fuel_drain'), style: 'tableHeader'},
                    {'text': $filter('translate')('fuel'), style: 'tableHeader'},
                ]);

                for (var i = 0; i < rep.reportDetailList.length; i++) {
                    var reportDetail = rep.reportDetailList[i]

                    table1_body.push([
                        {'text': $filter('date')(reportDetail.time_in_field * 1000, 'dd.MM.yyyy'), style: 'td'},
                        {'text': $filter('number')(reportDetail.distance, 2), style: 'td'},
                        {
                            'text': $filter('translate')($filter('secondsToDateTime')(reportDetail.going_time)),
                            style: 'td'
                        },
                        {
                            'text': $filter('translate')($filter('secondsToDateTime')(reportDetail.ignition_working_time - reportDetail.going_time)),
                            style: 'td'
                        },
                        {
                            'text': $filter('translate')($filter('secondsToDateTime')(reportDetail.parking_time)),
                            style: 'td'
                        },
                        {
                            'text': $filter('translate')($filter('secondsToDateTime')(reportDetail.ignition_working_time)),
                            style: 'td'
                        },
                        {
                            'text': $filter('translate')($filter('secondsToDateTime')(reportDetail.workingHours)),
                            style: 'td'
                        },
                        {'text': $filter('number')(reportDetail.start_litr, 2), style: 'td'},
                        {'text': $filter('number')(reportDetail.end_litr, 2), style: 'td'},
                        {'text': $filter('number')(reportDetail.refueling, 2), style: 'td'},
                        {'text': $filter('number')(reportDetail.petrol_refueling, 2), style: 'td'},
                        {'text': $filter('number')(reportDetail.fuel_drain, 2), style: 'td'},
                        {'text': $filter('number')(reportDetail.fuel_used, 2), style: 'td'},
                    ]);
                }

                content_detail.push(
                    {
                        color: '#444',
                        margin: [0, 0, 0, 20],
                        table: {
                            widths: [110, 55, 45, 45, 45, 45, 50, 55, 45, 50, 50, 45, 50],
                            heights: 20,
                            body: table_body,
                            alignment: 'center',
                            dontBreakRows: true,
                        },
                    }, {
                        color: '#444',
                        margin: [0, 0, 0, 20],
                        table: {
                            widths: [50, 50, 45, 45, 50, 50, 55, 55, 50, 65, 70, 50, 55],
                            heights: 30,
                            body: table1_body,
                            alignment: 'center',
                            dontBreakRows: true,
                        },
                    })


            } else {
                table1_body.push([
                    {'text': $filter('translate')('date'), style: 'tableHeader'},
                    {'text': $filter('translate')('distance'), style: 'tableHeader'},
                    {'text': $filter('translate')('ignition_working_time_go'), style: 'tableHeader'},
                    {'text': $filter('translate')('stop_with_engine'), style: 'tableHeader'},
                    {'text': $filter('translate')('stopping.time.sum'), style: 'tableHeader'},
                    {'text': $filter('translate')('ignition_working_time'), style: 'tableHeader'},
                    {'text': $filter('translate')('start_litr'), style: 'tableHeader'},
                    {'text': $filter('translate')('end_litr'), style: 'tableHeader'},
                    {'text': $filter('translate')('refueling'), style: 'tableHeader'},
                    {'text': $filter('translate')('petrol.refueling.litr'), style: 'tableHeader'},
                    {'text': $filter('translate')('fuel_drain'), style: 'tableHeader'},
                    {'text': $filter('translate')('fuel'), style: 'tableHeader'},
                ]);

                for (var i = 0; i < rep.reportDetailList.length; i++) {
                    var reportDetail = rep.reportDetailList[i]
                    table1_body.push([
                        {'text': $filter('date')(reportDetail.time_in_field * 1000, 'dd.MM.yyyy'), style: 'td'},
                        {'text': $filter('number')(reportDetail.distance, 2), style: 'td'},
                        {
                            'text': $filter('translate')($filter('secondsToDateTime')(reportDetail.going_time)),
                            style: 'td'
                        },
                        {
                            'text': $filter('translate')($filter('secondsToDateTime')((reportDetail.ignition_working_time - reportDetail.going_time))),
                            style: 'td'
                        },
                        {
                            'text': $filter('translate')($filter('secondsToDateTime')(reportDetail.parking_time)),
                            style: 'td'
                        },
                        {
                            'text': $filter('translate')($filter('secondsToDateTime')(reportDetail.workingHours)),
                            style: 'td'
                        },
                        {'text': $filter('number')(reportDetail.start_litr, 2), style: 'td'},
                        {'text': $filter('number')(reportDetail.end_litr, 2), style: 'td'},
                        {'text': $filter('number')(reportDetail.refueling, 2), style: 'td'},
                        {'text': $filter('number')(reportDetail.petrol_refueling, 2), style: 'td'},
                        {'text': $filter('number')(reportDetail.fuel_drain, 2), style: 'td'},
                        {'text': $filter('number')(reportDetail.fuel_used, 2), style: 'td'},
                    ]);
                }

                content_detail.push(
                    {
                        color: '#444',
                        margin: [0, 0, 0, 20],
                        table: {
                            widths: [150, 55, 45, 45, 45, 45, 55, 55, 50, 50, 50, 55],
                            heights: 20,
                            body: table_body,
                            alignment: 'center',
                            dontBreakRows: true,
                        },
                    }, {
                        color: '#444',
                        margin: [0, 0, 0, 20],
                        table: {
                            widths: [50, 50, 50, 60, 60, 55, 55, 80, 50, 70, 70, 50, 55],
                            heights: 30,
                            body: table1_body,
                            alignment: 'center',
                            dontBreakRows: true,
                        },
                    })
            }


            var content = {
                info: {
                    title: 'Agrocontrol',
                    author: 'Agrocontrol',
                    subject: '',
                    keywords: '',
                },
                footer: {
                    columns: [
                        {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 20, 5]}
                    ]
                },
                pageMargins: [15, 25, 20, 30],
                extend: 'pdfHtml5',
                pageSize: 'A4',
                pageOrientation: 'landscape',
                content: [
                    {
                        'text': $filter('translate')('reportType') + " " + $filter('lowercase')($filter('translate')('report.byFuelDetail')) + ": " + rep.vehicle_name,
                        alignment: 'center',
                        bold: 'true',
                    },
                    {
                        'text': $filter('date')(rep.time_start * 1000, 'dd.MM.yyyy HH:mm:ss') + " - " + $filter('date')(rep.time_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                        alignment: 'center',
                        bold: 'true',
                        margin: [0, 0, 0, 20]
                    },
                    content_detail,
                ],

                styles: {
                    tableHeader: {
                        alignment: 'center',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    td: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8
                    },
                    header: {
                        fontSize: 9,
                        bold: 'true',
                        color: 'black',
                    }
                }
            };

            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });
            } else {
                cratePdf(content);
            }
        }

//-------------------
//Контроль посева и полива
        function byControlSeeder(rep, func) {
            var table_body = [];
            var table1_body = [];
            var content_detail = [];
            table_body.push([
                {'text': $filter('translate')('field'), style: 'tableHeader'},
                {'text': $filter('translate')('square'), style: 'tableHeader'},
                {'text': $filter('translate')('perimetr'), style: 'tableHeader'},
                {'text': $filter('translate')('culture'), style: 'tableHeader'},
                {'text': $filter('translate')('processed'), style: 'tableHeader'},
                {'text': $filter('translate')('notprocessed'), style: 'tableHeader'},
            ]);

            if (rep.cultureList.length > 0) {
                for (var k = 0; k < rep.cultureList.length; k++) {
                    var culture = rep.cultureList[k];
                    var cultures = {'text': $filter('translate')(culture.name), style: 'td'}
                }
            } else {
                var cultures = {'text': " ", style: 'td'}
            }
            table_body.push([
                {'text': rep.geozone_name, style: 'td'},
                {'text': $filter('number')(rep.square, 2), style: 'td'},
                {'text': $filter('number')(rep.perimetr, 2), style: 'td'},
                cultures,
                {'text': $filter('number')((rep.square - rep.notprocessed), 2), style: 'td'},
                {'text': $filter('number')(rep.notprocessed, 2), style: 'td'}
            ]);

            if (rep.vehicleWorkingSensor) {
                var sensor = {'text': $filter('translate')(rep.vehicleWorkingSensor.name), style: 'tableHeader'}
            } else {
                var sensor = {'text': '-', style: 'tableHeader'}
            }
            table1_body.push([
                {'text': $filter('translate')('vehicle'), style: 'tableHeader'},
                {'text': $filter('translate')('processed'), style: 'tableHeader'},
                {'text': $filter('translate')('trailer'), style: 'tableHeader'},
                {'text': $filter('translate')('driver'), style: 'tableHeader'},
                {'text': $filter('translate')('avgspeed'), style: 'tableHeader'},
                {'text': $filter('translate')('corns.num'), style: 'tableHeader'},
                {'text': $filter('translate')('corns.given'), style: 'tableHeader'},
                {'text': $filter('translate')('corns.actual'), style: 'tableHeader'},
                {'text': $filter('translate')('corns.quality'), style: 'tableHeader'},
                {'text': $filter('translate')('corns.doubles'), style: 'tableHeader'},
                {'text': $filter('translate')('corns.skips'), style: 'tableHeader'}
            ]);

            for (var i = 0; i < rep.vehicles.length; i++) {
                var vehicle = rep.vehicles[i]

                if (vehicle.trailer) {
                    var trailer = {'text': vehicle.trailer.name, style: 'td'}
                } else {
                    var trailer = {'text': '-', style: 'td'}
                }

                if (vehicle.driver) {
                    var driver = {'text': vehicle.driver.name, style: 'td'}
                } else {
                    var driver = {'text': '-', style: 'td'}
                }

                if (vehicle.seederSensorData.num_corns) {
                    var doubles = {'text': $filter('number')(vehicle.seederSensorData.doubles, 2), style: 'td'}
                    var skips = {'text': $filter('number')(vehicle.seederSensorData.num_corns, 2), style: 'td'}
                    var num_corns = {'text': vehicle.seederSensorData.num_corns, style: 'td'}
                } else {
                    var doubles = {'text': '-', style: 'td'}
                    var skips = {'text': "-", style: 'td'}
                    var num_corns = {'text': '-', style: 'td'}
                }


                table1_body.push([
                    {'text': vehicle.vehicle_name, style: 'td'},
                    {
                        'text': $filter('number')(vehicle.processed, 2) + "(" + $filter('number')(vehicle.processed / rep.square * 100, 2) + "%)",
                        style: 'td'
                    },
                    trailer,
                    driver,
                    {'text': vehicle.speed_avg, style: 'td'},
                    num_corns,
                    {'text': vehicle.seederSensorData.given_norm, style: 'td'},
                    {'text': $filter('number')(vehicle.seederSensorData.actual_norm, 2), style: 'td'},
                    {'text': $filter('number')(vehicle.seederSensorData.quality, 2), style: 'td'},
                    doubles,
                    skips,
                ]);
            }

            content_detail.push({
                    color: '#444',
                    margin: [0, 0, 0, 20],
                    table: {
                        widths: [150, 130, 130, 125, 110, 110],
                        heights: 20,
                        body: table_body,
                        alignment: 'center',
                        dontBreakRows: true,
                    },
                }
            )

            content_detail.push(
                {
                    color: '#444',
                    margin: [0, 0, 0, 20],
                    table: {
                        widths: [110, 50, 80, 85, 55, 50, 65, 65, 50, 50, 50],
                        heights: 30,
                        body: table1_body,
                        alignment: 'center',
                        dontBreakRows: true,
                    },
                })


            var content = {
                info: {
                    title: 'Agrocontrol',
                    author: 'Agrocontrol',
                    subject: '',
                    keywords: '',
                },
                footer: {
                    columns: [
                        {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 20, 5]}
                    ]
                },
                pageMargins: [15, 25, 20, 30],
                extend: 'pdfHtml5',
                pageSize: 'A4',
                pageOrientation: 'landscape',
                content: [
                    {
                        'text': $filter('translate')('reportType') + " " + $filter('lowercase')($filter('translate')('report.byControlSeeder')) + ": " + rep.geozone_name,
                        alignment: 'center',
                        bold: 'true',
                    },
                    {
                        'text': $filter('date')(rep.date_start * 1000, 'dd.MM.yyyy HH:mm:ss') + " - " + $filter('date')(rep.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                        alignment: 'center',
                        bold: 'true',
                        margin: [0, 0, 0, 20]
                    },
                    content_detail,
                ],

                styles: {
                    tableHeader: {
                        alignment: 'center',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    td: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8
                    },
                    header: {
                        fontSize: 9,
                        bold: 'true',
                        color: 'black',
                    }
                }
            };

            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });
            } else {
                cratePdf(content);
            }
        }

//------------------------
//По группе ТС
        function byVehicleGroup(rep, func) {
            var table_body = [];
            var table1_body = [];
            var content_detail = [];

            rep.reportDetail.sort(function (a, b) {
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


            table1_body.push([
                {'text': $filter('translate')('vehicle'), style: 'tableHeader'},
                {'text': $filter('translate')('distance'), style: 'tableHeader'},
                {
                    'text': $filter('translate')('distance.speed.geather', {'speed': " " + rep.geozone_speed}),
                    style: 'tableHeader'
                },
                {
                    'text': $filter('translate')('distance.speed.less', {'speed': " " + rep.geozone_speed}),
                    style: 'tableHeader'
                },
                {'text': $filter('translate')('ignition_working_time_go'), style: 'tableHeader'},
                {'text': $filter('translate')('fuel'), style: 'tableHeader'}
            ]);

            for (var i = 0; i < rep.reportDetail.length; i++) {
                var reportDetail = rep.reportDetail[i]

                table1_body.push([
                    {'text': reportDetail.vehicle_name, style: 'td'},
                    {
                        'text': $filter('number')(reportDetail.distance, 2),
                        style: 'td'
                    },
                    {'text': $filter('number')(reportDetail.distance - reportDetail.distance1, 2), style: 'td'},
                    {'text': $filter('number')(reportDetail.distance1, 2), style: 'td'},
                    {
                        'text': $filter('translate')($filter('secondsToDateTime')(reportDetail.ignition_working_time_go)),
                        style: 'td'
                    },
                    {'text': $filter('number')(reportDetail.fuel_used, 2), style: 'td'},
                ]);
            }

            content_detail.push(
                {
                    color: '#444',
                    margin: [0, 0, 0, 20],
                    table: {
                        widths: [200, 105, 110, 110, 110, 110],
                        heights: 30,
                        body: table1_body,
                        alignment: 'center',
                        dontBreakRows: true,
                    },
                })


            var content = {
                info: {
                    title: 'Agrocontrol',
                    author: 'Agrocontrol',
                    subject: '',
                    keywords: '',
                },
                footer: {
                    columns: [
                        {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 20, 5]}
                    ]
                },
                pageMargins: [20, 25, 20, 30],
                extend: 'pdfHtml5',
                pageSize: 'A4',
                pageOrientation: 'landscape',
                content: [
                    {
                        'text': $filter('translate')('reportType') + " " + $filter('lowercase')($filter('translate')('report.byVehicleGroup')) + ": " + rep.group_name,
                        alignment: 'center',
                        bold: 'true',
                    },
                    {
                        'text': $filter('date')(rep.date_start * 1000, 'dd.MM.yyyy HH:mm:ss') + " - " + $filter('date')(rep.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                        alignment: 'center',
                        bold: 'true',
                        margin: [0, 0, 0, 20]
                    },
                    content_detail,
                ],

                styles: {
                    tableHeader: {
                        alignment: 'center',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    td: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8
                    },
                    header: {
                        fontSize: 9,
                        bold: 'true',
                        color: 'black',
                    }
                }
            };

            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });
            } else {
                cratePdf(content);
            }
        }

//--------
//Контроль маршрута
        function byRoute(rep, params, func) {
            var table_body = [];
            var table1_body = [];
            var content_detail = [];
            rep.reportDetail.sort(function (a, b) {
                if (a.vehicle_name < b.vehicle_name) {
                    return -1;
                }
                if (a.vehicle_name > b.vehicle_name) {
                    return 1;
                }
                return 0;
            });


            table1_body.push([
                {'text': $filter('translate')('vehicle'), style: 'tableHeader'},
                {'text': $filter('translate')('distance'), style: 'tableHeader'},
                {'text': $filter('translate')('distance.byRoute'), style: 'tableHeader'},
                {'text': $filter('translate')('title.notifications'), style: 'tableHeader'},
            ]);

            for (var i = 0; i < rep.reportDetail.length; i++) {
                var reportDetail = rep.reportDetail[i];

                var notifications = [];

                for (var n = 0; n < reportDetail.notificationList.length; n++) {
                    var notification = reportDetail.notificationList[n];
                    notifications.push([{
                        'text': $filter('date')(notification.tm, 'dd.MM.yyyy HH:mm:ss') + " " + params.scope.getNotificationMessage(notification),
                        style: 'td',
                        margin: [0, 0, 0, 5],
                        color: 'black'
                    }])
                }

                table1_body.push([
                    {'text': reportDetail.vehicle.name, style: 'td'},
                    {'text': $filter('number')(reportDetail.distance, 2), style: 'td'},
                    {'text': $filter('number')(reportDetail.distance1, 2), style: 'td'},
                    notifications
                ]);
            }

            content_detail.push(
                {
                    color: '#444',
                    margin: [0, 0, 0, 20],
                    table: {
                        widths: [150, 60, 65, 245],
                        heights: 20,
                        body: table1_body,
                        alignment: 'center',
                        dontBreakRows: true,
                    },
                })


            var content = {
                info: {
                    title: 'Agrocontrol',
                    author: 'Agrocontrol',
                    subject: '',
                    keywords: '',
                },
                footer: {
                    columns: [
                        {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 20, 5]}
                    ]
                },
                pageMargins: [20, 25, 20, 30],
                extend: 'pdfHtml5',
                pageSize: 'A4',
                content: [
                    {
                        'text': $filter('translate')('reportType') + " " + $filter('lowercase')($filter('translate')('report.byRoute')) + ": " + rep.route_name,
                        alignment: 'center',
                        bold: 'true',
                    },
                    {
                        'text': $filter('date')(rep.date_start * 1000, 'dd.MM.yyyy HH:mm:ss') + " - " + $filter('date')(rep.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                        alignment: 'center',
                        bold: 'true',
                        margin: [0, 0, 0, 20]
                    },
                    content_detail,
                ],

                styles: {
                    tableHeader: {
                        alignment: 'center',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    td: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8
                    },
                    header: {
                        fontSize: 9,
                        bold: 'true',
                        color: 'black',
                    }
                }
            };

            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });
            } else {
                cratePdf(content);
            }
        }

//---------------
//Контроль полевых работ
        function byWorkType(rep, params, func) {
            var charts = {},

                charts_remaining = 0;

            if (AmCharts.charts.length > 0) {
                charts[rep.values] = AmCharts.charts[AmCharts.charts.length - 1];
                charts_remaining++;
            }

            if (charts_remaining == 0) {
                generateData(rep, params, func);
            } else {
                for (var x in charts) {
                    if (charts.hasOwnProperty(x)) {
                        var chart = charts[x];
                        chart["export"].capture({}, function () {
                            this.toJPG({}, function (data) {

                                this.setup.chart.exportedImage = data;

                                generateData(rep, params, func);

                            });
                        });
                    }
                }
            }

            function generateData(rep, params, func) {
                var table_body = [];
                var table1_body = [];
                var content_detail = [];

                table_body.push([
                    {'text': $filter('translate')('field'), style: 'tableHeader'},
                    {'text': $filter('translate')('square'), style: 'tableHeader'},
                    {'text': $filter('translate')('perimetr'), style: 'tableHeader'},
                    {'text': $filter('translate')('cultures'), style: 'tableHeader'},
                ]);

                var cultures = [];
                for (var c = 0; c < rep.cultureList.length; c++) {
                    var culture = rep.cultureList[c];
                    cultures.push(
                        {'text': $filter('translate')(culture.name), style: 'td'}
                    )
                }

                table_body.push([
                    {'text': rep.geozone_name, style: 'td'},
                    {'text': $filter('number')(rep.square, 2), style: 'td'},
                    {'text': $filter('number')(rep.perimetr, 2), style: 'td'},
                    cultures,
                ]);

                table1_body.push([
                    {'text': $filter('translate')('vehicle'), style: 'tableHeader'},
                    {'text': $filter('translate')('processed'), style: 'tableHeader'},
                    {'text': $filter('translate')('processed.without.violation'), style: 'tableHeader'},
                    {'text': $filter('translate')('processed.with.violation'), style: 'tableHeader'},
                ]);

                for (var i = 0; i < rep.vehicles.length; i++) {
                    var reportDetail = rep.vehicles[i];

                    table1_body.push([
                        {'text': reportDetail.vehicle_name, style: 'td'},
                        {'text': $filter('number')(params.scope.getProcessed(reportDetail), 2), style: 'td'},
                        {'text': $filter('number')(reportDetail.processed_ideal, 2), style: 'td'},
                        {'text': $filter('number')(reportDetail.processed, 2), style: 'td'}
                    ]);
                }

                content_detail.push(
                    {
                        color: '#444',
                        margin: [0, 0, 0, 20],
                        table: {
                            widths: [130, 130, 130, 130],
                            heights: 20,
                            body: table_body,
                            alignment: 'center',
                            dontBreakRows: true,
                        },
                    })


                content_detail.push(
                    {
                        color: '#444',
                        margin: [0, 0, 0, 20],
                        table: {
                            widths: [220, 100, 100, 100],
                            heights: 20,
                            body: table1_body,
                            alignment: 'center',
                            dontBreakRows: true,
                        },
                    })

                if (rep.workType.temperature_min != null) {
                    var temperature_min = rep.workType.temperature_min
                } else {
                    var temperature_min = ""
                }

                if (rep.workType.temperature_max != null) {
                    var temperature_max = rep.workType.temperature_max
                } else {
                    var temperature_max = ""
                }

                if (rep.workType.wind_speed_min != null) {
                    var wind_speed_min = rep.workType.wind_speed_min
                } else {
                    var wind_speed_min = ""
                }

                if (rep.workType.temperature_max != null) {
                    var wind_speed_max = rep.workType.wind_speed_max
                } else {
                    var wind_speed_max = ""
                }

                if (rep.workType.min_speed != null) {
                    var min_speed = rep.workType.min_speed
                } else {
                    var min_speed = ""
                }

                if (rep.workType.max_speed != null) {
                    var max_speed = rep.workType.max_speed
                } else {
                    var max_speed = ""
                }

                var graph = [];
                for (var x in charts) {
                    var chart = charts[x];
                    graph.push({
                        alignment: 'center',
                        "width": "600",
                        "image": chart.exportedImage,
//                         "fit": [5000, 500]
                    });
                }

                var content = {
                    info: {
                        title: 'Agrocontrol',
                        author: 'Agrocontrol',
                        subject: '',
                        keywords: '',
                    },
                    footer: {
                        columns: [
                            {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 20, 5]}
                        ]
                    },
                    pageMargins: [20, 25, 20, 30],
                    extend: 'pdfHtml5',
                    pageSize: 'A4',
//                     pageOrientation: 'landscape',
                    content: [
                        {
                            'text': $filter('translate')('reportType') + " " + $filter('lowercase')($filter('translate')('report.byWorkType')) + ": " + $filter('translate')(rep.work_type_name),
                            alignment: 'center',
                            bold: 'true',
                        },
                        {'text': rep.geozone_name, alignment: 'center', bold: 'true'},
                        {
                            'text': $filter('date')(rep.date_start * 1000, 'dd.MM.yyyy HH:mm:ss') + " - " + $filter('date')(rep.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                            alignment: 'center',
                            bold: 'true',
                            margin: [0, 0, 0, 20]
                        },
                        content_detail,
                        {
                            'text': $filter('translate')('worktype.allow.temperature') + ": " + temperature_min + " - " + temperature_max,
                            alignment: 'left',
                            bold: 'true',
                            fontSize: 10
                        },
                        {
                            'text': $filter('translate')('worktype.allow.wind_speed') + ": " + wind_speed_min + " - " + wind_speed_max,
                            alignment: 'left',
                            bold: 'true',
                            fontSize: 10
                        },
                        {
                            'text': $filter('translate')('worktype.allow.speed') + ": " + min_speed + " - " + max_speed,
                            alignment: 'left',
                            margin: [0, 0, 0, 20],
                            bold: 'true',
                            fontSize: 10
                        },
                        graph
                    ],

                    styles: {
                        tableHeader: {
                            alignment: 'center',
                            fillColor: '#A9A9A9',
                            color: 'black',
                            fontSize: 9,
                            bold: 'true'
                        },
                        td: {
                            alignment: 'center',
                            height: '100',
                            fontSize: 8
                        },
                        header: {
                            fontSize: 9,
                            bold: 'true',
                            color: 'black',
                        }
                    }
                };

                if (func) {
                    const pdfDocGenerator = pdfMake.createPdf(content);
                    pdfDocGenerator.getBase64((data) => {
                        func.call(this, data);
                    });
                } else {
                    cratePdf(content);
                }
            }
        }

//----------------------
//Контроль присутствия ТС в точке
        function controlVehicleInPoint(rep, func) {
            var table_body = [];
            var table1_body = [];
            var content_detail = [];

            rep.repDetail.sort(function (a, b) {
                if (a.tm < b.tm) {
                    return -1;
                }
                if (a.tm > b.tm) {
                    return 1;
                }
                return 0;
            });

            table_body.push([
                {'text': "", style: 'tableHeader'},
                {'text': $filter('translate')('vehicle'), style: 'tableHeader'},
                {'text': $filter('translate')('radius.distance'), style: 'tableHeader'},
                {'text': $filter('translate')('time'), style: 'tableHeader'},
            ])

            for (var i = 0; i < rep.repDetail.length; i++) {
                var row = rep.repDetail[i];
                table_body.push([
                    {'text': i + 1, style: 'td'},
                    {'text': row.vehicle.name, style: 'td'},
                    {
                        'text': $filter('number')(row.distance, 1) + " " + $filter('translate')('m_short'),
                        style: 'td'
                    },
                    {'text': $filter('date')(row.tm * 1000, 'dd.MM.yyyy HH:mm:ss'), style: 'td'}
                ]);
            }

            content_detail.push(
                {
                    color: '#444',
                    margin: [0, 0, 0, 20],
                    table: {
                        widths: [20, 280, 110, 110],
                        heights: 20,
                        body: table_body,
                        alignment: 'center',
                        dontBreakRows: true,
                    },
                })

            var content = {
                info: {
                    title: 'Agrocontrol',
                    author: 'Agrocontrol',
                    subject: '',
                    keywords: '',
                },
                footer: {
                    columns: [
                        {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 20, 5]}
                    ]
                },
                pageMargins: [20, 25, 20, 30],
                extend: 'pdfHtml5',
                pageSize: 'A4',
                content: [
                    {
                        'text': $filter('translate')('reportType') + " " + $filter('lowercase')($filter('translate')('report.control.vehicle.in.point')),
                        alignment: 'center',
                        bold: 'true',
                    },
                    {'text': rep.lat + " " + rep.lon, alignment: 'center', bold: 'true'},
                    {
                        'text': $filter('date')(rep.datefrom * 1000, 'dd.MM.yyyy HH:mm:ss') + " - " + $filter('date')(rep.dateto * 1000, 'dd.MM.yyyy HH:mm:ss'),
                        alignment: 'center',
                        bold: 'true',
                        margin: [0, 0, 0, 20]
                    },
                    content_detail,
                ],

                styles: {
                    tableHeader: {
                        alignment: 'center',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    td: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8
                    },
                    header: {
                        fontSize: 9,
                        bold: 'true',
                        color: 'black',
                    }
                }
            };

            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });
            } else {
                cratePdf(content);
            }
        }

//----------------------
//По пробегу
        function byDistance(rep, params, func) {
            var table_body = [];
            var content_detail = [];

            table_body.push([
                {'text': $filter('translate')('date'), style: 'tableHeader'},
                {'text': $filter('translate')('distance'), style: 'tableHeader'},
                {'text': $filter('translate')('time.going'), style: 'tableHeader'},
                {'text': $filter('translate')('downtime'), style: 'tableHeader'},
                {'text': $filter('translate')('avgspeed'), style: 'tableHeader'},
                {'text': $filter('translate')('maxspeed'), style: 'tableHeader'},
                {'text': $filter('translate')('time.start.going'), style: 'tableHeader'},
                {'text': $filter('translate')('time.end.going'), style: 'tableHeader'},
            ]);

            for (var i = 0; i < rep.data.length; i++) {
                var rep1 = rep.data[i];

                table_body.push([
                    {
                        'text': rep1.vehicle.name,
                        style: 'header',
                        colSpan: 8,
                        border: [false, false, false, false],
                        fillColor: '#D9EDF7'
                    },
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {'text': "", style: 'header', border: [false, false, false, false],}
                ]);

                if (params.scope.reportFormData.splitByDays) {
                    for (var r = 0; r < rep1.reportDetailList.length; r++) {
                        var detail = rep1.reportDetailList[r];

                        if (detail.time_end) {
                            var time_start = {
                                'text': $filter('date')(detail.time_start * 1000, 'HH:mm'),
                                style: 'td'
                            }
                            var time_end = {'text': $filter('date')(detail.time_end * 1000, 'HH:mm'), style: 'td'}
                        } else {
                            var time_start = {'text': '', style: 'td'}
                            var time_end = {'text': '', style: 'td'}
                        }


                        table_body.push([
                            {'text': $filter('date')(detail.date, 'dd.MM.yyyy'), style: 'td'},
                            {'text': $filter('number')(detail.distance, 1), style: 'td'},
                            {'text': $filter('secondsToDateTimeWithDaysFull')(detail.time_going), style: 'td'},
                            {'text': $filter('secondsToDateTimeWithDaysFull')(detail.time_stopping), style: 'td'},
                            {'text': $filter('number')(detail.avg_speed, 0), style: 'td'},
                            {'text': $filter('number')(detail.max_speed, 0), style: 'td'},
                            time_start,
                            time_end
                        ]);
                    }
                    if (rep1.time_end) {
                        var time_start = {'text': $filter('date')(rep1.time_start * 1000, 'HH:mm'), style: 'header'}
                        var time_end = {'text': $filter('date')(rep1.time_end * 1000, 'HH:mm'), style: 'header'}
                    } else {
                        var time_start = {'text': '', style: 'header'}
                        var time_end = {'text': '', style: 'header'}
                    }

                    table_body.push([
                        {'text': $filter('translate')('total'), style: 'header'},
                        {'text': $filter('number')(rep1.distance, 1), style: 'header'},
                        {'text': $filter('secondsToDateTimeWithDaysFull')(rep1.time_going), style: 'header'},
                        {'text': $filter('secondsToDateTimeWithDaysFull')(rep1.time_stopping), style: 'header'},
                        {'text': $filter('number')(rep1.avg_speed, 0), style: 'header'},
                        {'text': $filter('number')(rep1.max_speed, 0), style: 'header'},
                        time_start,
                        time_end,
                    ]);

                } else {
                    if (rep1.time_end) {
                        var time_start = {'text': $filter('date')(rep1.time_start * 1000, 'HH:mm'), style: 'header'}
                        var time_end = {'text': $filter('date')(rep1.time_end * 1000, 'HH:mm'), style: 'header'}
                    } else {
                        var time_start = {'text': '', style: 'header'}
                        var time_end = {'text': '', style: 'header'}
                    }

                    table_body.push([
                        {'text': $filter('translate')('total'), style: 'header'},
                        {'text': $filter('number')(rep1.distance, 1), style: 'header'},
                        {'text': $filter('secondsToDateTimeWithDaysFull')(rep1.time_going), style: 'header'},
                        {'text': $filter('secondsToDateTimeWithDaysFull')(rep1.time_stopping), style: 'header'},
                        {'text': $filter('number')(rep1.avg_speed, 0), style: 'header'},
                        {'text': $filter('number')(rep1.max_speed, 0), style: 'header'},
                        time_start,
                        time_end,
                    ]);
                }
            }

            content_detail.push(
                {
                    color: '#444',
                    margin: [0, 0, 0, 20],
                    table: {
                        widths: [60, 60, 60, 60, 60, 65, 60, 55],
                        heights: 20,
                        body: table_body,
                        alignment: 'center',
                        dontBreakRows: true,
                    },
                })


            var content = {
                info: {
                    title: 'Agrocontrol',
                    author: 'Agrocontrol',
                    subject: '',
                    keywords: '',
                },
                footer: {
                    columns: [
                        {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 20, 5]}
                    ]
                },
                pageMargins: [20, 25, 20, 30],
                extend: 'pdfHtml5',
                pageSize: 'A4',
                content: [
                    {
                        'text': $filter('translate')('reportType') + " " + $filter('lowercase')($filter('translate')('report.vehicle.distance')),
                        alignment: 'center',
                        bold: 'true',
                    },
                    {
                        'text': $filter('date')(rep.date_start * 1000, 'dd.MM.yyyy HH:mm:ss') + " - " + $filter('date')(rep.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                        alignment: 'center',
                        bold: 'true',
                        margin: [0, 0, 0, 20]
                    },
                    content_detail,
                ],

                styles: {
                    tableHeader: {
                        alignment: 'center',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    td: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8
                    },
                    header: {
                        fontSize: 9,
                        bold: 'true',
                        color: 'black',
                        alignment: 'center'
                    }
                }
            };

            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });
            } else {
                cratePdf(content);
            }
        }

//По пробегу(списком)
        function byDistanceList(rep, func) {
            var table_body = [];
            var content_detail = [];

            rep.data.sort(function (a, b) {
                return 2 * (a.date > b.date ? 1 : a.date < b.date ? -1 : 0) +
                    1 * (a.vehicleGroup_name > b.vehicleGroup_name ? 1 : a.vehicleGroup_name < b.vehicleGroup_name ? -1 : 0) +
                    1 * (a.vehicle_name > b.vehicle_name ? 1 : a.vehicle_name < b.vehicle_name ? -1 : 0)
            })


            table_body.push([
                {'text': $filter('translate')('date'), style: 'tableHeader'},
                {'text': $filter('translate')('group'), style: 'tableHeader'},
                {'text': $filter('translate')('vehicle'), style: 'tableHeader'},
                {'text': $filter('translate')('distance'), style: 'tableHeader'},
                {'text': $filter('translate')('time.going'), style: 'tableHeader'},
                {'text': $filter('translate')('downtime'), style: 'tableHeader'},
                {'text': $filter('translate')('avgspeed'), style: 'tableHeader'},
                {'text': $filter('translate')('maxspeed'), style: 'tableHeader'},
                {'text': $filter('translate')('time.start.going'), style: 'tableHeader'},
                {'text': $filter('translate')('time.end.going'), style: 'tableHeader'},
                {'text': $filter('translate')('hour_shift.duration'), style: 'tableHeader'},
            ]);

            for (var i = 0; i < rep.data.length; i++) {
                var detail = rep.data[i];

                table_body.push([
                    {'text': $filter('date')(detail.date, 'dd.MM.yyyy'), style: 'td'},
                    {'text': detail.vehicleGroup_name, style: 'td'},
                    {'text': detail.vehicle_name, style: 'td'},
                    {'text': $filter('number')(detail.distance, 1), style: 'td'},
                    {'text': $filter('secondsToDateTime')(detail.time_going), style: 'td'},
                    {'text': $filter('secondsToDateTime')(detail.time_stopping), style: 'td'},
                    {'text': $filter('number')(detail.avg_speed, 0), style: 'td'},
                    {'text': $filter('number')(detail.max_speed, 0), style: 'td'},
                    {'text': $filter('date')(detail.time_start * 1000, 'HH:mm'), style: 'td'},
                    {'text': $filter('date')(detail.time_end * 1000, 'HH:mm'), style: 'td'},
                    {'text': $filter('secondsToDateTime2')(detail.time_end - detail.time_start), style: 'td'},
                ]);


            }

            content_detail.push(
                {
                    color: '#444',
                    margin: [0, 0, 0, 20],
                    table: {
                        widths: [50, 95, 100, 50, 50, 45, 60, 65, 55, 50, 90],
                        heights: 20,
                        body: table_body,
                        alignment: 'center',
                        dontBreakRows: true,
                    },
                })


            var content = {
                info: {
                    title: 'Agrocontrol',
                    author: 'Agrocontrol',
                    subject: '',
                    keywords: '',
                },
                footer: {
                    columns: [
                        {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 20, 5]}
                    ]
                },
                pageMargins: [20, 25, 20, 30],
                extend: 'pdfHtml5',
                pageSize: 'A4',
                pageOrientation: 'landscape',
                content: [
                    {
                        'text': $filter('translate')('reportType') + " " + $filter('lowercase')($filter('translate')('report.vehicle.distance.list')),
                        alignment: 'center',
                        bold: 'true',
                    },
                    {
                        'text': $filter('date')(rep.date_start * 1000, 'dd.MM.yyyy HH:mm:ss') + " - " + $filter('date')(rep.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                        alignment: 'center',
                        bold: 'true',
                        margin: [0, 0, 0, 20]
                    },
                    content_detail,
                ],

                styles: {
                    tableHeader: {
                        alignment: 'center',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    td: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8
                    },
                    header: {
                        fontSize: 9,
                        bold: 'true',
                        color: 'black',
                        alignment: 'center'
                    }
                }
            };

            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });
            } else {
                cratePdf(content);
            }
        }

//Взвешивания по хозяйству
        function farmByDevice(rep, params, func) {
            var table_body = [];
            var table1_body = [];
            var content_detail = [];

            table_body.push([
                {'text': $filter('translate')('date'), style: 'tableHeader', rowSpan: 2},
                {'text': $filter('translate')('farm'), style: 'tableHeader', rowSpan: 2},
                {'text': $filter('translate')('farm.weighted'), style: 'tableHeader', rowSpan: 2},
                {'text': $filter('translate')('vehicle'), style: 'tableHeader', rowSpan: 2},
                {'text': $filter('translate')('driver'), style: 'tableHeader', rowSpan: 2},
                {'text': $filter('translate')('culture'), style: 'tableHeader', rowSpan: 2},
                {'text': $filter('translate')('weight.full').replace("(", ' ('), style: 'tableHeader', rowSpan: 2},
                {'text': $filter('translate')('weight.tare').replace("(", ' ('), style: 'tableHeader', rowSpan: 2},
                {'text': $filter('translate')('weight.netto').replace("(", ' ('), style: 'tableHeader', rowSpan: 2},
            ]);

            table1_body.push([
                {'text': $filter('translate')('vehicle.to'), colSpan: 3, style: 'tableHeader'},
                {},
                {},
                {'text': $filter('translate')('trailer.type.transport'), colSpan: 3, style: 'tableHeader'},
                {},
                {},
                {'text': $filter('translate')('humidity'), style: 'tableHeader', rowSpan: 2},
                {'text': $filter('translate')('moving.type'), style: 'tableHeader', rowSpan: 2},
                {'text': $filter('translate')('comment'), style: 'tableHeader', rowSpan: 2}
            ])

            table_body.push([
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
            ]);

            table1_body.push([
                {'text': $filter('translate')('weight.full').replace("(", ' ('), style: 'tableHeader'},
                {'text': $filter('translate')('weight.tare').replace("(", ' ('), style: 'tableHeader'},
                {'text': $filter('translate')('date.tare'), style: 'tableHeader'},
                {'text': $filter('translate')('weight.full').replace("(", ' ('), style: 'tableHeader'},
                {'text': $filter('translate')('weight.tare').replace("(", ' ('), style: 'tableHeader'},
                {'text': $filter('translate')('date.tare'), style: 'tableHeader'},
                {},
                {},
                {},
            ]);

            for (var i = 0; i < rep.repDetail.length; i++) {
                var reportDetail = rep.repDetail[i];

                for (var r = 0; r < reportDetail.length; r++) {
                    var detail = reportDetail[r]

                    table_body.push([
                        {'text': $filter('date')(detail.tm * 1000, 'dd.MM.yyyy HH:mm:ss'), style: 'td'},
                        {'text': detail.elevator_name, style: 'td'},
                        {'text': detail.farm_name, style: 'td'},
                        {'text': detail.vehicle_name, style: 'td'},
                        {'text': detail.driver_name, style: 'td'},
                        {'text': $filter('translate')(detail.culture_name), style: 'td'},
                        {'text': $filter('number')(detail.weightFull, 0), style: 'td'},
                        {'text': $filter('number')(detail.weightTare, 0), style: 'td'},
                        {'text': $filter('number')(detail.weightNetto, 0), style: 'td'},
                    ]);


                    if (detail.farmElevatorFrom_name) {
                        var farmElevatorFrom_name = detail.farmElevatorFrom_name
                    } else {
                        var farmElevatorFrom_name = ""
                    }

                    if (detail.farmStoreFrom_name) {
                        var farmStoreFrom_name = detail.farmStoreFrom_name
                    } else {
                        var farmStoreFrom_name = ""
                    }

                    if (detail.farmDryingFrom_name) {
                        var farmDryingFrom_name = detail.farmDryingFrom_name
                    } else {
                        var farmDryingFrom_name = ""
                    }

                    if (detail.farmStoreTo_name) {
                        var farmStoreTo_name = detail.farmStoreTo_name
                    } else {
                        var farmStoreTo_name = ""
                    }

                    if (detail.farmDryingTo_name) {
                        var farmDryingTo_name = detail.farmDryingTo_name
                    } else {
                        var farmDryingTo_name = ""
                    }

                    if (detail.farmElevatorTo_name) {
                        var farmElevatorTo_name = detail.farmElevatorTo_name
                    } else {
                        var farmElevatorTo_name = ""
                    }

                    if (detail.farmContractor_name) {
                        var farmContractor_name = detail.farmContractor_name
                    } else {
                        var farmContractor_name = ""
                    }

                    if (detail.farmMovingType_name) {
                        var farmMovingType_name = $filter('translate')(detail.farmMovingType_name)
                    } else {
                        var farmMovingType_name = ""
                    }

                    if (detail.weightCar) {
                        var weightCar = {'text': $filter('number')(detail.weightCar, 0), style: 'td'}
                    } else {
                        var weightCar = {'text': '', style: 'td'}
                    }

                    if (detail.weightTareCar) {
                        var weightTareCar = {'text': $filter('number')(detail.weightTareCar, 0), style: 'td'}
                    } else {
                        var weightTareCar = {'text': '', style: 'td'}
                    }

                    if (detail.tmTareCar) {
                        var tmTareCar = {
                            'text': $filter('date')(detail.tmTareCar * 1000, 'dd.MM.yyyy HH:mm:ss'),
                            style: 'td'
                        }
                    } else {
                        var tmTareCar = {'text': '', style: 'td'}
                    }

                    if (detail.weightTrailer) {
                        var weightTrailer = {'text': $filter('number')(detail.weightTrailer, 0), style: 'td'}
                    } else {
                        var weightTrailer = {'text': '', style: 'td'}
                    }

                    if (detail.weightTareTrailer) {
                        var weightTareTrailer = {
                            'text': $filter('number')(detail.weightTareTrailer, 0),
                            style: 'td'
                        }
                    } else {
                        var weightTareTrailer = {'text': '', style: 'td'}
                    }


                    if (detail.tmTareTrailer) {
                        var tmTareTrailer = {
                            'text': $filter('date')(detail.tmTareTrailer * 1000, 'dd.MM.yyyy HH:mm:ss'),
                            style: 'td'
                        }
                    } else {
                        var tmTareTrailer = {'text': '', style: 'td'}
                    }


                    table1_body.push([
                        weightCar,
                        weightTareCar,
                        tmTareCar,
                        weightTrailer,
                        weightTareTrailer,
                        tmTareTrailer,
                        {'text': $filter('number')(detail.humidity, 2), style: 'td'},
                        {
                            'text': farmMovingType_name + ' ' + farmElevatorFrom_name + farmStoreFrom_name + farmDryingFrom_name + " -> " + farmStoreTo_name + farmDryingTo_name + farmElevatorTo_name + farmContractor_name,
                            style: 'td'
                        },
                        {'text': detail.comment, style: 'td'},
                    ])

                }
                table_body.push([
                    {
                        'text': $filter('translate')('total.by') + " " + $filter('date')(reportDetail[0].tm * 1000, 'dd.MM.yyyy '),
                        colSpan: 2,
                        style: 'header',
                        border: [true, true, false, true],
                        alignment: 'left'
                    },
                    {},
                    {'text': '', colSpan: 6, border: [false, false, false, true]},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {
                        'text': $filter('number')(params.scope.getTotal(reportDetail, 'weightNetto'), 0),
                        style: 'header'
                    },
                ]);
            }
            table_body.push([
                {
                    'text': $filter('translate')('total.by.period'),
                    style: 'header',
                    border: [true, true, false, true],
                    colSpan: 2,
                    alignment: 'left'
                },
                {},
                {'text': '', colSpan: 6, border: [false, false, false, true]},

                {},
                {},
                {},
                {},
                {},
                {
                    'text': $filter('number')(params.scope.getTotalByArray(rep.repDetail, 'weightNetto'), 0),
                    style: 'header'
                },
            ]);

            if (rep.farm_device_name) {
                var farm_device_name = rep.farm_device_name
            } else {
                var farm_device_name = ''
            }

            content_detail.push(
                {
                    'text': $filter('translate')('reportType') + " " + $filter('lowercase')($filter('translate')('report.farmByDevice')) + ": " + farm_device_name,
                    alignment: 'center',
                    bold: 'true',
                },
                {
                    'text': $filter('date')(rep.date_start * 1000, 'dd.MM.yyyy HH:mm:ss') + " - " + $filter('date')(rep.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                    alignment: 'center',
                    bold: 'true',
                    margin: [0, 0, 0, 20]
                },
                {
                    color: '#444',
                    margin: [0, 0, 0, 20],
                    table: {
                        widths: [60, 80, 80, 130, 110, 80, 60, 60, 60],
                        heights: 20,
                        body: table_body,
                        alignment: 'center',
                        dontBreakRows: true,
                    },
                })

            if (rep.farm_device_name) {
                var farm_device_name = rep.farm_device_name
            } else {
                var farm_device_name = ''
            }
            content_detail.push(
                {
                    'text': $filter('translate')('reportType') + " " + $filter('lowercase')($filter('translate')('report.farmByDevice')) + ": " + farm_device_name,
                    alignment: 'center',
                    bold: 'true',
                    pageBreak: 'before'
                },
                {
                    'text': $filter('date')(rep.date_start * 1000, 'dd.MM.yyyy HH:mm:ss') + " - " + $filter('date')(rep.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                    alignment: 'center',
                    bold: 'true',
                    margin: [0, 0, 0, 20]
                },
                {
                    color: '#444',
                    margin: [0, 0, 0, 20],
                    table: {
                        widths: [70, 80, 80, 70, 80, 80, 60, 110, 90],
                        heights: 20,
                        body: table1_body,
                        alignment: 'center',
                        dontBreakRows: true,
                    },
                })


            var content = {
                info: {
                    title: 'Agrocontrol',
                    author: 'Agrocontrol',
                    subject: '',
                    keywords: '',
                },
                footer: {
                    columns: [
                        {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 20, 5]}
                    ]
                },
                pageMargins: [20, 25, 20, 30],
                extend: 'pdfHtml5',
                pageSize: 'A4',
                pageOrientation: 'landscape',
                content: [

                    content_detail,
                ],

                styles: {
                    tableHeader: {
                        alignment: 'center',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    td: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8
                    },
                    header: {
                        fontSize: 9,
                        bold: 'true',
                        color: 'black',
                        alignment: 'center'
                    }
                }
            };

            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });
            } else {
                cratePdf(content);
            }
        }

//-----------------------
//Контроль веса выгрузок(только нарушения)
        function controlWeightByUnloading(rep, func) {
            var table_body = [];
            var content_detail = [];

            const regex = /&#179;/gi;

            for (var i = 0; i < rep.repDetail.length; i++) {
                var reportDetail = rep.repDetail[i];

                for (var r = 0; r < reportDetail.length; r++) {
                    var detail = reportDetail[r]

                    table_body.push([
                        {'text': $filter('translate')('date'), style: 'tableHeader'},
                        {'text': $filter('translate')('farm'), style: 'tableHeader'},
                        {'text': $filter('translate')('vehicle'), style: 'tableHeader'},
                        {'text': $filter('translate')('driver'), style: 'tableHeader'},
                        {'text': $filter('translate')('culture'), style: 'tableHeader'},
                        {'text': $filter('translate')('weight.full').replace("(", ' ('), style: 'tableHeader'},
                        {'text': $filter('translate')('weight.tare').replace("(", ' ('), style: 'tableHeader'},
                        {'text': $filter('translate')('weight.netto').replace("(", ' ('), style: 'tableHeader'},
                        {'text': $filter('translate')('weight.need'), style: 'tableHeader'},
                        {'text': $filter('translate')('weight.m_kub').replace(regex, '³'), style: 'tableHeader'},
                        {'text': $filter('translate')('humidity'), style: 'tableHeader'},
                        {'text': $filter('translate')('comment'), style: 'tableHeader'}
                    ]);

                    table_body.push([
                        {'text': $filter('date')(detail.tm * 1000, 'dd.MM.yyyy HH:mm:ss'), style: 'td'},
                        {'text': detail.farm_name, style: 'td'},
                        {'text': detail.vehicle_name, style: 'td'},
                        {'text': detail.driver_name, style: 'td'},
                        {'text': $filter('translate')(detail.culture_name), style: 'td'},
                        {'text': $filter('number')(detail.weightFull, 0), style: 'td'},
                        {'text': $filter('number')(detail.weightTare, 0), style: 'td'},
                        {'text': $filter('number')(detail.weightNetto, 0), style: 'td'},
                        {
                            'text': $filter('number')(detail.weightFrom, 0) + " - " + $filter('number')(detail.weightTo, 0),
                            style: 'td'
                        },
                        {'text': $filter('number')(detail.weightKub, 1), style: 'td'},
                        {'text': $filter('number')(detail.humidity, 2), style: 'td'},
                        {'text': detail.comment, style: 'td'},
                    ]);
                    if (detail.harvestUnloadingList.length > 0) {
                        table_body.push([
                            {
                                'text': $filter('translate')('harvest.unloading'),
                                style: 'tableHeader',
                                colSpan: 12,
                                fillColor: '#F0EEEE'
                            },
                            {},
                            {},
                            {},
                            {},
                            {},
                            {},
                            {},
                            {},
                            {},
                            {},
                            {}

                        ]);

                        table_body.push([
                            {
                                'text': $filter('translate')('date'),
                                style: 'tableHeader',
                                colSpan: 2,
                                fillColor: '#F0EEEE'
                            },
                            {},
                            {
                                'text': $filter('translate')('vehicle'),
                                style: 'tableHeader',
                                colSpan: 3,
                                fillColor: '#F0EEEE'
                            },
                            {},
                            {},
                            {
                                'text': $filter('translate')('driver'),
                                style: 'tableHeader',
                                colSpan: 3,
                                fillColor: '#F0EEEE'
                            },
                            {},
                            {},
                            {
                                'text': $filter('translate')('weight.m_kub').replace(regex, '³'),
                                style: 'tableHeader',
                                colSpan: 2,
                                fillColor: '#F0EEEE'
                            },
                            {},
                            {
                                'text': $filter('translate')('weight.netto'),
                                style: 'tableHeader',
                                colSpan: 2,
                                fillColor: '#F0EEEE'
                            },
                            {}

                        ]);

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

                            table_body.push([
                                {
                                    'text': $filter('date')(unloading.tm * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                    style: 'td',
                                    colSpan: 2
                                },
                                {},
                                {'text': unloading.vehicle_from_name, style: 'td', colSpan: 3},
                                {},
                                {},
                                {'text': unloading.driver_from_name, style: 'td', colSpan: 3},
                                {},
                                {},
                                {'text': $filter('number')(unloading.weight_kub), style: 'td', colSpan: 2},
                                {},
                                {'text': $filter('number')(unloading.weight_kg, 0), style: 'td', colSpan: 2},
                                {}

                            ]);
                        }

                    }

                    table_body.push([
                        {'text': "", border: [false, false, false, false], colSpan: 12},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {'text': ''}

                    ]);


                }
            }

            if (rep.farm_device_name) {
                var farm_device_name = rep.farm_device_name
            } else {
                var farm_device_name = ''
            }

            content_detail.push(
                {
                    'text': $filter('translate')('reportType') + " " + $filter('lowercase')($filter('translate')('report.controlWeightByUnloading')) + ": " + farm_device_name,
                    alignment: 'center',
                    bold: 'true',
                },
                {
                    'text': $filter('date')(rep.date_start * 1000, 'dd.MM.yyyy HH:mm:ss') + " - " + $filter('date')(rep.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                    alignment: 'center',
                    bold: 'true',
                    margin: [0, 0, 0, 20]
                },
                {
                    color: '#444',
                    margin: [0, 0, 0, 20],
                    table: {
                        widths: [40, 60, 110, 95, 60, 35, 35, 35, 70, 40, 50, 60],
                        heights: 20,
                        body: table_body,
                        alignment: 'center',
                        dontBreakRows: true,
                    },
                })


            var content = {
                info: {
                    title: 'Agrocontrol',
                    author: 'Agrocontrol',
                    subject: '',
                    keywords: '',
                },
                footer: {
                    columns: [
                        {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 20, 5]}
                    ]
                },
                pageMargins: [20, 25, 20, 30],
                extend: 'pdfHtml5',
                pageSize: 'A4',
                pageOrientation: 'landscape',
                content: [

                    content_detail,
                ],

                styles: {
                    tableHeader: {
                        alignment: 'center',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    td: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8
                    },
                    header: {
                        fontSize: 9,
                        bold: 'true',
                        color: 'black',
                        alignment: 'center'
                    }
                }
            };

            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });
            } else {
                cratePdf(content);
            }
        }

//---------------------
//Взвешивания + выгрузки
        function weightAndUnloading(rep, func) {
            var table_body = [];
            var content_detail = [];

            const regex = /&#179;/gi;

            for (var i = 0; i < rep.repDetail.length; i++) {
                var reportDetail = rep.repDetail[i];

                for (var r = 0; r < reportDetail.length; r++) {
                    var detail = reportDetail[r]

                    table_body.push([
                        {'text': $filter('translate')('date'), style: 'tableHeader'},
                        {'text': $filter('translate')('farm'), style: 'tableHeader'},
                        {'text': $filter('translate')('vehicle'), style: 'tableHeader'},
                        {'text': $filter('translate')('driver'), style: 'tableHeader'},
                        {'text': $filter('translate')('culture'), style: 'tableHeader'},
                        {'text': $filter('translate')('weight.netto').replace("(", ' ('), style: 'tableHeader'},
                        {'text': $filter('translate')('weight.full'), style: 'tableHeader'},
                        {'text': $filter('translate')('weight.tare').replace(regex, '³'), style: 'tableHeader'},
                        {'text': $filter('translate')('humidity'), style: 'tableHeader'},
                        {'text': $filter('translate')('comment'), style: 'tableHeader'}
                    ]);
                    table_body.push([
                        {'text': $filter('date')(detail.tm * 1000, 'dd.MM.yyyy HH:mm:ss'), style: 'td'},
                        {'text': detail.farm_name, style: 'td'},
                        {'text': detail.vehicle_name, style: 'td'},
                        {'text': detail.driver_name, style: 'td'},
                        {'text': $filter('translate')(detail.culture_name), style: 'td'},
                        {'text': $filter('number')(detail.weightNetto, 0), style: 'td'},
                        {'text': $filter('number')(detail.weightFull, 0), style: 'td'},
                        {'text': $filter('number')(detail.weightTare, 0), style: 'td'},
                        {'text': $filter('number')(detail.humidity, 2), style: 'td'},
                        {'text': detail.comment, style: 'td'},
                    ]);

                    table_body.push([
                        {
                            'text': $filter('translate')('harvest.unloading'),
                            style: 'tableHeader',
                            colSpan: 10,
                            fillColor: '#F0EEEE'
                        },
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                    ]);

                    table_body.push([
                        {
                            'text': $filter('translate')('date'),
                            style: 'tableHeader',
                            colSpan: 2,
                            fillColor: '#F0EEEE'
                        },
                        {},
                        {
                            'text': $filter('translate')('vehicle'),
                            style: 'tableHeader',
                            colSpan: 2,
                            fillColor: '#F0EEEE'
                        },
                        {},
                        {
                            'text': $filter('translate')('driver'),
                            style: 'tableHeader',
                            colSpan: 2,
                            fillColor: '#F0EEEE'
                        },
                        {},
                        {
                            'text': $filter('translate')('weight.m_kub').replace(regex, '³'),
                            style: 'tableHeader',
                            colSpan: 2,
                            fillColor: '#F0EEEE'
                        },
                        {},
                        {
                            'text': $filter('translate')('weight.netto'),
                            style: 'tableHeader',
                            colSpan: 2,
                            fillColor: '#F0EEEE'
                        },
                        {}

                    ]);

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

                        table_body.push([
                            {
                                'text': $filter('date')(unloading.tm * 1000, 'dd.MM.yyyy HH:mm:ss'),
                                style: 'td',
                                colSpan: 2
                            },
                            {},
                            {'text': unloading.vehicle_from_name, style: 'td', colSpan: 2},
                            {},
                            {'text': unloading.driver_from_name, style: 'td', colSpan: 2},
                            {},
                            {'text': $filter('number')(unloading.weight_kub), style: 'td', colSpan: 2},
                            {},
                            {'text': $filter('number')(unloading.weight_kg, 0), style: 'td', colSpan: 2},
                            {}

                        ]);
                    }

                    table_body.push([
                        {'text': "", border: [false, false, false, false], colSpan: 10},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {'text': ''}
                    ]);


                }
            }

            if (rep.farm_device_name) {
                var farm_device_name = rep.farm_device_name
            } else {
                var farm_device_name = ''
            }

            content_detail.push(
                {
                    'text': $filter('translate')('reportType') + " " + $filter('lowercase')($filter('translate')('report.weightAndUnloading')) + ": " + farm_device_name,
                    alignment: 'center',
                    bold: 'true',
                },
                {
                    'text': $filter('date')(rep.date_start * 1000, 'dd.MM.yyyy HH:mm:ss') + " - " + $filter('date')(rep.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                    alignment: 'center',
                    bold: 'true',
                    margin: [0, 0, 0, 20]
                },
                {
                    color: '#444',
                    margin: [0, 0, 0, 20],
                    table: {
                        widths: [50, 70, 120, 100, 90, 60, 50, 50, 60, 60],
                        heights: 20,
                        body: table_body,
                        alignment: 'center',
                        dontBreakRows: true,
                    },
                })


            var content = {
                info: {
                    title: 'Agrocontrol',
                    author: 'Agrocontrol',
                    subject: '',
                    keywords: '',
                },
                footer: {
                    columns: [
                        {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 20, 5]}
                    ]
                },
                pageMargins: [20, 25, 20, 30],
                extend: 'pdfHtml5',
                pageSize: 'A4',
                pageOrientation: 'landscape',
                content: [

                    content_detail,
                ],

                styles: {
                    tableHeader: {
                        alignment: 'center',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    td: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8
                    },
                    header: {
                        fontSize: 9,
                        bold: 'true',
                        color: 'black',
                        alignment: 'center'
                    }
                }
            };

            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });
            } else {
                cratePdf(content);
            }
        }

//------------------------
//Метео (сводный)
        function meteoAggregate(rep, params, func) {
            var precipitation_table = [];
            var temperature_air_table = [];
            var temperature_ground_table = [];
            var temperature_air_avg_table = [];
            var temperature_ground_avg_table = [];

            var content_detail = [];

            precipitation_table.push([
                {'text': $filter('translate')('meteo'), style: 'tableHeader'},
                {'text': $filter('translate')('January'), style: 'tableHeader'},
                {'text': $filter('translate')('February'), style: 'tableHeader'},
                {'text': $filter('translate')('March'), style: 'tableHeader'},
                {'text': $filter('translate')('April'), style: 'tableHeader'},
                {'text': $filter('translate')('May'), style: 'tableHeader'},
                {'text': $filter('translate')('June'), style: 'tableHeader'},
                {'text': $filter('translate')('July'), style: 'tableHeader'},
                {'text': $filter('translate')('August'), style: 'tableHeader'},
                {'text': $filter('translate')('September'), style: 'tableHeader'},
                {'text': $filter('translate')('October'), style: 'tableHeader'},
                {'text': $filter('translate')('November'), style: 'tableHeader'},
                {'text': $filter('translate')('December'), style: 'tableHeader'},
                {'text': "", style: 'tableHeader'}
            ]);

            temperature_air_table.push([
                {'text': $filter('translate')('meteo'), style: 'tableHeader'},
                {'text': $filter('translate')('January'), style: 'tableHeader'},
                {'text': $filter('translate')('February'), style: 'tableHeader'},
                {'text': $filter('translate')('March'), style: 'tableHeader'},
                {'text': $filter('translate')('April'), style: 'tableHeader'},
                {'text': $filter('translate')('May'), style: 'tableHeader'},
                {'text': $filter('translate')('June'), style: 'tableHeader'},
                {'text': $filter('translate')('July'), style: 'tableHeader'},
                {'text': $filter('translate')('August'), style: 'tableHeader'},
                {'text': $filter('translate')('September'), style: 'tableHeader'},
                {'text': $filter('translate')('October'), style: 'tableHeader'},
                {'text': $filter('translate')('November'), style: 'tableHeader'},
                {'text': $filter('translate')('December'), style: 'tableHeader'}
            ]);

            temperature_ground_table.push([
                {'text': $filter('translate')('meteo'), style: 'tableHeader'},
                {'text': $filter('translate')('January'), style: 'tableHeader'},
                {'text': $filter('translate')('February'), style: 'tableHeader'},
                {'text': $filter('translate')('March'), style: 'tableHeader'},
                {'text': $filter('translate')('April'), style: 'tableHeader'},
                {'text': $filter('translate')('May'), style: 'tableHeader'},
                {'text': $filter('translate')('June'), style: 'tableHeader'},
                {'text': $filter('translate')('July'), style: 'tableHeader'},
                {'text': $filter('translate')('August'), style: 'tableHeader'},
                {'text': $filter('translate')('September'), style: 'tableHeader'},
                {'text': $filter('translate')('October'), style: 'tableHeader'},
                {'text': $filter('translate')('November'), style: 'tableHeader'},
                {'text': $filter('translate')('December'), style: 'tableHeader'}
            ]);

            temperature_air_avg_table.push([
                {'text': $filter('translate')('meteo'), style: 'tableHeader'},
                {'text': $filter('translate')('January'), style: 'tableHeader'},
                {'text': $filter('translate')('February'), style: 'tableHeader'},
                {'text': $filter('translate')('March'), style: 'tableHeader'},
                {'text': $filter('translate')('April'), style: 'tableHeader'},
                {'text': $filter('translate')('May'), style: 'tableHeader'},
                {'text': $filter('translate')('June'), style: 'tableHeader'},
                {'text': $filter('translate')('July'), style: 'tableHeader'},
                {'text': $filter('translate')('August'), style: 'tableHeader'},
                {'text': $filter('translate')('September'), style: 'tableHeader'},
                {'text': $filter('translate')('October'), style: 'tableHeader'},
                {'text': $filter('translate')('November'), style: 'tableHeader'},
                {'text': $filter('translate')('December'), style: 'tableHeader'}
            ]);

            temperature_ground_avg_table.push([
                {'text': $filter('translate')('meteo'), style: 'tableHeader'},
                {'text': $filter('translate')('January'), style: 'tableHeader'},
                {'text': $filter('translate')('February'), style: 'tableHeader'},
                {'text': $filter('translate')('March'), style: 'tableHeader'},
                {'text': $filter('translate')('April'), style: 'tableHeader'},
                {'text': $filter('translate')('May'), style: 'tableHeader'},
                {'text': $filter('translate')('June'), style: 'tableHeader'},
                {'text': $filter('translate')('July'), style: 'tableHeader'},
                {'text': $filter('translate')('August'), style: 'tableHeader'},
                {'text': $filter('translate')('September'), style: 'tableHeader'},
                {'text': $filter('translate')('October'), style: 'tableHeader'},
                {'text': $filter('translate')('November'), style: 'tableHeader'},
                {'text': $filter('translate')('December'), style: 'tableHeader'}
            ]);

            rep.repDetail.sort(function (a, b) {
                if ($filter('lowercase')(a.meteo.name) < $filter('lowercase')(b.meteo.name)) {
                    return -1;
                }
                if ($filter('lowercase')(a.meteo.name) > $filter('lowercase')(b.meteo.name)) {
                    return 1;
                }
                return 0;
            });

            for (var i = 0; i < rep.repDetail.length; i++) {
                var data = rep.repDetail[i];

                precipitation_table.push([
                    {'text': data.meteo.name, style: 'td'},
                    {'text': $filter('number')(data.precipitationList[0], 3), style: 'td'},
                    {'text': $filter('number')(data.precipitationList[1], 3), style: 'td'},
                    {'text': $filter('number')(data.precipitationList[2], 3), style: 'td'},
                    {'text': $filter('number')(data.precipitationList[3], 3), style: 'td'},
                    {'text': $filter('number')(data.precipitationList[4], 3), style: 'td'},
                    {'text': $filter('number')(data.precipitationList[5], 3), style: 'td'},
                    {'text': $filter('number')(data.precipitationList[6], 3), style: 'td'},
                    {'text': $filter('number')(data.precipitationList[7], 3), style: 'td'},
                    {'text': $filter('number')(data.precipitationList[8], 3), style: 'td'},
                    {'text': $filter('number')(data.precipitationList[9], 3), style: 'td'},
                    {'text': $filter('number')(data.precipitationList[10], 3), style: 'td'},
                    {'text': $filter('number')(data.precipitationList[11], 3), style: 'td'},
                    {'text': $filter('number')(params.scope.summByArray(data.precipitationList), 3), style: 'td'}
                ]);

                temperature_air_table.push([
                    {'text': data.meteo.name, style: 'td'},
                    {'text': $filter('number')(data.temperatureAirList[0], 1), style: 'td'},
                    {'text': $filter('number')(data.temperatureAirList[1], 1), style: 'td'},
                    {'text': $filter('number')(data.temperatureAirList[2], 1), style: 'td'},
                    {'text': $filter('number')(data.temperatureAirList[3], 1), style: 'td'},
                    {'text': $filter('number')(data.temperatureAirList[4], 1), style: 'td'},
                    {'text': $filter('number')(data.temperatureAirList[5], 1), style: 'td'},
                    {'text': $filter('number')(data.temperatureAirList[6], 1), style: 'td'},
                    {'text': $filter('number')(data.temperatureAirList[7], 1), style: 'td'},
                    {'text': $filter('number')(data.temperatureAirList[8], 1), style: 'td'},
                    {'text': $filter('number')(data.temperatureAirList[9], 1), style: 'td'},
                    {'text': $filter('number')(data.temperatureAirList[10], 1), style: 'td'},
                    {'text': $filter('number')(data.temperatureAirList[11], 1), style: 'td'}
                ]);

                temperature_ground_table.push([
                    {'text': data.meteo.name, style: 'td'},
                    {'text': $filter('number')(data.temperatureGroundList[0], 1), style: 'td'},
                    {'text': $filter('number')(data.temperatureGroundList[1], 1), style: 'td'},
                    {'text': $filter('number')(data.temperatureGroundList[2], 1), style: 'td'},
                    {'text': $filter('number')(data.temperatureGroundList[3], 1), style: 'td'},
                    {'text': $filter('number')(data.temperatureGroundList[4], 1), style: 'td'},
                    {'text': $filter('number')(data.temperatureGroundList[5], 1), style: 'td'},
                    {'text': $filter('number')(data.temperatureGroundList[6], 1), style: 'td'},
                    {'text': $filter('number')(data.temperatureGroundList[7], 1), style: 'td'},
                    {'text': $filter('number')(data.temperatureGroundList[8], 1), style: 'td'},
                    {'text': $filter('number')(data.temperatureGroundList[9], 1), style: 'td'},
                    {'text': $filter('number')(data.temperatureGroundList[10], 1), style: 'td'},
                    {'text': $filter('number')(data.temperatureGroundList[11], 1), style: 'td'}
                ]);

                temperature_air_avg_table.push([
                    {'text': data.meteo.name, style: 'td'},
                    {'text': $filter('number')(data.temperatureAirAvgList[0], 1), style: 'td'},
                    {'text': $filter('number')(data.temperatureAirAvgList[1], 1), style: 'td'},
                    {'text': $filter('number')(data.temperatureAirAvgList[2], 1), style: 'td'},
                    {'text': $filter('number')(data.temperatureAirAvgList[3], 1), style: 'td'},
                    {'text': $filter('number')(data.temperatureAirAvgList[4], 1), style: 'td'},
                    {'text': $filter('number')(data.temperatureAirAvgList[5], 1), style: 'td'},
                    {'text': $filter('number')(data.temperatureAirAvgList[6], 1), style: 'td'},
                    {'text': $filter('number')(data.temperatureAirAvgList[7], 1), style: 'td'},
                    {'text': $filter('number')(data.temperatureAirAvgList[8], 1), style: 'td'},
                    {'text': $filter('number')(data.temperatureAirAvgList[9], 1), style: 'td'},
                    {'text': $filter('number')(data.temperatureAirAvgList[10], 1), style: 'td'},
                    {'text': $filter('number')(data.temperatureAirAvgList[11], 1), style: 'td'}
                ]);

                temperature_ground_avg_table.push([
                    {'text': data.meteo.name, style: 'td'},
                    {'text': $filter('number')(data.temperatureGroundAvgList[0], 1), style: 'td'},
                    {'text': $filter('number')(data.temperatureGroundAvgList[1], 1), style: 'td'},
                    {'text': $filter('number')(data.temperatureGroundAvgList[2], 1), style: 'td'},
                    {'text': $filter('number')(data.temperatureGroundAvgList[3], 1), style: 'td'},
                    {'text': $filter('number')(data.temperatureGroundAvgList[4], 1), style: 'td'},
                    {'text': $filter('number')(data.temperatureGroundAvgList[5], 1), style: 'td'},
                    {'text': $filter('number')(data.temperatureGroundAvgList[6], 1), style: 'td'},
                    {'text': $filter('number')(data.temperatureGroundAvgList[7], 1), style: 'td'},
                    {'text': $filter('number')(data.temperatureGroundAvgList[8], 1), style: 'td'},
                    {'text': $filter('number')(data.temperatureGroundAvgList[9], 1), style: 'td'},
                    {'text': $filter('number')(data.temperatureGroundAvgList[10], 1), style: 'td'},
                    {'text': $filter('number')(data.temperatureGroundAvgList[11], 1), style: 'td'}
                ]);
            }

            content_detail.push(
                {
                    'text': $filter('translate')('precipitation'),
                    alignment: 'left',
                    bold: 'true',
                    margin: [0, 0, 0, 5]
                }, {
                    color: '#444',
                    margin: [0, 0, 0, 20],
                    table: {
                        widths: [70, 40, 40, 40, 40, 40, 50, 50, 50, 50, 50, 50, 50, 50],
                        heights: 20,
                        body: precipitation_table,
                        alignment: 'center',
                        dontBreakRows: true,
                    },
                })


            content_detail.push(
                {
                    'text': $filter('translate')('report.temperature.air') + " " + rep.time,
                    alignment: 'left',
                    bold: 'true',
                    margin: [0, 0, 0, 5]
                }, {
                    color: '#444',
                    margin: [0, 0, 0, 20],
                    table: {
                        widths: [80, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
                        heights: 20,
                        body: temperature_air_table,
                        alignment: 'center',
                        dontBreakRows: true,
                    },
                })


            content_detail.push(
                {
                    'text': $filter('translate')('report.temperature.ground') + " " + rep.time,
                    alignment: 'left',
                    bold: 'true',
                    margin: [0, 0, 0, 5]
                }, {
                    color: '#444',
                    margin: [0, 0, 0, 20],
                    table: {
                        widths: [80, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
                        heights: 20,
                        body: temperature_ground_table,
                        alignment: 'center',
                        dontBreakRows: true,
                    },
                })

            content_detail.push(
                {
                    'text': $filter('translate')('report.temperature.air.avg'),
                    alignment: 'left',
                    bold: 'true',
                    margin: [0, 0, 0, 5]
                }, {
                    color: '#444',
                    margin: [0, 0, 0, 20],
                    table: {
                        widths: [80, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
                        heights: 20,
                        body: temperature_air_avg_table,
                        alignment: 'center',
                        dontBreakRows: true,
                    },
                })

            content_detail.push(
                {
                    'text': $filter('translate')('report.temperature.ground.avg'),
                    alignment: 'left',
                    bold: 'true',
                    margin: [0, 0, 0, 5]
                }, {
                    color: '#444',
                    margin: [0, 0, 0, 20],
                    table: {
                        widths: [80, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
                        heights: 20,
                        body: temperature_ground_avg_table,
                        alignment: 'center',
                        dontBreakRows: true,
                    },
                })


            var content = {
                info: {
                    title: 'Agrocontrol',
                    author: 'Agrocontrol',
                    subject: '',
                    keywords: '',
                },
                footer: {
                    columns: [
                        {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 20, 5]}
                    ]
                },
                pageMargins: [20, 25, 20, 30],
                extend: 'pdfHtml5',
                pageSize: 'A4',
                pageOrientation: 'landscape',
                content: [
                    {
                        'text': $filter('translate')('reportType') + " " + $filter('lowercase')($filter('translate')('report.meteoAggregate')),
                        alignment: 'center',
                        bold: 'true',
                    },
                    {
                        'text': rep.year,
                        alignment: 'center',
                        bold: 'true',
                        margin: [0, 0, 0, 20]
                    },
                    content_detail,
                ],

                styles: {
                    tableHeader: {
                        alignment: 'center',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    td: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8
                    },
                    header: {
                        fontSize: 9,
                        bold: 'true',
                        color: 'black',
                        alignment: 'center'
                    }
                }
            };

            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });
            } else {
                cratePdf(content);
            }
        }

//------------------------
//Метео (детальный)
        function meteoDetail(rep, func) {
            var meteo_table = [];
            var content_detail = [];

            meteo_table.push([
                {'text': $filter('translate')('date'), style: 'tableHeader'},
                {'text': $filter('translate')('report.temperature.air') + " " + rep.time, style: 'tableHeader'},
                {'text': $filter('translate')('report.temperature.ground') + " " + rep.time, style: 'tableHeader'},
                {'text': $filter('translate')('report.temperature.air.avg'), style: 'tableHeader'},
                {'text': $filter('translate')('report.temperature.ground.avg'), style: 'tableHeader'},
                {'text': $filter('translate')('precipitation'), style: 'tableHeader'}
            ]);


            for (var i = 0; i < rep.repDetail.length; i++) {
                var data = rep.repDetail[i];

                meteo_table.push([
                    {'text': $filter('date')(data.date, 'dd.MM.yyyy'), style: 'td'},
                    {'text': $filter('number')(data.temperatureAir, 1), style: 'td'},
                    {'text': $filter('number')(data.temperatureGround, 1), style: 'td'},
                    {'text': $filter('number')(data.temperatureAirAvg, 1), style: 'td'},
                    {'text': $filter('number')(data.temperatureGroundAvg, 1), style: 'td'},
                    {'text': $filter('number')(data.precipitation, 3), style: 'td'},
                ]);
            }

            content_detail.push(
                {
                    color: '#444',
                    margin: [0, 0, 0, 20],
                    table: {
                        widths: [95, 130, 130, 130, 130, 130],
                        heights: 20,
                        body: meteo_table,
                        alignment: 'center',
                        dontBreakRows: true,
                    },
                })

            var content = {
                info: {
                    title: 'Agrocontrol',
                    author: 'Agrocontrol',
                    subject: '',
                    keywords: '',
                },
                footer: {
                    columns: [
                        {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 20, 5]}
                    ]
                },
                pageMargins: [20, 25, 20, 30],
                extend: 'pdfHtml5',
                pageSize: 'A4',
                pageOrientation: 'landscape',
                content: [
                    {
                        'text': $filter('translate')('reportType') + " " + $filter('lowercase')($filter('translate')('report.meteoDetail')) + ": " + rep.meteo_name,
                        alignment: 'center',
                        bold: 'true',
                    },
                    {
                        'text': $filter('date')(rep.datefrom * 1000, 'dd.MM.yyyy HH:mm:ss') + " - " + $filter('date')(rep.dateto * 1000, 'dd.MM.yyyy HH:mm:ss'),
                        alignment: 'center',
                        bold: 'true',
                        margin: [0, 0, 0, 20]
                    },
                    content_detail,
                ],

                styles: {
                    tableHeader: {
                        alignment: 'center',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    td: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8
                    },
                    header: {
                        fontSize: 9,
                        bold: 'true',
                        color: 'black',
                        alignment: 'center'
                    }
                }
            };

            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });
            } else {
                cratePdf(content);
            }
        }

//-------------
//Датчики на ТС
        function serviceSensors(rep, func) {
            var table_body = [];
            var content_detail = [];

            table_body.push([
                {'text': $filter('translate')('vehicle'), style: 'tableHeader'},
                {'text': $filter('translate')('tab.sensor'), style: 'tableHeader'},

            ]);

            rep.repDetail.sort(function (a, b) {
                return 2 * (a.vehicle.group_name > b.vehicle.group_name ? 1 : a.vehicle.group_name < b.vehicle.group_name ? -1 : 0) +
                    1 * (a.vehicle.name > b.vehicle.name ? 1 : a.vehicle.name < b.vehicle.name ? -1 : 0)
            })

            for (var i = 0; i < rep.repDetail.length; i++) {
                var data = rep.repDetail[i];

                var table_sensor = [];

                if (data.currentPoint) {
                    var currentPoint_tm = $filter('date')(data.currentPoint.tm * 1000, 'dd.MM.yyyy HH:mm:ss')
                } else {
                    var currentPoint_tm = ''
                }

                table_sensor.push([
                    {'text': $filter('translate')('name'), style: 'tableHeader'},
                    {'text': $filter('translate')('parametrName'), style: 'tableHeader'},
                    {'text': $filter('translate')('tab.params'), style: 'tableHeader'},
                    {'text': $filter('translate')('sensor.values') + ": " + currentPoint_tm, style: 'tableHeader'},
                ]);

                for (var s = 0; s < data.vehicle.sensors.length; s++) {
                    var sensor = data.vehicle.sensors[s];
                    var tab_params = [];
                    var currentPoint = [];

                    if (sensor.sensorType == "Voltage") {
                        tab_params.push([{
                            'text': $filter('translate')('koef') + ": " + sensor.voltageParams.koef,
                            style: 'td'
                        }])

                        if (data.currentPoint) {
                            currentPoint.push([{
                                'text': $filter('number')(data.currentPoint.sensorValue.Voltage, 2) + $filter('translate')('voltage.short'),
                                style: 'td'
                            }])
                        }
                        if (sensor.voltageParams.is_ignition == true) {
                            tab_params.push([{
                                'text': $filter('translate')('is_ignition') + ">= " + sensor.voltageParams.ignition_voltage + $filter('translate')('voltage.short'),
                                style: 'td'
                            }])
                        }
                    } else if (sensor.sensorType == 'FuelImpulse') {
                        tab_params.push([{
                            'text': $filter('translate')('koef') + ": " + sensor.sensorFuelImpulseParams.koef,
                            style: 'td'
                        }])

                        if (sensor.sensorFuelImpulseParams.filter_by_ignition == true) {
                            tab_params.push([{
                                'text': $filter('translate')('is_ignition') + ">= " + $filter('translate')('filter_by_ignition') + $filter('translate')('on'),
                                style: 'td'
                            }])
                        }
                    } else if (sensor.sensorType == 'FuelImpulseHour') {
                        tab_params.push([{
                            'text': $filter('translate')('koef') + ": " + sensor.sensorFuelImpulseHourParams.koef,
                            style: 'td'
                        }])

                        if (sensor.sensorFuelImpulseHourParams.filter_by_ignition == true) {
                            tab_params.push([{
                                'text': $filter('translate')('is_ignition') + ">= " + $filter('translate')('filter_by_ignition') + $filter('translate')('on'),
                                style: 'td'
                            }])
                        }
                    } else if (sensor.sensorType == 'EngineSpeed') {
                        if (data.currentPoint) {
                            currentPoint.push([{
                                'text': $filter('number')(data.currentPoint.sensorValue.EngineSpeed, 0) + $filter('translate')('engine.speed.short'),
                                style: 'td'
                            }])
                        }

                        tab_params.push([{
                            'text': $filter('translate')('koef') + ": " + sensor.engineSpeedParams.koef,
                            style: 'td'
                        }])
                        if (sensor.engineSpeedParams.is_ignition == true) {
                            tab_params.push([{
                                'text': $filter('translate')('is_ignition') + ">= " + $filter('translate')('filter_by_ignition') + sensor.engineSpeedParams.ignition_engineSpeed + $filter('translate')('engine.speed.short'),
                                style: 'td'
                            }])
                        }
                    } else if (sensor.sensorType == 'FuelImpulseAbsolute') {
                        tab_params.push([{
                            'text': $filter('translate')('koef') + ": " + sensor.params,
                            style: 'td'
                        }])

                    } else if (sensor.sensorType == 'FuelDut') {
                        if (data.currentPoint) {
                            if (data.currentPoint.sensorValue.Fuel) {
                                currentPoint.push([{
                                    'text': $filter('number')(data.currentPoint.sensorValue.Fuel, 2) + $filter('translate')('litr_short'),
                                    style: 'td'
                                }])
                            } else {
                                currentPoint.push([{
                                    'text': $filter('number')(data.currentPoint.sensorValue.Fuel, 2) + $filter('translate')('litr_short'),
                                    style: 'td'
                                }])
                            }
                        }

                        tab_params.push([{
                            'text': $filter('translate')('tank.id') + ": " + sensor.fuelParams.tank_id,
                            style: 'td'
                        }])

                        for (var d = 0; d < sensor.fuelParams.table.length; d++) {
                            var row = sensor.fuelParams.table[d];
                            tab_params.push([{'text': "x=" + row.x + " y=" + row.y, style: 'td'}])
                        }
                    } else if (sensor.sensorType == 'TemperatureOutdoor') {
                        tab_params.push([{
                            'text': $filter('translate')('koef') + ": " + sensor.sensorTemperatureOutdoorParams.koef,
                            style: 'td'
                        }])
                        if (sensor.sensorTemperatureOutdoorParams.check_on_stop == true) {
                            tab_params.push([{
                                'text': $filter('translate')('check.on.stop') + ": " + $filter('translate')('on'),
                                style: 'td'
                            }])
                        }
                    } else if (sensor.sensorType == 'WindSpeed') {
                        if (data.currentPoint) {
                            currentPoint.push([{
                                'text': data.currentPoint.sensorValue.WindSpeed + $filter('translate')('m_sec'),
                                style: 'td'
                            }])
                        }
                        tab_params.push([{
                            'text': $filter('translate')('koef') + ": " + sensor.sensorWindSpeedParams.koef,
                            style: 'td'
                        }])
                        if (sensor.sensorWindSpeedParams.check_on_stop == true) {
                            tab_params.push([{
                                'text': $filter('translate')('check.on.stop') + ": " + $filter('translate')('on'),
                                style: 'td'
                            }])
                        }
                    } else if (sensor.sensorType == 'Arbitrary') {
                        if (data.currentPoint) {
                            currentPoint.push([{'text': data.currentPoint.sensorValue.Arbitrary, style: 'td'}])
                        }

                        tab_params.push([{
                            'text': $filter('translate')('koef') + ": " + sensor.arbitraryParams.koef,
                            style: 'td'
                        }])
                    } else if (sensor.sensorType == 'BunkerFilling') {
                        for (var d = 0; d < sensor.fuelParams.table.length; d++) {
                            var row = sensor.fuelParams.table[d];
                            tab_params.push([{'text': "x=" + row.x + " y=" + row.y, style: 'td'}])
                        }
                    } else if (sensor.sensorType == 'BunkerFillingSummator') {
                        for (var d = 0; d < sensor.sensorBunkerFillingSummatorParams.table.length; d++) {
                            var row = sensor.sensorBunkerFillingSummatorParams.table[d];
                            tab_params.push([{
                                'text': "param=" + row.param + " x=" + row.x + " y=" + row.y,
                                style: 'td'
                            }])
                        }
                    } else if (sensor.sensorType == 'Ignition') {
                        if (data.currentPoint) {
                            if (data.currentPoint.sensorValue.Ignition) {
                                currentPoint.push([{'text': $filter('translate')('on'), style: 'td'}])
                            } else {
                                currentPoint.push([{'text': $filter('translate')('off'), style: 'td'}])
                            }
                        }
                    } else if (sensor.sensorType == 'Driver') {
                        if (data.currentPoint) {
                            currentPoint.push([{
                                'text': $filter('number')(data.currentPoint.sensorValue.Driver, 0),
                                style: 'td'
                            }])
                        }
                    } else if (sensor.sensorType == 'Trailer') {
                        if (data.currentPoint) {
                            currentPoint.push([{
                                'text': $filter('number')(data.currentPoint.sensorValue.Trailer, 0),
                                style: 'td'
                            }])
                        }
                    } else if (sensor.sensorType == 'VehicleAssign') {
                        if (data.currentPoint) {
                            currentPoint.push([{
                                'text': $filter('number')(data.currentPoint.sensorValue.VehicleAssign, 0),
                                style: 'td'
                            }])
                        }
                    } else if (sensor.sensorType == 'FuelImpulse') {
                        if (data.currentPoint) {
                            currentPoint.push([{
                                'text': $filter('number')(data.currentPoint.sensorValue.FuelImpulse, 3) + $filter('translate')('litr_short'),
                                style: 'td'
                            }])
                        }
                    } else if (sensor.sensorType == 'FuelImpulseBack') {
                        if (data.currentPoint) {
                            currentPoint.push([{
                                'text': $filter('number')(data.currentPoint.sensorValue.FuelImpulseBack, 3) + $filter('translate')('litr_short'),
                                style: 'td'
                            }])
                        }
                    } else if (sensor.sensorType == 'FuelImpulseAbsolute') {
                        if (data.currentPoint) {
                            currentPoint.push([{
                                'text': $filter('number')(data.currentPoint.sensorValue.FuelImpulseAbsolute, 2) + $filter('translate')('litr_short'),
                                style: 'td'
                            }])
                        }
                    } else if (sensor.sensorType == 'BunkerFilling') {
                        if (data.currentPoint) {
                            currentPoint.push([{
                                'text': $filter('number')(data.currentPoint.sensorValue.BunkerFilling, 1),
                                style: 'td'
                            }])
                        }
                    } else if (sensor.sensorType == 'BunkerFillingSummator') {
                        if (data.currentPoint) {
                            currentPoint.push([{
                                'text': $filter('number')(data.currentPoint.sensorValue.BunkerFillingSummator, 1),
                                style: 'td'
                            }])
                        }
                    } else if (sensor.sensorType == 'Auger') {
                        if (data.currentPoint) {
                            if (data.currentPoint.sensorValue.Auger) {
                                currentPoint.push([{'text': $filter('translate')("on"), style: 'td'}])
                            } else {
                                currentPoint.push([{'text': $filter('translate')("off"), style: 'td'}])
                            }
                        }
                    } else if (sensor.sensorType == 'TemperatureOutdoor') {
                        if (data.currentPoint) {
                            currentPoint.push([{
                                'text': $filter('number')(data.currentPoint.sensorValue.TemperatureOutdoor, 1) + $filter('translate')('temp'),
                                style: 'td'
                            }])
                        }
                    }

                    table_sensor.push([
                        {'text': sensor.name, style: 'td'},
                        {'text': sensor.parametrName, style: 'td'},
                        tab_params,
                        currentPoint,
                    ]);
                }

                if (table_sensor.length > 1) {
                    table_body.push([
                        {'text': data.vehicle.name, style: 'td', margin: [0, 0, 0, 0]},
                        {
                            margin: [0, 0, 0, 0],
                            table: {
                                widths: [142, 80, 160, 150],
                                body:
                                table_sensor
                            },
                        }]);
                } else {
                    table_body.push([
                        {'text': data.vehicle.name, style: 'td'},
                        {'text': ''}]);
                }
            }


            content_detail.push(
                {
                    'text': $filter('translate')('report.serviceSensors'),
                    alignment: 'center',
                    bold: 'true',
                },
                {
                    'text': $filter('date')(rep.date, 'dd.MM.yyyy HH:mm'),
                    alignment: 'center',
                    bold: 'true',
                    margin: [0, 0, 0, 20]
                },
                {
                    color: '#444',
                    margin: [0, 0, 0, 20],
                    table: {
                        widths: [215, 570],
                        heights: 20,
                        body: table_body,
                        alignment: 'center',

                        "dontBreakRows": true,
                    },
                })


            var content = {
                info: {
                    title: 'Agrocontrol',
                    author: 'Agrocontrol',
                    subject: '',
                    keywords: '',
                },
                footer: {
                    columns: [
                        {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 20, 5]}
                    ]
                },
                pageMargins: [20, 20, 20, 20],
                extend: 'pdfHtml5',
                pageSize: 'A4',
                pageOrientation: 'landscape',
                content: [

                    content_detail,
                ],

                styles: {
                    tableHeader: {
                        alignment: 'center',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    td: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8
                    },
                    header: {
                        fontSize: 9,
                        bold: 'true',
                        color: 'black',
                        alignment: 'center'
                    }
                }
            };

            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });
            } else {
                cratePdf(content);
            }
        }

//Данные с трекеров
        function servicePoints(rep, func) {
            var table_body = [];
            var content_detail = [];

            table_body.push([
                {'text': $filter('translate')('date'), style: 'tableHeader'},
                {'text': $filter('translate')('speed'), style: 'tableHeader'},
                {'text': $filter('translate')('sats'), style: 'tableHeader'},
                {'text': $filter('translate')('lat'), style: 'tableHeader'},
                {'text': $filter('translate')('lon'), style: 'tableHeader'},
                {'text': $filter('translate')('tab.params'), style: 'tableHeader'},

            ]);

            rep.pointList.sort(function (a, b) {
                return 1 * (a.tm > b.tm ? 1 : a.tm < b.tm ? -1 : 0)
            })

            for (var i = 0; i < rep.pointList.length; i++) {
                var point = rep.pointList[i];

                table_body.push([
                    {'text': $filter('date')(point.tm * 1000, 'dd.MM.yyyy HH:mm:ss'), style: 'td'},
                    {'text': point.speed, style: 'td'},
                    {'text': point.sats, style: 'td'},
                    {'text': point.lat, style: 'td'},
                    {'text': point.lon, style: 'td'},
                    {'text': point.params, style: 'td', alignment: 'left'},
                ]);
            }

            content_detail.push(
                {
                    color: '#444',
                    margin: [0, 0, 0, 20],
                    table: {
                        widths: [55, 60, 60, 60, 60, 450],
                        heights: 20,
                        body: table_body,
                        alignment: 'center',
                        dontBreakRows: true,
                    },
                })

            var content = {
                info: {
                    title: 'Agrocontrol',
                    author: 'Agrocontrol',
                    subject: '',
                    keywords: '',
                },
                footer: {
                    columns: [
                        {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 20, 5]}
                    ]
                },
                pageMargins: [20, 25, 20, 30],
                extend: 'pdfHtml5',
                pageSize: 'A4',
                pageOrientation: 'landscape',
                content: [
                    {
                        'text': $filter('translate')('report.servicePoints') + ": " + rep.vehicle_name,
                        alignment: 'center',
                        bold: 'true',
                    },
                    {
                        'text': $filter('date')(rep.datefrom * 1000, 'dd.MM.yyyy HH:mm') + " - " + $filter('date')(rep.dateto * 1000, 'dd.MM.yyyy HH:mm'),
                        alignment: 'center',
                        bold: 'true',
                        margin: [0, 0, 0, 20]
                    },
                    content_detail,
                ],

                styles: {
                    tableHeader: {
                        alignment: 'center',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    td: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8
                    },
                    header: {
                        fontSize: 9,
                        bold: 'true',
                        color: 'black',
                        alignment: 'center'
                    }
                }
            };

            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });
            } else {
                cratePdf(content);
            }
        }

//----------------
//Учет зерна вівезенного в БигБеги
        function bigBag(rep, func) {
            var table_body = [];
            var content_detail = [];

            table_body.push([
                {'text': $filter('translate')('vehicle'), style: 'tableHeader'},
                {'text': $filter('translate')('vehicle.type.overloader'), style: 'tableHeader'},
                {'text': $filter('translate')('unloading.qnt'), style: 'tableHeader'},
                {'text': $filter('translate')('time.unloading'), style: 'tableHeader'},
                {'text': $filter('translate')('in.qnt'), style: 'tableHeader'},
                {'text': $filter('translate')('timein'), style: 'tableHeader'},

            ]);

            rep.repList.sort(function (a, b) {
                if (a.grainPackingVehicle.name < b.grainPackingVehicle.name) {
                    return -1;
                }
                if (a.grainPackingVehicle.name > b.grainPackingVehicle.name) {
                    return 1;
                }
                return 0;
            });

            for (var i = 0; i < rep.repList.length; i++) {

                var bigBag_table = [];
                var bigBag = rep.repList[i];
                for (var b = 0; b < bigBag.bigBagDetail.length; b++) {
                    var bigBagdetail = bigBag.bigBagDetail[b];
                    var sub_detail = [];
                    bigBagdetail.subDetailList.sort(function (a, b) {
                        if (a.unloading_tm < b.unloading_tm) {
                            return -1;
                        }
                        if (a.unloading_tm > b.unloading_tm) {
                            return 1;
                        }
                        return 0;
                    });

                    for (var s = 0; s < bigBagdetail.subDetailList.length; s++) {
                        var subDetail = bigBagdetail.subDetailList[s]
                        sub_detail.push([{
                            'text': $filter('date')(subDetail.unloading_tm * 1000, 'dd.MM.yyyy HH:mm:ss') + "(" + $filter('secondsToDateTime')(subDetail.unloading_duration) + ")",
                            style: 'tableHeader',
                            border: [0, 0, 0, 5]
                        }])
                    }

                    if (bigBagdetail.geozone_in_tm) {
                        var geozone_in_tm = {'text': $filter('date')(bigBagdetail.geozone_in_tm * 1000, 'dd.MM.yyyy HH:mm:ss')}
                    } else {
                        var geozone_in_tm = ''
                    }

//                     if(bigBagdetail.geozoneInList.length>1){
                    for (var g = 0; g < bigBagdetail.geozoneInList.length; g++) {
                        var inGeozone = bigBagdetail.geozoneInList[g]
                        geozone_in_tm.push([{
                            'text': $filter('date')(inGeozone.tm_in * 1000, 'dd.MM.yyyy HH:mm:ss'),
                            style: 'tableHeader',
                        }])
                    }
//                     }else{
//                             geozone_in_tm.push([{'text':'', style: 'tableHeader'}])
//                     }


                    bigBag_table.push([
                        {'text': bigBagdetail.pbn.name, style: 'td'},
                        {'text': bigBagdetail.subDetailList.length, style: 'td'},
                        sub_detail,
                        {'text': bigBagdetail.geozoneInList.length, style: 'td'},
                        geozone_in_tm
                    ]);
                }

                table_body.push([
                    {'text': bigBag.grainPackingVehicle.name, style: 'td'},
                    {
                        table: {
                            widths: [185, 50, 190, 80, 75],
                            body:
                            bigBag_table
                        }, colSpan: 5
                    },
                    {},
                    {},
                    {},
                    {},
                ]);
            }


            content_detail.push(
                {
                    'text': $filter('translate')('report.special.bigBag'),
                    alignment: 'center',
                    bold: 'true',
                },
                {
                    'text': $filter('date')(rep.datefrom * 1000, 'dd.MM.yyyy HH:mm') + " - " + $filter('date')(rep.dateto * 1000, 'dd.MM.yyyy HH:mm'),
                    alignment: 'center',
                    bold: 'true',
                    margin: [0, 0, 0, 20]
                },
                {
                    color: '#444',
                    margin: [0, 0, 0, 20],
                    table: {
                        widths: [150, 190, 50, 190, 80, 80],
                        heights: 20,
                        body: table_body,
                        alignment: 'center',
                        dontBreakRows: false,
                    },
                })


            var content = {
                info: {
                    title: 'Agrocontrol',
                    author: 'Agrocontrol',
                    subject: '',
                    keywords: '',
                },
                footer: {
                    columns: [
                        {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 20, 5]}
                    ]
                },
                pageMargins: [20, 10, 20, 20],
                extend: 'pdfHtml5',
                pageSize: 'A4',
                pageOrientation: 'landscape',
                content: [

                    content_detail,
                ],

                styles: {
                    tableHeader: {
                        alignment: 'center',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    td: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8
                    },
                    header: {
                        fontSize: 9,
                        bold: 'true',
                        color: 'black',
                        alignment: 'center'
                    }
                }
            };

            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });
            } else {
                cratePdf(content);
            }
        }

//--------------
//По типу работ
        function agrooperationWorkType(rep, func) {
            var table_body = [];
            var table2_body = [];
            var content_detail = [];
            var combine = []
            if (rep.combineList.length > 0) {
                for (var k = 0; k < rep.combineList.length; k++) {
                    var comb = rep.combineList[k];
                    combine.push({'text': comb.vehicle.name, style: 'tableHeader'})
                }

                var c_1 = combine.slice(0, 10)
                var c_2 = combine.slice(10, 20)

                table_body.push([
                    {'text': $filter('translate')('geozone'), style: 'tableHeader'},
                    ...c_1,
                    {'text': $filter('translate')('total'), style: 'tableHeader'},
                    {'text': $filter('translate')('square.by.cropRotation'), style: 'tableHeader'},
                    {'text': $filter('translate')('difference'), style: 'tableHeader'},
                ]);

                rep.repData.sort(function (a, b) {
                    if (a.geozone.name.localeCompare(b.geozone.name) < b.geozone.name.localeCompare(a.geozone.name)) {
                        return -1;
                    }
                    if (a.geozone.name.localeCompare(b.geozone.name) > b.geozone.name.localeCompare(a.geozone.name)) {
                        return 1;
                    }
                    return 0;
                });

                for (var i = 0; i < rep.repData.length; i++) {
                    var item = rep.repData[i];
                    if (item.total == 0) {
                        var total = {'text': '', style: 'td'}
                    } else {
                        var total = {'text': $filter('number')(item.total, 2), style: 'td'}
                    }
                    var combine_detail = [];
                    for (var d = 0; d < item.detailList.length; d++) {
                        var detail = item.detailList[d]
                        if (detail.square != 0) {
                            combine_detail.push({'text': $filter('number')(detail.square, 2), style: 'td'})
                        } else {
                            combine_detail.push({'text': '', style: 'td'})
                        }
                    }

                    var c_d = combine_detail.slice(0, 10)
                    table_body.push([
                        {'text': item.geozone ? item.geozone.name : '', style: 'td'},
                        ...c_d,
                        total,
                        {'text': $filter('number')(item.cropRotation_square, 2), style: 'td'},
                        {'text': $filter('number')(item.cropRotation_square - item.total, 2), style: 'td'}
                    ]);


                }

                var combine_total = [];
                for (var k = 0; k < rep.combineList.length; k++) {
                    var comb = rep.combineList[k];
                    combine_total.push({'text': $filter('number')(comb.total, 2), style: 'header'})
                }

                var c_d = combine_total.slice(0, 10)

                table_body.push([
                    {'text': $filter('translate')('total'), style: 'header'},
                    ...c_d,
                    {'text': $filter('number')(rep.working_total, 2), style: 'header'},
                    {'text': $filter('number')(rep.geozone_total, 2), style: 'header'},
                    {'text': $filter('number')(rep.geozone_total - rep.working_total, 2), style: 'header'}
                ]);

                content_detail.push(
                    {
                        'text': $filter('translate')('report.agrooperation.workType'),
                        alignment: 'center',
                        bold: 'true',
                    },
                    {
                        'text': $filter('translate')(rep.workType_name),
                        alignment: 'center',
                        bold: 'true'
                    },
                    {
                        'text': rep.cluster_name,
                        alignment: 'center',
                        bold: 'true'
                    },
                    {
                        'text': $filter('translate')(rep.culture_name),
                        alignment: 'center',
                        bold: 'true'
                    },
                    {
                        'text': $filter('date')(rep.date_start * 1000, 'dd.MM.yyyy HH:mm:ss') + " - " + $filter('date')(rep.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                        alignment: 'center',
                        bold: 'true',
                        margin: [0, 0, 0, 20],
                    },
                    {
                        color: '#444',
                        margin: [0, 0, 0, 20],
                        table: {
                            widths: [55, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 40, 37, 40],
                            heights: 20,
                            body: table_body,
                            alignment: 'center',
                            dontBreakRows: false,
                        },
                    })

                if (c_2.length > 1) {
                    table2_body.push([
                        {'text': $filter('translate')('geozone'), style: 'tableHeader'},
                        ...c_2,
                        {'text': $filter('translate')('total'), style: 'tableHeader'},
                        {'text': $filter('translate')('square.by.cropRotation'), style: 'tableHeader'},
                        {'text': $filter('translate')('difference'), style: 'tableHeader'},
                    ]);

                    rep.repData.sort(function (a, b) {
                        if (a.geozone.name.localeCompare(b.geozone.name) < b.geozone.name.localeCompare(a.geozone.name)) {
                            return -1;
                        }
                        if (a.geozone.name.localeCompare(b.geozone.name) > b.geozone.name.localeCompare(a.geozone.name)) {
                            return 1;
                        }
                        return 0;
                    });


                    for (var i = 0; i < rep.repData.length; i++) {
                        var item = rep.repData[i];
                        if (item.total == 0) {
                            var total = {'text': '', style: 'td'}
                        } else {
                            var total = {'text': $filter('number')(item.total, 2), style: 'td'}
                        }
                        var combine_detail = [];
                        for (var d = 0; d < item.detailList.length; d++) {
                            var detail = item.detailList[d]
                            if (detail.square != 0) {
                                combine_detail.push({'text': $filter('number')(detail.square, 2), style: 'td'})
                            } else {
                                combine_detail.push({'text': '', style: 'td'})
                            }
                        }

                        var c_d = combine_detail.slice(10, 20)

                        table2_body.push([
                            {'text': item.geozone ? item.geozone.name : '', style: 'td'},
                            ...c_d,
                            total,
                            {'text': $filter('number')(item.cropRotation_square, 2), style: 'td'},
                            {'text': $filter('number')(item.cropRotation_square - item.total, 2), style: 'td'}
                        ]);

                    }

                    var combine_total = [];
                    for (var k = 0; k < rep.combineList.length; k++) {
                        var comb = rep.combineList[k];
                        combine_total.push({'text': $filter('number')(comb.total, 2), style: 'header'})
                    }


                    var c_d = combine_total.slice(10, 20)

                    table2_body.push([
                        {'text': $filter('translate')('total'), style: 'header'},
                        ...c_d,
                        {'text': $filter('number')(rep.working_total, 2), style: 'header'},
                        {'text': $filter('number')(rep.geozone_total, 2), style: 'header'},
                        {'text': $filter('number')(rep.geozone_total - rep.working_total, 2), style: 'header'}
                    ]);

                    content_detail.push(
                        {
                            'text': $filter('translate')('reportType') + " " + $filter('translate')('report.agrooperation.workType'),
                            alignment: 'center',
                            bold: 'true',
                        },
                        {
                            'text': $filter('translate')(rep.workType_name),
                            alignment: 'center',
                            bold: 'true'
                        },
                        {
                            'text': rep.cluster_name,
                            alignment: 'center',
                            bold: 'true'
                        },
                        {
                            'text': $filter('translate')(rep.culture_name),
                            alignment: 'center',
                            bold: 'true'
                        },
                        {
                            'text': $filter('date')(rep.date_start * 1000, 'dd.MM.yyyy HH:mm:ss') + " - " + $filter('date')(rep.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                            alignment: 'center',
                            bold: 'true',
                            margin: [0, 0, 0, 20]
                        },
                        {
                            color: '#444',
                            margin: [0, 0, 0, 20],
                            table: {
                                widths: [55, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 40, 37, 40],
                                heights: 20,
                                body: table2_body,
                                alignment: 'center',
                                dontBreakRows: false,
                            },
                        })
                }
            } else {
                table_body.push([
                    {'text': $filter('translate')('geozone'), style: 'tableHeader'},
                    {'text': $filter('translate')('total'), style: 'tableHeader'},
                    {'text': $filter('translate')('square.by.cropRotation'), style: 'tableHeader'},
                    {'text': $filter('translate')('difference'), style: 'tableHeader'},
                ]);

                rep.repData.sort(function (a, b) {
                    if (a.geozone.name.localeCompare(b.geozone.name) < b.geozone.name.localeCompare(a.geozone.name)) {
                        return -1;
                    }
                    if (a.geozone.name.localeCompare(b.geozone.name) > b.geozone.name.localeCompare(a.geozone.name)) {
                        return 1;
                    }
                    return 0;
                });

                for (var i = 0; i < rep.repData.length; i++) {
                    var item = rep.repData[i];

                    if (item.total != 0) {
                        var total = {'text': $filter('number')(item.total, 2), style: 'td'}
                    } else {
                        var total = {'text': '', style: 'td'}
                    }

                    table_body.push([
                        {'text': item.geozone ? item.geozone.name : '', style: 'td'},
                        total,
                        {'text': $filter('number')(item.cropRotation_square, 2), style: 'td'},
                        {'text': $filter('number')(item.cropRotation_square - item.total, 2), style: 'td'}
                    ]);

                }
                table_body.push([
                    {'text': $filter('translate')('total'), style: 'header'},
                    {'text': $filter('number')(rep.working_total, 2), style: 'header'},
                    {'text': $filter('number')(rep.geozone_total, 2), style: 'header'},
                    {'text': $filter('number')(rep.geozone_total - rep.working_total, 2), style: 'header'}
                ]);


                content_detail.push(
                    {
                        'text': $filter('translate')('reportType') + " " + $filter('translate')('report.agrooperation.workType'),
                        alignment: 'center',
                        bold: 'true',
                    },
                    {
                        'text': $filter('translate')(rep.workType_name),
                        alignment: 'center',
                        bold: 'true'
                    },
                    {
                        'text': rep.cluster_name,
                        alignment: 'center',
                        bold: 'true'
                    },
                    {
                        'text': $filter('translate')(rep.culture_name),
                        alignment: 'center',
                        bold: 'true'
                    },
                    {
                        'text': $filter('date')(rep.date_start * 1000, 'dd.MM.yyyy HH:mm:ss') + " - " + $filter('date')(rep.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                        alignment: 'center',
                        bold: 'true',
                        margin: [0, 0, 0, 20],
                    },
                    {
                        color: '#444',
                        margin: [0, 0, 0, 20],
                        table: {
                            widths: [200, 190, 190, 180],
                            heights: 20,
                            body: table_body,
                            alignment: 'center',
                            dontBreakRows: false,
                        },
                    })
            }


            var content = {
                info: {
                    title: 'Agrocontrol',
                    author: 'Agrocontrol',
                    subject: '',
                    keywords: '',
                },
                footer: {
                    columns: [
                        {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 20, 5]}
                    ]
                },
                pageMargins: [20, 10, 15, 20],
                extend: 'pdfHtml5',
                pageSize: 'A4',
                pageOrientation: 'landscape',
                content: [

                    content_detail,
                ],

                styles: {
                    tableHeader: {
                        alignment: 'center',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    td: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8
                    },
                    header: {
                        fontSize: 9,
                        bold: 'true',
                        color: 'black',
                        alignment: 'center'
                    }
                }
            };

            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });
            } else {
                cratePdf(content);
            }

        }

//-------------
//По топливу в разрезе кластеров
        function fuelByCluster(rep, func) {
            var table_body = [];
            var content_detail = [];

            table_body.push([
                {'text': '', rowSpan: 2},
                {'text': $filter('translate')('vehicle'), style: 'tableHeader', rowSpan: 2},
                {'text': $filter('translate')('tank.size'), style: 'tableHeader', rowSpan: 2},
                {'text': $filter('translate')('dut.cnt'), style: 'tableHeader', rowSpan: 2},
                {'text': $filter('translate')('left.before'), style: 'tableHeader', rowSpan: 2},
                {'text': $filter('translate')('refueling'), style: 'tableHeader', colSpan: 4},
                {},
                {},
                {},
                {'text': $filter('translate')('fuel.used'), style: 'tableHeader'},
                {'text': $filter('translate')('left.after'), style: 'tableHeader'},
                {'text': $filter('translate')('fuel.drain'), style: 'tableHeader'}
            ]);

            table_body.push([
                {},
                {},
                {},
                {},
                {},
                {'text': $filter('translate')('fuel.refuel.dut'), style: 'tableHeader'},
                {'text': $filter('translate')('petrol.refueling.litr'), style: 'tableHeader'},
                {'text': $filter('translate')('diff.litr'), style: 'tableHeader'},
                {'text': $filter('translate')('diff.percent'), style: 'tableHeader'},
                {},
                {},
                {}
            ]);

            rep.data.detailList.sort(function (a, b) {
                if (a.vehicle.name.substr(0, 1).toUpperCase() == 'І' || a.vehicle.name.substr(0, 1).toUpperCase() == 'Є' || a.vehicle.name.substr(0, 1).toUpperCase() == 'Ї') {
                    return 1;
                }

                if (b.vehicle.name.substr(0, 1).toUpperCase() == 'І' || b.vehicle.name.substr(0, 1).toUpperCase() == 'Є' || b.vehicle.name.substr(0, 1).toUpperCase() == 'Ї') {
                    return -1;
                }

                if ($filter('lowercase')(a.vehicle.name) < $filter('lowercase')(b.vehicle.name)) {
                    return -1;
                }
                if ($filter('lowercase')(a.vehicle.name) > $filter('lowercase')(b.vehicle.name)) {
                    return 1;
                }
                return 0;
            });

            for (var i = 0; i < rep.data.detailList.length; i++) {
                var item = rep.data.detailList[i];
                table_body.push([
                    {'text': i + 1, style: 'td'},
                    {'text': item.vehicle.name, style: 'td'},
                    {'text': $filter('number')(item.tank_size, 0), style: 'td'},
                    {'text': $filter('number')(item.dutNum, 0), style: 'td'},
                    {'text': $filter('number')(item.start_litr, 1), style: 'td'},
                    {'text': $filter('number')(item.refueling_dut, 1), style: 'td'},
                    {'text': $filter('number')(item.refueling_azs, 1), style: 'td'},
                    {'text': $filter('number')(item.diff_litr, 1), style: 'td'},
                    {'text': $filter('number')(item.diff_percent, 1), style: 'td'},
                    {'text': $filter('number')(item.fuel_used, 1), style: 'td'},
                    {'text': $filter('number')(item.end_litr, 1), style: 'td'},
                    {'text': $filter('number')(item.fuel_drain, 1), style: 'td'}
                ]);
            }

            table_body.push([
                {'text': '', style: 'header'},
                {'text': $filter('translate')('total'), style: 'header', alignment: 'left'},
                {'text': '', style: 'header'},
                {'text': '', style: 'header'},
                {'text': $filter('number')(rep.data.start_litr, 1), style: 'header'},
                {'text': $filter('number')(rep.data.refueling_dut, 1), style: 'header'},
                {'text': $filter('number')(rep.data.refueling_azs, 1), style: 'header'},
                {'text': $filter('number')(rep.data.diff_litr, 1), style: 'header'},
                {'text': $filter('number')(rep.data.diff_percent, 1), style: 'header'},
                {'text': $filter('number')(rep.data.fuel_used, 1), style: 'header'},
                {'text': $filter('number')(rep.data.end_litr, 1), style: 'header'},
                {'text': $filter('number')(rep.data.fuel_drain, 1), style: 'header'}
            ]);

            if (rep.cluster_name) {
                var cluster_name = {
                    'text': $filter('translate')(rep.cluster_name),
                    alignment: 'center',
                    bold: 'true',
                    margin: [0, 0, 0, 20]
                }
            } else {
                var cluster_name = {
                    'text': ""
                }
            }

            content_detail.push(
                {
                    'text': $filter('translate')('reportType') + " " + $filter('translate')('report.special.fuelByCluster'),
                    alignment: 'center',
                    bold: 'true',
                },
                {
                    'text': $filter('date')(rep.date_start * 1000, 'dd.MM.yyyy HH:mm:ss') + " - " + $filter('date')(rep.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                    alignment: 'center',
                    bold: 'true'
                },
                cluster_name,
                {
                    color: '#444',
                    margin: [0, 0, 0, 20],
                    table: {
                        widths: [20, 130, 45, 50, 50, 60, 60, 60, 60, 55, 55, 45],
                        heights: 20,
                        body: table_body,
                        alignment: 'center',
                        dontBreakRows: false,
                    },
                })


            var content = {
                info: {
                    title: 'Agrocontrol',
                    author: 'Agrocontrol',
                    subject: '',
                    keywords: '',
                },
                footer: {
                    columns: [
                        {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 20, 5]}
                    ]
                },
                pageMargins: [20, 10, 20, 20],
                extend: 'pdfHtml5',
                pageSize: 'A4',
                pageOrientation: 'landscape',
                content: [

                    content_detail,
                ],

                styles: {
                    tableHeader: {
                        alignment: 'center',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    td: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8
                    },
                    header: {
                        fontSize: 9,
                        bold: 'true',
                        color: 'black',
                        alignment: 'center'
                    }
                }
            };

            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });
            } else {
                cratePdf(content);
            }
        }

//Контракти
        function exchangeContract(rep, func) {
            var table_body = [];
            var table1_body = [];
            var content_detail = [];

            table_body.push([
                {'text': $filter('translate')('given'), colSpan: 3, style: 'tableHeader',},
                {'text': ''},
                {'text': ''},
                {'text': $filter('translate')('received'), colSpan: 3, style: 'tableHeader',},
                {'text': ''},
                {'text': ''},
            ]);

            table_body.push([
                {'text': $filter('translate')('share.number'), style: 'tableHeader',},
                {'text': $filter('translate')('share.square1'), style: 'tableHeader'},
                {'text': $filter('translate')('exchange.contract.shares.given'), style: 'tableHeader'},
                {'text': $filter('translate')('share.number'), style: 'tableHeader'},
                {'text': $filter('translate')('share.square1'), style: 'tableHeader'},
                {'text': $filter('translate')('exchange.contract.shares.received'), style: 'tableHeader'},
            ]);

            var kad_number = [];
            var kad_number_from_list = [];
            var kad_number_to_list = [];
            for (var i = 0; i < rep.bankShareExchangeList.length; i++) {
                var item = rep.bankShareExchangeList[i],
                    el_from = $.grep(kad_number_from_list, function (b) {
                        return b.kadastr_number === item.shareFrom.kadastr_number
                    })[0],
                    el_to = $.grep(kad_number_to_list, function (b) {
                        return b.kadastr_number == item.shareTo.kadastr_number
                    })[0];

//square_share  площа обміну
//square_exchanges  площа обміну
                if (!el_from) {
                    kad_number_from_list.push({
                        'kadastr_number': item.shareFrom.kadastr_number,
                        'square_share': item.shareFrom.square,
                        'square_exchanges': !item.bankShareFromSquare ? item.shareFrom.square : item.bankShareFromSquare
                    })
                } else {
                    el_from.square_exchanges += !item.bankShareFromSquare ? item.shareFrom.square : item.bankShareFromSquare
                }

                if (!el_to) {
                    kad_number_to_list.push({
                        'kadastr_number': item.shareTo.kadastr_number,
                        'square_share': item.shareTo.square,
                        'square_exchanges': !item.bankShareToSquare ? item.shareTo.square : item.bankShareToSquare
                    })
                } else {
                    el_to.square_exchanges += !item.bankShareToSquare ? item.shareTo.square : item.bankShareToSquare
                }
            }

            var to_list_length = kad_number_to_list.length;
            var from_list_length = kad_number_from_list.length;

            var kadastr_number_count_from = 0
            var square_share_count_from = 0
            var square_count_from = 0

            var kadastr_number_count_to = 0
            var square_share_count_to = 0
            var square_count_to = 0

            for (var l = 0; l < Math.max(to_list_length, from_list_length); l++) {
                var kadastr_number_from;
                var square_share_from;
                var square_from;

                var kadastr_number_to;
                var square_share_to;
                var square_to;
                var style_to;
                var style;

                if (l <= kad_number_from_list.length - 1) {
                    kadastr_number_count_from += 1;
                    square_share_count_from += kad_number_from_list[l]['square_exchanges'];
                    square_count_from += kad_number_from_list[l]['square_share'];

                    if (kad_number_from_list[l]['square_exchanges'] != kad_number_from_list[l]['square_share']) {
                        style = 'td1';
                    } else {
                        style = 'td';
                    }

                    kadastr_number_from = {'text': kad_number_from_list[l]['kadastr_number'], style: style}
                    square_share_from = {
                        'text': $filter('number')(kad_number_from_list[l]['square_exchanges'], 4),
                        style: style
                    }
                    square_from = {'text': $filter('number')(kad_number_from_list[l]['square_share'], 4), style: style}

                } else {
                    kadastr_number_from = {'text': ''};
                    square_share_from = {'text': ''};
                    square_from = {'text': ''};
                }

                if (l <= kad_number_to_list.length - 1) {
                    kadastr_number_count_to += 1
                    square_share_count_to += kad_number_to_list[l]['square_exchanges'];
                    square_count_to += kad_number_to_list[l]['square_share'];

                    if (kad_number_to_list[l]['square_share'] != kad_number_to_list[l]['square_exchanges']) {
                        style_to = 'td1';
                    } else {
                        style_to = 'td';
                    }

                    kadastr_number_to = {'text': kad_number_to_list[l]['kadastr_number'], style: style_to}
                    square_share_to = {
                        'text': $filter('number')(kad_number_to_list[l]['square_exchanges'], 4),
                        style: style_to
                    }
                    square_to = {'text': $filter('number')(kad_number_to_list[l]['square_share'], 4), style: style_to}

                } else {
                    kadastr_number_to = {'text': '', style: 'td'}
                    square_share_to = {'text': '', style: 'td'}
                    square_to = {'text': '', style: 'td'}
                }

                table_body.push([
                    kadastr_number_from,
                    square_from,
                    square_share_from,
                    kadastr_number_to,
                    square_to,
                    square_share_to
                ]);
            }

            table_body.push([
                {'text': '', colSpan: 6, border: [false, false, false, false]},
                {'text': ''},
                {'text': ''},
                {'text': ''},
                {'text': ''},
                {'text': ''},
            ]);

            table_body.push([
                {'text': $filter('translate')('exchange.contract.shares.cnt'), style: 'tableHeader',},
                {'text': $filter('translate')('exchange.contract.shares.square'), style: 'tableHeader'},
                {'text': $filter('translate')('exchange.contract.shares.given'), style: 'tableHeader'},
                {'text': $filter('translate')('exchange.contract.shares.cnt'), style: 'tableHeader'},
                {'text': $filter('translate')('exchange.contract.shares.square'), style: 'tableHeader'},
                {'text': $filter('translate')('exchange.contract.shares.received'), style: 'tableHeader'},
            ]);

            table_body.push([
                {'text': kadastr_number_count_from, style: 'header',},
                {'text': $filter('number')(square_count_from, 4), style: 'header'},
                {'text': $filter('number')(square_share_count_from, 4), style: 'header'},
                {'text': kadastr_number_count_to, style: 'header'},
                {'text': $filter('number')(square_count_to, 4), style: 'header'},
                {'text': $filter('number')(square_share_count_to, 4), style: 'header'},
            ]);
            var now = new Date();
            var contract_date
            var contract_date_to

            if (rep.contract_date != null) {
                contract_date = {
                    'text': $filter('translate')('contract.date') + ": " + $filter('date')(rep.contract_date, 'dd.MM.yyyy'),
                    alignment: 'center',
                    bold: 'true',
                }
            }

            if (rep.contract_date_to != null) {
                contract_date_to = {
                    'text': $filter('translate')('contract.date.to') + ": " + $filter('date')(rep.contract_date_to, 'dd.MM.yyyy'),
                    alignment: 'center',
                    bold: 'true',
                }
            }

            content_detail.push(
                {
                    'text': $filter('translate')('name') + ": " + rep.number,
                    alignment: 'center',
                    bold: 'true',
                },
                contract_date,
                contract_date_to,
                {
                    'text': $filter('translate')('bank.organization') + ": " + rep.bankOrganization.name,
                    alignment: 'center',
                    bold: 'true',
                },
                {
                    'text': $filter('translate')('create.date') + ": " + $filter('date')(now, 'dd.MM.yyyy HH:mm'),
                    alignment: 'center',
                    fontSize: 10
                },
                {
                    color: '#444',
                    margin: [0, 20, 0, 20],
                    table: {
                        widths: [100, 73, 73, 100, 73, 73],
                        heights: 20,
                        body: table_body,
                        alignment: 'center',
                        dontBreakRows: false,
                    },
                })

            var content = {
                info: {
                    title: 'Agrocontrol',
                    author: 'Agrocontrol',
                    subject: '',
                    keywords: '',
                },
                footer: {
                    columns: [
                        {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 20, 5]}
                    ]
                },
                pageMargins: [20, 10, 20, 20],
                extend: 'pdfHtml5',
                pageSize: 'A4',
//                 pageOrientation: 'landscape',
                content: [

                    content_detail,
                ],

                styles: {
                    tableHeader: {
                        alignment: 'center',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    td: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8
                    },
                    td1: {
                        alignment: 'center',
                        height: '100',
//                         color: 'black',
                        fontSize: 8,
                        italics: 'true',
                        bold: 'true'
                    },
                    header: {
                        fontSize: 9,
                        bold: 'true',
                        color: 'black',
                        alignment: 'center'
                    }
                }
            };

            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });
            } else {
                cratePdf(content);
            }
        }

//Контроль валидности данных от трекера
        function controlTrackerData(rep, params, func) {
            var table_body = [];
            var content_detail = [];

            table_body.push([
                {'text': $filter('translate')('vehicle'), style: 'tableHeader'},
                {'text': $filter('translate')('timestart'), style: 'tableHeader'},
                {'text': $filter('translate')('timeend'), style: 'tableHeader'},
                {'text': $filter('translate')('duration'), style: 'tableHeader'},
                {'text': $filter('translate')('type'), style: 'tableHeader'},
            ]);

            for (var i = 0; i < rep.violationList.length; i++) {
                var violation = rep.violationList[i];
                table_body.push([
                    {'text': violation.vehicle.name, style: 'td'},
                    {'text': $filter('date')(violation.date_start, 'dd.MM.yyyy HH:mm:ss'), style: 'td'},
                    {'text': $filter('date')(violation.date_end, 'dd.MM.yyyy HH:mm:ss'), style: 'td'},
                    {
                        'text': $filter('translate')($filter('secondsToDateTime')((violation.date_end - violation.date_start) / 1000)),
                        style: 'td'
                    },
                    {'text': params.scope.trackerViolationType(violation), style: 'td'},
                ]);
            }

            content_detail.push(
                {
                    'text': $filter('translate')('reportType') + " " + $filter('lowercase')($filter('translate')('report.control.tracker.data')),
                    alignment: 'center',
                    bold: 'true',
                },
                {
                    'text': rep.violationType,
                    alignment: 'center',
                    bold: 'true',
                },
                {
                    'text': $filter('date')(rep.date_start * 1000, 'dd.MM.yyyy HH:mm:ss') + " - " + $filter('date')(rep.date_end * 1000, 'dd.MM.yyyy HH:mm:ss'),
                    alignment: 'center',
                    bold: 'true',
                    margin: [0, 0, 0, 20],
                },
                {
                    color: '#444',
                    margin: [0, 0, 0, 20],
                    table: {
                        widths: [135, 90, 90, 90, 100],
                        heights: 20,
                        body: table_body,
                        alignment: 'center',
                        dontBreakRows: false,
                    },
                })

            var content = {
                info: {
                    title: 'Agrocontrol',
                    author: 'Agrocontrol',
                    subject: '',
                    keywords: '',
                },
                footer: {
                    columns: [
                        {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 20, 5]}
                    ]
                },
                pageMargins: [20, 10, 20, 20],
                extend: 'pdfHtml5',
                pageSize: 'A4',
                content: [
                    content_detail
                ],
                styles: {
                    tableHeader: {
                        alignment: 'center',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    td: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8
                    },
                    header: {
                        fontSize: 9,
                        bold: 'true',
                        color: 'black',
                        alignment: 'center'
                    }
                }
            };

            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });
            } else {
                cratePdf(content);
            }
        }

//-------------
//Данные с трекеров(АЗС)
        function servicePointsAzs(rep, params, func) {
            var table_body = [];
            var content_detail = [];

            table_body.push([
                {'text': $filter('translate')('date'), style: 'tableHeader'},
                {'text': $filter('translate')('speed'), style: 'tableHeader'},
                {'text': $filter('translate')('sats'), style: 'tableHeader'},
                {'text': $filter('translate')('lat'), style: 'tableHeader'},
                {'text': $filter('translate')('lon'), style: 'tableHeader'},
                {'text': $filter('translate')('tab.params'), style: 'tableHeader'},
            ]);

            for (var i = 0; i < rep.pointList.length; i++) {
                var point = rep.pointList[i];
                table_body.push([
                    {'text': $filter('date')(point.tm * 1000, 'dd.MM.yyyy HH:mm:ss'), style: 'td'},
                    {'text': point.speed, style: 'td'},
                    {'text': point.sats, style: 'td'},
                    {'text': point.lat, style: 'td'},
                    {'text': point.lon, style: 'td'},
                    {'text': point.params, style: 'td'},
                ]);
            }

            content_detail.push(
                {
                    'text': $filter('translate')('reportType') + " " + $filter('translate')('report.servicePointsAzs'),
                    alignment: 'center',
                    bold: 'true',
                },
                {
                    'text': rep.azs_name,
                    alignment: 'center',
                    bold: 'true',
                },
                {
                    'text': $filter('date')(rep.datefrom * 1000, 'dd.MM.yyyy HH:mm:ss') + " - " + $filter('date')(rep.dateto * 1000, 'dd.MM.yyyy HH:mm:ss'),
                    alignment: 'center',
                    bold: 'true',
                    margin: [0, 0, 0, 20],
                },
                {
                    color: '#444',
                    margin: [0, 0, 0, 20],
                    table: {
                        widths: [45, 45, 45, 80, 75, 210],
                        heights: 20,
                        body: table_body,
                        alignment: 'center',
                        dontBreakRows: true,
                    },
                })

            var content = {
                info: {
                    title: 'Agrocontrol',
                    author: 'Agrocontrol',
                    subject: '',
                    keywords: '',
                },
                footer: {
                    columns: [
                        {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 20, 5]}
                    ]
                },
                pageMargins: [20, 10, 20, 20],
                extend: 'pdfHtml5',
                pageSize: 'A4',
                content: [
                    content_detail
                ],
                styles: {
                    tableHeader: {
                        alignment: 'center',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    td: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8
                    },
                    header: {
                        fontSize: 9,
                        bold: 'true',
                        color: 'black',
                        alignment: 'center'
                    }
                }
            };

            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });
            } else {
                cratePdf(content);
            }
        }

//Данные с трекеров(Весовая)
        function servicePointsLibra(rep, params, func) {
            var table_body = [];
            var content_detail = [];

            table_body.push([
                {'text': $filter('translate')('date'), style: 'tableHeader'},
                {'text': $filter('translate')('tab.params'), style: 'tableHeader'},

            ]);

            for (var i = 0; i < rep.pointList.length; i++) {
                var point = rep.pointList[i];
                table_body.push([
                    {'text': $filter('date')(point.tm * 1000, 'dd.MM.yyyy HH:mm:ss'), style: 'td'},
                    {'text': point.params, style: 'td'},

                ]);
            }

            content_detail.push(
                {
                    'text': $filter('translate')('reportType') + " " + $filter('translate')('report.servicePointsLibra'),
                    alignment: 'center',
                    bold: 'true',
                },
                {
                    'text': rep.libra_name,
                    alignment: 'center',
                    bold: 'true',
                },
                {
                    'text': $filter('date')(rep.datefrom * 1000, 'dd.MM.yyyy HH:mm:ss') + " - " + $filter('date')(rep.dateto * 1000, 'dd.MM.yyyy HH:mm:ss'),
                    alignment: 'center',
                    bold: 'true',
                    margin: [0, 0, 0, 20],
                },
                {
                    color: '#444',
                    margin: [0, 0, 0, 20],
                    table: {
                        widths: [45, 490],
                        heights: 20,
                        body: table_body,
                        alignment: 'center',
                        dontBreakRows: true,
                    },
                })

            var content = {
                info: {
                    title: 'Agrocontrol',
                    author: 'Agrocontrol',
                    subject: '',
                    keywords: '',
                },
                footer: {
                    columns: [
                        {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 20, 5]}
                    ]
                },
                pageMargins: [20, 10, 20, 20],
                extend: 'pdfHtml5',
                pageSize: 'A4',
                content: [
                    content_detail
                ],
                styles: {
                    tableHeader: {
                        alignment: 'center',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    td: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8
                    },
                    header: {
                        fontSize: 9,
                        bold: 'true',
                        color: 'black',
                        alignment: 'center'
                    }
                }
            };

            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });
            } else {
                cratePdf(content);
            }
        }

//Данные с трекеров(Метео)
        function servicePointsMeteo(rep, params, func) {
            var table_body = [];
            var content_detail = [];

            table_body.push([
                {'text': $filter('translate')('date'), style: 'tableHeader'},
                {'text': $filter('translate')('sats'), style: 'tableHeader'},
                {'text': $filter('translate')('lat'), style: 'tableHeader'},
                {'text': $filter('translate')('lon'), style: 'tableHeader'},
                {'text': $filter('translate')('tab.params'), style: 'tableHeader'},
            ]);
            for (var i = 0; i < rep.pointList.length; i++) {
                var point = rep.pointList[i];
                table_body.push([
                    {'text': $filter('date')(point.tm * 1000, 'dd.MM.yyyy HH:mm:ss'), style: 'td'},
                    {'text': point.sats, style: 'td'},
                    {'text': point.lat, style: 'td'},
                    {'text': point.lon, style: 'td'},
                    {'text': point.params, style: 'td'},
                ]);
            }

            content_detail.push(
                {
                    'text': $filter('translate')('reportType') + " " + $filter('translate')('report.servicePointsMeteo'),
                    alignment: 'center',
                    bold: 'true',
                },
                {
                    'text': rep.meteo_name,
                    alignment: 'center',
                    bold: 'true',
                },
                {
                    'text': $filter('date')(rep.datefrom * 1000, 'dd.MM.yyyy HH:mm:ss') + " - " + $filter('date')(rep.dateto * 1000, 'dd.MM.yyyy HH:mm:ss'),
                    alignment: 'center',
                    bold: 'true',
                    margin: [0, 0, 0, 20],
                },
                {
                    color: '#444',
                    margin: [0, 0, 0, 20],
                    table: {
                        widths: [45, 45, 80, 75, 260],
                        heights: 20,
                        body: table_body,
                        alignment: 'center',
                        dontBreakRows: true,
                    },
                })

            var content = {
                info: {
                    title: 'Agrocontrol',
                    author: 'Agrocontrol',
                    subject: '',
                    keywords: '',
                },
                footer: {
                    columns: [
                        {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 20, 5]}
                    ]
                },
                pageMargins: [20, 10, 20, 20],
                extend: 'pdfHtml5',
                pageSize: 'A4',
                content: [
                    content_detail
                ],
                styles: {
                    tableHeader: {
                        alignment: 'center',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    td: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8
                    },
                    header: {
                        fontSize: 9,
                        bold: 'true',
                        color: 'black',
                        alignment: 'center'
                    }
                }
            };

            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });
            } else {
                cratePdf(content);
            }
        }

//Справочник водителей
        function referenceDriver(rep, params, func) {
            var table_body = [];
            var content_detail = [];

            table_body.push([
                {'text': $filter('translate')('fio'), style: 'tableHeader'},
                {'text': $filter('translate')('imei'), style: 'tableHeader'},
                {'text': $filter('translate')('phone'), style: 'tableHeader'},
                {'text': $filter('translate')('group'), style: 'tableHeader'}
            ]);
            for (var i = 0; i < rep.dataList.length; i++) {
                var data = rep.dataList[i];
                table_body.push([
                    {'text': data.name, style: 'td'},
                    {'text': data.imei, style: 'td'},
                    {'text': data.phone, style: 'td'},
                    {'text': data.group_name, style: 'td'}
                ]);
            }

            content_detail.push(
                {
                    'text': $filter('translate')('report.referenceDriver'),
                    alignment: 'center',
                    bold: 'true',
                },
                {
                    'text': $filter('date')(rep.date, 'dd.MM.yyyy HH:mm'),
                    alignment: 'center',
                    bold: 'true',
                    margin: [0, 0, 0, 20],
                },
                {
                    color: '#444',
                    margin: [0, 0, 0, 20],
                    table: {
                        widths: [130, 130, 125, 125],
                        heights: 20,
                        body: table_body,
                        alignment: 'center',
                        dontBreakRows: true,
                    },
                })

            var content = {
                info: {
                    title: 'Agrocontrol',
                    author: 'Agrocontrol',
                    subject: '',
                    keywords: '',
                },
                footer: {
                    columns: [
                        {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 20, 5]}
                    ]
                },
                pageMargins: [20, 10, 20, 20],
                extend: 'pdfHtml5',
                pageSize: 'A4',
                content: [
                    content_detail
                ],
                styles: {
                    tableHeader: {
                        alignment: 'center',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    td: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8
                    },
                    header: {
                        fontSize: 9,
                        bold: 'true',
                        color: 'black',
                        alignment: 'center'
                    }
                }
            };

            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });
            } else {
                cratePdf(content);
            }
        }

//Справочник орудий
        function referenceTrailer(rep, params, func) {
            var table_body = [];
            var content_detail = [];

            table_body.push([
                {'text': $filter('translate')('name'), style: 'tableHeader'},
                {'text': $filter('translate')('width'), style: 'tableHeader'},
                {'text': $filter('translate')('count.width'), style: 'tableHeader'},
                {'text': $filter('translate')('worktypes'), style: 'tableHeader'},
                {'text': $filter('translate')('group'), style: 'tableHeader'},
                {'text': $filter('translate')('trailer.is_auto'), style: 'tableHeader'}
            ]);
            for (var i = 0; i < rep.dataList.length; i++) {
                var data = rep.dataList[i];
                var cardsCode = [];
                var cardsComment = [];

                for (let c = 0; c < data.cards.length; c++) {
                    let item = data.cards[c];
                    cardsCode.push({'text': item.code, alignment: 'center', style: 'td'})
                    cardsComment.push({'text': item.comment, alignment: 'center', style: 'td'})
                }

                table_body.push([
                    {'text': data.name, style: 'td'},
                    {'text': data.real_width, style: 'td'},
                    {'text': data.width, style: 'td'},
                    {'text': data.worktype ? data.worktype.name : data.worktype, style: 'td'},
                    cardsCode,
                    cardsComment
                ]);
            }

            content_detail.push(
                {
                    'text': $filter('translate')('report.referenceTrailer'),
                    alignment: 'center',
                    bold: 'true',
                },
                {
                    'text': $filter('date')(rep.date, 'dd.MM.yyyy HH:mm'),
                    alignment: 'center',
                    bold: 'true',
                    margin: [0, 0, 0, 20],
                },
                {
                    color: '#444',
                    margin: [0, 0, 0, 20],
                    table: {
                        widths: [120, 45, 55, 95, 45, 135],
                        heights: 20,
                        body: table_body,
                        alignment: 'center',
                        dontBreakRows: true,
                    },
                })

            var content = {
                info: {
                    title: 'Agrocontrol',
                    author: 'Agrocontrol',
                    subject: '',
                    keywords: '',
                },
                footer: {
                    columns: [
                        {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 20, 5]}
                    ]
                },
                pageMargins: [20, 10, 20, 20],
                extend: 'pdfHtml5',
                pageSize: 'A4',
                content: [
                    content_detail
                ],
                styles: {
                    tableHeader: {
                        alignment: 'center',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    td: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8
                    },
                    header: {
                        fontSize: 9,
                        bold: 'true',
                        color: 'black',
                        alignment: 'center'
                    }
                }
            };

            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });
            } else {
                cratePdf(content);
            }
        }

//Справочник ТС
        function fieldSort(arr, fields) {
            return arr.slice().sort(function (a, b) {
                return fields.reduce(function (c, d, e, f) {
                    var _a = a[d] || 0, _b = b[d] || 0
                    return c + (f.length - e) * (_a > _b ? 1 : _a < _b ? -1 : 0)
                }, 0)
            })
        }

        function referenceVehicle(rep, params, func) {
            var table_body = [];
            var content_detail = [];

            table_body.push([
                {'text': $filter('translate')('vehicle'), style: 'tableHeader'},
                {'text': $filter('translate')('imei'), style: 'tableHeader'},
                {'text': $filter('translate')('phone'), style: 'tableHeader'},
                {'text': $filter('translate')('vehicle.state.number'), style: 'tableHeader'},
                {'text': $filter('translate')('vehicle.model'), style: 'tableHeader'},
                {'text': $filter('translate')('group'), style: 'tableHeader'}
            ]);

            let sortArray = fieldSort(rep.dataList, ["group_name", "vehicle_name"])

            for (var i = 0; i < sortArray.length; i++) {
                var data = sortArray[i];

                table_body.push([
                    {'text': data.vehicle_name, style: 'td'},
                    {'text': data.imei, style: 'td'},
                    {'text': data.phone, style: 'td'},
                    {'text': data.state_number, style: 'td'},
                    {'text': data.model, style: 'td'},
                    {'text': data.group_name, style: 'td'},

                ]);
            }

            content_detail.push(
                {
                    'text': $filter('translate')('report.referenceVehicle'),
                    alignment: 'center',
                    bold: 'true',
                },
                {
                    'text': $filter('date')(rep.date, 'dd.MM.yyyy HH:mm'),
                    alignment: 'center',
                    bold: 'true',
                    margin: [0, 0, 0, 20],
                },
                {
                    color: '#444',
                    margin: [0, 0, 0, 20],
                    table: {
                        widths: [150, 95, 60, 60, 60, 75],
                        heights: 20,
                        body: table_body,
                        alignment: 'center',
                        dontBreakRows: true,
                    },
                })

            var content = {
                info: {
                    title: 'Agrocontrol',
                    author: 'Agrocontrol',
                    subject: '',
                    keywords: '',
                },
                footer: {
                    columns: [
                        {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 20, 5]}
                    ]
                },
                pageMargins: [20, 10, 20, 20],
                extend: 'pdfHtml5',
                pageSize: 'A4',
                content: [
                    content_detail
                ],
                styles: {
                    tableHeader: {
                        alignment: 'center',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    td: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8
                    },
                    header: {
                        fontSize: 9,
                        bold: 'true',
                        color: 'black',
                        alignment: 'center'
                    }
                }
            };

            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });
            } else {
                cratePdf(content);
            }
        }


//Статус трекеров
        function fieldSortTracker(arr, fields) {
            return arr.slice().sort(function (a, b) {

                return fields.reduce(function (c, d, e, f) {
                    let valueA = a.vehicleGroup ? eval('a.' + d) : ' '
                    let valueB = b.vehicleGroup ? eval('b.' + d) : ' '

                    var _a = valueA || 0, _b = valueB || 0
                    return c + (f.length - e) * (_a > _b ? 1 : _a < _b ? -1 : 0)
                }, 0)
            })
        }

        function trackerStatus(rep, params, func) {
            var table_body = [];
            var content_detail = [];

            table_body.push([
                {'text': $filter('translate')('vehicle'), style: 'tableHeader'},
                {'text': $filter('translate')('group'), style: 'tableHeader'},
                {'text': $filter('translate')('imei'), style: 'tableHeader'},
                {'text': $filter('translate')('tracker.phone'), style: 'tableHeader'},
                {'text': $filter('translate')('driver'), style: 'tableHeader'},
                {'text': $filter('translate')('phone'), style: 'tableHeader'},
                {'text': $filter('translate')('last.point'), style: 'tableHeader'},
                {'text': $filter('translate')('status'), style: 'tableHeader'},
            ]);

            let sortArray = fieldSortTracker(rep.dataList, ["vehicleGroup.name", "vehicle.name"]);

            for (var i = 0; i < sortArray.length; i++) {
                var data = sortArray[i];
                let status = [];
                if (data.isOnline === true) {

                    table_body.push([
                        {'text': data.vehicle.name, style: 'td'},
                        {'text': data.vehicleGroup ? data.vehicleGroup.name : data.vehicleGroup, style: 'td'},
                        {'text': data.vehicle.imei, style: 'td'},
                        {'text': data.vehicle.phone, style: 'td'},
                        {'text': data.driver ? data.driver.name : data.driver, style: 'td'},
                        {'text': data.driver ? data.driver.phone : data.driver, style: 'td'},
                        {
                            'text': data.lastPoint ? $filter('date')(data.lastPoint.tm * 1000, 'dd.MM.yyyy HH:mm:ss') : data.lastPoint,
                            style: 'td'
                        },
                        {'text': $filter('translate')('online'), style: 'td'}
                    ]);
                } else {
                    table_body.push([
                        {'text': data.vehicle.name, style: 'redTd'},
                        {'text': data.vehicleGroup ? data.vehicleGroup.name : data.vehicleGroup, style: 'redTd'},
                        {'text': data.vehicle.imei, style: 'redTd'},
                        {'text': data.vehicle.phone, style: 'redTd'},
                        {'text': data.driver ? data.driver.name : data.driver, style: 'redTd'},
                        {'text': data.driver ? data.driver.phone : data.driver, style: 'redTd'},
                        {
                            'text': data.lastPoint ? $filter('date')(data.lastPoint.tm * 1000, 'dd.MM.yyyy HH:mm:ss') : data.lastPoint,
                            style: 'redTd'
                        },
                        {'text': $filter('translate')('offline'), style: 'redTd', bold: 'true'}
                    ]);
                }
            }

            content_detail.push(
                {
                    'text': $filter('translate')('report.trackerStatus'),
                    alignment: 'center',
                    bold: 'true',
                },
                {
                    'text': $filter('date')(rep.date, 'dd.MM.yyyy HH:mm'),
                    alignment: 'center',
                    bold: 'true',
                    margin: [0, 0, 0, 20],
                },
                {
                    color: '#444',
                    margin: [0, 0, 0, 20],
                    table: {
                        widths: [90, 60, 60, 45, 60, 50, 50, 40],
                        heights: 20,
                        body: table_body,
                        alignment: 'center',
                        dontBreakRows: true,
                    },
                })

            var content = {
                info: {
                    title: 'Agrocontrol',
                    author: 'Agrocontrol',
                    subject: '',
                    keywords: '',
                },
                footer: {
                    columns: [
                        {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 20, 5]}
                    ]
                },
                pageMargins: [20, 10, 20, 20],
                extend: 'pdfHtml5',
                pageSize: 'A4',
                content: [
                    content_detail
                ],
                styles: {
                    tableHeader: {
                        alignment: 'center',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    td: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8
                    },
                    header: {
                        fontSize: 9,
                        bold: 'true',
                        color: 'black',
                        alignment: 'center'
                    },
                    redTd: {
                        alignment: 'center',
                        color: 'black',
                        fontSize: 8,
                        fillColor: '#F2DEDE',
                    }
                }
            };

            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });
            } else {
                cratePdf(content);
            }
        }

//Земельный банк
        function landBankAnalytic(rep, func) {
            let table2_body = [];
            let table_body = [];
            let content_detail = [];
            let table_image = [];

            table_body.push([
                {'text': $filter('translate')('name'), style: 'tableHeader'},
                {'text': $filter('translate')('quantity.share'), style: 'tableHeader'},
                {'text': $filter('translate')('square.share'), style: 'tableHeader'},
                {'text': '%', style: 'tableHeader'},
            ]);

            table2_body.push([
                {'text': $filter('translate')('name'), style: 'tableHeader', rowSpan: 2},
                {'text': $filter('translate')('square'), style: 'tableHeader', rowSpan: 2},
                {'text': $filter('translate')('geozone.self.capture'), style: 'tableHeader', rowSpan: 2},
                {'text': $filter('translate')('geozone.technological.losses'), style: 'tableHeader', rowSpan: 2},
                {'text': $filter('translate')('field.integrity'), style: 'tableHeader', rowSpan: 2},
                {'text': $filter('translate')('field.integrity.including'), style: 'tableHeader', colSpan: 3},
                {},
                {},
                {'text': $filter('translate')('dogovor.stability'), style: 'tableHeader', colSpan: 3},
                {},
                {},
            ]);


            table2_body.push([
                {},
                {},
                {},
                {},
                {},
                {'text': $filter('translate')('by.dogovor'), style: 'tableHeader'},
                {'text': $filter('translate')('by.exchanges'), style: 'tableHeader'},
                {'text': $filter('translate')('illegally.square'), style: 'tableHeader'},
                {'text': $filter('translate')('dogovor.stability.6'), style: 'tableHeader'},
                {'text': $filter('translate')('dogovor.stability.12'), style: 'tableHeader'},
                {'text': $filter('translate')('dogovor.stability.36'), style: 'tableHeader'},
            ]);


            let qnt = 0;
            let square = 0;
            let percent = 0;

            rep.analyticsTenantList.sort(function (a, b) {
                if (a.square < b.square) {
                    return -1;
                }
                if (a.square < b.square) {
                    return 1;
                }
                return 0;
            });

            for (var i = 0; i < rep.analyticsTenantList.length; i++) {
                var item = rep.analyticsTenantList[i];
                qnt = qnt + item.qnt
                square = square + item.square
                percent = percent + item.percent
                table_body.push([
                    {'text': item.bankOrganization.name, style: 'tdName'},
                    {'text': item.qnt, style: 'td'},
                    {'text': $filter('number')(item.square, 2), style: 'td'},
                    {'text': $filter('number')(item.percent, 2), style: 'td'},

                ]);
            }

            table_body.push([
                {'text': $filter('translate')('total'), style: 'tableHeader'},
                {'text': qnt, style: 'tableHeader'},
                {'text': $filter('number')(square, 2), style: 'tableHeader'},
                {'text': $filter('number')(percent, 0), style: 'tableHeader'},

            ]);


            for (var i = 0; i < rep.analyticsGeozoneList.length; i++) {
                var item = rep.analyticsGeozoneList[i];

                if (rep.analyticsGeozoneData === "percent") {
                    table2_body.push([
                        {'text': item.geozone ? item.geozone.name : '', style: 'tdName'},
                        {'text': $filter('number')(item.square, 2) + " " + $filter('translate')("ha"), style: 'td'},
                        {
                            'text': $filter('number')(item.selfCaptureSquare_percent, 4) + " %",
                            style: 'td'
                        },
                        {
                            'text': $filter('number')(item.technologicalLossesSquare_percent, 4) + " %",
                            style: 'td'
                        },
                        {'text': $filter('number')(item.total_square_percent, 1) + ' %', style: 'td'},
                        {'text': $filter('number')(item.legally_square_percent, 1) + ' %', style: 'td'},
                        {'text': $filter('number')(item.legally_square_contractor_percent, 1) + ' %', style: 'td'},
                        {'text': $filter('number')(item.illegally_square_percent, 1) + ' %', style: 'td'},
                        {'text': $filter('number')(item.dogovor_stability_6_percent, 1) + ' %', style: 'td'},
                        {'text': $filter('number')(item.dogovor_stability_12_percent, 1) + ' %', style: 'td'},
                        {'text': $filter('number')(item.dogovor_stability_36_percent, 1) + ' %', style: 'td'},
                    ]);
                } else {
                    table2_body.push([
                        {'text': item.geozone ? item.geozone.name : '', style: 'tdName'},
                        {'text': $filter('number')(item.square, 2) + " " + $filter('translate')("ha"), style: 'td'},
                        {
                            'text': $filter('number')(item.selfCaptureSquare, 2) + " " + $filter('translate')("ha"),
                            style: 'td'
                        },
                        {
                            'text': $filter('number')(item.technologicalLossesSquare, 2) + " " + $filter('translate')("ha"),
                            style: 'td'
                        },
                        {
                            'text': $filter('number')(item.total_square, 4) + " " + $filter('translate')("ha"),
                            style: 'td'
                        },
                        {
                            'text': $filter('number')(item.legally_square, 4) + " " + $filter('translate')("ha"),
                            style: 'td'
                        },
                        {
                            'text': $filter('number')(item.legally_square_contractor, 4) + " " + $filter('translate')("ha"),
                            style: 'td'
                        },
                        {
                            'text': $filter('number')(item.illegally_square, 4) + " " + $filter('translate')("ha"),
                            style: 'td'
                        },
                        {
                            'text': $filter('number')(item.dogovor_stability_6, 4) + " " + $filter('translate')("ha"),
                            style: 'td'
                        },
                        {
                            'text': $filter('number')(item.dogovor_stability_12, 4) + " " + $filter('translate')("ha"),
                            style: 'td'
                        },
                        {
                            'text': $filter('number')(item.dogovor_stability_36, 4) + " " + $filter('translate')("ha"),
                            style: 'td'
                        },
                    ]);
                }
            }

            if (rep.analyticsGeozoneData === "percent") {
                table2_body.push([
                    {
                        'text': $filter('translate')('total') + ": " + rep.analyticsGeozone.detailList.length,
                        style: 'tableHeader'
                    },
                    {
                        'text': $filter('number')(rep.analyticsGeozone.square, 2) + $filter('translate')("ha"),
                        style: 'tableHeader'
                    },
                    {
                        'text': $filter('number')(rep.analyticsGeozone.selfCaptureSquare_percent, 4) + " %",
                        style: 'tableHeader'
                    },
                    {
                        'text': $filter('number')(rep.analyticsGeozone.technologicalLossesSquare_percent, 4) + " %",
                        style: 'tableHeader'
                    },
                    {
                        'text': $filter('number')(rep.analyticsGeozone.total_square_percent, 1) + ' %',
                        style: 'tableHeader'
                    },
                    {
                        'text': $filter('number')(rep.analyticsGeozone.legally_square_percent, 1) + ' %',
                        style: 'tableHeader'
                    },
                    {
                        'text': $filter('number')(rep.analyticsGeozone.legally_square_contractor_percent, 1) + ' %',
                        style: 'tableHeader'
                    },
                    {
                        'text': $filter('number')(rep.analyticsGeozone.illegally_square_percent, 1) + ' %',
                        style: 'tableHeader'
                    },
                    {
                        'text': $filter('number')(rep.analyticsGeozone.dogovor_stability_6_percent, 1) + ' %',
                        style: 'tableHeader'
                    },
                    {
                        'text': $filter('number')(rep.analyticsGeozone.dogovor_stability_12_percent, 1) + ' %',
                        style: 'tableHeader'
                    },
                    {
                        'text': $filter('number')(rep.analyticsGeozone.dogovor_stability_36_percent, 1) + ' %',
                        style: 'tableHeader'
                    },
                ]);
            } else {
                table2_body.push([
                    {
                        'text': $filter('translate')('total') + ": " + rep.analyticsGeozone.detailList.length,
                        style: 'tableHeader'
                    },
                    {
                        'text': $filter('number')(rep.analyticsGeozone.square, 2) + " " + $filter('translate')("ha"),
                        style: 'tableHeader'
                    },
                    {
                        'text': $filter('number')(rep.analyticsGeozone.selfCaptureSquare, 2) + " " + $filter('translate')("ha"),
                        style: 'tableHeader'
                    },
                    {
                        'text': $filter('number')(rep.analyticsGeozone.technologicalLossesSquare, 2) + " " + $filter('translate')("ha"),
                        style: 'tableHeader'
                    },
                    {
                        'text': $filter('number')(rep.analyticsGeozone.total_square, 4) + " " + $filter('translate')("ha"),
                        style: 'tableHeader'
                    },
                    {
                        'text': $filter('number')(rep.analyticsGeozone.legally_square, 4) + " " + $filter('translate')("ha"),
                        style: 'tableHeader'
                    },
                    {
                        'text': $filter('number')(rep.analyticsGeozone.legally_square_contractor, 4) + " " + $filter('translate')("ha"),
                        style: 'tableHeader'
                    },
                    {
                        'text': $filter('number')(rep.analyticsGeozone.illegally_square, 4) + " " + $filter('translate')("ha"),
                        style: 'tableHeader'
                    },
                    {
                        'text': $filter('number')(rep.analyticsGeozone.dogovor_stability_6, 4) + " " + $filter('translate')("ha"),
                        style: 'tableHeader'
                    },
                    {
                        'text': $filter('number')(rep.analyticsGeozone.dogovor_stability_12, 4) + " " + $filter('translate')("ha"),
                        style: 'tableHeader'
                    },
                    {
                        'text': $filter('number')(rep.analyticsGeozone.dogovor_stability_36, 4) + " " + $filter('translate')("ha"),
                        style: 'tableHeader'
                    },
                ]);
            }

            table_image.push([
                {
                    image: rep.geozoneChart.image,
                    width: 300,
                    left: 40,
                    height: 170,
                    border: [false, false, false, false],
                },
                {
                    image: rep.contractChart.image,
                    width: 300,
                    left: 60,
                    height: 170,
                    border: [false, false, false, false],
                },
            ])

            let width = rep.tenantChart.width;
            let height = rep.tenantChart.height;
            if (rep.tenantChart.height > 800) {
                height = 800
                width = (height / rep.tenantChart.height) * rep.tenantChart.width
            }


            content_detail.push(
                {
                    'text': $filter('translate')('consolidated.by.tenant'),
                    alignment: 'center',
                    bold: 'true',
                },
                {
                    color: '#444',
                    margin: [10, 20, 0, 0],
                    table: {
                        widths: [250, 90, 80, 70],
                        heights: 20,
                        body: table_body,
                        alignment: 'center',
                        dontBreakRows: true,
                    },
                },
                {
                    image: rep.tenantChart.image,
                    width: width,
                    height: height,
                    alignment: 'left',
                    pageBreak: 'after',
                },
                {
                    'text': $filter('translate')('consolidated.by.geozones'),
                    margin: [0, 20, 0, 0],
                    alignment: 'center',
                    bold: 'true',
                },
                {
                    table: {
                        body: table_image,
                        textAlign: 'left',
                        dontBreakRows: true,
                    },
                },
                {
                    color: '#444',
                    margin: [0, 20, 0, 20],
                    table: {
                        widths: [70, 40, 40, 40, 45, 45, 35, 40, 40, 30, 30],
                        heights: 30,
                        body: table2_body,
                        alignment: 'center',
                        dontBreakRows: true,
                    },
                })

            var content = {
                info: {
                    title: 'Agrocontrol',
                    author: 'Agrocontrol',
                    subject: '',
                    keywords: '',
                },
                footer: {
                    columns: [
                        {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 20, 5]}
                    ]
                },
                pageMargins: [20, 10, 20, 10],
                extend: 'pdfHtml5',
                pageSize: 'A4',
                content: [
                    content_detail
                ],
                styles: {
                    tableHeader: {
                        alignment: 'center',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    td: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8
                    },
                    header: {
                        fontSize: 9,
                        bold: 'true',
                        color: 'black',
                        alignment: 'center'
                    },
                    tdName: {
                        alignment: 'left',
                        height: '100',
                        fontSize: 8
                    }
                }
            };

            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });
            } else {
                cratePdf(content);
            }
        }

//    оперативные данные(наряды)
        function vehicleTask(rep, params, func) {
            var table1_body = [];
            var content_detail = [];
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

                table1_body.push([
                    {'text': data.geozoneGroup ? data.geozoneGroup.name : '', colSpan: 9},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {}
                ]);

                data.reportVehicleTaskList.sort(function (a, b) {
                    if ($filter('translate')(a.workType.name).localeCompare($filter('translate')(b.workType.name)) < $filter('translate')(b.workType.name).localeCompare($filter('translate')(a.workType.name))) {
                        return -1;
                    }
                    if ($filter('translate')(a.workType.name).localeCompare($filter('translate')(b.workType.name)) > $filter('translate')(b.workType.name).localeCompare($filter('translate')(a.workType.name))) {
                        return 1;
                    }
                    return 0;
                });

                table1_body.push([
                    {'text': '', border: [false, true, false, false]},
                    {
                        'text': $filter('translate')('worktypes'),
                        style: 'tableHeaderLeft',
                        colSpan: 6

                    },
                    {},
                    {},
                    {},
                    {},
                    {},
                    {'text': $filter('translate')('plan.oper_day'), style: 'tableHeader'},
                    {'text': $filter('translate')('fact.oper_day'), style: 'tableHeader'},
                ]);
                for (var k = 0; k < data.reportVehicleTaskList.length; k++) {
                    let item = data.reportVehicleTaskList[k];
                    if (item.plan || item.fact) {
                        table1_body.push([
                            {'text': '', border: [false, false, false, false]},
                            {'text': $filter('translate')(item.workType.name), style: 'tdLeft', colSpan: 6},
                            {},
                            {},
                            {},
                            {},
                            {},
                            {'text': $filter('number')(item.plan, 2), style: 'td'},
                            {'text': $filter('number')(item.fact, 2), style: 'td'},
                        ]);
                    }
                    item.detailGeozoneList.sort(function (a, b) {
                        if (a.geozone.name.localeCompare(b.geozone.name) < b.geozone.name.localeCompare(a.geozone.name)) {
                            return -1;
                        }
                        if (a.geozone.name.localeCompare(b.geozone.name) > b.geozone.name.localeCompare(a.geozone.name)) {
                            return 1;
                        }
                        return 0;
                    });

                    if (item.plan || item.fact) {
                        table1_body.push([
                            {'text': '', border: [false, false, false, false]},
                            {'text': '', border: [false, false, false, false]},
                            {'text': $filter('translate')('geozone'), style: 'tableHeader'},
                            {'text': $filter('translate')('culture'), style: 'tableHeader'},
                            {'text': $filter('translate')('square'), style: 'tableHeader'},
                            {'text': $filter('translate')('timein'), style: 'tableHeader'},
                            {'text': $filter('translate')('timeout'), style: 'tableHeader'},
                            {'text': $filter('translate')('processed.oper_day'), style: 'tableHeader'},
                            {'text': $filter('translate')('processed.fact.agrooperation'), style: 'tableHeader'}
                        ]);
                        for (var d = 0; d < item.detailGeozoneList.length; d++) {
                            let detailGeozone = item.detailGeozoneList[d];
                            table1_body.push([
                                {'text': '', border: [false, false, false, false]},
                                {'text': '', border: [false, false, false, false]},
                                {
                                    'text': $filter('translate')(detailGeozone.geozone ? detailGeozone.geozone.name : ''),
                                    style: 'td'
                                },
                                {
                                    'text': $filter('translate')(detailGeozone.culture ? detailGeozone.culture.name : ''),
                                    style: 'td'
                                },
                                {
                                    'text': $filter('number')(detailGeozone.geozone ? detailGeozone.geozone.square_real : 0, 2),
                                    style: 'td'
                                },
                                {'text': $filter('date')(detailGeozone.time_in, 'dd.MM.yyyy HH:mm'), style: 'td'},
                                {'text': $filter('date')(detailGeozone.time_out, 'dd.MM.yyyy HH:mm'), style: 'td'},
                                {'text': $filter('number')(detailGeozone.processed_oper_day, 2), style: 'td'},
                                {'text': $filter('number')(detailGeozone.processed_total, 2), style: 'td'},
                            ]);
                        }
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

                for (var z = 0; z < data.reportVehicleTaskList.length; z++) {
                    let item = data.reportVehicleTaskList[z];
                    if (z === 0) {
                        table1_body.push([
                            {'text': '', border: [false, false, false, false], colSpan: 9},
                            {},
                            {},
                            {},
                            {},
                            {},
                            {},
                            {},
                            {},
                        ]);
                    }

                    table1_body.push([
                        {'text': '', border: [false, false, false, false]},
                        {'text': '', border: [false, false, false, false]},
                        {
                            'text': $filter('translate')(item.workType ? item.workType.name : ''),
                            style: 'tableHeader',
                            colSpan: 4
                        },
                        {},
                        {},
                        {},
                        {'text': $filter('translate')('plan.total'), style: 'tableHeader'},
                        {'text': $filter('translate')('fact.total'), style: 'tableHeader'},
                        {'text': $filter('translate')('left.total'), style: 'tableHeader'},

                    ]);


                    item.detailCultureList.sort(function (a, b) {
                        if ($filter('translate')(a.culture ? a.culture.name : '').localeCompare($filter('translate')(b.culture ? b.culture.name : '')) < $filter('translate')(b.culture ? b.culture.name : ' ').localeCompare($filter('translate')(a.culture ? a.culture.name : ''))) {
                            return -1;
                        }
                        if ($filter('translate')(a.culture ? a.culture.name : '').localeCompare($filter('translate')(b.culture ? b.culture.name : '')) > $filter('translate')(b.culture ? b.culture.name : ' ').localeCompare($filter('translate')(a.culture ? a.culture.name : ''))) {
                            return 1;
                        }
                        return 0;
                    });

                    for (var k = 0; k < item.detailCultureList.length; k++) {
                        let row = item.detailCultureList[k];
                        table1_body.push([
                            {'text': '', border: [false, false, false, false]},
                            {'text': '', border: [false, false, false, false]},
                            {
                                'text': $filter('translate')(row.culture ? row.culture.name : ''),
                                style: 'td',
                                colSpan: 4
                            },
                            {},
                            {},
                            {},
                            {'text': $filter('number')(row.plan, 2), style: 'td'},
                            {'text': $filter('number')(row.fact, 2), style: 'td'},
                            {'text': $filter('number')(row.plan - row.fact, 2), style: 'td'},

                        ]);
                    }

                    if (z === data.reportVehicleTaskList.length - 1) {
                        table1_body.push([
                            {'text': '', border: [false, false, false, false], colSpan: 9},
                            {},
                            {},
                            {},
                            {},
                            {},
                            {},
                            {},
                            {},
                        ]);
                    }
                }
            }

            content_detail.push(
                {
                    'text': $filter('translate')('report.vehicle.task'),
                    alignment: 'center',
                    bold: 'true',
                },
                {
                    'text': $filter('date')(rep.cluster_name),
                    alignment: 'center',
                    bold: 'true',
                    margin: [0, 0, 0, 20],
                },
                {
                    'text': $filter('date')(rep.oper_day, 'dd.MM.yyyy'),
                    alignment: 'center',
                    bold: 'true',
                    margin: [0, 0, 0, 20],
                },
                {
                    color: '#444',
                    margin: [0, 0, 0, 20],
                    table: {
                        widths: [5, 5, 60, 60, 60, 75, 75, 75, 75],
                        heights: 20,
                        body: table1_body,
                        alignment: 'center',
                        dontBreakRows: true,
                    },
                }
            )

            var content = {
                info: {
                    title: 'Agrocontrol',
                    author: 'Agrocontrol',
                    subject: '',
                    keywords: '',
                },
                footer: {
                    columns: [
                        {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 20, 5]}
                    ]
                },
                pageMargins: [10, 10, 20, 20],
                extend: 'pdfHtml5',
                pageSize: 'A4',
                content: [
                    content_detail
                ],
                styles: {
                    tableHeader: {
                        alignment: 'center',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    tableHeaderLeft: {
                        alignment: 'left',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    td: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8
                    },
                    tdLeft: {
                        alignment: 'left',
                        height: '100',
                        fontSize: 8
                    },
                    header: {
                        fontSize: 9,
                        bold: 'true',
                        color: 'black',
                        alignment: 'center'
                    },
                    redTd: {
                        alignment: 'center',
                        color: 'black',
                        fontSize: 8,
                        fillColor: '#F2DEDE',
                    }
                }
            };

            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });
            } else {
                cratePdf(content);
            }
        }

//земельний банк дані детальні по полю
        function landBankGeozoneDetail(rep, params, func) {
            var table1_body = [];
            var content_detail = [];
            table1_body.push([
                {'text': $filter('translate')('right1.fio'), style: 'tableHeader'},
                {'text': $filter('translate')('share.number'), style: 'tableHeader'},
                {'text': $filter('translate')('square'), style: 'tableHeader'},
                {'text': $filter('translate')('contract.date.to'), style: 'tableHeader'},
                {'text': $filter('translate')('contract.supplementary.date.to'), style: 'tableHeader'},
                {'text': $filter('translate')('tenant'), style: 'tableHeader'},
                {'text': $filter('translate')('state'), style: 'tableHeader'},
            ]);


            let bankOrganizationList = params.scope.bankOrganizationList;
            let newArray = [];
            for (let o = 0; o < bankOrganizationList.length; o++) {
                for (let i = 0; i < rep.length; i++) {
                    let item = rep[i];
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

                        let tenantName = item.bankTenant ? item.bankTenant.name : ''
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


                if (params.sortColumn.reverse === false) {
                    bank_organization.items.sort(function (a, b) {
                        var aa = eval("a." + (params.sortColumn.column))
                        var bb = eval("b." + (params.sortColumn.column))
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
                        var aa = eval("a." + (params.sortColumn.column))
                        var bb = eval("b." + (params.sortColumn.column))
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
                        right1_fio = right1_fio + "\n" + share.right1FioList[z] ? share.right1FioList[z] : '';
                    }

                    let right2_fio = ''
                    if (share.bankTenant) {
                        right2_fio = share.bankTenant.name;
                    } else if (share.right2_fio) {
                        right2_fio = share.right2_fio;
                    }
                    let kadastr_table = []

                    kadastr_table.push([{
                        'text': share.kadastr_number,
                        style: 'td',
                        border: [false, false, false, false]
                    }])

                    for (let h = 0; h < share.bankShareExchangeList.length; h++) {
                        let record = share.bankShareExchangeList[h]
                        kadastr_table.push([
                            {
                                'text': record.kadastr_number + " (" + $filter('number')(record.bankShareToSquare, 4) + ")",
                                style: 'tdSmallRight',
                                border: [false, false, false, false]
                            }]);
                    }

                    table1_body.push([
                        {'text': right1_fio, style: 'td'},
                        {
                            table: {
                                alignment: 'left',
                                margin: [0, 0, 0, 0],
                                widths: [115],
                                body: kadastr_table
                            },

                        },
                        {
                            'text': $filter('number')(params.scope.getShareSquare(share, bank_organization), 4),
                            style: 'td'
                        },
                        {'text': $filter('date')(share.contract_date_to, 'dd.MM.yyyy'), style: 'td'},
                        {'text': $filter('date')(share.contract_supplementary_date_to, 'dd.MM.yyyy'), style: 'td'},
                        {'text': right2_fio, style: 'td'},
                        {'text': params.scope.getContractStatus(share), style: 'td'},

                    ]);
                }

                table1_body.push([
                    {'text': ""},
                    {'text': bank_organization.name, colSpan: 2, style: 'tdBold'},
                    {},
                    {
                        'text': $filter('number')(params.scope.countShareSquare(bank_organization.items, params.scope.shareDetailFilter, {bank_organization_id: bank_organization.id}) + params.scope.countRoadSquare(params.scope.bankGeozoneRoadList, params.scope.shareDetailFilter, bank_organization.isOwn), 4),
                        colSpan: 2,
                        style: 'tdBold'
                    },
                    {'text': "", border: [true, true, false, true], style: 'td'},
                    {'text': "", colSpan: 2},
                    {},
                ]);

                if (i !== newArray.length - 1) {
                    table1_body.push([
                        {'text': "", colSpan: 7, border: [false, false, false, false]},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                    ]);
                }
            }
            table1_body.push([
                {'text': ""},
                {'text': $filter('translate')('total'), colSpan: 2, style: 'tdBold'},
                {},
                {
                    'text': $filter('number')(params.scope.countShareSquare(rep, params.scope.shareDetailFilter, {}) + params.scope.countRoadSquare(params.scope.bankGeozoneRoadList, params.scope.shareDetailFilter, true), 4),
                    colSpan: 2,
                    style: 'tdBold'
                },
                {'text': "", border: [true, true, false, true], style: 'td'},
                {'text': "", colSpan: 2},
                {}
            ]);

            content_detail.push(
                {
                    'text': params.shareDetailTitle,
                    alignment: 'center',
                    bold: 'true',
                },
                {
                    'text': $filter('date')(rep.cluster_name),
                    alignment: 'center',
                    bold: 'true',
                    margin: [0, 0, 0, 20],
                },
                {
                    'text': $filter('date')(rep.oper_day, 'dd.MM.yyyy'),
                    alignment: 'center',
                    bold: 'true',
                    margin: [0, 0, 0, 20],
                },
                {
                    color: '#444',
                    margin: [0, 0, 0, 20],
                    table: {
                        widths: [100, 120, 40, 45, 45, 75, 70],
                        heights: 20,
                        body: table1_body,
                        alignment: 'center',
                        dontBreakRows: true
                    }
                },
                {
                    'text': $filter('translate')('geozone.self.capture') + ': ' + $filter('number')(params.selfCaptureSquare, 2) + $filter('translate')('ha'),
                    alignment: 'left',
                    bold: 'true',
                    fontSize: 9
                },
                {
                    'text': $filter('translate')('geozone.technological.losses') + ': ' + $filter('number')(params.technologicalLossesSquare, 2) + $filter('translate')('ha'),
                    alignment: 'left',
                    bold: 'true',
                    fontSize: 9
                }
            )

            var content = {
                info: {
                    title: 'Agrocontrol',
                    author: 'Agrocontrol',
                    subject: '',
                    keywords: '',
                },
                footer: {
                    columns: [
                        {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 20, 5]}
                    ]
                },
                pageMargins: [15, 10, 20, 20],
                extend: 'pdfHtml5',
                pageSize: 'A4',
                content: [
                    content_detail
                ],
                styles: {
                    tableHeader: {
                        alignment: 'center',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    tableHeaderLeft: {
                        alignment: 'left',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    td: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8
                    },
                    tdSmall: {
                        alignment: 'center',
                        fontSize: 7
                    },
                    tdBold: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8,
                        bold: 'true'
                    },
                    header: {
                        fontSize: 9,
                        bold: 'true',
                        color: 'black',
                        alignment: 'center'
                    },
                    tdRight: {
                        alignment: 'right',
                        color: 'black',
                        fontSize: 8,
                    },
                    tdLeft: {
                        alignment: 'left',
                        color: 'black',
                        fontSize: 8,
                    },
                    tdSmallRight: {
                        alignment: 'right',
                        color: 'black',
                        fontSize: 6,
                    }
                }
            };

            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });
            } else {
                cratePdf(content);
            }
        }

        function sortForFuelAnalytic(a, b) {
            var workTypeSort = parseInt($filter('translate')(a.workType ? a.workType.name : '').localeCompare($filter('translate')(b.workType ? b.workType.name : '')));
            var vehicleSort = parseInt((a.vehicle.name).localeCompare(b.vehicle.name));
            if (workTypeSort !== 0) {
                return workTypeSort;
            }
            return vehicleSort;
        }

        //аналитика по топливу
        function fuelAnalytic(data, params, func) {
            let rep = $.extend(true, [], data);
            var table1_body = [];
            var content_detail = [];

            rep.repData.sort((a, b) => {
                return sortForFuelAnalytic(a, b)
            })


            table1_body.push([
                {'text': $filter('translate')('vehicle'), style: 'tableHeader'},
                {'text': $filter('translate')('worktypes'), style: 'tableHeader'},
                {'text': $filter('translate')('trailers'), style: 'tableHeader'},
                {'text': $filter('translate')('crossing'), style: 'tableHeader'},
                {'text': $filter('translate')('fuel.used.moving1'), style: 'tableHeader'},
                {'text': $filter('translate')('fuel.avg'), style: 'tableHeader'},
                {'text': $filter('translate')('processed'), style: 'tableHeader'},
                {'text': $filter('translate')('fuel.used.processed'), style: 'tableHeader'},
                {'text': $filter('translate')('fuel.used.processed.avg'), style: 'tableHeader'},
                {'text': $filter('translate')('fuel.rate'), style: 'tableHeader'},
            ])

            for (var i = 0; i < rep.repData.length; i++) {
                var item = rep.repData[i];
                let trailers = '';
                for (var t = 0; t < item.trailerList.length; t++) {
                    trailers = trailers + " " + item.trailerList[t].name + "\n";
                }

                let prices = '';
                for (var p = 0; p < item.referencePriceList.length; p++) {
                    prices = prices + " " + $filter('number')(item.referencePriceList[p].fuelRate, 2) +
                        params.scope.getTypeName(item.referencePriceList[p].fuelRateType, params.scope.fuelRateTypeList);
                }
                table1_body.push([
                    {'text': item.vehicle.name, style: 'td'},
                    {'text': $filter('translate')(item.workType ? item.workType.name : ''), style: 'td'},
                    {'text': trailers, style: 'tdLeft'},
                    {'text': $filter('number')(item.distance_moving, 1), style: 'td'},
                    {'text': $filter('number')(item.fuel_used_moving, 1), style: 'td'},
                    {'text': $filter('number')(item.fuel_used_moving_avg, 1), style: 'td'},
                    {'text': $filter('number')(item.processed, 1), style: 'td'},
                    {'text': $filter('number')(item.fuel_used_processed, 1), style: 'td'},
                    {'text': $filter('number')(item.fuel_used_processed_avg, 1), style: 'td'},
                    {'text': prices, style: 'td'},
                ]);
            }

            content_detail.push(
                {
                    'text': $filter('translate')('reportType') + ' ' + $filter('lowercase')($filter('translate')('report.fuel.analytic')),
                    alignment: 'center',
                    bold: 'true',
                },
                {
                    'text': $filter('date')(rep.date_start * 1000, 'dd.MM.yyyy') + " - " + $filter('date')(rep.date_end * 1000, 'dd.MM.yyyy'),
                    alignment: 'center',
                    bold: 'true',
                    margin: [0, 0, 0, 20],
                },
                {
                    color: '#444',
                    margin: [0, 0, 0, 20],
                    table: {
                        widths: [75, 52, 60, 35, 45, 40, 50, 50, 45, 35],
                        heights: 20,
                        body: table1_body,
                        alignment: 'center',
                        dontBreakRows: true,
                    },
                }
            )

            var content = {
                info: {
                    title: 'Agrocontrol',
                    author: 'Agrocontrol',
                    subject: '',
                    keywords: '',
                },
                footer: {
                    columns: [
                        {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 20, 5]}
                    ]
                },
                pageMargins: [10, 10, 20, 20],
                extend: 'pdfHtml5',
                pageSize: 'A4',
                content: [
                    content_detail
                ],
                styles: {
                    tableHeader: {
                        alignment: 'center',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    tableHeaderLeft: {
                        alignment: 'left',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    td: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8
                    },
                    tdLeft: {
                        alignment: 'left',
                        height: '100',
                        fontSize: 8
                    },
                    header: {
                        fontSize: 9,
                        bold: 'true',
                        color: 'black',
                        alignment: 'center'
                    },
                    redTd: {
                        alignment: 'center',
                        color: 'black',
                        fontSize: 8,
                        fillColor: '#F2DEDE',
                    }
                }
            };

            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });
            } else {
                cratePdf(content);
            }
        }

        //земельний банк аналітика
        function landBankDashboardDetail(rep, params, func) {
            let serverData = $.extend(true, [], rep);
            if (params.sortColumn.reverse === false) {
                serverData.sort(function (a, b) {
                    var aa = eval("a." + (params.sortColumn.column))
                    var bb = eval("b." + (params.sortColumn.column))
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
                    var aa = eval("a." + (params.sortColumn.column))
                    var bb = eval("b." + (params.sortColumn.column))
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

            var table1_body = [];
            var content_detail = [];
            table1_body.push([
                {'text': $filter('translate')('right1.fio'), style: 'tableHeader'},
                {'text': $filter('translate')('share.number'), style: 'tableHeader'},
                {'text': $filter('translate')('square'), style: 'tableHeader'},
                {'text': $filter('translate')('contract.date.to'), style: 'tableHeader'},
                {'text': $filter('translate')('contract.supplementary.date.to'), style: 'tableHeader'},
                {'text': $filter('translate')('tenant'), style: 'tableHeader'},
                {'text': $filter('translate')('state'), style: 'tableHeader'},
            ]);

            for (let z = 0; z < serverData.length; z++) {
                let share = serverData[z];
                let right1_fio = ""
                for (let z = 0; z < share.right1FioList.length; z++) {
                    right1_fio = right1_fio + "\n" + share.right1FioList[z] ? share.right1FioList[z] : '';
                }

                let right2_fio = ''
                if (share.bankTenant) {
                    right2_fio = share.bankTenant.name;
                } else if (share.right2_fio) {
                    right2_fio = share.right2_fio;
                }
                let kadastr_table = []

                kadastr_table.push([{
                    'text': share.kadastr_number,
                    style: 'td',
                    border: [false, false, false, false]
                }])

                for (let h = 0; h < share.bankShareExchangeList.length; h++) {
                    let record = share.bankShareExchangeList[h]
                    kadastr_table.push([
                        {
                            'text': record.kadastr_number + " (" + $filter('number')(record.bankShareToSquare, 4) + ")",
                            style: 'tdSmallRight',
                            border: [false, false, false, false]
                        }]);
                }

                table1_body.push([
                    {'text': right1_fio, style: 'td'},
                    {
                        table: {
                            alignment: 'left',
                            margin: [0, 0, 0, 0],
                            widths: [115],
                            body: kadastr_table
                        },
                    },
                    {
                        'text': $filter('number')(params.scope.getShareSquare(share), 4),
                        style: 'td'
                    },
                    {'text': $filter('date')(share.contract_date_to, 'dd.MM.yyyy'), style: 'td'},
                    {'text': $filter('date')(share.contract_supplementary_date_to, 'dd.MM.yyyy'), style: 'td'},
                    {'text': right2_fio, style: 'td'},
                    {'text': params.scope.getContractStatus(share), style: 'td'},
                ]);
            }

            table1_body.push([
                {'text': $filter('translate')('total') + ":", colSpan: 2, style: 'tdBoldRight'},
                {},
                {
                    'text': $filter('number')(params.scope.countShareSquare(rep, params.scope.shareDetailFilter, {}) + params.scope.countRoadSquare(params.scope.bankGeozoneRoadList, params.scope.shareDetailFilter, true), 4),
                    style: 'tdBold'
                },
                {'text': ""},
                {'text': "", border: [true, true, false, true], style: 'td'},
                {'text': ""},
                {}
            ]);

            content_detail.push(
                {
                    'text': params.shareDetailTitle,
                    alignment: 'center',
                    bold: 'true',
                },
                {
                    'text': $filter('date')(rep.cluster_name),
                    alignment: 'center',
                    bold: 'true',
                    margin: [0, 0, 0, 20],
                },
                {
                    'text': $filter('date')(rep.oper_day, 'dd.MM.yyyy'),
                    alignment: 'center',
                    bold: 'true',
                    margin: [0, 0, 0, 20],
                },
                {
                    color: '#444',
                    margin: [0, 0, 0, 20],
                    table: {
                        widths: [100, 120, 40, 45, 45, 75, 70],
                        heights: 20,
                        body: table1_body,
                        alignment: 'center',
                        dontBreakRows: true
                    }
                }
            )

            var content = {
                info: {
                    title: 'Agrocontrol',
                    author: 'Agrocontrol',
                    subject: '',
                    keywords: '',
                },
                footer: {
                    columns: [
                        {'text': 'agrocontrol.net', alignment: 'right', margin: [10, 0, 20, 5]}
                    ]
                },
                pageMargins: [15, 10, 20, 20],
                extend: 'pdfHtml5',
                pageSize: 'A4',
                content: [
                    content_detail
                ],
                styles: {
                    tableHeader: {
                        alignment: 'center',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    tableHeaderLeft: {
                        alignment: 'left',
                        fillColor: '#A9A9A9',
                        color: 'black',
                        fontSize: 9,
                        bold: 'true'
                    },
                    td: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8
                    },
                    tdSmall: {
                        alignment: 'center',
                        fontSize: 7
                    },
                    tdBold: {
                        alignment: 'center',
                        height: '100',
                        fontSize: 8,
                        bold: 'true'
                    },
                    tdBoldRight: {
                        alignment: 'right',
                        height: '100',
                        fontSize: 8,
                        bold: 'true'
                    },
                    header: {
                        fontSize: 9,
                        bold: 'true',
                        color: 'black',
                        alignment: 'center'
                    },
                    tdRight: {
                        alignment: 'right',
                        color: 'black',
                        fontSize: 8,
                    },
                    tdLeft: {
                        alignment: 'left',
                        color: 'black',
                        fontSize: 8,
                    },
                    tdSmallRight: {
                        alignment: 'right',
                        color: 'black',
                        fontSize: 6,
                    }
                }
            };

            if (func) {
                const pdfDocGenerator = pdfMake.createPdf(content);
                pdfDocGenerator.getBase64((data) => {
                    func.call(this, data);
                });
            } else {
                cratePdf(content);
            }
        }

        function cratePdf(data) {
            pdfMake.tableLayouts = {
                exampleLayout: {
                    hLineWidth: function (i, node) {
                        if (i === 0 || i === node.table.body.length) {
                            return 0;
                        }
                        return (i === node.table.headerRows) ? 2 : 1;
                    },
                    vLineWidth: function (i) {
                        return 0;
                    },
                    hLineColor: function (i) {
                        return i === 1 ? 'black' : '#aaa';
                    },
                    paddingLeft: function (i) {
                        return i === 0 ? 0 : 8;
                    },
                    paddingRight: function (i, node) {
                        return (i === node.table.widths.length - 1) ? 0 : 8;
                    }
                }
            };
            console.time('pdf');
            pdfMake.createPdf(data).download("report.pdf");
            console.timeEnd('pdf');
        }


        return {
            variable: "This is public",
            getPdf: getPdf,
            getXls: getXls
        };
    }
    ])
