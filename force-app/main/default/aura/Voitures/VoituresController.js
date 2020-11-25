({
	clickCreate: function(component, event, helper) {
        var validcar = component.find('carform').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        // If we pass error checking, do some real work
        if(validcar){
            // Create the new car
            let newcar = component.get("v.newcar");
            console.log("Create car: " + JSON.stringify(newcar));
            VoituresHelper.createcar(component, newcar);
        }
	},

	
})