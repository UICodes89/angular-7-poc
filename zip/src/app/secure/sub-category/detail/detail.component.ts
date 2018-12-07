import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public id:string;
  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { 
    
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.route.params.subscribe(routeParams => {
      this.id = routeParams.id;
    });
  }

}
