export interface GithubUser {
    login: string;
    avatar_url: string;
    public_repos: number;
    followers: number;
    following: number;
    bio: string;
    html_url: string;
    hireable: boolean;
    updated_at: string ;
  }
  
  export const fetchGithubUser = async (username: string): Promise<GithubUser> => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    
    if (!response.ok) {
      throw new Error('GitHub user not found.');
    }
  
    const data = await response.json();
    return data;
  };