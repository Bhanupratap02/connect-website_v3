/** @format */

const API_BASE_URL = "https://connectplus.org.uk/wp/wp-json/wp/v2";

export const fetchPosts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/posts?_embed`, {
      cache: "no-store",
    });
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

export const fetchPostById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/posts/${id}?_embed`, {
      cache: "no-store",
    });
    const post = await response.json();
    return post;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
};