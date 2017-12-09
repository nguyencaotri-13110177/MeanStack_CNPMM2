import {Component} from '@angular/core'
import {DienThoaiService} from '../service/dienthoai.service'
import {Router} from '@angular/router'

@Component({
    selector:'dienthoai-create',
    templateUrl:'./dienthoai-create.component.html'
})

export class DienThoaiCreateComponent{
    dienthoai = {};
    hangdienthoai={};
    
      constructor(private dienthoaiService: DienThoaiService, private router: Router) { }
    
      ngOnInit() {
        this.getAllHangDienThoai();
      }
    
      saveDienThoai() {
        this.dienthoaiService.saveDienThoai(this.dienthoai).then((result) => {
          let id = result['_id'];
          this.router.navigate(['/dienthoai-detail', id]);
          console.log(id);
        }, (err) => {
          console.log(err);
        });
      }

      getAllHangDienThoai() {
        this.dienthoaiService.getAllHangDienThoai().then((res) => {
            this.hangdienthoai = res;
            console.log(this.hangdienthoai);
        }, (err) => {
            console.log(err);
        });
    }
}