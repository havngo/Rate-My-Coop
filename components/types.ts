export type User = {
    name: string,
    email: string, // typed Email
    password: string, // hashed
    exps: Coop[],
    classOf: number,
    major: string, // enum?
    college: string, // def enum
    favoriteReviews: Id[],
    keywords: string[] // for recommendation
}

export type Coop = {
    company: string, 
    position: string,
    review: string, 
    rating: Rating, // out of 5
    duration?: number, // in weeks
    location?: string,
    interview?: Interview,
    returnOffer?: boolean,
    hide?: boolean,
    dateCreated?: number
}

export type Interview = {
    rounds: number,
    technical: boolean,
    difficulty: number // out of 5
}

// out of 5
export type Rating = {
    overall: number,
    workImpact?: number,
    location?: number,
    compensation?: number,
    culture?: number,
}

export type Id = number
export type Message = {
    to: Id,
    from: Id,
    message: string,
    date: number,
    read: boolean,
    delete: boolean
}

export type CoopWithID = {coop_id: number} & Coop

export type SquareReivewCard = Pick<Coop, 'company' | 'position' | 'rating'>
export type RectReviewCard = Pick<Coop, 'company' | 'position' | 'rating' | 'duration' | 'location' | 'review'>

export enum RateCategory {
    workImpact = "Work Impact",
    compensation = "Compensation",
    location = "Location",
    culture = "Culture"
}

/**
 * Login & Signup:
 * - Email must end with northeastern.edu
 * - Email must be verified
 * - Password is stored as a hashed version
 * 
 * Homescreen:
 * - Recommendation system:
 *  + Latest reviews
 *  + Top companies (in your major)
 *  + Recently viewed
 *  + Optional filter -- ability to choose one
 * - Favorite
 * - Search, sort, and filter
 * 
 * Setting:
 * - Dark mode
 * - Delete my acc
 * 
 * User Profile:
 * - resume-ish?
 * - option to hide reviews
 * 
 * Add a review
 * 
 * Review detail:
 * - Information
 * - Message reviewer
 * - 
 */