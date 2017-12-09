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

    ngOnInit(){
        this.getDienThoai(this.route.snapshot.params['id']);
    }
    constructor(private route:ActivatedRoute,private router:Router,private DienThoaiService: DienThoaiService) { }

    getDienThoai(id){
        this.DienThoaiService.getDienThoaiWithId(id).then((res)=>{
            this.dienthoai=res;
            console.log(this.dienthoai);
        },(err)=>{
            console.log(err);
        });
    }

    updateDienThoai(id){
        this.DienThoaiService.updateDienThoai(id,this.dienthoai).then((result)=>{
            let id=result['_id'];
            this.router.navigate(['/dienthoai-detail',id]);
            console.log("update thanh cong"+id);
        },(err)=>{
            console.log(err);
            console.log("update loi");
        });
    }
}