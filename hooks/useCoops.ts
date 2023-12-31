import { Coop, CoopWithID } from '../components/types';

// hook for getting resources from api to display in frontend

// data is cached so request is not sent to api every time page is loaded  
export const useCoops = async (requestBody: string = "") => {
  const requestSettings =  { method: 'GET', body: requestBody, headers: {'Content-Type': 'application/json'}}
  const resourcesFetcher = async () : Promise<Coop[]> => {
    const response : Response = await fetch(`http://10.0.0.166:3000/api/coops`, requestSettings)
    const resources : CoopWithID[] = await response.json()
    return resources.sort((prev, next) => next.coop_id - prev.coop_id).map(({coop_id, ...rest}) => {
      const rates = (rest.rating as unknown as string).slice(1, -1).split(',').map(val => Number(val));
      return {
      company: rest.company,
      position: rest.position,
      review: rest.review,
      rating: {
        overall: rates[0],
        location: rates[1],
        compensation: rates[2],
        workImpact: rates[3],
        culture: rates[4]
      }
    }})
  } 
  const data = await resourcesFetcher();
  return { requestedCoops: data ?? []}
}

// export const useCoop = async (id: string) => {
//   const requestSettings =  { method: 'GET', body: null, headers: {'Content-Type': 'application/json'}}
//   const resourcesFetcher = async () : Promise<WithID<Coop>[]> => {
//       const response : Response = await fetch(`http://${process.env.LOCALHOST}:3000/api/coops`, requestSettings)
//       const resources : WithID<Coop>[] = await response.json()
//       return resources
//   } 
//   const data = await resourcesFetcher();
//   const requestedCoop = data.find(coop => coop.id === id)
//   return { requestedCoop }
// }
