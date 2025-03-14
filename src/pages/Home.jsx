/* eslint-disable no-unused-vars */
import React from "react";
import profile from '../assets/image1.png';
import "./Home.css";
import { MdDownload } from "react-icons/md";

const Home = () => {
  return (
    <div className="h-screen flex flex-col md:flex-row justify-center items-center bg-[#F6F0F0] relative overflow-hidden p-4 md:p-0">
      <div className="geo triangle-sm hidden md:block" style={{ top: '15%', left: '12%' }}></div>
      <div className="geo triangle-sm hidden md:block" style={{ bottom: '25%', right: '10%', transform: 'rotate(180deg)' }}></div>
      <div className="geo triangle-sm hidden md:block" style={{ bottom: '60%', right: '5%', transform: 'rotate(180deg)' }}></div>
      <div className="geo triangle-sm hidden md:block" style={{ bottom: '10%', right: '95%', transform: 'rotate(180deg)' }}></div>
      
      <div className="geo circle-sm hidden md:block" style={{ bottom: '45%', right: '15%' }}></div>
      <div className="geo circle-sm hidden md:block" style={{ bottom: '15%', left: '30%' }}></div>
      <div className="geo circle-sm hidden md:block" style={{ bottom: '45%', left: '10%' }}></div>
      <div className="geo circle-sm hidden md:block" style={{ bottom: '15%', left: '15%' }}></div>
      <div className="geo circle-sm hidden md:block" style={{ top: '15%', left: '30%' }}></div>
      <div className="geo circle-sm hidden md:block" style={{ bottom: '10%', right: '40%' }}></div>
      
      <div className="geo line-sm hidden md:block" style={{ top: '40%', left: '8%', transform: 'rotate(45deg)' }}></div>
      <div className="geo line-sm hidden md:block" style={{ bottom: '35%', right: '25%', transform: 'rotate(-30deg)' }}></div>
      <div className="geo line-sm hidden md:block" style={{ bottom: '5%', right: '5%', transform: 'rotate(-60deg)' }}></div>
      
      <div className="geo semi-circle-sm hidden md:block" style={{ bottom: '30%', left: '20%', transform: 'rotate(40deg)' }}></div>
      <div className="geo semi-circle-sm hidden md:block" style={{ bottom: '10%', right: '20%', transform: 'rotate(90deg)' }}></div>
      <div className="geo semi-circle-sm hidden md:block" style={{ top: '30%', right: '20%', transform: 'rotate(30deg)' }}></div>
      <div className="geo semi-circle-sm hidden md:block" style={{ bottom: '10%', right: '55%', transform: 'rotate(90deg)' }}></div>
     
      <div className="flex flex-col items-center mb-6 md:mr-10 z-10">
        <div className="w-24 h-24 md:w-28 md:h-28 bg-gray-300 rounded-full">
          <img src={profile} alt="Profile" className="rounded-full" />
        </div>
        <p className="mt-2 text-lg font-semibold text-center">Imtiyaz Syeda</p>
        <p className="text-gray-600 text-center">Software Engineer</p>
      </div>

      <div className="w-full md:w-2/5 h-auto md:h-80 rounded-lg flex justify-center items-center relative message-box z-10 p-4">
        <div className="text-base md:text-xl font-noto text-gray-600 text-center md:text-left">
          Hello! I am currently pursuing a BTech in Computer Engineering at Pimpri Chinchwad College of Engineering, Pune. 
          <br /><br />
          With a CGPA of 9.63/10, I am on track to graduate in June 2026. I have a deep passion for technology. I enjoy exploring new ideas and constantly seek opportunities to learn—whether in tech or beyond.
        </div>
      </div>
    </div>
  );
};

export default Home;