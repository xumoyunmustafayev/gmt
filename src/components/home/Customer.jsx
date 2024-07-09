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
        <div className="flex justify-between gap-6 mx-6 mt-16">
          <div className=" ">
            <div className="h-48 flex items-center justify-center bg-white rounded-t-xl">
              <img
                src="https://s3-alpha-sig.figma.com/img/655f/43b2/b37eeb1b1231de790fb5b0342ee90da7?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I9kRrJlOi6KgYpCIfu511bxByA5hBhOEtUx-uxU~BEfaq482ujy5au~UR8uHXz9vDLfh47KvresSbxIY-nzgBYW9-AKA6JzMDtrU2c0WfZF7c~~0XVyD~NpDD8aBVAs8vPtXW705nZmhTJ9sEBaTEXnXAt6NbHD7YFl4-UsMWYmBnjy39mptVcTkPeJ6E-T3PmBjHSNz9LQISCpYbNa~3Ey8vwI~Je5QMmbuIjLXoC3bL0938hDP-gRGN3TbfhKx-8SStdLHb1DWUD9Lf6w88jdabxf4b2TaCzsu2STA6WCp370hR4yOEWB1XW6uHx136HvgbdSEUlqidg5neKx2gA__"
                alt=""
                className=""
              />
            </div>
            <div className="py-5 pr-8 pl-5 bg-[#f7f8f2] rounded-b-xl">
              <p>НМИЦ онкологии им. Н.Н. Блохина</p>
            </div>
          </div>
          <div className=" ">
            <div className="h-48 flex items-center justify-center bg-white rounded-t-xl">
              <img
                src=".https://s3-alpha-sig.figma.com/img/95d8/45c9/32733e253c7b094e4316cf3ec7dfd454?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HioTAh6Pg4E14HDUGUy~ChdxqU10lwUcHcXKirZBWbL8zoirE1pJZ3Cthct7ZtKz7MlPe5exD7OdyMDCS7vqMN41QhuKKYv4qo0W3LudAivXKTMBCFId8zTAhmBXayWqXS3NN5mouuCLUCwezALF39nyNd1hP~0zD0pSTT0bodWLpJz6N6sqSqa5gdItgRy4TbS-omzkVHCLmsXFrPK0RoEQMM4d2qXZCw7OJlZpq1mPmZp9RrhlgedZX2MFCHx5A6V3NveJUekmi3PzCJlF6Wlm793T~5JYiAZHzDEYhtXD4aR3AgB1FaUdEiTEcKZA4PW5Ulit16FqoVfITZqpZA__"
                alt=""
                className=""
              />
            </div>
            <div className="py-5 pr-8 pl-5 bg-[#f7f8f2] rounded-b-xl">
              <p>НМИЦ онкологии им. Н.Н. Блохина</p>
            </div>
          </div>
          <div className=" ">
            <div className="h-48 flex items-center justify-center bg-white rounded-t-xl">
              <img
                src="https://s3-alpha-sig.figma.com/img/269f/7b57/72062ee5282c570d9d37ac37a542b200?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=inR2OQG400t4KzBoCYeUhxSqpBwS6iWwSga1lQI4HW9Jbi9P1fnScF1V21~07~y2MB9aUHbcdqvUpgaa1z4uwyD-zKvc-yw-rbhR9Uv5gPFNLivbLVjh8xq~sY0i2RlXd5YQLk-sciCrmv0OexMU7t~0Z8LxO3WDWlN9mM3bbThsbO1OsURz2SojF7c1fDyWb3WfporZ72bf-R1XHAEoO2myYas97~reOyMmuvR1DoGRzXzIXAtsw22FSkthIgjcOxlDOt2T2gHQuCzn~CCGY1YYKrj4GZgMyreLaoT7wKwAgtJ~eHbjB9FqxUu5goYR9TSXiAM7yHSaVPH~07zJqA__"
                alt=""
                className=""
              />
            </div>
            <div className="py-5 pr-8 pl-5 bg-[#f7f8f2] rounded-b-xl">
              <p>НМИЦ онкологии им. Н.Н. Блохина</p>
            </div>
          </div>
          <div className=" ">
            <div className="h-48 flex items-center justify-center bg-white rounded-t-xl">
              <img
                src="https://s3-alpha-sig.figma.com/img/fa1b/09ee/f78f2dbaf45a20a661b013bcbabe35bc?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mp~rT70FQyIsrZaX2NNZMhJ1NKzAW1eg3kuoghEG6CqLv1PQCp9D5fIYkkP~o0tfDKimyW3p2-B2eiS27FibAJkqIDU1hFo~tE5p1ctVpMm1u1Me2i2PFXn0jjxTqqiTYCPZhIzCLx33iqD8t6-3FCB1LBE~P0KDEwbjor9a~urni2enVZd1j8c~x1A-KhbS0k1Sh9Kzwi0Sgvi~BfrDAUpc~88FnoTGqv~2smcUUxkLB4N6aPrSj~TUNNY4dS6tqEsWeU9YZhJYP85W8~k1XiEgglO94cgQb9mzdmr98IEZqmvILmBOxIuqwFwbAzrxbQA9PpBC0CGNf4oz1izHHg__"
                alt=""
                className=""
              />
            </div>
            <div className="py-5 pr-8 pl-5 bg-[#f7f8f2] rounded-b-xl">
              <p>НМИЦ онкологии им. Н.Н. Блохина</p>
            </div>
          </div>
          <div className=" ">
            <div className="h-48 flex items-center justify-center bg-white rounded-t-xl">
              <img
                src="https://s3-alpha-sig.figma.com/img/655f/43b2/b37eeb1b1231de790fb5b0342ee90da7?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I9kRrJlOi6KgYpCIfu511bxByA5hBhOEtUx-uxU~BEfaq482ujy5au~UR8uHXz9vDLfh47KvresSbxIY-nzgBYW9-AKA6JzMDtrU2c0WfZF7c~~0XVyD~NpDD8aBVAs8vPtXW705nZmhTJ9sEBaTEXnXAt6NbHD7YFl4-UsMWYmBnjy39mptVcTkPeJ6E-T3PmBjHSNz9LQISCpYbNa~3Ey8vwI~Je5QMmbuIjLXoC3bL0938hDP-gRGN3TbfhKx-8SStdLHb1DWUD9Lf6w88jdabxf4b2TaCzsu2STA6WCp370hR4yOEWB1XW6uHx136HvgbdSEUlqidg5neKx2gA__"
                alt=""
                className=""
              />
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