const getAllUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  return response.json();
};

export default getAllUsers;
