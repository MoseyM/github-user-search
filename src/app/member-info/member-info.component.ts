import { Component, Input} from '@angular/core';

@Component({
  selector: 'member-info',
  templateUrl: './member-info.component.html',
  styleUrls: ['./member-info.component.scss']
})
export class MemberInfoComponent {
  @Input() memberInfo;
  @Input() favoriteMembers;
}
