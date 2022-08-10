import emailjs from "@emailjs/browser";
export const getData = () => {
  return async (dispatch) => {
    dispatch({
      type: "FETCH_TASKS_LOADING",
      payload: true,
    });
    let data = await fetch(
      "https://driver5-8a48c-default-rtdb.firebaseio.com/crujhghjk.json"
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(res);
          }, 2000);
        });
      })
      .then((res) => {
        let arr = [];
        for (let i in res) {
          arr.push({ id: i, ...res[i] });
          //console.log(data[i], i);
        }

        dispatch({
          type: "FETCH_TASKS_SUCCESS",
          payload: arr,
        });
        dispatch({
          type: "FETCH_TASKS_LOADING",
          payload: false,
        });
      })
      .catch(() => {
        dispatch({
          type: "FETCH_TASKS_LOADING",
          payload: false,
        });
      });
  };
};

export const getData1 = () => {
  return async (dispatch) => {
    dispatch({
      type: "FETCH_USER_LOADING",
      payload: true,
    });
    let data = await fetch(
      "https://driver5-8a48c-default-rtdb.firebaseio.com/crujhghjk1.json"
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(res);
          }, 1000);
        });
      })
      .then((res) => {
        let arr = [];
        for (let i in res) {
          arr.push({ id: i, ...res[i] });
          //console.log(data[i], i);
        }
        console.log(arr);
        dispatch({
          type: "FETCH_USER_SUCCESS",
          payload: arr,
        });
        dispatch({
          type: "FETCH_USER_LOADING",
          payload: false,
        });
      })
      .catch(() => {
        dispatch({
          type: "FETCH_USER_LOADING",
          payload: false,
        });
      });
  };
};

export const deletItem = (id) => {
  return async (dispatch) => {
    // dispatch({
    //   type: "ADD_TASKS_LOADING",
    //   payload: true,
    // });
    let data = await fetch(
      `https://driver5-8a48c-default-rtdb.firebaseio.com/crujhghjk/${id}.json`,
      {
        method: "DELETE",
      }
    );
    data = await data.json();
    // dispatch(getData());
  };
};

export const addItem = (input) => {
  return async (dispatch) => {
    dispatch({
      type: "ADD_TASKS_LOADING",
      payload: true,
    });
    let data = await fetch(
      "https://driver5-8a48c-default-rtdb.firebaseio.com/crujhghjk.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: input,
        }),
      }
    )
      .then((res) => {
        fetch(
          "https://driver5-8a48c-default-rtdb.firebaseio.com/crujhghjk.json"
        )
          .then((res) => {
            return res.json();
          })
          .then((res) => {
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve(res);
              }, 2000);
            });
          })
          .then((res) => {
            let arr = [];
            for (let i in res) {
              arr.push({ id: i, ...res[i] });
              //console.log(data[i], i);
            }
            dispatch({
              type: "ADD_TASKS_SUCCESS",
              payload: arr,
            });
            dispatch({
              type: "ADD_TASKS_LOADING",
              payload: false,
            });
          })
          .catch(() => {
            dispatch({
              type: "FETCH_TASKS_LOADING",
              payload: false,
            });
          });
      })
      .then((res) => {
        // dispatch(getData());
        //dispatch({ type: "ADD_DATA_SUCCESS" });
        // dispatch({
        //   type: "ADD_TASKS_SUCCESS",
        //   //payload: true,
        // });
        // dispatch({
        //   type: "ADD_TASKS_LOADING",
        //   payload: false,
        // });
      })
      .catch(() => {
        dispatch({
          type: "ADD_TASKS_LOADING",
          payload: false,
        });
      });
  };
};

export const addItem1 = (input) => {
  return async (dispatch) => {
    dispatch({
      type: "ADD_USER_LOADING",
      payload: true,
    });
    let data = await fetch(
      "https://driver5-8a48c-default-rtdb.firebaseio.com/crujhghjk1.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: input,
        }),
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        dispatch(getData1());
        //dispatch({ type: "ADD_DATA_SUCCESS" });
        dispatch({
          type: "ADD_USER_SUCCESS",
          //payload: true,
        });
        dispatch({
          type: "ADD_USER_LOADING",
          payload: false,
        });
      })
      .catch(() => {
        dispatch({
          type: "ADD_USER_LOADING",
          payload: false,
        });
      });
  };
};

export const editItem = (id) => {
  return async (dispatch) => {
    let data = await fetch(
      `https://driver5-8a48c-default-rtdb.firebaseio.com/crujhghjk/${id}.json`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "shivam1",
        }),
      }
    );
    dispatch(getData());
    // data = await data.json();
  };
};

export const submitDriverBookingData = (data) => {
  return async (dispatch) => {
    dispatch({
      type: "BOOKING_LOADER",
      payload: true,
    });
    let data1 = await fetch(
      "https://bookyourdriver-ae888-default-rtdb.firebaseio.com/callyourdriver.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: data,
        }),
      }
    )
      .then((res) => {
        dispatch({
          type: "BOOKING_LOADER",
          payload: false,
        });
        dispatch({
          type: "BOOKING_SUCCESS",
          payload: true,
        });
      })
      .catch((err) => {
        dispatch({
          type: "BOOKING_LOADER",
          payload: false,
        });
        dispatch({
          type: "BOOKING_FAILURE",
          payload: true,
        });
      });
  };
};

export const emailSend = (data) => {
  return async (dispatch) => {
    dispatch({
      type: "EMAIL_LOADER",
      payload: true,
    });
    emailjs
      .send("service_fefud4e", "template_iz52kxj", data, "G7_7HpLz_lyjYgbDV")
      .then(
        (result) => {
          console.log(result.text);
          dispatch({
            type: "EMAIL_LOADER",
            payload: false,
          });
          dispatch({
            type: "EMAIL_SUCCESS",
            payload: true,
          });
        },
        (error) => {
          console.log(error.text);
          dispatch({
            type: "EMAIL_LOADER",
            payload: false,
          });
          dispatch({
            type: "EMAIL_FAILURE",
            payload: true,
          });
        }
      );
  };
};
