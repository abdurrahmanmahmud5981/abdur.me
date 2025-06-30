// import { motion } from "framer-motion";
// import { Separator } from "@/components/ui/separator";
import { FC } from "react";

const Footer: FC = () => {
    return (
        <footer className="bg-black text-white px-8 pt-16 pb-8 rounded-t-3xl md:rounded-[48px] my-10 container mx-auto">

            <div className="grid grid-cols-1  lg:grid-cols-7 gap-4 mb-8">
                <div className="lg:col-span-3 ">
                    <h3 className="text-4xl font-extrabold bg-lime-300 bg-clip-text text-transparent leading-loose">
                        ABDUR.ME
                    </h3>
                </div>

                {/*  */}
                <div className="lg:col-span-4  px-2">
                    <h4 className="text-6xl font-bold leading-[64px] text-start  ">
                        As you can
                    </h4>


                    <div className="">


                        <div className="mt-10 text-start flex flex-col md:flex-row  justify-between ml-2">
                            <div>
                                <h3 className="text-muted-foreground font-semibold mb-2">Say hello</h3>
                                <ul className="space-y-1">
                                    <li>HELLO@DEVLOP.ME.COM</li>
                                    <li>MAHBUBUL@ME.COM</li>
                                </ul>

                                <h3 className="text-muted-foreground  font-semibold mt-6 mb-2">Call</h3>
                                <ul className="space-y-1">
                                    <li>+784549 4981 00</li>
                                    <li>+8845 0100 211</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-muted-foreground  font-semibold mb-2">Menu</h3>
                                <ul className="space-y-1">
                                    {['HOME', 'ABOUT', 'PORTFOLIO', 'BLOG'].map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-muted-foreground  font-semibold mb-2">Social</h3>
                                <ul className="space-y-1">
                                    {['TWITTER', 'INSTAGRAM', 'FACEBOOK', 'BEHANCE', 'DRIBBBLE'].map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="max-w-7xl mx-auto text-center mb-12 flex  items-start justify-between border  "
            >
                <h3 className="text-4xl font-extrabold bg-lime-300 bg-clip-text text-transparent leading-loose">
                    ABDUR.ME
                </h3>
                <div className="flex-1">
                    <h4 className="text-6xl font-bold leading-[64px] text-start ml-20 ">
                        As you can
                    </h4>

                    <div className="mt-10 text-start flex justify-around ml-2">
                        <div>
                            <h3 className="text-muted-foreground font-semibold mb-2">Say hello</h3>
                            <ul className="space-y-1">
                                <li>HELLO@DEVLOP.ME.COM</li>
                                <li>MAHBUBUL@ME.COM</li>
                            </ul>

                            <h3 className="text-muted-foreground  font-semibold mt-6 mb-2">Call</h3>
                            <ul className="space-y-1">
                                <li>+784549 4981 00</li>
                                <li>+8845 0100 211</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-muted-foreground  font-semibold mb-2">Menu</h3>
                            <ul className="space-y-1">
                                {['HOME', 'ABOUT', 'PORTFOLIO', 'BLOG'].map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-muted-foreground  font-semibold mb-2">Social</h3>
                            <ul className="space-y-1">
                                {['TWITTER', 'INSTAGRAM', 'FACEBOOK', 'BEHANCE', 'DRIBBBLE'].map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </motion.div> */}

            {/* <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm md:text-base text-gray-300">
        <div>
          <h3 className="text-white font-semibold mb-2">Say hello</h3>
          <ul className="space-y-1">
            <li>HELLO@DEVLOP.ME.COM</li>
            <li>MAHBUBUL@ME.COM</li>
          </ul>

          <h3 className="text-white font-semibold mt-6 mb-2">Call</h3>
          <ul className="space-y-1">
            <li>+784549 4981 00</li>
            <li>+8845 0100 211</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-2">Menu</h3>
          <ul className="space-y-1">
            {['HOME', 'ABOUT', 'PORTFOLIO', 'BLOG'].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-2">Social</h3>
          <ul className="space-y-1">
            {['TWITTER', 'INSTAGRAM', 'FACEBOOK', 'BEHANCE', 'DRIBBBLE'].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div> */}

            {/* <Separator className="my-8 bg-gray-700" /> */}

            <div className=" flex flex-col md:flex-row items-center justify-between text-xs text-gray-400">
                <span className="font-bold text-white">BESNIK</span>
                <p className="mt-2 md:mt-0">
                    © abdur.me {new Date().getFullYear()}.
                </p>
                <p className="mt-2 md:mt-0">PRIVACY - TERMS</p>
            </div>
        </footer>
    );
};

export default Footer;
