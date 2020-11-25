public with sharing class carController {
            @AuraEnabled
            public static List<Voiture__c> getvoiture() {
                System.debug('result: '+[SELECT Id, Name, Marque__c, Couleur__c, Nombre_de_Places__c, Matricule__c FROM Voiture__c]);
                return [SELECT Id, Name, Marque__c, Couleur__c, Nombre_de_Places__c, Matricule__c FROM Voiture__c];
            }

            @AuraEnabled
            public static Voiture__c saveCar(Voiture__c car) {
            // Perform isUpdateable() checking first, then
            upsert car;
            return car;
            }
            @AuraEnabled
            public static void DeleteCar(Voiture__c car) {
            // Perform isUpdateable() checking first, then
            // Voiture__c car =[SELECT Id, Name, Marque__c, Couleur__c, Nombre_de_Places__c, Matricule__c FROM Voiture__c WHERE Id=:carid];
                    try {

                        delete car;
                       
                    
                    } catch (DmlException e) {
                    
                        // Process exception here
                    
                    }
                   
            }

            @AuraEnabled
            public static List<Voiture__c> searchVoiture( String searchTerm ) {
                List<Voiture__c> car = new List<Voiture__c>();
                List<Voiture__c> carv = new List<Voiture__c>();
                if ( String.isNotBlank( searchTerm ) ) {
                    List<List<SObject>> searchResults = [
                        FIND :searchTerm
                        RETURNING Voiture__c(Id, Name, Marque__c, Couleur__c,Nombre_de_Places__c, Matricule__c ORDER BY Name LIMIT 10
                        )
                    ];
                    car = searchResults[0];
                }
                if(car.size() >0){
                return car;
                }else{
                    return carv;
                }
            }
           

    }