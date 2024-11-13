import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../interface/Cliente';

@Injectable({
  providedIn: 'root'
})
export class SuscripcionService {
  private apiUrl = 'https://malditoscreativos.com/api/api.php';
  private auth = btoa('uavgcz7cnd46j:frankangelo75967915');

  constructor(private http: HttpClient) {}

  agregarCliente(cliente: Cliente): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Basic ${this.auth}`,
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });

    return this.http.post(this.apiUrl, cliente, { headers });
  }
}
