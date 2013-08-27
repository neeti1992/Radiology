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
        layout: 'hbox',
        border: false,
        margin: '20 20 20 20',
        items:[ 
       {
            xtype: 'textfield',
            id: 'addOrderPatientID',
            width: 240,
            blankText: '',
            emptyText: 'Enter the Patient Registration Number',
            //better to have percentages here rather than x/y -- we don't know screen resolution
            x: 10,
            y: 30
        }, {
            xtype: 'button',
            height: 20,
            width: 50,
            text: 'Find',
            x: 260,
            y: 30,
            handler: function () {
                // TO DO: rest call to search for patient
            }
        }]
    }, {
        xtype: 'combobox',
        fieldLabel: 'Order Type',
        id: 'addOrderType',
        x: 10,
        y: 60
    }, {
        xtype: 'combobox',
        fieldLabel: 'Procedure Requested',
        id: 'addOrderProcedure',
        x: 10,
        y: 90
    }, {
        xtype: 'textfield',
        width: 240,
        fieldLabel: '',
        id: 'addOrderBodyScan',
        emptyText: 'Enter the Body Portion to be scanned',
        x: 10,
        y: 120
    }, {
        xtype: 'combobox',
        fieldLabel: 'Priority',
        id: 'addOrderPriority',
        x: 10,
        y: 150
    }, {
        xtype: 'datefield',
        width: 130,
        fieldLabel: 'Preferrd Date',
        id: 'addOrderPreferredDate',
        labelAlign: 'top',
        x: 10,
        y: 180
    }, {
        xtype: 'textfield',
        width: 240,
        blankText: '',
        id: 'addOrderPhysicianName',
        emptyText: 'Enter the Physician name',
        x: 10,
        y: 210
    }, {
        xtype: 'button',
        height: 20,
        width: 50,
        text: 'Find',
        x: 260,
        y: 210,
        handler: function () {
            // TO DO: rest call to search for doctors
        }
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
            margin: '0 20 20 20'
        },
        {
            xtype: 'button',
            text: 'Submit',
            action: 'submitNewOrder',
            margin: '0 20 20 0'
        }
        ]
    }
    ]
});
