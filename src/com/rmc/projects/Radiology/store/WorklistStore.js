Ext.define('com.rmc.projects.Radiology.store.WorklistStore', {
    extend: 'Ext.data.Store',
    model: 'com.rmc.projects.Radiology.model.WorklistModel',
    storeId: 'WorklistStore',
    autoLoad: true,
    // autoSync: false,
    proxy: {
       /* 
        type: 'rest'
        url:                                          //after backend is done
        headers: MainController.getBasicAuthHeaders(),
        reader: {
            type:'json',
            //check if record has to be mentioned
            root: 'results'
        }*/
                     

                     // temporoary solution
                    type: 'ajax',
                    url: 'resources/data/worklist.xml',
                    // specify a XmlReader (coincides with the XML format of the returned data)
                    reader: {
                        type: 'xml',
                        // records will have a 'worklist' tag
                        record: 'worklist',
                        root: 'catalog'
                    }
    },
});
