trigger MaintenanceRequest on Case (before update, after update) {

    if(trigger.isUpdate && trigger.isAfter)
    MaintenanceRequestHelper.updateWorkOrders(Trigger.New);
    }