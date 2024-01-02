import React from "react";

const OtherMasking = () => {
  return (
    <div>
      <label>
        Date time:
        <input placeholder="dd/mm/yyyy hh:mm" data-slots="dmyh" />
      </label>
      <br />
      <label>
        Telephone:
        <input placeholder="+1 (___) ___-____" data-slots="_" />
      </label>
      <br />
      <label>
        MAC Address:
        <input
          placeholder="XX:XX:XX:XX:XX:XX"
          data-slots="X"
          data-accept="[\dA-H]"
        />
      </label>
      <br />
      <label>
        Alphanumeric:
        <input placeholder="__-__-__-____" data-slots="_" data-accept="\w" />
      </label>
      <br />
      <label>
        Credit Card:
        <input
          placeholder=".... .... .... ...."
          data-slots="."
          data-accept="\d"
        />
      </label>
    </div>
  );
};

export default OtherMasking;
