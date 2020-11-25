({
  init : function(component, event, helper) {
      component.set('v.isModalOpen',true);
      var today = new Date();
     component.set('v.StartDate', today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate());
     component.set('v.endDate', today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate());

 
      
  },
   
    handleClick : function (cmp, event, helper) {
        alert("You clicked: " + event.getSource().get("v.label"));
    },
  zone : function (component, event, helper) {
        //alert("You clicked: " + event.getSource().get("v.value"));
         component.set("v.truthy",false);
         component.set("v.filiale",false);
        let val=component.get("v.value");
        if(val=="Zona"){
            component.set("v.truthy",true);
        }else  component.set("v.filiale",true);
    },
   closeModel : function (cmp, event, helper) {
       var workspaceAPI = cmp.find("workspace");
        workspaceAPI.getFocusedTabInfo().then(function(response) {
            var focusedTabId = response.tabId;
            workspaceAPI.closeTab({tabId: focusedTabId});
        })
        .catch(function(error) {
            console.log(error);
        });
      /* var homeEvt = $A.get("e.force:navigateToObjectHome");
    homeEvt.setParams({
      "scope": "Event"
    });
    homeEvt.fire();*/
      // cmp.set("v.isModalOpen", false);

    },
    DateValidation : function(component, event,helper){
      var today = new Date();        
      var dd = today.getDate();
      var mm = today.getMonth() + 1; //January is 0!
      var yyyy = today.getFullYear();

      if(dd < 10){
        dd = '0' + dd;
      } 

    if(mm < 10){
        mm = '0' + mm;
      }
  
      var todayFormattedDate = yyyy+'-'+mm+'-'+dd;
        if(component.get("v.StartDate") != '' && component.get("v.StartDate") < todayFormattedDate){
          component.set("v.dateValidationError" , true);
        }else
          component.set("v.dateValidationError" , false);
      
 
    },
endDateValidation : function(component, event,helper){
      let startDate = component.get("v.StartDate");
      let endDate =  component.get("v.endDate");
      
      if(endDate<startDate){
          component.set("v.dateValidationError" , true);
      }else 
        ;
},
 

})