import React, { useContext, useEffect, useState } from "react";
import ShipmentTimeLine from "../components/ShipmentTimeLine.jsx";
import { MainContext } from "../context/store.jsx";
import ShipmentTable from "../components/ShipmentTable.jsx";
import ShipmentAddress from "../components/ShipmentAddress.jsx";

function TrackingDetails() {
  const contextData = useContext(MainContext);
  const { trackingNum, setTrackingNum } = contextData;
  const [lastUpdate, setLastUpdate] = useState({ date: "", time: "" });
  const [currentStatus, setCurrentStatus] = useState("");
  const [deliveryDate, setDeliveryDate] = useState({ date: "", time: "" });
  const [providerName, setProviderName] = useState("");
  const [shipmentCreationDate, setShipmentCreationDate] = useState({
    date: "",
    time: "",
  });
  const [transitionEvents, setTransitionEvents] = useState([]);

  function createReadableDate(timeStamp) {
    const lastUpdateStamp = timeStamp;
    const lastUpdateReadable = new Date(lastUpdateStamp)
      .toLocaleString()
      .split(",");
    const lastUpdateDate = lastUpdateReadable[0];
    const lastUpdateTime = lastUpdateReadable[1];
    return { date: lastUpdateDate, time: lastUpdateTime };
  }

  async function getShipmentDetails() {
    const response = await fetch(
      `https://tracking.bosta.co/shipments/track/${trackingNum}`
    );

    const data = await response.json();
    // Creating a human-readable last update date
    const humanLastUpdateDate = createReadableDate(
      data.CurrentStatus.timestamp
    );
    setLastUpdate(humanLastUpdateDate);
    // Getting the current shipment status.
    setCurrentStatus(data.CurrentStatus.state);
    // Getting the provider name
    setProviderName(data.provider);
    // Getting the shipment creation date as a human readable date
    const shipmentCreationHumanDate = createReadableDate(data.CreateDate);
    setShipmentCreationDate(shipmentCreationHumanDate);
    // Getting an array of transition events with human-readable dates.
    const modifiedTransitionEvents = data.TransitEvents.map((event) => {
      return {
        state: event.state,
        dateDetails: createReadableDate(event.timestamp),
      };
    });
    setTransitionEvents(modifiedTransitionEvents);
    //Getting the promised/expected delivery date as a human-readable date.
    if (data.PromisedDate) {
      const humanDeliveryDate = createReadableDate(data.PromisedDate);
      setDeliveryDate(humanDeliveryDate);
    }
  }
  useEffect(() => {
    if (trackingNum) {
      getShipmentDetails();
    }
  }, [trackingNum]);

  return (
    <section dir="rtl" className=" px-[70px] font-cairo ">
      <ShipmentTimeLine
        lastUpdate={lastUpdate}
        currentStatus={currentStatus}
        deliveryDate={deliveryDate}
        providerName={providerName}
        shipmentCreationDate={shipmentCreationDate}
        trackingNumber={trackingNum}
        transitionEvents={transitionEvents}
      />
      <div className="flex justify-between mt-16 gap-x-4">
        <ShipmentTable transitionEvents={transitionEvents} />
        <ShipmentAddress />
      </div>
    </section>
  );
}

export default TrackingDetails;
