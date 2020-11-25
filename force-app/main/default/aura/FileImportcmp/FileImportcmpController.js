({  
    save : function(component, event, helper) {

      component.set('v.columns', [
        {label: 'Opportunity name', fieldName: 'opportunityName', type: 'text'},
        {label: 'Account name', fieldName: 'accountName', type: 'text'},
        {label: 'Close date', fieldName: 'closeDate', type: 'date'},
        {label: 'Confidence', fieldName: 'confidence', type: 'percentage'},
        {label: 'Amount', fieldName: 'amount', type: 'currency', typeAttributes: { currencyCode: 'EUR', maximumSignificantDigits: 5}},
        {label: 'Contact Email', fieldName: 'contact', type: 'email'},
        {label: 'Contact Phone', fieldName: 'phone', type: 'phone'},
        {label: 'Website', fieldName: 'website', type: 'url', typeAttributes: { target: '_self'}},
        {label: 'Address', fieldName: 'address', type: 'location'}
     ]);

     var fetchData = {
      opportunityName: "company.companyName",
      accountName : "name.findName",
      closeDate : "date.future",
      amount : "finance.amount",
      contact: "internet.email",
      phone : "phone.phoneNumber",
      website : "internet.url",
      status : {type : "helpers.randomize", values : [ 'Pending', 'Approved', 'Complete', 'Closed' ] },
      actionLabel : {type : "helpers.randomize", values : [ 'Approve', 'Complete', 'Close', 'Closed' ]},
      confidenceDeltaIcon : {type : "helpers.randomize", values : [ 'utility:up', 'utility:down' ]}
  };

  helper.fetchData(cmp, fetchData, 10);
        
          component.set('v.spinner',true);  
    
         var fileInput = component.find("file").getElement();
    	 var file = fileInput.files[0];
   
        if (file.size > 750000) {
            alert('File size cannot exceed ' + this.MAX_FILE_SIZE + ' bytes.\n' +
    		  'Selected file size: ' + file.size);
    	    return;
        }
    
               var reader  = new FileReader();
                   reader.onload = function(e) {
                           var fileContent = e.target.result;
                           var base64 = 'base64,';
                           var dataStart = fileContent.indexOf(base64) + base64.length;
                       		console.log(fileContent);
                           fileContent = fileContent.substring(dataStart);
                           console.log(dataStart);
                       	   console.log(fileContent);
                           helper.uploadFile(file, fileContent, component);
               			   }
        				   reader.readAsDataURL(file); 
        
        
    },
    

    
})