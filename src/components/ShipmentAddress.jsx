import React from "react";
import questionImg from "../assets/question.JPG";
const ShipmentAddress = () => {
  return (
    <section className="flex flex-col">
      <h2 className="mt-9 mb-5">عنوان التسليم</h2>
      <div className="rounded-md bg-gray-300 p-5 border border-gray-200">
        <p>
          إمبابة شارع طلعت حرب مدينة العمال بجوار البرنس منزل 17 بلوك 22 القاهرة
        </p>
      </div>
      <div className="text-center border border-gray-200 mt-5 rounded-md flex justify-around items-center p-4">
        <p className="w-[50%]">
          <img src={questionImg} className="w-[50%] " />
        </p>
        <div>
          <p className="mb-5">هل يوجد مشكلة في شحنتك</p>
          <p>
            <button className="bg-primary rounded-lg text-white px-8 py-3">
              إبلاغ عن مشكلة
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShipmentAddress;
