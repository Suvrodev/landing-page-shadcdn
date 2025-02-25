import { Button } from "@/components/ui/button";

const BookASection = () => {
  return (
    <div>
      <div className="hidden md:flex items-center relative bg-[linear-gradient(90deg,_#EAF9FF_0%,_#FFFADF_100%)] px-[120px] h-[338px]  ">
        <div className="flex justify-between gap-20 items-center">
          <div className="">
            <h1 className="text-[36px] font-semibold">
              Let’s build a compassionate world together.
            </h1>

            <Button className="rounded-lg bg-[#FFD400] hover:bg-[#FFD400] backdrop-blur-[18px] headingColor mt-[34px] font-semibold">
              Book a Session
            </Button>
          </div>
          <div className="absolute bottom-0 right-0 mr-[122px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="233"
              height="233"
              viewBox="0 0 233 233"
              fill="none"
            >
              <path
                d="M232.422 116.625C232.422 180.807 180.397 232.846 116.207 232.846C52.0182 232.846 0 180.814 0 116.625C0 52.4353 52.0321 0.410156 116.207 0.410156C180.383 0.410156 232.422 52.4423 232.422 116.625Z"
                fill="#FFD400"
              />
            </svg>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="139"
                height="235"
                viewBox="0 0 139 235"
                fill="none"
              >
                <path
                  d="M41.873 234.379V168.481L104.137 164.749L93.0124 234.706L41.873 234.379Z"
                  fill="#90CAF9"
                />
                <path
                  d="M41.873 168.48V186.81C53.6884 195.215 67.1289 200.411 79.7672 206.514C86.3305 209.646 91.2757 214.723 95.2234 220.854L104.137 164.756L41.873 168.487V168.48Z"
                  fill="#00ADEE"
                />
                <path
                  d="M114.209 84.2866C114.209 84.2866 121.079 40.0733 123.228 18.1863C125.369 -3.70068 105.198 -4.13313 98.7599 11.7485C92.3152 27.6302 94.0937 68.8374 94.0937 68.8374L114.202 84.2866H114.209Z"
                  fill="#90CAF9"
                />
                <path
                  d="M94.1005 68.8379L114.209 84.2871C114.209 84.2871 117.654 62.142 120.423 41.4408C111.998 35.3378 103.83 28.921 96.0535 22.2461C92.8939 40.9805 94.1005 68.8379 94.1005 68.8379Z"
                  fill="#00ADEE"
                />
                <path
                  d="M78.5886 188.155C62.6999 190.729 41.6709 189.02 22.3576 166.268C3.04432 143.516 -0.819731 103.355 0.47061 94.6788C1.75398 86.0091 18.0611 87.4808 21.9251 94.6788C21.9251 94.6788 18.7167 78.281 26.3332 75.7073C33.9497 73.1336 43.3936 77.8555 46.3998 84.2933C46.3998 84.2933 42.9612 69.2695 52.8306 64.5546C62.6999 59.8256 71.7184 62.4063 75.5754 66.6958C75.5754 66.6958 54.1139 28.9272 49.392 15.1868C44.677 1.4534 64.4227 -5.84924 76.4333 12.1807C88.444 30.2106 118.924 68.8371 131.367 87.2994C143.817 105.755 139.095 149.103 117.627 167.126C96.1721 185.149 78.5816 188.155 78.5816 188.155H78.5886Z"
                  fill="#90CAF9"
                />
                <path
                  d="M72.8901 63.6901C72.9041 69.6885 78.3375 75.8263 81.3576 80.7575C85.1658 86.9651 87.4815 94.4072 92.0639 100.001C93.4031 101.64 95.635 100.127 95.7954 98.4526C96.5278 90.9338 91.0317 83.4149 87.1327 77.3747C83.9731 72.4645 78.9443 65.0642 73.0366 63.5785C72.9599 63.5646 72.8832 63.6134 72.8832 63.6901H72.8901Z"
                  fill="#FFD400"
                />
                <path
                  d="M41.9358 80.7717C44.4955 86.6026 47.5575 92.2243 50.1451 98.0553C52.4538 103.279 55.3135 109.271 59.5821 113.163C60.5237 114.014 61.8419 113.386 61.9396 112.186C62.4836 105.979 57.2734 100.678 54.6718 95.4118C51.7982 89.5809 48.4502 83.4919 42.8843 79.8301C42.2427 79.4116 41.6917 80.1997 41.9358 80.7786V80.7717Z"
                  fill="#FFD400"
                />
                <path
                  d="M18.054 90.843C19.714 97.232 22.5528 102.714 25.6566 108.503C28.2512 113.33 31.0272 120.716 36.335 122.99C37.6393 123.548 39.5783 122.948 39.4528 121.197C39.0412 115.408 33.8171 110.261 30.6715 105.574C27.0027 100.099 23.7385 94.8675 18.8212 90.3897C18.4865 90.0828 17.9355 90.3827 18.054 90.8361V90.843Z"
                  fill="#FFD400"
                />
                <path
                  d="M94.4563 38.0088C98.2157 42.7028 101.292 48.2757 104.688 53.2627C107.813 57.8591 111.014 62.4974 114.523 66.8148C115.939 68.5585 118.303 66.0964 116.971 64.3736C110.038 55.4319 104.584 43.7769 95.0003 37.2973C94.54 36.9904 94.1563 37.6391 94.4563 38.0088Z"
                  fill="#FFD400"
                />
              </svg>
            </div>
            <div className="absolute -top-16 right-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="84"
                height="75"
                viewBox="0 0 84 75"
                fill="none"
              >
                <path
                  d="M82.6869 26.0823C80.5457 16.471 72.1131 9.7124 62.2716 11.2887C52.2837 12.8859 44.6951 23.2575 39.9871 31.99C39.7709 23.1877 38.083 13.6532 32.538 6.75508C26.2467 -1.07066 15.1358 -2.47958 7.30313 4.55104C-12.4635 22.288 19.3138 57.9432 28.116 73.246C28.4089 73.7621 28.7995 74.0969 29.225 74.3062C29.9434 74.7595 30.871 74.8432 31.8196 74.2155C43.8442 66.3479 56.7267 60.1473 68.1096 51.2823C75.1402 45.8001 84.9328 36.133 82.6939 26.0823H82.6869Z"
                  fill="#00C9D0"
                />
                <g style={{ mixBlendMode: "multiply" }}>
                  {" "}
                  {/* FIXED */}
                  <path
                    d="M82.6869 26.0824C80.9153 18.145 74.8472 12.1676 67.2516 11.2051C56.7964 31.6343 40.852 50.0478 22.0479 63.9486C24.4821 67.5058 26.6303 70.6724 28.109 73.2461C28.4019 73.7622 28.7925 74.097 29.218 74.3062C29.9364 74.7596 30.864 74.8433 31.8126 74.2156C43.8372 66.348 56.7197 60.1474 68.1026 51.2824C75.1332 45.8002 84.9258 36.1331 82.6869 26.0824Z"
                    fill="#00C9D0"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Device */}
      <div className="md:hidden bg-[linear-gradient(90deg,_#EAF9FF_0%,_#FFFADF_100%)] pt-[12px]">
        <div className="flex justify-center">
          <div className=" flex flex-col justify-center items-center">
            <h1 className="text-[16px] text-center font-semibold">
              Let’s build a <br /> compassionate world together.
            </h1>

            <Button className="rounded-lg bg-[#FFD400] hover:bg-[#FFD400] backdrop-blur-[18px] headingColor mt-[8px] font-semibold">
              Book a Session
            </Button>

            <div className="mt-[18px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="65"
                height="84"
                viewBox="0 0 65 84"
                fill="none"
              >
                <path
                  d="M64.4218 50.6193C64.4218 68.4091 50.0017 82.8331 32.2099 82.8331C14.4182 82.8331 0 68.4111 0 50.6193C0 32.8276 14.4221 18.4075 32.2099 18.4075C49.9978 18.4075 64.4218 32.8295 64.4218 50.6193Z"
                  fill="#FFD400"
                />
                <path
                  d="M24.6335 83.535V65.2696L41.8917 64.2354L38.8081 83.6259L24.6335 83.535Z"
                  fill="#90CAF9"
                />
                <path
                  d="M24.6335 65.2694V70.35C27.9084 72.6796 31.6338 74.1199 35.1369 75.8114C36.9561 76.6795 38.3267 78.0869 39.421 79.7862L41.8917 64.2371L24.6335 65.2714V65.2694Z"
                  fill="#00ADEE"
                />
                <path
                  d="M44.6833 41.9332C44.6833 41.9332 46.5876 29.6783 47.183 23.6117C47.7765 17.5452 42.1856 17.4253 40.4012 21.8274C38.6148 26.2294 39.1078 37.651 39.1078 37.651L44.6814 41.9332H44.6833Z"
                  fill="#90CAF9"
                />
                <path
                  d="M39.1097 37.6509L44.6833 41.9331C44.6833 41.9331 45.6383 35.795 46.4058 30.0571C44.0704 28.3655 41.8066 26.5869 39.651 24.7368C38.7752 29.9295 39.1097 37.6509 39.1097 37.6509Z"
                  fill="#00ADEE"
                />
                <path
                  d="M34.8102 70.7232C30.4062 71.4366 24.5774 70.9629 19.2243 64.6567C13.8711 58.3504 12.8001 47.2187 13.1577 44.8138C13.5134 42.4107 18.0334 42.8186 19.1044 44.8138C19.1044 44.8138 18.2151 40.2687 20.3262 39.5553C22.4373 38.8419 25.055 40.1508 25.8882 41.9352C25.8882 41.9352 24.9351 37.7709 27.6707 36.464C30.4062 35.1533 32.9059 35.8686 33.975 37.0576C33.975 37.0576 28.0264 26.589 26.7176 22.7805C25.4107 18.9739 30.8837 16.9498 34.2128 21.9473C37.5418 26.9447 45.9902 37.6511 49.4391 42.7684C52.8899 47.8838 51.5811 59.8989 45.6306 64.8945C39.6839 69.89 34.8082 70.7232 34.8082 70.7232H34.8102Z"
                  fill="#90CAF9"
                />
                <path
                  d="M33.2307 36.2242C33.2346 37.8868 34.7406 39.5881 35.5777 40.9549C36.6332 42.6755 37.2751 44.7383 38.5452 46.2887C38.9164 46.743 39.535 46.3235 39.5795 45.8596C39.7825 43.7755 38.2591 41.6915 37.1784 40.0173C36.3026 38.6563 34.9088 36.6051 33.2713 36.1933C33.25 36.1894 33.2288 36.203 33.2288 36.2242H33.2307Z"
                  fill="#FFD400"
                />
                <path
                  d="M24.6509 40.9591C25.3604 42.5753 26.2091 44.1335 26.9263 45.7497C27.5662 47.1977 28.3589 48.8584 29.542 49.9372C29.803 50.173 30.1684 49.999 30.1954 49.6665C30.3462 47.9459 28.9021 46.4766 28.181 45.017C27.3845 43.4008 26.4565 41.7131 24.9138 40.6981C24.7359 40.5821 24.5832 40.8006 24.6509 40.9611V40.9591Z"
                  fill="#FFD400"
                />
                <path
                  d="M18.0315 43.7504C18.4916 45.5213 19.2784 47.0408 20.1387 48.6454C20.8579 49.9832 21.6273 52.0305 23.0985 52.6608C23.46 52.8154 23.9975 52.6492 23.9627 52.1639C23.8486 50.5593 22.4006 49.1326 21.5287 47.8334C20.5118 46.3158 19.6071 44.8659 18.2441 43.6247C18.1513 43.5397 17.9986 43.6228 18.0315 43.7485V43.7504Z"
                  fill="#FFD400"
                />
                <path
                  d="M39.2083 29.1061C40.2503 30.4072 41.1029 31.9518 42.0444 33.3341C42.9105 34.6081 43.7979 35.8938 44.7703 37.0904C45.1627 37.5737 45.8181 36.8913 45.4489 36.4138C43.5272 33.9354 42.0154 30.7049 39.3591 28.9089C39.2315 28.8238 39.1252 29.0036 39.2083 29.1061Z"
                  fill="#FFD400"
                />
                <path
                  d="M50.3593 7.22939C49.7658 4.56537 47.4285 2.69205 44.7007 3.12896C41.9323 3.57168 39.8289 6.44642 38.5239 8.86686C38.464 6.42709 37.9962 3.78433 36.4592 1.87235C34.7154 -0.296763 31.6357 -0.68728 29.4647 1.26144C23.9859 6.1777 32.7938 16.0605 35.2335 20.302C35.3147 20.4451 35.423 20.5379 35.5409 20.5959C35.74 20.7216 35.9972 20.7448 36.2601 20.5708C39.593 18.3901 43.1637 16.6714 46.3188 14.2142C48.2675 12.6947 50.9818 10.0152 50.3612 7.22939H50.3593Z"
                  fill="#00C9D0"
                />
                <g style={{ mixBlendMode: "multiply" }}>
                  <path
                    d="M50.3593 7.22959C49.8683 5.02954 48.1863 3.37275 46.081 3.10596C43.1831 8.76846 38.7637 13.8722 33.5516 17.7252C34.2263 18.7112 34.8218 19.5889 35.2316 20.3022C35.3128 20.4453 35.4211 20.5381 35.539 20.5961C35.7381 20.7218 35.9952 20.745 36.2582 20.571C39.5911 18.3903 43.1618 16.6716 46.3169 14.2144C48.2656 12.6949 50.9799 10.0154 50.3593 7.22959Z"
                    fill="#00C9D0"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookASection;
