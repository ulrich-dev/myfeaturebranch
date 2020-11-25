global class UsersListViewsCreatorBatch implements Database.Batchable<String> {


    static String branchManager = '\'Branch Manager\'';
    String[] filialNames = new List<String>();
    String[] filialNamesNotExist = new List<String>();
    String[] ListViEwtExist = new List<String>();
    ListView[] listViews = new List<ListView>();
    AggregateResult [] results;


    public Iterable<String> start(Database.BatchableContext BC) {
        String query = 'select DefaultQueueId__c from user where profile.name=' + branchManager + ' group by DefaultQueueId__c limit 3';
        results = Database.query(query);
        for (AggregateResult ag : results) {
            filialNames.add((String) ag.get('DefaultQueueId__c'));
        }

        listViews = [SELECT Id,DeveloperName FROM ListView WHERE DeveloperName IN :filialNames];
        for (ListView lv : listViews) {
            ListViEwtExist.add((String) lv.DeveloperName);
        }

        for (String filialName : filialNames) {
            if (!ListViEwtExist.contains(filialName)) {
                filialNamesNotExist.add(filialName);
            }
        }

        return filialNamesNotExist;
    }

    public void execute(Database.BatchableContext info, List<String> filials) {
        // Do something really expensive with the string!
        System.debug('---------------exe' + filials);
        System.enqueueJob(new UsersListViewsCreatorQueue(filials));
    }


    public void finish(Database.BatchableContext info) {

    }


}
/*static String GROUP_NAME_PREFIX = 'x';
global list<String> filialNames = new list<String>();

 global Iterable<AggregateResult> start(Database.BatchableContext BC) {
     return new AggregateResultIterable();
 }

 global void execute(Database.BatchableContext BC, List<sObject> scope) {

     System.debug('----------' + scope[0].get('DefaultQueueId__c'));
         //call usersListViewsCreator
         usersListViewsCreator.createListView((string)scope[0].get('DefaultQueueId__c'));
         strMap.put((string)scope[0].get('DefaultQueueId__c'),new List<String>{
             GROUP_NAME_PREFIX+(string)scope[0].get('DefaultQueueId__c')
     });
        n=n+1;
       MyListOfMaps.add(strMap);
       System.debug(n+'----------' +MyListOfMaps);

 }

 global void finish(Database.BatchableContext BC) {


 }


 global class AggregateResultIterator Implements Iterator<AggregateResult> {

     AggregateResult [] results;
     Integer index;

     global AggregateResultIterator() {
         index = 0;
         String profilename = '\'Branch Manager\'';
         String query = 'select DefaultQueueId__c from user where profile.name=' + profilename + ' group by DefaultQueueId__c limit 2';
         results = Database.query(query);
         for(AggregateResultIterator ag:results)
         system.debug(results);
     }

     global boolean hasNext() {
         return results != null && !results.isEmpty() && index < results.size();
     }

     global AggregateResult next() {
         return results[index++];
     }
 }

 global class AggregateResultIterable implements Iterable<AggregateResult> {
     global Iterator<AggregateResult> Iterator() {
         return new AggregateResultIterator();
     }
 }
  public static final String profilename = '\'Branch Manager\'';
  public static final String query = 'select DefaultQueueId__c from user where profile.name='+profilename+' group by DefaultQueueId__c';

  global Database.QueryLocator start(Database.BatchableContext bc) {
     // System.debug('OK1');
      system.debug(query);
      return Database.getQueryLocator(query);
  }

  global void execute(Database.BatchableContext bc, List<user> filiales){

      for(user filiale : filiales){
          system.debug(filiale.DefaultQueueId__c);
          // usersListViewsCreator.start(filiale.DefaultQueueId__c);

      }

  }



  global void finish(Database.BatchableContext bc){

      System.debug(  ' records processed!.');
      //AsyncApexJob job = [SELECT Id, Status, NumberOfErrors, JobItemsProcessed,TotalJobItems, CreatedBy.Email FROM AsyncApexJob WHERE Id = :bc.getJobId()];
  }

}
*/