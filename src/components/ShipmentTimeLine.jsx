import React from "react";
import { HiCheckCircle } from "react-icons/hi";
const weekDaysEn = [
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];
const weekDaysAr = [
  "السبت",
  "الأحد",
  "الإثنين",
  "الثلاثاء",
  "الأربعاء",
  "الخميس",
  "الجمعة",
];

const monthArrayEn = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const monthArrayAr = [
  "يناير",
  "فبراير",
  "مارس",
  "أبريل",
  "مايو",
  "يونيو",
  "يوليو",
  "أغسطس",
  "سبتمبر",
  "أكتوبر",
  "نوفمبر",
  "ديسمبر",
];
const deliveryStatusArabic = [
  <span className="text-green-700 font-bold font-cairo">تم التسليم</span>,
  <span className="text-primary font-bold font-cairo">تم إلغاء الشحنة</span>,
  <span className="text-yellow-400 font-bold font-cairo">
    لم يتم تسليم الشحنة
  </span>,
];
const ShipmentTimeLine = ({
  lastUpdate,
  currentStatus,
  deliveryDate,
  providerName,
  shipmentCreationDate,
  trackingNumber,
  transitionEvents,
}) => {
  function generateDayMonthYear(date, desiredLang) {
    const weekDayArabic = weekDaysAr[date.getDay()]; //return
    const weekDayEnglish = weekDaysEn[date.getDay()]; //return
    const monthArabic = monthArrayAr[date.getMonth()];
    const monthEnglish = monthArrayEn[date.getMonth()];
    const year = date.getFullYear();
    if (desiredLang === "en") {
      return { month: monthEnglish, day: weekDayEnglish, year };
    } else {
      return { month: monthArabic, day: weekDayArabic, year };
    }
  }
  // //prettier-ignore
  // const isPackageReceived = !!transitionEvents.find(
  //   (item) => item.state === "PACKAGE_RECEIVED"
  // );
  // //prettier-ignore
  // const isPackageOutForDelivery = !!(transitionEvents.find(
  //   (item) => item.state === "OUT_FOR_DELIVERY"
  // ));
  // //prettier-ignore
  // const isDeliveredToSender = !!(transitionEvents.find(
  //   (item) => item.state === "DELIVERED_TO_SENDER"
  // ));
  // //prettier-ignore
  // const isTicketCreated = !!(transitionEvents.find(
  //   (item) => item.state === "TICKET_CREATED"
  // ));

  const arabicDeliveryDate = generateDayMonthYear(new Date(deliveryDate.date));

  return (
    <section
      dir="rtl"
      className="rounded-md border py-5  border-slate-500 font-cairo "
    >
      <div className="flex justify-around items-center border-b border-b-border-slate-600 pb-5 px-5">
        <div className="flex-col">
          <p className="mb-3">رقم الشحنة &nbsp; {trackingNumber}</p>
          <p>
            {currentStatus === "DELIVERED"
              ? deliveryStatusArabic[0]
              : currentStatus === "CANCELLED"
              ? deliveryStatusArabic[1]
              : deliveryStatusArabic[2]}
          </p>
        </div>
        <div className="flex-col">
          <p className="mb-3">أخر تحديث</p>
          <p className="font-bold">
            {generateDayMonthYear(new Date(lastUpdate.date), "ar").day}{" "}
            {lastUpdate.date} الساعة {lastUpdate.time}{" "}
          </p>
        </div>
        <div className="flex-col">
          <p className="mb-3">اسم التاجر</p>
          <p className="font-bold">{providerName}</p>
        </div>
        <div className="flex-col">
          <p className="mb-3">موعد التسليم خلال</p>
          <p className="font-bold">
            {isNaN(arabicDeliveryDate) ? (
              "غير متاح"
            ) : (
              <>
                {arabicDeliveryDate.day} &nbsp; {arabicDeliveryDate.month}{" "}
                &nbsp;
                {arabicDeliveryDate.year}
              </>
            )}
          </p>
        </div>
      </div>
      <div className="flex  justify-center items-center mt-12">
        {/* point */}
        <p className="rounded-full bg-white -ml-2 ">
          <HiCheckCircle
            className={`${
              currentStatus === "DELIVERED"
                ? "text-green-600"
                : currentStatus === "CANCELLED"
                ? "text-primary"
                : "text-yellow-400"
            } rounded-full `}
            size={"30"}
          />
        </p>
        {/* segment */}
        <div
          className={`w-[30%] ${
            currentStatus === "DELIVERED"
              ? "bg-green-600"
              : currentStatus === "CANCELLED"
              ? "bg-primary"
              : "bg-yellow-400"
          } h-2 rounded-r-full rounded-l-full -ml-2 z-10 `}
        ></div>
        {/* point */}
        <p className="rounded-full bg-white -ml-2 ">
          <HiCheckCircle
            className={`${
              currentStatus === "DELIVERED"
                ? "text-green-600"
                : currentStatus === "CANCELLED"
                ? "text-primary"
                : "text-yellow-400"
            } rounded-full `}
            size={"30"}
          />
        </p>
        {/* segment */}
        <div
          className={`w-[30%] ${
            currentStatus === "DELIVERED"
              ? "bg-green-600"
              : currentStatus === "CANCELLED"
              ? "bg-primary"
              : "bg-yellow-400"
          } h-2 rounded-r-full rounded-l-full -ml-2 z-10`}
        ></div>
        {/* point */}
        <p className="rounded-full bg-white -ml-2 ">
          <HiCheckCircle
            className={`${
              currentStatus === "DELIVERED"
                ? "text-green-600"
                : currentStatus === "CANCELLED"
                ? "text-primary"
                : "text-yellow-400"
            } rounded-full `}
            size={"30"}
          />
        </p>
        {/* segment */}
        <div
          className={`w-[30%] ${
            currentStatus === "DELIVERED"
              ? "bg-green-600"
              : currentStatus === "CANCELLED"
              ? "bg-primary"
              : "bg-yellow-400"
          } h-2 rounded-r-full rounded-l-full -ml-2 z-10`}
        ></div>
        {/* point */}
        <p className="rounded-full bg-white -ml-2 ">
          <HiCheckCircle
            className={`${
              currentStatus === "DELIVERED"
                ? "text-green-600"
                : currentStatus === "CANCELLED"
                ? "text-primary"
                : "text-yellow-400"
            } rounded-full `}
            size={"30"}
          />
        </p>
      </div>
      <div className="mt-4 px-5 flex justify-between items-center w-full">
        <div>
          <p>تم إنشاء الشحنة</p>
        </div>
        <div>
          <p>تم استلام الشحنة من التاجر</p>
        </div>
        <div>
          <p>الشحنة خرجت للتسليم</p>
        </div>
        <div>
          <p>تم التسليم</p>
        </div>
      </div>
    </section>
  );
};

export default ShipmentTimeLine;
