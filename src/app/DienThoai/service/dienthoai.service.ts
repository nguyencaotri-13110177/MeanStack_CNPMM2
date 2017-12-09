import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import 'rxjs/add/operator/map';
// import { resolve } from 'dns';

@Injectable()

export class DienThoaiService {
    constructor(private http: Http) { }

    // Lấy danh sách tất cả điện thoại
    getAllDienThoai() {
        return new Promise((resolve, reject) => {
            this.http.get('/dienthoai')
                .map(res => res.json())
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                })
        });
    }
    // Lấy điện thoại theo ID
    getDienThoaiWithId(id) {
        return new Promise((resolve, reject) => {
            this.http.get('/dienthoai/' + id)
                .map(res => res.json())
                .subscribe(res => {
                    resolve(res)
                }, (err) => {
                    reject(err);
                })
        });
    }

    // Lấy danh sách điện thoại theo hãng
    getListDienThoaiByCarrier(hang) {
        return new Promise((resolve, reject) => {
            this.http.get('/dienthoai/hang/' + hang)
                .map(res => res.json())
                .subscribe(res => {
                    resolve(res)
                }, (err) => {
                    reject(err);
                })
        });
    }

    //Tìm điện thoại theo text sử dụng chức năng SerchText (TextIndexes) 
    // trong MongoDB để tìm nội dung bênh trong chuỗi
    searchDienThoaiByText(text) {
        return new Promise((resolve, reject) => {
            this.http.get('/dienthoai/search/' + text)
                .map(res => res.json())
                .subscribe(res => {
                    resolve(res)
                }, (err) => {
                    reject(err);
                })
        });
    }



    // Tạo điện thoại mới
    saveDienThoai(data) {
        return new Promise((resolve, reject) => {
            this.http.post('/dienthoai', data)
                .map(res => res.json())
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                })
        });
    }


    updateDienThoai(id, data) {
        return new Promise((resolve, reject) => {
            this.http.put('/dienthoai/' + id, data)
                .map(res => res.json())
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                })
        });
    }


    // Xóa điện thoại theo ID
    deleteDienThoai(id) {
        return new Promise((resolve, reject) => {
            this.http.delete('/dienthoai/' + id)
                .map(res => res.json())
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                })
        });
    }

    getAllHangDienThoai() {
        return new Promise((resolve, reject) => {
            this.http.get('/hangdienthoai')
                .map(res => res.json())
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                })
        });
    }
}