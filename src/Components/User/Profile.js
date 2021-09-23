import React, { useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { db, auth } from "../../firebase";
import { useAuth } from "../Contexts/AuthContext";

export default function Profile() {
  const history = useHistory();
  const [Name, setName] = useState("");
  const [Address, setAddress] = useState("");
  const [Mobile, setMobile] = useState("");
  const [AlternetMobile, setAlternetMobile] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Aadhaar, setAadhaar] = useState("");
  const [UploadImage, setUploadImage] = useState("");

  const { currentUser } = useAuth();

  useEffect(() => {
    db.collection("users")
      .where("Uid" == currentUser.uid)
      .onSnapshot((snapshot) => {
        setName(snapshot.Name);
      });
  }, []);

  const UpdateProfile = (e) => {
    e.preventDefault();

    let EditUserInfo = {
      Uid: currentUser.uid,
      Name: Name,
      Address: Address,
      Mobile: Mobile,
      AlternetMobile: AlternetMobile,
      Email: Email,
      Password: Password,
      Aadhaar: Aadhaar,
      UploadImage: UploadImage,
    };

    db.collection("users").uid(currentUser.uid).set(EditUserInfo);

    setName("");
    setAddress("");
    setMobile("");
    setAlternetMobile("");
    setEmail("");
    setPassword("");
    setAadhaar("");
    setUploadImage("");
    toast.success("User Update Successfully");

    //history.push("/login");
    //     // ...
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // ..
    //     alert(" Error while User Register : " + errorMessage);
    //   });
  };
  return (
    <>
      <div className="countiner p-3">
        <div className="row justify-content-center ">
          <h5 className="text-center ">
            <b> Profile {currentUser && currentUser.uid}</b>
          </h5>
          <div className="col-md-6 ml-5 mr-5">
            <div className="section-title">
              <span>Register</span>
              <h2 className="text-center"> Register </h2>
            </div>
            <form className="shadow p-4 mt-2">
              <div className="form-group">
                <label htmlFor="Name"> Full Name </label>
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  aria-describedby="NameHelp"
                  placeholder=""
                  value={Name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="Address"> Address </label>
                <textarea
                  className="form-control"
                  id="Address"
                  rows="3"
                  placeholder=""
                  value={Address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="Aadhaar"> Aadhaar </label>
                <input
                  type="number"
                  className="form-control"
                  id="Aadhaar"
                  aria-describedby="AadhaarHelp"
                  placeholder=""
                  min="0"
                  max="99999"
                  maxlength="5"
                  value={Aadhaar}
                  onChange={(e) => {
                    setAadhaar(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Mobile"> Mobile </label>
                <input
                  type="number"
                  className="form-control"
                  id="Mobile"
                  aria-describedby="MobileHelp"
                  placeholder=""
                  value={Mobile}
                  onChange={(e) => {
                    setMobile(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="AlternetMobile"> Alternet Mobile </label>
                <input
                  type="number"
                  className="form-control"
                  id="AlternetMobile"
                  aria-describedby="mobileHelp"
                  placeholder=""
                  value={AlternetMobile}
                  onChange={(e) => {
                    setAlternetMobile(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Email"> Email Address </label>
                <input
                  type="text"
                  className="form-control"
                  id="Email"
                  placeholder=""
                  value={Email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  aria-autocomplete="false"
                />
              </div>
              <div className="form-group">
                <label htmlFor="Password"> Password </label>
                <input
                  type="password"
                  className="form-control"
                  id="Password"
                  aria-describedby="PasswordHelp"
                  placeholder=""
                  value={Password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="UploadImage"> Upload Image </label>
                <div className="input-group mb-3">
                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="UploadImage"
                      value={UploadImage}
                      onChange={(e) => {
                        setUploadImage(e.target.value);
                      }}
                    />
                    <label className="custom-file-label" htmlFor="UploadImage">
                      Choose file
                    </label>
                  </div>
                  {/* <div className="input-group-append">
                <span className="input-group-text" id>
                  Upload
                </span>
              </div> */}
                </div>
              </div>

              <button
                disabled={
                  (!Name, !Email, !Password, !Address, !Mobile, !Aadhaar)
                  //   !UploadImage
                }
                type="submit"
                className="btn btn-primary w-100 my-3"
                onClick={UpdateProfile}
              >
                Submit
              </button>

              <div className="d-flex justify-content-center links">
                Already have account? &nbsp;<a href="/login"> Sign in</a>
              </div>
            </form>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </>
  );
}
