import React, { useState } from 'react';
import Layout from '../../components/admin-view/Layout';


const AdminUsers = () => {
    // Mock user data
    const initialUsers = [
        { id: 1, username: 'john_doe', email: 'john@example.com', role: 'user' },
        { id: 2, username: 'jane_smith', email: 'jane@example.com', role: 'admin' },
    ];

    const [users, setUsers] = useState(initialUsers);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('user');

    // Add a new user
    const handleAddUser = (e) => {
        e.preventDefault();
        const newUser = {
            id: users.length + 1, // Simulate unique ID
            username,
            email,
            role,
        };
        setUsers([...users, newUser]);
        setUsername('');
        setEmail('');
        setPassword('');
        setRole('user');
    };

    // Delete a user
    const handleDeleteUser = (userId) => {
        setUsers(users.filter((user) => user.id !== userId));
    };

    return (
        <Layout>
            <h1 className="text-2xl font-bold mb-4">Users</h1>

            {/* Add User Form */}
            <form onSubmit={handleAddUser} className="mb-6 bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-4">Add New User</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="p-2 border rounded"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-2 border rounded"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="p-2 border rounded"
                        required
                    />
                    <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="p-2 border rounded"
                    >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Add User
                </button>
            </form>

            {/* Users Table */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="text-left">ID</th>
                            <th className="text-left">Username</th>
                            <th className="text-left">Email</th>
                            <th className="text-left">Role</th>
                            <th className="text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id} className="border-t">
                                <td className="py-2">{user.id}</td>
                                <td className="py-2">{user.username}</td>
                                <td className="py-2">{user.email}</td>
                                <td className="py-2">{user.role}</td>
                                <td className="py-2">
                                    <button
                                        onClick={() => handleDeleteUser(user.id)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    );
};

export default AdminUsers;