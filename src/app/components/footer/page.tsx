import Iframe from "react-iframe"
import workUa from "./../../work_ua.png";
import Image from "next/image";

export const Footer = () => {
    return (
        <div className="flex flex-col items-center w-full border-black bg-slate-600">
            <div className="flex flex-col gap-y-4 md:flex-row md:justify-between w-screen max-w-screen-xl h-1/6 mx-5 px-10 py-5 text-black border border-black items-start">
                <div className="flex flex-col gap-y-4 h-full">
                    <div className="font-bold text-xl">
                        <span className="text-white border-b-2 border-white">
                            Контакти:
                        </span>
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <span className="font-bold text-white">Офіс: </span>
                        <div className="flex flex-col gap-y-4 md:gap-4 text-center items-center text-lg text-white font-semibold">
                            <a href="tel:0562337700" className="flex gap-2 hover:text-white hover:scale-110 duration-500">
                                <span className="text-base">(0562)33-77-00</span>
                            </a>
                            <a href="tel:0933263219" className="flex gap-2 hover:text-white hover:scale-110 duration-500">
                                <span className="text-base">(093)326-32-19</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-4">
                    <span className="font-bold text-xl">
                        <div className="flex flex-col gap-y-4">
                            <div className="font-bold text-xl">
                                <span className="text-white border-b-2 border-white">
                                    Адреса:
                                </span>
                            </div>
                            <span className="text-lg text-white font-semibold">Дніпро, пр. Александра Поля 11,</span>
                            <div className="font-bold text-xl">
                                <span className="text-white border-b-2 border-white">
                                    Часи роботи:
                                </span>
                            </div>
                            <span className="text-lg text-white font-semibold">Понеділок–П'ятниця: 10:00–16:00</span>
                        </div>
                    </span>
                    <div className="flex flex-col gap-y-4">
                        <div>

                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-4">
                    <span className="font-bold text-xl">
                        <span className="text-white border-b-2 border-white">
                            Мапа:
                        </span>
                    </span>
                    <Iframe
                        url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2645.6374317689438!2d35.02581947679257!3d48.46348572841552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe2e2e94f2603%3A0xb8e5e11baa629244!2z0L_RgNC-0YHQvy4g0JDQu9C10LrRgdCw0L3QtNGA0LAg0J_QvtC70Y8sIDExLCDQlNC90LXQv9GALCDQlNC90LXQv9GA0L7Qv9C10YLRgNC-0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgNDkwMDA!5e0!3m2!1sru!2sua!4v1699551182988!5m2!1sru!2sua"
                        width="200"
                        height="200"
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></Iframe>
                </div>
                <div className="flex flex-col gap-y-4">
                    <span className="font-bold text-xl">
                        <span className="text-white border-b-2 border-white">
                            Партнери:
                        </span>
                    </span>
                    <a href="http://work.ua" className="hover:scale-110 duration-500">
                        <Image src={workUa} width={200} height={100} alt="Work Ua" />
                    </a>
                </div>

                <div className="border border-slate-400 rounded-lg bg-slate-300 w-10 h-10 flex items-center justify-center hover:scale-125 duration-500 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fill-rule="evenodd" d="M11.47 4.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 6.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5zm.53 7.59l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 12.31z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div >
        </div >
    )
}