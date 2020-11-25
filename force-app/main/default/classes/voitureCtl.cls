public with sharing class voitureCtl {
    
    @AuraEnabled
    public static List<Voiture__c> getvoiture() {
        // Perform isAccessible() checking first, then
        return [SELECT Marque__c, Couleur__c, Nombre_de_places__c, Matricule__c FROM Voiture__c];
    }

    @AuraEnabled
    public static void setvoiture(Voiture__c car) {
        // Perform isUpdateable() checking first, then
        upsert car;
       
    }
}