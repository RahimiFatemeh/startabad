import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GroupService } from 'src/app/_services/group.service';

@Component({
  selector: 'app-admin-group',
  templateUrl: './admin-group.component.html',
  styleUrls: ['./admin-group.component.css']
})
export class AdminGroupComponent implements OnInit {
  model : any = {}
  constructor(private groupService : GroupService , 
              private toastr : ToastrService) { }

  ngOnInit(): void {
  }

  addgroup()
  {
    this.groupService.addGroup(this.model).subscribe(response => {
      this.toastr.success("با موفقیت اضافه شد")
      this.model ={}
    } , error => console.log(error)
     )
  }

}
