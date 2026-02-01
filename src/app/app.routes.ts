import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar';
import { IndexComponent } from './crud/time/index';
import { ViewComponent } from './crud/time/view/view';
import { CreateComponent } from './crud/time/create/create';
import { EditComponent } from './crud/time/edit/edit';

export const routes = [
  { path: '', component: IndexComponent },
  { path: 'time', redirectTo: 'time/index'},
  { path: 'time/index', component: IndexComponent },
  { path: 'time/:timeId/view', component: ViewComponent },
  { path: 'time/create', component: CreateComponent },
  { path: 'time/:timeId/edit', component: EditComponent }

];