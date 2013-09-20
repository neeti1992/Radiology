/*
 * Copyright 2013, Raxa
 * 
 * This file lists modalities
 */
Ext.define('com.rmc.projects.Radiology.store.PerformedStatus', {
    
    // --------------------------------------
    // Properties
    // --------------------------------------
    extend: 'Ext.data.ArrayStore',
    model : 'com.rmc.projects.Radiology.model.PerformedStatus',
    storeId: 'PerformedStatus',
    data: [
        ['COMPLETED'],
        ['IN_PROGRESS'],
        ['DISCONTINUED']
    ]
});
