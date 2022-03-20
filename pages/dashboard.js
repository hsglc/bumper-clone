/** @format */

import { useState, useEffect } from "react";

import { Input } from "../components";
import useUsers from "../hooks/useUsers";
import { CompanyIcon } from "../icons";
import Layout from "../layouts/Layout";

const Dashboard = () => {
  const [search, setSearch] = useState("");

  const { users, setUsers } = useUsers();

  const filterByCompany = () => {
    return users
      .filter((user) => {
        if (search === "") return user;
        else if (user.company.toLowerCase().includes(search.toLowerCase()))
          return user;
      })
      .map((user) => (
        <div key={user.name} className="dashboard-element flex flex-col gap-4">
          <h3 className="text-[21px] font-bold">{user.name}</h3>
          <div className="h-px w-full bg-[#CDD2DC]" />
          <div className="dashboard-element-items">
            <h4>Company</h4>
            <p className="font-normal">{user.company}</p>
          </div>
          <div className="h-px w-full bg-[#CDD2DC]" />
          <div className="dashboard-element-items">
            <h4>Mobile phone number</h4>
            <p className="font-normal">{user.phone}</p>
          </div>
          <div className="h-px w-full bg-[#CDD2DC]" />
          <div className="dashboard-element-items">
            <h4>Email address</h4>
            <p className="font-normal">{user.email}</p>
          </div>
          <div className="h-px w-full bg-[#CDD2DC]" />
          <div className="dashboard-element-items">
            <h4>Postcode</h4>
            <p className="font-normal">{user.postCode}</p>
          </div>
        </div>
      ));
  };

  useEffect(() => {
    filterByCompany();
  }, [search]);

  
  return (
    <Layout>
      <section className="bg-[#5A698C] p-4 h-full pb-36">
        <div className="lg:w-3/5 lg:m-auto flex flex-col gap-10">
          <h1 className="text-[38px] font-bold text-white">
            Interested Dealerships
          </h1>
          <div className="dashboard-element">
            <Input
              id="search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              placeholder="Start typing name, company, phone or email for search"
              icon={<CompanyIcon />}
              labelText="Search Company"
            />
          </div>
          {filterByCompany()}
          <p className="text-white text-center font-bold text-xl cursor-pointer hover:text-blue-500 transition-colors">
            Load More...
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;
