import Iframe from "react-iframe"
import workUa from "./../../work_ua.png";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
    return (
        <>
            <div className="flex flex-col items-center w-full border-black bg-slate-600 bottom-0">
                <div className="grid auto-cols-auto gap-4 justify-center md:grid-cols-2 lg:grid-cols-4 w-screen max-w-screen-xl mx-5 px-10 py-5 items-start">
                    <div className="flex flex-col gap-y-4 h-full">
                        <div className="font-bold text-xl">
                            <span className="text-white border-b-2 border-white">
                                Контакти:
                            </span>
                        </div>
                        <div className="flex flex-col gap-y-4">
                            <div className="flex flex-col gap-y-4 md:gap-4 text-center text-lg text-white font-semibold">
                                <a href="tel:0562337700" className="flex gap-2 hover:text-white hover:scale-110 duration-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                                        <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
                                    </svg>
                                    <span className="text-base">(0562)33-77-00</span>
                                </a>
                                <a href="tel:0933263219" className="flex gap-2 hover:text-white hover:scale-110 duration-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                                        <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
                                    </svg>
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
                                <span className="text-lg text-white font-semibold">місто Дніпро,</span>
                                <span className="text-lg text-white font-semibold">пр. Александра Поля 11</span>
                                <div className="font-bold text-xl">
                                    <span className="text-white border-b-2 border-white">
                                        Часи роботи:
                                    </span>
                                </div>
                                <span className="text-lg text-white font-semibold">Понеділок–П&apos;ятниця:</span>
                                <span className="text-lg text-white font-semibold">10:00–16:00</span>
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
                            // referrerpolicy="no-referrer-when-downgrade"
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
                </div >
            </div >
            {/* <div className="!fixed bottom-5 right-5 border border-slate-400 rounded-lg bg-slate-300 w-20 h-20 flex items-center justify-center hover:scale-125 duration-500 opacity-20 hover:opacity-60 cursor-pointer">
                <Link href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fill-rule="evenodd" d="M11.47 4.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 6.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5zm.53 7.59l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 12.31z" clip-rule="evenodd" />
                    </svg>
                </Link>
            </div> */}
        </>
    )
}