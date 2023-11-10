import React from 'react'
import cross from "../../assets/cross.svg";
import sideChange from "../../assets/sideChange.svg";

const BusSearch = () => {
  return (
      <div className=" bg-[#F56F53] px-5 lg:px-20">
          <div
              className="text-white my-5 py-5 px-0 lg:px-5 flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-center
         mb-16 container mx-auto gap-y-5 gap-x-6"
          >
              <div className="flex justify-between items-center gap-5">
                  <div className="input-group">
                      <input
                          className="findInput"
                          required=""
                          type="text"
                          name="text"
                          autoComplete="off"
                      />
                      <img className="crossSvg" src={cross} alt="cross" />
                      <label className="user-label">From</label>
                  </div>
                  <div>
                      <img src={sideChange} alt="sideChange" />
                  </div>
                  <div className="input-group">
                      <input
                          className="findInput"
                          required=""
                          type="text"
                          name="text"
                          autoComplete="off"
                      />
                      <img className="crossSvg" src={cross} alt="cross" />
                      <label className="user-label">To</label>
                  </div>
              </div>
              <div className="flex justify-between items-center gap-3">
                  <div className="input-group">
                      <input
                          className="findInput"
                          required=""
                          type="text"
                          name="text"
                          autoComplete="off"
                      />
                      <img className="crossSvg" src={cross} alt="cross" />
                      <label className="user-label">Date</label>
                  </div>
                  <div className=" bg-white rounded-lg">
                      <button className="text-2xl text-center flex justify-center items-center capitalize text-[#F56F53] px-5 py-2 ">
                          Search
                      </button>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default BusSearch