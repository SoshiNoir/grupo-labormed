// components/PostCard.tsx

import Image from 'next/image';
import Script from 'next/script';
import React from 'react';

interface PostCardProps {
  photoUrl: string;
  title: string;
  date: string;
}

const PostCard: React.FC<PostCardProps> = ({ photoUrl, title, date }) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-lg p-4">
      <div className="relative w-full h-72">
        <Image
          src={photoUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <h2 className="text-xl font-semibold mt-2">{title}</h2>
      <p className="text-gray-500 mt-1">{new Date(date).toLocaleDateString()}</p>

      {/* Adicionando o Facebook SDK */}
      <Script
        id="facebook-sdk"
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&amp;version=v20.0"
      ></Script>

      <div id="fb-root"></div>
      <div
        className="fb-page"
        data-href="https://www.facebook.com/instagram/"
        data-small-header=""
        data-adapt-container-width="1"
        data-hide-cover=""
        data-show-facepile="1"
        data-show-posts="1"
      >
        <blockquote
          cite="https://www.facebook.com/instagram/"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/instagram/">Instagram</a>
        </blockquote>
      </div>
    </div>
  );
};

export default PostCard;
