import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule],  //import FormsModule để sử dụng được form
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  constructor(
    private http:HttpClient, //dùng để gửi http request
    private router:Router //dùng để redirect (sử dụng Router from @angular/router)
  ) {}

  onCreate(project: any): void { //project là dữ liệu người dùng nhập vào form
    let apiUrl = 'http://localhost:3000/projects'; //khai báo apiUrl

    //this.HttpClient.method(apiUrl, data).subscribe( res => {})
    this.http.post(apiUrl,project).subscribe( res => {
      if (res) {
        alert('Thêm mới thành công');
        //điều hướng ng dùng về trang danh sách
        this.router.navigate(['/list']);
      }
    })   
  }
}
