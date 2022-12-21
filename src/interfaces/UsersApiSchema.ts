export interface UsersApiSchema {
  login: string;
  avatar_url: string;
  name: string | null;
  company: string | null;
  location: string | null;
  blog: string | null;
  bio: string | null;
  twitter_username: string | null;
  public_repos: number;
  owned_private_repos: number;
  followers: number;
  following: number;
  created_at: string;
}
