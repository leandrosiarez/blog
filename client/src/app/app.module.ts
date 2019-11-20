import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { BycategoryComponent } from './bycategory/bycategory.component';
import { DetailsComponent } from './details/details.component';
import { CategoryComponent } from './category/category.component';
import { CategoryDetailsComponent } from './category/category-details/category-details.component';
import { CategoryAddComponent } from './category/category-add/category-add.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { PostComponent } from './post/post.component';
import { PostDetailsComponent } from './post/post-details/post-details.component';
import { PostAddComponent } from './post/post-add/post-add.component';
import { PostEditComponent } from './post/post-edit/post-edit.component';
import { Routes } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatFormFieldModule,
  MatSelectModule,
  MatMenuModule,
  MatToolbarModule } from '@angular/material';
  import { CKEditorModule } from 'ckeditor4-angular';
  import { MatContenteditableModule } from 'mat-contenteditable';
  import { AuthGuard } from './auth/auth.guard';
  
  const routes: Routes = [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      component: HomeComponent,
      data: { title: 'Blog Home' }
    },
    {
      path: 'admin',
      canActivate: [AuthGuard],
      component: AdminComponent,
      data: { title: 'Blog Admin' }
    },
    {
      path: 'bycategory/:id',
      component: BycategoryComponent,
      data: { title: 'Post by Category' }
    },
    {
      path: 'details/:id',
      component: DetailsComponent,
      data: { title: 'Show Post Details' }
    },
    {
      path: 'login',
      component: LoginComponent,
      data: { title: 'Login' }
    },
    {
      path: 'register',
      component: RegisterComponent,
      data: { title: 'Register' }
    },
    {
      path: 'category',
      canActivate: [AuthGuard],
      component: CategoryComponent,
      data: { title: 'Category' }
    },
    {
      path: 'category/details/:id',
      canActivate: [AuthGuard],
      component: CategoryDetailsComponent,
      data: { title: 'Category Details' }
    },
    {
      path: 'category/add',
      canActivate: [AuthGuard],
      component: CategoryAddComponent,
      data: { title: 'Category Add' }
    },
    {
      path: 'category/edit/:id',
      canActivate: [AuthGuard],
      component: CategoryEditComponent,
      data: { title: 'Category Edit' }
    },
    {
      path: 'post',
      canActivate: [AuthGuard],
      component: PostComponent,
      data: { title: 'Post' }
    },
    {
      path: 'post/details/:id',
      canActivate: [AuthGuard],
      component: PostDetailsComponent,
      data: { title: 'Post Details' }
    },
    {
      path: 'post/add',
      canActivate: [AuthGuard],
      component: PostAddComponent,
      data: { title: 'Post Add' }
    },
    {
      path: 'post/edit/:id',
      canActivate: [AuthGuard],
      component: PostEditComponent,
      data: { title: 'Post Edit' }
    }
  ];
  


@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    RegisterComponent,
    HomeComponent,
    AdminComponent,
    BycategoryComponent,
    DetailsComponent,
    CategoryComponent,
    CategoryDetailsComponent,
    CategoryAddComponent,
    CategoryEditComponent,
    PostComponent,
    PostDetailsComponent,
    PostAddComponent,
    PostEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatGridListModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatMenuModule,
    MatToolbarModule,
    CKEditorModule,
    MatContenteditableModule
  ],
  
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
