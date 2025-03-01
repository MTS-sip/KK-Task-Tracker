import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    const token = this.getToken();
    return token ? jwtDecode<JwtPayload>(token) : null;
  }

  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }
  
  isTokenExpired(token: string) {
    try {
      const decoded = jwtDecode<JwtPayload>(token);
      return decoded.exp ? decoded.exp * 1000 < Date.now() : true;
    } catch {
      return true;
    }
  }

  getToken(): string {
    return localStorage.getItem('id_token') || '';
  }

  setToken(token: string) {
    localStorage.setItem('id_token', token);
  }

  login(idToken: string) {
    this.setToken(idToken);
    window.location.assign('/');
  }

  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/login');
  }
}

export default new AuthService();