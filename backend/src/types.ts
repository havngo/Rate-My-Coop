export type User = {
    name: string, 
    email: string, 
    password: string
}


export enum DbTable {
    USER = "users",
    COOP = "coops",
    USER_COOP = "user_coop",
  }