sap.ui.define([
    "sap/m/MessageToast",
    'sap/ui/core/mvc/Controller',
	'sap/ui/core/util/MockServer',
	'sap/ui/export/library',
	'sap/ui/export/Spreadsheet',
	'sap/ui/model/odata/v4/ODataModel'
], function(MessageToast,Controller,MockServer,exportLibrary,Spreadsheet,ODataModel) {
    'use strict';

    var EdmType = exportLibrary.EdmType;

    return {

        createColumnConfig: function() {
			var aCols = [];


			aCols.push({
				label: 'ID',
				type: EdmType.Number,
				property: 'ID',
				scale: 0
			});

			aCols.push({
                label:'Category',
				property: 'Category',
				type: EdmType.String
			});

			aCols.push({
                label:'Department',
				property: 'Department',
				type: EdmType.String
			});


			return aCols;
		},
    
        ExportMethodEXCEL: function() {
			var aCols, oRowBinding, oSettings, oSheet, oTable;

			if (!this.oTable) {
				this.oTable = this.byId('exportTable');
			}

			oTable = this.oTable;
            console.log(this);
			oRowBinding = oTable.getBinding('items');
			aCols = this.createColumnConfig();

			oSettings = {
				workbook: {
					columns: aCols,
					hierarchyLevel: 'Level'
				},
				dataSource: oRowBinding,
				fileName: 'Table export sample.xlsx',
				worker: false // We need to disable worker because we are using a MockServer as OData Service
			};

			oSheet = new Spreadsheet(oSettings);
			oSheet.build().finally(function() {
				oSheet.destroy();
			});
		},

            ExportMethod: async function(oEvent, aSelectedContexts) {
                //let {projectId, requirementIds} = common.parseContext(oEvent, aSelectedContexts );
    
                console.log("EXPORT METHOD SARMALEOOS");
				var csvResponse;
              jQuery.ajax({
                    url: '/service/TableExport/Export',
                    method: 'POST',
                    data:
                    {},
                    contentType: 'application/json',
					responseType:'arrayBuffer',
                    success: async function(data) {
                        console.log('Data from backend:', data);
						f2(data.value);
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

             },
           
		
    };
	async function f2(data){
		const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

		// Create a link element to trigger the download
		const url = window.URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = 'Products.xlsx';
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		window.URL.revokeObjectURL(url);
	}
	async function excelBuilder(data){

		const url = window.URL.createObjectURL(data);
		const a = document.createElement('a');
		a.href = url;
		a.download = 'Products.xlsx';
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		window.URL.revokeObjectURL(url);
		// Convert JSON to worksheet
	
	} 
	async function excelFileReader(data){
		 // Create a Blob from the array buffer
		 const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

		 // Create a link element to trigger the download
		 const url = window.URL.createObjectURL(blob);
		 const a = document.createElement('a');
		 a.href = url;
		 a.download = 'Products.xlsx';
		 document.body.appendChild(a);
		 a.click();
		 document.body.removeChild(a);
		 window.URL.revokeObjectURL(url);
	}
	async function exporter(response){
		const byteCharacters = response.value;
		
		const byteNumbers = new Array(byteCharacters.length);
		for (let i = 0; i < byteCharacters.length; i++) {
			byteNumbers[i] = byteCharacters.charCodeAt(i);
		}
		const byteArray = new Uint8Array(byteNumbers);
		const blob = new Blob([byteArray], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

		// Create a link element to trigger the download
		const url = window.URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = 'Products.xlsx';
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		window.URL.revokeObjectURL(url);
	}
});
