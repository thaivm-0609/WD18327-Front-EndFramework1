import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  list = [
    {
      id: 1,
      name: 'thaivm2',
      gender: 'male',
      sdt: '0123456789',
    },
    {
      id: 2,
      name: 'thaivm3',
      gender: 'female',
      sdt: '0123456789',
    },
    {
      id: 3,
      name: 'thaivm4',
      gender: 'female',
      sdt: '0123456789',
    },
    {
      id: 4,
      name: 'thaivm4',
      gender: 'female',
      sdt: '0123456789',
    }
  ]
}
