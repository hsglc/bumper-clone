/** @format */

import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";

import Layout from "../layouts/Layout";
import {
  CompanyIcon,
  EmailIcon,
  HomeIcon,
  LeftArrowIcon,
  NameIcon,
  PhoneNumberIcon,
  ServiceIcon,
} from "../icons";
import { Button, Input, MultiSelectButton, TextWithIcon } from "../components";
import useUsers from "../hooks/useUsers";

const alphaNumericStringRegEx = /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/;
const checkEmailValidity =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const Register = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [postCode, setPostCode] = useState("");
  const [payLater, setPayLater] = useState(false);
  const [payNow, setPayNow] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const { users, setUsers } = useUsers();

  console.log(showErrorMessage);

  const { replace } = useRouter();

  const registerHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://proto.bumper.co.uk/core/dealership/reg/sandbox",
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({
            name,
            company,
            mobile_phone: phone,
            email_address: email,
            postcode: postCode,
            pay_later: payLater.toString(),
            pay_now: payNow.toString(),
          }),
        }
      );
      const { message } = await response.json();
      if (message === "SUCCESS") {
        setUsers([...users, { name, company, phone, email, postCode }]);
        replace("/dashboard");
      } else {
        setShowErrorMessage(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const inputs = [
    {
      id: "name",
      icon: <NameIcon />,
      labelText: "Name",
      placeholder: "Enter your name",
      value: name,
      onChange: (e) => setName(e.target.value),
    },
    {
      id: "company",
      icon: <CompanyIcon />,
      labelText: "Company",
      placeholder: "Enter your company",
      value: company,
      onChange: (e) => setCompany(e.target.value),
    },
    {
      id: "phone",
      icon: <PhoneNumberIcon />,
      labelText: "Mobile phone number",
      placeholder: "Enter your mobile phone number",
      value: phone,
      onChange: (e) => setPhone(e.target.value),
    },
    {
      id: "email",
      icon: <EmailIcon />,
      labelText: "Email address",
      placeholder: "Enter your email address",
      value: email,
      onChange: (e) => setEmail(e.target.value),
    },
    {
      id: "postCode",
      icon: <HomeIcon />,
      labelText: "Post code",
      placeholder: "Enter your post code",
      value: postCode,
      onChange: (e) => setPostCode(e.target.value),
    },
  ];

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
          <form
            className="rounded-[30px] py-6 px-4 bg-white mt-4"
            onSubmit={registerHandler}>
            <h2 className="font-black">Join our network</h2>
            <p>Free to join, no monthly fees</p>
            <p
              className={` ${
                showErrorMessage ? "visible text-red-500" : "invisible"
              }`}>
              Please fill all required fields!
            </p>
            <div className="flex flex-col gap-7 mt-4">
              {inputs.map(
                ({ id, icon, labelText, placeholder, value, onChange }) => (
                  <Input
                    key={id}
                    id={id}
                    icon={icon}
                    labelText={labelText}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                  />
                )
              )}
              <div>
                <TextWithIcon
                  text="What services are you interested in?"
                  icon={<ServiceIcon />}
                />
                <p className="text-[#737373]">
                  Please select the services you’re interested in offering your
                  customers
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-2 mb-8">
              <MultiSelectButton
                isSelected={payLater}
                onToggle={() => setPayLater((prevState) => !prevState)}>
                PayLater
              </MultiSelectButton>
              <MultiSelectButton
                isSelected={payNow}
                onToggle={() => setPayNow((prevState) => !prevState)}>
                PayNow
              </MultiSelectButton>
            </div>
            <Button>Register</Button>
            <div className="text-center mt-4">
              <Link href="/">
                <a>
                  Already registered?
                  <span className="login-link"> Login</span>
                </a>
              </Link>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Register;
