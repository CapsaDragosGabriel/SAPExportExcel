sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
    
            ExportMethod: async function(oEvent, aSelectedContexts) {
                //let {projectId, requirementIds} = common.parseContext(oEvent, aSelectedContexts );
    
                console.log("EXPORT M   ETHOD SARMALEOOS");
                console.log(oEvent);
                console.log(aSelectedContexts);
                
                console.log(this);
                jQuery.ajax({
                    url: '/service/TableExport/Export',
                    method: 'POST',
                    data:
                    {},
                    contentType: 'application/json',
                    success: function(data) {
                        console.log('Data from backend:', data);
                    },
                    error: function(error) {
                        console.error('Error fetching data:', error);
                    }
                });

    /*
                const resp=await this.editFlow.invokeAction('TableExport.EntityContainer/Export',{
                    model:this.getModel()
                });
                */
                //console.log(resp);

             }
           

    };
});
