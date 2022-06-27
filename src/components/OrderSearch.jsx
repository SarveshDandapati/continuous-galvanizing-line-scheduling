import React from "react";

function orderSearch(){
    return(
        <form className="order-search-container">
            <input type='radio' id='ibm-order' name='order-type' value='ibm'/>
            <label for='ibm-order'>IBM Order</label>
            <input type='radio' id='sap-order' name='order-type' value='sap'/>
            <label for='sap-order'>SAP Order</label> <br/> <br/>
            <label for='order-id'>Order Item</label>
            <input type='text' id='order-id' name='order-id' />
        </form>
    );
}

export default orderSearch;