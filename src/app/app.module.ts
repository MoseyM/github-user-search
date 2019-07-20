import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MemberSearchComponent } from './member-search/member-search.component';
import { GithubMemberService } from './services/github-member.service';
import { Http, HttpModule } from '@angular/http';
import { MemberInfoComponent } from './member-info/member-info.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberSearchComponent,
    MemberInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    GithubMemberService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
