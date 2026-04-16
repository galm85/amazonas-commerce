import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiResponse, Category, Product, ProductsResonse, User } from '../interfaces/api';




@Injectable({
  providedIn: 'root',
})
export class ApiService {

  protected httpClient = inject(HttpClient);
  protected BASE_URL = 'http://localhost:4000/api/amazonas';
  protected USE_MOCK_DATA = true;



}



