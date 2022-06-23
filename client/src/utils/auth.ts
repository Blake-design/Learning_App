import decode, { JwtPayload } from "jwt-decode";

class AuthService {
  token: string | null;

  constructor() {
    this.token = localStorage.getItem("id_token");
  }

  getUser(): string {
    return decode(this.token!);
  }

  loggedin(): boolean {
    const token = this.token;
    return token && !this.isTokenExpired(token) ? true : false;
  }

  isTokenExpired(token: string): boolean {
    const decoded = decode<JwtPayload>(token);
    if (decoded.exp && decoded.exp < Date.now() / 1000) {
      localStorage.removeItem("id_token");
      return true;
    }
    return false;
  }

  login(idToken: string): void {
    localStorage.setItem("id_token", idToken);
    window.location.assign("/");
  }

  logout(): void {
    localStorage.removeItem("id_token");
    window.location.assign("/");
  }
}

export default new AuthService();
