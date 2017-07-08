import { Injectable } from '@angular/core';      
import { Headers, Http } from '@angular/http';

import {Hero} from './hero'
import 'rxjs/add/operator/toPromise';
@Injectable()
export class HeroService {
  private url:string = 'http://swapi.co/api/people/';
  private urlLocal:string = 'http://localhost:3000/heroes';

private headers = new Headers({'Content-Type': 'application/json'});


  heroes:Hero[] = []
constructor(private http: Http) { }
  getHeroes(): Promise<Hero[]>{
    return this.http.get(this.urlLocal)
    .toPromise()
    .then(response => response.json() as Hero[])
    .catch(this.handleError)
    
  }
  getHero(id : number) : Promise<Hero> {
    return this.http.get(this.urlLocal + "/" + id)
    .toPromise()
    .then(response => response.json() as Hero )
    .catch(this.handleError)
  }
  update(hero:Hero) : Promise<Hero> {
    const url = `${this.urlLocal}/${hero.id}`
    return this.http.put(url,JSON.stringify(hero),{headers:this.headers})
    .toPromise()
    .then(() => hero)
    .catch(this.handleError)
  }
  create(name:string) : Promise<Hero> {
   const url = `${this.urlLocal}/`;
   let id = Math.floor(Math.random() * 1000) + 10  

   let heroi : Hero = {
     id: id,
     name: name,
     gender: 'Male'  

   }
   
   
    return this.http.post(url,JSON.stringify(heroi),{headers:this.headers})
    .toPromise()
    .then(response => response.json() as Hero)
    .catch(this.handleError)

  }
      
delete(id: number): Promise<void> {
  const url = `${this.urlLocal}/${id}`;
  return this.http.delete(url, {headers: this.headers})
    .toPromise()
    .then(() => null)
    .catch(this.handleError);
}

private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // Para Aparecer no console
  return Promise.reject(error.message || error);
}

}
