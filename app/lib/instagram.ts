export async function fetchInstagramPosts(profileId: string): Promise<any[]> {
  const response = await fetch(`https://graph.facebook.com/v20.0/oembed_page?url=https%3A%2F%2Fwww.facebook.com%2Finstagram%2F&access_token=EAAQ6LVV7eA0BO8osBGf1bDJGZCjom1yPgzjLGQdFSfqJikDbZBZBEUyzBeWU7VQ5dDsZCfZBTGVD2asFZBeXFF8OsGBrVdZAbi6PlaxncO9fi6ZB9dfIytGkEzQb8KU0mIWKDdV58oXZBSw3eZBSyoBZCeAN6cuZBI2zoafZAez0aOcVrMcgFGJKHNzzIz3NLf0DSw1NQ3hV8JRO4OxLF6engwgZDZD`);
  const data = await response.json();
  console.log(data)
  if (data.data) {
    return data.data;
  } else {
    throw new Error(`Erro ao buscar posts: ${data.error.message}`);
  }
}