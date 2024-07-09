import React, { useState, useEffect } from "react";
import { GrFormNextLink } from "react-icons/gr";
import { IoMdArrowBack } from "react-icons/io";

const Brend = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  const newsItems = [
    {
      title: "НМИЦ онкологии им. Н.Н. Блохина",
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/40a3/9e49/81e4863f171c830a16afa5bd4155182f?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dRP-EUusRXn0sD8fEJ71N9MusvOsxq-RdEWxBG0liAcerrdFLSTMberqkPdEZnGqjgCqW~KIALiKgeSq6MApzP1vM5-LZ1wfNELBKWcE52WF0sOKfdCPFhUKALfu1feNeDyWYpBE3sz7HJkORc9tKdtP3MvOwQyn9aJ1Hmo6XIjbpFLBqYJ5WQcu-YpeocQ-8qSlrChsftHRwWuFs311cl8RbHXpT6g8b0hYPTEjIE2ZaoIB6HdmKYvDQ34bffVT5DU68DuVggjqIp6MLh9vONEulaSswxBN~ijOrr~v8xn9WK08TbSi9dZFc3oSXQSNV2pkro2EnEXT3RkftybXvA__",
    },
    {
      date: "07.11.2022",
      title: "НМИЦ онкологии им. Н.Н. Блохина",
      description: "Допускает внедрение поэтапного и развития общества.",
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/7685/b204/10c5d46143d134f91c83f3dc815c432f?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NLVA4AKPFej~u0Ko4aNIyjJQ7SYmFtuV3gsJuIbBRFY08zItjUsFYSfFcpHOyHnnM9TI1Fc4qcsjDtz9oO6jKUpF~bgDcYQQWvssUjrnPTR-QzhHLMKysKrTNrBQzZwYAmY9ZlR85Hkl6-E8pK7nng8HMmCs4oGWTS5f5BNvFuiZJF2EGW-pDzL3hLCVIMe5DKa3kAdxFim4zg8maKN3NyVEr2NTwLdcXNBqooAEJ~r7Lqw4bkMu-fh~07FWmbK-SyNtlE-qw4I6P-~YkcD30fEhR6EqwDMizfuncZIWz1K1s23p7j~gRajicF7UUZ2p9X9BixQ1AWJ6LFM-eWfwZg__",
    },
    {
      date: "07.11.2022",
      title: "НМИЦ онкологии им. Н.Н. Блохина",
      description: "Допускает внедрение поэтапного и развития общества.",
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/c24e/9fda/01d837f488eff4200f9cf2a59420b504?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W61HPNK9UiMe6fDb3JHNJK8GkvnSOnHFr4tbOsCWPXm1iGUGxX-sAchImH3C3iIiFx6SP6AFQHaq9lhYLKRewe4ZCE3ef7otVR3dJnInNdZJGJvGGJWlmQg3xLLB-7MWF-CA0BCbK33brsgZV77wd~OIQTdfiJ3ewMGbP290gmzTOJusQHAHFGWhmrplozammLMIIEFwOdUV1SupvmxPutLLzYhqK57xVp-vB8mclCOHcYt-Xpgkww2nq1sxTbUQN4E0YPFPv52ulkX1SxXMDgYPJkNAyYaarwflooVRLytV7F4RQY8kdyaCgzUF-yjJJDlNKSS3ZiN8PPQ-YLWoyw__",
    },
    {
      date: "07.11.2022",
      title: "НМИЦ онкологии им. Н.Н. Блохина",
      description: "Допускает внедрение поэтапного и развития общества.",
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/c24e/9fda/01d837f488eff4200f9cf2a59420b504?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W61HPNK9UiMe6fDb3JHNJK8GkvnSOnHFr4tbOsCWPXm1iGUGxX-sAchImH3C3iIiFx6SP6AFQHaq9lhYLKRewe4ZCE3ef7otVR3dJnInNdZJGJvGGJWlmQg3xLLB-7MWF-CA0BCbK33brsgZV77wd~OIQTdfiJ3ewMGbP290gmzTOJusQHAHFGWhmrplozammLMIIEFwOdUV1SupvmxPutLLzYhqK57xVp-vB8mclCOHcYt-Xpgkww2nq1sxTbUQN4E0YPFPv52ulkX1SxXMDgYPJkNAyYaarwflooVRLytV7F4RQY8kdyaCgzUF-yjJJDlNKSS3ZiN8PPQ-YLWoyw__",
    },
    {
      date: "07.11.2022",
      title: "НМИЦ онкологии им. Н.Н. Блохина",
      description: "Допускает внедрение поэтапного и развития общества.",
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/c24e/9fda/01d837f488eff4200f9cf2a59420b504?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W61HPNK9UiMe6fDb3JHNJK8GkvnSOnHFr4tbOsCWPXm1iGUGxX-sAchImH3C3iIiFx6SP6AFQHaq9lhYLKRewe4ZCE3ef7otVR3dJnInNdZJGJvGGJWlmQg3xLLB-7MWF-CA0BCbK33brsgZV77wd~OIQTdfiJ3ewMGbP290gmzTOJusQHAHFGWhmrplozammLMIIEFwOdUV1SupvmxPutLLzYhqK57xVp-vB8mclCOHcYt-Xpgkww2nq1sxTbUQN4E0YPFPv52ulkX1SxXMDgYPJkNAyYaarwflooVRLytV7F4RQY8kdyaCgzUF-yjJJDlNKSS3ZiN8PPQ-YLWoyw__",
    },
    {
      date: "07.11.2022",
      title: "НМИЦ онкологии им. Н.Н. Блохина",
      description: "Допускает внедрение поэтапного и развития общества.",
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/c24e/9fda/01d837f488eff4200f9cf2a59420b504?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W61HPNK9UiMe6fDb3JHNJK8GkvnSOnHFr4tbOsCWPXm1iGUGxX-sAchImH3C3iIiFx6SP6AFQHaq9lhYLKRewe4ZCE3ef7otVR3dJnInNdZJGJvGGJWlmQg3xLLB-7MWF-CA0BCbK33brsgZV77wd~OIQTdfiJ3ewMGbP290gmzTOJusQHAHFGWhmrplozammLMIIEFwOdUV1SupvmxPutLLzYhqK57xVp-vB8mclCOHcYt-Xpgkww2nq1sxTbUQN4E0YPFPv52ulkX1SxXMDgYPJkNAyYaarwflooVRLytV7F4RQY8kdyaCgzUF-yjJJDlNKSS3ZiN8PPQ-YLWoyw__",
    },
    {
      date: "07.11.2022",
      title: "НМИЦ онкологии им. Н.Н. Блохина",
      description: "Допускает внедрение поэтапного и развития общества.",
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/c24e/9fda/01d837f488eff4200f9cf2a59420b504?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W61HPNK9UiMe6fDb3JHNJK8GkvnSOnHFr4tbOsCWPXm1iGUGxX-sAchImH3C3iIiFx6SP6AFQHaq9lhYLKRewe4ZCE3ef7otVR3dJnInNdZJGJvGGJWlmQg3xLLB-7MWF-CA0BCbK33brsgZV77wd~OIQTdfiJ3ewMGbP290gmzTOJusQHAHFGWhmrplozammLMIIEFwOdUV1SupvmxPutLLzYhqK57xVp-vB8mclCOHcYt-Xpgkww2nq1sxTbUQN4E0YPFPv52ulkX1SxXMDgYPJkNAyYaarwflooVRLytV7F4RQY8kdyaCgzUF-yjJJDlNKSS3ZiN8PPQ-YLWoyw__",
    },
    {
      date: "07.11.2022",
      title: "НМИЦ онкологии им. Н.Н. Блохина",
      description: "Допускает внедрение поэтапного и развития общества.",
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/c24e/9fda/01d837f488eff4200f9cf2a59420b504?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W61HPNK9UiMe6fDb3JHNJK8GkvnSOnHFr4tbOsCWPXm1iGUGxX-sAchImH3C3iIiFx6SP6AFQHaq9lhYLKRewe4ZCE3ef7otVR3dJnInNdZJGJvGGJWlmQg3xLLB-7MWF-CA0BCbK33brsgZV77wd~OIQTdfiJ3ewMGbP290gmzTOJusQHAHFGWhmrplozammLMIIEFwOdUV1SupvmxPutLLzYhqK57xVp-vB8mclCOHcYt-Xpgkww2nq1sxTbUQN4E0YPFPv52ulkX1SxXMDgYPJkNAyYaarwflooVRLytV7F4RQY8kdyaCgzUF-yjJJDlNKSS3ZiN8PPQ-YLWoyw__",
    },
    {
      date: "07.11.2022",
      title: "НМИЦ онкологии им. Н.Н. Блохина",
      description: "Допускает внедрение поэтапного и развития общества.",
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/c24e/9fda/01d837f488eff4200f9cf2a59420b504?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W61HPNK9UiMe6fDb3JHNJK8GkvnSOnHFr4tbOsCWPXm1iGUGxX-sAchImH3C3iIiFx6SP6AFQHaq9lhYLKRewe4ZCE3ef7otVR3dJnInNdZJGJvGGJWlmQg3xLLB-7MWF-CA0BCbK33brsgZV77wd~OIQTdfiJ3ewMGbP290gmzTOJusQHAHFGWhmrplozammLMIIEFwOdUV1SupvmxPutLLzYhqK57xVp-vB8mclCOHcYt-Xpgkww2nq1sxTbUQN4E0YPFPv52ulkX1SxXMDgYPJkNAyYaarwflooVRLytV7F4RQY8kdyaCgzUF-yjJJDlNKSS3ZiN8PPQ-YLWoyw__",
    },
  ];

  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === Math.ceil(newsItems.length / itemsPerSlide) - 1
        ? 0
        : prevSlide + 1
    );
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0
        ? Math.ceil(newsItems.length / itemsPerSlide) - 1
        : prevSlide - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 3000); 
    return () => clearInterval(interval); 
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(3);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="my-36 flex max-lg:flex-col">
      <div className="ml-20 w-[15%] mr-36 text-[30px] max-lg:ml-5 max-lg:mr-0 max-lg:mb-5">
        Новости компании
      </div>
      <div className="w-[85%] overflow-hidden max-lg:w-full">
        <div
          className="flex transition-transform duration-300 gap-6 relative"
          style={{
            transform: `translateX(-${currentSlide * (100 / itemsPerSlide)}%)`,
          }}
        >
          {newsItems.map((item, index) => (
            <div
              key={index}
              className={`w-[${90 / itemsPerSlide}%] flex-shrink-0 max-w-80`}
            >
              <img
                src={item.imgSrc}
                alt="img"
                className="w-full h-[200px] object-contain bg-white"
              />
              <div className="border py-5 pl-4 pr-8">
                <h3 className="text-[18px] font-medium">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center mt-10 justify-between">
          <div className="flex  gap-4 px-4 max-md:hidden">
            <div
              className="p-2 cursor-pointer border rounded-full bg-white"
              onClick={handlePrev}
            >
              <IoMdArrowBack className="bg-white" />
            </div>
            <div
              className="p-2 cursor-pointer border rounded-full bg-white"
              onClick={handleNext}
            >
              <GrFormNextLink className="bg-white" />
            </div>
          </div>
          <div className="">
            <button className="px-7 py-3 bg-[#088269] rounded-3xl text-white font-bold text-[14px]">
              Сертификаты
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brend;
