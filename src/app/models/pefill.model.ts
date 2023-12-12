export interface Perfil{
  name:string,
  login: string,
  followers: number,
  following: number,
  public_repos: number,
  avatar_url?: string,
  bio: string,
  email?:string,
  location?: string,
  company?: string,
  blog?: string,
}
