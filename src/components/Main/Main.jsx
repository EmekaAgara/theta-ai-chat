import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
assets;

function Main() {
  const {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  } = useContext(Context);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSent();
    // setInput("");
  };
  return (
    <div className="main">
      <div className="nav">
        <p>Thetha Ai Chat</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello there </span>👋
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Generate unit tests for the following C# function</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Give me a beginner's guide to an activity</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Draft an email with a packing list for an upcoming trip</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Outline a way to home routine: organizing my closet</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <form onSubmit={handleSubmit}>
              <input
                onChange={(e) => setInput(e.target.value)}
                // onSubmit={onSent()}
                value={input}
                // autoFocus
                type="text"
                placeholder="Enter a prompt here"
                name="text"
                id=""
              />
            </form>
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img onClick={() => onSent()} src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            This app may display inaccurate info, including about people, so
            double-check its responses. Your privacy & Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
