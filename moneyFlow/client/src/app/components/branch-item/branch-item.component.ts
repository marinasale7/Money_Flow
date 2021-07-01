import { Component, Input, OnInit } from '@angular/core';
import { BRANCH } from 'src/app/services/swift.service';

@Component({
  selector: 'app-branch-item',
  templateUrl: './branch-item.component.html',
  styleUrls: ['./branch-item.component.css']
})
export class BranchItemComponent implements OnInit {

  @Input() branch?: BRANCH;

  constructor() { }

  ngOnInit(): void {
  }

}
