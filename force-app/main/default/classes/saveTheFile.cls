public class saveTheFile {
     
    @AuraEnabled
    public static Integer saveTheFile(String fileName, String base64Data) { 
        		
        base64Data = EncodingUtil.urlDecode(base64Data, 'UTF-8');
        
                  system.debug(base64Data); 
              
        return 1;
    }

}