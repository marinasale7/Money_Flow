import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';


export interface BRANCH {
  name: string,
  balance: Number
}


export interface TRANSACTION {
  type: string,
  amount: Number,
  from: {
    id: string,
    name: string,
  },
  to: {
    id: string,
    name: string,
  },
      note: string
};


@Injectable({
  providedIn: 'root'
})
export class SwiftService {

  constructor(private http: HttpClient, private userSrevice: UserService, private router: Router) { }

  private branches: BRANCH[] = []

  baseUrl = 'http://localhost:3000/swift'

  requestHeaders() {
    return {
      headers: {
        authorization: this.userSrevice.getToken()
      }
    };
  }

  fetchBranch() {
    this.http.get<{branches: BRANCH[]}>(this.baseUrl, this.requestHeaders()).subscribe(
      data => this.branches = data.branches,
      err => console.log(err)
    );
  }

  get branch() {
    return this.branches.slice()
  }

  createBranch(name: string, balance: Number) {
    this.http.post<{branches: BRANCH}>(this.baseUrl, {name, balance}, this.requestHeaders()).subscribe(
      data => {
        console.log(data.branches)
        this.branches.push(data.branches)
        this.router.navigate(['branches'])
      },
      err => console.log(err)
    )

  }

}
