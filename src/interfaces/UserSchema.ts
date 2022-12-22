// https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#get-a-user

export interface UserSchema {
  login: string;
  avatar_url: string;
  name: string | null;
  company: string | null;
  location: string | null;
  blog: string | null;
  bio: string | null;
  twitter_username: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}
