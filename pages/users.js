const users = ({ users }) => {
  return (
    <>
      <h1>UsersList</h1>
      {
        users.map((user)=>{
            return (
                <div key={user.id}>
                    <h3>{user.name}</h3>
                </div>
            )
        })
      }
    </>
  );
};

export default users;

export async function getStaticProps() {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await result.json();
  console.log(data);

  return {
    props: {
      users: data,
    },
  };
}
