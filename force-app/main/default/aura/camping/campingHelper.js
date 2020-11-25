({
	createCamping: function(component, camping) {
        let theItems = component.get("v.Items");
        // Copy the expense to a new object
        // THIS IS A DISGUSTING, TEMPORARY HACK
        let newItem = JSON.parse(JSON.stringify(camping));
        theItems.push(newItem);
        component.set("v.Items", theItems);
    }
})