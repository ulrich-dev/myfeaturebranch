({
    createCar: function(component, car) {
        let action = component.get("c.saveCar");
        action.setParams({
            "car": car
        });
        action.setCallback(this, function(response){
            let state = response.getState();
            if (state === "SUCCESS") {
                let thecar = component.get("v.cars");
                thecar.push(response.getReturnValue());
                component.set("v.cars", thecar);
            }
        });
        $A.enqueueAction(action);
    },
    delCar: function(component, car) {
        let action = component.get("c.DeleteCar");
        action.setParams({
            "car": car
        });
        action.setCallback(this, function(response){
            let state = response.getState();
            if (state === "SUCCESS") {
                alert("Delete: " + car.Name);
             
            }
        });
        $A.enqueueAction(action);
    },
})