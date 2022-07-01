import React from "react";

function orderSearch(){
    return(
        <form className="order-search-container">
            <input type='radio' id='ibm-order' name='order-type' value='ibm'/>
            <label htmlFor='ibm-order'>IBM Order</label>
            <input type='radio' id='sap-order' name='order-type' value='sap'/>
            <label htmlFor='sap-order'>SAP Order</label> <br/> <br/>
            <label htmlFor='order-id'>Order Item</label>
            <input type='text' id='order-id' name='order-id' />
        </form>
    );
}

export default orderSearch;