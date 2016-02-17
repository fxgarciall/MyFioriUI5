jQuery.sap.require("sap.ui.demo.myFiori.util.Formatter");
jQuery.sap.require("sap.m.MessageBox");
jQuery.sap.require("sap.m.MessageToast");

sap.ui.controller("sap.ui.demo.myFiori.view.Detail", {

	handleNavButtonPress : function (evt) {
		this.nav.back("Master");
	},
	
	onBeforeRendering : function () {
		this.byId("SupplierForm").bindElement("BusinessPartner");
	},
	
	handleApprove : function (evt) {
		//Show Confirmation Dialog
		var bundle = this.getView().getModel("i18n").getResourceBundle();
		sap.m.MessageBox.confirm(
				bundle.getText("ApproveDialogMsg"),
				
				function (oAction){
					if(sap.m.MessageBox.Action.OK === oAction){
						//Notify User
						var successMsg = bundle.getText("ApproveDialogSuccessMsg");
						sap.m.MessageToast.show(successMsg);
						
						//TODO: Call service and delete from Model
						
						
					}
				},
				
				bundle.getText("ApproveDialogTitle")
		);
	},
	
	handleLineItemPress : function (evt) {
		var context = evt.getSource().getBindingContext();
		this.nav.to("LineItem",context);
	}
	
});