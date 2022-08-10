import React, { useEffect, useState } from "react";
import { useRef } from "react";
import styles from "./Form.modules.css";

import { useDispatch, useSelector } from "react-redux";

// import { notify } from "./Toast";

// import BasicModal from "./BasicModal";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import emailjs from "@emailjs/browser";
// import moment from "moment";
// import BasicModal from "./BasicModal";
const BasicModal = React.lazy(() => import("./BasicModal"));
const Toast = React.lazy(() => import("./Toast"));
const LoadingButton2 = React.lazy(() => import("./LoadingButton2"));
const MomentImports = React.lazy(() => import("./MomentImports"));

//

const Form = () => {
  const dispatch = useDispatch();
  const bookingLoader = useSelector(
    (state) => state.bookingReducer.booking_loader
  );
  const bookingSuccess = useSelector(
    (state) => state.bookingReducer.booking_success
  );
  const emailSuccess = useSelector(
    (state) => state.bookingReducer.email_success
  );
  const emailLoader = useSelector((state) => state.bookingReducer.email_loader);
  const email_success = useSelector(
    (state) => state.bookingReducer.email_success
  );
  const email_failure = useSelector(
    (state) => state.bookingReducer.email_failure
  );
  const booking_failure = useSelector(
    (state) => state.bookingReducer.booking_failure
  );
  console.log(
    "🚀 ~ file: Form.js ~ line 40 ~ Form ~ booking_failure",
    booking_failure
  );
  console.log(
    "🚀 ~ file: Form.js ~ line 37 ~ Form ~ email_failure",
    email_failure
  );
  console.log(
    "🚀 ~ file: Form.js ~ line 32 ~ Form ~ email_success",
    email_success
  );

  console.log("🚀 ~ file: Form.js ~ line 27 ~ Form ~ emailLoader", emailLoader);
  // console.log(
  //   "🚀 ~ file: Form.js ~ line 24 ~ Form ~ bookingLoader",
  //   bookingLoader
  // );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  //   const [pickupDate, setPickupDate] = useState("YYYY-MM-DD");
  //   const [pickupTime, setPickupTime] = useState("");
  const pickupDate = useRef(null);
  const pickupTime = useRef(null);
  const dropOffDate = useRef(null);
  const dropOffTime = useRef(null);
  const pickupAddress = useRef(null);
  const dropOffAddress = useRef(null);
  const [modalState, setModalState] = useState(false);

  const [bookingStarted, setBookingStarted] = useState(false);
  const [emailStarted, setEmailStarted] = useState(false);

  const [error, setError] = useState({
    name: "",
    email: "",
    mobile: "",
    pickupDate: "",
    pickupTime: "",
    dropOffDate: "",
    dropOffTime: "",
    pickupAddress: "",
    dropOffAddress: "",
  });

  const [display, setDisplay] = useState(false);
  const [display2, setDisplay2] = useState(false);
  const [display3, setDisplay3] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setDisplay(true);
    }, 1000);
    setTimeout(() => {
      setDisplay2(true);
    }, 8000);
    setTimeout(() => {
      setDisplay3(true);
    }, 10000);
  }, []);

  useEffect(() => {
    if (bookingSuccess === true) {
      setModalState(true);
      setBookingStarted(false);
      setName("");
      setEmail("");
      setMobile("");
      pickupDate.current.value = null;
      pickupTime.current.value = null;
      dropOffDate.current.value = null;
      dropOffTime.current.value = null;
      pickupAddress.current.value = null;
      dropOffAddress.current.value = null;
      dispatch({
        type: "BOOKING_SUCCESS",
        payload: false,
      });
    }
  }, [bookingSuccess]);

  useEffect(() => {
    if (emailSuccess === true) {
      let data = {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        mobile,
        pickupDate: pickupDate.current.value.trim(),
        pickupTime: pickupTime.current.value.trim(),
        dropOffDate: dropOffDate.current.value.trim(),
        dropOffTime: dropOffTime.current.value.trim(),
        pickupAddress: pickupAddress.current.value.trim(),
        dropOffAddress: dropOffAddress.current.value.trim(),
      };
      // dispatch(submitDriverBookingData(data));
      setTimeout(() => {
        import("../redux/actions").then(({ submitDriverBookingData }) => {
          dispatch(submitDriverBookingData(data));
        });
      }, 100);
      dispatch({
        type: "EMAIL_SUCCESS",
        payload: false,
      });
    }
    // if (emailSuccess === false && emailFailure === true) {
    // }
  }, [emailSuccess]);

  useEffect(() => {
    if (email_failure) {
      setError({ ...error, email: "Please enter a valid email" });
      //  notify("Please enter a valid email");
      import("./Toast").then((Toast) => {
        Toast.notify("Please enter a valid email");
      });
      dispatch({
        type: "EMAIL_FAILURE",
        payload: false,
      });
    }
  }, [email_failure]);

  useEffect(() => {
    if (booking_failure) {
      //  notify("Technical issue");
      import("./Toast").then((Toast) => {
        Toast.notify("Technical issue");
      });
      dispatch({
        type: "BOOKING_FAILURE",
        payload: false,
      });
    }
  }, [booking_failure]);

  useEffect(() => {
    if (modalState === true) setTimeout(() => setModalState(false), 3000);
  }, [modalState]);

  const handleNameChange = (e) => {
    setName(e.target.value);
    setError({ ...error, name: "" });
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError({ ...error, email: "" });
  };
  const handleMobileChange = (e) => {
    setMobile(parseInt(e.target.value) ? parseInt(e.target.value) : "");
    setError({ ...error, mobile: "" });
  };

  function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }

    return false;
  }

  const isValidated = () => {
    let err = {
      name: "",
      email: "",
      mobile: "",
      pickupDate: "",
      pickupTime: "",
      dropOffDate: "",
      dropOffTime: "",
      pickupAddress: "",
      dropOffAddress: "",
    };
    let message = "Please provide the input";
    if (name === "") {
      setError({ ...err, name: message });
      // import("./Toast").then(Toast => {
      //   Toast.notify(message);
      // });
      import("./Toast").then((Toast) => {
        Toast.notify(message);
      });
      return false;
    } else if (email === "") {
      setError({ ...err, email: message });
      import("./Toast").then((Toast) => {
        Toast.notify(message);
      });
      return false;
    } else if (!ValidateEmail(email)) {
      setError({ ...err, email: "Please enter a valid email" });
      import("./Toast").then((Toast) => {
        Toast.notify("Please enter a valid email");
      });
      // notify("Please enter a valid email");
    } else if (mobile === "") {
      setError({ ...err, mobile: message });
      import("./Toast").then((Toast) => {
        Toast.notify(message);
      });
      return false;
    } else if (
      pickupDate.current.value == "" ||
      pickupDate.current.value == null
    ) {
      setError({ ...err, pickupDate: message });
      import("./Toast").then((Toast) => {
        Toast.notify(message);
      });
      return false;
    } else if (
      pickupTime.current.value == "" ||
      pickupTime.current.value == null
    ) {
      setError({ ...err, pickupTime: message });
      import("./Toast").then((Toast) => {
        Toast.notify(message);
      });
      return false;
    } else if (
      dropOffDate.current.value == "" ||
      dropOffDate.current.value == null
    ) {
      setError({ ...err, dropOffDate: message });
      import("./Toast").then((Toast) => {
        Toast.notify(message);
      });
      return false;
    } else if (
      dropOffTime.current.value == "" ||
      dropOffTime.current.value == null
    ) {
      setError({ ...err, dropOffTime: message });
      import("./Toast").then((Toast) => {
        Toast.notify(message);
      });
      return false;
    } else if (
      pickupAddress.current.value == "" ||
      pickupAddress.current.value == null
    ) {
      setError({ ...err, pickupAddress: message });
      import("./Toast").then((Toast) => {
        Toast.notify(message);
      });
      return false;
    } else if (
      dropOffAddress.current.value == "" ||
      dropOffAddress.current.value == null
    ) {
      setError({ ...err, dropOffAddress: message });
      import("./Toast").then((Toast) => {
        Toast.notify(message);
      });
      return false;
    } else {
      setError({ ...err });
      return true;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isValidated()) {
      let data = {
        name,
        email,
        mobile,
        pickupDate: pickupDate.current.value,
        pickupTime: pickupTime.current.value,
        dropOffDate: dropOffDate.current.value,
        dropOffTime: dropOffTime.current.value,
        pickupAddress: pickupAddress.current.value,
        dropOffAddress: dropOffAddress.current.value,
      };

      let emailObj = { name: name.trim(), email: email.trim().toLowerCase() };
      setTimeout(() => {
        import("../redux/actions").then(({ emailSend }) => {
          dispatch(emailSend(emailObj));
        });
      }, 100);
      // dispatch(emailSend(emailObj));
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      {display ? (
        <>
          <React.Suspense fallback={<div></div>}>
            <Toast />
          </React.Suspense>
          <React.Suspense fallback={<div></div>}>
            <BasicModal modalState={modalState} setModalState={setModalState} />
          </React.Suspense>
        </>
      ) : null}

      <div className="twelve">
        <h1>Book Now</h1>
      </div>
      <label>
        Name:
        <input
          className={error.name ? "validation-error" : ""}
          spellCheck="false"
          type="text"
          value={name}
          onChange={(e) => handleNameChange(e)}
        />
      </label>
      <label>
        Email:
        <input
          className={error.email ? "validation-error" : ""}
          type="email"
          pattern=".+@globex\.com"
          spellCheck="false"
          //type="text"
          value={email}
          onChange={(e) => handleEmailChange(e)}
        />
      </label>
      <label>
        Mobile:
        <input
          className={error.mobile ? "validation-error" : ""}
          type="text"
          // pattern="[0-9]*"
          maxLength={10}
          value={mobile}
          onChange={(e) => handleMobileChange(e)}
        />
      </label>
      {/* {display3 ? ( */}
      <MomentImports
        error={error}
        pickupDate={pickupDate}
        pickupTime={pickupTime}
        dropOffDate={dropOffDate}
      />
      {/* ) : null} */}
      <label>
        Drop off Time
        <input
          className={error.dropOffTime ? "validation-error" : ""}
          type="time"
          ref={dropOffTime}
        ></input>
      </label>
      <label>
        Pickup Address:
        <textarea
          className={error.pickupAddress ? "validation-error" : ""}
          spellCheck="false"
          rows={3}
          cols={30}
          ref={pickupAddress}
          maxLength={250}
        />
      </label>
      <label>
        Drop off Address:
        <textarea
          className={error.dropOffAddress ? "validation-error" : ""}
          spellCheck="false"
          rows={3}
          cols={30}
          ref={dropOffAddress}
          maxLength={250}
        />
      </label>

      {/* {display2 ? ( */}
      <LoadingButton2
        emailLoader={emailLoader}
        bookingLoader={bookingLoader}
        handleSubmit={handleSubmit}
      />
      {/* ) : null} */}
    </form>
  );
};

export default Form;
