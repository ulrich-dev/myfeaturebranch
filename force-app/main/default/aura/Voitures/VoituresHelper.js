({
    createExpense: function(component, car) {
        let thecar = component.get("v.cars");
        // Copy the expense to a new object
        // THIS IS A DISGUSTING, TEMPORARY HACK
        let newcar = JSON.parse(JSON.stringify(car));
        thecar.push(newcar);
        component.set("v.cars", thecar);
    }
})