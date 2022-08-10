import React from "react";
import moment from "moment";
const MomentImports = ({ error, pickupDate, pickupTime, dropOffDate }) => {
  return (
    <>
      <label>
        Pickup Date
        <input
          className={error.pickupDate ? "validation-error" : ""}
          type="date"
          ref={pickupDate}
          min={moment(new Date()).format("YYYY-MM-DD")}
        ></input>
      </label>
      <label>
        Pickup Time
        <input
          className={error.pickupTime ? "validation-error" : ""}
          min={moment(new Date().getTime()).format("hh:mm")}
          type="time"
          ref={pickupTime}
        ></input>
      </label>
      <label>
        Drop off Date
        <input
          className={error.dropOffDate ? "validation-error" : ""}
          type="date"
          ref={dropOffDate}
          min={moment(new Date()).format("YYYY-MM-DD")}
        ></input>
      </label>
    </>
  );
};

export default MomentImports;
