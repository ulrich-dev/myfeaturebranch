public class lwcCSVUploaderController {

    @AuraEnabled
    public static List<Account> saveFile(String base64Data) {
            System.debug(base64Data);
        String data = JSON.deserializeUntyped(base64Data).toString();
            System.debug(data);



        return [Select Id, Name, Site, AccountSource From Account];
    }

}