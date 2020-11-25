import { LightningElement,track } from 'lwc';

export default class CalendarDetails extends LightningElement {
     @track option ='';
     @track isRadioSelected=false;
     @track isRadioSelected2=false;
     @track isModalOpen = true;
     @track frequency=false;
     @track value='';
     @track checkboxValue;
     @track isChecked=false;
     @track frequencyValue='';
     @track Daily=false;
     @track valPunto='Select...';
     @track Weekly=false;
     @track Monthly=false;
     @track Yearly=false;
     @track optionDaily='';
     @track valWeekly='';
     @track day=false;
     @track week=false;
     @track radioDayVal='';
     @track isDisabled=false;
     @track isDisabledDate=false;
     @track statTime='09:00';
     @track endTime='14:00';


     constructor() {
        super();
        debugger
      
    }

    closeModal() {
     // to close modal set isModalOpen tarck value as false
     this.isModalOpen = false;
    }


    submitDetails() {
     // to close modal set isModalOpen tarck value as false
     //Add your code to call apex method or do some processing
     this.isModalOpen = false;
    }


    get options() {
        return [
            { label: 'punto Vendita', value: 'punto_Vendita' },
            { label: 'Zone', value: 'zone' },
        ];
    }
    
    get optionsAssigned() {
        return [
            { label: 'New', value: 'new' },
            { label: 'In Progress', value: 'inProgress' },
            { label: 'Finished', value: 'finished' },
        ];
    }

    handleChangeAssigned(event) {
        this.value = event.detail.value;
    }

    get optionsPunto() {
        return [
            { label: 'New', value: 'new' },
            { label: 'In Progress', value: 'inProgress' },
            { label: 'Finished', value: 'finished' },
        ];
    }

    handleChangePunto(event) {
        this.valPunto = event.detail.value;
    }
    //*************
    get optionsZone() {
        return [
            { label: 'New', value: 'new' },
            { label: 'In Progress', value: 'inProgress' },
            { label: 'Finished', value: 'finished' },
        ];
    }

    handleChangeZone(event) {
        this.value = event.detail.value;
    }
    get optionsSubject() {
        return [
            { label: 'New', value: 'new' },
            { label: 'In Progress', value: 'inProgress' },
            { label: 'Finished', value: 'finished' },
        ];
    }

    handleChangeSubject(event) {
        this.value = event.detail.value;
    }

    isRadioSelect(event) {
        this.option=event.target.value;
        if(this.option =='punto_Vendita'){
            this.isRadioSelected2=false;
            this.isRadioSelected=true;
        }else if(this.option=='zone'){
           this.isRadioSelected=false;
           this.isRadioSelected2=true;

        }
    }
    get optionsRadio() {
        return [
            { label: 'Daily', value: 'Daily' },
            { label: 'Weekly', value: 'Weekly' },
            { label: 'Monthly', value: 'Monthly' },
            { label: 'Yearly', value: 'Yearly' },
        ];
    }
    get optionsRadioWeek() {
        return [
            { label: 'M', value: 'monday' },
            { label: 'Tu', value: 'tuesday' },
            { label: 'W', value: 'wednesday' },
            { label: 'Th', value: 'thursday' },
            { label: 'F', value: 'friday' },
            { label: 'Sa', value: 'saturday' },
            { label: 'Su', value: 'sunday' },
        ];
    }

    handleChangeCheckbox(event){
        this.checkboxValue = event.detail.checked;

        if(this.checkboxValue==true){
            this.frequency=true;
        }else{
            this.frequency=false;
        }
    }

    get optionsDaily(){
        return [
            { label: 'Every Day', value: 'every_Day' },
            { label: 'Every Other Day', value: 'Every_other_day' },
            { label: 'Every...', value: 'every' },
        ];
    }

    get optionsWeekly(){
        return [
            { label: 'Every Week', value: 'every_week' },
            { label: 'Every Other Week', value: 'Every_other_Week' },
            { label: 'Every...', value: 'every' },
        ];
    }

    get optionsSeries() {
        return [
            { label: 'None', value: 'none' },
            { label: 'After', value: 'after' },
            { label: 'On', value: 'on' },
        ];
    }
    get optionsDay(){
        return [...Array(30).keys()].reduce((acc,e)=>{
            return [...acc,{label:`${e+1}`,value:`${e+1}`}]
        },[]);
    }
  
    get optionsWeek(){
        return [...Array(7).keys()].reduce((acc,e)=>{
            return [...acc,{label:`${e+1}`,value:`${e+1}`}]
        },[]);
    }

    get optionsTimes(){
        return [  { label: '09:00', value: '09:00' },
                  { label: '14:00', value: '14:00' },
    ]
    }

    handleChangeDaily(event){
        this.optionDaily=event.target.value;
       if(this.optionDaily=='every'){
           this.day=true;
       }
    }
 
    handleChangeWeekly(event){
        this.valWeekly=event.target.value;
       if(this.valWeekly=='every'){
           this.week=true;
       }
    }

    radioValue(event){
        this.radioDayVal=event.target.value;
        if(this.radioDayVal=='none'){
            this.isDisabled=true;
            this.isDisabledDate=true;
        }else if(this.radioDayVal=='after')
        {
            this.isDisabled=false;
            this.isDisabledDate=true;
        }else{ 
            this.isDisabled=true;
            this.isDisabledDate=false;
        }
    }

    handleChangeFrequency(event){
        this.frequencyValue = event.detail.value;
        if(this.frequencyValue=='Daily'){
            this.Monthly=false;
            this.Weekly=false;
            this.Yearly=false;
            this.Daily=true;
        }else if(this.frequencyValue=='Weekly'){
            this.Daily=false;
            this.Monthly=false;
            this.Yearly=false;
            this.Weekly=true;
        }else if(this.frequencyValue=='Monthly'){
            this.Daily=false;
            this.Monthly=true;
            this.Yearly=false;
            this.Weekly=false;
        }else{
            this.Daily=false;
            this.Monthly=false;
            this.Yearly=true;
            this.Weekly=false;
        }
    }

}