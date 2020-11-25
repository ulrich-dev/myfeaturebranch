({
    // code in the helper is reusable by both
    // the controller.js and helper.js files
    handleSearch: function( component, searchTerm ) {
        var action = component.get( "c.searchVoiture" );
        action.setParams({
            searchTerm: searchTerm
        });
        action.setCallback( this, function( response ) {
            var event = component.getEvent("thecarss" );
            event.setParams({
                "thecars":response.getReturnValue()
            });
            event.fire();
           
        });
        $A.enqueueAction( action );
        
    }
})