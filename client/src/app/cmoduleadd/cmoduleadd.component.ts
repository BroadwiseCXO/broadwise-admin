import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CmoduleService } from '../shared/cmodule.service';
import { UserService } from '../shared/user.service';
import { Cmodule } from '../shared/cmodule.model';

@Component({
  selector: 'app-cmoduleadd',
  templateUrl: './cmoduleadd.component.html',
  styleUrls: ['./cmoduleadd.component.css']
})
export class CmoduleaddComponent implements OnInit {
  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor(public cmoduleService: CmoduleService, public userService: UserService) { }

  ngOnInit() {
    //something needs to come in here from the previous page
    console.log(this.userService.getLocalUser());
  }


  onSubmit(form: NgForm) {
    var cmodule = new Cmodule();
    cmodule.courseName = form.value['courseName'];
    cmodule.cmoduleName = form.value['cmoduleName'];
    cmodule.cmoduleDescription = form.value['cmoduleDescription'];
    cmodule.cmoduleAuthor = form.value['cmoduleAuthor'];
    cmodule.cmoduleURL = form.value['cmoduleURL'];
    cmodule.cmodulePassword = form.value['cmodulePassword'];
    
    this.cmoduleService.postCmodule(cmodule).subscribe(
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
    this.cmoduleService.selectedCmodule = {

    courseName: '',
    cmoduleName: '',
    cmoduleDescription: '',
    cmoduleAuthor: '',
    cmoduleURL: '',
    cmodulePassword: ''
    

    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

}