public with sharing class ListView {
    public static void listView() {
        MetadataService.MetadataPort metadataservice = new MetadataService.MetadataPort();
        metadataservice.SessionHeader = new MetadataService.SessionHeader_element();
        metadataservice.SessionHeader.sessionId = UserInfo.getSessionId();
        MetadataService.ListView listView = new MetadataService.ListView();
        listView.fullName ='Queue.Group3';
        listView.label ='Group3';
        listView.filterScope ='Everything';
        listView.columns = new List<String> {'FULL_NAME' };
        listView.filters = new List<MetadataService.ListViewFilter>(); 

            MetadataService.ListViewFilter filter = new  MetadataService.ListViewFilter(); 
            filter.field ='CORE.PROFILE.NAME';
            filter.operation ='equals';
            filter.value ='System Administrator';
            listView.filters.add(filter);
            listView.sharedTo = new MetadataService.SharedTo();

            MetadataService.SharedTo sharedTo = new MetadataService.SharedTo();
            sharedTo.groups = new List<String>{'Queue_name5'};
            //sharedTo.queue = new List<String>{'Queue_name1'};
            //sharedTo.managers = new List<String>{'integration@00d3z000000fowneau.com'};
            listView.sharedTo = sharedTo;
            
        List<MetadataService.SaveResult> results =metadataservice.createMetadata(new MetadataService.Metadata[] { listView });
      
    }
}
