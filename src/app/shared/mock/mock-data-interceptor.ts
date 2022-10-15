import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {delay, mergeMap} from 'rxjs/operators';
import {ProductListTestdataModel} from '../model/product-testdata.model';
import {Injectable} from '@angular/core';

@Injectable()
export class BackendMockDataInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return of(null).pipe(delay(0), mergeMap(() => {
      if (req.url.endsWith('/product/list')) {
        return of(new HttpResponse({
          status: 200, body: [
            ProductListTestdataModel.getProductListTestdata(1, 'Article1', 10, 'https://static.wixstatic.com/media/98f738_8b3f1a1e77e9492fa991395bc326863f~mv2.png/v1/fill/w_400,h_400,al_c,q_85,usm_0.66_1.00_0.01/98f738_8b3f1a1e77e9492fa991395bc326863f~mv2.webp'),
            ProductListTestdataModel.getProductListTestdata(2, 'Article2', 20, 'https://static.wixstatic.com/media/98f738_7ee299b14a944d7b90a6b32656308db7~mv2.jpg/v1/fill/w_216,h_216,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/98f738_7ee299b14a944d7b90a6b32656308db7~mv2.jpg'),
            ProductListTestdataModel.getProductListTestdata(3, 'Article3', 30, 'https://static.wixstatic.com/media/98f738_8b3f1a1e77e9492fa991395bc326863f~mv2.png/v1/fill/w_400,h_400,al_c,q_85,usm_0.66_1.00_0.01/98f738_8b3f1a1e77e9492fa991395bc326863f~mv2.webp'),
            ProductListTestdataModel.getProductListTestdata(3, 'Article4', 100, 'https://static.wixstatic.com/media/98f738_8b3f1a1e77e9492fa991395bc326863f~mv2.png/v1/fill/w_400,h_400,al_c,q_85,usm_0.66_1.00_0.01/98f738_8b3f1a1e77e9492fa991395bc326863f~mv2.webp'),
            ProductListTestdataModel.getProductListTestdata(3, 'Article5', 250, 'https://static.wixstatic.com/media/98f738_8b3f1a1e77e9492fa991395bc326863f~mv2.png/v1/fill/w_400,h_400,al_c,q_85,usm_0.66_1.00_0.01/98f738_8b3f1a1e77e9492fa991395bc326863f~mv2.webp'),
            ProductListTestdataModel.getProductListTestdata(3, 'Article6', 3000, 'https://static.wixstatic.com/media/98f738_8b3f1a1e77e9492fa991395bc326863f~mv2.png/v1/fill/w_400,h_400,al_c,q_85,usm_0.66_1.00_0.01/98f738_8b3f1a1e77e9492fa991395bc326863f~mv2.webp'),
            ProductListTestdataModel.getProductListTestdata(3, 'Article7', 5, 'https://static.wixstatic.com/media/98f738_8b3f1a1e77e9492fa991395bc326863f~mv2.png/v1/fill/w_400,h_400,al_c,q_85,usm_0.66_1.00_0.01/98f738_8b3f1a1e77e9492fa991395bc326863f~mv2.webp'),
            ProductListTestdataModel.getProductListTestdata(3, 'Article8', 150000, 'https://static.wixstatic.com/media/98f738_8b3f1a1e77e9492fa991395bc326863f~mv2.png/v1/fill/w_400,h_400,al_c,q_85,usm_0.66_1.00_0.01/98f738_8b3f1a1e77e9492fa991395bc326863f~mv2.webp'),
          ]
        }));
      }
      return next.handle(req);
    }));
  }

}
