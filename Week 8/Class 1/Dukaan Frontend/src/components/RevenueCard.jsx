export const RevenueCard = ({
  title,
  price,
  orders,
  dateTime,
  selected,
  onPush,
}) => {
  return selected ? (
    <div className="revenue-card flex flex-col hover:bg-[#0E4F82] bg-[#146EB4] w-[30%] h-[100%] rounded-[8px] justify-between text-white overflow-hidden cursor-pointer transition-all duration-500">
      <div className="one h-[30%] flex items-center pl-[5%]">
        {title}
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          className="ml-[2%]"
        >
          <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"></path>
        </svg>
      </div>
      <div className="two h-[45%] flex justify-between">
        <h2 className="w-[50%] flex items-center pl-[5%] text-[200%] font-semibold">
          {price}
        </h2>
        <h2 className="w-[50%] flex items-center underline font-semibold justify-end pr-[5%]">
          {orders} Orders{" "}
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 320 512"
            className="text-lg"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
          </svg>
        </h2>
      </div>
      <div className="three h-[25%] flex bg-[#0E4F82] rounded-[8px]">
        <p className="w-[50%] flex items-center pl-[5%]">Next Payment Date:</p>
        <p className="w-[50%] flex items-center justify-end pr-[5%]">
          {dateTime}
        </p>
      </div>
    </div>
  ) : (
    <div
      onClick={onPush}
      className="revenue-card flex flex-col hover:bg-[#d5e3e2] bg-[#f5f7f7] w-[30%] h-[80%] rounded-[8px] justify-between text-black overflow-hidden cursor-pointer"
    >
      <div className="one h-[40%] flex items-center pl-[5%]">
        {title}
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          className="ml-[2%]"
        >
          <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"></path>
        </svg>
      </div>
      <div className="two h-[60%] flex justify-between">
        <h2 className="w-[50%] flex items-center pl-[5%] text-[200%] font-semibold">
          {price}
        </h2>
        <h2 className="w-[50%] flex items-center underline font-semibold justify-end pr-[5%] text-blue-600">
          {orders} Orders{" "}
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 320 512"
            className="text-lg"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
          </svg>
        </h2>
      </div>
    </div>
  );
};
