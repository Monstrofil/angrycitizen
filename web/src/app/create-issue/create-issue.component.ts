import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IssueGroupsService, IssueType} from "../services/issue-groups.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-create-issue',
  templateUrl: './create-issue.component.html',
  styleUrls: ['./create-issue.component.scss']
})
export class CreateIssueComponent implements OnInit {

  isLinear = false;
  userDataFormGroup: FormGroup;
  reviewFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  issueGroups: Array<IssueType>;

  constructor(
    private _formBuilder: FormBuilder,
    private _issueGroupsSevice: IssueGroupsService
  ) {}

  ngOnInit() {
    this.userDataFormGroup = this._formBuilder.group({
      nameInputCtrl: ['', Validators.required],
      surnameInputCtrl: ['', Validators.required],
      lastNameInputCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this._issueGroupsSevice.getIssueTypes().subscribe(
      (resp => {
        this.issueGroups = resp;
      })
    );

  }

}
