import { BsSearch } from 'react-icons/bs';

const TipModal = () => {
  const modalStyles = {
    container: `h-full w-full flex flex-col `,
    closeX: `w-full h-[50px] flex items-center justify-end mb-[20px]`,
    title: `text-3xl font-bold flex flex-1 items-center mt-[20px] justify-center mb-[40px]`,
    content: `flex w-full mb-[30px] text-xl justify-center`,
    input: `w-[50%] h-[50px] bg-[#f7f6f2] rounded-lg p-[10px] flex mx-auto`,
    inputBox: `w-full h-full flex items-center justify-center bg-[#f7f6f2] focus:outline-none`,
    amount: `w-full h-full flex justify-center items-center mt-[20px] font-bold text-3xl`,
    tipBtn: `w-[20%] h-[50px] bg-[#000] mt-[40px] rounded-lg p-[10px] flex mx-auto text-white justify-center items-center cursor-pointer`,
    loaderContainer: `w-full h-[500px] flex items-center justify-center`,
    loader: `w-full h-full flex items-center justify-center`,
    etherscan: `w-full h-full flex items-center justify-center text-green-500 text-2xl mt-[20px] font-bold cursor-pointer`,
    success: `w-full h-full flex items-center justify-center text-xl mt-[20px] font-bolder`,
  };

  return <div className="w-full h-full"></div>;
};

export default TipModal;
