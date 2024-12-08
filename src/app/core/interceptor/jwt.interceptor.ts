import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Vérifier si l'URL contient "login" ou "register"
    const isAuthUrl = request.url.includes('/login') || request.url.includes('/register');

    // Si ce n'est pas une URL de login ou register, ajouter le header d'autorisation
    if (!isAuthUrl) {
      const token = localStorage.getItem('token');
      if (token) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
    }

    return next.handle(request);
  }
}
