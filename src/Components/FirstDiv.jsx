import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const FirstDiv = ({ a }) => {
  return (
    <div className="first">
      <div className="flex space-x-3">
        <img className="h-[60px] w-auto" src={a?.user?.avatar_url} alt="" />
        <div>@{a?.username}</div>
      </div>
      <div className="text-xs mt-5 text-[#949090]">{a?.user?.description}</div>
      <div className="mt-4 text-[#949090] text-sm">Follow On:</div>
      <div className="flex space-x-4 mt-1">
        <FaInstagram size={20} />
        <FaFacebookF size={20} />
        <FaTwitter size={20} />
      </div>

      <div className="mt-4 text-sm text-[#949090]">
        Source: <br />{" "}
        <Link className="text-white" to={a?.user?.website_url}>
          {a?.user?.website_url}
        </Link>
      </div>
    </div>
  );
};

export default FirstDiv;
