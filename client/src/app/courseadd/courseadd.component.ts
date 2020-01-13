import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CourseService } from '../shared/course.service';
import { UserService } from '../shared/user.service';
import { Course } from '../shared/course.model';

@Component({
  selector: 'app-courseadd',
  templateUrl: './courseadd.component.html',
  styleUrls: ['./courseadd.component.css']
})
export class CourseaddComponent implements OnInit {
  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor(public courseService: CourseService, public userService: UserService) { }

  ngOnInit() {
    //something needs to come in here from the previous page
    console.log(this.userService.getLocalUser());
  }

  onSubmit(form: NgForm) {
    var course = new Course();
    course.courseCategory = form.value['courseCategory'];
    course.courseName = form.value['courseName'];
    course.courseDescription = form.value['courseDescription'];
    course.courseImage = form.value['courseImage'];
    console.log("this is course from form");
    console.log(course);
    this.courseService.postCourse(course).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        this.resetForm(form);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      }
    );
  }

  resetForm(form: NgForm) {
    this.courseService.selectedCourse = {

      courseCategory: '',
    courseName: '',
    courseDescription: '',
    courseImage: ''
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

}