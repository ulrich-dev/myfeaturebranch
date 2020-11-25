public class createGroup {

    public static void group( List<id> listId){
        List<GroupMember> listGroupMember =new List<GroupMember>(); 
        string groupId;
        list<Group> group1 = [select id,name from Group where Name='Queue name' and type='Queue'];

            if( group1.size()>0){
                groupId=group1[0].id;
            }else{
                Group g= new Group(Type='Queue',Name='Queue name');
                insert g;
                groupId=g.id;
            }


        for(Id uId:listId){ 
         GroupMember gm= new GroupMember(); 
	            gm.GroupId=group1[0].id;
	            gm.UserOrGroupId =uId;
            	listGroupMember.add(gm);
            }

        insert listGroupMember;


    }

}