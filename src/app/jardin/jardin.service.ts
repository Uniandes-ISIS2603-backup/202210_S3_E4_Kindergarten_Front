import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Jardin } from './jardin';

@Injectable({
  providedIn: 'root'
})
export class JardinService {

  private jardinesUrl: string = environment.baseUrl+"/jardines";

  constructor(private http: HttpClient) { }

  getJardines(): Observable<Jardin[]> {
    return this.http.get<Jardin[]>(this.jardinesUrl);
  }

  getJardinId(id:string):Observable<Jardin>{
    return this.http.get<Jardin>(this.jardinesUrl+"/"+id);
  }

}

