import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Jardin } from './jardin';
import { JardinDetail } from './jardinDetail';

@Injectable({
  providedIn: 'root'
})
export class JardinService {

  private jardinesUrl: string = environment.baseUrl+"/jardines";

  constructor(private http: HttpClient) { }

  getJardines(): Observable<JardinDetail[]> {
    return this.http.get<JardinDetail[]>(this.jardinesUrl);
  }

  getJardinId(id:string):Observable<JardinDetail>{
    return this.http.get<JardinDetail>(this.jardinesUrl+"/"+id);
  }
}

