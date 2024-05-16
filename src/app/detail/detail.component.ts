import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  constructor(private route:ActivatedRoute) {
    //lấy giá trị param đã truyền lên url
    console.log(this.route.snapshot.params['tenParam']);
  }
}
