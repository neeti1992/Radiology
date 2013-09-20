/*
 * Copyright 2013, Raxa
 * 
 * This file lists priorities
 */
Ext.define('com.rmc.projects.Radiology.store.Priority', {
    
    // --------------------------------------
    // Properties
    // --------------------------------------
    extend: 'Ext.data.ArrayStore',
    model : 'com.rmc.projects.Radiology.model.Priority',
    storeId: 'Priority',
    data: [
        ['STAT'],
        ['HIGH'],
        ['MEDIUM'],
        ['ROUTINE'],
        ['LOW']
    ]
});
