import { Component } from '@angular/core';
import { GithubMemberService } from './services/github-member.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  memberFound;
  favs;
  title = 'github-member-app';
  
  constructor(private service: GithubMemberService){}
  onMemberFound(data){
    this.memberFound = data;

    this.service.getFollowers(data.login).subscribe(resolve => {
      this.favs = resolve.json();
    });

  }
}
