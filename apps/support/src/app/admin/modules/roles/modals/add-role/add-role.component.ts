import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './add-role.component.html',
})

export class AddRoleComponent implements OnInit {
  example: FormControl = this.fb.control("");
  exampleFormGroup: FormGroup;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<AddRoleComponent>) { }

  ngOnInit() {
    this.exampleFormGroup = this.fb.group({
      exampleField: '',
    });
  }

  close() {
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
