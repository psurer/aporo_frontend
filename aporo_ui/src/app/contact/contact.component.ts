import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactFormDialogComponent } from './contact-form-dialog.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{
    constructor(private dialog: MatDialog) {}
    ngOnInit(): void { }
      // opens the contact form dialog and pass in any necessary data
      openContactFormDialog(): void {
        const dialogRef = this.dialog.open(ContactFormDialogComponent, {
          width: '600px',
          data: { }
        });
    
      
      //  subscribe to the dialog's afterClosed event to handle any data that is returned
      dialogRef.afterClosed().subscribe((result: any) => {
        // We can do something with the data returned by the dialog (if necessary)
        console.log(result);
      });
      }
    }