sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'TableExport.TableView',
            componentId: 'Entity11List',
            contextPath: '/Entity11'
        },
        CustomPageDefinitions
    );
});