// pages/index.tsx (ou o arquivo de página equivalente)

import PostCard from '@/components/PostCard';
import { fetchInstagramPosts } from '../lib/instagram';

const profileId = '1189866288936973'; // Substitua pelo ID do perfil do Instagram

async function getInstagramPosts() {
  try {
    const posts = await fetchInstagramPosts(profileId);
    return posts;
  } catch (error) {
    console.error('Error fetching Instagram posts:', error);
    return [];
  }
}

const objexemp = {
  provider_url: 'https://www.facebook.com',
  provider_name: 'Facebook',
  height: 500,
  html: '<div id="fb-root"></div>\n' +
    '<script async="1" defer="1" crossorigin="anonymous" src="https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&amp;version=v20.0" nonce="iuuwkyvj"></script><div class="fb-page" data-href="https://www.facebook.com/instagram/" data-small-header="" data-adapt-container-width="1" data-hide-cover="" data-show-facepile="1" data-show-posts="1"><blockquote cite="https://www.facebook.com/instagram/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/instagram/">Instagram</a></blockquote></div>',
  type: 'rich',
  version: '1.0',
  width: 340
}

const BlogPage = async () => {
  const instagramPosts = await getInstagramPosts();

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {instagramPosts.map((post) => (
        <PostCard
          key={post.id}
          photoUrl={post.media_url} // Usa o URL do media para a imagem
          title={post.caption || 'Instagram Post'} // Usa a legenda do post, se disponível
          date={post.timestamp} // Usa o timestamp do post

        />
      ))}
    </div>
  );
};

export default BlogPage;
