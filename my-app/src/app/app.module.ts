import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { BrandComponent } from './header/brand/brand.component';
import { MenuComponent } from './header/menu/menu.component';
import { SidebarComponent } from './header/menu/sidebar/sidebar.component';
import { SidebarDirective } from './header/menu/sidebar/sidebar.directive';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule,MatGridListModule,MatIconModule,MatMenuModule} from '@angular/material';
import { ProductComponent } from './product/product.component';
import { SlideComponent } from './body/slide/slide.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
const appRoutes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'product', component: ProductComponent  },
  //{ path: 'login', component: LoginComponent  },
  { path: 'about', component: AboutComponent  },
  { path: 'home', component: HomeComponent  },
];
@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeaderComponent,
    BrandComponent,
    MenuComponent,
    SidebarComponent,
    SidebarDirective,
    ProductComponent,
    SlideComponent,
    AboutComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
