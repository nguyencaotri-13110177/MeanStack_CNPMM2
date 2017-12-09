import { Component,OnInit } from '@angular/core'
import { DienThoaiService } from '../service/dienthoai.service'
import {Router,ActivatedRoute} from '@angular/router'

@Component({
    selector: 'dienthoai-edit',
    templateUrl: './dienthoai-edit.component.html'
})

export class DienThoaiEditComponent implements OnInit {
    
    book={};
    dienthoai={};

    // Gọi hàm lấy điện thoại theo ID khi khởi tạo
    ngOnInit(){
        this.getDienThoai(this.route.snapshot.params['id']);
    }
    constructor(private route:ActivatedRoute,private router:Router,private DienThoaiService: DienThoaiService) { }

    //Lấy điện thoại theo ID
    // Kết quả gán cho dienthoai:{}
    //nếu lối conso.log err
    getDienThoai(id){
        this.DienThoaiService.getDienThoaiWithId(id).then((res)=>{
            this.dienthoai=res;
            console.log(this.dienthoai);
        },(err)=>{
            console.log(err);
        });
    }

    //Update dienthoai với ID
    // Update thanh công service trả về ID sản phẩm vừa update
    // điều hướng về component /dienthoai-detail với ID đó
    // Nếu xyar ra lỗi console.log err
    updateDienThoai(id){
        this.DienThoaiService.updateDienThoai(id,this.dienthoai).then((result)=>{
            let id=result['_id'];
            this.router.navigate(['/dienthoai-detail',id]);
        },(err)=>{
            console.log(err);
        });
    }
}