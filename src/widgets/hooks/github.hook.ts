// src/hooks/useGithubInfo.ts
import { useEffect, useState } from 'react';
import { getItemFromStorage } from '../../utils/storage';
import { fetchGithubUser, GithubUser } from '../services/github.service';

export const useGithubInfo = () => {
  const [user, setUser] = useState<GithubUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const username = getItemFromStorage('githubUserName');
    if (!username) {
      setLoading(false);
      return;
    }

    fetchGithubUser(username)
      .then((data) => {
        setUser(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { user, loading, error };
};
