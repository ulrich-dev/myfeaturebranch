global without sharing class SetPassword {
    public String password { get; set; }
    public String password2 { get; set; }
    public String username { get; set; }
    User user = new User();

    global PageReference forwardToAuthPage() {
        String startUrl = System.currentPageReference().getParameters().get('startURL');    
        String displayType = System.currentPageReference().getParameters().get('display');
        return Network.forwardToAuthPage(startUrl, displayType);
    }

    public PageReference save() {

    if(password == password2)
    {

        user = Database.Query('SELECT Id,HavePassword__c, Name FROM User WHERE UserName  =: username LIMIT 1');

        if(user.HavePassword__c != 0){

         
            return new PageReference( '/apex/StudentLogin');

        }else{
           
            System.setPassword(user.Id, password);
            user.HavePassword__c =1;
            update user;
            return Site.login(username, password,'/NeedSupport');
            
        }

    }else{
      
        return new PageReference( '/apex/StudentLogin');
    }

 }

}
