import { Coop, WithID } from '../components/types';

// hook for getting resources from api to display in frontend

// data is cached so request is not sent to api every time page is loaded  
export const useCoops = async (requestBody: string) => {
  const requestSettings =  { method: 'POST', body: requestBody, headers: {'Content-Type': 'application/json'}}
  const resourcesFetcher = async () : Promise<Coop[]> => {
      const response : Response = await fetch('/api/coops', requestSettings)
      const resources : WithID<Coop>[] = await response.json()
      return resources.map(({id, value}) => value)
  } 
  const data = await resourcesFetcher();
  return { requestedCoops: data ?? []}
}

export const useCoop = async (id: string) => {
  const requestSettings =  { method: 'POST', body: null, headers: {'Content-Type': 'application/json'}}
  const resourcesFetcher = async () : Promise<WithID<Coop>[]> => {
      const response : Response = await fetch('/api/coops', requestSettings)
      const resources : WithID<Coop>[] = await response.json()
      return resources
  } 
  const data = await resourcesFetcher();
  const requestedCoop = data.find(coop => coop.id === id)
  return { requestedCoop }
}
