import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactFormDialogComponent } from './contact-form-dialog.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
    constructor(private dialog: MatDialog) {}
  
    //  function is called when the user clicks the "Contact Us" button
    openContactFormDialog(): void {
      // opens the contact form dialog and pass in any necessary data
      const dialogRef = this.dialog.open(ContactFormDialogComponent, {
        width: '500px'
      });
  
      //  subscribe to the dialog's afterClosed event to handle any data that is returned
      dialogRef.afterClosed().subscribe((result: any) => {
        // We can do something with the data returned by the dialog (if necessary)
        console.log(result);
      });
    
    }
  }