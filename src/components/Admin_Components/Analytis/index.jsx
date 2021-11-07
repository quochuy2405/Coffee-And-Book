import React from 'react';
import Admin_Item_Table from '../Admin_Item_Table';
import data from '../../../data';
function Analytis() {
    return (    
            <Admin_Item_Table List={data.Analytis_data}/>
    );
}

export default Analytis;