export default class SwapiService {

    _apiBase = 'https://swapi.dev/api';
     async getResource(url){
       const res = await fetch(`${this._apiBase}${url}`);
       if (!res.ok){
         throw new Error(`Could not feetch ${url}` + `, received ${res.status}`)
       }
       return await res.json();
     }
  
     async getAllPeople(){
      const res = await this.getResource(`/people/`);
      return res.results;
     }
  
     getPerson(id){
      return this.getResource(`/people/${id}`)
    }
    async getAllPlanets() {
      const res = await this.getResource(`/planets/`);
      return res.results;
     }
     getPlanet(id){
      return this.getResource(`/planets/${id}`)
    }
  
    async getAllStarships() {
      const res = await this.getResource(`/starships/`);
      return res.results;
     }
  
     getStarShip(id){
      return this.getResource(`/starships/${id}`)
    }
  }
  
  
   
  
  const swapi = new SwapiService();
  swapi.getAllPeople().then((people) =>
  people.forEach((p) => {
    console.log(p.name)
  }));
  
  swapi.getPerson(6).then((p) =>
  {
    console.log(p.name)}
  );
  
  swapi.getAllPlanets().then((people) =>
  people.forEach((p) => {
    console.log(p.name)
  }));