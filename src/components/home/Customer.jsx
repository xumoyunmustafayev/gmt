import React from 'react'
import Marquee from 'react-fast-marquee';

const Customer = () => {
  return (
    <div className="bg-[#E5E2EE] my-32 py-24">
      <div className="container flex justify-between max-md:flex-col">
        <div className="text-[30px] max-md:text-[26px]">Наши клиенты</div>
        <div className="text-[48px] max-md:text-[38px]">
          БОЛЕЕ <span className="bg-transparent text-[#088269]">5000</span>{" "}
          <br /> УСПЕШНЫХ ПРОЕКТОВ
        </div>
      </div>
      <Marquee>
        <div className='flex justify-between gap-6 mx-6 mt-16'>
          <div className=" ">
            <div className="h-48 flex items-center justify-center bg-white rounded-t-xl">
              <img src="../../../public/img221-min.png" alt="" className="" />
            </div>
            <div className="py-5 pr-8 pl-5 bg-[#f7f8f2] rounded-b-xl">
              <p>НМИЦ онкологии им. Н.Н. Блохина</p>
            </div>
          </div>
          <div className=" ">
            <div className="h-48 flex items-center justify-center bg-white rounded-t-xl">
              <img src="../../../public/img222-min.png" alt="" className="" />
            </div>
            <div className="py-5 pr-8 pl-5 bg-[#f7f8f2] rounded-b-xl">
              <p>НМИЦ онкологии им. Н.Н. Блохина</p>
            </div>
          </div>
          <div className=" ">
            <div className="h-48 flex items-center justify-center bg-white rounded-t-xl">
              <img src="../../../public/img223-min.png" alt="" className="" />
            </div>
            <div className="py-5 pr-8 pl-5 bg-[#f7f8f2] rounded-b-xl">
              <p>НМИЦ онкологии им. Н.Н. Блохина</p>
            </div>
          </div>
          <div className=" ">
            <div className="h-48 flex items-center justify-center bg-white rounded-t-xl">
              <img src="../../../public/img224.png" alt="" className="" />
            </div>
            <div className="py-5 pr-8 pl-5 bg-[#f7f8f2] rounded-b-xl">
              <p>НМИЦ онкологии им. Н.Н. Блохина</p>
            </div>
          </div>
          <div className=" ">
            <div className="h-48 flex items-center justify-center bg-white rounded-t-xl">
              <img src="../../../public/img221-min.png" alt="" className="" />
            </div>
            <div className="py-5 pr-8 pl-5 bg-[#f7f8f2] rounded-b-xl">
              <p>НМИЦ онкологии им. Н.Н. Блохина</p>
            </div>
          </div>
        </div>
      </Marquee>
    </div>
  );
}

export default Customer