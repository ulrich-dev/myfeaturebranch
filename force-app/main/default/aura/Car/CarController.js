({

    doInit1: function(component, event, helper) {
        let upcar = event.getParam("thecars");
       
        console.log(upcar);
        if(upcar.length > 0){
           component.set("v.cars", upcar);
        }
       
      },

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
           
            helper.createCar(component, newcar);
        }
    },
    doInit: function(component, event, helper) {

        // Create the action
        let action = component.get("c.getvoiture");
        // Add callback behavior for when response is received
        action.setCallback(this, function(response) {
            let state = response.getState();
            if (state === "SUCCESS") {
                
                component.set("v.cars",response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        // Send action off to be executed
        $A.enqueueAction(action);
    },
               
      handleUpdatecar: function(component, event, helper) {
      let updatedcar = event.getParam("car");
      component.set("v.thecar", updatedcar);

      let action = component.get("c.getvoiture");
      // Add callback behavior for when response is received
      action.setCallback(this, function(response) {
          let state = response.getState();
          if (state === "SUCCESS") {
              debugger
              component.set("v.cars",response.getReturnValue());
          }
          else {
              console.log("Failed with state: " + state);
          }
      });
      // Send action off to be executed
      $A.enqueueAction(action);

    },
    Deletecar: function(component, event, helper) {
        let updatedcar = event.getParam("car"); 
        helper.delCar(component, updatedcar);

        let action = component.get("c.getvoiture");
        // Add callback behavior for when response is received
        action.setCallback(this, function(response) {
            let state = response.getState();
            if (state === "SUCCESS") {
                debugger
                component.set("v.cars",response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        // Send action off to be executed
        $A.enqueueAction(action);

        
      },

     
     
        

    

    
})