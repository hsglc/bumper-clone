/** @format */

import { useState } from "react";
import { useRouter } from "next/router";

import useUsers from "./useUsers";

const useRegister = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [postCode, setPostCode] = useState("");
  const [payLater, setPayLater] = useState(false);
  const [payNow, setPayNow] = useState(false);
  const { users, setUsers } = useUsers();

  const router = useRouter();

  const onSubmit = async (data) => {
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
        router.replace("/dashboard");
      }
    } catch (error) {}
  };

  return {
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
    users,
    
    onSubmit,
  };
};

export default useRegister;
