/*
 * Copyright 2013, Raxa
 * 
 * This file lists scheduled status
 */
Ext.define('com.rmc.projects.Radiology.store.ScheduledStatus', {
    
    // --------------------------------------
    // Properties
    // --------------------------------------
    extend: 'Ext.data.ArrayStore',
    model : 'com.rmc.projects.Radiology.model.ScheduledStatus',
    storeId: 'ScheduledStatus',
    data: [
        ['SCHEDULED'],
        ['ARRIVED'],
        ['READY'],
        ['STARTED'],
        ['DEPARTED']
    ]
});
