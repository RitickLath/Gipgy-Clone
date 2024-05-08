import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { GifState } from "../context/Context";
import { BsThreeDots } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdFavorite } from "react-icons/md";
import { ImEmbed2 } from "react-icons/im";
import { FaShare } from "react-icons/fa";

const SingleGIFPage = () => {
  const { SingleGIF } = useParams();
  const { gf } = GifState();
  const [a, setA] = useState([]);
  const [render, setRender] = useState(false);

  useEffect(() => {
    const gif = async () => {
      try {
        const result = await gf.gif(SingleGIF);

        setA(result?.data);
        console.log(result?.data);
      } catch (error) {
        console.error(`gif`, error);
      }
    };
    gif();
  }, []);

  return (
    <div>
      {/* First Div */}
      <div className="hidden sm:flex lg:px-4 justify-around h-screen mt-10">
        {/* First Div */}
        <div className="first">
          <div className="flex space-x-3">
            <img className="h-[60px] w-auto" src={a?.user?.avatar_url} alt="" />
            <div>@{a?.username}</div>
          </div>
          <div className="text-xs mt-5 text-[#949090]">
            {a?.user?.description}
          </div>
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
        {/* Seconds Div */}
        <div className="second relative">
          <div className=" flex space-x-3 mb-2">
            <div className="text-sm text-[#949090]">{a?.title}</div>
            <BsThreeDots
              onClick={() => {
                setRender(!render);
              }}
              className="mt-1"
              size={20}
            />
          </div>
          {render && (
            <div className="absolute grid grid-cols-2 gap-x-1 lg:gap-x-4 top-10 z-10 text-xs bg-black opacity-70 p-4">
              <div>Uploaded: {a?.import_datetime}</div>
              <div>Rating: {a?.rating}</div>
              <div>Source: 476x 274 px</div>
              <div>Size: 1.7MB</div>
              <div>Frames: 39</div>
            </div>
          )}

          <img
            className="relative group w-[200px] lg:w-[450px] "
            src={a?.images?.fixed_width.webp}
            alt=""
          />
        </div>
        {/* Third Div */}
        <div className="hidden md:block third pl-4">
          <div className="mt-12">
            <h1 className="flex space-x-4 text-white font-bold mb-4 mt-1">
              <MdFavorite className="mt-1" size={20} />
              <span>Favourite</span>
            </h1>
            <h1 className="flex space-x-4 text-white font-bold mb-4 mt-1">
              <FaShare className="mt-1" size={20} />
              <span>Share</span>
            </h1>
            <h1 className="flex space-x-4 text-white font-bold mb-4 mt-1">
              <ImEmbed2 className="mt-1" size={20} />
              <span>Embed</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="sm:hidden justify-around h-screen mt-10">
        {/* First Div */}
        <div className="second relative">
          <div className=" flex space-x-3 mb-2">
            <div className="text-sm text-[#949090]">{a?.title}</div>
            <BsThreeDots
              onClick={() => {
                setRender(!render);
              }}
              className="mt-1"
              size={20}
            />
          </div>
          {render && (
            <div className="absolute grid grid-cols-2 gap-x-1 lg:gap-x-4 top-10 z-10 text-xs bg-black opacity-70 p-4">
              <div>Uploaded: {a?.import_datetime}</div>
              <div>Rating: {a?.rating}</div>
              <div>Source: 476x 274 px</div>
              <div>Size: 1.7MB</div>
              <div>Frames: 39</div>
            </div>
          )}

          <img
            className="relative group w-[200px] lg:w-[450px] "
            src={a?.images?.fixed_width.webp}
            alt=""
          />
        </div>
        {/* 2nd Div */}
        <div className="first mt-10">
          <div className="flex space-x-3">
            <img className="h-[60px] w-auto" src={a?.user?.avatar_url} alt="" />
            <div>@{a?.username}</div>
          </div>
          <div className="text-xs mt-5 text-[#949090]">
            {a?.user?.description}
          </div>
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
        {/* Third Div */}
        <div className="md:block third">
          <div className="mt-8">
            <h1 className="flex space-x-4 text-white font-bold mb-4 mt-1">
              <MdFavorite className="mt-1" size={20} />
              <span>Favourite</span>
            </h1>
            <h1 className="flex space-x-4 text-white font-bold mb-4 mt-1">
              <FaShare className="mt-1" size={20} />
              <span>Share</span>
            </h1>
            <h1 className="flex space-x-4 text-white font-bold mb-4 mt-1">
              <ImEmbed2 className="mt-1" size={20} />
              <span>Embed</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleGIFPage;
