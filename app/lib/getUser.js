import users from "@/app/mocks/users";

export default async function getUser(userid) {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      const user = users.find((u) => u.username === userid);
      return user
        ? resolve(user)
        : reject(new Error("User could not be found"));
    }, 1000)
  );
}
