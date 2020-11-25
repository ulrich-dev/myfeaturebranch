({

    clickCreate: function(component, event, helper) {
        let validcamping = component.find('campingform').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        // If we pass error checking, do some real work
        if(validcamping){
            // Create the new expense
            let newCamping = component.get("v.newItem");
            console.log("Create camping: " + JSON.stringify(newCamping));
            helper.createCamping(component, newCamping);
        }
    }
})