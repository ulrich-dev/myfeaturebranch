({
    uploadFile : function(file, fileContent, component) {
        var action = component.get("c.saveTheFile"); 

        action.setParams({
            fileName: file.name,
            base64Data: encodeURIComponent(fileContent)
        });

        $A.enqueueAction(action);
        component.set('v.spinner',false);
         
    },
    fetchData: function (component, fetchData, numberOfRecords) {
        var dataPromise,
            latitude,
            longitude,
            fakerLib = this.mockdataLibrary.getFakerLib();

        fetchData.address = {type : function () {
            return {
                latitude : fakerLib.address.latitude(),
                longitude : fakerLib.address.longitude()
            };
        }};

        fetchData.confidence =  { type : function () {
            return Math.round(Math.random(100) * 100) + "%";
        }};

        dataPromise = this.mockdataLibrary.lightningMockDataFaker(fetchData, numberOfRecords);
        dataPromise.then(function(results) {
            component.set('v.data', results);
        });
    }
})