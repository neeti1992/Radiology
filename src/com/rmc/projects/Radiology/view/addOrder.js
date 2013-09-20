
Ext.define('com.rmc.projects.Radiology.view.addOrder', {
    extend: 'Ext.form.Panel',
    alias: 'widget.addOrder',
    id: 'addOrder',
    autoScroll: true,
    title: 'Create Radiology Order',
    layout: {
        type: 'vbox',
        //will stretch to entire screen....
       //align: 'stretch'
    },
    items: [
    {
        layout: 'absolute',
        border: false,
        margin: '20 20 20 20',
        items:[ 
           {
            xtype: 'textfield',
            id: 'addOrderPatientName',
            width: "66%",
            blankText: '',
            emptyText: 'Enter the Patient Name',
            //better to have percentages here rather than x/y -- we don't know screen resolution
            x: "10%",
            y: ".5%",
            allowBlank: false,
            name: 'PatientName'

            }, {
           /* xtype: 'button',
            height: 20,
            width: 50,
            x: 200,
            y: ".5%",
            text: 'Find',
            handler: function () {
                // TO DO: rest call to search for patient
            }
            }, {*/

            xtype: 'combobox',
            fieldLabel: 'Scheduled Status',
            id: 'addOrderScheduledStatus',
            allowBlank: false,
            typeAhead: true,
            x: "-1.7%",
            y: "8%",
            queryMode: 'local',
            forceSelection: true,
            listConfig: {
                            minWidth: null
                        },
            store: 'com.rmc.projects.Radiology.store.ScheduledStatus',
            valueField: 'ScheduledStatus',
            displayField: 'ScheduledStatus',
            name: 'ScheduledStatus'
          }, {

            xtype: 'combobox',
            fieldLabel: 'Modality',
            id: 'addOrderModality',
             allowBlank: false,
             typeAhead: true,
             x: "-6.6%",
            y: "17%",
            typeAhead: true,
            queryMode: 'local',
            forceSelection: true,
            listConfig: {
                            minWidth: null
                        },
            store: 'com.rmc.projects.Radiology.store.Modality',
            valueField: 'Modality',
            displayField: 'Modality',
            name: 'Modality'
          }, {

            xtype: 'textfield',
            width: "90%",
            fieldLabel: '',
            id: 'addOrderBodyScan',
            emptyText: 'Enter the Body Portion to be scanned',
             allowBlank: false,
             //x: 30,
            x: "10%",
            y: "24%",
            name: 'BodyScan'
          }, {

            xtype: 'combobox',
            fieldLabel: 'Priority',
            id: 'addOrderPriority',
             allowBlank: false,
             typeAhead: true,
             x: "-10%",
            y: "31%",
             typeAhead: true,
            queryMode: 'local',
            forceSelection: true,
            listConfig: {
                            minWidth: null
                        },
            store: 'com.rmc.projects.Radiology.store.Priority',
            valueField: 'Priority',
            displayField: 'Priority',
            name: 'Priority'
          }, {

            xtype: 'datefield',
            width: 250,
            fieldLabel: 'Start Date',
            id: 'addOrderDate',
             allowBlank: false,
             labelAlign: 'left',
            x: "-3.7%",
            y: 175,
            name: 'StartDate'
            }, {

            xtype: 'datefield',
            width: 250,
            fieldLabel: 'Expiry Date',
            id: 'addOrderExpiryDate',
             allowBlank: false,
             labelAlign: 'left',
            x: "-1%",
            y: 207,
            name: 'ExpiryDate'
            }, {
            
            xtype: 'textfield',
            width: "85%",
            blankText: '',
            id: 'addOrderRefPhyName',
            emptyText: 'Enter Referring Physician name',
             allowBlank: false,
             x: "10%",
            y: 242,
            name: 'RefPhyName'
            },    
            /*{
            xtype: 'button',
            height: 20,
            width: 50,
            text: 'Find',
            x: "81%",
            y: 245,
            handler: function () {
                // TO DO: rest call to search for doctors
            }
            }*/
            {
            
             xtype: 'textfield',
             width: "85%",
             blankText: '',
             id: 'addOrderPerPhyName',
             emptyText: 'Enter Performing Physician name',
              allowBlank: false,
              x: "10%",
             y: 276,
            name: 'PerPhyName'
            }, {
            
             xtype: 'textfield',
             width: "85%",
             blankText: '',
             id: 'addOrderReadPhyName',
             emptyText: 'Enter Reading Physician name',
              allowBlank: false,
              x: "10%",
             y: 308,
             name: 'ReadPhyName'
             }, {

            xtype: 'combobox',
            fieldLabel: 'Performed Status',
            id: 'addOrderPerformedStatus',
            name: 'PerformedStatus',
            allowBlank: false,
            typeAhead: true,
            x: "-1.7%",
            y: 335,
            queryMode: 'local',
            forceSelection: true,
            listConfig: {
                            minWidth: null
                        },
            store: 'com.rmc.projects.Radiology.store.PerformedStatus',
            valueField: 'PerformedStatus',
            displayField: 'PerformedStatus'
            }, {
            
            xtype: 'textfield',
            width: "90%",
            height: 60,
            blankText: '',
            id: 'addOrderAddInfo',
            emptyText: 'Enter any additional information',
             allowBlank: true,
             x: "10%",
            y: 380,
            name: 'AddInfo'
            }
        ]
     },
    
     {
        layout: {
            type: 'hbox',
            pack: 'end'
        },
        
        border: false,
        items:[{
            xtype: 'button',
            text: 'Cancel',
            action: 'cancelNewOrder',
            margin: '0 20 20 40',
            },{
            xtype: 'button',
            text: 'Submit',
            //disabled: true,
            //formBind: true,
            action: 'submitNewOrder',
            margin: '0 20 20 15',
            },{
            xtype: 'button',
            text: 'Reset',
            action: 'resetNewOrder',
            margin: '0 20 20 15',
        }]
     }
    ]
    
});
