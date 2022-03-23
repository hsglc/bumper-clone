/** @format */

import { useRouter } from "next/router";

import Layout from "../layouts/Layout";
import { LeftArrowIcon } from "../icons";
import { RegisterForm } from "../components";

const Register = () => {
  const { replace } = useRouter();

  return (
    <Layout>
      <section className="bg-[#5A698C] lg:pb-20">
        <div className="layout-container flex flex-col gap-4 lg:w-3/5 lg:m-auto">
          <div
            onClick={() => replace("/")}
            className="hover:bg-gray-400 p-2 w-min rounded-md transition-all duration-300 cursor-pointer">
            <LeftArrowIcon />
          </div>
          <h1 className="font-black text-[28px] text-white">
            Join our network
          </h1>
          <p className="text-white">
            Offer <span className="font-black">PayLater</span> to split
            servicing and repair work into monthly instalments - interest-free.
            Use <span className="font-black">PayNow</span> to take secure
            payments online.
          </p>
          <RegisterForm />
        </div>
      </section>
    </Layout>
  );
};

export default Register;
