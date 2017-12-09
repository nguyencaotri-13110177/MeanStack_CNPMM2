import { Component, OnInit } from '@angular/core'
import { DienThoaiService } from '../service/dienthoai.service'

@Component({
    selector: 'dienthoai',
    templateUrl: './dienthoai.component.html'
})

export class DienThoaiComponent implements OnInit {

    dienthoai: any;

    constructor(private DienThoaiService: DienThoaiService) { }

    ngOnInit() {
        this.getDienThoaiList();
    }

    getDienThoaiList() {
        this.DienThoaiService.getAllDienThoai().then((res) => {
            this.dienthoai = res;
            console.log(this.dienthoai);
        }, (err) => {
            console.log(err);
        });
    }

    getListDienThoaiByCarrier(hang) {
        this.DienThoaiService.getListDienThoaiByCarrier(hang).then((res) => {
            this.dienthoai = res;
            console.log(this.dienthoai);
        }, (err) => {
            console.log(err);
        });
    }

    searchDienThoaiByText(text) {
        this.DienThoaiService.searchDienThoaiByText(text).then((res) => {
            this.dienthoai = res;
            console.log(this.dienthoai);
        }, (err) => {
            console.log(err);
        });
    }
}