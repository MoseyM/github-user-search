import { Component, Output, EventEmitter } from '@angular/core';
import { GithubMemberService } from '../services/github-member.service';

@Component({
  selector: 'member-search',
  templateUrl: './member-search.component.html',
  styleUrls: ['./member-search.component.scss']
})
export class MemberSearchComponent {
  private term: string;
  @Output() memberFound = new EventEmitter();
  constructor(private service: GithubMemberService) { }

  getMemberStats(input: HTMLInputElement) {
    if(input.value !== this.term) {
      this.term = input.value;
      this.service.getMember(input.value).subscribe((resolve) => {
        this.memberFound.emit(resolve.json());
      });
    }
  }

}
