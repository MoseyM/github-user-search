import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class GithubMemberService {

  private _root_url="https://api.github.com/";
  constructor(private http: Http) {}

  getMember(userName: string) {
    return this.http.get(
      `${this._root_url}users/${userName}`
    );
  }

  getFollowers(userName: string) {
    return this.http.get(
      `${this._root_url}users/${userName}/followers`
    );
  }
}
