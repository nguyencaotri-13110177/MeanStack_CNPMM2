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
    
      // gọi hàm Lấy tất cả hãng điện thoai khi khởi tạo
      ngOnInit() {
        this.getAllHangDienThoai();
      }
    
      // Hàm tạo mới điện thoại
      // Khi tạo mới thanh công service trả về ID của sản phẩm mới tạo
      // tiếp tục điều hướng component dienthoai-detail với id đó
      saveDienThoai() {
        this.dienthoaiService.saveDienThoai(this.dienthoai).then((result) => {
          let id = result['_id'];
          this.router.navigate(['/dienthoai-detail', id]);
          console.log(id);
        }, (err) => {
          console.log(err);
        });
      }

      //Lấy danh sách tất cả hãng điện thoại
      // Kết quả gán cho hangdienthoai:any
      getAllHangDienThoai() {
        this.dienthoaiService.getAllHangDienThoai().then((res) => {
            this.hangdienthoai = res;
            console.log(this.hangdienthoai);
        }, (err) => {
            console.log(err);
        });
    }
}