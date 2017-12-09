import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'
import { HashLocationStrategy, LocationStrategy } from '@angular/common'; //Để load lại html của component luôn khi refresh

import { AppComponent } from './app.component';
import { DienThoaiComponent } from './DienThoai/dienthoai/dienthoai.component';
import { DienThoaiService } from './DienThoai/service/dienthoai.service';
import { DienThoaiCreateComponent } from './DienThoai/dienthoai-create/dienthoai-create.component'
import { DienThoaiDetailComponent } from './DienThoai/dienthoai-detail/dienthoai-detail.component'
import { DienThoaiEditComponent } from './DienThoai/dienthoai-edit/dienthoai-edit.component'

const appRoutes: Routes = [
  { path: '', redirectTo: 'dienthoai', pathMatch: 'full' },
  { path: 'dienthoai', component: DienThoaiComponent },
  { path: 'dienthoai-create', component: DienThoaiCreateComponent },
  { path: 'dienthoai-detail/:id', component: DienThoaiDetailComponent },
  { path: 'dienthoai-edit/:id', component: DienThoaiEditComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    DienThoaiComponent,
    DienThoaiCreateComponent,
    DienThoaiDetailComponent,
    DienThoaiEditComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    DienThoaiService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
