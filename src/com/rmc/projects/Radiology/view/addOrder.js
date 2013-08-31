var orderType = new Ext.data.Store({
            model: com.rmc.projects.Radiology.model.OrderType,
            proxy: {
                type: 'memory',
                reader: {
                    type: 'array'
                }
            },
            data: com.rmc.projects.Radiology.data.DataSets.OrderType
        }),
modality = new Ext.data.Store({
            model: com.rmc.projects.Radiology.model.Modality,
            proxy: {
                type: 'memory',
                reader: {
                    type: 'array'
                }
            },
            data: com.rmc.projects.Radiology.data.DataSets.Modality
        }),
priority = new Ext.data.Store({
            model: com.rmc.projects.Radiology.model.Priority,
            proxy: {
                type: 'memory',
                reader: {
                    type: 'array'
                }
            },
            data: com.rmc.projects.Radiology.data.DataSets.Priority
        });

Ext.define('com.rmc.projects.Radiology.view.addOrder', {
    extend: 'Ext.form.Panel',
    requires: ['com.rmc.projects.Radiology.model.OrderType'],
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
            allowBlank: false
            }, {
            xtype: 'button',
            height: 20,
            width: 50,
            x: 200,
            y: ".5%",
            text: 'Find',
            handler: function () {
                // TO DO: rest call to search for patient
            }
            }, {
            xtype: 'combobox',
            fieldLabel: 'Order Type',
            id: 'addOrderType',
            allowBlank: false,
            typeAhead: true,
            x: "-1.4%",
            y: "8%",
            queryMode: 'local',
            forceSelection: true,
            listConfig: {
                            minWidth: null
                        },
            store: orderType,
            valueField: 'OrderType',
            displayField: 'OrderType'
          }, {
            xtype: 'combobox',
            fieldLabel: 'Modality',
            id: 'addModality',
             allowBlank: false,
             typeAhead: true,
             x: "-6.6%",
            y: "15%",
            typeAhead: true,
            queryMode: 'local',
            forceSelection: true,
            listConfig: {
                            minWidth: null
                        },
            store: modality,
            valueField: 'Modality',
            displayField: 'Modality'
          }, {
            xtype: 'textfield',
            width: "90%",
            fieldLabel: '',
            id: 'addOrderBodyScan',
            emptyText: 'Enter the Body Portion to be scanned',
             allowBlank: false,
             //x: 30,
            x: "10%",
            y: "22%"
          }, {
            xtype: 'combobox',
            fieldLabel: 'Priority',
            id: 'addOrderPriority',
             allowBlank: false,
             typeAhead: true,
             x: "-10%",
            y: "29%",
             typeAhead: true,
            queryMode: 'local',
            forceSelection: true,
            listConfig: {
                            minWidth: null
                        },
            store: priority,
            valueField: 'Priority',
            displayField: 'Priority'
          }, {
            xtype: 'datefield',
            width: 250,
            fieldLabel: 'Start Date',
            id: 'addOrderDate',
             allowBlank: false,
             labelAlign: 'left',
            x: "-3.7%",
            y: 175
            }, {
            xtype: 'datefield',
            width: 250,
            fieldLabel: 'Expiry Date',
            id: 'addOrderExpiryDate',
             allowBlank: false,
             labelAlign: 'left',
            x: "-1%",
            y: 207
            }, {
            xtype: 'textfield',
            width: "85%",
            blankText: '',
            id: 'addOrderRefPhyName',
            emptyText: 'Enter Referring Physician name',
             allowBlank: false,
             x: "10%",
            y: 242
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
             y: 276
            }, {
             xtype: 'textfield',
             width: "85%",
             blankText: '',
             id: 'addOrderReadPhyName',
             emptyText: 'Enter Reading Physician name',
              allowBlank: false,
              x: "10%",
             y: 308
            },{
            xtype: 'datefield',
            width: 250,
            fieldLabel: 'Scheduled Status',
            id: 'addOrderScheduledStatus',
             allowBlank: false,
             labelAlign: 'left',
            x: "-2%",
            y: 335
            }, {
            xtype: 'datefield',
            width: 250,
            fieldLabel: 'Performed Status',
            id: 'addOrderPerformedStatus',
             allowBlank: false,
             labelAlign: 'left',
            x: "-2%",
            y: 370
            }, {
            xtype: 'textfield',
            width: "90%",
            height: 60,
            blankText: '',
            id: 'addOrderAddInfo',
            emptyText: 'Enter any additional information',
             allowBlank: true,
             x: "10%",
            y: 415
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
