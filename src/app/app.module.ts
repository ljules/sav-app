import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule  } from '@angular/common/http';       // Ajout de HttpClientModule pour l'API

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { WrapperComponent } from './core/wrapper/wrapper.component';
import { HomePageComponent } from './pages/public/home-page/home-page.component';
import { LoginPageComponent } from './pages/public/login-page/login-page.component';
import { SubscribePageComponent } from './pages/public/subscribe-page/subscribe-page.component';
import { AboutPageComponent } from './pages/public/about-page/about-page.component';
import { RecipeCalculatorPageComponent } from './pages/public/recipe-calculator-page/recipe-calculator-page.component';
import { AccountManagerPageComponent } from './pages/user/account-manager-page/account-manager-page.component';
import { RecipeManagerPageComponent } from './pages/user/recipe-manager-page/recipe-manager-page.component';
import { UsersManagerPageComponent } from './pages/admin/users-manager-page/users-manager-page.component';
import { IngredientManagerPageComponent } from './pages/admin/ingredient-manager-page/ingredient-manager-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { IngredientFormComponent } from './shared/ingredient-form/ingredient-form.component';
import { IngredientListComponent } from './shared/ingredient-list/ingredient-list.component';
import { IngredientImportExportComponent } from './shared/ingredient-import-export/ingredient-import-export.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WrapperComponent,
    HomePageComponent,
    LoginPageComponent,
    SubscribePageComponent,
    AboutPageComponent,
    RecipeCalculatorPageComponent,
    AccountManagerPageComponent,
    RecipeManagerPageComponent,
    UsersManagerPageComponent,
    IngredientManagerPageComponent,
    IngredientFormComponent,
    IngredientListComponent,
    IngredientImportExportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,   // Ajout du module HttpClientModule pour les services API
    FormsModule,        // Ajout du module pour ngModel (pour les formulaires.)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
