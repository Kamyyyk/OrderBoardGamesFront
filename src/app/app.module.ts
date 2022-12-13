import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { BoardGamesTableComponent } from './board-games-table/board-games-table.component';
import { BoardGameDetailsComponent } from './board-game-details/board-game-details.component';
import {MatTableModule} from "@angular/material/table";
import {MatToolbarModule} from "@angular/material/toolbar";
import { MainHeaderComponent } from './main-header/main-header.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {ToastModule} from "primeng/toast";
import {ToolbarModule} from "primeng/toolbar";
import {TableModule} from "primeng/table";
import {RatingModule} from "primeng/rating";
import {DialogModule} from "primeng/dialog";
import {DropdownModule} from "primeng/dropdown";
import {RadioButtonModule} from "primeng/radiobutton";
import {InputNumberModule} from "primeng/inputnumber";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {RippleModule} from "primeng/ripple";
import {FileUploadModule} from "primeng/fileupload";
import {MatCardModule} from "@angular/material/card";
import {InputTextModule} from "primeng/inputtext";
import { ContactComponent } from './contact/contact.component';
import {InputTextareaModule} from "primeng/inputtextarea";
import { LoginComponent } from './login/login.component';
import {NotificationService} from "./service/notification/notification.service";
import {SidebarModule} from "primeng/sidebar";


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    BoardGamesTableComponent,
    BoardGameDetailsComponent,
    MainHeaderComponent,
    ContactComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    ToastModule,
    ToolbarModule,
    TableModule,
    RatingModule,
    DialogModule,
    DropdownModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    RippleModule,
    FileUploadModule,
    MatCardModule,
    InputTextModule,
    InputTextareaModule,
    SidebarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
