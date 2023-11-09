import Image from "next/image"
import logo from "./../../logo.png";

export const Header = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-col gap-y-4 md:flex-row md:justify-between w-screen max-w-screen-xl mx-5 px-10 py-5 text-black border-b-2 border-solid border-blue-400 items-center">
                <div className="flex flex-col justify-center gap-y-4 text-center">
                    <Image src={logo} width={200} height={100} alt="komkor" className="hover:scale-110 duration-500 cursor-pointer" />
                    <span className="font-bold text-2xl">Зручний сервіс</span>
                </div>
                <div className="flex flex-col md:flex-row gap-y-4 md:gap-4 text-center items-center">
                    <a href="tel:0562337700" className="flex gap-2 hover:text-gray-600 hover:scale-110 duration-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="blackr" className="w-6 h-6">
                            <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
                        </svg>
                        <span className="text-black font-bold text-xl">(0562)33-77-00</span>
                    </a>
                    <a href="tel:0933263219" className="flex gap-2 hover:text-gray-600 hover:scale-110 duration-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="blackr" className="w-6 h-6">
                            <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
                        </svg>
                        <span className="text-black font-bold text-xl">(093)326-32-19</span>
                    </a>
                </div>
            </div>
            <nav className="flex flex-col gap-y-4 items-center md:flex-row md:justify-around text-2xl font-bold p-4 w-screen max-w-screen-xl">
                <a href="#" className="md:hover:scale-110 duration-500 cursor-pointer">Послуги</a>
                <a href="#" className="md:hover:scale-110 duration-500 cursor-pointer">Чому ми?</a>
                <a href="#" className="md:hover:scale-110 duration-500 cursor-pointer">Ціни</a>
                <a href="#" className="md:hover:scale-110 duration-500 cursor-pointer">Зворотній зв'язок</a>
            </nav>
        </div>
    )
}
