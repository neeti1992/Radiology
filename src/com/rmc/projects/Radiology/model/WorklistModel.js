Ext.define('com.rmc.projects.Radiology.model.WorklistModel', {
    extend: 'Ext.data.Model',
    fields: [{   //name, type, model, mapping
        name: 'id',
        //shouldn't go with post call's body so we make the persist property false 
        persist: false 
    }, {
        name: 'patientName',
        type: 'string'
    }, {
        name: 'priority',
        type: 'string'
    }, {
        name: 'modality',
        type: 'string'
    },{
        name: 'scan_body_part',
        type: 'string'
    }, {
        name: 'start_date',
        type: 'date',
        dateFormat: 'm/d/Y'
    }, {
        name: 'expiry_date',
        type: 'date',
        dateFormat: 'm/d/Y'
    }, {
        name: 'status',
        type: 'string'
    }
]
});
