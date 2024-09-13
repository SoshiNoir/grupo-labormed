// lib/instagram.ts

const accessToken = 'EAAQ6LVV7eA0BO1ZCVzbIR7IjmtucBeiFsNnGVbDSdF9oGnKIfcGGwHvRa6JWZCp8XvXarC6k4ctyxAGveE5OONma0REwAYMaDnGqxDQxBmIKaOs9dgJ5mZBhPTopnxE5SwIDv70E8eCUAdMumM2sCZAA9xHfax0Teok7FNSRIVXcGl3ajOri8ZAnc'; // Substitua pelo seu token de longo prazo

export async function fetchInstagramPosts(profileId: string): Promise<any[]> {
  const posts: any[] = [];
  let nextPage = '';

  console.log("a")
  do {
    const response = await fetch(`https://graph.facebook.com/v20.0/instagram_oembed?url=https://www.instagram.com/soshiota/&access_token=1189866288936973
|7786cbbbedf1a44af7e56439e5f41225`);
    const data = await response.json();
    console.log(data)

    if (data.data) {
      posts.push(...data.data);

      nextPage = data.paging && data.paging.next ? new URL(data.paging.next).searchParams.get('after') || '' : '';
    } else {
      throw new Error(`Erro ao buscar posts: ${data.error.message}`);
    }
  } while (nextPage);

  return posts;
}
