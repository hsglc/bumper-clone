/** @format */

import Image from "next/image";
import Link from "next/link";

import { StarIcon } from "../icons";
import {
  asSimpleAsSections,
  benefitsSections,
  payNowSections,
} from "../constants/pages/index";
import { Button } from "../components";
import Layout from "../layouts/Layout";

export default function Home() {
  return (
    <Layout>
      <section className="layout-container bg-[#5A698C] pt-11 lg:pb-10">
        <div className="flex items-center gap-3 mb-7">
          <span className="font-black text-white">Excellent</span>
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="w-5 h-5 flex justify-center items-center bg-[#00B67A]">
                <StarIcon />
              </div>
            ))}
          </div>
          <div className="inline-flex justify-end  gap-1">
            <StarIcon fill="#00B67A" />
            <span className="text-white font-black text-xs">Trustpilot</span>
          </div>
        </div>
        <h3 className="text-[30px] lg:text-[77px] leading-10 lg:leading-[80px] tracking-tighter text-white font-black">
          BECOME A BUMPER APPROVED DEPENDABLE DEALERSHIP
        </h3>
        <h4 className="text-white mb-6">
          Join our network of 3,000+ garages and dealerships who already offer
          Bumper to their customers.
        </h4>
        <div className="w-3/5 lg:w-1/5 mb-3">
          <Button route="/register">Register your interest</Button>
        </div>
        <p>
          Already registered?{" "}
          <Link href="/">
            <a className="login-link">Login</a>
          </Link>
        </p>
      </section>
      <section className="layout-container bg-white lg:relative">
        <div className="flex mt-10 mb-5">
          <div>
            <h5 className="font-black mb-2">Pay Later</h5>
            <p className="w-10/12">
              Allow your customers to split their repair or service bill over
              monthly repayments.
            </p>
            <p className="text-[28px] lg:text-[58px] lg:leading-[60px] lg:w-3/5 lg:mt-5 text-[#FF733C] leading-10 tracking-tighter font-black">
              NO RISK FOR YOU, NO WORRY FOR DRIVERS
            </p>
          </div>
          <img
            src="/phone.png"
            alt="phone"
            className="w-[100px] h-[200px] lg:w-[300px] lg:h-[420px] lg:absolute object-contain lg:right-40 lg:-top-6"
          />
        </div>
        <h5 className="font-black mb-3">It’s as simple as:</h5>
        <div className="relative mb-[74px]">
          <div className="z-0 absolute h-[70%] w-px bg-black top-2 left-[9px] " />
          {asSimpleAsSections.map(({ id, title, desc }) => (
            <div key={id} className="flex gap-1 mb-6">
              <div className="w-5 h-5 font-black bg-[#FF733B] rounded-full flex items-center justify-center p-2 mt-0.5 z-50">
                {id}
              </div>
              <div className="flex flex-col">
                <h6 className="font-black">{title}</h6>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-3/5 lg:w-1/5 mb-3">
          <Button route="/register">Register your interest</Button>
        </div>
      </section>
      <section className="layout-container bg-hero-bg">
        <h4 className=" text-[25px] lg:text-[33px] font-semibold leading-[28px] lg:leading-[36px] -tracking-wider text-white mt-6 mb-4">
          BENEFITS OUR OTHER PARTNERS HAVE NOTICED OFFERING PAY LATER
        </h4>
        <div className="flex flex-col lg:flex-row">
          {benefitsSections.map(({ id, percent, content }) => (
            <div key={id} className="mb-5">
              <div className="flex items-center text-[#32BE50]">
                <h6 className=" text-[44px]  font-black tracking-tighter">
                  {percent}
                </h6>
                <p className="text-2xl font-black mt-1.5">%</p>
              </div>
              <p className="text-white font-black lg:w-11/12">{content}</p>
            </div>
          ))}
        </div>
        <p className="text-white text-xs mb-4">
          {" "}
          <span className="font-black">Source:</span> Survey of 2,750 Bumper
          customers in Feb 2021
        </p>
      </section>
      <section className="layout-container bg-white">
        <h4 className="mt-10 font-black mb-2">Pay Now</h4>
        <p>
          Our contactless payment solution that allows you to take payments
          online from your customers.
        </p>
        <h5 className="text-[#FF733C] mt-2 mb-6 font-black text-[33px] lg:text-[58px] tracking-tighter leading-10 lg:leading-[60px]">
          ACCEPT PAYMENTS ANYWHERE, ANYTIME
        </h5>
        <p className="font-black mb-5">It’s as simple as:</p>
        <div className="mb-10">
          {payNowSections.map(({ id, icon, title, desc }) => (
            <div key={id} className="flex gap-2.5 mb-4">
              <span>{icon}</span>
              <div className="flex flex-col gap-0.5">
                <h6 className="font-black">{title}</h6>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-3/5 lg:w-1/5 mb-4 ">
          <Button route="/register">Register your interest</Button>
        </div>
      </section>
      <section className="relative bg-[#CDD2DC] h-[520px] lg:h-[700px]">
        <Image
          alt="person"
          src="/person.png"
          width="100%"
          height="40%"
          layout="responsive"
          objectFit="cover"
        />

        <div className="absolute top-28 lg:top-1/3 w-11/12 lg:w-[390px] lg:absolute lg:right-8 rounded-br-2xl rounded-tr-2xl bg-white z-50 p-4">
          <p className="font-black">
            “Est sem nisl morbi praesent tempor augue in venenatis dolor massa
            viverra parturient at ligula.
            <br />
            <span className="font-normal">
              Ad magnis in justo lobortis vestibulum a adipiscing nisl magnis
              sociosqu faucibus parturient aenean a metus sem quam adipiscing ut
              eget ullamcorper pulvinar pharetra cursus consectetur ante.
              Senectus primis scelerisque a vestibulum vestibulum consectetur
              inceptos pharetra. Suspendisse ultrices porta.”
            </span>
          </p>
          <div className="mt-4">
            <div className="flex gap-3">
              <div>
                <h6 className="font-black">Eddie Hawthorne</h6>
                <p>Managing Director</p>
              </div>
              <div className="h-12 w-px bg-black" />

              <Image src="/name.png" alt="personname" width={86} height={36} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
