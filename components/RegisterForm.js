/** @format */

import Link from "next/link";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import useRegister from "../hooks/useRegister";
import { Input, MultiSelectButton, TextWithIcon, Button } from "../components";
import {
  ServiceIcon,
  EmailIcon,
  CompanyIcon,
  PhoneNumberIcon,
  HomeIcon,
  NameIcon,
} from "../icons";

const RegisterForm = () => {
  const {
    name,
    setName,
    company,
    setCompany,
    phone,
    setPhone,
    email,
    setEmail,
    postCode,
    setPostCode,
    payLater,
    setPayLater,
    payNow,
    setPayNow,
    onSubmit,
  } = useRegister();

  const schema = yup
    .object({
      name: yup.string().max(255).required(),
      company: yup.string().max(255).required(),
      phone: yup.string().required(),
      email: yup.string().min(5).max(255).email().required(),
      postCode: yup.string().max(30).required(),
    })
    .required();

  const {
    register,
    formState: { errors },

    handleSubmit,
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
    resolver: yupResolver(schema),
  });

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
    <form
      className="rounded-[30px] py-6 px-4 bg-white mt-4"
      onSubmit={handleSubmit(onSubmit)}>
      <h2 className="font-black">Join our network</h2>
      <p>Free to join, no monthly fees</p>

      <div className="flex flex-col gap-7 mt-4">
        {inputs.map(({ id, icon, labelText, placeholder, value, onChange }) => {
          return (
            <div key={id}>
              <Input
                register={register}
                required={true}
                key={id}
                id={id}
                icon={icon}
                labelText={labelText}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
              />
              {errors[id] && (
                <p data-testid={id} className="font-bold text-red-500 mt-1">
                  {errors[id].message}
                </p>
              )}
            </div>
          );
        })}
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
      <div className="flex items-center gap-3 mt-2 mb-3">
        <MultiSelectButton
          id="payLater"
          isSelected={payLater}
          onToggle={() => setPayLater((prevState) => !prevState)}>
          PayLater
        </MultiSelectButton>

        <MultiSelectButton
          id="payNow"
          isSelected={payNow}
          onToggle={() => setPayNow((prevState) => !prevState)}>
          PayNow
        </MultiSelectButton>
      </div>

      <Button id="submitBtn">Register</Button>
      <div className="text-center mt-4">
        <Link href="/">
          <a>
            Already registered?
            <span className="login-link"> Login</span>
          </a>
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
