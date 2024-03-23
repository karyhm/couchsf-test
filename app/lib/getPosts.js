import posts from "@/app/mocks/posts";
import users from "@/app/mocks/users";

const fetchAuthor = (authorUsername) => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      const author = users.find((user) => user.username === authorUsername);
      return author
        ? resolve(author)
        : reject(new Error("Could not find author"));
    }, 1000)
  );
};

export default async function getPosts(user) {
  const results = await new Promise((resolve) =>
    resolve(posts.filter((post) => post.author === user))
  );

  const newPostArr = await Promise.all(
    results.map(async (post) => {
      const author = await fetchAuthor(post.author);
      return { ...post, author: author.name };
    })
  );

  return new Promise((resolve) => setTimeout(resolve(newPostArr), 1000));
}
