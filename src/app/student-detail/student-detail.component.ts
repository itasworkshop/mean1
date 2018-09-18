import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StudentDetailComponent implements OnInit {
  student = {};

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
	this.getStudentDetail(this.route.snapshot.params['_id']);
  }

  getStudentDetail(name) {
    this.http.get('/student/'+'_id').subscribe(data => {
      this.student = data;
    });
  }

}
