import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AporoServicesComponent } from './aporo-services/aporo-services.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ContactFormDialogComponent } from './contact/contact-form-dialog.component'

const routes: Routes = [
  { path: 'services', component: AporoServicesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contact-us', component: ContactFormDialogComponent },
  { path: '', redirectTo: '/about', pathMatch: 'full' }, // default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
