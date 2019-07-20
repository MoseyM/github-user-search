import { TestBed } from '@angular/core/testing';

import { GithubMemberService } from './github-member.service';

describe('GithubMemberService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GithubMemberService = TestBed.get(GithubMemberService);
    expect(service).toBeTruthy();
  });
});
