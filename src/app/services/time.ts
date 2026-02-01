import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Time } from '../interfaces/time';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  private apiURL = "http://localhost:3001";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Time[]>{
    return this.http.get<Time[]>(this.apiURL+"/times");
  }

  create(data: Time): Observable<Time>{
    return this.http.post<Time>(this.apiURL+"/times", data);
  }

  find(id: string): Observable<Time>{
    return this.http.get<Time>(this.apiURL+"/times/" + id);
  }

  update(id:string, data: Time): Observable<Time>{
    return this.http.put<Time>(this.apiURL+"/times/" + id, data);
  }

  delete(id: string): Observable<any>{
    return this.http.delete(this.apiURL+"/times/" + id);
  }
}