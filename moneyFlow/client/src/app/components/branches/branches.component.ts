import { Component, OnInit } from '@angular/core';
import { BRANCH, SwiftService } from 'src/app/services/swift.service';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent implements OnInit {

  constructor(private swiftService: SwiftService) { }

  ngOnInit(): void {
  }

  get branches(): BRANCH[] {
    return this.swiftService.branch;
  }

}
