// components/InstagramPosts.tsx

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

// Example Instagram data structure
interface InstagramPost {
  id: string;
  imgSrc: string;
  caption: string;
  link: string;
}

const InstagramPosts: React.FC = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);

  useEffect(() => {
    // Fetch the latest 3 Instagram posts here
    // Replace the following dummy data with your API call
    const fetchPosts = async () => {
      const data = [
        { id: '1', imgSrc: '/insta1.jpg', caption: 'Post 1 caption', link: 'https://instagram.com/p/1' },
        { id: '2', imgSrc: '/insta2.jpg', caption: 'Post 2 caption', link: 'https://instagram.com/p/2' },
        { id: '3', imgSrc: '/insta3.jpg', caption: 'Post 3 caption', link: 'https://instagram.com/p/3' },
      ];
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <div className="flex flex-col items-center my-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {posts.map((post) => (
          <div
            key={post.id}
            className="border rounded-lg overflow-hidden shadow-lg w-full h-[400px] mx-auto"
          >
            <div className="relative w-full h-1/2">
              <Image
                src={post.imgSrc}
                alt={post.caption}
                layout="fill"
                objectFit="cover"
                className="absolute top-0 left-0"
              />
            </div>
            <div className="h-1/2 bg-white flex flex-col justify-between items-center text-center">
              <p className="m-2 regular-16 text-gray-600">{post.caption}</p>
              <a href={post.link} className="w-full" target="_blank" rel="noopener noreferrer">
                <button className="regular-18 bg-green-90 text-white p-4 rounded w-full hover:bg-green-50">
                  View on Instagram
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramPosts;
