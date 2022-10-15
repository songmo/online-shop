import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from '../../header/header.component';
import {FooterComponent} from '../../footer/footer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material-module';
import {MatButtonModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductListComponent} from './product-list/product-list.component';
import {SigninComponent} from './signin/signin.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {BackendMockDataInterceptor} from './shared/mock/mock-data-interceptor';
import {ProductListTestdataModel} from './shared/model/product-testdata.model';
import {ProductService} from './shared/services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductListComponent,
    SigninComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  exports: [],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: BackendMockDataInterceptor, multi: true},
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
