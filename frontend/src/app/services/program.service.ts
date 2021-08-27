import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  private env: String;
  constructor(private _http: HttpClient) {
    this.env = environment.APP_URL;
   }

   registerProgram(program: any){
     return this._http.post<any>(this.env + 'program/registerProgram', program);
   }
}
