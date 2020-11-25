/**
 * An apex page controller that exposes the site login functionality
 */
global with sharing class CommunitiesLoginController {
    public String password{ get; set;}
    public String username { get; set;}
    
    global CommunitiesLoginController () {}
    
    // Code we will invoke on page load.
    global PageReference forwardToAuthPage() {
    	String startUrl = System.currentPageReference().getParameters().get('startURL');
    	String displayType = System.currentPageReference().getParameters().get('display');
        return Network.forwardToAuthPage(startUrl, displayType);
    }
    
    global PageReference forwardToCustomAuthPage()

 		{
 			return new PageReference( '/apex/CustomLoginPage');

 			/* 'StudentLogin' is the name of the VF Page for login that is created below */
 		}
    
    public PageReference loginUser()
							 {

 							return Site.login(username, password,'/NeedSupport');

 						/* 'NeedSupport'  is the Page to which we will be redirected after Login */

 							}
}