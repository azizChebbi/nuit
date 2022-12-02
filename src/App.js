/* eslint-disable jsx-a11y/alt-text */
import "./app.css";
import GreenVirus from "./images/virus/green.svg";
import OrangeVirus from "./images/virus/orange.svg";
import PinkVirus from "./images/virus/pink.svg";
import PurpleVirus from "./images/virus/purple.svg";
import Arrow from "./images/arrow.svg";
import Button from "./components/Button";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorIcon from "./components/ErrorIcon";
import BottomArrow from "./images/bottomArrow.svg";

const schema = yup
  .object({
    firstName: yup.string().required(),
    email: yup.string().email().required(),
    dateOfBirth: yup.date().max(new Date()).required(),
    gender: yup.string().required(),
  })
  .required();

function App() {
  const [index, setIndex] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    startAnimation();
  };

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const grayContainer = useRef();
  const orangeContainer = useRef();
  const purpleContainer = useRef();
  const arrow = useRef();

  const startAnimation = async () => {
    arrow.current.style.animationDuration = 0;
    await sleep(500);
    arrow.current.style.animationDuration = "4s";
    arr[index].first.current.classList.add("first-card-animation");
    arr[index].second.current.classList.add("second-card-animation");
    arr[index].third.current.classList.add("third-card-animation");
    setTimeout(() => {
      if (index === 0) {
        grayContainer.current.classList.remove("first-card");
        orangeContainer.current.classList.remove("second-card");
        purpleContainer.current.classList.remove("third-card");
        // change classes
        grayContainer.current.classList.add("third-card");
        orangeContainer.current.classList.add("first-card");
        purpleContainer.current.classList.add("second-card");
      } else if (index === 1) {
        grayContainer.current.classList.remove("third-card");
        orangeContainer.current.classList.remove("first-card");
        purpleContainer.current.classList.remove("second-card");
        // change classes
        grayContainer.current.classList.add("second-card");
        orangeContainer.current.classList.add("third-card");
        purpleContainer.current.classList.add("first-card");
      } else {
        grayContainer.current.classList.remove("second-card");
        orangeContainer.current.classList.remove("third-card");
        purpleContainer.current.classList.remove("first-card");
        // change classes
        grayContainer.current.classList.add("first-card");
        orangeContainer.current.classList.add("second-card");
        purpleContainer.current.classList.add("third-card");
      }
    }, 1000);
    setTimeout(() => {
      arr[index].first.current.classList.remove("first-card-animation");
      arr[index].second.current.classList.remove("second-card-animation");
      arr[index].third.current.classList.remove("third-card-animation");

      if (index < 2) {
        setIndex(index + 1);
      } else setIndex(0);
    }, 2000);
  };

  const arr = [
    {
      first: grayContainer,
      second: orangeContainer,
      third: purpleContainer,
    },
    {
      first: orangeContainer,
      second: purpleContainer,
      third: grayContainer,
    },
    {
      first: purpleContainer,
      second: grayContainer,
      third: orangeContainer,
    },
  ];

  return (
    <div className="app">
      <div className="virus-container green-virus">
        <img src={GreenVirus} className="virus" />
      </div>
      <div className="virus-container orange-virus">
        <img src={OrangeVirus} className="virus" />
      </div>
      <div className="virus-container pink-virus">
        <img src={PinkVirus} className="virus" />
      </div>
      <div className="virus-container purple-virus">
        <img src={PurpleVirus} className="virus" />
      </div>

      <div className="container">
        <div className="arrow-container">
          <button
            ref={arrow}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              transition: 1,
            }}
            onClick={startAnimation}
          >
            <img src={Arrow} className="arrow" />
          </button>
        </div>
        <div className="card gray first-card" ref={grayContainer}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-container">
              <input
                type="text"
                placeholder="First Name"
                className="text-input"
                {...register("firstName")}
                style={{ color: errors.firstName ? "#F24E1E" : "#130000" }}
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = "First Name")}
              />
              {errors.firstName && <ErrorIcon />}
            </div>
            <div className="input-container">
              <input
                type="email"
                placeholder="Email"
                className="text-input"
                {...register("email")}
                style={{ color: errors.email ? "#F24E1E" : "#130000" }}
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = "Email")}
              />
              {errors.email && <ErrorIcon />}
            </div>
            <div className="input-container">
              <input
                type="date"
                placeholder="Date Of Birth"
                className="text-input"
                {...register("dateOfBirth")}
                style={{ color: errors.dateOfBirth ? "#F24E1E" : "#130000" }}
              />
            </div>
            <div className="input-container">
              <input
                type="string"
                placeholder="Gender"
                className="text-input"
                {...register("gender")}
                style={{ color: errors.gender ? "#F24E1E" : "#130000" }}
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = "Gender")}
              />
              {errors.gender && <ErrorIcon />}
            </div>
            <Button backgroundColor={"#FFF6AF"}>Stay Safe</Button>
          </form>
        </div>
        <div className="card orange second-card" ref={orangeContainer}>
          <form>
            <div className="input-container">
              <input
                type="text"
                placeholder="Phone Number"
                className="text-input"
              />
            </div>
            <div className="input-container">
              <input
                type="string"
                placeholder="Comment"
                className="text-input"
              />
            </div>
            <div className="input-container">
              <input
                type="text"
                placeholder="Medical Number"
                className="text-input"
              />
            </div>
            <div className="input-container">
              <input
                type="string"
                placeholder="Symptoms"
                className="text-input"
              />
            </div>
            <Button backgroundColor={"#FFF6AF"}>Stay Safe</Button>
          </form>
        </div>
        <div className="card purple third-card" ref={purpleContainer}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-container">
              <input
                type="text"
                placeholder="Choose Laboratory"
                className="text-input"
              />
              <span
                style={{
                  padding: 0,
                  position: "absolute",
                  top: "50%",
                  right: 15,
                  transform: "translateY(-50%)",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img src={BottomArrow} style={{ width: 18 }} />
              </span>
            </div>
            <div className="input-container">
              <input
                type="string"
                placeholder="Test Type"
                className="text-input"
              />
              <span
                style={{
                  padding: 0,
                  position: "absolute",
                  top: "50%",
                  right: 15,
                  transform: "translateY(-50%)",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img src={BottomArrow} style={{ width: 18 }} />
              </span>
            </div>
            <div className="input-container">
              <input
                type="string"
                placeholder="Test Date"
                className="text-input"
              />
            </div>

            <Button backgroundColor={"#FFF6AF"}>Stay Safe</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
