import React from "react";
import OrderList from "./OrderList";
import Payment from "./Payment";

function CheckoutTemp() {
  return (
    <div className="flex">
      <div className="w-[40%] flex justify-end mt-5">
        <div>
          <OrderList />
          <div style={{textAlign:'right', marginTop:'20px'}}>
            <h1 style={{ fontWeight: "bold" }}>Grand Total</h1>
            <h1 style={{ fontWeight: "bold", color: "red" }}>$25.99</h1>
          </div>
        </div>
      </div>
      <div className="w-[50%]">
        <Payment />
      </div>
    </div>
  );
}

export default CheckoutTemp;
