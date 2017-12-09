import { Component, OnInit } from '@angular/core'
import { DienThoaiService } from '../service/dienthoai.service'
import { ActivatedRoute, Router } from '@angular/router'


@Component({
    selector: 'dienthoai-detail',
    templateUrl: './dienthoai-detail.component.html'
})

export class DienThoaiDetailComponent implements OnInit {
    book = {};
    dienthoai = {};

    constructor(private router: Router, private route: ActivatedRoute, private DienThoaiService: DienThoaiService) { }

    ngOnInit(): void {
        this.getDienThoaiDetail(this.route.snapshot.params['id']);
    }


    getDienThoaiDetail(id) {
        this.DienThoaiService.getDienThoaiWithId(id).then((res) => {
            this.dienthoai = res;
            console.log(this.dienthoai);
        }, (err) => {
            console.log(err);
        });
    }


    deleteDienThoai(id) {
        this.DienThoaiService.deleteDienThoai(id).then((result) => {
            this.router.navigate(['/dienthoai']);
        }, (err) => {
            console.log(err);
        });
    }

}