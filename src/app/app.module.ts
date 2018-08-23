import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FootballersListComponent } from './footballers-list/footballers-list.component';
import {HttpClient} from '@angular/common/http';
import {HttpResponse} from '@angular/common/http'
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import {NgxPaginationModule} from 'ngx-pagination';
import { RatingPipePipe } from './rating-pipe.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTable,MatPaginator, MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import {  MatCardModule,
     
    MatIconModule,
    
    MatButtonModule,
    
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule } from '@angular/material'


@NgModule({
  declarations: [
    AppComponent,
    FootballersListComponent,
    RatingPipePipe
  ],
  imports: [
    BrowserModule,FormsModule,
    HttpClientModule,
    NgxPaginationModule, 
    BrowserAnimationsModule,  
    MatCardModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatIconModule,
    
    MatButtonModule,
   
    MatInputModule,
    MatSelectModule,
    
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
