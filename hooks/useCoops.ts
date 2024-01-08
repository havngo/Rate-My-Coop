import { Coop, CoopWithID } from '../components/types';

// hook for getting resources from api to display in frontend

// data is cached so request is not sent to api every time page is loaded  
export const useCoops = async (requestBody: string = "") => {
  const requestSettings =  { method: 'GET', body: requestBody, headers: {'Content-Type': 'application/json'}}
  const resourcesFetcher = async () : Promise<Coop[]> => {
    const response : Response = await fetch('http://10.1.10.170:3000/api/coops', requestSettings)
    const resources : CoopWithID[] = await response.json()
    return resources.map(({coop_id, ...rest}) => ({
      company: rest.company,
      position: rest.position,
      review: rest.review,
      rating: {
        overall: 0,
        location: 0,
        compensation: 0,
        workImpact: 0,
        culture: 0
      }
    }))
  } 
  const data = await resourcesFetcher();
  return { requestedCoops: data ?? []}
}

// export const useCoop = async (id: string) => {
//   const requestSettings =  { method: 'GET', body: null, headers: {'Content-Type': 'application/json'}}
//   const resourcesFetcher = async () : Promise<WithID<Coop>[]> => {
//       const response : Response = await fetch('http://10.0.0.166:3000/api/coops', requestSettings)
//       const resources : WithID<Coop>[] = await response.json()
//       return resources
//   } 
//   const data = await resourcesFetcher();
//   const requestedCoop = data.find(coop => coop.id === id)
//   return { requestedCoop }
// }
