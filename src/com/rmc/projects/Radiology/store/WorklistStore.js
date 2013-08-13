Ext.define('com.rmc.projects.Radiology.store.WorklistStore', {
    extend: 'Ext.data.Store',
    model: 'com.rmc.projects.Radiology.model.WorklistModel',
    storeId: 'WorklistStore',
    autoLoad: true,
    autoSync: false,
    proxy: {
        type: 'ajax',
       /* url:                                          //after backend is done
        headers: MainController.getBasicAuthHeaders(),
        reader: {
            type:'json',
            root: 'results'
        }*/
                     // temporoary solution
                    // load remote data using HTTP
                    url: 'resources/data/worklist.xml',
                    // specify a XmlReader (coincides with the XML format of the returned data)
                    reader: {
                        type: 'xml',
                        // records will have a 'worklist' tag
                        record: 'worklist'
                    }
    },
});
