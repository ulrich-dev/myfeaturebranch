({
    updatelist: function(component, event, helper) {
        let updatedcar = event.getParam("cars");
        console.log("tableau1" +updatedcar);
        if(updatedcar.length > 0){
            component.set("v.car", updatedcar);
        }
       
      },
})