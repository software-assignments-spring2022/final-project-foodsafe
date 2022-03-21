import React from 'react';
import SelectionList from './selectionList'

/* Jeffery Wang
 * Material Design component is used
 * The transfer list of food allergies is based on the MD transfer list
 * see the page  https://mui.com/components/transfer-list/
 */

const set_acc=()=>{
    return (
    <a>
        <h2>Manage your allergy setting (by Jeffery)</h2>
        <SelectionList />
        <h1>     .</h1>
    </a>
    );
}
export default set_acc;