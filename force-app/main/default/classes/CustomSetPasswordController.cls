/**
 * An apex page controller that exposes the site forgot password functionality
 */
public with sharing class CustomSetPasswordController{
    
    public String subject {get;set;}
    public Integer expires {get;set;}
    public boolean validToken {get;set;}
    public String message {get;set;}
    public String password {get; set {password = value == null ? value : value.trim(); } }
    public String confirmPassword {get; set { confirmPassword = value == null ? value : value.trim(); } }
    
    private boolean isValidPassword() {
        return password == confirmPassword;
    }

    public CustomSetPasswordController() {
        this.validToken = false;
        String token = System.currentPageReference().getParameters().get('token');
        String[] parts = token.split('\\.');
        Blob key = EncodingUtil.base64Decode('YOUR SECRET BASE64 ENCODED KEY');
        Blob signature = Crypto.generateMac('hmacSHA1',Blob.valueof(parts[0]),key);
        String calculatedSignature = base64URLencode(signature);
        if ( calculatedSignature.equals(parts[1]) ) {
            String claim = EncodingUtil.base64Decode(parts[0]).toString();
            JSONParser parser = JSON.createParser(claim);
            while (parser.nextToken() != null) {
                if ((parser.getCurrentToken() == JSONToken.FIELD_NAME)){
                    String fieldName = parser.getText();
                    parser.nextToken();
                    if(fieldName == 'sub') {
                        this.subject = parser.getText();
                    } else if(fieldName == 'exp'){
                        this.expires = parser.getIntegerValue();
                    }
                }
                    
                System.debug(this.subject);
                    
                System.debug(this.expires);
            }
            
            Long rightNow = (dateTime.now().getTime()/1000)+1;
                            System.debug(rightNow);
            if (expires > rightNow) this.validToken = true;

        }
        
    }
    
    public PageReference resetPassword(){
        
        boolean success = true;
        PageReference pr = null;
        
        if (isValidPassword()) {
            String constructedUsername = subject + '@0dbo0000000tn4o.force.com';
            try {
                List<User> users = [select id from user where username = :constructedUsername limit 1];
                if (users.size() == 1) System.setPassword(users.get(0).id, password);
                pr = Site.login(subject, password, '/');
                pr.setRedirect(true);
            } catch (Exception e) {
                success = false;   
                message = e.getMessage();
            }
            
        }       
        
        if (success) {              
            return pr;
        }
        return null;
    }
        
        
    
    public static String base64URLencode(Blob input){ 
        String output = encodingUtil.base64Encode(input);
        output = output.replace('+', '-');
        output = output.replace('/', '_');
        while ( output.endsWith('=')){
            output = output.subString(0,output.length()-1);
        }
        return output;
    }
    
    
    
    
}
