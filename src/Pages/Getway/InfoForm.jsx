import React from "react";
import "./Info.css";
import cross from "../../assets/cross.svg";

const InfoForm = () => {
  return (
    <div className="max-w-[1350px] mx-auto mt-20">
      <h1 className="text-md lg:text-[25px] font-semibold text-black  pb-5 ">
        Passenger Details
      </h1>
      {/* take info */}
      <div className="my-10 grid grid-cols-1 lg:grid-cols-4 justify-center items-center gap-y-6 max-w-[1150px]">
        <div className="">
          <p className="text-slate-500 font-semibold text-md lg:text-[22px]">Seat L15</p>
        </div>
        <div className="relative">
          <input
            className="findInputInfo w-full border text-black"
            required=""
            type="text"
            name="text"
            autoComplete="off"
          />
          
          <label className="user-label-Info">Passenger Name</label>
        </div>
        <div className="relative w-full lg:w-[170px] mx-auto">
        <select className="findInputInfo w-full border text-black" name="addressSelect" id="address01">
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          <label className="user-label-Info">Gender</label>
        </div>
        <div className="relative w-full  lg:w-[170px]">
        <select className="findInputInfo w-full border text-black" name="addressSelect" id="address01">
            <option>18</option>
            <option>19</option>
            <option>20</option>
            <option>21</option>
            <option>22</option>
            <option>23</option>
            <option>24</option>
            <option>25 +</option>


          </select>
          <label className="user-label-Info">Age</label>
        </div>
      </div>
    </div>
  );
};

export default InfoForm;
