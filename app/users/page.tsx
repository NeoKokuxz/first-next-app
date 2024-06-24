import React from 'react';
import ProductCard from '../components/ChatCard/ProductCard';

interface User {
  id: number;
  name: string;
  email: string;
}

const UserPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    // next: { revalidate: 10 },
    cache: 'no-cache'
  });
  const users: User[] = await res.json();
  // console.log(users);

  return (
    <div>
      User Page
      <ProductCard />
      <p>{new Date().toLocaleTimeString()}</p>
      <table className='table table-border'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserPage;
