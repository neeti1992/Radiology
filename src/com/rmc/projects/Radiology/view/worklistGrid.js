Ext.define('com.rmc.projects.Radiology.view.worklistGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.worklistGrid',
    id: 'worklistGrid',   
    width: 780 - 2, // Total pixels - Border
    margin: '0 0 0 0',
    store: 'WorklistStore',
    features: [Ext.create('Ext.grid.feature.Grouping',{
        startCollapsed: true,
    })
    ],
    columns: [
    {
        xtype: 'rownumberer'
    },
    {
        xtype: 'gridcolumn',
        text: 'Name of Patient',
        dataIndex: 'patientName',
        width: 120
    },
    {
        xtype: 'gridcolumn',
        text: 'Patient ID',
        dataIndex: 'patientID',
        width: 60
    },
    {
        xtype: 'gridcolumn',
        text: 'Procedure',
        dataIndex: 'procedure',
        width: 60
    },
    {
        xtype: 'gridcolumn',
        text: 'Body Part',
        dataIndex: 'scan_body_part',
        width: 60
    },
    {
        xtype: 'gridcolumn',
        text: 'Study Date',
        dataIndex: 'start_date',
        width: 60,
    },
    {
        xtype: 'gridcolumn',
        text: 'Status',
        dataIndex: 'status',
        width: 60
    }],    
});