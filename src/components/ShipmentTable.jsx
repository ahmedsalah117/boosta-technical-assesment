import React from "react";

//PACKAGE_RECEIVED
//IN_TRANSIT
//OUT_FOR_DELIVERY
const shipmentStatusArrayArabic = [
  "تم استلام الشحنة",
  "في الطريق",
  "الشحنة خرجت للتوصيل",
  "",
];

const ShipmentTable = ({ transitionEvents }) => {
  const nonRepetitiveTransitionArr = transitionEvents.filter((item, index) => {
    return (
      index >= 1 &&
      item.dateDetails.date !== transitionEvents[index - 1].dateDetails.date
    );
  });

  return (
    <div className="w-[85%]">
      <h2 className="mt-9 mb-5">تفاصيل الشحنة</h2>
      <table className=" w-full  border border-b-gray-500 text-center">
        <thead className="bg-gray-300 text-slate-600">
          <tr>
            <th className="py-3">الفرع</th>
            <th>التاريخ</th>
            <th>الوقت</th>
            <th>تفاصيل</th>
          </tr>
        </thead>
        <tbody>
          {nonRepetitiveTransitionArr.map((item) => {
            return (
              <tr className="border-b border-b-gray-500">
                <td className=" p-2">مدينة نصر</td>
                <td className=" p-3">{item.dateDetails.date}</td>
                <td dir="ltr" className="">
                  {item.dateDetails.time}
                </td>
                <td className="">
                  {item.state === "PACKAGE_RECEIVED"
                    ? shipmentStatusArrayArabic[0]
                    : item.state === "IN_TRANSIT"
                    ? shipmentStatusArrayArabic[1]
                    : shipmentStatusArrayArabic[2]}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ShipmentTable;
