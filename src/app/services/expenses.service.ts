import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expense } from '../models/expense';
import { ApiResponse } from '../models/api-response';


@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  constructor(private http: HttpClient) { }
  baseUrl = "http://localhost/ngCRUD/";

  addExpenseRecord(expenses: Expense): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'insert.php', expenses)
  }
}
