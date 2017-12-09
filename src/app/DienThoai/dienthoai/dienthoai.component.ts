import { Component, OnInit } from '@angular/core'
import { DienThoaiService } from '../service/dienthoai.service'

@Component({
    selector: 'dienthoai',
    templateUrl: './dienthoai.component.html'
})

export class DienThoaiComponent implements OnInit {

    dienthoai: any;

    constructor(private DienThoaiService: DienThoaiService) { }

    // Khởi tạo dữ liệu trong ngOnInit
    ngOnInit() {
        this.getDienThoaiList();
    }

    // Lấy danh sách tất cả điện thoại
    // Kết quả res được gán cho dienthoai:any và log ra console
    // Nếu xảy ra lỗi log console err
    getDienThoaiList() {
        this.DienThoaiService.getAllDienThoai().then((res) => {
            this.dienthoai = res;
            console.log(this.dienthoai);
        }, (err) => {
            console.log(err);
        });
    }

    // Lấy danh sách điện thoại theo hãng
    // Kết quả được gán cho dienthoai
    getListDienThoaiByCarrier(hang) {
        this.DienThoaiService.getListDienThoaiByCarrier(hang).then((res) => {
            this.dienthoai = res;
            console.log(this.dienthoai);
        }, (err) => {
            console.log(err);
        });
    }

    // Tìm dienthoai theo text bất kỳ (theo tên, hãng, thiết kế)
    // Sử dụng tính năng text indexes trong mongoDB để tìm nội dung bênh trong chuỗi
    searchDienThoaiByText(text) {
        this.DienThoaiService.searchDienThoaiByText(text).then((res) => {
            this.dienthoai = res;
            console.log(this.dienthoai);
        }, (err) => {
            console.log(err);
        });
    }
}