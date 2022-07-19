import decode, { JwtPayload } from "jwt-decode";

class AuthService {
  getToken(): string | null {
    return localStorage.getItem("id_token");
  }

  // return `true` or `false` if token exists and not expired
  loggedin(): boolean {
    const token = this.getToken();
    return token && !this.isTokenExpired(token) ? true : false;
  }

  // Decode the token to get its expiration time that was set by the server
  isTokenExpired(token: string): boolean {
    const decoded = decode<JwtPayload>(token);
    // If the expiration time is less than the current time (in seconds), the token is expired and we return `true`
    if (decoded.exp && decoded.exp < Date.now() / 1000) {
      localStorage.removeItem("id_token");
      return true;
    }
    // If token hasn't passed its expiration time, return `false`
    return false;
  }

  // Saves user token to localStorage and loads the homepage for logged in status to take effect
  login(signedToken: string): void {
    localStorage.setItem("id_token", signedToken);
    window.location.assign("/");
  }

  // Clear user token and profile data from localStorage
  logout(): void {
    localStorage.removeItem("id_token");
    // this will load the homepage and reset the state of the application
    window.location.assign("/");
  }
}

export default new AuthService();
