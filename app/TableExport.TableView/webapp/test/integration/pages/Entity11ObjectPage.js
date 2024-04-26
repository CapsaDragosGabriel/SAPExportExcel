sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'TableExport.TableView',
            componentId: 'Entity11ObjectPage',
            contextPath: '/Entity11'
        },
        CustomPageDefinitions
    );
});