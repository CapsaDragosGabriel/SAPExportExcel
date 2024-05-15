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
                
    
                const resp=await this.editFlow.invokeAction('TableExport.EntityContainer/Export',{
                    model:this.getModel()
                });
                
                console.log(resp);

             }
           

    };
});
