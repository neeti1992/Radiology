Ext.define('com.rmc.projects.Radiology.view.worklistGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.worklistGrid',
    id: 'worklistGrid',   
    width: 780 - 2, // Total pixels - Border
    margin: '0 0 0 0',
    // store: 'WorklistStore',
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
        width: 150
    },
    {
        xtype: 'gridcolumn',
        text: 'Priority',
        dataIndex: 'priority',
        width: 70
    },
    {
        xtype: 'gridcolumn',
        text: 'Modality',
        dataIndex: 'modality',
        width: 90
    },
    {
        xtype: 'gridcolumn',
        text: 'Body Part',
        dataIndex: 'scan_body_part',
        width: 100
    },
    {
        xtype: 'gridcolumn',
        text: 'Start Date',
        dataIndex: 'start_date',
        width: 75
    },
    {
        xtype: 'gridcolumn',
        text: 'Expiry Date',
        dataIndex: 'expiry_date',
        width: 75,
    },
    {
        xtype: 'gridcolumn',
        text: 'Status',
        dataIndex: 'status',
        width: 65
    }],    
});
