sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"nag/fe/travelprocessor/test/integration/pages/TravelList",
	"nag/fe/travelprocessor/test/integration/pages/TravelObjectPage",
	"nag/fe/travelprocessor/test/integration/pages/BookingObjectPage"
], function (JourneyRunner, TravelList, TravelObjectPage, BookingObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('nag/fe/travelprocessor') + '/test/flp.html#app-preview',
        pages: {
			onTheTravelList: TravelList,
			onTheTravelObjectPage: TravelObjectPage,
			onTheBookingObjectPage: BookingObjectPage
        },
        async: true
    });

    return runner;
});

