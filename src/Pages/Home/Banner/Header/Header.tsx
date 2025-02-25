import logoImage from "@/assets/logo.png";

const Header = () => {
  return (
    <div className="flex items-center justify-between bg px-[124px] py-[64px]">
      <div>
        <img src={logoImage} alt="" className="w-[161px] h-[51px]" />
      </div>
      <div className="flex items-center gap-4">
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
    </div>
  );
};

export default Header;
