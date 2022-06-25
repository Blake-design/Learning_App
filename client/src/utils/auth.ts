import decode, { JwtPayload } from "jwt-decode";
interface userData {
  token: string;
  user: {
    _id: string;
    userName: string;
    __typename: string;
  };
}
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

  login(userData: userData): void {
    console.log(JSON.stringify(userData));
    localStorage.setItem("id_token", userData.token);
    window.location.assign(`/${userData.user._id}`);
  }

  logout(): void {
    localStorage.removeItem("id_token");
    window.location.assign("/");
  }
}

export default new AuthService();
