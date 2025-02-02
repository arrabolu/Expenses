import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient) {}

  // Expense APi services

    postExpense(data:any){
      return this.http.post<any>("http://localhost:8080/expense/save/expense",data);
    }

    getExpense(){
      return this.http.get<any>("http://localhost:8080/expense/fetch/expenses");
    }

    putExpense( data:any,id:number){
      return this.http.put<any>("http://localhost:8080/expense/update/expense/"+id,data)
    }

    deleteExpense(id:number){
      return this.http.delete<any>("http://localhost:8080/expense/delete/expense/"+id)
    }

    //Trip Api services

    getTrip(){
      return this.http.get<any>("http://localhost:8080/expense/fetch/trips")
    }

    postTrip(data:any){
      return this.http.post<any>("http://localhost:8080/expense/save/trip",data)
    }

    putTrip(data:any,id:number){
      return this.http.put<any>("http://localhost:8080/expense/update/trip/"+id,data)
    }

    deleteTrip(id:number){
      return this.http.delete<any>("http://localhost:8080/expense/delete/trip/"+id)
    }

    //Reports Api services

    getReports(){
      return this.http.get<any>("http://localhost:8080/expense/fetch/reports")
    }

    postReport(data :any){
      return this.http.post<any>("http://localhost:8080/expense/save/report",data)
    }

    putReport(data:any,id:number){
      return this.http.put<any>("http://localhost:8080/expense/update/report/"+id,data)
    }

    deleteReport(id:number){
      return this.http.delete<any>("http://localhost:8080/expense/delete/report/"+id)
    }

    



   
}
