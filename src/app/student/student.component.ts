import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private http: HttpClient) { }

  students: any;

  ngOnInit() {
	this.http.get('/student').subscribe(data => {
    		this.students = data;
  });
  }

}
