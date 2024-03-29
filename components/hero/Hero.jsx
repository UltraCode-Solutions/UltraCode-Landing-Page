import { TypeAnimation } from "react-type-animation";


export default function Hero() {
   return (
      <section id="hero" className="w-full h-full relative">
         <div className="flex justify-center items-center h-screen">
            <div className="flex h-full items-center justify-center bg-[#090E34] w-full dark:text-white z-0">
               <div className="z-10">
                  <div className="flex flex-col justify-center lg:items-start items-center gap-y-2 relative">

                     <h1 className="lg:text-6xl text-[15px] md:text-3xl text-white/90 uppercase font-bold ">
                        We Make <span className="text-gradient">Your Apps</span>
                        </h1> 
                        
                        <TypeAnimation
                        sequence={[
                           "POWERFUL",
                           1500,
                           "ADAPTABLE",
                           1500,
                           "Better",
                           1500
                           
                        ]}
                        wrapper="h1"
                        speed={20}
                        style={{ fontSize: "4.6em", textTransform: "uppercase", color: "white", fontWeight: "bold", textAlign: "center", width: "100%"  }}
                        
                     />
                        
                        </div>
                        <div className="flex justify-center items-center gap-x-10 mt-16">
                           <a
                              className="rounded-md bg-[#4A6CF7] py-3 px-10 text-base font-semibold  text-white duration-300 ease-in-out hover:bg-blue-500/60"
                              href="#"
                           >
                              Contact
                           </a>
   
                           <a
                              className="rounded-md bg-[#3A3E5D] py-3 px-10 text-base font-semibold  text-white duration-300 ease-in-out hover:bg-gray-500/60"
                              href="#"
                           >
                              GitHub
                           </a>
                        </div>
               </div>

               <div className="z-5 absolute top-0 right-0">
                  <svg
                     width="300"
                     height="556"
                     viewBox="0 0 450 556"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <circle
                        cx="277"
                        cy="63"
                        r="225"
                        fill="url(#paint0_linear_25:217)"
                     ></circle>
                     <circle
                        cx="17.9997"
                        cy="182"
                        r="18"
                        fill="url(#paint1_radial_25:217)"
                     ></circle>
                     <circle
                        cx="76.9997"
                        cy="288"
                        r="34"
                        fill="url(#paint2_radial_25:217)"
                     ></circle>
                     <circle
                        cx="325.486"
                        cy="302.87"
                        r="180"
                        transform="rotate(-37.6852 325.486 302.87)"
                        fill="url(#paint3_linear_25:217)"
                     ></circle>
                     <circle
                        opacity="0.8"
                        cx="184.521"
                        cy="315.521"
                        r="132.862"
                        transform="rotate(114.874 184.521 315.521)"
                        stroke="url(#paint4_linear_25:217)"
                     ></circle>
                     <circle
                        opacity="0.8"
                        cx="356"
                        cy="290"
                        r="179.5"
                        transform="rotate(-30 356 290)"
                        stroke="url(#paint5_linear_25:217)"
                     ></circle>
                     <circle
                        opacity="0.8"
                        cx="191.659"
                        cy="302.659"
                        r="133.362"
                        transform="rotate(133.319 191.659 302.659)"
                        fill="url(#paint6_linear_25:217)"
                     ></circle>
                     <defs>
                        <linearGradient
                           id="paint0_linear_25:217"
                           x1="-54.5003"
                           y1="-178"
                           x2="222"
                           y2="288"
                           gradientUnits="userSpaceOnUse"
                        >
                           <stop stopColor="#4A6CF7"></stop>
                           <stop offset="1" stopColor="#4A6CF7" stopOpacity="0"></stop>
                        </linearGradient>
                        <radialGradient
                           id="paint1_radial_25:217"
                           cx="0"
                           cy="0"
                           r="1"
                           gradientUnits="userSpaceOnUse"
                           gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
                        >
                           <stop
                              offset="0.145833"
                              stopColor="#4A6CF7"
                              stopOpacity="0"
                           ></stop>
                           <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08"></stop>
                        </radialGradient>
                        <radialGradient
                           id="paint2_radial_25:217"
                           cx="0"
                           cy="0"
                           r="1"
                           gradientUnits="userSpaceOnUse"
                           gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
                        >
                           <stop
                              offset="0.145833"
                              stopColor="#4A6CF7"
                              stopOpacity="0"
                           ></stop>
                           <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08"></stop>
                        </radialGradient>
                        <linearGradient
                           id="paint3_linear_25:217"
                           x1="226.775"
                           y1="-66.1548"
                           x2="292.157"
                           y2="351.421"
                           gradientUnits="userSpaceOnUse"
                        >
                           <stop stopColor="#4A6CF7"></stop>
                           <stop offset="1" stopColor="#4A6CF7" stopOpacity="0"></stop>
                        </linearGradient>
                        <linearGradient
                           id="paint4_linear_25:217"
                           x1="184.521"
                           y1="182.159"
                           x2="184.521"
                           y2="448.882"
                           gradientUnits="userSpaceOnUse"
                        >
                           <stop stopColor="#4A6CF7"></stop>
                           <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                        </linearGradient>
                        <linearGradient
                           id="paint5_linear_25:217"
                           x1="356"
                           y1="110"
                           x2="356"
                           y2="470"
                           gradientUnits="userSpaceOnUse"
                        >
                           <stop stopColor="#4A6CF7"></stop>
                           <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                        </linearGradient>
                        <linearGradient
                           id="paint6_linear_25:217"
                           x1="118.524"
                           y1="29.2497"
                           x2="166.965"
                           y2="338.63"
                           gradientUnits="userSpaceOnUse"
                        >
                           <stop stopColor="#4A6CF7"></stop>
                           <stop offset="1" stopColor="#4A6CF7" stopOpacity="0"></stop>
                        </linearGradient>
                     </defs>
                  </svg>
               </div>

               <div className="z-5 absolute left-0 bottom-0">
                  <svg
                     width="300"
                     height="201"
                     viewBox="0 0 364 201"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
                        stroke="url(#paint0_linear_25:218)"
                     ></path>
                     <path
                        d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
                        stroke="url(#paint1_linear_25:218)"
                     ></path>
                     <path
                        d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
                        stroke="url(#paint2_linear_25:218)"
                     ></path>
                     <path
                        d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
                        stroke="url(#paint3_linear_25:218)"
                     ></path>
                     <circle
                        opacity="0.8"
                        cx="214.505"
                        cy="60.5054"
                        r="49.7205"
                        transform="rotate(-13.421 214.505 60.5054)"
                        stroke="url(#paint4_linear_25:218)"
                     ></circle>
                     <circle
                        cx="220"
                        cy="63"
                        r="43"
                        fill="url(#paint5_radial_25:218)"
                     ></circle>
                     <defs>
                        <linearGradient
                           id="paint0_linear_25:218"
                           x1="184.389"
                           y1="69.2405"
                           x2="184.389"
                           y2="212.24"
                           gradientUnits="userSpaceOnUse"
                        >
                           <stop stopColor="#4A6CF7" stopOpacity="0"></stop>
                           <stop offset="1" stopColor="#4A6CF7"></stop>
                        </linearGradient>
                        <linearGradient
                           id="paint1_linear_25:218"
                           x1="156.389"
                           y1="69.2405"
                           x2="156.389"
                           y2="212.24"
                           gradientUnits="userSpaceOnUse"
                        >
                           <stop stopColor="#4A6CF7" stopOpacity="0"></stop>
                           <stop offset="1" stopColor="#4A6CF7"></stop>
                        </linearGradient>
                        <linearGradient
                           id="paint2_linear_25:218"
                           x1="125.389"
                           y1="69.2405"
                           x2="125.389"
                           y2="212.24"
                           gradientUnits="userSpaceOnUse"
                        >
                           <stop stopColor="#4A6CF7" stopOpacity="0"></stop>
                           <stop offset="1" stopColor="#4A6CF7"></stop>
                        </linearGradient>
                        <linearGradient
                           id="paint3_linear_25:218"
                           x1="93.8507"
                           y1="67.2674"
                           x2="89.9278"
                           y2="210.214"
                           gradientUnits="userSpaceOnUse"
                        >
                           <stop stopColor="#4A6CF7" stopOpacity="0"></stop>
                           <stop offset="1" stopColor="#4A6CF7"></stop>
                        </linearGradient>
                        <linearGradient
                           id="paint4_linear_25:218"
                           x1="214.505"
                           y1="10.2849"
                           x2="212.684"
                           y2="99.5816"
                           gradientUnits="userSpaceOnUse"
                        >
                           <stop stopColor="#4A6CF7"></stop>
                           <stop offset="1" stopColor="#4A6CF7" stopOpacity="0"></stop>
                        </linearGradient>
                        <radialGradient
                           id="paint5_radial_25:218"
                           cx="0"
                           cy="0"
                           r="1"
                           gradientUnits="userSpaceOnUse"
                           gradientTransform="translate(220 63) rotate(90) scale(43)"
                        >
                           <stop offset="0.145833" stopColor="white" stopOpacity="0"></stop>
                           <stop offset="1" stopColor="white" stopOpacity="0.08"></stop>
                        </radialGradient>
                     </defs>
                  </svg>
               </div>

               <div className="z-5 absolute right-0 bottom-0">
                  <svg
                     width="300"
                     height="201"
                     viewBox="0 0 364 201"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
                        stroke="url(#paint0_linear_25:218)"
                     ></path>
                     <path
                        d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
                        stroke="url(#paint1_linear_25:218)"
                     ></path>
                     <path
                        d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
                        stroke="url(#paint2_linear_25:218)"
                     ></path>
                     <path
                        d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
                        stroke="url(#paint3_linear_25:218)"
                     ></path>
                     <circle
                        opacity="0.8"
                        cx="214.505"
                        cy="60.5054"
                        r="49.7205"
                        transform="rotate(-13.421 214.505 60.5054)"
                        stroke="url(#paint4_linear_25:218)"
                     ></circle>
                     <circle
                        cx="220"
                        cy="63"
                        r="43"
                        fill="url(#paint5_radial_25:218)"
                     ></circle>
                     <defs>
                        <linearGradient
                           id="paint0_linear_25:218"
                           x1="184.389"
                           y1="69.2405"
                           x2="184.389"
                           y2="212.24"
                           gradientUnits="userSpaceOnUse"
                        >
                           <stop stopColor="#4A6CF7" stopOpacity="0"></stop>
                           <stop offset="1" stopColor="#4A6CF7"></stop>
                        </linearGradient>
                        <linearGradient
                           id="paint1_linear_25:218"
                           x1="156.389"
                           y1="69.2405"
                           x2="156.389"
                           y2="212.24"
                           gradientUnits="userSpaceOnUse"
                        >
                           <stop stopColor="#4A6CF7" stopOpacity="0"></stop>
                           <stop offset="1" stopColor="#4A6CF7"></stop>
                        </linearGradient>
                        <linearGradient
                           id="paint2_linear_25:218"
                           x1="125.389"
                           y1="69.2405"
                           x2="125.389"
                           y2="212.24"
                           gradientUnits="userSpaceOnUse"
                        >
                           <stop stopColor="#4A6CF7" stopOpacity="0"></stop>
                           <stop offset="1" stopColor="#4A6CF7"></stop>
                        </linearGradient>
                        <linearGradient
                           id="paint3_linear_25:218"
                           x1="93.8507"
                           y1="67.2674"
                           x2="89.9278"
                           y2="210.214"
                           gradientUnits="userSpaceOnUse"
                        >
                           <stop stopColor="#4A6CF7" stopOpacity="0"></stop>
                           <stop offset="1" stopColor="#4A6CF7"></stop>
                        </linearGradient>
                        <linearGradient
                           id="paint4_linear_25:218"
                           x1="214.505"
                           y1="10.2849"
                           x2="212.684"
                           y2="99.5816"
                           gradientUnits="userSpaceOnUse"
                        >
                           <stop stopColor="#4A6CF7"></stop>
                           <stop offset="1" stopColor="#4A6CF7" stopOpacity="0"></stop>
                        </linearGradient>
                        <radialGradient
                           id="paint5_radial_25:218"
                           cx="0"
                           cy="0"
                           r="1"
                           gradientUnits="userSpaceOnUse"
                           gradientTransform="translate(220 63) rotate(90) scale(43)"
                        >
                           <stop offset="0.145833" stopColor="white" stopOpacity="0"></stop>
                           <stop offset="1" stopColor="white" stopOpacity="0.08"></stop>
                        </radialGradient>
                     </defs>
                  </svg>
               </div>
            </div>
         </div>
      </section>
   );
}