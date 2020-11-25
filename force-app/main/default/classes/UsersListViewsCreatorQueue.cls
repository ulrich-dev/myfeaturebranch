global class UsersListViewsCreatorQueue implements Queueable, Database.AllowsCallouts {

    private String[] tasks;
    public UsersListViewsCreatorQueue(List<String> filials) {
        tasks = filials;
    }
    global void execute(QueueableContext param1) {
        if (!(tasks == null || tasks.isEmpty())) {
            usersListViewsCreator.createListView(tasks.remove(0));
            System.enqueueJob(new UsersListViewsCreatorQueue(tasks));
        }
    }
}