import React from 'react';
import GOOGLE_PLAY from './images/available_on_google_play.png';
import APP_STORE from './images/available_on_app_store.png';
import BATIXI from './images/batixi.png';
import AMAZON from './images/amazon.png';
import AMAZON2 from './images/amazon-2.png';
import NETFLIX from './images/netflix.png';
import NETFLIX2 from './images/netflix-2.png';

function App() {
  const toggleDarkMode = () => {
    document.body.classList.toggle('dark');
  };

  return (
    <>
      <div
        id="home"
        className="flex flex-col m-12 mt-0 font-default text-gray text-center lg:w-9/12 lg:mx-auto dark:bg-black dark:text-white max-w-screen-2xl"
      >
        <div className="hidden right-12 bottom-0 xl:fixed xl:flex xl:flex-col xl:items-center 2xl:right-24 3xl:right-64">
          <a
            href="mailto:contact@emlhd.com"
            target="_blank"
            rel="noreferrer"
            className="my-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="25.064"
              viewBox="0 0 30 25.064"
            >
              <path
                id="gmail"
                d="M30,6.421V25.783a2.17,2.17,0,0,1-2.045,2.277H23.181V15.153L15,21.988,6.819,15.153V28.061H2.045A2.171,2.171,0,0,1,0,25.783V6.421C0,3.605,2.886,2,4.909,3.687l1.91,1.6L15,12.116l8.181-6.835,1.91-1.594C27.113,2,30,3.605,30,6.421Z"
                transform="translate(0 -2.997)"
                fill="#05dec0"
              />
            </svg>
          </a>
          <a
            href="https://www.github.com/EmL01"
            target="_blank"
            rel="noreferrer"
            className="my-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="29.257"
              viewBox="0 0 30 29.257"
            >
              <path
                id="github"
                d="M15,.3a15,15,0,0,0-4.744,29.231c.75.141,1.025-.323,1.025-.721,0-.356-.013-1.3-.019-2.55-4.173.9-5.052-2.013-5.052-2.013a3.976,3.976,0,0,0-1.669-2.194c-1.359-.93.105-.911.105-.911a3.145,3.145,0,0,1,2.3,1.545,3.2,3.2,0,0,0,4.369,1.247,3.2,3.2,0,0,1,.95-2.006c-3.331-.375-6.833-1.665-6.833-7.413a5.787,5.787,0,0,1,1.544-4.025,5.333,5.333,0,0,1,.131-3.97s1.256-.4,4.125,1.537a14.142,14.142,0,0,1,7.5,0c2.85-1.94,4.106-1.537,4.106-1.537a5.481,5.481,0,0,1,.15,3.97,5.811,5.811,0,0,1,1.538,4.025c0,5.763-3.506,7.031-6.844,7.4a3.591,3.591,0,0,1,1.013,2.775c0,2.008-.019,3.62-.019,4.108,0,.394.262.862,1.031.712A14.982,14.982,0,0,0,15,.3"
                transform="translate(0 -0.297)"
                fill="#05dec0"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/emile-l-b08a57215"
            target="_blank"
            rel="noreferrer"
            className="my-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
            >
              <path
                id="linkedin"
                d="M25.559,25.565H21.116V18.6c0-1.66-.034-3.8-2.315-3.8-2.316,0-2.67,1.806-2.67,3.674v7.084H11.689V11.25h4.267V13.2h.057a4.682,4.682,0,0,1,4.213-2.313c4.5,0,5.334,2.963,5.334,6.819v7.858ZM6.671,9.291A2.58,2.58,0,1,1,9.251,6.71,2.577,2.577,0,0,1,6.671,9.291ZM8.9,25.565H4.444V11.25H8.9ZM27.781,0H2.214A2.187,2.187,0,0,0,0,2.161V27.839A2.186,2.186,0,0,0,2.214,30H27.778A2.195,2.195,0,0,0,30,27.839V2.161A2.2,2.2,0,0,0,27.778,0Z"
                fill="#05dec0"
              />
            </svg>
          </a>
          <span className="w-2 h-32 mt-8 bg-brand rounded-full"></span>
        </div>
        {/* Navbar */}
        <div className="flex flex-1 justify-between items-center sticky top-0 py-8 bg-white dark:bg-black w-full">
          <a href="#home">
            <h1 className="text-black dark:text-white">Emile</h1>
          </a>
          <span className="xl:hidden" onClick={toggleDarkMode}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11.449"
              height="15.266"
              viewBox="0 0 11.449 15.266"
            >
              <path
                id="ic_brightness_2_24px"
                d="M8.816,2A7.613,7.613,0,0,0,5,3.03a7.619,7.619,0,0,1,0,13.2A7.63,7.63,0,1,0,8.816,2Z"
                transform="translate(-5 -2)"
                fill="#707070"
              />
            </svg>
          </span>
          <ul className="hidden xl:block xl:flex xl:items-center">
            <li className="ml-8">
              <button className="focus:outline-none">
                <a href="#home">Home</a>
              </button>
            </li>
            <li className="ml-8">
              <button className="focus:outline-none">
                <a href="#about-me">About me</a>
              </button>
            </li>
            <li className="ml-8">
              <button className="focus:outline-none">
                <a href="#skills">Skills</a>
              </button>
            </li>
            <li className="ml-8">
              <button className="focus:outline-none">
                <a href="#portfolio">Portfolio</a>
              </button>
            </li>
            <li className="ml-8">
              <button className="focus:outline-none">
                <a href="#contact-me">Contact me</a>
              </button>
            </li>
            <li className="ml-8">
              <button className="focus:outline-none" onClick={toggleDarkMode}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11.449"
                  height="15.266"
                  viewBox="0 0 11.449 15.266"
                >
                  <path
                    id="ic_brightness_2_24px"
                    d="M8.816,2A7.613,7.613,0,0,0,5,3.03a7.619,7.619,0,0,1,0,13.2A7.63,7.63,0,1,0,8.816,2Z"
                    transform="translate(-5 -2)"
                    fill="#707070"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center">
          {/* Showcase */}
          <div className="xl:flex items-center justify-center h-screen">
            <div className="flex flex-col items-center xl:items-start my-20 xl:pr-24 xl:w-1/2">
              <h1 className="text-black font-bold text-center text-5xl dark:text-white">
                Hi, I am Emile.
              </h1>
              <h2 className="font-medium text-center text-3xl mt-4">
                Full stack web developer
              </h2>
              <p className="text-center my-12 xl:text-left">
                I have been a self-taughted web developer for five years now and
                I always want to learn new technologies.
                <br />
                <br />I am currently looking for new job opportunities to grow
                and take the next step in my career.
              </p>
              <a
                href="#contact-me"
                className="flex rounded-full items-center bg-brand py-4 px-8 focus:outline-none"
              >
                <p className="text-white mr-8">Contact me</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13.566"
                  height="13.566"
                  viewBox="0 0 13.566 13.566"
                >
                  <path
                    id="ic_arrow_forward_24px"
                    d="M10.783,4l-1.2,1.2,4.731,4.74H4v1.7H14.319l-4.731,4.74,1.2,1.2,6.783-6.783Z"
                    transform="translate(-4 -4)"
                    fill="#fff"
                  />
                </svg>
              </a>
            </div>
            <div className="hidden xl:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="470"
                height="253.627"
                viewBox="0 0 470 253.627"
              >
                <g
                  id="undraw_developer_activity_bv83"
                  transform="translate(0 -0.04)"
                >
                  <path
                    id="Trac??_1"
                    data-name="Trac?? 1"
                    d="M498,304.15a74.738,74.738,0,0,1-2.814,20.378,73.973,73.973,0,0,1-7.917,18.192c0,20.583-13.895,38.372-34.063,46.836a68.732,68.732,0,0,1-26.594,5.259H117.222a85.851,85.851,0,0,1-44.428-12.062,76.323,76.323,0,0,1-10.2-7.35c-13.969-12-22.629-28.594-22.629-46.918a74.375,74.375,0,0,1,31.4-108.055,71.7,71.7,0,0,1,10.481-3.747q1.9-.518,3.845-.928a72.052,72.052,0,0,1,10.48-1.438q1.91-.119,3.841-.136h.707c1.421,0,2.831.049,4.232.131l.46-.781q.846-1.413,1.734-2.8,1.6-2.523,3.361-4.971,1.841-2.584,3.841-5.086l.341-.411q1.134-1.413,2.317-2.794,3.7-4.31,7.806-8.361c29.626-29.038,76.038-47.731,128.215-47.731,40.6,0,77.71,11.319,106.136,30.02a71.56,71.56,0,0,1,35.308-9.281c40.155,0,72.718,33.019,72.718,73.75a75.966,75.966,0,0,1-.411,7.716A73.951,73.951,0,0,1,498,304.15Z"
                    transform="translate(-28 -141.34)"
                    fill="#05dec0"
                    opacity="0.1"
                  />
                  <path
                    id="Trac??_2"
                    data-name="Trac?? 2"
                    d="M252.466,257.52v8.361H244.66Q248.329,261.575,252.466,257.52Z"
                    transform="translate(-155.648 -209.765)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_3"
                    data-name="Rectangle 3"
                    width="10.48"
                    height="10.48"
                    transform="translate(100.663 45.635)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_4"
                    data-name="Rectangle 4"
                    width="10.48"
                    height="10.48"
                    transform="translate(114.985 45.635)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_5"
                    data-name="Rectangle 5"
                    width="10.48"
                    height="10.48"
                    transform="translate(129.311 45.635)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_6"
                    data-name="Rectangle 6"
                    width="10.48"
                    height="10.48"
                    transform="translate(143.633 45.635)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_7"
                    data-name="Rectangle 7"
                    width="10.48"
                    height="10.48"
                    transform="translate(157.959 45.635)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_8"
                    data-name="Rectangle 8"
                    width="10.48"
                    height="10.48"
                    transform="translate(172.285 45.635)"
                    fill="#05dec0"
                  />
                  <rect
                    id="Rectangle_9"
                    data-name="Rectangle 9"
                    width="10.48"
                    height="10.48"
                    transform="translate(186.607 45.635)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_10"
                    data-name="Rectangle 10"
                    width="10.48"
                    height="10.48"
                    transform="translate(200.933 45.635)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_11"
                    data-name="Rectangle 11"
                    width="10.48"
                    height="10.48"
                    transform="translate(215.255 45.635)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_12"
                    data-name="Rectangle 12"
                    width="10.48"
                    height="10.48"
                    transform="translate(229.581 45.635)"
                    fill="#05dec0"
                  />
                  <rect
                    id="Rectangle_13"
                    data-name="Rectangle 13"
                    width="10.48"
                    height="10.48"
                    transform="translate(243.906 45.635)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_14"
                    data-name="Rectangle 14"
                    width="10.48"
                    height="10.48"
                    transform="translate(258.228 45.635)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_15"
                    data-name="Rectangle 15"
                    width="10.48"
                    height="10.48"
                    transform="translate(272.554 45.635)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_16"
                    data-name="Rectangle 16"
                    width="10.48"
                    height="10.48"
                    transform="translate(286.88 45.635)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_17"
                    data-name="Rectangle 17"
                    width="10.48"
                    height="10.48"
                    transform="translate(301.202 45.635)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_18"
                    data-name="Rectangle 18"
                    width="10.48"
                    height="10.48"
                    transform="translate(315.528 45.635)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_19"
                    data-name="Rectangle 19"
                    width="10.48"
                    height="10.48"
                    transform="translate(329.85 45.635)"
                    fill="#05dec0"
                  />
                  <rect
                    id="Rectangle_20"
                    data-name="Rectangle 20"
                    width="10.48"
                    height="10.48"
                    transform="translate(344.176 45.635)"
                    fill="#05dec0"
                  />
                  <rect
                    id="Rectangle_21"
                    data-name="Rectangle 21"
                    width="10.48"
                    height="10.48"
                    transform="translate(358.502 45.635)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_22"
                    data-name="Rectangle 22"
                    width="10.48"
                    height="10.48"
                    transform="translate(372.824 45.635)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_23"
                    data-name="Rectangle 23"
                    width="10.48"
                    height="10.48"
                    transform="translate(387.15 45.635)"
                    fill="#05dec0"
                  />
                  <rect
                    id="Rectangle_24"
                    data-name="Rectangle 24"
                    width="10.48"
                    height="10.48"
                    transform="translate(401.471 45.635)"
                    fill="#05dec0"
                  />
                  <path
                    id="Trac??_3"
                    data-name="Trac?? 3"
                    d="M223.981,298.08v4.971H220.62Q222.222,300.512,223.981,298.08Z"
                    transform="translate(-141.485 -233.662)"
                    fill="#05dec0"
                  />
                  <rect
                    id="Rectangle_25"
                    data-name="Rectangle 25"
                    width="10.48"
                    height="10.48"
                    transform="translate(86.337 58.909)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_26"
                    data-name="Rectangle 26"
                    width="10.48"
                    height="10.48"
                    transform="translate(100.663 58.909)"
                    fill="#05dec0"
                  />
                  <rect
                    id="Rectangle_27"
                    data-name="Rectangle 27"
                    width="10.48"
                    height="10.48"
                    transform="translate(114.985 58.909)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_28"
                    data-name="Rectangle 28"
                    width="10.48"
                    height="10.48"
                    transform="translate(129.311 58.909)"
                    fill="#05dec0"
                    opacity="0.7"
                  />
                  <rect
                    id="Rectangle_29"
                    data-name="Rectangle 29"
                    width="10.48"
                    height="10.48"
                    transform="translate(143.633 58.909)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_30"
                    data-name="Rectangle 30"
                    width="10.48"
                    height="10.48"
                    transform="translate(157.959 58.909)"
                    fill="#05dec0"
                    opacity="0.4"
                  />
                  <rect
                    id="Rectangle_31"
                    data-name="Rectangle 31"
                    width="10.48"
                    height="10.48"
                    transform="translate(172.285 58.909)"
                    fill="#05dec0"
                  />
                  <rect
                    id="Rectangle_32"
                    data-name="Rectangle 32"
                    width="10.48"
                    height="10.48"
                    transform="translate(186.607 58.909)"
                    fill="#05dec0"
                    opacity="0.4"
                  />
                  <rect
                    id="Rectangle_33"
                    data-name="Rectangle 33"
                    width="10.48"
                    height="10.48"
                    transform="translate(200.933 58.909)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_34"
                    data-name="Rectangle 34"
                    width="10.48"
                    height="10.48"
                    transform="translate(215.255 58.909)"
                    fill="#05dec0"
                    opacity="0.4"
                  />
                  <rect
                    id="Rectangle_35"
                    data-name="Rectangle 35"
                    width="10.48"
                    height="10.48"
                    transform="translate(229.581 58.909)"
                    fill="#05dec0"
                  />
                  <rect
                    id="Rectangle_36"
                    data-name="Rectangle 36"
                    width="10.48"
                    height="10.48"
                    transform="translate(243.906 58.909)"
                    fill="#05dec0"
                    opacity="0.4"
                  />
                  <rect
                    id="Rectangle_37"
                    data-name="Rectangle 37"
                    width="10.48"
                    height="10.48"
                    transform="translate(258.228 58.909)"
                    fill="#05dec0"
                    opacity="0.4"
                  />
                  <rect
                    id="Rectangle_38"
                    data-name="Rectangle 38"
                    width="10.48"
                    height="10.48"
                    transform="translate(272.554 58.909)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_39"
                    data-name="Rectangle 39"
                    width="10.48"
                    height="10.48"
                    transform="translate(286.88 58.909)"
                    fill="#05dec0"
                    opacity="0.4"
                  />
                  <rect
                    id="Rectangle_40"
                    data-name="Rectangle 40"
                    width="10.48"
                    height="10.48"
                    transform="translate(301.202 58.909)"
                    fill="#05dec0"
                    opacity="0.4"
                  />
                  <rect
                    id="Rectangle_41"
                    data-name="Rectangle 41"
                    width="10.48"
                    height="10.48"
                    transform="translate(315.528 58.909)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_42"
                    data-name="Rectangle 42"
                    width="10.48"
                    height="10.48"
                    transform="translate(329.85 58.909)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_43"
                    data-name="Rectangle 43"
                    width="10.48"
                    height="10.48"
                    transform="translate(344.176 58.909)"
                    fill="#05dec0"
                    opacity="0.4"
                  />
                  <rect
                    id="Rectangle_44"
                    data-name="Rectangle 44"
                    width="10.48"
                    height="10.48"
                    transform="translate(358.502 58.909)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_45"
                    data-name="Rectangle 45"
                    width="10.48"
                    height="10.48"
                    transform="translate(372.824 58.909)"
                    fill="#05dec0"
                  />
                  <rect
                    id="Rectangle_46"
                    data-name="Rectangle 46"
                    width="10.48"
                    height="10.48"
                    transform="translate(387.15 58.909)"
                    fill="#05dec0"
                  />
                  <rect
                    id="Rectangle_47"
                    data-name="Rectangle 47"
                    width="10.48"
                    height="10.48"
                    transform="translate(401.471 58.909)"
                    fill="#05dec0"
                  />
                  <path
                    id="Trac??_4"
                    data-name="Trac?? 4"
                    d="M144.031,324.67V332H133.55v-3.578A71.7,71.7,0,0,1,144.031,324.67Z"
                    transform="translate(-90.186 -249.327)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <path
                    id="Trac??_5"
                    data-name="Trac?? 5"
                    d="M150.9,177.57v9.692H140.42v-8.254Z"
                    transform="translate(-82.73 -104.594)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_48"
                    data-name="Rectangle 48"
                    width="10.48"
                    height="10.48"
                    transform="translate(72.012 72.187)"
                    fill="#05dec0"
                  />
                  <rect
                    id="Rectangle_49"
                    data-name="Rectangle 49"
                    width="10.48"
                    height="10.48"
                    transform="translate(86.337 72.187)"
                    fill="#05dec0"
                    opacity="0.7"
                  />
                  <rect
                    id="Rectangle_50"
                    data-name="Rectangle 50"
                    width="10.48"
                    height="10.48"
                    transform="translate(100.663 72.187)"
                    fill="#05dec0"
                  />
                  <rect
                    id="Rectangle_51"
                    data-name="Rectangle 51"
                    width="10.48"
                    height="10.48"
                    transform="translate(114.985 72.187)"
                    fill="#05dec0"
                    opacity="0.7"
                  />
                  <rect
                    id="Rectangle_52"
                    data-name="Rectangle 52"
                    width="10.48"
                    height="10.48"
                    transform="translate(129.311 72.187)"
                    fill="#05dec0"
                    opacity="0.7"
                  />
                  <rect
                    id="Rectangle_53"
                    data-name="Rectangle 53"
                    width="10.48"
                    height="10.48"
                    transform="translate(143.633 72.187)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_54"
                    data-name="Rectangle 54"
                    width="10.48"
                    height="10.48"
                    transform="translate(157.959 72.187)"
                    fill="#05dec0"
                    opacity="0.4"
                  />
                  <rect
                    id="Rectangle_55"
                    data-name="Rectangle 55"
                    width="10.48"
                    height="10.48"
                    transform="translate(172.285 72.187)"
                    fill="#05dec0"
                    opacity="0.4"
                  />
                  <rect
                    id="Rectangle_56"
                    data-name="Rectangle 56"
                    width="10.48"
                    height="10.48"
                    transform="translate(186.607 72.187)"
                    fill="#05dec0"
                  />
                  <rect
                    id="Rectangle_57"
                    data-name="Rectangle 57"
                    width="10.48"
                    height="10.48"
                    transform="translate(200.933 72.187)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_58"
                    data-name="Rectangle 58"
                    width="10.48"
                    height="10.48"
                    transform="translate(215.255 72.187)"
                    fill="#05dec0"
                    opacity="0.4"
                  />
                  <rect
                    id="Rectangle_59"
                    data-name="Rectangle 59"
                    width="10.48"
                    height="10.48"
                    transform="translate(229.581 72.187)"
                    fill="#05dec0"
                  />
                  <rect
                    id="Rectangle_60"
                    data-name="Rectangle 60"
                    width="10.48"
                    height="10.48"
                    transform="translate(243.906 72.187)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_61"
                    data-name="Rectangle 61"
                    width="10.48"
                    height="10.48"
                    transform="translate(258.228 72.187)"
                    fill="#05dec0"
                    opacity="0.4"
                  />
                  <rect
                    id="Rectangle_62"
                    data-name="Rectangle 62"
                    width="10.48"
                    height="10.48"
                    transform="translate(272.554 72.187)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_63"
                    data-name="Rectangle 63"
                    width="10.48"
                    height="10.48"
                    transform="translate(286.88 72.187)"
                    fill="#05dec0"
                  />
                  <rect
                    id="Rectangle_64"
                    data-name="Rectangle 64"
                    width="10.48"
                    height="10.48"
                    transform="translate(301.202 72.187)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_65"
                    data-name="Rectangle 65"
                    width="10.48"
                    height="10.48"
                    transform="translate(315.528 72.187)"
                    fill="#05dec0"
                    opacity="0.7"
                  />
                  <rect
                    id="Rectangle_66"
                    data-name="Rectangle 66"
                    width="10.48"
                    height="10.48"
                    transform="translate(329.85 72.187)"
                    fill="#05dec0"
                    opacity="0.7"
                  />
                  <rect
                    id="Rectangle_67"
                    data-name="Rectangle 67"
                    width="10.48"
                    height="10.48"
                    transform="translate(344.176 72.187)"
                    fill="#05dec0"
                    opacity="0.4"
                  />
                  <rect
                    id="Rectangle_68"
                    data-name="Rectangle 68"
                    width="10.48"
                    height="10.48"
                    transform="translate(358.502 72.187)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_69"
                    data-name="Rectangle 69"
                    width="10.48"
                    height="10.48"
                    transform="translate(372.824 72.187)"
                    fill="#05dec0"
                  />
                  <rect
                    id="Rectangle_70"
                    data-name="Rectangle 70"
                    width="10.48"
                    height="10.48"
                    transform="translate(387.15 72.187)"
                    fill="#05dec0"
                  />
                  <rect
                    id="Rectangle_71"
                    data-name="Rectangle 71"
                    width="10.48"
                    height="10.48"
                    transform="translate(401.471 72.187)"
                    fill="#05dec0"
                  />
                  <rect
                    id="Rectangle_72"
                    data-name="Rectangle 72"
                    width="10.48"
                    height="10.48"
                    transform="translate(43.364 85.462)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_73"
                    data-name="Rectangle 73"
                    width="10.48"
                    height="10.48"
                    transform="translate(57.69 85.462)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_74"
                    data-name="Rectangle 74"
                    width="10.48"
                    height="10.48"
                    transform="translate(72.012 85.462)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_75"
                    data-name="Rectangle 75"
                    width="10.48"
                    height="10.48"
                    transform="translate(86.337 85.462)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_76"
                    data-name="Rectangle 76"
                    width="10.48"
                    height="10.48"
                    transform="translate(100.663 85.462)"
                    fill="#05dec0"
                  />
                  <rect
                    id="Rectangle_77"
                    data-name="Rectangle 77"
                    width="10.48"
                    height="10.48"
                    transform="translate(114.985 85.462)"
                    fill="#05dec0"
                    opacity="0.7"
                  />
                  <rect
                    id="Rectangle_78"
                    data-name="Rectangle 78"
                    width="10.48"
                    height="10.48"
                    transform="translate(129.311 85.462)"
                    fill="#05dec0"
                    opacity="0.7"
                  />
                  <rect
                    id="Rectangle_79"
                    data-name="Rectangle 79"
                    width="10.48"
                    height="10.48"
                    transform="translate(143.633 85.462)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_80"
                    data-name="Rectangle 80"
                    width="10.48"
                    height="10.48"
                    transform="translate(157.959 85.462)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_81"
                    data-name="Rectangle 81"
                    width="10.48"
                    height="10.48"
                    transform="translate(172.285 85.462)"
                    fill="#05dec0"
                    opacity="0.4"
                  />
                  <rect
                    id="Rectangle_82"
                    data-name="Rectangle 82"
                    width="10.48"
                    height="10.48"
                    transform="translate(186.607 85.462)"
                    fill="#05dec0"
                    opacity="0.4"
                  />
                  <rect
                    id="Rectangle_83"
                    data-name="Rectangle 83"
                    width="10.48"
                    height="10.48"
                    transform="translate(200.933 85.462)"
                    fill="#05dec0"
                  />
                  <rect
                    id="Rectangle_84"
                    data-name="Rectangle 84"
                    width="10.48"
                    height="10.48"
                    transform="translate(215.255 85.462)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_85"
                    data-name="Rectangle 85"
                    width="10.48"
                    height="10.48"
                    transform="translate(229.581 85.462)"
                    fill="#05dec0"
                    opacity="0.4"
                  />
                  <rect
                    id="Rectangle_86"
                    data-name="Rectangle 86"
                    width="10.48"
                    height="10.48"
                    transform="translate(243.906 85.462)"
                    fill="#05dec0"
                    opacity="0.4"
                  />
                  <rect
                    id="Rectangle_87"
                    data-name="Rectangle 87"
                    width="10.48"
                    height="10.48"
                    transform="translate(258.228 85.462)"
                    fill="#05dec0"
                    opacity="0.4"
                  />
                  <rect
                    id="Rectangle_88"
                    data-name="Rectangle 88"
                    width="10.48"
                    height="10.48"
                    transform="translate(272.554 85.462)"
                    fill="#05dec0"
                    opacity="0.4"
                  />
                  <rect
                    id="Rectangle_89"
                    data-name="Rectangle 89"
                    width="10.48"
                    height="10.48"
                    transform="translate(286.88 85.462)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_90"
                    data-name="Rectangle 90"
                    width="10.48"
                    height="10.48"
                    transform="translate(301.202 85.462)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_91"
                    data-name="Rectangle 91"
                    width="10.48"
                    height="10.48"
                    transform="translate(315.528 85.462)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_92"
                    data-name="Rectangle 92"
                    width="10.48"
                    height="10.48"
                    transform="translate(329.85 85.462)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_93"
                    data-name="Rectangle 93"
                    width="10.48"
                    height="10.48"
                    transform="translate(344.176 85.462)"
                    fill="#05dec0"
                    opacity="0.7"
                  />
                  <rect
                    id="Rectangle_94"
                    data-name="Rectangle 94"
                    width="10.48"
                    height="10.48"
                    transform="translate(358.502 85.462)"
                    fill="#05dec0"
                    opacity="0.7"
                  />
                  <rect
                    id="Rectangle_95"
                    data-name="Rectangle 95"
                    width="10.48"
                    height="10.48"
                    transform="translate(372.824 85.462)"
                    fill="#05dec0"
                    opacity="0.4"
                  />
                  <rect
                    id="Rectangle_96"
                    data-name="Rectangle 96"
                    width="10.48"
                    height="10.48"
                    transform="translate(387.15 85.462)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_97"
                    data-name="Rectangle 97"
                    width="10.48"
                    height="10.48"
                    transform="translate(401.471 85.462)"
                    fill="#05dec0"
                  />
                  <rect
                    id="Rectangle_98"
                    data-name="Rectangle 98"
                    width="10.48"
                    height="10.48"
                    transform="translate(43.364 98.74)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_99"
                    data-name="Rectangle 99"
                    width="10.48"
                    height="10.48"
                    transform="translate(57.69 98.74)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_100"
                    data-name="Rectangle 100"
                    width="10.48"
                    height="10.48"
                    transform="translate(72.012 98.74)"
                    fill="#05dec0"
                    opacity="0.4"
                  />
                  <rect
                    id="Rectangle_101"
                    data-name="Rectangle 101"
                    width="10.48"
                    height="10.48"
                    transform="translate(86.337 98.74)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_102"
                    data-name="Rectangle 102"
                    width="10.48"
                    height="10.48"
                    transform="translate(100.663 98.74)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_103"
                    data-name="Rectangle 103"
                    width="10.48"
                    height="10.48"
                    transform="translate(114.985 98.74)"
                    fill="#05dec0"
                    opacity="0.7"
                  />
                  <rect
                    id="Rectangle_104"
                    data-name="Rectangle 104"
                    width="10.48"
                    height="10.48"
                    transform="translate(129.311 98.74)"
                    fill="#05dec0"
                    opacity="0.7"
                  />
                  <rect
                    id="Rectangle_105"
                    data-name="Rectangle 105"
                    width="10.48"
                    height="10.48"
                    transform="translate(143.633 98.74)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_106"
                    data-name="Rectangle 106"
                    width="10.48"
                    height="10.48"
                    transform="translate(157.959 98.74)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_107"
                    data-name="Rectangle 107"
                    width="10.48"
                    height="10.48"
                    transform="translate(172.285 98.74)"
                    fill="#05dec0"
                    opacity="0.4"
                  />
                  <rect
                    id="Rectangle_108"
                    data-name="Rectangle 108"
                    width="10.48"
                    height="10.48"
                    transform="translate(186.607 98.74)"
                    fill="#05dec0"
                  />
                  <rect
                    id="Rectangle_109"
                    data-name="Rectangle 109"
                    width="10.48"
                    height="10.48"
                    transform="translate(200.933 98.74)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_110"
                    data-name="Rectangle 110"
                    width="10.48"
                    height="10.48"
                    transform="translate(215.255 98.74)"
                    fill="#05dec0"
                  />
                  <rect
                    id="Rectangle_111"
                    data-name="Rectangle 111"
                    width="10.48"
                    height="10.48"
                    transform="translate(229.581 98.74)"
                    fill="#05dec0"
                  />
                  <rect
                    id="Rectangle_112"
                    data-name="Rectangle 112"
                    width="10.48"
                    height="10.48"
                    transform="translate(243.906 98.74)"
                    fill="#05dec0"
                  />
                  <rect
                    id="Rectangle_113"
                    data-name="Rectangle 113"
                    width="10.48"
                    height="10.48"
                    transform="translate(258.228 98.74)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_114"
                    data-name="Rectangle 114"
                    width="10.48"
                    height="10.48"
                    transform="translate(272.554 98.74)"
                    fill="#05dec0"
                  />
                  <rect
                    id="Rectangle_115"
                    data-name="Rectangle 115"
                    width="10.48"
                    height="10.48"
                    transform="translate(286.88 98.74)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_116"
                    data-name="Rectangle 116"
                    width="10.48"
                    height="10.48"
                    transform="translate(301.202 98.74)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_117"
                    data-name="Rectangle 117"
                    width="10.48"
                    height="10.48"
                    transform="translate(315.528 98.74)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_118"
                    data-name="Rectangle 118"
                    width="10.48"
                    height="10.48"
                    transform="translate(329.85 98.74)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_119"
                    data-name="Rectangle 119"
                    width="10.48"
                    height="10.48"
                    transform="translate(344.176 98.74)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_120"
                    data-name="Rectangle 120"
                    width="10.48"
                    height="10.48"
                    transform="translate(358.502 98.74)"
                    fill="#05dec0"
                    opacity="0.7"
                  />
                  <rect
                    id="Rectangle_121"
                    data-name="Rectangle 121"
                    width="10.48"
                    height="10.48"
                    transform="translate(372.824 98.74)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_122"
                    data-name="Rectangle 122"
                    width="10.48"
                    height="10.48"
                    transform="translate(387.15 98.74)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_123"
                    data-name="Rectangle 123"
                    width="10.48"
                    height="10.48"
                    transform="translate(401.471 98.74)"
                    fill="#05dec0"
                  />
                  <rect
                    id="Rectangle_124"
                    data-name="Rectangle 124"
                    width="10.48"
                    height="10.48"
                    transform="translate(43.364 112.014)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_125"
                    data-name="Rectangle 125"
                    width="10.48"
                    height="10.48"
                    transform="translate(57.69 112.014)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_126"
                    data-name="Rectangle 126"
                    width="10.48"
                    height="10.48"
                    transform="translate(72.012 112.014)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_127"
                    data-name="Rectangle 127"
                    width="10.48"
                    height="10.48"
                    transform="translate(86.337 112.014)"
                    fill="#05dec0"
                    opacity="0.4"
                  />
                  <rect
                    id="Rectangle_128"
                    data-name="Rectangle 128"
                    width="10.48"
                    height="10.48"
                    transform="translate(100.663 112.014)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_129"
                    data-name="Rectangle 129"
                    width="10.48"
                    height="10.48"
                    transform="translate(114.985 112.014)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_130"
                    data-name="Rectangle 130"
                    width="10.48"
                    height="10.48"
                    transform="translate(129.311 112.014)"
                    fill="#05dec0"
                    opacity="0.7"
                  />
                  <rect
                    id="Rectangle_131"
                    data-name="Rectangle 131"
                    width="10.48"
                    height="10.48"
                    transform="translate(143.633 112.014)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_132"
                    data-name="Rectangle 132"
                    width="10.48"
                    height="10.48"
                    transform="translate(157.959 112.014)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_133"
                    data-name="Rectangle 133"
                    width="10.48"
                    height="10.48"
                    transform="translate(172.285 112.014)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_134"
                    data-name="Rectangle 134"
                    width="10.48"
                    height="10.48"
                    transform="translate(186.607 112.014)"
                    fill="#05dec0"
                  />
                  <rect
                    id="Rectangle_135"
                    data-name="Rectangle 135"
                    width="10.48"
                    height="10.48"
                    transform="translate(200.933 112.014)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_136"
                    data-name="Rectangle 136"
                    width="10.48"
                    height="10.48"
                    transform="translate(215.255 112.014)"
                    fill="#05dec0"
                  />
                  <rect
                    id="Rectangle_137"
                    data-name="Rectangle 137"
                    width="10.48"
                    height="10.48"
                    transform="translate(229.581 112.014)"
                    fill="#05dec0"
                  />
                  <rect
                    id="Rectangle_138"
                    data-name="Rectangle 138"
                    width="10.48"
                    height="10.48"
                    transform="translate(243.906 112.014)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_139"
                    data-name="Rectangle 139"
                    width="10.48"
                    height="10.48"
                    transform="translate(258.228 112.014)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_140"
                    data-name="Rectangle 140"
                    width="10.48"
                    height="10.48"
                    transform="translate(272.554 112.014)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_141"
                    data-name="Rectangle 141"
                    width="10.48"
                    height="10.48"
                    transform="translate(286.88 112.014)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_142"
                    data-name="Rectangle 142"
                    width="10.48"
                    height="10.48"
                    transform="translate(301.202 112.014)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_143"
                    data-name="Rectangle 143"
                    width="10.48"
                    height="10.48"
                    transform="translate(315.528 112.014)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_144"
                    data-name="Rectangle 144"
                    width="10.48"
                    height="10.48"
                    transform="translate(329.85 112.014)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_145"
                    data-name="Rectangle 145"
                    width="10.48"
                    height="10.48"
                    transform="translate(344.176 112.014)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_146"
                    data-name="Rectangle 146"
                    width="10.48"
                    height="10.48"
                    transform="translate(358.502 112.014)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_147"
                    data-name="Rectangle 147"
                    width="10.48"
                    height="10.48"
                    transform="translate(372.824 112.014)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_148"
                    data-name="Rectangle 148"
                    width="10.48"
                    height="10.48"
                    transform="translate(387.15 112.014)"
                    fill="#05dec0"
                    opacity="0.4"
                  />
                  <rect
                    id="Rectangle_149"
                    data-name="Rectangle 149"
                    width="10.48"
                    height="10.48"
                    transform="translate(401.471 112.014)"
                    fill="#05dec0"
                  />
                  <rect
                    id="Rectangle_150"
                    data-name="Rectangle 150"
                    width="10.48"
                    height="10.48"
                    transform="translate(43.364 125.292)"
                    fill="#05dec0"
                    opacity="0.7"
                  />
                  <rect
                    id="Rectangle_151"
                    data-name="Rectangle 151"
                    width="10.48"
                    height="10.48"
                    transform="translate(57.69 125.292)"
                    fill="#05dec0"
                    opacity="0.7"
                  />
                  <rect
                    id="Rectangle_152"
                    data-name="Rectangle 152"
                    width="10.48"
                    height="10.48"
                    transform="translate(72.012 125.292)"
                    fill="#05dec0"
                    opacity="0.7"
                  />
                  <rect
                    id="Rectangle_153"
                    data-name="Rectangle 153"
                    width="10.48"
                    height="10.48"
                    transform="translate(86.337 125.292)"
                    fill="#05dec0"
                    opacity="0.7"
                  />
                  <rect
                    id="Rectangle_154"
                    data-name="Rectangle 154"
                    width="10.48"
                    height="10.48"
                    transform="translate(100.663 125.292)"
                    fill="#05dec0"
                    opacity="0.7"
                  />
                  <rect
                    id="Rectangle_155"
                    data-name="Rectangle 155"
                    width="10.48"
                    height="10.48"
                    transform="translate(114.985 125.292)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_156"
                    data-name="Rectangle 156"
                    width="10.48"
                    height="10.48"
                    transform="translate(129.311 125.292)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_157"
                    data-name="Rectangle 157"
                    width="10.48"
                    height="10.48"
                    transform="translate(143.633 125.292)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_158"
                    data-name="Rectangle 158"
                    width="10.48"
                    height="10.48"
                    transform="translate(157.959 125.292)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_159"
                    data-name="Rectangle 159"
                    width="10.48"
                    height="10.48"
                    transform="translate(172.285 125.292)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_160"
                    data-name="Rectangle 160"
                    width="10.48"
                    height="10.48"
                    transform="translate(186.607 125.292)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_161"
                    data-name="Rectangle 161"
                    width="10.48"
                    height="10.48"
                    transform="translate(200.933 125.292)"
                    fill="#05dec0"
                  />
                  <rect
                    id="Rectangle_162"
                    data-name="Rectangle 162"
                    width="10.48"
                    height="10.48"
                    transform="translate(215.255 125.292)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_163"
                    data-name="Rectangle 163"
                    width="10.48"
                    height="10.48"
                    transform="translate(229.581 125.292)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_164"
                    data-name="Rectangle 164"
                    width="10.48"
                    height="10.48"
                    transform="translate(243.906 125.292)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_165"
                    data-name="Rectangle 165"
                    width="10.48"
                    height="10.48"
                    transform="translate(258.228 125.292)"
                    fill="#05dec0"
                  />
                  <rect
                    id="Rectangle_166"
                    data-name="Rectangle 166"
                    width="10.48"
                    height="10.48"
                    transform="translate(272.554 125.292)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_167"
                    data-name="Rectangle 167"
                    width="10.48"
                    height="10.48"
                    transform="translate(286.88 125.292)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_168"
                    data-name="Rectangle 168"
                    width="10.48"
                    height="10.48"
                    transform="translate(301.202 125.292)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_169"
                    data-name="Rectangle 169"
                    width="10.48"
                    height="10.48"
                    transform="translate(315.528 125.292)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_170"
                    data-name="Rectangle 170"
                    width="10.48"
                    height="10.48"
                    transform="translate(329.85 125.292)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_171"
                    data-name="Rectangle 171"
                    width="10.48"
                    height="10.48"
                    transform="translate(344.176 125.292)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_172"
                    data-name="Rectangle 172"
                    width="10.48"
                    height="10.48"
                    transform="translate(358.502 125.292)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_173"
                    data-name="Rectangle 173"
                    width="10.48"
                    height="10.48"
                    transform="translate(372.824 125.292)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_174"
                    data-name="Rectangle 174"
                    width="10.48"
                    height="10.48"
                    transform="translate(387.15 125.292)"
                    fill="#05dec0"
                    opacity="0.2"
                  />
                  <rect
                    id="Rectangle_175"
                    data-name="Rectangle 175"
                    width="10.48"
                    height="10.48"
                    transform="translate(401.471 125.292)"
                    fill="#05dec0"
                  />
                  <circle
                    id="Ellipse_1"
                    data-name="Ellipse 1"
                    cx="14.326"
                    cy="14.326"
                    r="14.326"
                    transform="translate(287.443 135.198)"
                    fill="#767d9f"
                  />
                  <path
                    id="Trac??_6"
                    data-name="Trac?? 6"
                    d="M760.184,445.14q2.145,9.359,3.64,18.857a10.984,10.984,0,0,1-.115,5.645,19.515,19.515,0,0,1-2.646,3.94c-.912,1.3-1.6,2.962-1.048,4.449s2.173,2.3,3.718,2.72c4.421,1.191,9.133.325,13.533-.966a21.893,21.893,0,0,0,5.674-2.35,21.235,21.235,0,0,0,4.8-4.519c6.413-7.777,10.612-17.111,14.564-26.388a16.072,16.072,0,0,1-13.6-5.481c-1.619-1.9-2.806-4.552-1.894-6.877-2.674,1.467-5.85,1.565-8.73,2.568a31.017,31.017,0,0,0-5.135,2.527q-2.95,1.705-5.867,3.476C764.851,444.08,762.768,445.271,760.184,445.14Z"
                    transform="translate(-459.158 -313.841)"
                    fill="#ae6e79"
                  />
                  <path
                    id="Trac??_7"
                    data-name="Trac?? 7"
                    d="M745.1,468.088c-2.51,4.885-5.776,9.581-10.439,12.489s-10.941,3.7-15.612.822c-2.3-1.405-4.043-3.541-6.052-5.341s-4.519-3.34-7.218-3.106c-2.974.259-5.3,2.58-7.3,4.8a57.069,57.069,0,0,0-8.085,10.9c-4.108,7.683-5.082,16.664-4.9,25.373s1.442,17.374,1.471,26.084c.041,10.715-1.775,21.343-3.611,31.9,16.885-2.079,33.791,2.465,50.714,4.186,10.83,1.113,21.742,1.089,32.629,1.06,1.914,0,3.952-.049,5.546-1.109a7.475,7.475,0,0,0,2.3-2.728,26.107,26.107,0,0,0,2.527-9.063,183.5,183.5,0,0,0,1.126-23.862c.074-19.309.144-38.689-2.309-57.846a54.52,54.52,0,0,0-3.184-13.858,21.737,21.737,0,0,0-8.882-10.826c-2.65-1.52-8.792-4.166-11.914-2.634C748.394,457.037,746.775,464.818,745.1,468.088Z"
                    transform="translate(-414.107 -326.034)"
                    fill="#707070"
                  />
                  <path
                    id="Trac??_8"
                    data-name="Trac?? 8"
                    d="M831.541,517.77c-.637-11.914-3.229-24.63,2.288-35.2,1.356-2.6-3.509-5.838-2-8.352a37.83,37.83,0,0,0,4.133-9.831,7.414,7.414,0,0,0,.267-3.636c-.546-2.173-2.7-3.467-4.519-4.79-2.013-1.463-3.048-5.92-3.7-8.332s5.164.493,7.5-.366c3.246-1.187,7.37-.44,10.608.764a17.708,17.708,0,0,0,5.7.772,75.071,75.071,0,0,0,11.212-.267,27.885,27.885,0,0,1,5.016-.431c4.277.242,7.995,3.168,10.526,6.627s4.141,7.49,6.216,11.236c1.73,3.122,3.792,6.072,5.267,9.322A57.4,57.4,0,0,1,893,484.32l2.108,7.884a10.508,10.508,0,0,1,.518,3.5,9.925,9.925,0,0,1-1.232,3.558,67.433,67.433,0,0,1-7.671,11.7c-4.433,5.435-9.815,10.337-12.448,16.844a42.546,42.546,0,0,0-2.12,7.917,290.833,290.833,0,0,0-4.478,32.518,71.561,71.561,0,0,0-15-5.016,72.921,72.921,0,0,0-7.806-1.233c-2.3-.238-5.259.214-7.444-.411-3.656-1.039-4.059-7.223-4.614-10.46a95.524,95.524,0,0,1-1.1-15.612C831.673,529.586,831.858,523.674,831.541,517.77Z"
                    transform="translate(-499.304 -321.189)"
                    fill="#333"
                  />
                  <path
                    id="Trac??_9"
                    data-name="Trac?? 9"
                    d="M590.36,557.586c1.73,9.86,3.636,19.749,7.4,29.013-.095.09-.189.173-.284.255-.333.283-.678.551-1.039.822a13.836,13.836,0,0,0-2.465,1.865,3.287,3.287,0,0,0-.616,1.007,2.251,2.251,0,0,0,0,1.836c-1.96.867-4.236.6-6.434.518a8.44,8.44,0,0,0-5.25,1.039c-2.112,1.454-2.749,4.248-3.09,6.787q-.189,1.389-.325,2.781-.131,1.294-.214,2.6a77.5,77.5,0,0,0-.078,8.628q.033.789.086,1.578c-6.713-.16-12.83-3.661-18.619-7.062a10.272,10.272,0,0,1-3.545-2.876,6.491,6.491,0,0,1-.949-4.228,4.64,4.64,0,0,1,.066-.624,17.076,17.076,0,0,1,.941-3.566,44.041,44.041,0,0,1,7.884-13.414c1.471-1.717,3.127-3.4,3.813-5.555.3-.941.411-1.939.715-2.876,1.364-4.059,6.286-5.978,7.97-9.918a30.138,30.138,0,0,1,1.109-2.876,7.245,7.245,0,0,1,1.746-1.951c.3-.251.612-.493.92-.735q4.33-3.393,8.344-7.169.748-.7,1.479-1.421A24.442,24.442,0,0,0,590.36,557.586Z"
                    transform="translate(-338.422 -383.285)"
                    fill="#333"
                  />
                  <path
                    id="Trac??_10"
                    data-name="Trac?? 10"
                    d="M682.029,481.722c-.592.625-1.233,1.212-1.861,1.8l-.168.152-.666.616a16.02,16.02,0,0,0-3.1,3.611l-.07.115c-2.1,3.751-1.319,8.369-.735,12.629a107.458,107.458,0,0,1,.974,16.023c-.107,7.4-.978,14.741-.994,22.128q0,2.514.111,5.024c.119,2.724.325,5.444.571,8.163.267,2.983.588,5.961.887,8.94.238,2.3.464,4.606.653,6.906.095,1.191.185,2.379.259,3.57.086,1.4.156,2.8.2,4.195h0c.029.887.045,1.771.045,2.658v1.508q0,1.442-.078,2.876-.082,1.845-.251,3.7a5.994,5.994,0,0,1-1.3,3.755c-.057.058-.119.111-.181.164l-1.331-.164a136.7,136.7,0,0,0-27.649-.493c.2-1.389.386-2.773.567-4.166.082-.657.164-1.319.242-1.98q.135-1.134.259-2.268.142-1.232.263-2.465.321-3.176.563-6.356.358-4.638.542-9.293.09-2.223.14-4.449.07-2.761.066-5.526,0-2.687-.045-5.382c0-.592-.025-1.183-.074-1.771a11.222,11.222,0,0,0-.218-1.574,20.481,20.481,0,0,0-1.233-3.484c-.09-.214-.177-.411-.263-.637-.049-.111-.095-.226-.14-.337a30.729,30.729,0,0,0,5.67-7.707c2.625-4.474,5.312-9.145,5.752-14.314s-2.128-10.974-7.066-12.551a34.323,34.323,0,0,0-4.15-.768,18.226,18.226,0,0,1-5.542-1.689q-1.233,1.265-2.465,2.486a9.1,9.1,0,0,1,.892-3.578l.583.029a1.115,1.115,0,0,1-.066-.411,2.159,2.159,0,0,1,.953-1.487c1.935-1.643,4.979-2.009,6.2-4.232a30.873,30.873,0,0,0,1.006-2.995c1.179-2.765,4.564-3.784,6.6-5.994s2.547-5.341,4.195-7.806a11.758,11.758,0,0,1,4.93-4.108c.164-.078.333-.156.5-.226A28.451,28.451,0,0,1,677,472.77c1.372,0,4.93.041,6.672.735a2.186,2.186,0,0,1,.76.464C686.29,475.991,683.4,480.259,682.029,481.722Z"
                    transform="translate(-388.691 -336.582)"
                    fill="#333"
                  />
                  <path
                    id="Trac??_11"
                    data-name="Trac?? 11"
                    d="M631.691,541.167a25.011,25.011,0,0,1,19.2,2,18.163,18.163,0,0,1,7.239,6.894c2.445,4.437,2.338,9.786,2.165,14.852-.086,2.535-.2,5.16-1.315,7.436-1.294,2.634-3.735,4.441-6.224,5.92a17.353,17.353,0,0,1-5.061,2.19c-2.761.6-5.629.09-8.41-.411-3.024-.559-6.269-1.232-8.369-3.484a14.3,14.3,0,0,1-2.572-4.663q-1.434-3.595-2.876-7.182c-1.664-4.154-2.227-7.609-.029-11.656,1-1.845,2.219-3.57,3.2-5.427C629.139,546.693,630.906,541.41,631.691,541.167Z"
                    transform="translate(-379.14 -376.254)"
                    fill="#333"
                  />
                  <path
                    id="Trac??_12"
                    data-name="Trac?? 12"
                    d="M517.454,680.835v12.284a68.735,68.735,0,0,1-26.594,5.259h-110.8c-.058.058-.119.111-.181.164l-1.331-.164H181.458a85.851,85.851,0,0,1-44.428-12.062V667.561l94.789-10.941h.074l55.2,4.675,14.285,1.232,7.42.629,15.357,1.3,7.9.67,11.5.978,1.619.136,8.291.7,11.249.924,15.817,1.339,26.368,2.239,18.549,1.573,30.46,2.584,5.793.489.625.053.542.045,7.65.649,8.4.715.974.082Z"
                    transform="translate(-92.237 -444.899)"
                    fill="#504f60"
                  />
                  <path
                    id="Trac??_13"
                    data-name="Trac?? 13"
                    d="M587.045,544.045,468.255,523.77l-4.605,23.29,54.453,6.52,16.766,2.1L580.99,546.6Z"
                    transform="translate(-273.165 -308.561)"
                    fill="#9c9ca1"
                  />
                  <path
                    id="Trac??_14"
                    data-name="Trac?? 14"
                    d="M642.33,723.845l59.514-11.187a2.054,2.054,0,0,1,2.44,2.026h0a2.054,2.054,0,0,1-1.68,2.025l-58.121,10.883Z"
                    transform="translate(-389.94 -477.893)"
                    fill="#9c9ca1"
                  />
                  <path
                    id="Trac??_15"
                    data-name="Trac?? 15"
                    d="M638.748,642.9a15.35,15.35,0,0,0,5.4-1.286c2.054-1.023,3.652-2.786,5.555-4.084a16.544,16.544,0,0,1,14.573-1.611,23.474,23.474,0,0,1,11.6,9.412c1.861,2.814,3.258,6.405,1.943,9.511a12.535,12.535,0,0,1-1.693,2.646l-3.426,4.478a11.916,11.916,0,0,1-2.325,2.5,9.881,9.881,0,0,1-4.445,1.545c-4.17.608-8.414.263-12.617.542-7.218.481-14.268,2.806-21.5,2.728a64.8,64.8,0,0,1-12.325-1.721l-17.982-3.7c-3.131-.641-6.668-1.578-8.143-4.417a10.239,10.239,0,0,1-.863-4.195c-.214-3.96,0-8.365,2.744-11.22,2.58-2.679,6.66-3.525,9.741-5.505,3.771-2.428,5.016-1.643,8.993.181A49.3,49.3,0,0,0,638.748,642.9Z"
                    transform="translate(-360.541 -432.129)"
                    fill="#ae6e79"
                  />
                  <path
                    id="Trac??_16"
                    data-name="Trac?? 16"
                    d="M638.748,642.9a15.35,15.35,0,0,0,5.4-1.286c2.054-1.023,3.652-2.786,5.555-4.084a16.544,16.544,0,0,1,14.573-1.611,23.474,23.474,0,0,1,11.6,9.412c1.861,2.814,3.258,6.405,1.943,9.511a12.535,12.535,0,0,1-1.693,2.646l-3.426,4.478a11.916,11.916,0,0,1-2.325,2.5,9.881,9.881,0,0,1-4.445,1.545c-4.17.608-8.414.263-12.617.542-7.218.481-14.268,2.806-21.5,2.728a64.8,64.8,0,0,1-12.325-1.721l-17.982-3.7c-3.131-.641-6.668-1.578-8.143-4.417a10.239,10.239,0,0,1-.863-4.195c-.214-3.96,0-8.365,2.744-11.22,2.58-2.679,6.66-3.525,9.741-5.505,3.771-2.428,5.016-1.643,8.993.181A49.3,49.3,0,0,0,638.748,642.9Z"
                    transform="translate(-360.541 -432.129)"
                    opacity="0.05"
                  />
                  <path
                    id="Trac??_17"
                    data-name="Trac?? 17"
                    d="M728.385,637.585a106.56,106.56,0,0,1-15.4,5.074c-8.858,1.951-18.126,1.643-26.914,3.874-4.643,1.183-9.256,3.09-14.026,2.7a42.031,42.031,0,0,1-6.265-1.315c-11.655-2.876-24.905-1.943-34.371,5.452a42.777,42.777,0,0,0-8.291,9.038,6.039,6.039,0,0,0,2.428,8.989,35.586,35.586,0,0,0,11.66,3.11c5.394.477,10.813-.288,16.179-1.052,7.962-1.13,15.928-2.264,23.87-3.533,2.851-.456,5.7-.928,8.57-1.29,20.636-2.609,41.647.563,62.337-1.615a19.046,19.046,0,0,0,6.122-1.4c4.815-2.26,7.2-8.217,6.2-13.451s-4.831-9.585-9.449-12.255c-3.87-2.247-8.044-3.155-12.354-4.108C734.679,634.873,732.239,636.106,728.385,637.585Z"
                    transform="translate(-377.965 -432.446)"
                    fill="#ae6e79"
                  />
                  <path
                    id="Trac??_18"
                    data-name="Trac?? 18"
                    d="M911.491,539.314c2.276,2.983,2.761,6.984,2.514,10.719s-1.134,7.428-1.265,11.179c-.181,5.144,1.06,10.271.85,15.4a44.3,44.3,0,0,1-2.005,10.546c-1.187,4.063-2.9,8.43-6.655,10.382-4.979,2.592-15.423,1.134-20.661,3.163.477-2.97,5.045-7.272,5.522-10.242a19.13,19.13,0,0,0,.308-6.224,13.765,13.765,0,0,0-3.821-6.894,20.16,20.16,0,0,0-10.875-6.163c-4.17-.756-14.379-.136-17.715,2.5-.411-2.72,7.231-5.341,9.918-5.928,1.339-.3,2.876-.132,3.948-.982,2.054-1.61.563-4.819.661-7.4.078-2.054,1.278-3.936,1.52-5.99.411-3.287-1.734-6.635-.891-9.86a25.552,25.552,0,0,1,1.487-3.373c1.463-3.472.822-7.432.041-11.121-.485-2.317-.957-4.93.333-6.906,1.2-1.845,4.589,4.725,6.762,4.421,7.177-1.006,13.673-6.327,19.47-1.972,2.954,2.219,3.34,4.519,4.519,7.687C906.6,535.272,909.572,536.816,911.491,539.314Z"
                    transform="translate(-516.81 -365.465)"
                    opacity="0.1"
                  />
                  <path
                    id="Trac??_19"
                    data-name="Trac?? 19"
                    d="M914.491,535.331c2.276,2.983,2.761,6.984,2.514,10.719s-1.134,7.428-1.265,11.179c-.181,5.144,1.06,10.271.85,15.4a44.3,44.3,0,0,1-2,10.546c-1.187,4.063-2.9,8.43-6.656,10.382-4.979,2.592-15.423,1.134-20.661,3.163.477-2.97,5.045-7.272,5.522-10.242a19.13,19.13,0,0,0,.308-6.224,13.765,13.765,0,0,0-3.821-6.894A20.161,20.161,0,0,0,878.4,567.2c-4.17-.756-14.379-.136-17.715,2.5-.411-2.72,7.231-5.341,9.918-5.928,1.339-.3,2.876-.132,3.948-.982,2.054-1.61.563-4.819.661-7.4.078-2.054,1.278-3.936,1.52-5.99.411-3.287-1.734-6.635-.892-9.86a25.565,25.565,0,0,1,1.487-3.373c1.463-3.472.822-7.432.041-11.121-.485-2.317-.957-4.93.333-6.906,1.2-1.845,3.533-2.543,5.706-2.851a28.11,28.11,0,0,1,20.542,5.3c2.954,2.219,3.34,4.519,4.519,7.687C909.6,531.288,912.572,532.833,914.491,535.331Z"
                    transform="translate(-518.578 -361.482)"
                    fill="#333"
                  />
                  <path
                    id="Trac??_20"
                    data-name="Trac?? 20"
                    d="M329.742,497.178l22.337,82.554a5.156,5.156,0,0,0,4.482,3.784l100.54,9.659a5.152,5.152,0,0,0,5.5-6.36l-24.461-99.579a5.152,5.152,0,0,0-5.39-3.907l-98.433,7.362a5.152,5.152,0,0,0-4.573,6.487Z"
                    transform="translate(-205.669 -342.794)"
                    fill="#9c9ca1"
                  />
                  <ellipse
                    id="Ellipse_2"
                    data-name="Ellipse 2"
                    cx="11.052"
                    cy="11.195"
                    rx="11.052"
                    ry="11.195"
                    transform="translate(312.323 148.102)"
                    fill="#fff"
                  />
                  <path
                    id="Trac??_21"
                    data-name="Trac?? 21"
                    d="M829.423,479.057s2.329,6.927-4.544,9.84L824,490.433l4.305,4.248s5.308-9.684,4.733-13.122C833.039,481.559,832.217,478.066,829.423,479.057Z"
                    transform="translate(-496.973 -340.182)"
                    fill="#fff"
                  />
                  <circle
                    id="Ellipse_3"
                    data-name="Ellipse 3"
                    cx="10.657"
                    cy="10.657"
                    r="10.657"
                    transform="translate(313.987 149.179)"
                    fill="#05dec0"
                  />
                  <path
                    id="Trac??_22"
                    data-name="Trac?? 22"
                    d="M826.723,458.505l-1.693-2.794-2.465-.349c.526-9.2-1.861-11.939-1.861-11.939l-.555-.053-2.416-.234-4.544-4.716V437.08c6.384.76,9.914,3.792,11.82,7.346C828.379,450.662,826.723,458.505,826.723,458.505Z"
                    transform="translate(-490.604 -315.555)"
                    fill="#05dec0"
                  />
                  <path
                    id="Trac??_23"
                    data-name="Trac?? 23"
                    d="M820.2,443.6v1.693l-2.416-.234-4.544-4.716S820.269,441.914,820.2,443.6Z"
                    transform="translate(-490.633 -317.476)"
                    stroke="#4c4981"
                    stroke-miterlimit="10"
                    stroke-width="1"
                    opacity="0.1"
                  />
                  <path
                    id="Trac??_24"
                    data-name="Trac?? 24"
                    d="M843.7,469.063l-1.693-2.794V455C845.358,461.22,843.7,469.063,843.7,469.063Z"
                    transform="translate(-507.583 -326.113)"
                    stroke="#4c4981"
                    stroke-miterlimit="10"
                    stroke-width="1"
                    opacity="0.1"
                  />
                  <ellipse
                    id="Ellipse_4"
                    data-name="Ellipse 4"
                    cx="5.928"
                    cy="10.813"
                    rx="5.928"
                    ry="10.813"
                    transform="translate(289.006 148.453) rotate(-30)"
                    fill="#fff"
                  />
                  <path
                    id="Trac??_25"
                    data-name="Trac?? 25"
                    d="M744.417,503.96c2.987,5.173,6.651,8.628,3.817,10.271s-11.093.822-14.079-4.355-.275-12.325,2.56-13.968S741.426,498.775,744.417,503.96Z"
                    transform="translate(-443.273 -350.012)"
                    fill="#05dec0"
                  />
                  <path
                    id="Trac??_26"
                    data-name="Trac?? 26"
                    d="M742.888,386c0,16.528-11.31,32.456-27.838,32.456a29.93,29.93,0,0,1,0-59.859C731.578,358.616,742.888,369.471,742.888,386Z"
                    transform="translate(-415.15 -269.318)"
                    opacity="0.1"
                  />
                  <circle
                    id="Ellipse_5"
                    data-name="Ellipse 5"
                    cx="29.93"
                    cy="29.93"
                    r="29.93"
                    transform="translate(269.97 88.477)"
                    fill="#ae6e79"
                  />
                  <path
                    id="Trac??_27"
                    data-name="Trac?? 27"
                    d="M694.483,341.293c3.562,1.311,5.669,4.992,8.866,7.042,4.519,2.876,10.4,2.132,15.563.711,2.876-.785,5.883-1.742,8.714-.871a2.467,2.467,0,0,0,1.327.189c.616-.177.92-.859,1.122-1.467,3.5-10.435,1.927-22.255-3.357-31.91a20.624,20.624,0,0,0-5.25-6.627,21.9,21.9,0,0,0-5.965-3.011,59.568,59.568,0,0,0-11.865-2.929,7.369,7.369,0,0,0-2.165-.07,9.065,9.065,0,0,0-2.761,1.171,28.258,28.258,0,0,1-12.268,3.332c-5.752.218-12.325-1.138-16.758,2.551-5.341,4.425-4.01,13.056-7.473,19.063-2.293,3.973-6.713,6.857-7.44,11.38a10.5,10.5,0,0,0,.259,4.137,16.835,16.835,0,0,0,15.612,12.477,5.924,5.924,0,0,0,3.188-.653,7.21,7.21,0,0,0,1.68-1.6C680.214,348.639,685.6,338.023,694.483,341.293Z"
                    transform="translate(-397.212 -236.148)"
                    fill="#444053"
                  />
                  <path
                    id="Trac??_28"
                    data-name="Trac?? 28"
                    d="M730.056,388.792c-.2.608-.505,1.29-1.122,1.467a2.465,2.465,0,0,1-1.327-.189c-2.831-.871-5.854.086-8.71.871-5.164,1.422-11.06,2.182-15.563-.711-3.2-2.054-5.3-5.752-8.87-7.042-8.886-3.287-14.268,7.346-18.985,12.917a7.211,7.211,0,0,1-1.68,1.6,5.924,5.924,0,0,1-3.188.653A16.879,16.879,0,0,1,655,385.879c-.094-.411-.177-.822-.238-1.233a.2.2,0,0,1-.021.107,10.507,10.507,0,0,0,.259,4.137,16.839,16.839,0,0,0,15.612,12.477,5.924,5.924,0,0,0,3.188-.653,7.207,7.207,0,0,0,1.68-1.6c4.716-5.571,10.1-16.187,18.985-12.917,3.566,1.311,5.67,4.992,8.87,7.042,4.519,2.876,10.4,2.132,15.563.711,2.876-.785,5.879-1.742,8.71-.871a2.466,2.466,0,0,0,1.327.189c.616-.177.92-.859,1.122-1.467A37.094,37.094,0,0,0,731.9,378.55,36.485,36.485,0,0,1,730.056,388.792Z"
                    transform="translate(-397.194 -281.071)"
                    opacity="0.1"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
        {/* About me */}
        <div id="about-me" className="pt-28 2xl:w-9/12 2xl:mx-auto">
          <h1 className="text-black font-semibold text-center text-5xl mb-12 dark:text-white">
            About me
          </h1>
          <div className="flex flex-col items-center justify-center lg:flex-row lg:mt-24">
            <span className="mb-12 lg:m-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="270.011"
                height="143.693"
                viewBox="0 0 270.011 143.693"
              >
                <defs>
                  <linearGradient
                    id="linear-gradient"
                    x1="0.5"
                    y1="1"
                    x2="0.5"
                    y2="-0.001"
                    gradientUnits="objectBoundingBox"
                  >
                    <stop offset="0" stop-color="gray" stop-opacity="0.251" />
                    <stop
                      offset="0.54"
                      stop-color="gray"
                      stop-opacity="0.122"
                    />
                    <stop offset="1" stop-color="gray" stop-opacity="0.102" />
                  </linearGradient>
                </defs>
                <g
                  id="undraw_programming_2svr_1_"
                  data-name="undraw_programming_2svr (1)"
                  transform="translate(-0.011 -0.035)"
                >
                  <path
                    id="Trac??_169"
                    data-name="Trac?? 169"
                    d="M328.667,286.567q-.451.972-.9,1.919-.7,1.47-1.382,2.884c-.2.417-.4.827-.6,1.237-2.23,4.556-4.312,8.586-6.081,11.9a18.984,18.984,0,0,1-16.546,10.035l-39.324.428h-.415l-3.371.036-2.884.031-8.842.1h-.358l-4.5.049h-.137l-27.746.3-24.767.259-2.881.031-17.892.194h-.021l-11.6.124h-.124l-36.692.4-10.977.119a22.837,22.837,0,0,1-6.916-.991A22.4,22.4,0,0,1,93.568,309.2a51.846,51.846,0,0,1-10.458-17.83q-.5-1.424-.934-2.884c-7.989-27.007,1.75-61.85,19.28-85.167q1.1-1.462,2.24-2.852l.018-.021a71.842,71.842,0,0,1,17.874-16.077c11.41-6.978,24.051-8.944,36.485-3.086a81.614,81.614,0,0,0,29.865,7.922c.962.062,1.924.109,2.881.137,21.842.687,42.311-7.183,66.349-12.263.957-.2,1.916-.4,2.884-.591,17.148-3.412,36.171-5.212,58.793-1.429a49.033,49.033,0,0,1,6.939,1.66q1.5.482,2.883,1.037c10.8,4.393,16.686,12.509,19.189,22.679q.355,1.416.615,2.881C352.908,227.78,339.914,262.48,328.667,286.567Z"
                    transform="translate(-79.34 -172.91)"
                    fill="#05dec0"
                    opacity="0.1"
                  />
                  <g
                    id="Groupe_17"
                    data-name="Groupe 17"
                    transform="translate(2.837 3.571)"
                    opacity="0.1"
                  >
                    <path
                      id="Trac??_170"
                      data-name="Trac?? 170"
                      d="M191.132,217V349.149l-10.977.119a22.837,22.837,0,0,1-6.916-.991v-115.2h.018A71.538,71.538,0,0,1,191.132,217Z"
                      transform="translate(-151.72 -209.112)"
                      fill="#05dec0"
                    />
                    <path
                      id="Trac??_171"
                      data-name="Trac?? 171"
                      d="M411.627,281.873H164.6q1.1-1.463,2.24-2.852V279H411.013Q411.368,280.408,411.627,281.873Z"
                      transform="translate(-145.32 -255.035)"
                      fill="#05dec0"
                    />
                    <path
                      id="Trac??_172"
                      data-name="Trac?? 172"
                      d="M1032.583,188.518V299.242h-.9q-.7,1.47-1.382,2.883c-.2.417-.4.827-.6,1.237V187.47Q1031.2,187.952,1032.583,188.518Z"
                      transform="translate(-786.093 -187.239)"
                      fill="#05dec0"
                    />
                    <path
                      id="Trac??_173"
                      data-name="Trac?? 173"
                      d="M767.974,186.58V325.115l-2.883.031V187.171C766.047,186.969,767.006,186.769,767.974,186.58Z"
                      transform="translate(-590.099 -186.58)"
                      fill="#05dec0"
                    />
                    <path
                      id="Trac??_174"
                      data-name="Trac?? 174"
                      d="M500.991,235.757V362.191l-2.881.031V235.62C499.072,235.682,500.034,235.719,500.991,235.757Z"
                      transform="translate(-392.349 -222.904)"
                      fill="#05dec0"
                    />
                    <path
                      id="Trac??_175"
                      data-name="Trac?? 175"
                      d="M335.841,618.52q-.7,1.47-1.382,2.883H91.184q-.5-1.424-.934-2.883Z"
                      transform="translate(-90.25 -506.515)"
                      fill="#05dec0"
                    />
                  </g>
                  <rect
                    id="Rectangle_211"
                    data-name="Rectangle 211"
                    width="4.927"
                    height="14.952"
                    transform="translate(54.878 68.958)"
                    fill="#3f3d56"
                  />
                  <rect
                    id="Rectangle_212"
                    data-name="Rectangle 212"
                    width="4.927"
                    height="15.818"
                    transform="translate(187.469 68.18)"
                    fill="#3f3d56"
                  />
                  <path
                    id="Trac??_176"
                    data-name="Trac?? 176"
                    d="M302.4,512.54v3.371L263,516.274l-.42.008-14.972.137-.358.005-4.551.039h-.135l-27.741.257-45.537.423h-.039l-11.578.109-.124,0-51.447.472v-3.89l12.1-7.261,24.271-.2.519,0,.171,0,.519-.008,11.653-.1.521,0,.166,0,.519,0,3.737-.031.1,0,9.218-.078h.075l71.932-.607,1.761-.013h.176l1.343-.013,9.763-.08.519-.008.48-.005h.249l3.036-.023.6-.008.806-.005,2.528-.023,4.011-.034.519-.005.9-.005h.169l19.373-.166Z"
                    transform="translate(-78.579 -374.135)"
                    fill="#65617d"
                  />
                  <path
                    id="Trac??_177"
                    data-name="Trac?? 177"
                    d="M302.4,512.54v3.371L263,516.274l-.42.008-14.972.137-.358.005-4.551.039h-.135l-27.741.257-45.537.423h-.039l-11.578.109-.124,0-51.447.472v-3.89l12.1-7.261,24.271-.2.519,0,.171,0,.519-.008,11.653-.1.521,0,.166,0,.519,0,3.737-.031.1,0,9.218-.078h.075l71.932-.607,1.761-.013h.176l1.343-.013,9.763-.08.519-.008.48-.005h.249l3.036-.023.6-.008.806-.005,2.528-.023,4.011-.034.519-.005.9-.005h.169l19.373-.166Z"
                    transform="translate(-78.579 -374.135)"
                    opacity="0.2"
                  />
                  <path
                    id="Trac??_178"
                    data-name="Trac?? 178"
                    d="M340.5,656.57v6.35a1.589,1.589,0,0,1-.908,1.437,1.556,1.556,0,0,1-.648.156l-9.05.192a1.556,1.556,0,0,1-.7-.148,1.587,1.587,0,0,1-.926-1.444V656.57Z"
                    transform="translate(-263.712 -531.127)"
                    fill="#3f3d56"
                  />
                  <path
                    id="Trac??_179"
                    data-name="Trac?? 179"
                    d="M340.5,656.57v6.35a1.589,1.589,0,0,1-.908,1.437,1.556,1.556,0,0,1-.648.156l-9.05.192a1.556,1.556,0,0,1-.7-.148,1.587,1.587,0,0,1-.926-1.444V656.57Z"
                    transform="translate(-263.712 -531.127)"
                    opacity="0.1"
                  />
                  <path
                    id="Trac??_180"
                    data-name="Trac?? 180"
                    d="M342.5,656.57v6.35a1.589,1.589,0,0,1-.908,1.437,1.556,1.556,0,0,1-.648.156l-9.05.192a1.556,1.556,0,0,1-.7-.148,1.587,1.587,0,0,1-.926-1.444V656.57Z"
                    transform="translate(-265.194 -531.127)"
                    fill="#3f3d56"
                  />
                  <rect
                    id="Rectangle_213"
                    data-name="Rectangle 213"
                    width="12.232"
                    height="8.168"
                    transform="translate(176.579 125.443)"
                    fill="#3f3d56"
                  />
                  <rect
                    id="Rectangle_214"
                    data-name="Rectangle 214"
                    width="12.232"
                    height="8.168"
                    transform="translate(176.579 125.443)"
                    opacity="0.1"
                  />
                  <rect
                    id="Rectangle_215"
                    data-name="Rectangle 215"
                    width="12.232"
                    height="8.168"
                    transform="translate(176.06 125.443)"
                    fill="#3f3d56"
                  />
                  <path
                    id="Trac??_181"
                    data-name="Trac?? 181"
                    d="M216.527,265.82v1.486l-4.927-.127V265.82Z"
                    transform="translate(-156.722 -196.865)"
                    opacity="0.1"
                  />
                  <path
                    id="Trac??_182"
                    data-name="Trac?? 182"
                    d="M273.775,264.489l-5.92,42.527a1.115,1.115,0,0,1-1.133.962l-47.4-1.229-.9-.023a1.115,1.115,0,0,1-1.079-1.263l6.646-44.518a1.115,1.115,0,0,1,1.177-.941l47.573,3.221a1.112,1.112,0,0,1,1.037,1.265Z"
                    transform="translate(-181.542 -237.391)"
                    fill="#65617d"
                  />
                  <path
                    id="Trac??_183"
                    data-name="Trac?? 183"
                    d="M161.612,99.16,156.6,138.4l43.564,1.382,5.357-37.859Z"
                    transform="translate(-115.984 -73.421)"
                    fill="#05dec0"
                  />
                  <rect
                    id="Rectangle_216"
                    data-name="Rectangle 216"
                    width="53.073"
                    height="44.946"
                    rx="5.33"
                    transform="translate(99.738 25.132)"
                    fill="#65617d"
                  />
                  <rect
                    id="Rectangle_217"
                    data-name="Rectangle 217"
                    width="48.231"
                    height="37.426"
                    transform="translate(102.243 28.158)"
                    fill="#05dec0"
                  />
                  <path
                    id="Trac??_184"
                    data-name="Trac?? 184"
                    d="M727.857,262.82v.983l-4.927.1V262.82Z"
                    transform="translate(-535.461 -194.643)"
                    opacity="0.1"
                  />
                  <path
                    id="Trac??_185"
                    data-name="Trac?? 185"
                    d="M751.874,302.439a.8.8,0,0,1-.778.851l-48.542,1a.8.8,0,0,1-.812-.723l-4.172-43.377a.8.8,0,0,1,.757-.874l48.174-2.4.519-.026a.8.8,0,0,1,.835.726Z"
                    transform="translate(-537.247 -235.092)"
                    fill="#65617d"
                  />
                  <path
                    id="Trac??_186"
                    data-name="Trac?? 186"
                    d="M628.93,96.983l44-2.163,3.716,39.415-43.649,1.037Z"
                    transform="translate(-465.835 -70.207)"
                    fill="#05dec0"
                  />
                  <path
                    id="Trac??_187"
                    data-name="Trac?? 187"
                    d="M891.653,302.439a.8.8,0,0,1-.778.851l-4.595-46.367.519-.026a.8.8,0,0,1,.835.726Z"
                    transform="translate(-677.026 -235.092)"
                    opacity="0.1"
                  />
                  <path
                    id="Trac??_188"
                    data-name="Trac?? 188"
                    d="M225.173,259.991l-5.853,46.748-.9-.023a1.115,1.115,0,0,1-1.079-1.263l6.646-44.518A1.115,1.115,0,0,1,225.173,259.991Z"
                    transform="translate(-181.542 -237.382)"
                    opacity="0.1"
                  />
                  <rect
                    id="Rectangle_218"
                    data-name="Rectangle 218"
                    width="4.927"
                    height="4.429"
                    transform="translate(54.878 79.48)"
                    opacity="0.1"
                  />
                  <path
                    id="Trac??_189"
                    data-name="Trac?? 189"
                    d="M263.162,483.65v1.289l-12.232.327V483.65Z"
                    transform="translate(-185.854 -358.21)"
                    opacity="0.1"
                  />
                  <path
                    id="Trac??_190"
                    data-name="Trac?? 190"
                    d="M312.922,482.344V525.96a1.037,1.037,0,0,1-1,1.024l-49.7,1.323h-.013a1.037,1.037,0,0,1-1.024-1.024V482.344a1.037,1.037,0,0,1,1.024-1.024H311.9A1.037,1.037,0,0,1,312.922,482.344Z"
                    transform="translate(-214.027 -401.321)"
                    fill="#65617d"
                  />
                  <path
                    id="Trac??_191"
                    data-name="Trac?? 191"
                    d="M262.227,481.32v46.987h-.013a1.037,1.037,0,0,1-1.024-1.024V482.344a1.037,1.037,0,0,1,1.024-1.024Z"
                    transform="translate(-214.027 -401.321)"
                    opacity="0.1"
                  />
                  <path
                    id="Trac??_192"
                    data-name="Trac?? 192"
                    d="M194.6,319.15h46.027v38.442L194.6,358.63Z"
                    transform="translate(-144.131 -236.366)"
                    fill="#d4dfec"
                  />
                  <rect
                    id="Rectangle_219"
                    data-name="Rectangle 219"
                    width="4.927"
                    height="4.517"
                    transform="translate(187.469 79.48)"
                    opacity="0.1"
                  />
                  <path
                    id="Trac??_193"
                    data-name="Trac?? 193"
                    d="M691.162,483.65v1.662l-12.232-.327V483.65Z"
                    transform="translate(-502.87 -358.21)"
                    opacity="0.1"
                  />
                  <path
                    id="Trac??_194"
                    data-name="Trac?? 194"
                    d="M719.892,482.344v44.938a1.037,1.037,0,0,1-1.037,1.024h0l-49.707-1.322a1.037,1.037,0,0,1-1-1.024V482.344a1.037,1.037,0,0,1,1.024-1.024h49.683A1.037,1.037,0,0,1,719.892,482.344Z"
                    transform="translate(-515.459 -401.321)"
                    fill="#65617d"
                  />
                  <path
                    id="Trac??_195"
                    data-name="Trac?? 195"
                    d="M864.727,482.344v44.938a1.037,1.037,0,0,1-1.037,1.024h0V481.32h0a1.037,1.037,0,0,1,1.037,1.024Z"
                    transform="translate(-660.294 -401.321)"
                    opacity="0.1"
                  />
                  <path
                    id="Trac??_196"
                    data-name="Trac?? 196"
                    d="M644.127,319.15H598.1v38.442l46.027,1.037Z"
                    transform="translate(-443 -236.366)"
                    fill="#d4dfec"
                  />
                  <path
                    id="Trac??_197"
                    data-name="Trac?? 197"
                    d="M515.422,482.344V525.96a1.037,1.037,0,0,1-1,1.024l-49.7,1.323h0a1.037,1.037,0,0,1-1.037-1.024V482.344a1.037,1.037,0,0,1,1.024-1.024H514.4A1.037,1.037,0,0,1,515.422,482.344Z"
                    transform="translate(-364.017 -401.321)"
                    fill="#65617d"
                  />
                  <path
                    id="Trac??_198"
                    data-name="Trac?? 198"
                    d="M397.1,319.15h46.027v38.442L397.1,358.63Z"
                    transform="translate(-294.121 -236.366)"
                    fill="#d4dfec"
                  />
                  <path
                    id="Trac??_199"
                    data-name="Trac?? 199"
                    d="M302.4,533.65v3.371L263,537.384l-.42.008-14.972.137-.358.005-4.551.039h-.135l-27.741.257-45.537.423h-.039l-11.578.109-.124,0-51.447.472v-3.89l52.512-.345h.124l10.629-.073h.049l73.4-.485h.075l.044,0h.122l1.242-.008h.379L264,533.9l1.141-.005.254,0Z"
                    transform="translate(-78.579 -395.244)"
                    opacity="0.1"
                  />
                  <circle
                    id="Ellipse_9"
                    data-name="Ellipse 9"
                    cx="13.31"
                    cy="13.31"
                    r="13.31"
                    transform="translate(113.048 57.289)"
                    fill="#fbbebe"
                  />
                  <path
                    id="Trac??_200"
                    data-name="Trac?? 200"
                    d="M383.74,445.77a.321.321,0,0,1,.026-.091c.259-.931.721-2.5,1.066-3.763.044-.156.086-.309.124-.454.381-1.418,1.123-4.74,1.535-6.812.145-.729.259-1.3.283-1.582a43.17,43.17,0,0,1,1.717-4.468c.62-1.514,1.3-3.169,1.792-4.564a15.914,15.914,0,0,0,.76-2.554,1.322,1.322,0,0,0,0-.552,3.811,3.811,0,0,1-.124-.908h0a10.715,10.715,0,0,1,1.162-5.215c.908-1.3,1.556-6.135,1.556-6.135s1.343.194,1.556-.915a1.6,1.6,0,0,0,.026-.363,1.922,1.922,0,0,0-.023-.288c-.231-1.618,3.817-3.34,6.094-3.711a5.1,5.1,0,0,1,.778-.073,7.063,7.063,0,0,0,1.621-.373q.363-.112.778-.259c.954-.322,2.1-.747,3.306-1.214,4.553-1.766,10.066-4.149,10.066-4.149.039-.184.083-.36.132-.534a7.186,7.186,0,0,1,4.24-4.909h0v-.519c0-.895-.039-1.815-.078-2.733,0-.179-.016-.358-.026-.537V387.8c0-.182-.018-.363-.029-.542l-.047-.036a4.255,4.255,0,0,1-1.011-1.089,3.957,3.957,0,0,1-.368-.778,23.759,23.759,0,0,1-.617-2.788l-.047-.192a21.783,21.783,0,0,0-1.037-2.743c-.573-1.405-1.014-2.852-1.452-4.318q-.4-1.33-.806-2.666l-.41-1.359c-.078-.259-.156-.519-.215-.778h0a3.433,3.433,0,0,1-.067-.363h0a2.593,2.593,0,0,1,.062-1.2,8.325,8.325,0,0,1,.342-.778,2.042,2.042,0,0,0,.13-.358h0a.781.781,0,0,0,.021-.083,1.465,1.465,0,0,0,.029-.28,4.789,4.789,0,0,0-.135-1.009.018.018,0,0,1,0-.013.666.666,0,0,0-.013-.07,6.61,6.61,0,0,1-.093-.778,7.378,7.378,0,0,1,.9-4.037l.049-.093a6.542,6.542,0,0,1,.477-.721h0a3.646,3.646,0,0,1,.259-.316,1.035,1.035,0,0,1-1.439-.373.992.992,0,0,1-.06-.117c-.013-.031-.023-.065-.034-.1a2.119,2.119,0,0,1,.55-1.828,4.794,4.794,0,0,1,1.488-1.219h0a.993.993,0,0,1,.1-.054,4.438,4.438,0,0,1,.685-.275h0a3.894,3.894,0,0,1,.423-.114l-.962-.088-.389-.036a3.757,3.757,0,0,1,3.371-2.829h.28a3.041,3.041,0,0,1,.407.034,1.151,1.151,0,0,1-.687-1.123,3.737,3.737,0,0,0,2.383.793h.1a7.784,7.784,0,0,1-.088-.848h0a8.6,8.6,0,0,1,0-1.157,2.188,2.188,0,0,0,1.758.586l-.539-.752a2.461,2.461,0,0,0,1.7.532l.124-.013a1.817,1.817,0,0,0,.309-.06h.023c-.049-.062-.093-.127-.137-.194l-.016-.031a2.507,2.507,0,0,1-.259-.542,1.709,1.709,0,0,1-.062-.226h0a2.269,2.269,0,0,1,.117-1.413c.838.7,1.755,1.657,2.852.934s1.133-2.051,2.852-1.916a2.645,2.645,0,0,1,2.181,1.587,1.75,1.75,0,0,1,1.989-.454,1.776,1.776,0,0,1,1.006,1.787,3.583,3.583,0,0,1,2.165-.086,1.264,1.264,0,0,1,.736,1.727.368.368,0,0,1-.036.052c-.319.412-1.024.638-.949,1.157l.109.078.337.244q1.984,1.431,3.864,3.008a3.127,3.127,0,0,1,1.372,2.03,2.242,2.242,0,0,1-.062.615h0c-.041.2-.1.4-.143.607a5.06,5.06,0,0,0-.088,1.569h0c.018.153.041.3.07.456.4,2,2,3.659,2.157,5.7v.145a4.608,4.608,0,0,1-.018.656,14,14,0,0,1-1.162,3.63c-.029.073-.057.145-.083.218a36.121,36.121,0,0,0-1.815,7.3,26,26,0,0,1-.519,2.616,6.932,6.932,0,0,1-1.32,2.7,4.207,4.207,0,0,1-.871.778,4.836,4.836,0,0,1-.687.366v.016c.029.158.052.316.08.475.016.083.029.166.044.259h0a.037.037,0,0,0,0,.016c.218,1.227.467,2.427.729,3.568l.132.568c3.267,1.18,3.654,3.6,3.677,4.522a2.5,2.5,0,0,1,0,.371s4.927.13,6.872,1.556a5.271,5.271,0,0,0,1.169.6,21.528,21.528,0,0,0,2.4.749c.417.109.853.215,1.3.319.778.179,1.6.353,2.4.519,2.124.428,4.123.778,5.137,1.037,2.419.612,7.953,5.917,7.953,5.917s.648,5.352,1.3,6.133a23.131,23.131,0,0,1,1.815,3.524l4.289,7.626,1.815,3.208h1.167a1.984,1.984,0,0,1,.832.545c.309.275.651.617.952.928l.5.532.311.345a2.691,2.691,0,0,1,2.4,1.538,11.7,11.7,0,0,1,4.74.648,3.67,3.67,0,0,1,.519.28,2.251,2.251,0,0,1,1.071,1.468,2.166,2.166,0,0,1,.047.373v.441a7.231,7.231,0,0,1-2.546,4.7l.083.148s-.039.093-.114.259c-.021.049-.047.1-.075.166h0c-.153.327-.4.817-.716,1.39a16.417,16.417,0,0,1-2.482,3.415l-.075.078-14.972.137-.044-.052-2.9-3.464-1.444-1.722-.044-.054-.042.412-.14,1.374-.337,3.322-.018.166v.044l-.039.384.029-.384h-.075l-27.746.259-45.54.5v.218h-.036v-.218l-11.6.124Z"
                    transform="translate(-304.799 -302.56)"
                    fill="url(#linear-gradient)"
                  />
                  <path
                    id="Trac??_201"
                    data-name="Trac?? 201"
                    d="M550.8,468.573s-25.8,3.112-23.338,0c.892-1.125,1.138-4.46,1.089-8.259-.016-1.154-.057-2.349-.117-3.54-.285-5.7-.972-11.28-.972-11.28s22.56-10.632,19.967-2.2c-1.037,3.4-.7,8.186.091,12.675.231,1.309.5,2.593.778,3.812a89.347,89.347,0,0,0,2.5,8.8Z"
                    transform="translate(-411.133 -370.747)"
                    fill="#fbbebe"
                  />
                  <path
                    id="Trac??_202"
                    data-name="Trac?? 202"
                    d="M550.8,523.186s-25.8,3.112-23.338,0c.892-1.125,1.138-4.46,1.089-8.259,3.934-1.68,8.938-.428,8.938-.428,5.269-1.05,8.648-.845,10.808-.109A89.342,89.342,0,0,0,550.8,523.186Z"
                    transform="translate(-411.133 -425.36)"
                    opacity="0.1"
                  />
                  <path
                    id="Trac??_203"
                    data-name="Trac?? 203"
                    d="M395.816,570.117V569.9l45.54-.5,27.746-.259h.078l-.029.384.039-.384h.049V569.1l.355-3.488.135-1.32.041-.412.036-.345,1.6-5.344,1.6-5.337,1.348-4.494,2.059-6.866a23.042,23.042,0,0,0-1.815-3.5c-.648-.778-1.3-6.094-1.3-6.094s-5.534-5.272-7.953-5.878c-1.014-.259-3.016-.6-5.142-1.037-.8-.161-1.613-.332-2.4-.519-.443-.1-.879-.207-1.3-.314a22.781,22.781,0,0,1-2.4-.742,5.369,5.369,0,0,1-1.167-.594c-1.906-1.4-6.682-1.556-6.866-1.556h0a.106.106,0,0,1,0-.018v-.023a2.658,2.658,0,0,0,0-.327,2.084,2.084,0,0,0-.023-.363.328.328,0,0,0-.018-.13c-.013-.093-.029-.192-.052-.3a1.29,1.29,0,0,0-.031-.137,4.464,4.464,0,0,0-.324-.9c-.018-.042-.041-.086-.062-.127a4.731,4.731,0,0,0-.441-.682c-.034-.044-.07-.091-.109-.135a5.074,5.074,0,0,0-.705-.685c-.07-.054-.143-.112-.218-.163a1.22,1.22,0,0,0-.132-.093l-.231-.15-.215-.125c-.189-.1-.389-.2-.607-.3-.067-.031-.14-.06-.213-.088l-.283-.109h-.016l-.194-.078c-.148-.049-.3-.093-.456-.137l-.241-.062-.259-.06-.259-.054c-.259-.052-.537-.1-.827-.135l-.3-.036-.3-.031-.314-.026-.446-.026-.519-.018a32.333,32.333,0,0,0-6.807.724,18.737,18.737,0,0,0-4.732-.436h-.226l-.259.016H426.1l-.334.031a2.485,2.485,0,0,0-.337.039c-.112.016-.228.029-.34.047l-.171.029c-.169.029-.34.06-.519.1q-.086.016-.171.039c-.226.049-.451.109-.674.176-.112.031-.223.067-.335.106-.057.016-.112.036-.166.057l-.166.06-.163.065-.194.078c-.1.042-.194.086-.29.132-.054.023-.109.049-.161.078s-.106.052-.156.08a7.2,7.2,0,0,0-1.61,1.136l-.132.127-.13.132c-.044.044-.086.091-.127.137a6.18,6.18,0,0,0-.472.583c-.041.054-.08.109-.119.166a6.926,6.926,0,0,0-.446.757c-.034.062-.065.127-.1.189a8.481,8.481,0,0,0-.519,1.361q-.073.259-.132.519s-5.49,2.422-10.043,4.175c-1.211.467-2.352.889-3.306,1.208l-.778.259a6.926,6.926,0,0,1-1.621.373,5.1,5.1,0,0,0-.778.073c-2.093.34-5.679,1.815-6.07,3.3a.956.956,0,0,0-.026.363v.029c.259,1.815-1.556,1.556-1.556,1.556s-.648,4.8-1.556,6.094a10.206,10.206,0,0,0-1.162,4.587h0a5.085,5.085,0,0,0,.114,1.46v.036a6.4,6.4,0,0,1-.568,2.513c-.459,1.335-1.128,2.995-1.771,4.561a53.121,53.121,0,0,0-1.94,4.984c-.023.21-.091.586-.184,1.071-.379,1.976-1.219,5.739-1.634,7.261-.309,1.136-.757,2.692-1.066,3.76a.365.365,0,0,1-.026.091l11.625-.114v.218h.036Z"
                    transform="translate(-305.117 -426.816)"
                    fill="#05dec0"
                  />
                  <path
                    id="Trac??_204"
                    data-name="Trac?? 204"
                    d="M445.44,607.57s14.781,7.65,20.1,6.742Z"
                    transform="translate(-350.499 -494.833)"
                    opacity="0.1"
                  />
                  <path
                    id="Trac??_205"
                    data-name="Trac?? 205"
                    d="M561.44,595.57s14.392,4.668,19.189,5.316S561.44,595.57,561.44,595.57Z"
                    transform="translate(-436.42 -485.945)"
                    opacity="0.1"
                  />
                  <path
                    id="Trac??_206"
                    data-name="Trac?? 206"
                    d="M543.6,522.927c-7.52,1.385-21.678,1.086-27.8.876,2.243-8.039,13.181-5.305,13.181-5.305C542.519,515.8,543.556,521.4,543.6,522.927Z"
                    transform="translate(-402.614 -428.321)"
                    opacity="0.1"
                  />
                  <path
                    id="Trac??_207"
                    data-name="Trac?? 207"
                    d="M543.6,520.927c-7.52,1.385-21.678,1.086-27.8.876,2.243-8.039,13.181-5.305,13.181-5.305C542.519,513.8,543.556,519.4,543.6,520.927Z"
                    transform="translate(-402.614 -426.84)"
                    fill="#05dec0"
                  />
                  <path
                    id="Trac??_208"
                    data-name="Trac?? 208"
                    d="M776.94,671.661s8.858-1.361,9.032,2.528-4.517,6.607-4.517,6.607Z"
                    transform="translate(-596.039 -542.134)"
                    fill="#fbbebe"
                  />
                  <path
                    id="Trac??_209"
                    data-name="Trac?? 209"
                    d="M547.953,455.966a12.2,12.2,0,0,1-1.167.451,41.674,41.674,0,0,1-8.557,2.29,13.982,13.982,0,0,1-8.6-1.426,7.458,7.458,0,0,1-.778-.506c-.285-5.7-.972-11.28-.972-11.28s22.56-10.632,19.967-2.2C546.815,446.7,547.165,451.477,547.953,455.966Z"
                    transform="translate(-411.562 -370.747)"
                    opacity="0.1"
                  />
                  <path
                    id="Trac??_210"
                    data-name="Trac?? 210"
                    d="M519.487,355.221a2.456,2.456,0,0,1-2.157-.454l.539.749a2.2,2.2,0,0,1-1.758-.583,8.838,8.838,0,0,0,.083,2.01,3.765,3.765,0,0,1-2.479-.778,1.146,1.146,0,0,0,.685,1.118,3.718,3.718,0,0,0-4.045,2.777l1.354.124A4.789,4.789,0,0,0,509,361.836a2.1,2.1,0,0,0-.55,1.815c.182.633,1.058,1.037,1.535.586a7.245,7.245,0,0,0-1.582,5.91,3.752,3.752,0,0,1,.119,1.364,11.558,11.558,0,0,1-.49,1.216,3.842,3.842,0,0,0,.218,2.334l1.216,4c.441,1.444.879,2.891,1.455,4.289a21.29,21.29,0,0,1,1.037,2.725c.327,1.255.34,2.629,1.037,3.726a5.168,5.168,0,0,0,1.862,1.641,13.988,13.988,0,0,0,8.6,1.426,41.647,41.647,0,0,0,8.544-2.29,8.039,8.039,0,0,0,1.774-.778c1.932-1.265,2.362-3.853,2.723-6.133a34.821,34.821,0,0,1,1.89-7.468c.565-1.424,1.3-2.868,1.172-4.393-.158-2.025-1.761-3.667-2.157-5.658a4.927,4.927,0,0,1,.018-2.015,4.581,4.581,0,0,0,.2-1.219,3.11,3.11,0,0,0-1.372-2.015q-2.093-1.748-4.32-3.3c-.075-.519.63-.742.949-1.151.451-.578-.016-1.5-.7-1.766a3.583,3.583,0,0,0-2.165.086,1.709,1.709,0,0,0-2.995-1.325,2.645,2.645,0,0,0-2.183-1.577c-1.719-.135-1.753,1.18-2.852,1.9s-2.007-.231-2.852-.926A2.406,2.406,0,0,0,519.487,355.221Z"
                    transform="translate(-396.779 -305.426)"
                    fill="#3f3d56"
                  />
                  <path
                    id="Trac??_211"
                    data-name="Trac?? 211"
                    d="M730.178,632.147s-.231.55-.656,1.346a17.892,17.892,0,0,1-2.334,3.415l-.07.075h-.42l-14.972.137h-.358l-.044-.052-2.9-3.446-1.094-1.3-.044-.054-.093-.109-.052-.062-.067-.08-2.129-2.526.778-3.241,1.325-5.461.034-.132.259-1.037.184-.778.617-2.536,2.116-8.726,3.76,1.945,3.965,7,2.129,3.76h1.167c.22,0,.726.425,1.234.915.182.174.363.358.519.519.462.477.827.887.827.887s1.89.041,2.4,1.53a1.813,1.813,0,0,1,.065.22,10.448,10.448,0,0,0,.656,1.7c.335.729.755,1.556,1.18,2.383.791,1.517,1.595,2.961,1.89,3.485l.036.065Z"
                    transform="translate(-542.709 -494.841)"
                    fill="#05dec0"
                  />
                  <path
                    id="Trac??_212"
                    data-name="Trac?? 212"
                    d="M503.5,648.55l-.026.371v.026l-.044.6-.345,4.8-.417,5.783-.119,1.628-.259,3.485v.044l-27.746.259-45.532.493v.218h-.036v-.29l.117-3.724.223-7.276.192-6.169.018-.615a2.731,2.731,0,0,1,2.961-2.637c1.224.1,2.813.231,4.714.366l.778.057a419.922,419.922,0,0,0,51.732.519c.43-.023.864-.049,1.3-.08,3.174-.2,6.345-.456,9.485-.778a2.731,2.731,0,0,1,3.008,2.912Z"
                    transform="translate(-338.3 -522.951)"
                    opacity="0.1"
                  />
                  <path
                    id="Trac??_213"
                    data-name="Trac?? 213"
                    d="M429.08,669.238v-.218l45.54-.5,27.746-.259h.078v-.044l.259-3.485.111-1.556.425-5.863.334-4.642v-.114a2.751,2.751,0,0,0-.029-.64.077.077,0,0,0,0-.026,2.694,2.694,0,0,0-.519-1.2,2.733,2.733,0,0,0-2.443-1.037c-3.14.322-6.312.578-9.485.778-.433.031-.866.057-1.3.08a425.183,425.183,0,0,1-51.732-.519l-.778-.057c-1.9-.135-3.49-.259-4.714-.366a2.733,2.733,0,0,0-2.915,2.212,2.855,2.855,0,0,0-.047.425l-.176,5.746-.241,7.279-.114,3.724v.29Z"
                    transform="translate(-338.382 -525.937)"
                    fill="#3f3d56"
                  />
                  <path
                    id="Trac??_214"
                    data-name="Trac?? 214"
                    d="M503.677,658.92l-.319,3.975-.475,5.925-.119,1.483-.259,3.322-.016.166v.044h0l-.039.384.029-.384H502.4l-27.746.259-45.547.493v-.073l.127-3.724.259-7.276.166-4.836a1.649,1.649,0,0,1,.793-1.361,1.621,1.621,0,0,1,.98-.233c.545.044,1.214.1,1.994.153,1.268.093,2.832.2,4.652.316,3.371.213,7.6.441,12.447.628a405.215,405.215,0,0,0,48.978-.822c.778-.067,1.582-.143,2.367-.218a1.623,1.623,0,0,1,.9.171,1.338,1.338,0,0,1,.223.14,1.592,1.592,0,0,1,.519.638.928.928,0,0,1,.065.158A1.628,1.628,0,0,1,503.677,658.92Z"
                    transform="translate(-338.404 -531.504)"
                    opacity="0.1"
                  />
                  <path
                    id="Trac??_215"
                    data-name="Trac?? 215"
                    d="M342.5,677.87v.827a1.589,1.589,0,0,1-.908,1.437l-10.4.2a1.587,1.587,0,0,1-.926-1.444v-.778Z"
                    transform="translate(-265.194 -546.904)"
                    opacity="0.1"
                  />
                  <path
                    id="Trac??_216"
                    data-name="Trac?? 216"
                    d="M259.9,509.148l-13.549.259v-2.248L259.9,506.9Z"
                    transform="translate(-182.462 -375.431)"
                    fill="#3f3d56"
                  />
                  <path
                    id="Trac??_217"
                    data-name="Trac?? 217"
                    d="M259.9,509.148l-13.549.259v-2.248L259.9,506.9Z"
                    transform="translate(-182.462 -375.431)"
                    opacity="0.1"
                  />
                  <path
                    id="Trac??_218"
                    data-name="Trac?? 218"
                    d="M261.9,509.148l-13.549.259v-2.248L261.9,506.9Z"
                    transform="translate(-183.943 -375.431)"
                    fill="#3f3d56"
                  />
                  <g
                    id="Groupe_18"
                    data-name="Groupe 18"
                    transform="translate(111.247 47.819)"
                    opacity="0.1"
                  >
                    <path
                      id="Trac??_219"
                      data-name="Trac?? 219"
                      d="M551.446,358.345a2.529,2.529,0,0,1-.49-1.125,2.461,2.461,0,0,0,.109,1.193A2.334,2.334,0,0,0,551.446,358.345Z"
                      transform="translate(-539.879 -357.22)"
                    />
                    <path
                      id="Trac??_220"
                      data-name="Trac?? 220"
                      d="M539.956,365.459a9.126,9.126,0,0,1-.1-.959v.962Z"
                      transform="translate(-531.683 -362.612)"
                    />
                    <path
                      id="Trac??_221"
                      data-name="Trac?? 221"
                      d="M621.679,395.348a4.747,4.747,0,0,1,.093-.687,4.671,4.671,0,0,0,.207-1.216,1.6,1.6,0,0,0-.042-.275c-.044.239-.114.477-.166.713A4.963,4.963,0,0,0,621.679,395.348Z"
                      transform="translate(-592.272 -383.848)"
                    />
                    <path
                      id="Trac??_222"
                      data-name="Trac?? 222"
                      d="M600.914,366.915l.283.2a5.111,5.111,0,0,0,.666-.576.952.952,0,0,0,.1-.944.775.775,0,0,1-.1.166C601.544,366.176,600.839,366.4,600.914,366.915Z"
                      transform="translate(-576.901 -363.427)"
                    />
                    <path
                      id="Trac??_223"
                      data-name="Trac?? 223"
                      d="M518.116,380.29a3.2,3.2,0,0,0-.226.591,4.709,4.709,0,0,1,1.3-.49Z"
                      transform="translate(-515.41 -374.308)"
                    />
                    <path
                      id="Trac??_224"
                      data-name="Trac?? 224"
                      d="M531.151,368.5a3.85,3.85,0,0,1-.488-.319,1.1,1.1,0,0,0,.023.306,3.078,3.078,0,0,1,.464.013Z"
                      transform="translate(-524.869 -365.338)"
                    />
                    <path
                      id="Trac??_225"
                      data-name="Trac?? 225"
                      d="M539.959,428.33a13.354,13.354,0,0,1-1.167,3.661,34.809,34.809,0,0,0-1.89,7.471c-.36,2.279-.778,4.867-2.723,6.13a7.779,7.779,0,0,1-1.771.778,41.512,41.512,0,0,1-8.557,2.29,13.981,13.981,0,0,1-8.6-1.424,5.186,5.186,0,0,1-1.862-1.641c-.692-1.1-.705-2.471-1.037-3.726a21.315,21.315,0,0,0-1.037-2.728c-.573-1.4-1.014-2.852-1.452-4.286q-.609-2-1.216-4a7.468,7.468,0,0,1-.3-1.232,4.647,4.647,0,0,0,.3,2.01q.607,2,1.216,4c.438,1.444.879,2.891,1.452,4.286a21.319,21.319,0,0,1,1.037,2.728c.327,1.255.34,2.629,1.037,3.726a5.186,5.186,0,0,0,1.862,1.641,13.99,13.99,0,0,0,8.6,1.424,41.823,41.823,0,0,0,8.557-2.29,7.779,7.779,0,0,0,1.771-.778c1.932-1.263,2.362-3.851,2.723-6.13a34.809,34.809,0,0,1,1.89-7.471c.565-1.421,1.3-2.865,1.172-4.393C539.964,428.361,539.959,428.346,539.959,428.33Z"
                      transform="translate(-508.324 -409.891)"
                    />
                    <path
                      id="Trac??_226"
                      data-name="Trac?? 226"
                      d="M509.97,418.031V418a3.63,3.63,0,0,0-.119-1.361,6.9,6.9,0,0,1-.1-.861,7.093,7.093,0,0,0,.1,1.639C509.893,417.621,509.939,417.826,509.97,418.031Z"
                      transform="translate(-509.373 -400.595)"
                    />
                    <path
                      id="Trac??_227"
                      data-name="Trac?? 227"
                      d="M511.083,395.622a7.2,7.2,0,0,1,.677-.952c-.475.454-1.351.049-1.535-.581a1.513,1.513,0,0,0,0,.778A1.138,1.138,0,0,0,511.083,395.622Z"
                      transform="translate(-509.694 -384.529)"
                    />
                  </g>
                  <path
                    id="Trac??_228"
                    data-name="Trac?? 228"
                    d="M762.4,656.57a11.266,11.266,0,0,1,0,5.575C761.574,664.738,762.4,656.57,762.4,656.57Z"
                    transform="translate(-584.996 -531.127)"
                    opacity="0.1"
                  />
                  <path
                    id="Trac??_229"
                    data-name="Trac?? 229"
                    d="M774.958,668.3s.345,3.786-.433,4.458S774.958,668.3,774.958,668.3Z"
                    transform="translate(-594.057 -539.816)"
                    opacity="0.1"
                  />
                  <line
                    id="Ligne_8"
                    data-name="Ligne 8"
                    y1="0.259"
                    x2="26.348"
                    transform="translate(51.608 88.673)"
                    fill="none"
                    stroke="#05dec0"
                    stroke-miterlimit="10"
                    stroke-width="2"
                  />
                  <line
                    id="Ligne_9"
                    data-name="Ligne 9"
                    y1="0.257"
                    x2="26.348"
                    transform="translate(51.608 91.909)"
                    fill="none"
                    stroke="#05dec0"
                    stroke-miterlimit="10"
                    stroke-width="2"
                  />
                  <line
                    id="Ligne_10"
                    data-name="Ligne 10"
                    y1="0.259"
                    x2="26.348"
                    transform="translate(51.608 95.143)"
                    fill="none"
                    stroke="#05dec0"
                    stroke-miterlimit="10"
                    stroke-width="2"
                  />
                </g>
              </svg>
            </span>
            <div className="lg:pl-12 flex flex-col items-center lg:items-start">
              <h3 className="text-center font-medium text-2xl lg:text-left">
                A little word about myself...
              </h3>
              <p className="mt-6 text-center lg:text-left">
                I am Emile, a 21 years old full stack javascript web developer
                who enjoy turning small buisinesses idea to rich interactive web
                applications. The languages I mainly use are ReactJS, React
                Native (Expo), NodeJS, ElectronJS, MongoDB for database
                managment, a lot of css frameworks and many more...
              </p>
              <a
                href="CV.pdf"
                download
                className="mt-6 py-4 px-8 rounded-full bg-brand text-white"
              >
                Download my resume
              </a>
            </div>
          </div>
        </div>
        {/* Skills */}
        <div id="skills" className="pt-28 flex flex-col items-center">
          <h1 className="text-black font-semibold text-center text-5xl dark:text-white">
            Skills
          </h1>
          {/* Front-end development */}
          <div className="md:grid md:grid-cols-2 md:gap-4 xl:grid-cols-3 xl:gap-12">
            <div className="shadow-lg p-8 flex flex-col items-center my-12 md:h-full 2xl:p-24">
              <svg
                className="fill-current text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="51.051"
                height="46.41"
                viewBox="0 0 51.051 46.41"
              >
                <path
                  id="ic_desktop_windows_24px"
                  d="M47.41,2H5.641A4.655,4.655,0,0,0,1,6.641V34.487a4.655,4.655,0,0,0,4.641,4.641H21.884v4.641H17.243V48.41H35.807V43.769H31.166V39.128H47.41a4.655,4.655,0,0,0,4.641-4.641V6.641A4.655,4.655,0,0,0,47.41,2Zm0,32.487H5.641V6.641H47.41Z"
                  transform="translate(-1 -2)"
                  fill="#333"
                />
              </svg>
              <h4 className="text-black text-center font-semibold uppercase mt-8 text-xl dark:text-white">
                Front-end development
              </h4>
              <span className="my-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="190"
                  height="5"
                  viewBox="0 0 190 5"
                >
                  <line
                    id="Ligne_3"
                    data-name="Ligne 3"
                    x2="185"
                    transform="translate(2.5 2.5)"
                    fill="none"
                    stroke="#05dec0"
                    stroke-linecap="round"
                    stroke-width="5"
                  />
                </svg>
              </span>
              <div>
                <h5 className="font-medium uppercase text-center">Languages</h5>
                <h5 className="font-medium uppercase text-center">Tools</h5>
                <h5 className="font-medium uppercase text-center">
                  Frameworks
                </h5>
              </div>
              <div className="grid gap-4 grid-cols-3 mt-8">
                <div className="flex justify-center items-center">
                  <div title="HTML" className="absolute w-14 h-14"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="51.234"
                    height="58.105"
                    viewBox="0 0 51.234 58.105"
                  >
                    <g id="html" transform="translate(-1.419)">
                      <path
                        id="Trac??_31"
                        data-name="Trac?? 31"
                        d="M6.082,52.3,1.419,0H52.653L47.985,52.289,27,58.1Z"
                        transform="translate(0)"
                        fill="#e44d26"
                      />
                      <path
                        id="Trac??_32"
                        data-name="Trac?? 32"
                        d="M12,51.15l16.952-4.7,3.99-44.683H12Z"
                        transform="translate(15.036 2.51)"
                        fill="#f16529"
                      />
                      <path
                        id="Trac??_33"
                        data-name="Trac?? 33"
                        d="M21.44,17.4H12.954l-.588-6.568H21.44V4.415H5.357L5.51,6.136,7.086,23.81H21.44V17.4Zm0,16.657-.029.007-7.142-1.93-.458-5.116H7.374l.9,10.071,13.139,3.648.029-.01V34.056Z"
                        transform="translate(5.596 6.274)"
                        fill="#ebebeb"
                      />
                      <path
                        id="Trac??_34"
                        data-name="Trac?? 34"
                        d="M11.991,17.4v6.413h7.9l-.746,8.319-7.154,1.93v6.672L25.14,37.089l.1-1.085L26.745,19.12,26.9,17.4H11.991Zm0-12.984v6.416H27.483l.128-1.443L27.9,6.136l.153-1.721Z"
                        transform="translate(15.023 6.274)"
                        fill="#fff"
                      />
                      <path
                        id="Trac??_35"
                        data-name="Trac?? 35"
                        d="M12.018,24l-.031.01h.031Z"
                        transform="translate(15.017 34.099)"
                        fill="#dedede"
                      />
                      <path
                        id="Trac??_36"
                        data-name="Trac?? 36"
                        d="M27.036,17.1H17.962l.586,6.568h8.488V17.1Zm0-17.1H1.419L6.082,52.3,27,58.1l.031-.01V47h0l-.029.01L13.868,43.363l-.9-10.071h6.438l.458,5.116,7.142,1.93.007,0h0l.022,0V30.086H12.682L11.106,12.413l-.153-1.724H27.036V0Z"
                        transform="translate(0)"
                        fill="#c64321"
                      />
                      <path
                        id="Trac??_37"
                        data-name="Trac?? 37"
                        d="M13.811,27.018H7.374l.9,10.071,13.139,3.648.029-.01h0l-.022,0V34.061l-.007,0-7.142-1.93-.458-5.116Zm7.607-22.6H5.357L5.51,6.136,7.086,23.81H21.418V17.4H12.954l-.588-6.568h9.052V4.415Z"
                        transform="translate(5.596 6.274)"
                        fill="#cdcdcd"
                      />
                      <path
                        id="Trac??_38"
                        data-name="Trac?? 38"
                        d="M12.013,34.056l-.022,0h0v6.672l.022,0V34.056Zm0-16.657h-.022v6.413h.022V17.4Zm0-12.984h-.022v6.416h.022V4.415Z"
                        transform="translate(15.023 6.274)"
                        fill="#dedede"
                      />
                    </g>
                  </svg>
                </div>
                <div className="flex justify-center items-center">
                  <div title="CSS" className="absolute w-14 h-14"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="51.186"
                    height="58.498"
                    viewBox="0 0 51.186 58.498"
                  >
                    <g id="css" transform="translate(-1)">
                      <path
                        id="Trac??_29"
                        data-name="Trac?? 29"
                        d="M1,0,5.662,52.648,26.593,58.5l20.924-5.846L52.186,0Z"
                        transform="translate(0)"
                        fill="#2196f3"
                      />
                      <path
                        id="Trac??_30"
                        data-name="Trac?? 30"
                        d="M35.4,9.4l-.589,6.614L33.033,35.838,19.772,39.505l-.011,0L6.508,35.838,5.583,25.469h6.493l.483,5.378,7.206,1.945,0,0,7.217-1.945.983-8.961-22.7.062-.643-6.128,23.885-.282L29,8.977,3.988,9.046l-.42-6.1H35.976Z"
                        transform="translate(6.821 7.82)"
                        fill="#fafafa"
                      />
                    </g>
                  </svg>
                </div>
                <div className="flex justify-center items-center">
                  <div title="JAVACRIPT" className="absolute w-14 h-14"></div>
                  <svg
                    id="javascript"
                    xmlns="http://www.w3.org/2000/svg"
                    width="58.498"
                    height="58.498"
                    viewBox="0 0 58.498 58.498"
                  >
                    <path
                      id="Trac??_39"
                      data-name="Trac?? 39"
                      d="M0,0H58.5V58.5H0Z"
                      fill="#f7df1e"
                    />
                    <path
                      id="Trac??_40"
                      data-name="Trac?? 40"
                      d="M67.311,138.5l4.476-2.709c.864,1.531,1.649,2.827,3.534,2.827,1.806,0,2.945-.707,2.945-3.455V116.467h5.5v18.769c0,5.694-3.338,8.285-8.207,8.285a8.532,8.532,0,0,1-8.246-5.026m19.439-.589,4.476-2.592c1.178,1.924,2.71,3.338,5.419,3.338,2.278,0,3.73-1.139,3.73-2.71,0-1.885-1.492-2.552-4.005-3.652L95,131.7c-3.966-1.688-6.6-3.809-6.6-8.285,0-4.123,3.141-7.265,8.05-7.265,3.495,0,6.008,1.217,7.814,4.4l-4.28,2.749c-.943-1.688-1.963-2.356-3.534-2.356a2.392,2.392,0,0,0-2.631,2.356c0,1.649,1.021,2.317,3.377,3.338l1.374.589c4.673,2,7.3,4.045,7.3,8.639,0,4.948-3.887,7.657-9.11,7.657-5.1,0-8.4-2.435-10.013-5.615"
                      transform="translate(-51.93 -89.611)"
                    />
                  </svg>
                </div>
                <div className="flex justify-center items-center">
                  <div title="TYPESCRIPT" className="absolute w-14 h-14"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="58.105"
                    height="58.105"
                    viewBox="0 0 58.105 58.105"
                  >
                    <path
                      id="typescript"
                      d="M0,29.052V58.1H58.1V0H0ZM35.257,47.515c.261-.148,1.237-.712,2.16-1.247l1.671-.968.351.518a7.806,7.806,0,0,0,2.2,2.111c1.855.978,4.4.84,5.653-.286a2.131,2.131,0,0,0,.76-1.634c0-.039,0-.075,0-.114v0a2.132,2.132,0,0,0-.436-1.477c-.45-.644-1.373-1.186-3.992-2.324-3-1.29-4.288-2.092-5.469-3.365a7.632,7.632,0,0,1-1.581-2.852l-.015-.053a11.686,11.686,0,0,1-.1-3.707,7.079,7.079,0,0,1,5.958-5.515,14.706,14.706,0,0,1,4.409.128v0a7.224,7.224,0,0,1,3.634,2.094A9.393,9.393,0,0,1,51.851,30.7c.019.073-2.508,1.767-4.038,2.719-.056.036-.278-.2-.525-.571A3.3,3.3,0,0,0,44.557,31.2c-1.763-.121-2.9.8-2.886,2.341,0,.027,0,.058,0,.09a2.117,2.117,0,0,0,.254,1.01l0-.012c.387.8,1.109,1.283,3.365,2.259,4.162,1.792,5.941,2.971,7.048,4.648A8.434,8.434,0,0,1,53,48.622c-.92,2.416-3.208,4.058-6.428,4.6a17.729,17.729,0,0,1-4.426-.044A10.684,10.684,0,0,1,36.238,50.1a10.234,10.234,0,0,1-1.513-2.239A3.827,3.827,0,0,1,35.257,47.515ZM12.73,29.21a23.221,23.221,0,0,1,.063-2.4c.029-.039,4.631-.058,10.209-.048l10.156.029.027,2.37.019,2.38H25.639V53.033h-5.35V31.544H12.73Z"
                      fill="#1677c7"
                    />
                  </svg>
                </div>
                <div className="flex justify-center items-center">
                  <div title="JQUERY" className="absolute w-14 h-14"></div>
                  <svg
                    id="javascript"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="58.498"
                    height="58.498"
                    viewBox="0 0 58.498 58.498"
                  >
                    <defs>
                      <clipPath id="clip-path">
                        <path
                          id="Trac??_39"
                          data-name="Trac?? 39"
                          d="M0,0H58.5V58.5H0Z"
                          fill="#f7df1e"
                        />
                      </clipPath>
                    </defs>
                    <g
                      id="Groupe_de_masques_3"
                      data-name="Groupe de masques 3"
                      clip-path="url(#clip-path)"
                    >
                      <g id="jquery" transform="translate(-0.001 0)">
                        <path
                          id="Trac??_52"
                          data-name="Trac?? 52"
                          d="M3.427,39.842a3.6,3.6,0,0,0,.188.361,2.058,2.058,0,0,0,.115.2c.063.127.132.249.2.37l.383.643c.071.119.139.236.219.353.134.229.292.453.431.682.063.1.122.19.193.285.268.417.512.763.773,1.1.185.251.37.5.57.743.066.093.139.185.207.278l.539.653c.066.076.132.163.2.241.239.288.492.565.746.848,0,0,.007.01.012.017a7.4,7.4,0,0,0,1.024,1.058l.01.01c.195.2.39.4.6.592l.246.236c.271.253.541.5.826.748,0,0,.007,0,.012.007l.139.122c.249.217.5.431.756.631l.3.256c.207.166.422.322.634.485l.331.253c.227.171.468.336.7.5.085.061.171.122.258.178l.071.056.685.448.292.195c.358.229.714.444,1.07.658.1.051.2.107.3.166.263.151.536.3.8.444.146.083.3.154.448.229.183.1.373.2.568.3a.745.745,0,0,1,.141.058l.01-.01c.08.037.156.076.234.115.292.146.6.285.914.422a1.987,1.987,0,0,1,.185.083c.351.154.7.3,1.065.441.083.024.171.066.256.1.329.124.668.251,1,.37l.122.044c.373.127.741.249,1.121.363.088.024.178.056.271.08a11.058,11.058,0,0,0,1.155.329C49.795,61.136,57.07,41.615,57.07,41.615,50.957,49.536,40.108,51.625,29.834,49.3c-.38-.088-.76-.21-1.146-.322-.7-.2-1.16-.349-1.616-.509l.232.071-.151-.058c-.331-.112-.651-.236-.975-.361-.061-.027-.151-.061-.241-.093l-.027-.007c-.358-.144-.707-.29-1.053-.444-.076-.024-.139-.058-.214-.088-.639-.283-.929-.419-1.219-.561l.336.149c-.09-.039-.171-.08-.258-.127-.229-.107-.458-.229-.682-.344s-.358-.178-.5-.258l.049.024c-.275-.146-.551-.3-.829-.453-.083-.058-.178-.107-.273-.161-.526-.307-.875-.524-1.224-.746l.154.093c-.117-.073-.212-.136-.3-.2l.015.01c-.3-.185-.539-.344-.77-.507-.083-.054-.158-.112-.244-.171-.312-.214-.546-.383-.775-.556l.058.041c-.1-.083-.212-.161-.322-.241-.214-.168-.431-.329-.646-.5l-.288-.229c-.31-.249-.568-.466-.821-.687a.527.527,0,0,0-.08-.066l0,0-.846-.768-.244-.229c-.2-.2-.4-.395-.609-.595l-.236-.244c-.253-.251-.5-.5-.739-.768l-.015-.017-.041-.034c-.258-.283-.509-.568-.763-.86-.066-.076-.127-.156-.195-.236l-.553-.67c-.193-.239-.463-.592-.731-.953l-.1-.136c-5.7-7.741-7.761-18.425-3.2-27.19L3.717,14.381c-5.18,7.407-4.539,17.04-.578,24.906C3.23,39.479,3.33,39.66,3.427,39.842Z"
                          fill="#1266a9"
                        />
                        <path
                          id="Trac??_53"
                          data-name="Trac?? 53"
                          d="M20.872,29.171c-.01-.012-.017-.027-.027-.039l-.022-.029Z"
                        />
                        <path
                          id="Trac??_54"
                          data-name="Trac?? 54"
                          d="M23.6,32.369l.219.219c.278.268.563.529.853.79l.037.032c.292.258.622.529.96.792l.051.039c.083.056.154.122.234.178.341.263.685.514,1.043.765l.037.022c.151.11.312.21.483.317.068.044.146.1.219.146.258.166.512.319.773.478.041.017.078.039.117.056.219.134.458.263.687.38.08.049.158.085.241.132.163.08.324.166.48.249L30.11,37c.329.161.665.312.994.461.083.032.154.059.224.093.271.117.546.229.817.331.122.041.236.09.351.127.249.093.509.178.756.263l.341.11a7.825,7.825,0,0,0,1.094.312C54.024,41.878,58.5,27.065,58.5,27.065c-4.029,5.769-11.826,8.519-20.136,6.371-.5-.129-.87-.236-1.233-.353l.139.039c-.117-.032-.219-.068-.331-.1-.253-.088-.514-.173-.76-.263l-.351-.132c-.273-.11-.551-.212-.817-.329-.083-.037-.158-.061-.222-.1-.341-.154-.685-.3-1.019-.466l-.5-.261-.29-.146c-.224-.117-.431-.239-.646-.363a1.36,1.36,0,0,1-.158-.088l.007,0c-.258-.161-.526-.317-.775-.48-.083-.046-.158-.1-.236-.151l-.507-.329c-.351-.244-.695-.5-1.043-.758-.078-.071-.154-.129-.229-.193a23.1,23.1,0,0,1-7.9-11.19A17.3,17.3,0,0,1,22.851,3.834L19.792,8.144c-3.756,5.365-3.544,12.536-.619,18.21a21.9,21.9,0,0,0,1.672,2.776,12.768,12.768,0,0,0,1.911,2.364C23.019,31.794,23.3,32.079,23.6,32.369Z"
                          fill="#1266a9"
                        />
                        <path
                          id="Trac??_55"
                          data-name="Trac?? 55"
                          d="M5.938,43.855l-.01-.015-.017-.022Z"
                        />
                        <path
                          id="Trac??_56"
                          data-name="Trac?? 56"
                          d="M16.073,42.041l.024.017,0,.007Z"
                        />
                        <path
                          id="Trac??_57"
                          data-name="Trac?? 57"
                          d="M33.31,3.478a11.161,11.161,0,0,0-.9,10.817,15.312,15.312,0,0,0,8.794,8.17c.158.061.312.112.475.171l.214.066c.224.071.451.154.682.2,10.678,2.05,13.569-5.455,14.347-6.559-2.542,3.632-6.805,4.5-12.036,3.239a11.584,11.584,0,0,1-1.341-.414l.08.027a15.1,15.1,0,0,1-1.6-.658l.093.041a15.726,15.726,0,0,1-2.654-1.618C34.79,13.43,31.9,6.7,34.951,1.219Z"
                          fill="#1266a9"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="flex justify-center items-center">
                  <div title="REACTJS" className="absolute w-14 h-14"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="65.509"
                    height="58.498"
                    viewBox="0 0 65.509 58.498"
                  >
                    <g id="react" transform="translate(-1.4 -8.1)">
                      <circle
                        id="Ellipse_6"
                        data-name="Ellipse 6"
                        cx="5.965"
                        cy="5.965"
                        r="5.965"
                        transform="translate(28.19 31.384)"
                        fill="#61dafb"
                      />
                      <path
                        id="Trac??_44"
                        data-name="Trac?? 44"
                        d="M56.811,27.512c-1.151-.419-2.355-.837-3.61-1.2.314-1.256.576-2.512.785-3.715,1.1-6.907-.1-11.773-3.453-13.657A6.5,6.5,0,0,0,47.183,8.1c-3.663,0-8.319,2.721-13.029,7.273C29.446,10.821,24.789,8.1,21.126,8.1a6.5,6.5,0,0,0-3.349.837c-3.349,1.936-4.552,6.8-3.453,13.657.209,1.2.471,2.459.785,3.715a36.489,36.489,0,0,0-3.61,1.2c-6.54,2.512-10.1,5.965-10.1,9.837s3.61,7.325,10.1,9.837c1.151.419,2.355.837,3.61,1.2-.314,1.256-.576,2.512-.785,3.715-1.1,6.907.1,11.773,3.453,13.657a6.5,6.5,0,0,0,3.349.837c3.715,0,8.372-2.721,13.029-7.273,4.709,4.552,9.366,7.273,13.029,7.273a6.5,6.5,0,0,0,3.349-.837c3.349-1.936,4.552-6.8,3.453-13.657-.209-1.2-.471-2.459-.785-3.715a36.488,36.488,0,0,0,3.61-1.2c6.54-2.512,10.1-5.965,10.1-9.837S63.351,30.024,56.811,27.512ZM49.067,11.553c2.145,1.256,2.878,5.128,1.988,10.622a31.508,31.508,0,0,1-.733,3.453,62.163,62.163,0,0,0-8.633-1.308,75.5,75.5,0,0,0-5.442-6.8c3.872-3.82,7.8-6.436,10.988-6.436a3.535,3.535,0,0,1,1.831.471Zm-5.86,31.028c-.942,1.674-2.041,3.349-3.192,5.023-1.936.157-3.872.209-5.86.209-2.041,0-3.977-.052-5.86-.209q-1.727-2.512-3.139-5.023c-.994-1.727-1.936-3.506-2.773-5.232.837-1.727,1.779-3.506,2.773-5.232.942-1.674,2.041-3.349,3.192-5.023,1.936-.157,3.872-.209,5.86-.209,2.041,0,3.977.052,5.86.209q1.727,2.512,3.139,5.023c.994,1.727,1.936,3.506,2.773,5.232C45.09,39.076,44.2,40.8,43.207,42.581Zm4.343-1.727c.785,1.831,1.413,3.61,1.988,5.389-1.779.419-3.663.733-5.651.994.628-.994,1.308-2.041,1.884-3.139.628-1.1,1.2-2.2,1.779-3.244ZM34.155,55.034c-1.256-1.36-2.459-2.825-3.61-4.343,1.2.052,2.407.1,3.61.1s2.407-.052,3.61-.1C36.614,52.209,35.41,53.674,34.155,55.034Zm-9.732-7.849c-1.988-.262-3.872-.576-5.651-.994.576-1.727,1.2-3.558,1.988-5.389.576,1.046,1.151,2.145,1.779,3.192.628,1.151,1.256,2.145,1.884,3.192ZM20.76,33.843c-.785-1.831-1.413-3.61-1.988-5.389,1.779-.419,3.663-.733,5.651-.994-.628.994-1.308,2.041-1.884,3.139C21.911,31.7,21.335,32.8,20.76,33.843Zm13.395-14.18c1.256,1.36,2.459,2.825,3.61,4.343-1.2-.052-2.407-.1-3.61-.1s-2.407.052-3.61.1c1.151-1.517,2.355-2.982,3.61-4.343ZM45.771,30.652l-1.884-3.139c1.988.262,3.872.576,5.651.994-.576,1.727-1.2,3.558-1.988,5.389C46.974,32.8,46.4,31.7,45.771,30.652ZM17.254,22.175c-.89-5.494-.157-9.366,1.988-10.622a3.535,3.535,0,0,1,1.831-.471c3.139,0,7.064,2.564,10.988,6.436a68.781,68.781,0,0,0-5.442,6.8,71.138,71.138,0,0,0-8.633,1.308c-.314-1.2-.523-2.355-.733-3.453ZM4.33,37.349c0-2.459,2.982-5.075,8.215-7.011a31.371,31.371,0,0,1,3.349-1.1A76.266,76.266,0,0,0,19.033,37.4a65.934,65.934,0,0,0-3.139,8.11C8.673,43.419,4.33,40.279,4.33,37.349Zm14.912,25.8c-2.145-1.256-2.878-5.128-1.988-10.622a31.507,31.507,0,0,1,.733-3.453,62.164,62.164,0,0,0,8.633,1.308,75.5,75.5,0,0,0,5.442,6.8c-3.872,3.82-7.8,6.436-10.988,6.436a3.535,3.535,0,0,1-1.831-.471ZM51.055,52.523c.89,5.494.157,9.366-1.988,10.622a3.535,3.535,0,0,1-1.831.471c-3.139,0-7.064-2.564-10.988-6.436a68.782,68.782,0,0,0,5.442-6.8,71.138,71.138,0,0,0,8.633-1.308C50.637,50.273,50.846,51.424,51.055,52.523Zm4.709-8.163a31.371,31.371,0,0,1-3.349,1.1A76.266,76.266,0,0,0,49.276,37.3a65.934,65.934,0,0,0,3.139-8.11c7.221,2.093,11.564,5.232,11.564,8.163C63.979,39.808,60.945,42.424,55.764,44.36Z"
                        fill="#61dafb"
                      />
                    </g>
                  </svg>
                </div>
                <div className="flex justify-center items-center">
                  <div title="REDUX" className="absolute w-14 h-14"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="58.498"
                    height="56.06"
                    viewBox="0 0 58.498 56.06"
                  >
                    <g id="redux" transform="translate(0 -0.501)">
                      <path
                        id="Trac??_45"
                        data-name="Trac?? 45"
                        d="M12.985,8.325c2.191-2.769,6.318-4.136,9.131-4.207C30,3.967,33.292,13.9,33.546,17.849L37.2,18.955C36.356,6.851,28.91.5,21.785.5,15.1.5,8.934,5.408,6.448,12.606c-3.4,9.6-1.168,18.822,3,26.206a3.288,3.288,0,0,0-.509,2.138A4.224,4.224,0,0,0,13.1,45.01h.146a4.208,4.208,0,0,0-.11-8.412h-.149a1.571,1.571,0,0,0-.548.071,27.8,27.8,0,0,1-3.832-16.68A20.154,20.154,0,0,1,12.985,8.325Z"
                        transform="translate(6.885 0)"
                        fill="#6c4eb0"
                      />
                      <path
                        id="Trac??_46"
                        data-name="Trac?? 46"
                        d="M2.271,34.8c2.447,3.69,7.451,6.05,12.929,6.05a18.727,18.727,0,0,0,4.492-.478,28.625,28.625,0,0,0,20.819-16.09l.034-.076A4.087,4.087,0,0,0,44.2,19.889a4.228,4.228,0,0,0-4.163-4.058h-.149a4.194,4.194,0,0,0-4.017,4.358,4.519,4.519,0,0,0,1.2,2.84c-2.555,5.021-6.389,8.709-12.2,11.812A19.823,19.823,0,0,1,12.826,37.13,10.489,10.489,0,0,1,5.23,32.7,11.1,11.1,0,0,1,4.609,21.04a17.373,17.373,0,0,1,5.116-6.018,24.736,24.736,0,0,1-1.024-3.8C-2.114,19.046-1.015,29.747,2.271,34.8Z"
                        transform="translate(0 15.414)"
                        fill="#6c4eb0"
                      />
                      <path
                        id="Trac??_47"
                        data-name="Trac?? 47"
                        d="M44.766,38.406c2.189-4.429,2.009-11.883-3.581-18.269l-.034.073C35.494,13.492,27.165,9.8,17.666,9.8H16.423a3.926,3.926,0,0,0-3.649-2.216h-.11a4.113,4.113,0,0,0-4.015,4.319,4.229,4.229,0,0,0,4.163,4.061h.18a4.123,4.123,0,0,0,3.651-2.584H18a28.087,28.087,0,0,1,15.817,4.907,20.2,20.2,0,0,1,7.888,9.6,10.288,10.288,0,0,1-.11,8.86,10.841,10.841,0,0,1-10.225,6.2,18.889,18.889,0,0,1-7.232-1.587c-.875.734-2.338,1.952-3.4,2.693a23.261,23.261,0,0,0,9.6,2.323C37.463,46.377,42.755,42.321,44.766,38.406Z"
                        transform="translate(12.43 10.185)"
                        fill="#6c4eb0"
                      />
                    </g>
                  </svg>
                </div>
                <div className="flex justify-center items-center">
                  <div title="SASS" className="absolute w-14 h-14"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="67.949"
                    height="50.933"
                    viewBox="0 0 67.949 50.933"
                  >
                    <path
                      id="sass"
                      d="M58.378,29.488a14,14,0,0,0-6.158,1.434,12.668,12.668,0,0,1-1.38-3.185,8.81,8.81,0,0,1-.119-2.681,21.483,21.483,0,0,1,.809-2.894c-.013-.119-.146-.7-1.513-.717s-2.548.265-2.681.624a15.244,15.244,0,0,0-.571,2.031c-.239,1.248-2.734,5.667-4.154,7.99a8.152,8.152,0,0,1-.942-2.336,8.809,8.809,0,0,1-.119-2.681,21.5,21.5,0,0,1,.81-2.893c-.013-.119-.146-.7-1.513-.717s-2.548.265-2.681.624-.279,1.208-.571,2.031-3.6,8.2-4.46,10.127c-.438.982-.823,1.765-1.1,2.3s-.013.04-.04.093l-.372.7v.013c-.186.332-.385.65-.478.65a4.426,4.426,0,0,1,.027-2.11c.491-2.562,1.686-6.557,1.672-6.7,0-.066.226-.77-.77-1.128a1.21,1.21,0,0,0-1.394.239c-.08,0-.146.212-.146.212s1.075-4.5-2.057-4.5c-1.964,0-4.672,2.137-6.012,4.088-.849.465-2.655,1.447-4.566,2.5-.73.4-1.487.823-2.2,1.208l-.146-.16c-3.8-4.048-10.817-6.915-10.525-12.357.106-1.978.8-7.194,13.485-13.511C28.9,2.6,37.222,4.018,38.669,7.177c2.057,4.513-4.446,12.9-15.25,14.109-4.114.465-6.278-1.128-6.822-1.725-.571-.624-.65-.65-.863-.531-.345.186-.133.743,0,1.075a6.407,6.407,0,0,0,3.9,3.066c1.977.65,6.809,1.009,12.649-1.248,6.543-2.535,11.653-9.569,10.153-15.449C40.912.487,30.984-1.477,21.6,1.854c-5.588,1.991-11.64,5.1-15.994,9.171-5.176,4.831-6,9.052-5.654,10.8,1.208,6.251,9.822,10.326,13.273,13.339-.173.093-.332.186-.478.265-1.725.849-8.3,4.287-9.941,7.924C.948,47.472,3.1,50.432,4.532,50.83c4.433,1.234,8.972-.982,11.428-4.632s2.15-8.388,1.022-10.552l-.04-.08,1.354-.8c.876-.518,1.739-1,2.5-1.407a16.525,16.525,0,0,0-.889,4.513c-.186,2.336.77,5.362,2.031,6.557a2.247,2.247,0,0,0,1.633.531c1.46,0,2.124-1.208,2.854-2.655.9-1.765,1.7-3.809,1.7-3.809s-1,5.535,1.725,5.535c1,0,1.991-1.287,2.442-1.951V42.1s.027-.04.08-.133.109-.166.159-.252v-.027c.4-.69,1.287-2.27,2.615-4.884C36.85,33.43,38.5,29.209,38.5,29.209a24.226,24.226,0,0,0,.65,2.734,26.164,26.164,0,0,0,1.42,3.185c-.4.557-.637.876-.637.876l.013.013c-.318.425-.677.876-1.048,1.327a38.574,38.574,0,0,0-3.185,4A1.094,1.094,0,0,0,36,42.8a2.657,2.657,0,0,0,1.672.265,7.45,7.45,0,0,0,2.5-.571,8.642,8.642,0,0,0,2.15-1.128,4.787,4.787,0,0,0,2.057-4.234,8.513,8.513,0,0,0-.783-2.986c.119-.173.239-.345.358-.531a56.026,56.026,0,0,0,3.716-6.437,24.226,24.226,0,0,0,.65,2.734,19.169,19.169,0,0,0,1.208,2.734A11.8,11.8,0,0,0,45.9,37.332c-.783,2.256-.173,3.278.982,3.517a3.533,3.533,0,0,0,1.818-.372A8.24,8.24,0,0,0,51,39.3c1.327-.982,2.6-2.349,2.535-4.194a8.04,8.04,0,0,0-.571-2.482,12.93,12.93,0,0,1,6.583-.757c5.906.69,7.074,4.38,6.849,5.92a3.965,3.965,0,0,1-1.872,2.655c-.411.252-.544.345-.5.531.053.279.239.265.6.212a4.594,4.594,0,0,0,3.212-4.1c.159-3.65-3.3-7.632-9.45-7.593ZM12.827,44.844c-1.951,2.137-4.7,2.947-5.866,2.256-1.261-.73-.77-3.876,1.633-6.145A31.23,31.23,0,0,1,13.2,37.518c.279-.173.7-.425,1.208-.73a1.417,1.417,0,0,1,.133-.08c.093-.053.2-.119.305-.186a8.466,8.466,0,0,1-2.017,8.322Zm14.268-9.7c-.677,1.659-2.11,5.92-2.973,5.681-.743-.2-1.195-3.424-.146-6.61A14.756,14.756,0,0,1,26.3,29.952c1.075-1.195,2.243-1.593,2.535-1.1C29.179,29.488,27.52,34.107,27.1,35.142ZM38.868,40.77c-.292.146-.557.252-.677.173-.093-.053.119-.252.119-.252s1.473-1.579,2.057-2.309c.332-.425.73-.916,1.155-1.473v.159c0,1.911-1.831,3.185-2.654,3.7ZM47.946,38.7c-.212-.159-.186-.65.531-2.19a8.206,8.206,0,0,1,2.017-2.6,3.283,3.283,0,0,1,.2,1.141A3.735,3.735,0,0,1,47.946,38.7Z"
                      transform="translate(0.116 -0.241)"
                      fill="#cf649a"
                    />
                  </svg>
                </div>
                <div className="flex justify-center items-center">
                  <div title="ELECTRON" className="absolute w-14 h-14"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="53.965"
                    height="58.499"
                    viewBox="0 0 53.965 58.499"
                  >
                    <g id="electron" transform="translate(-0.93)">
                      <path
                        id="Trac??_160"
                        data-name="Trac?? 160"
                        d="M18.864,5.462C11.218,4.067,5.175,5.525,2.765,9.7.968,12.811,1.48,16.94,4.01,21.351a.784.784,0,1,0,1.36-.78C3.091,16.6,2.648,13.035,4.122,10.48c2-3.466,7.393-4.765,14.459-3.478a.784.784,0,1,0,.3-1.538l-.022,0ZM7.986,26.716a49.032,49.032,0,0,0,11.685,9.228c11.09,6.4,22.895,8.114,28.713,4.149a.784.784,0,0,0-.882-1.3c-5.206,3.551-16.421,1.926-27.043-4.209A47.472,47.472,0,0,1,9.146,25.663.783.783,0,1,0,7.969,26.7l.017.02Z"
                        transform="translate(1.105 7.113)"
                        fill="#47848f"
                      />
                      <path
                        id="Trac??_161"
                        data-name="Trac?? 161"
                        d="M46.515,25.735c5.007-5.913,6.754-11.861,4.351-16.024-1.77-3.064-5.509-4.68-10.479-4.746a.785.785,0,0,0-.022,1.57c4.47.058,7.693,1.453,9.14,3.963,2,3.459.439,8.763-4.188,14.227A.784.784,0,1,0,46.5,25.762l.02-.027ZM33.652,5.7a49.014,49.014,0,0,0-13.969,5.535C8.235,17.843.766,27.588,1.8,34.654a.784.784,0,0,0,1.558-.185l0-.041c-.921-6.274,6.157-15.512,17.111-21.835A47.448,47.448,0,0,1,33.981,7.23.784.784,0,0,0,33.652,5.7Z"
                        transform="translate(1.119 7.138)"
                        fill="#47848f"
                      />
                      <path
                        id="Trac??_162"
                        data-name="Trac?? 162"
                        d="M16.223,44.561c2.618,7.307,6.9,11.807,11.714,11.807,3.51,0,6.759-2.394,9.292-6.605a.784.784,0,1,0-1.316-.851l-.024.041c-2.277,3.788-5.075,5.847-7.951,5.847-4,0-7.819-4.012-10.237-10.769a.784.784,0,0,0-1.487.5l.01.032ZM40.13,43.131A49.2,49.2,0,0,0,42.214,28.6c0-12.987-4.546-24.182-11.02-27.058a.784.784,0,0,0-.636,1.433C36.33,5.543,40.644,16.168,40.644,28.6a47.675,47.675,0,0,1-2.011,14.062.784.784,0,1,0,1.484.5l.012-.039Zm14.764-.765a3.751,3.751,0,0,0-7.5,0v0a3.751,3.751,0,0,0,7.5,0Zm-1.567,0a2.185,2.185,0,0,1-4.37,0v0a2.185,2.185,0,0,1,4.37,0ZM4.68,46.116a3.752,3.752,0,0,0,0-7.5h0a3.752,3.752,0,0,0,0,7.5Zm0-1.567a2.184,2.184,0,1,1,2.184-2.184A2.183,2.183,0,0,1,4.68,44.549Z"
                        transform="translate(0.001 2.13)"
                        fill="#47848f"
                      />
                      <path
                        id="Trac??_163"
                        data-name="Trac?? 163"
                        d="M14.223,7.5a3.752,3.752,0,1,0-3.751-3.754A3.753,3.753,0,0,0,14.223,7.5Zm0-1.57a2.184,2.184,0,1,1,2.184-2.184,2.183,2.183,0,0,1-2.184,2.184ZM14.8,33.388a2.716,2.716,0,1,1,2.047-3.178A2.714,2.714,0,0,1,14.8,33.388Z"
                        transform="translate(13.716)"
                        fill="#47848f"
                      />
                      <path
                        id="Trac??_164"
                        data-name="Trac?? 164"
                        d="M8.559,25.4a.784.784,0,0,0-.59,1.3l.017.02a49.032,49.032,0,0,0,11.685,9.228,53.048,53.048,0,0,0,7.134,3.449V37.7a51.721,51.721,0,0,1-6.35-3.117A47.472,47.472,0,0,1,9.144,25.664a.765.765,0,0,0-.585-.268ZM13.546,4.948c-5.08,0-8.962,1.6-10.781,4.748C.968,12.809,1.48,16.938,4.01,21.35a.784.784,0,0,0,1.36-.78c-2.279-3.975-2.723-7.537-1.248-10.091C5.617,7.9,8.995,6.518,13.548,6.518a28.294,28.294,0,0,1,5.033.487.813.813,0,0,0,.151.015.785.785,0,0,0,.154-1.555l-.024,0a29.669,29.669,0,0,0-5.316-.514Z"
                        transform="translate(1.105 7.112)"
                        fill="#3e737c"
                      />
                      <path
                        id="Trac??_165"
                        data-name="Trac?? 165"
                        d="M2.926,33.6c-.058.017-.117.039-.173.061a.808.808,0,0,0,.173-.061ZM26.794,6.125a53.67,53.67,0,0,0-7.11,3.439C8.542,16,1.171,25.4,1.739,32.408a3.723,3.723,0,0,1,1.543-.463c-.241-6.24,6.7-14.968,17.186-21.023a52.462,52.462,0,0,1,6.325-3.108V6.125Z"
                        transform="translate(1.119 8.804)"
                        fill="#3e737c"
                      />
                      <path
                        id="Trac??_166"
                        data-name="Trac?? 166"
                        d="M16.959,21.6a.739.739,0,0,0-.249.041.785.785,0,0,0-.495.992l.01.032c2.613,7.293,6.883,11.79,11.688,11.807V32.9c-3.99-.017-7.8-4.027-10.213-10.769a.78.78,0,0,0-.741-.536ZM4.045,18.377a2.191,2.191,0,1,1-.173.061,1.629,1.629,0,0,1,.173-.061Zm.639-1.662h0c-.093,0-.188,0-.28.01a3.761,3.761,0,1,0,.283-.01Z"
                        transform="translate(0 24.027)"
                        fill="#3e737c"
                      />
                      <path
                        id="Trac??_167"
                        data-name="Trac?? 167"
                        d="M13.272.643a2.184,2.184,0,0,0,0,4.368V.643Z"
                        transform="translate(14.64 0.924)"
                        fill="#dedede"
                      />
                      <path
                        id="Trac??_168"
                        data-name="Trac?? 168"
                        d="M14.184,28.026a2.685,2.685,0,0,0-.536.054,2.716,2.716,0,0,0,.548,5.37V28.026ZM14.2,0a3.751,3.751,0,0,0,0,7.5V5.935a2.184,2.184,0,0,1,0-4.368V0Z"
                        transform="translate(13.716)"
                        fill="#3e737c"
                      />
                    </g>
                  </svg>
                </div>
                <div className="flex justify-center items-center">
                  <div title="BOOTSTRAP" className="absolute w-14 h-14"></div>
                  <svg
                    id="bootstrap"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="58.498"
                    height="58.498"
                    viewBox="0 0 58.498 58.498"
                  >
                    <defs>
                      <clipPath id="clip-path">
                        <path
                          id="Trac??_39"
                          data-name="Trac?? 39"
                          d="M0,0H58.5V58.5H0Z"
                          fill="#f7df1e"
                        />
                      </clipPath>
                    </defs>
                    <g
                      id="Groupe_de_masques_2"
                      data-name="Groupe de masques 2"
                      clip-path="url(#clip-path)"
                    >
                      <g id="bootstrap-2" data-name="bootstrap">
                        <path
                          id="Trac??_50"
                          data-name="Trac?? 50"
                          d="M0,50.955A7.543,7.543,0,0,0,7.543,58.5H50.955A7.543,7.543,0,0,0,58.5,50.955V7.543A7.543,7.543,0,0,0,50.955,0H7.543A7.543,7.543,0,0,0,0,7.543V50.955Z"
                          fill="#563d7c"
                        />
                        <path
                          id="Trac??_51"
                          data-name="Trac?? 51"
                          d="M24.258,25.876V17.592H31.55a11.343,11.343,0,0,1,2.009.174,5.014,5.014,0,0,1,1.712.62,3.307,3.307,0,0,1,1.191,1.24,4.118,4.118,0,0,1,.447,2.034,3.747,3.747,0,0,1-1.34,3.224,5.6,5.6,0,0,1-3.423.992H24.258ZM16.47,11.54V46.958H33.633a18.108,18.108,0,0,0,4.638-.6,12.405,12.405,0,0,0,4.018-1.835,9.041,9.041,0,0,0,2.8-3.2,9.746,9.746,0,0,0,1.042-4.638,9.814,9.814,0,0,0-1.612-5.68,8.513,8.513,0,0,0-4.886-3.3,8.828,8.828,0,0,0,3.6-2.927,7.759,7.759,0,0,0,1.215-4.465,9.5,9.5,0,0,0-.819-4.167,6.807,6.807,0,0,0-2.307-2.7,9.956,9.956,0,0,0-3.572-1.463,22.05,22.05,0,0,0-4.613-.447H16.47Zm7.788,29.367V31.184H32.74a6.562,6.562,0,0,1,4.068,1.166,4.58,4.58,0,0,1,1.538,3.894,4.868,4.868,0,0,1-.471,2.282,3.743,3.743,0,0,1-1.265,1.414,5.357,5.357,0,0,1-1.835.744,10.414,10.414,0,0,1-2.183.223H24.258Z"
                          fill="#fff"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="flex justify-center items-center">
                  <div title="TAILWINDCSS" className="absolute w-14 h-14"></div>
                  <svg
                    id="tailwindcss"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="58.498"
                    height="58.498"
                    viewBox="0 0 58.498 58.498"
                  >
                    <defs>
                      <clipPath id="clip-path">
                        <path
                          id="Trac??_39"
                          data-name="Trac?? 39"
                          d="M0,0H58.5V58.5H0Z"
                          fill="#f7df1e"
                        />
                      </clipPath>
                      <clipPath id="clip-path-2">
                        <path
                          id="Trac??_49"
                          data-name="Trac?? 49"
                          d="M0,0H58.5V35.1H0Z"
                          fill="#fff"
                        />
                      </clipPath>
                    </defs>
                    <g
                      id="Groupe_de_masques_1"
                      data-name="Groupe de masques 1"
                      clip-path="url(#clip-path)"
                    >
                      <g
                        id="tailwindcss-mark.cb8046c163f77190406dfbf4dec89848_1_"
                        data-name="tailwindcss-mark.cb8046c163f77190406dfbf4dec89848 (1)"
                        transform="translate(0 11.7)"
                        clip-path="url(#clip-path-2)"
                      >
                        <path
                          id="Trac??_48"
                          data-name="Trac?? 48"
                          d="M29.249,0q-11.7,0-14.625,11.7,4.387-5.85,10.237-4.387c2.225.556,3.815,2.171,5.576,3.957,2.867,2.911,6.187,6.28,13.436,6.28q11.7,0,14.625-11.7-4.387,5.85-10.237,4.387c-2.225-.556-3.815-2.171-5.576-3.957C39.818,3.369,36.5,0,29.249,0ZM14.625,17.549q-11.7,0-14.625,11.7,4.387-5.85,10.237-4.387c2.225.557,3.815,2.171,5.576,3.957C18.68,31.73,22,35.1,29.249,35.1q11.7,0,14.625-11.7-4.387,5.85-10.237,4.387c-2.225-.556-3.815-2.171-5.576-3.957C25.193,20.918,21.874,17.549,14.625,17.549Z"
                          fill="#06b6d4"
                          fill-rule="evenodd"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            {/* Back-end development */}
            <div className="shadow-lg p-8 flex flex-col items-center mt-12 md:h-full 2xl:p-24">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="68.293"
                height="45.529"
                viewBox="0 0 68.293 45.529"
              >
                <path
                  id="ic_cloud_upload_24px"
                  d="M55.061,21.187A21.32,21.32,0,0,0,15.224,15.5a17.066,17.066,0,0,0,1.85,34.033H54.065a14.187,14.187,0,0,0,1-28.342ZM39.838,29.61V40.992H28.456V29.61H19.919L34.147,15.382,48.374,29.61Z"
                  transform="translate(0 -4)"
                  fill="#333"
                />
              </svg>
              <h4 className="text-black text-center font-semibold uppercase mt-8 text-xl dark:text-white">
                Back-end development
              </h4>
              <span className="my-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="190"
                  height="5"
                  viewBox="0 0 190 5"
                >
                  <line
                    id="Ligne_3"
                    data-name="Ligne 3"
                    x2="185"
                    transform="translate(2.5 2.5)"
                    fill="none"
                    stroke="#05dec0"
                    stroke-linecap="round"
                    stroke-width="5"
                  />
                </svg>
              </span>
              <div>
                <h5 className="font-medium uppercase text-center">Languages</h5>
                <h5 className="font-medium uppercase text-center">Tools</h5>
                <h5 className="font-medium uppercase text-center">
                  Frameworks
                </h5>
              </div>
              <div className="grid gap-4 grid-cols-3 mt-8">
                <div className="flex justify-center items-center">
                  <div title="NODEJS" className="absolute w-14 h-14"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="51.068"
                    height="57.711"
                    viewBox="0 0 51.068 57.711"
                  >
                    <path
                      id="node-js"
                      d="M59.005,16.329,37.937,4.108a4.559,4.559,0,0,0-4.4,0L12.3,16.329A4.535,4.535,0,0,0,10,20.182V44.59a4.567,4.567,0,0,0,2.32,3.858l5.6,3.192c2.686,1.323,3.43,1.323,4.651,1.323,3.978,0,6.043-2.4,6.043-6.6v-24.1c0-.34.213-.847-.122-.847H25.808c-.34,0-1.013.506-1.013.846v24.1c0,1.859-1.726,3.71-4.869,2.138l-5.785-3.347a.64.64,0,0,1-.323-.564V20.182a.787.787,0,0,1,.425-.579L35.424,7.4a.72.72,0,0,1,.675,0L57.081,19.6c.2.121.169.345.169.582V44.59c0,.233.044.46-.154.572L36.033,57.369a.619.619,0,0,1-.613,0l-5.4-3.221a.527.527,0,0,0-.515-.041,14.051,14.051,0,0,1-3.188,1.452c-.347.121-.859.33.195.921l7.063,4.178a4.45,4.45,0,0,0,4.445,0l20.988-12.21a4.336,4.336,0,0,0,2.063-3.858V20.182a4.322,4.322,0,0,0-2.063-3.853ZM42.324,40.722c-5.6,0-6.829-1.544-7.24-4.327-.049-.3-.3-.658-.608-.658H31.741c-.338,0-.611.41-.611.747,0,3.563,1.938,7.881,11.194,7.881,6.7,0,10.542-2.6,10.542-7.211,0-4.568-3.087-5.767-9.585-6.627-6.568-.868-7.235-1.307-7.235-2.845,0-1.269.565-2.961,5.428-2.961,4.345,0,5.947.933,6.606,3.862a.6.6,0,0,0,.592.473h2.746a.627.627,0,0,0,.448-.189.618.618,0,0,0,.16-.467C51.6,23.355,48.251,21,41.474,21c-6.029,0-9.625,2.546-9.625,6.813,0,4.629,3.578,5.908,9.365,6.48,6.923.679,7.461,1.69,7.461,3.052C48.676,39.715,46.777,40.722,42.324,40.722Z"
                      transform="translate(-10 -3.541)"
                      fill="#83cd29"
                    />
                  </svg>
                </div>
                <div className="flex justify-center items-center">
                  <div title="EXPRESSJS" className="absolute w-14 h-14"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="58.105"
                    height="33.725"
                    viewBox="0 0 58.105 33.725"
                  >
                    <g
                      id="Groupe_16"
                      data-name="Groupe 16"
                      transform="translate(-301.523 -2490.73)"
                    >
                      <path
                        id="express"
                        d="M58.707,45.624a3.7,3.7,0,0,1-4.593-1.738c-2.632-3.944-5.538-7.707-8.342-11.54-.362-.5-.737-.983-1.205-1.6-3.318,4.477-6.632,8.741-9.742,13.176-1.112,1.585-2.28,2.276-4.357,1.715L42.945,28.892,31.33,13.77c2-.389,3.379-.19,4.6,1.6,2.7,3.949,5.682,7.707,8.653,11.684,2.989-3.963,5.932-7.726,8.713-11.638a3.465,3.465,0,0,1,4.324-1.6c-1.52,2.016-3.008,4-4.5,5.969-2.021,2.656-4,5.344-6.1,7.944a1.629,1.629,0,0,0,.042,2.405C50.935,35.223,54.763,40.368,58.707,45.624ZM.616,28.614c.334-1.673.556-3.379,1.02-5.019,2.781-9.932,14.182-14.062,22.015-7.907,4.588,3.61,5.728,8.7,5.5,14.437H3.291C2.9,40.419,10.312,46.634,19.758,43.464c3.314-1.112,5.265-3.708,6.243-6.952.5-1.627,1.316-1.882,2.846-1.418-.783,4.06-2.558,7.453-6.266,9.575C17.018,47.848,9.079,46.819,4.9,42.4A16.008,16.008,0,0,1,.927,33.087c-.07-.556-.213-1.1-.324-1.655Q.616,30.023.616,28.614Zm2.721-.691H26.71c-.153-7.443-4.788-12.731-11.123-12.778C8.634,15.09,3.638,20.253,3.337,27.924Z"
                        transform="translate(300.92 2477.938)"
                      />
                    </g>
                  </svg>
                </div>
                <div className="flex justify-center items-center">
                  <div title="SOCKET.IO" className="absolute w-14 h-14"></div>
                  <svg
                    id="javascript"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="58.498"
                    height="58.498"
                    viewBox="0 0 58.498 58.498"
                  >
                    <defs>
                      <clipPath id="clip-path">
                        <path
                          id="Trac??_39"
                          data-name="Trac?? 39"
                          d="M0,0H58.5V58.5H0Z"
                          fill="#f7df1e"
                        />
                      </clipPath>
                    </defs>
                    <g
                      id="Groupe_de_masques_4"
                      data-name="Groupe de masques 4"
                      clip-path="url(#clip-path)"
                    >
                      <g id="socket.io" transform="translate(-0.782 -0.779)">
                        <path
                          id="Trac??_58"
                          data-name="Trac?? 58"
                          d="M22.623,1.732A29.246,29.246,0,0,1,59.267,29.368,29.233,29.233,0,1,1,22.623,1.732Z"
                          fill="#010101"
                        />
                        <path
                          id="Trac??_59"
                          data-name="Trac?? 59"
                          d="M21.464,6.522C35.764.8,53.3,11.367,54.784,26.7c2.3,13.8-9.147,27.818-23.126,28.223C18.364,56.251,5.516,44.981,5.139,31.63,4.148,20.822,11.27,10.1,21.464,6.522Z"
                          fill="#fff"
                        />
                        <path
                          id="Trac??_60"
                          data-name="Trac?? 60"
                          d="M22.9,28.544c6.41-5.237,12.68-10.655,19.23-15.739-3.435,5.279-6.968,10.488-10.4,15.766-2.947.014-5.893.014-8.826-.028Zm5.418,2.918c2.96,0,5.907,0,8.854.042C30.723,36.714,24.48,42.174,17.917,47.243c3.435-5.279,6.968-10.5,10.4-15.78Z"
                          fill="#010101"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="flex justify-center items-center">
                  <div title="GRAPHQL" className="absolute w-14 h-14"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50.841"
                    height="58.105"
                    viewBox="0 0 50.841 58.105"
                  >
                    <g
                      id="Groupe_15"
                      data-name="Groupe 15"
                      transform="translate(-526.082 -2478.147)"
                    >
                      <path
                        id="graphql"
                        d="M11.275,12.633a5.054,5.054,0,0,0-6.968,1.893,5.246,5.246,0,0,0-.533,1.37,5.19,5.19,0,0,0,3.762,6.256l0,13.8A5.081,5.081,0,0,0,5.05,37.41a5.247,5.247,0,0,0,.167,7.326,5.034,5.034,0,0,0,7.2-.169l11.749,6.893a5.268,5.268,0,0,0-.211,1.474A5.133,5.133,0,0,0,29.052,58.1a5.053,5.053,0,0,0,1.6-.261,5.2,5.2,0,0,0,3.239-6.551l11.674-6.856a5.139,5.139,0,0,0,1.252,1.039,5.055,5.055,0,0,0,6.968-1.893,5.221,5.221,0,0,0,.552-1.407,5.167,5.167,0,0,0-3.76-6.22v-13.8a5.012,5.012,0,0,0,1.329-.54A5.24,5.24,0,0,0,53.8,14.529a5.14,5.14,0,0,0-.9-1.155,5.044,5.044,0,0,0-7.217.186L33.933,6.66a5.267,5.267,0,0,0,.213-1.494A5.13,5.13,0,0,0,29.052,0,5,5,0,0,0,27.6.213a5.19,5.19,0,0,0-3.431,6.433l-11.754,6.9A4.925,4.925,0,0,0,11.275,12.633ZM32.819,49.44a5.042,5.042,0,0,0-7.433-.109l-11.757-6.9.051-.2H44.423c.027.116.056.23.09.344ZM32.708,8.783,44.482,15.7c-.017.056-.031.116-.046.174a5.176,5.176,0,0,0,3.709,6.266V35.96c-.063.017-.133.034-.2.056L32.57,8.924A1.509,1.509,0,0,0,32.708,8.783Zm-5.072,1.37a5.05,5.05,0,0,0,2.837,0L45.854,37.235a5.242,5.242,0,0,0-1.436,2.528H13.689a5.268,5.268,0,0,0-1.428-2.52Zm-14.02,5.532,11.773-6.9.143.145L10.159,36.015l-.2-.056V22.14c.061-.017.119-.031.182-.051A5.183,5.183,0,0,0,13.616,15.686Z"
                        transform="translate(522.45 2478.147)"
                        fill="#df34a6"
                      />
                    </g>
                  </svg>
                </div>
                <div className="flex justify-center items-center">
                  <div title="PHP" className="absolute w-14 h-14"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="72.003"
                    height="39.001"
                    viewBox="0 0 72.003 39.001"
                  >
                    <g id="php" transform="translate(0 -5.5)">
                      <path
                        id="Trac??_61"
                        data-name="Trac?? 61"
                        d="M36,44.5c19.879,0,36-8.724,36-19.5S55.88,5.5,36,5.5,0,14.224,0,25,16.123,44.5,36,44.5Z"
                        fill="#878eb7"
                      />
                      <path
                        id="Trac??_62"
                        data-name="Trac?? 62"
                        d="M7.781,32.138l.978-5.19c4.623,0,7.491.351,10.146-2.211,2.937-2.781,3.7-7.728,1.608-10.206-1.092-1.3-2.844-1.938-5.232-1.938H7.331L3.653,32.138H7.781ZM10.9,15.676c4.272,0,7.176-.474,6.345,3.975v0c-.888,4.692-4.029,4.206-7.887,4.206L10.9,15.676Zm14.074,11.25,2.112-11.193c3.342,0,4.725-.138,5.334.537.63.7.3,1.458-1.428,10.659h4.164c1.8-9.516,2.6-11.529.93-13.107-1.584-1.506-4.869-1.239-8.415-1.239l.978-5.19h-4.1L20.865,26.927Zm15.085,5.211.978-5.19c4.86,0,7.548.291,10.149-2.211,2.937-2.781,3.7-7.728,1.608-10.206-1.092-1.3-2.847-1.938-5.232-1.938H39.606l-3.69,19.546h4.14Zm3.105-16.462c4.3,0,7.176-.474,6.345,3.975v0c-.9,4.764-4.128,4.206-7.887,4.206l1.542-8.178Z"
                        transform="translate(7.306 3.786)"
                        fill="#23282c"
                      />
                      <path
                        id="Trac??_63"
                        data-name="Trac?? 63"
                        d="M24.1,12H17.161l-.5,2.643c.66,0,1.3.015,1.911.015,2.5,0,4.515-.24,5.523-2.658ZM72,12H60.746a9.032,9.032,0,0,1-2.256,3.522c-2.109,2.031-4.275,2.223-7.614,2.223-.777,0-1.617-.012-2.532-.012l-.978,5.19h-4.14L45.284,12H43.571c-.3,1.53-.678,3.4-1.116,5.715H38.29c.462-2.451.825-4.305,1.1-5.715H33.352l-1.077,5.712h-4.1L29.245,12h-.774a9.032,9.032,0,0,1-2.256,3.522c-2.085,2.013-4.3,2.226-7.4,2.226-.846,0-1.755-.015-2.748-.015l-.978,5.19H10.956L13.014,12H0C0,22.776,16.123,31.5,36,31.5S72,22.776,72,12Z"
                        transform="translate(0 13.001)"
                        fill="#767c9f"
                      />
                      <path
                        id="Trac??_64"
                        data-name="Trac?? 64"
                        d="M21.165,12H16.79c-1.011,2.418-3.027,2.655-5.526,2.655-.612,0-1.251-.015-1.911-.015l.5-2.64H5.708L3.653,22.923H7.784l.978-5.19c.99,0,1.9.015,2.748.015,3.1,0,5.313-.216,7.4-2.226A9.1,9.1,0,0,0,21.165,12Zm4.884,0h-4.11l-1.074,5.712h4.107L26.049,12Zm10.218,0H32.085c-.27,1.413-.633,3.264-1.1,5.715h4.164c.435-2.316.813-4.188,1.113-5.715Z"
                        transform="translate(7.306 13.001)"
                        fill="#1e2326"
                      />
                      <path
                        id="Trac??_65"
                        data-name="Trac?? 65"
                        d="M23.746,12H16.807l-.5,2.643c.714,0,1.407.021,2.07.021,2.388,0,4.368-.264,5.367-2.664Z"
                        transform="translate(32.62 13.001)"
                        fill="#767c9f"
                      />
                      <path
                        id="Trac??_66"
                        data-name="Trac?? 66"
                        d="M31.931,12H27.55c-1,2.4-2.979,2.661-5.367,2.661-.663,0-1.356-.021-2.07-.021l.5-2.64h-4.14L14.407,22.923h4.14l.978-5.19c.918,0,1.758.012,2.532.012,3.339,0,5.508-.192,7.614-2.223A9.005,9.005,0,0,0,31.931,12Z"
                        transform="translate(28.816 13.001)"
                        fill="#1e2326"
                      />
                    </g>
                  </svg>
                </div>
                <div className="flex justify-center items-center">
                  <div title="LARAVEL" className="absolute w-14 h-14"></div>
                  <svg
                    id="laravel"
                    xmlns="http://www.w3.org/2000/svg"
                    width="57.706"
                    height="57.706"
                    viewBox="0 0 57.706 57.706"
                  >
                    <path
                      id="Trac??_67"
                      data-name="Trac?? 67"
                      d="M57.706,5.448c-.382-.464-.878-1.089-1.366-1.722l-.149-.2V3.5c-.6-.817-1.034-.7-1.515-.577S43.207,5.013,42.534,5.085c-.673.12-.457.481-.168.866L51.983,19.18l5.722-1.368ZM.048,31.666l10.411-2.5c.842-.192.625-.289.216-1.034L.048,9.776ZM7.694,53.724H24.982c-2.26-3.681-8.415-14.794-11.613-20.591h-.024v-.024L0,36.6v9.454A7.7,7.7,0,0,0,7.694,53.724Z"
                      transform="translate(0 3.982)"
                      fill="#f34e39"
                    />
                    <path
                      id="Trac??_68"
                      data-name="Trac?? 68"
                      d="M25.9,15.852V10.584l-3.246.892.24.337Z"
                      transform="translate(31.81 14.864)"
                      fill="#f34e39"
                    />
                    <path
                      id="Trac??_69"
                      data-name="Trac?? 69"
                      d="M48.374,24.006,37.482,8.562c-.914-1.274,0-1.851,1.491-2.092,1.443-.264,14.042-2.38,15.148-2.525a2.676,2.676,0,0,1,2.885.721A7.633,7.633,0,0,0,49.961,0H7.584A7.66,7.66,0,0,0,.07,6.23L15.434,31.894Zm9.233,12.363-6.155-8.418c-.385-.6-.6-.721-1.539-.409L17.79,35.912s9.858,17.078,10.6,18.16c.769,1.106,1.226,1.01,1.827.769.433-.192,18.754-6.4,27.386-9.31Zm-.024,14.265L37.891,57.682h12.07A7.639,7.639,0,0,0,57.583,50.634Z"
                      transform="translate(0.098)"
                      fill="#f34e39"
                    />
                  </svg>
                </div>
                <div className="flex justify-center items-center">
                  <div title="MONGODB" className="absolute w-14 h-14"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25.602"
                    height="57.175"
                    viewBox="0 0 25.602 57.175"
                  >
                    <g id="mongodb" transform="translate(-6.627)">
                      <path
                        id="Trac??_70"
                        data-name="Trac?? 70"
                        d="M15.307,53.01l-1.522-.519s.186-7.759-2.6-8.317c-1.856-2.154.3-91.331,6.98-.3,0,0-2.3,1.151-2.711,3.118a28.806,28.806,0,0,0-.148,6.015Z"
                        transform="translate(5.421 4.164)"
                        fill="#fff"
                      />
                      <path
                        id="Trac??_71"
                        data-name="Trac?? 71"
                        d="M15.307,53.01l-1.522-.519s.186-7.759-2.6-8.317c-1.856-2.154.3-91.331,6.98-.3,0,0-2.3,1.151-2.711,3.118a28.806,28.806,0,0,0-.148,6.015Z"
                        transform="translate(5.421 4.164)"
                        fill="#a6a385"
                      />
                      <path
                        id="Trac??_72"
                        data-name="Trac?? 72"
                        d="M14.245,49.588S27.574,40.826,24.455,22.6C21.449,9.344,14.357,5,13.578,3.329A18.809,18.809,0,0,1,11.908.063l.557,36.866c0,.036-1.153,11.285,1.78,12.659Z"
                        transform="translate(7.3 0.087)"
                        fill="#fff"
                      />
                      <path
                        id="Trac??_73"
                        data-name="Trac?? 73"
                        d="M14.245,49.588S27.574,40.826,24.455,22.6C21.449,9.344,14.357,5,13.578,3.329A18.809,18.809,0,0,1,11.908.063l.557,36.866c0,.036-1.153,11.285,1.78,12.659Z"
                        transform="translate(7.3 0.087)"
                        fill="#499d4a"
                      />
                      <path
                        id="Trac??_74"
                        data-name="Trac?? 74"
                        d="M18.427,50.156S5.915,41.618,6.658,26.581C7.364,11.544,16.2,4.157,17.908,2.821A3.446,3.446,0,0,0,19.132,0c.779,1.67.631,24.985.743,27.732C20.209,38.314,19.282,48.153,18.427,50.156Z"
                        transform="translate(0)"
                        fill="#fff"
                      />
                      <path
                        id="Trac??_75"
                        data-name="Trac?? 75"
                        d="M18.427,50.156S5.915,41.618,6.658,26.581C7.364,11.544,16.2,4.157,17.908,2.821A3.446,3.446,0,0,0,19.132,0c.779,1.67.631,24.985.743,27.732C20.209,38.314,19.282,48.153,18.427,50.156Z"
                        transform="translate(0)"
                        fill="#58aa50"
                      />
                    </g>
                  </svg>
                </div>
                <div className="flex justify-center items-center">
                  <div title="MYSQL" className="absolute w-14 h-14"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="82.887"
                    height="55.268"
                    viewBox="0 0 82.887 55.268"
                  >
                    <g id="mysql" transform="translate(0 -4.148)">
                      <path
                        id="Trac??_76"
                        data-name="Trac?? 76"
                        d="M7.479,31.425a9.385,9.385,0,0,1-1.333-.086V33.01a5.432,5.432,0,0,0,1.955.47q2.968,0,5.467-3.64,3.191-4.714,5.153-15.123H15.681A51.335,51.335,0,0,1,12.8,26.527a10.558,10.558,0,0,0-.708-3.806L9.579,14.716H6.436l3.5,10.7a13.647,13.647,0,0,1,.794,3.2,2.715,2.715,0,0,1-1.019,2.055,3.3,3.3,0,0,1-2.234.749Z"
                        transform="translate(15.08 25.93)"
                        fill="#105e86"
                      />
                      <path
                        id="Trac??_77"
                        data-name="Trac?? 77"
                        d="M19.482,13.293V32.039h9.083v-2.3H22.538V13.293Z"
                        transform="translate(47.801 22.438)"
                        fill="#de8a03"
                      />
                      <path
                        id="Trac??_78"
                        data-name="Trac?? 78"
                        d="M3.592,17.092h.035L8.461,32.043H10.9l4.87-14.951h.028c.508,4.68.829,9.656.932,14.951h3.212Q19.71,23.552,18.46,13.3H14.678L10.026,27.073H10L5.388,13.293H1.416Q.287,22.038,0,32.039H2.918q.14-8.216.673-14.947Z"
                        transform="translate(0 22.438)"
                        fill="#105e86"
                      />
                      <path
                        id="Trac??_79"
                        data-name="Trac?? 79"
                        d="M39.069,22.521q0-9.309-7.443-9.311a7.139,7.139,0,0,0-5.7,2.366Q23.7,18.161,23.7,23.188c0,3.295.656,5.716,1.986,7.253a6.834,6.834,0,0,0,5.467,2.089,8.784,8.784,0,0,0,2.5-.335l4.576,2.618,1.243-2.11h-.01l-3.509-1.7a7.849,7.849,0,0,0,.884-.846q2.233-2.575,2.231-7.639ZM31.46,30.205a3.711,3.711,0,0,1-3.378-1.7l.007-.017c-.777-1.219-1.164-3.188-1.164-5.885q0-7.082,4.386-7.087a3.709,3.709,0,0,1,3.374,1.7q1.16,1.839,1.16,5.84c0,4.759-1.464,7.149-4.386,7.149ZM20.146,23.1s-2.742-1.544-4.1-2.272c-1.492-.812-2.3-1.772-2.3-2.88A2.312,2.312,0,0,1,14.6,16.17a3.282,3.282,0,0,1,2.259-.7,9.516,9.516,0,0,1,3.675.781l.736-1.616a8.785,8.785,0,0,0-4.835-1.388,6.189,6.189,0,0,0-4.213,1.409A4.609,4.609,0,0,0,10.6,18.335a4.469,4.469,0,0,0,2.183,3.992s2.68,1.506,4.017,2.228c1.444.794,2.238,1.748,2.238,2.867A2.55,2.55,0,0,1,18,29.508a4.382,4.382,0,0,1-2.7.746,9.352,9.352,0,0,1-4.11-1.112l-.819,1.616A9.7,9.7,0,0,0,15.8,32.505a7.1,7.1,0,0,0,4.783-1.53,4.924,4.924,0,0,0,1.782-3.92l.021.01A4.409,4.409,0,0,0,20.146,23.1Z"
                        transform="translate(25.442 22.235)"
                        fill="#de8a03"
                      />
                      <path
                        id="Trac??_80"
                        data-name="Trac?? 80"
                        d="M17.761,16.008H14.935A48.06,48.06,0,0,1,12.8,23.357a10.558,10.558,0,0,0-.708-3.806l-1.112-3.54H7.9l2.041,6.241a13.647,13.647,0,0,1,.794,3.2,2.715,2.715,0,0,1-1.019,2.055,3.28,3.28,0,0,1-2.234.753,9.385,9.385,0,0,1-1.333-.086v1.672a5.432,5.432,0,0,0,1.955.47q2.968,0,5.467-3.64a34.042,34.042,0,0,0,4.193-10.668Z"
                        transform="translate(15.08 29.1)"
                        fill="#0e5275"
                      />
                      <path
                        id="Trac??_81"
                        data-name="Trac?? 81"
                        d="M22.538,16.008H19.482v9.37h9.083v-2.3H22.538Z"
                        transform="translate(47.801 29.1)"
                        fill="#c17803"
                      />
                      <path
                        id="Trac??_82"
                        data-name="Trac?? 82"
                        d="M3.229,16.008H.473Q.136,20.546,0,25.378H2.918q.083-4.952.311-9.37Zm10.72,0H11.511l-1.485,4.4H10l-1.475-4.4H5.433l3.029,9.373H10.9l3.053-9.373Zm5.471,0H16.3q.332,4.512.428,9.373h3.212q-.119-4.445-.518-9.373Z"
                        transform="translate(0 29.1)"
                        fill="#0e5275"
                      />
                      <path
                        id="Trac??_83"
                        data-name="Trac?? 83"
                        d="M39.065,16.008H35.846v.187q0,7.139-4.386,7.146a3.711,3.711,0,0,1-3.378-1.7l.007-.017a11,11,0,0,1-1.164-5.619H23.7c0,.1,0,.207,0,.314,0,3.295.656,5.716,1.986,7.253a6.834,6.834,0,0,0,5.467,2.089,8.784,8.784,0,0,0,2.5-.335l4.576,2.618,1.243-2.11h-.01l-3.509-1.7a7.85,7.85,0,0,0,.884-.846c1.44-1.654,2.183-4.089,2.231-7.287Zm-19.326,0H13.76c.9.5,2.221,1.24,3.039,1.678,1.444.794,2.238,1.748,2.238,2.867A2.55,2.55,0,0,1,18,22.639a4.382,4.382,0,0,1-2.7.746,9.352,9.352,0,0,1-4.11-1.112l-.819,1.616A9.7,9.7,0,0,0,15.8,25.637a7.1,7.1,0,0,0,4.783-1.53,4.924,4.924,0,0,0,1.782-3.92l.021.01a4.392,4.392,0,0,0-2.238-3.958s-.159-.09-.411-.231Z"
                        transform="translate(25.442 29.1)"
                        fill="#c17803"
                      />
                      <path
                        id="Trac??_84"
                        data-name="Trac?? 84"
                        d="M17.081,5.776a3.856,3.856,0,0,0-.95.111v.045h.048a7.617,7.617,0,0,0,.739.926c.186.359.345.725.532,1.084L17.5,7.89a1.255,1.255,0,0,0,.487-1.129l-.276-.473-.622-.521,0,.01Z"
                        transform="translate(39.579 3.97)"
                        fill="#105e86"
                      />
                      <path
                        id="Trac??_85"
                        data-name="Trac?? 85"
                        d="M47.063,35.408a11,11,0,0,0-2.4-2.286c-.739-.5-2.355-1.188-2.659-2.02l-.045-.048a9.613,9.613,0,0,0,1.589-.359c.784-.207,1.5-.159,2.314-.359.366-.09.736-.2,1.1-.318v-.207c-.414-.4-.725-.957-1.154-1.337A30.573,30.573,0,0,0,42,25.686c-.725-.456-1.644-.746-2.407-1.133l-.9-.432a8.626,8.626,0,0,1-.95-1.741c-.663-1.247-1.312-2.628-1.889-3.947a23.73,23.73,0,0,0-1.174-2.587,23.092,23.092,0,0,0-8.931-8.475,11.368,11.368,0,0,0-2.956-.926c-.577-.028-1.154-.069-1.727-.093a8.291,8.291,0,0,1-1.071-.8c-1.312-.812-4.711-2.576-5.678-.242-.622,1.471.922,2.922,1.461,3.671a10.52,10.52,0,0,1,1.174,1.692c.162.4.207.8.37,1.209a26.765,26.765,0,0,0,1.2,3.043,10.289,10.289,0,0,0,.853,1.4c.186.252.5.366.577.77a6.534,6.534,0,0,0-.532,1.7,9.88,9.88,0,0,0,.67,7.629c.37.563,1.25,1.813,2.428,1.333,1.036-.4.808-1.7,1.105-2.829l.166-.635v.052c.325.639.649,1.243.946,1.882a13.014,13.014,0,0,0,2.994,3.036c.553.4.991,1.109,1.682,1.361v-.066h-.052l-.532-.452a12.255,12.255,0,0,1-1.209-1.354,29.837,29.837,0,0,1-2.58-4.131c-.38-.711-.7-1.478-1-2.179l-.37-.825a8.3,8.3,0,0,0-1.105,1.537,12.717,12.717,0,0,0-.649,3.423l-.093.048c-.739-.176-.991-.926-1.267-1.558a9.678,9.678,0,0,1-.207-6.054c.162-.473.853-1.975.577-2.424-.145-.432-.6-.68-.853-1.029a8.574,8.574,0,0,1-.829-1.447c-.553-1.267-.829-2.673-1.43-3.944a11.483,11.483,0,0,0-1.154-1.737,11.494,11.494,0,0,1-1.271-1.765l-.093-.929.325-.307,1.457.211A11.952,11.952,0,0,1,19.358,6.77c.325.224.673.656,1.088.767h.484c.739.159,1.571.048,2.262.249a15.017,15.017,0,0,1,3.322,1.558,20.323,20.323,0,0,1,7.2,7.75c.276.521.4,1,.649,1.544.484,1.119,1.081,2.245,1.571,3.329a14.686,14.686,0,0,0,1.644,3.043c.345.473,1.734.722,2.355.967.459.207,1.174.394,1.589.639.794.477,1.568,1.019,2.314,1.54.38.256,1.53.822,1.6,1.281a10.712,10.712,0,0,0-4.479.639c-.345.135-.9.135-.946.566l.38.725a5.249,5.249,0,0,0,1.195,1.381c.484.373.967.732,1.475,1.05.9.542,1.917.863,2.8,1.409.5.318,1.012.722,1.52,1.06.252.169.414.473.739.584v-.073l-.363-.725-.691-.646Z"
                        transform="translate(34.77 0.003)"
                        fill="#105e86"
                      />
                      <path
                        id="Trac??_86"
                        data-name="Trac?? 86"
                        d="M17.087,5.767l-.007.007a3.856,3.856,0,0,0-.95.111v.045h.048a7.617,7.617,0,0,0,.739.926c.187.359.345.725.532,1.084l.045-.052a1.255,1.255,0,0,0,.487-1.129L17.7,6.285l-.618-.518Z"
                        transform="translate(39.577 3.972)"
                        fill="#0e5275"
                      />
                      <path
                        id="Trac??_87"
                        data-name="Trac?? 87"
                        d="M16.151,4.148a1.821,1.821,0,0,0-1.834,1.164c-.622,1.471.922,2.922,1.461,3.671a10.52,10.52,0,0,1,1.174,1.692c.162.4.207.8.37,1.209a26.766,26.766,0,0,0,1.2,3.043,10.289,10.289,0,0,0,.853,1.4c.186.252.5.366.577.77a6.534,6.534,0,0,0-.532,1.7,9.88,9.88,0,0,0,.67,7.629c.311.477.988,1.44,1.9,1.44a1.362,1.362,0,0,0,.528-.107c1.036-.4.808-1.7,1.105-2.829l.166-.635v.052c.325.639.649,1.243.946,1.882a13.015,13.015,0,0,0,2.994,3.036c.553.4.991,1.109,1.682,1.361v-.066h-.052l-.532-.452a12.255,12.255,0,0,1-1.209-1.354,29.836,29.836,0,0,1-2.58-4.131c-.38-.711-.7-1.478-1-2.179l-.373-.822a8.3,8.3,0,0,0-1.105,1.537,12.717,12.717,0,0,0-.649,3.423l-.093.048c-.739-.176-.991-.926-1.267-1.558a9.678,9.678,0,0,1-.207-6.054c.162-.473.853-1.975.577-2.424-.145-.432-.6-.68-.853-1.029a8.574,8.574,0,0,1-.829-1.447c-.553-1.267-.829-2.673-1.43-3.944A11.483,11.483,0,0,0,16.652,8.43a11.494,11.494,0,0,1-1.271-1.765l-.093-.929.325-.307,1.457.211a11.952,11.952,0,0,1,2.286,1.133c.325.224.673.656,1.088.767h.484c.739.159,1.571.048,2.262.249a15.017,15.017,0,0,1,3.322,1.558,20.212,20.212,0,0,1,3.046,2.331V9.94a29.3,29.3,0,0,0-3.813-2.566,11.368,11.368,0,0,0-2.956-.926c-.577-.028-1.154-.069-1.727-.093a8.291,8.291,0,0,1-1.071-.8,8.484,8.484,0,0,0-3.84-1.409Z"
                        transform="translate(34.773)"
                        fill="#0e5275"
                      />
                    </g>
                  </svg>
                </div>
                <div className="flex justify-center items-center">
                  <div title="REDIS" className="absolute w-14 h-14"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="57.498"
                    height="49.281"
                    viewBox="0 0 57.498 49.281"
                  >
                    <g id="redis" transform="translate(-10.875 -116.035)">
                      <path
                        id="Trac??_88"
                        data-name="Trac?? 88"
                        d="M66.137,725.422c-3.068,1.6-18.963,8.135-22.347,9.9s-5.264,1.748-7.937.47-19.588-8.11-22.635-9.567c-1.523-.727-2.324-1.342-2.324-1.922v-5.812s22.021-4.794,25.576-6.07,4.788-1.321,7.814-.213,21.116,4.372,24.106,5.467c0,0,0,5.191,0,5.729C68.389,723.978,67.7,724.608,66.137,725.422Z"
                        transform="translate(-0.019 -571.387)"
                        fill="#a42122"
                      />
                      <path
                        id="Trac??_89"
                        data-name="Trac?? 89"
                        d="M66.121,607.961c-3.068,1.6-18.963,8.135-22.347,9.9s-5.264,1.747-7.937.469-19.588-8.111-22.635-9.567-3.111-2.459-.118-3.631,19.815-7.773,23.371-9.048,4.788-1.322,7.814-.213,18.826,7.4,21.816,8.493S69.189,606.361,66.121,607.961Z"
                        transform="translate(-0.002 -459.739)"
                        fill="#d82f27"
                      />
                      <path
                        id="Trac??_90"
                        data-name="Trac?? 90"
                        d="M66.137,490.258c-3.068,1.6-18.963,8.135-22.347,9.9s-5.264,1.747-7.937.469-19.588-8.11-22.635-9.567c-1.523-.728-2.324-1.341-2.324-1.922v-5.813s22.021-4.794,25.576-6.069,4.788-1.322,7.814-.213S65.4,481.414,68.39,482.51c0,0,0,5.191,0,5.73C68.389,488.814,67.7,489.444,66.137,490.258Z"
                        transform="translate(-0.019 -345.701)"
                        fill="#a42122"
                      />
                      <path
                        id="Trac??_91"
                        data-name="Trac?? 91"
                        d="M66.121,372.8c-3.068,1.6-18.963,8.135-22.347,9.9s-5.264,1.747-7.937.469S16.248,375.056,13.2,373.6s-3.111-2.459-.118-3.631S32.9,362.2,36.454,360.922s4.788-1.322,7.814-.213,18.826,7.4,21.816,8.492S69.189,371.2,66.121,372.8Z"
                        transform="translate(-0.002 -234.055)"
                        fill="#d82f27"
                      />
                      <path
                        id="Trac??_92"
                        data-name="Trac?? 92"
                        d="M66.139,246.382c-3.068,1.6-18.963,8.135-22.347,9.9s-5.264,1.747-7.937.469-19.588-8.111-22.635-9.567c-1.523-.728-2.324-1.342-2.324-1.922V239.45s22.021-4.794,25.576-6.069,4.788-1.322,7.814-.213,21.116,4.372,24.106,5.467c0,0,0,5.191,0,5.73C68.391,244.938,67.7,245.568,66.139,246.382Z"
                        transform="translate(-0.021 -111.654)"
                        fill="#a42122"
                      />
                      <path
                        id="Trac??_93"
                        data-name="Trac?? 93"
                        d="M66.119,128.915c-3.068,1.6-18.963,8.135-22.347,9.9s-5.264,1.747-7.937.469-19.588-8.111-22.635-9.567-3.111-2.459-.118-3.631,19.815-7.772,23.371-9.047,4.788-1.322,7.814-.213,18.826,7.4,21.816,8.493S69.187,127.316,66.119,128.915Z"
                        fill="#d82f27"
                      />
                      <path
                        id="Trac??_94"
                        data-name="Trac?? 94"
                        d="M586.095,195.894l-4.982.517L580,199.095l-1.8-2.994-5.753-.517,4.292-1.548-1.288-2.376,4.019,1.572,3.789-1.24-1.024,2.457Z"
                        transform="translate(-538.937 -72.576)"
                        fill="#fff"
                      />
                      <path
                        id="Trac??_95"
                        data-name="Trac?? 95"
                        d="M531.084,479.276l-9.3-3.857,13.324-2.045Z"
                        transform="translate(-490.322 -342.939)"
                        fill="#fff"
                      />
                      <ellipse
                        id="Ellipse_7"
                        data-name="Ellipse 7"
                        cx="7.121"
                        cy="2.76"
                        rx="7.121"
                        ry="2.76"
                        transform="translate(20.75 124.81)"
                        fill="#fff"
                      />
                      <path
                        id="Trac??_96"
                        data-name="Trac?? 96"
                        d="M1057.29,314.947l7.885,3.116-7.879,3.113Z"
                        transform="translate(-1004.245 -190.895)"
                        fill="#791514"
                      />
                      <path
                        id="Trac??_97"
                        data-name="Trac?? 97"
                        d="M840.825,318.4l8.724-3.451.007,6.229-.856.335Z"
                        transform="translate(-796.503 -190.895)"
                        fill="#ad2524"
                      />
                    </g>
                  </svg>
                </div>
                <div className="flex justify-center items-center">
                  <div title="REDIS" className="absolute w-14 h-14"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enable-background="new 0 0 24 24"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="1.673"
                      height="5.805"
                      x="11.319"
                      y="9.242"
                      fill="#646FDE"
                    />
                    <path
                      fill="#646FDE"
                      d="M4.226,13.355c0-2.005-2.547-1.644-2.547-2.403l0.001,0.002c0-0.262,0.218-0.364,0.567-0.368c0.506,0,1.151,0.155,1.658,0.432V9.434c-0.551-0.22-1.103-0.307-1.654-0.307C0.9,9.127,0,9.839,0,11.029c0,1.864,2.532,1.561,2.532,2.365c0,0.31-0.266,0.413-0.638,0.413c-0.551,0-1.264-0.231-1.823-0.538v1.516c0.619,0.268,1.245,0.382,1.819,0.382C3.274,15.166,4.226,14.567,4.226,13.355z"
                    />
                    <polygon
                      fill="#646FDE"
                      points="11.314 8.732 12.987 8.372 12.987 7 11.314 7.36"
                    />
                    <path
                      fill="#646FDE"
                      d="M16.468 9.129c-.653 0-1.073.31-1.305.527l-.086-.417H13.61V17l1.665-.357.004-1.902c.24.178.596.425 1.178.425 1.193 0 2.28-.879 2.28-3.016C18.741 10.194 17.639 9.129 16.468 9.129zM16.071 13.77L16.071 13.77c-.391.001-.622-.143-.784-.318l-.011-2.501c.173-.193.413-.334.795-.334.607 0 1.027.69 1.027 1.569C17.103 13.092 16.69 13.77 16.071 13.77zM21.592 9.129c-1.583 0-2.547 1.36-2.547 3.074 0 2.027 1.136 2.964 2.757 2.964.795 0 1.391-.182 1.845-.436v-1.266c-.454.231-.975.371-1.635.371-.649 0-1.219-.231-1.294-1.019h3.259c.007-.087.022-.44.022-.602H24C24 10.49 23.175 9.129 21.592 9.129zM20.703 11.577c0-.758.462-1.076.878-1.076.409 0 .844.319.844 1.076H20.703zM7.452 10.675V9.242H6.188L6.184 7.783 4.559 8.132l-.007 5.396c0 .997.743 1.641 1.729 1.641.548 0 .949-.103 1.171-.224v-1.281c-.214.087-1.264.398-1.264-.595v-2.395H7.452zM10.917 10.789V9.243c-.225-.08-1.001-.227-1.391.496L9.424 9.243h-1.44v5.805h1.662v-3.907C10.04 10.618 10.704 10.721 10.917 10.789z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            {/* Mobile development */}
            <div className="shadow-lg p-8 flex flex-col items-center mt-12 md:h-full md:col-span-2 xl:col-span-1 2xl:p-24">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27.424"
                height="46.41"
                viewBox="0 0 27.424 46.41"
              >
                <path
                  id="ic_phone_iphone_24px"
                  d="M27.15,1H10.274A5.276,5.276,0,0,0,5,6.274V42.136a5.276,5.276,0,0,0,5.274,5.274H27.15a5.276,5.276,0,0,0,5.274-5.274V6.274A5.276,5.276,0,0,0,27.15,1ZM18.712,45.3a3.164,3.164,0,1,1,3.164-3.164A3.16,3.16,0,0,1,18.712,45.3ZM28.2,36.862H9.219V7.329H28.2Z"
                  transform="translate(-5 -1)"
                  fill="#333"
                />
              </svg>
              <h4 className="text-black text-center font-semibold uppercase mt-8 text-xl dark:text-white">
                Android/iOS development
              </h4>
              <span className="my-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="190"
                  height="5"
                  viewBox="0 0 190 5"
                >
                  <line
                    id="Ligne_3"
                    data-name="Ligne 3"
                    x2="185"
                    transform="translate(2.5 2.5)"
                    fill="none"
                    stroke="#05dec0"
                    stroke-linecap="round"
                    stroke-width="5"
                  />
                </svg>
              </span>
              <div>
                <h5 className="font-medium uppercase text-center">Languages</h5>
                <h5 className="font-medium uppercase text-center">Tools</h5>
                <h5 className="font-medium uppercase text-center">
                  Frameworks
                </h5>
              </div>
              <div className="grid gap-4 grid-cols-2 mt-8">
                <div className="flex justify-center items-center">
                  <div
                    title="REACT NATIVE"
                    className="absolute w-14 h-14"
                  ></div>
                  <svg
                    id="javascript"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="58.498"
                    height="58.498"
                    viewBox="0 0 58.498 58.498"
                  >
                    <defs>
                      <clipPath id="clip-path">
                        <path
                          id="Trac??_39"
                          data-name="Trac?? 39"
                          d="M0,0H58.5V58.5H0Z"
                          fill="#f7df1e"
                        />
                      </clipPath>
                    </defs>
                    <g
                      id="Groupe_de_masques_5"
                      data-name="Groupe de masques 5"
                      clip-path="url(#clip-path)"
                    >
                      <path
                        id="react-native_1_"
                        data-name="react-native (1)"
                        d="M43.924,5.064a9.038,9.038,0,0,0-3.069.477,20.868,20.868,0,0,0-6.5,3.808q-1.377,1.138-2.649,2.394-1.245-1.224-2.592-2.336a20.847,20.847,0,0,0-6.484-3.8,7.12,7.12,0,0,0-5.837.286A7.121,7.121,0,0,0,13.63,10.8a20.857,20.857,0,0,0,.05,7.52c.159.989.388,2.025.646,3.081-.97.294-1.911.6-2.784.943a20.324,20.324,0,0,0-6.4,3.724A7.179,7.179,0,0,0,2.53,31.263a7.176,7.176,0,0,0,2.612,5.191,20.3,20.3,0,0,0,6.4,3.726c.933.365,1.945.693,2.987,1a40.916,40.916,0,0,0-.887,4.051,20.87,20.87,0,0,0-.05,7.528,7.157,7.157,0,0,0,3.175,4.931,7.154,7.154,0,0,0,5.86.285,20.837,20.837,0,0,0,6.5-3.806q1.365-1.126,2.626-2.368c.883.861,1.767,1.672,2.639,2.381a20.831,20.831,0,0,0,6.487,3.8A7.119,7.119,0,0,0,46.71,57.7a7.124,7.124,0,0,0,3.165-4.912,20.859,20.859,0,0,0-.051-7.52,40.845,40.845,0,0,0-.89-4.061c1.078-.318,2.12-.655,3.081-1.03a20.327,20.327,0,0,0,6.4-3.727,7.176,7.176,0,0,0,2.612-5.191,7.179,7.179,0,0,0-2.612-5.194,20.324,20.324,0,0,0-6.4-3.724q-1.394-.533-2.826-.956c.261-1.063.491-2.106.651-3.1a20.849,20.849,0,0,0,.05-7.529,7.147,7.147,0,0,0-3.178-4.928,5.917,5.917,0,0,0-2.788-.765Zm-.117,2.588a3.344,3.344,0,0,1,1.607.426A4.545,4.545,0,0,1,47.35,11.3a18.658,18.658,0,0,1-.076,6.576c-.145.9-.356,1.856-.594,2.833A58.976,58.976,0,0,0,38.2,19.348a61.213,61.213,0,0,0-4.673-5.743Q34.711,12.432,36,11.368a18.651,18.651,0,0,1,5.657-3.353,6.424,6.424,0,0,1,2.152-.362Zm-24.123.006a6.51,6.51,0,0,1,2.161.364,18.665,18.665,0,0,1,5.665,3.356q1.259,1.04,2.423,2.186a61.407,61.407,0,0,0-4.7,5.8,58.521,58.521,0,0,0-8.452,1.375q-.35-1.4-.589-2.822a18.7,18.7,0,0,1-.074-6.585,4.56,4.56,0,0,1,1.951-3.239,3.368,3.368,0,0,1,1.618-.432Zm12.063,7.777c1.036,1.126,2.072,2.359,3.1,3.686q-1.533-.066-3.069-.067c-1.059,0-2.1.025-3.127.07q1.471-1.909,3.1-3.689Zm.031,6.187c1.729,0,3.413.071,5.053.191q1.748,2.508,3.28,5.157,1.347,2.337,2.517,4.769-1.185,2.464-2.552,4.833-1.21,2.085-2.556,4.087c-1.852.155-3.77.242-5.74.242s-3.92-.086-5.873-.254q-1.322-1.971-2.514-4.026-1.363-2.362-2.545-4.821,1.187-2.474,2.558-4.852,1.523-2.632,3.264-5.129,2.551-.193,5.11-.2Zm8.326.508A55.021,55.021,0,0,1,46,23.191a57.224,57.224,0,0,1-2.024,5.561c-.526-1.014-1.072-2.034-1.661-3.053q-1.054-1.814-2.207-3.568Zm-16.787.02c-.737,1.131-1.462,2.287-2.161,3.5-.6,1.033-1.153,2.066-1.686,3.093a57.2,57.2,0,0,1-2.008-5.529,54.55,54.55,0,0,1,5.855-1.061Zm25.194,1.716c.9.272,1.772.557,2.57.868a18.137,18.137,0,0,1,5.593,3.22,4.587,4.587,0,0,1,1.785,3.308,4.587,4.587,0,0,1-1.785,3.306,18.137,18.137,0,0,1-5.593,3.221c-.887.346-1.862.661-2.875.957A62.95,62.95,0,0,0,45.464,31.8a61.563,61.563,0,0,0,3.048-7.932ZM15,23.88a61.432,61.432,0,0,0,3.009,7.852,62.954,62.954,0,0,0-2.758,6.987q-1.408-.407-2.779-.93a18.137,18.137,0,0,1-5.593-3.221A4.583,4.583,0,0,1,5.1,31.261a4.592,4.592,0,0,1,1.785-3.308,18.112,18.112,0,0,1,5.593-3.22q1.247-.477,2.528-.857Zm16.775,1.543a6.356,6.356,0,1,0,6.356,6.356A6.374,6.374,0,0,0,31.779,25.423Zm0,2.542a3.813,3.813,0,1,1-3.813,3.813A3.794,3.794,0,0,1,31.779,27.965Zm12.228,6.817c.666,1.577,1.246,3.122,1.731,4.61q-2.413.555-4.868.89c.493-.788.98-1.589,1.455-2.411.6-1.032,1.149-2.063,1.68-3.089Zm-24.505,0c.534,1.032,1.091,2.068,1.691,3.107.47.814.948,1.605,1.435,2.383q-2.446-.336-4.854-.892c.486-1.483,1.065-3.025,1.729-4.6Zm-2.461,7.066a58.346,58.346,0,0,0,7.439,1.236,62.665,62.665,0,0,0,5.453,6.853q-1.175,1.162-2.449,2.217a18.663,18.663,0,0,1-5.658,3.352,4.549,4.549,0,0,1-3.759-.064,4.544,4.544,0,0,1-1.935-3.224,18.677,18.677,0,0,1,.075-6.574,37.751,37.751,0,0,1,.834-3.8Zm29.433.01a38.244,38.244,0,0,1,.839,3.816,18.7,18.7,0,0,1,.074,6.585A4.561,4.561,0,0,1,45.438,55.5a4.57,4.57,0,0,1-3.782.07,18.713,18.713,0,0,1-5.665-3.36q-1.283-1.061-2.467-2.232a62.589,62.589,0,0,0,5.491-6.887,58.474,58.474,0,0,0,7.459-1.23ZM27.8,43.349c1.305.071,2.627.118,3.982.118,1.309,0,2.589-.044,3.853-.112a58.52,58.52,0,0,1-3.92,4.754,58.725,58.725,0,0,1-3.915-4.76Z"
                        transform="translate(-2.53 -2.516)"
                      />
                    </g>
                  </svg>
                </div>
                <div className="flex justify-center items-center">
                  <div title="EXPO" className="absolute w-14 h-14"></div>
                  <svg
                    id="expo"
                    xmlns="http://www.w3.org/2000/svg"
                    width="60.069"
                    height="53.196"
                    viewBox="0 0 60.069 53.196"
                  >
                    <path
                      id="Trac??_98"
                      data-name="Trac?? 98"
                      d="M37.316,3.819C35.1.448,34.577,0,30.074,0h-.105c-4.5,0-5,.448-7.242,3.819C20.646,6.979,0,44.8,0,45.849a8.3,8.3,0,0,0,1.817,5.03c1.448,2.08,3.95,3.239,5.767,1.4C8.822,51.037,22.068,28.2,28.468,19.567h0a1.921,1.921,0,0,1,3.134,0h0C38,28.2,51.247,51.037,52.485,52.274c1.817,1.844,4.319.685,5.767-1.4a8.3,8.3,0,0,0,1.817-5.03C60.043,44.8,39.4,6.952,37.316,3.819Z"
                      transform="translate(0 0)"
                      fill="#1173b6"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Portfolio */}
        <div id="portfolio" className="pt-28 flex flex-col items-center">
          <h1 className="text-black font-semibold text-5xl dark:text-white">
            Portfolio
          </h1>
          <div className="items-center flex flex-col mt-8 xl:flex-row xl:my-8">
            <div className="flex xl:mr-8">
              <img className="w-96 mx-2" src={BATIXI} alt="Batixi login page" />
            </div>
            <div className="flex flex-col items-center xl:items-start xl:max-w-2xl xl:py-8">
              <div className="flex items-center xl:mb-12">
                <div className="hidden w-2 h-44 bg-brand mr-8 rounded-full xl:block"></div>
                <h1 className="text-9xl mt-8 text-brand xl:mt-0">01</h1>
              </div>
              <a href="https://www.batixi.com" target="_blank" rel="noreferrer">
                <h3 className="text-black font-semibold text-4xl uppercase underline dark:text-white">
                  Batixi
                </h3>
              </a>
              <p>&copy; AppCorporation. All rights reserved.</p>
              <p className="my-8 xl:text-left">
                Batixi is an Android and iOS application that puts you in touch
                with individuals or professionals in the field of construction
                or renovation. I built this application myself by turning a
                simple idea into a real finished product. The languages and
                frameworks used for this project are mainly: React Native,
                NodeJS, ExpressJS, Socket.io and MongoDB.
              </p>
              <div className="xl:flex">
                <a
                  href="https://play.google.com/store/apps/details?id=com.batixi.batixi"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="my-4 w-64 xl:mr-4"
                    src={GOOGLE_PLAY}
                    alt="Google play button"
                  />
                </a>
                <a
                  href="https://apps.apple.com/us/app/batixi/id1561529581"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="my-4 w-64"
                    src={APP_STORE}
                    alt="App store button"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="items-center flex flex-col mt-8 xl:flex-row xl:my-8">
            <div className="flex flex-col xl:mr-8 xl:order-2">
              <img className="w-96 m-2" src={AMAZON} alt="Batixi login page" />
              <img className="w-96 m-2" src={AMAZON2} alt="Batixi login page" />
            </div>
            <div className="flex flex-col items-center xl:items-start xl:max-w-2xl xl:py-8">
              <div className="flex items-center xl:mb-12">
                <div className="hidden w-2 h-44 bg-brand mr-8 rounded-full xl:block"></div>
                <h1 className="text-9xl mt-8 text-brand xl:mt-0">02</h1>
              </div>
              <a
                href="https://safe-cliffs-28619.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <h3 className="text-black font-semibold text-4xl uppercase underline dark:text-white">
                  Amazon Clone
                </h3>
              </a>
              <p className="my-8 xl:text-left">
                One of the best thing to do to learn a language is to actually
                create real projects. The main reason I built an Amazon clone
                application is because it implements a lot of features like user
                authentication/authorization, products rendering, basket
                managment, checkout, and more... The languages and frameworks
                used for this project are mainly: ReactJS, NodeJS, Firebase
                (Authentication and Firestore real-time database), and Stripe
                API.
              </p>
              <div className="flex items-center">
                <a
                  href="https://safe-cliffs-28619.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="mr-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="20.455"
                    viewBox="0 0 30 20.455"
                  >
                    <path
                      id="ic_remove_red_eye_24px"
                      d="M16,4.5A16.127,16.127,0,0,0,1,14.727a16.114,16.114,0,0,0,30,0A16.127,16.127,0,0,0,16,4.5Zm0,17.045a6.818,6.818,0,1,1,6.818-6.818A6.821,6.821,0,0,1,16,21.545Zm0-10.909a4.091,4.091,0,1,0,4.091,4.091A4.085,4.085,0,0,0,16,10.636Z"
                      transform="translate(-1 -4.5)"
                      fill="#05dec0"
                    />
                  </svg>
                </a>
                <a
                  href="https://github.com/EmL01/react-amazon-clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="29.257"
                    viewBox="0 0 30 29.257"
                  >
                    <path
                      id="github"
                      d="M15,.3a15,15,0,0,0-4.744,29.231c.75.141,1.025-.323,1.025-.721,0-.356-.013-1.3-.019-2.55-4.173.9-5.052-2.013-5.052-2.013a3.976,3.976,0,0,0-1.669-2.194c-1.359-.93.105-.911.105-.911a3.145,3.145,0,0,1,2.3,1.545,3.2,3.2,0,0,0,4.369,1.247,3.2,3.2,0,0,1,.95-2.006c-3.331-.375-6.833-1.665-6.833-7.413a5.787,5.787,0,0,1,1.544-4.025,5.333,5.333,0,0,1,.131-3.97s1.256-.4,4.125,1.537a14.142,14.142,0,0,1,7.5,0c2.85-1.94,4.106-1.537,4.106-1.537a5.481,5.481,0,0,1,.15,3.97,5.811,5.811,0,0,1,1.538,4.025c0,5.763-3.506,7.031-6.844,7.4a3.591,3.591,0,0,1,1.013,2.775c0,2.008-.019,3.62-.019,4.108,0,.394.262.862,1.031.712A14.982,14.982,0,0,0,15,.3"
                      transform="translate(0 -0.297)"
                      fill="#05dec0"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="items-center flex flex-col mt-8 xl:flex-row xl:my-8">
            <div className="flex flex-col xl:mr-8">
              <img className="w-96 m-2" src={NETFLIX} alt="Batixi login page" />
              <img
                className="w-96 m-2"
                src={NETFLIX2}
                alt="Batixi login page"
              />
            </div>
            <div className="flex flex-col items-center xl:items-start xl:max-w-2xl xl:py-8">
              <div className="flex items-center xl:mb-12">
                <div className="hidden w-2 h-44 bg-brand mr-8 rounded-full xl:block"></div>
                <h1 className="text-9xl mt-8 text-brand xl:mt-0">03</h1>
              </div>
              <a
                href="https://frozen-citadel-23721.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <h3 className="text-black font-semibold text-4xl uppercase underline dark:text-white">
                  Netflix Clone
                </h3>
              </a>
              <p className="my-8 xl:text-left">
                This Netflix Clone website is built for UI only. No more feature
                have been added. My goal with this clone was to integrate
                tailwindcss along with the new version of Redux (Redux Toolkit).
                The languages and frameworks used for this project are mainly:
                ReactJS, NodeJS (to serve the client side build folder) and
                Tailwindcss.
              </p>
              <div className="flex items-center">
                <a
                  href="https://frozen-citadel-23721.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="mr-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="20.455"
                    viewBox="0 0 30 20.455"
                  >
                    <path
                      id="ic_remove_red_eye_24px"
                      d="M16,4.5A16.127,16.127,0,0,0,1,14.727a16.114,16.114,0,0,0,30,0A16.127,16.127,0,0,0,16,4.5Zm0,17.045a6.818,6.818,0,1,1,6.818-6.818A6.821,6.821,0,0,1,16,21.545Zm0-10.909a4.091,4.091,0,1,0,4.091,4.091A4.085,4.085,0,0,0,16,10.636Z"
                      transform="translate(-1 -4.5)"
                      fill="#05dec0"
                    />
                  </svg>
                </a>
                <a
                  href="https://github.com/EmL01/react-netflix-clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="29.257"
                    viewBox="0 0 30 29.257"
                  >
                    <path
                      id="github"
                      d="M15,.3a15,15,0,0,0-4.744,29.231c.75.141,1.025-.323,1.025-.721,0-.356-.013-1.3-.019-2.55-4.173.9-5.052-2.013-5.052-2.013a3.976,3.976,0,0,0-1.669-2.194c-1.359-.93.105-.911.105-.911a3.145,3.145,0,0,1,2.3,1.545,3.2,3.2,0,0,0,4.369,1.247,3.2,3.2,0,0,1,.95-2.006c-3.331-.375-6.833-1.665-6.833-7.413a5.787,5.787,0,0,1,1.544-4.025,5.333,5.333,0,0,1,.131-3.97s1.256-.4,4.125,1.537a14.142,14.142,0,0,1,7.5,0c2.85-1.94,4.106-1.537,4.106-1.537a5.481,5.481,0,0,1,.15,3.97,5.811,5.811,0,0,1,1.538,4.025c0,5.763-3.506,7.031-6.844,7.4a3.591,3.591,0,0,1,1.013,2.775c0,2.008-.019,3.62-.019,4.108,0,.394.262.862,1.031.712A14.982,14.982,0,0,0,15,.3"
                      transform="translate(0 -0.297)"
                      fill="#05dec0"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Contact me */}
        <div id="contact-me" className="pt-28 flex flex-col items-center">
          <h1 className="text-black font-semibold text-5xl dark:text-white">
            Contact me
          </h1>
          <div className="flex justify-evenly w-64 mt-12">
            <a
              href="mailto:contact@emlhd.com"
              target="_blank"
              rel="noreferrer"
              className="my-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="25.064"
                viewBox="0 0 30 25.064"
              >
                <path
                  id="gmail"
                  d="M30,6.421V25.783a2.17,2.17,0,0,1-2.045,2.277H23.181V15.153L15,21.988,6.819,15.153V28.061H2.045A2.171,2.171,0,0,1,0,25.783V6.421C0,3.605,2.886,2,4.909,3.687l1.91,1.6L15,12.116l8.181-6.835,1.91-1.594C27.113,2,30,3.605,30,6.421Z"
                  transform="translate(0 -2.997)"
                  fill="#05dec0"
                />
              </svg>
            </a>
            <a
              href="https://www.github.com/EmL01"
              target="_blank"
              rel="noreferrer"
              className="my-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="29.257"
                viewBox="0 0 30 29.257"
              >
                <path
                  id="github"
                  d="M15,.3a15,15,0,0,0-4.744,29.231c.75.141,1.025-.323,1.025-.721,0-.356-.013-1.3-.019-2.55-4.173.9-5.052-2.013-5.052-2.013a3.976,3.976,0,0,0-1.669-2.194c-1.359-.93.105-.911.105-.911a3.145,3.145,0,0,1,2.3,1.545,3.2,3.2,0,0,0,4.369,1.247,3.2,3.2,0,0,1,.95-2.006c-3.331-.375-6.833-1.665-6.833-7.413a5.787,5.787,0,0,1,1.544-4.025,5.333,5.333,0,0,1,.131-3.97s1.256-.4,4.125,1.537a14.142,14.142,0,0,1,7.5,0c2.85-1.94,4.106-1.537,4.106-1.537a5.481,5.481,0,0,1,.15,3.97,5.811,5.811,0,0,1,1.538,4.025c0,5.763-3.506,7.031-6.844,7.4a3.591,3.591,0,0,1,1.013,2.775c0,2.008-.019,3.62-.019,4.108,0,.394.262.862,1.031.712A14.982,14.982,0,0,0,15,.3"
                  transform="translate(0 -0.297)"
                  fill="#05dec0"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/emile-l-b08a57215"
              target="_blank"
              rel="noreferrer"
              className="my-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
              >
                <path
                  id="linkedin"
                  d="M25.559,25.565H21.116V18.6c0-1.66-.034-3.8-2.315-3.8-2.316,0-2.67,1.806-2.67,3.674v7.084H11.689V11.25h4.267V13.2h.057a4.682,4.682,0,0,1,4.213-2.313c4.5,0,5.334,2.963,5.334,6.819v7.858ZM6.671,9.291A2.58,2.58,0,1,1,9.251,6.71,2.577,2.577,0,0,1,6.671,9.291ZM8.9,25.565H4.444V11.25H8.9ZM27.781,0H2.214A2.187,2.187,0,0,0,0,2.161V27.839A2.186,2.186,0,0,0,2.214,30H27.778A2.195,2.195,0,0,0,30,27.839V2.161A2.2,2.2,0,0,0,27.778,0Z"
                  fill="#05dec0"
                />
              </svg>
            </a>
          </div>
        </div>
        <span className='text-xs'>This website was developed with ReactJS</span>
        {/* Footer */}
      </div>
      <div className="bg-black dark:bg-gray">
        <p className="text-white text-center p-4">
          &copy; emlhd.com. All rights reserved.
        </p>
      </div>
    </>
  );
}

export default App;
