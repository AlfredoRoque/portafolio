import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EcuacionRequest, EcuacionResponse } from '../models/ecuacion.models';

@Injectable({ providedIn: 'root' })
export class EcuacionesService {

  private readonly API_URL = 'https://api-sistema-ecuaciones-production.up.railway.app/api';

  constructor(private http: HttpClient) {}

  sustitucion2x2(data: EcuacionRequest): Observable<EcuacionResponse> {
    return this.http.patch<EcuacionResponse>(
      `${this.API_URL}/sistema-ecuaciones/sustitucion/2x2`,
      data
    );
  }

  sustitucion3x3(data: EcuacionRequest): Observable<EcuacionResponse> {
    return this.http.patch<EcuacionResponse>(
      `${this.API_URL}/sistema-ecuaciones/sustitucion/3x3`,
      data
    );
  }

  sumaresta2x2(data: EcuacionRequest): Observable<EcuacionResponse> {
    return this.http.patch<EcuacionResponse>(
      `${this.API_URL}/sistema-ecuaciones/sumaresta/2x2`,
      data
    );
  }

  sumaresta3x3(data: EcuacionRequest): Observable<EcuacionResponse> {
    return this.http.patch<EcuacionResponse>(
      `${this.API_URL}/sistema-ecuaciones/sumaresta/3x3`,
      data
    );
  }

  determinante2x2(data: EcuacionRequest): Observable<EcuacionResponse> {
    return this.http.patch<EcuacionResponse>(
      `${this.API_URL}/sistema-ecuaciones/determinante/2x2`,
      data
    );
  }

  determinante3x3(data: EcuacionRequest): Observable<EcuacionResponse> {
    return this.http.patch<EcuacionResponse>(
      `${this.API_URL}/sistema-ecuaciones/determinante/3x3`,
      data
    );
  }

  igualacion2x2(data: EcuacionRequest): Observable<EcuacionResponse> {
    return this.http.patch<EcuacionResponse>(
      `${this.API_URL}/sistema-ecuaciones/igualacion/2x2`,
      data
    );
  }

  igualacion3x3(data: EcuacionRequest): Observable<EcuacionResponse> {
    return this.http.patch<EcuacionResponse>(
      `${this.API_URL}/sistema-ecuaciones/igualacion/3x3`,
      data
    );
  }
}