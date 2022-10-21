import ImagePostModal from '@/components/Posts/ImagePostModal';
import Image from 'next/image';
import { useState } from 'react';
import {
  AiOutlineHeart,
  AiOutlineShareAlt,
  AiTwotoneHeart,
} from 'react-icons/ai';
import { BiMessageRounded } from 'react-icons/bi';
import { IoHeartDislike } from 'react-icons/io5';
import { RiBookmarkFill, RiBookmarkLine } from 'react-icons/ri';

const ImagePost = () => {
  // TODO get likes and saves state from database with react query
  const [isLiked, setLiked] = useState(false);
  const [isSaved, setSaved] = useState(false);
  // TODO add sharing functionality
  const [isSharing, setSharing] = useState(false);
  const [isViewing, setIsViewing] = useState(false);

  const toggleLike = () => {
    setLiked(!isLiked);
  };

  const toggleSave = () => {
    setSaved(!isSaved);
  };

  const viewPost = () => {
    setIsViewing(!isViewing);
  };

  const sharePost = () => {
    setSharing(true);
  };

  return (
    <div className="card card-compact w-3/5 bg-base-100 shadow-2xl max-h-[75%] mt-4 flex flex-col h-max">
      <div className="flex space-x-4 ml-4 mt-4">
        <div className="avatar">
          <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <Image
              src="https://placeimg.com/192/192/people"
              alt="profile picture"
              layout="responsive"
              objectFit="contain"
              width="100%"
              height="100%"
            />
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <a
            rel="noopener noreferrer"
            href="#"
            className="text-sm font-semibold"
          >
            Leroy Jenkins
          </a>
          <span className="text-xs dark:text-gray-400">4 hours ago</span>
        </div>
      </div>
      <figure>
        <img
          className="w-4/5"
          src="https://placeimg.com/400/225/arch"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <div className="card-actions justify-between mt-4 flex items-center">
          <div className="flex items-center space-x-3">
            <button onClick={() => toggleLike()}>
              {isLiked ? (
                <AiTwotoneHeart size={30}></AiTwotoneHeart>
              ) : (
                <AiOutlineHeart size={30}></AiOutlineHeart>
              )}
            </button>
            <button onClick={() => viewPost()}>
              <BiMessageRounded size={30}></BiMessageRounded>
            </button>
            <button onClick={() => toggleSave()}>
              {isSaved ? (
                <RiBookmarkFill size={30}></RiBookmarkFill>
              ) : (
                <RiBookmarkLine size={30}></RiBookmarkLine>
              )}
            </button>
            {/* <button onClick={() => sharePost()}>
              <AiOutlineShareAlt size={30}></AiOutlineShareAlt>
            </button> */}
          </div>
          <label
            htmlFor="my-modal-4"
            className=" btn modal-button btn-primary btn-sm"
          >
            View Post
          </label>
          <input type="checkbox" id="my-modal-4" className="modal-toggle" />

          <div className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
              <label
                htmlFor="my-modal-4"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <ImagePostModal></ImagePostModal>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-0 ml-4 min-w-0">
        <br></br>
        <h2 className="card-title">Shoes!</h2>
        <p className="max-h-[15%] overflow-y-scroll text-ellipsis text-lg">
          If a dog chews shoes whose shoes does he choose?If a dog chews shoes
          whose shoes does he choose? If a dog chews shoes whose shoes does he
          choose? If a dog chews shoes whose shoes does he choose? If a dog
          chews shoes whose shoes does he choose? If a dog chews shoes whose
          shoes does he choose? If a dog chews shoes whose shoes does he choose?
          If a dog chews shoes whose shoes does he choose? If a dog chews shoes
          whose shoes does he choose?If a dog chews shoes whose shoes does he
          choose? If a dog chews shoes whose shoes does he choose?If a dog chews
          shoes whose shoes does he choose? If a dog chews shoes whose shoes
          does he choose? If a dog chews shoes whose shoes does he choose? If a
          dog chews shoes whose shoes does he choose? If a dog chews shoes whose
          shoes does he choose? If a dog chews shoes whose shoes does he choose?
        </p>
      </div>
    </div>
  );
};

export default ImagePost;
