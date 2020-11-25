({
	 createItem: function(component, newItem) {
        let action = component.get("c.saveItem");
        action.setParams({
            "Item": newItem
        });
        action.setCallback(this, function(response){
            let state = response.getState();
            if (state === "SUCCESS") {
                let Items = component.get("v.items");
                Items.push(response.getReturnValue());
                component.set("v.items", Items);
            }
        });
        $A.enqueueAction(action);
    },
})