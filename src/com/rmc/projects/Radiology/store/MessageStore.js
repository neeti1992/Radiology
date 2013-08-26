/*
 * Copyright 2013, Raxa
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 * 
 * This file lists 
 */
Ext.define('com.rmc.projects.Radiology.store.MessageStore', {
    
    // --------------------------------------
    // Properties
    // --------------------------------------
    extend: 'Ext.data.Store',
    model : 'com.rmc.projects.Radiology.model.MessageModel'
   /* fields: ['message'],
    data: [
        {message: 'Hello World From MessageStore!'}
    ],
    autoLoad : true,
    
    messageModel : null,
    
    // --------------------------------------
    // Properties
    // --------------------------------------
    loadModel : function () {
        
        this.messageModel = new this.model ();
    },
    getMessage : function () {
        
        console.log (this.data.items[0].data.message)
        return this.data.items[0].data.message;
    }
*/    
});
