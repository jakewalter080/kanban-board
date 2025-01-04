import { JwtPayload, jwtDecode } from 'jwt-decode';

interface CustomJwtPayload extends JwtPayload {
  username?: string;
  id?: string;
}

class AuthService {
  getProfile(): CustomJwtPayload | null {
    const token = this.getToken();
    if (!token) return null;
    try {
      return jwtDecode<CustomJwtPayload>(token);
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }

  loggedIn(): boolean {
    const token = this.getToken();
    return token ? !this.isTokenExpired(token) : false;
  }
  
  isTokenExpired(token: string): boolean {
    try {
      const decoded = jwtDecode<JwtPayload>(token);
      if (!decoded.exp) return true;
      
      // Check if the token has expired
      // exp is in seconds, Date.now() is in milliseconds
      return decoded.exp * 1000 < Date.now();
    } catch (error) {
      console.error('Error checking token expiration:', error);
      return true;
    }
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  login(idToken: string): void {
    localStorage.setItem('token', idToken);
    window.location.assign('/'); // Redirect to home page
  }

  logout(): void {
    // Clear all auth-related data
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    
    // Redirect to login page
    window.location.assign('/login');
  }
}

export default new AuthService();
