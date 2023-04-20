import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-form-dialog',
  templateUrl: './contact-form-dialog.component.html',
  styleUrls: ['./contact-form-dialog.component.scss']
})
export class ContactFormDialogComponent {
  contactForm: FormGroup;
  firstName: any;
  lastName: any;
  email: any;
  phone: any;
  region: any;
  industry: any;
  message: any;

  regions = ['North America', 'South America', 'Europe', 'Asia', 'Africa', 'Australia'];

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ContactFormDialogComponent>,

  ) {
  // Initialize the form with default values and validation rules
  this.contactForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', ],
    region: ['', Validators.required],
    industry: ['', Validators.required],
    message: ['']
  });
}

  // This function is called when the user clicks the "Submit" button
// This function is called when the user clicks the "Submit" button
onSubmit(): void {
  // If the form is valid, close the dialog and pass the form data back to the parent component
  if (this.contactForm.valid) {
    this.dialogRef.close(this.contactForm.value);
  }
}
  // This function is called when the user clicks the "Cancel" button
  onCancel(): void {
    // Close the dialog without passing any data back to the parent component
    this.dialogRef.close();
  }
}
