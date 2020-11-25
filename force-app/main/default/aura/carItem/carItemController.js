({
    getId: function(component, event, helper) {
      let cars = component.get("v.car");
      let updateEvent = component.getEvent("Idrecord");
      updateEvent.setParams({"car": cars });
      updateEvent.fire();
  },
  Deletecar: function(component, event,helper){
    let cars = component.get("v.car");
    let updateEvent = component.getEvent("delcar");
    updateEvent.setParams({"car": cars });
    updateEvent.fire();

  }
})