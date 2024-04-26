sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'TableExport/TableView/test/integration/FirstJourney',
		'TableExport/TableView/test/integration/pages/Entity11List',
		'TableExport/TableView/test/integration/pages/Entity11ObjectPage'
    ],
    function(JourneyRunner, opaJourney, Entity11List, Entity11ObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('TableExport/TableView') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheEntity11List: Entity11List,
					onTheEntity11ObjectPage: Entity11ObjectPage
                }
            },
            opaJourney.run
        );
    }
);