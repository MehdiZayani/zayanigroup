"use client"
import Image from "next/image";
import Navbar from "./components/nav";
import cuisine from "@/app/images/photo cuisine.jpg"
import luccidesign from "@/app/images/lucci design.jpg"
import luccialu from "@/app/images/lucci alu.jpg"
import luccistone from "@/app/images/lucci stone.jpg"
import kitchendiscount from "@/app/images/kitchen discount.jpg"
import maison from "@/app/images/maison.jpg"
import AOS from 'aos'
import 'aos/dist/aos.css'
import react,{useEffect} from 'react'
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
    <section className="relative ">
      <div className=" inset-0">
        <Image
          src={cuisine}
          alt="Background"
          fill
          objectfit="cover"
          quality={100}
        />
      </div>
      <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-gray-900/95 sm:to-gray-900/25"></div>
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
            Avec Zayani Group.
            <strong className="block font-extrabold text-rose-500"> Votre réve devient réalite . </strong>
          </h1>
          <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
            De la menuiserie rafinée a L&apos;art de l&apos;Aluminum jusqu&apos;a la transormation du marbre.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Link
              href="contact"
              className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Prendre rendez-vous
            </Link>
            <Link
              href="a-propos"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </div>
    </section>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"  data-aos="fade-left">
              <Image 
              quality={100}
                alt=""
                src={maison}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24"  data-aos="fade-right">
              <h2 className="text-3xl font-bold sm:text-4xl text-center">Votre partenaire dans la vie.</h2>

              <p className="mt-4 text-gray-600 text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
                eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
                quidem quam repellat.
              </p>
              <div className=" flex flex-col items-center ">
              <a
                  href="#"
                  className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 mx-auto">
          <div  className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
            <div  data-aos="fade-right" className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
              <h2 className="text-3xl font-bold sm:text-4xl">Trouvez la Filiale qui vous correspond</h2>

              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero aliquid sint distinctio
                iure ipsum cupiditate? Quis, odit assumenda? Deleniti quasi inventore, libero reiciendis
                minima aliquid tempora. Obcaecati, autem.
              </p>

              <Link
                href="filiales"
                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Voir les filiales
              </Link>
            </div>

            <div data-aos="fade-left" className="grid grid-cols-2 gap-4 sm:grid-cols-2" data-aos="fade-left">
              <Link
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                data-wpel-link="external" rel="external noopener noreferrer"
                href="https://www.luccidesign.tn"
                target="_blank"
              >
                  <Image src={luccidesign} alt="Lucci Design logo" width={80}/>


                <h2 className="mt-2 font-bold">Lucci Design</h2>

                <p className=" sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Agencement des commerces, fabrication cuisines, dressings, et meubles.

                </p>
              </Link>

              <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                data-wpel-link="external" rel="external noopener noreferrer"
                href="https://www.luccidesign.tn"
                target="_blank"
              >
                  <Image src={luccialu} alt="Lucci Alu logo" width={80}/>


                <h2 className="mt-2 font-bold">Lucci Alu</h2>

                <p className=" sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Lucci Alu est une société tunisienne spécialisée dans la menuiserie de l'aluminium.
                </p>
              </a>

              <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                data-wpel-link="external" rel="external noopener noreferrer"
                href="https://www.luccidesign.tn"
                target="_blank"
              >
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  <Image src={luccistone} alt="Lucci Stone logo" width={80}/>

                </span>

                <h2 className="mt-2 font-bold">Lucci Stone</h2>

                <p className=" sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Lucci Stone est une société tunisienne spécialisée dans la transformation du marbre.
                </p>
              </a>

              <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                data-wpel-link="external" rel="external noopener noreferrer"
                href="https://www.luccidesign.tn"
                target="_blank"
              >
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  <Image src={kitchendiscount} alt="kitchen discount logo" width={80}/>
                </span>

                <h2 className="mt-2 font-bold">Kitchen Discount</h2>

                <p className=" sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                KITCHEN Discount vous propose des créations au prix d'usine LOW COST, pour un rapport qualité-prix imbattable.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative z-10 lg:py-16">
              <div data-aos="fade-right" className="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>

            <div data-aos="fade-right" className="relative flex items-center bg-gray-100">
              <span
                className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
              ></span>

              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-2xl font-bold sm:text-3xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.
                </h2>

                <p className="mt-4 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est
                  esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam
                  architecto eius quis quibusdam fugiat dicta.
                </p>

                <a
                  href="#"
                  className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
