import logoImage from "@/assets/logo.png";

const Header = () => {
  return (
    <div className="flex items-center justify-between  px-[38px] md:px-[124px] py-[34px] md:py-[64px]">
      <img
        src={logoImage}
        alt=""
        className="w-[75px] h-[24px] md:w-[161px] md:h-[51px]"
      />

      <div className="hidden md:flex items-center gap-4">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.45 4.16678C5.5 4.90845 5.625 5.63345 5.825 6.32511L4.825 7.32511C4.48333 6.32511 4.26667 5.26678 4.19167 4.16678H5.45ZM13.6667 14.1835C14.375 14.3835 15.1 14.5085 15.8333 14.5585V15.8001C14.7333 15.7251 13.675 15.5085 12.6667 15.1751L13.6667 14.1835ZM6.25 2.50006H3.33333C2.875 2.50006 2.5 2.87506 2.5 3.33339C2.5 11.1584 8.84167 17.5001 16.6667 17.5001C17.125 17.5001 17.5 17.1251 17.5 16.6667V13.7584C17.5 13.3001 17.125 12.9251 16.6667 12.9251C15.6333 12.9251 14.625 12.7584 13.6917 12.4501C13.6083 12.4167 13.5167 12.4084 13.4333 12.4084C13.2167 12.4084 13.0083 12.4917 12.8417 12.6501L11.0083 14.4834C8.65 13.2751 6.71667 11.3501 5.51667 8.99173L7.35 7.15839C7.58333 6.92506 7.65 6.60006 7.55833 6.30839C7.25 5.37506 7.08333 4.37506 7.08333 3.33339C7.08333 2.87506 6.70833 2.50006 6.25 2.50006Z"
              fill="black"
            />
          </svg>
          <span>+880710123456</span>
        </div>
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.3333 5.00004C18.3333 4.08337 17.5833 3.33337 16.6666 3.33337H3.33329C2.41663 3.33337 1.66663 4.08337 1.66663 5.00004V15C1.66663 15.9167 2.41663 16.6667 3.33329 16.6667H16.6666C17.5833 16.6667 18.3333 15.9167 18.3333 15V5.00004ZM16.6666 4.99999L9.99997 9.16666L3.3333 4.99999H16.6666ZM16.6666 15H3.3333V6.66666L9.99997 10.8333L16.6666 6.66666V15Z"
              fill="black"
            />
          </svg>
          <span>hello@tccbd.org</span>
        </div>
      </div>

      {/* Mobile device */}
      <div className=" flex flex-col items-center gap-[2px] md:hidden">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.33334 2.00003C7.33334 1.63336 7.03334 1.33336 6.66667 1.33336H1.33334C0.966672 1.33336 0.666672 1.63336 0.666672 2.00003V6.00003C0.666672 6.36669 0.966672 6.66669 1.33334 6.66669H6.66667C7.03334 6.66669 7.33334 6.36669 7.33334 6.00003V2.00003ZM6.66668 2.00001L4.00001 3.66667L1.33334 2.00001H6.66668ZM6.66668 6H1.33334V2.66667L4.00001 4.33334L6.66668 2.66667V6Z"
              fill="black"
            />
          </svg>
          <span className="text-[8px]">+880710123456</span>
        </div>
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.18 1.6667C2.2 1.96337 2.25 2.25337 2.33 2.53004L1.93 2.93004C1.79333 2.53004 1.70667 2.1067 1.67667 1.6667H2.18ZM5.46667 5.67338C5.75 5.75338 6.04 5.80338 6.33333 5.82338V6.32004C5.89333 6.29004 5.47 6.20338 5.06667 6.07004L5.46667 5.67338ZM2.5 1.00002H1.33333C1.15 1.00002 1 1.15002 1 1.33335C1 4.46335 3.53667 7.00002 6.66667 7.00002C6.85 7.00002 7 6.85002 7 6.66668V5.50335C7 5.32002 6.85 5.17002 6.66667 5.17002C6.25333 5.17002 5.85 5.10335 5.47667 4.98002C5.44333 4.96668 5.40667 4.96335 5.37333 4.96335C5.28667 4.96335 5.20333 4.99668 5.13667 5.06002L4.40333 5.79335C3.46 5.31002 2.68667 4.54002 2.20667 3.59668L2.94 2.86335C3.03333 2.77002 3.06 2.64002 3.02333 2.52335C2.9 2.15002 2.83333 1.75002 2.83333 1.33335C2.83333 1.15002 2.68333 1.00002 2.5 1.00002Z"
              fill="black"
            />
          </svg>
          <span className="text-[8px]">hello@tccbd.org</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
