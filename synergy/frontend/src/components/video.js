/* eslint-disable react/style-prop-object */
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function video() {
  return (
    <>
      <div>hiiiiii</div>
      <div class="thebody text-center">
        <nav
          class="navbar navbar-dark"
          style="background-color: shd;
          box-shadow: 2px 4px rgba(226, 203, 242, 0.5);"
        >
          <span class="navbar-brand" style="font-size: 40px; color: #9864bd">
            Video Calling
          </span>
        </nav>

        <div class="container align-items-center" style="margin-top: 15%">
          <div class="transbox text-center">
            <br />
            <br />
            <button id="start" class="btn btn-light btn-lg" type="button">
              <b>Start a new meeting</b>
            </button>
          </div>
        </div>

        <div id="jitsi-container" class="container align-items-center"></div>
      </div>
    </>
  );
}

export default video;
