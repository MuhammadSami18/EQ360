import React from "react";
import Input from "./Input";

const CheckOutInput = ({total_Price,sub_Total,discount}) => {
  return (
    <div>
        <Input/>
      <div className="mt-6 border-t border-b py-2">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-900">Subtotal</p>
          <p className="font-semibold text-gray-900">${sub_Total}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-900">Discount</p>
          <p className="font-semibold text-gray-900">${discount}</p>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm font-medium text-gray-900">Total</p>
        <p className="text-2xl font-semibold text-gray-900">${total_Price}</p>
      </div>
    </div>
  );
};

export default CheckOutInput;
