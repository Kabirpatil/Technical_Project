import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <h1>TECHNICAL SKILL DEVELOPMENT ACTIVITY</h1>
        <h2>Name:Kabir Patil</h2>
        <h2>Roll No.:47</h2>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            gap: "2rem",
            justifyContent: "center",
          }}>
          <div>
            <Link to="/books">
            <button class="cta">
                <span>GET BOOKS DETAIL</span>
                <svg viewBox="0 0 13 10" height="10px" width="15px">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </button> 
            </Link>
          </div>
          <div>
            <Link to="/author">
              <button class="cta">
                <span>GET AUTHOR DETAIL</span>
                <svg viewBox="0 0 13 10" height="10px" width="15px">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
