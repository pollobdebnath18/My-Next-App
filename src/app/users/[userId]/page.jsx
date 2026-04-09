import React from "react";

const UserDetailPage = async ({ params }) => {
  const {userId} = await params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const user = await res.json();
  console.log(user);
  return (
    <div>
      <h1>This is User Detail page</h1>
      <p>{user.email}</p>
      <p>{user.website}</p>

    </div>
  );
};

export default UserDetailPage;
