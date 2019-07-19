import { Injectable } from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable } from 'rxjs';
import { shiftMasterTable } from './models/shiftMasterTable';

@Injectable({
  providedIn: 'root'
})
export class ShiftMasterTableService {

  private _url: string = "http://localhost:3000/shiftMaster";

  constructor(private http:HttpClient) { }

  getData(): Observable<shiftMasterTable[]>{
    return this.http.get<shiftMasterTable[]>(this._url)
                  
  }
  getDataById(id:number){
    return this.http.get<shiftMasterTable[]>(this._url+"/"+id)
  }
  
  createShiftMaster(shift:shiftMasterTable[]){
    return this.http.post<shiftMasterTable[]>(this._url,shift)
  }
  updateShiftMaster(shiftMasterTable:shiftMasterTable) {
    return this.http.put(this._url+"/"+shiftMasterTable.id,shiftMasterTable)
  }

  deleteShiftMaster(id: number) {
    return this.http.delete(this._url + '/' + id);
  }
}