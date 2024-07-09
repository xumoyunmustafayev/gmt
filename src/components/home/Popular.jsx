import React from "react";
import { Link } from "react-router-dom";

const Popular = () => {
  return (
    <div className="container">
      <div className="my-24">
        <div className="flex justify-between flex-wrap">
          <h2 className="text-[30px] mb-4 sm:mb-0">Популярные категории</h2>
          <Link to="/katalog">
            <button className="px-7 py-3 bg-[#088269] rounded-3xl text-white font-bold text-[14px]">
              Все категории
            </button>
          </Link>
        </div>
        <div className="py-16 gap-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex flex-col col-span-1 md:col-span-2 lg:col-span-1 justify-between w-full">
            <div className="mb-3 flex flex-col justify-between h-[48%] rounded-xl items-center pt-3 bg-white">
              <img
                src="./Phtoto-min.png"
                alt="img"
                className="rounded-t-xl h-[80%]"
              />
              <div className="border bg-[#f7f8f2] w-full rounded-b-xl py-5 pl-6 pr-12">
                <p className="text-[#202020]">Дерматологическое оборудование</p>
              </div>
            </div>
            <div className="flex flex-col justify-between h-[48%] rounded-xl items-center bg-white pt-3">
              <img
                src="./Photo1-min.png"
                alt="img"
                className="rounded-t-xl h-[80%]"
              />
              <div className="border bg-[#f7f8f2] rounded-b-xl py-5 pl-6 pr-12 w-full mt-1">
                <p className="text-[#202020]">Дерматологическое</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col h-full justify-between w-full col-span-1">
            <div className="mb-3 flex flex-col justify-between h-full pt-3 rounded-xl items-center bg-white">
              <img
                src="./Photo2-min.png"
                alt="img"
                className="rounded-t-xl h-[80%]"
              />
              <div className="border bg-[#f7f8f2] w-full rounded-b-xl py-5 pl-6 pr-12">
                <p className="text-[#202020]">Дерматологическое оборудование</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between w-full col-span-1">
            <div className="mb-3 flex flex-col justify-between h-[48%] rounded-xl items-center pt-3 bg-white">
              <img
                src="./Photo3-min.png"
                alt="img"
                className="rounded-t-xl h-[80%]"
              />
              <div className="border bg-[#f7f8f2] w-full rounded-b-xl py-5 pl-6 pr-12">
                <p className="text-[#202020]">Дерматологическое оборудование</p>
              </div>
            </div>
            <div className="flex flex-col justify-between h-[48%] rounded-xl items-center bg-white pt-3">
              <img
                src="./Photo4-min.png"
                alt="img"
                className="rounded-t-xl h-[80%]"
              />
              <div className="border bg-[#f7f8f2] rounded-b-xl  py-5 pl-6 pr-12 w-full mt-1">
                <p className="text-[#202020]">Дерматологическое</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between w-full col-span-1">
            <div className="mb-3 flex flex-col justify-between h-[48%] rounded-xl items-center pt-3 bg-white">
              <img
                src="https://s3-alpha-sig.figma.com/img/d2e6/71b1/8132204915c34ae4aa933a3947a30dfe?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FT0iKQJK1oNS2X4ngziOjg261OGdCUt9EpqcNXWIS47g0N1i3qzAFq91-I4SPO2vWy-wOgTLY6AksS8NRu32gYA-VCv5WRyMLrb20~7tzeIoGWYLAJQ3fTX3OxQ-OAfkSe5SWETU8Ec9Wj79ooa092MPYZboSABefgbDn2pPFkbvtwqN8QX7IHROjYoJbosjlKalu0prfdxIxBxzKHVt7HrUaVPg~oFjaYO6jyo1C3Ot38odRtEHvkp2a1-KDmTqXGxoKnLMiRKRxE0zz~WHjm8Ei0QYWcgslQcc~Lu7lF9mfQXOPjP9aNMIsa6JrGyiYhjwADe3dTOPw7H0q4iQqA__"
                alt="img"
                className="rounded-t-xl h-[80%] max-w-[172px]"
              />
              <div className="border bg-[#f7f8f2] w-full rounded-b-xl py-5 pl-6 pr-12">
                <p className="text-[#202020]">Дерматологическое оборудование</p>
              </div>
            </div>
            <div className="flex flex-col justify-between h-[48%] rounded-xl items-center bg-white pt-3">
              <img
                src="https://s3-alpha-sig.figma.com/img/122b/026c/71cb144ee8b206b9ff0b172930f31d18?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hT7GDC-6MtVBJMzBpQobAyciUS8Ovhh5eHzVqPOXlZaf8xvrsIzh3Bexax7CsADyLCuN7FVyB2C0kHIghxXJYEXR3aaCWqnAiSPL2LFGSCSWYeGoeG2l~JDAO7nAhYV7i5BSfihyimD-EyG9ATWZ8RhZP65P54p5GcCulRchoZmlcU5fhLlhoAHgxFj05ymtGU-~lWV3Da6HVmnKrMcHkxptUG0fqejVoaTpoYw-9S3VdRa4omQxt-dMeRaSKJtUcY0BIj5LkfwK3sbh2XJUKcxT7-zohszCREiY849tS2WF7eVgqLudIPzbaa-vg3Vn2jkkwuAuy2S9ScO80-CIFQ__"
                alt="img"
                className="rounded-t-xl h-[80%] max-w-[172px]"
              />
              <div className="border bg-[#f7f8f2] rounded-b-xl py-5 pl-6 pr-12 w-full mt-1">
                <p className="text-[#202020]">Дерматологическое</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
