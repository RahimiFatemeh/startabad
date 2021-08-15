import { Component, OnInit } from '@angular/core';
import { GroupService } from '../_services/group.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  users:any = {}
  groups: any ={}
  whichComponent = ''
  constructor(private userService : UserService,
              private groupService : GroupService) { }

  ngOnInit(): void {
   
  }

  changeComponent(w:any)
  {
    switch (w) {
      case 'Index':
          this.whichComponent = "Index"
          break
      case 'users':
          this.userService.getUser().subscribe(response =>{ this.users = response })
          this.whichComponent = "users"
          break
      case 'article':
          this.whichComponent = 'article'
          break
      case 'course':
          this.whichComponent = 'course'
          break
      case 'group':
          this.groupService.getGroup().subscribe(response => this.groups = response)
          this.whichComponent = 'group'
          break
      default:
        this.whichComponent=''
        break
    }
  }

}
