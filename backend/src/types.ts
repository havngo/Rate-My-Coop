export type User = {
    name: string, 
    email: string, 
    password: string
}

export type Coop = {
    company: string, 
    position: string,
    review: string,
    rating: Rating,
}

export type Rating = {
    overall: number,
    workImpact: number,
    location: number,
    compensation: number,
    culture: number
}

export enum DbTable {
    USER = "users",
    COOP = "coops",
    USER_COOP = "user_coop",
  }