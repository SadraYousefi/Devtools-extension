import { useState } from 'react';
import { setItemToStorage } from '../../utils/storage';

export const SettingsForm = () => {
  const [username, setUsername] = useState('');

  const handleSave = () => {
    if (username.trim()) {
      setItemToStorage( 'githubUserName' , username.trim());
      window.location.reload();
    }
  };

  return (
    <div className="p-4 bg-gradient-to-bl from-purple-600 to-black rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-2">ثبت نام کاربری گیت‌هاب</h2>
      <input
        className="border p-2 rounded w-full mb-2"
        placeholder="GitHub Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded w-full"
        onClick={handleSave}
      >
        ذخیره
      </button>
    </div>
  );
};
