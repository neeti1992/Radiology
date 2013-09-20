/*
 * Copyright 2013, Raxa
 *
 * This file lists modalities
 */
Ext.define('com.rmc.projects.Radiology.store.Modality', {
    
    // --------------------------------------
    // Properties
    // --------------------------------------
    extend: 'Ext.data.ArrayStore',
    model : 'com.rmc.projects.Radiology.model.Modality',
    storeId: 'Modality',
    data: [
        ['CR'],
        ['MR'],
        ['CT'],
        ['NM'],
        ['US']
    ]
});
