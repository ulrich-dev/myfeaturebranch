public class CustomLoginCtl {
    public String username{get;set;}
    public String password {get;set;}
        
        public pageReference doLogin()
    	{
        	return site.login(username,password,'/NeedSupport');    
        }
}