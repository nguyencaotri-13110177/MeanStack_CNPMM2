import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import 'rxjs/add/operator/map';
// import { resolve } from 'dns';

@Injectable()

export class DienThoaiService{
    constructor(private http:Http){}


    getAllDienThoai(){
        return new Promise((resolve,reject)=>{
            this.http.get('/dienthoai')
            .map(res=>res.json())
            .subscribe(res=>{
                resolve(res);
            },(err)=>{
                reject(err);
            })
        });
    }

    getDienThoaiWithId(id){
        return new Promise((resolve,reject)=>{
            this.http.get('/dienthoai/'+id)
            .map(res=>res.json())
            .subscribe(res=>{
                resolve(res)
            },(err)=>{
                reject(err);
            })
        });
    }

    getListDienThoaiByCarrier(hang){
        return new Promise((resolve,reject)=>{
            this.http.get('/dienthoai/hang/'+hang)
            .map(res=>res.json())
            .subscribe(res=>{
                resolve(res)
            },(err)=>{
                reject(err);
            })
        });
    }

    


    saveDienThoai(data){
        return new Promise((resolve,reject)=>{
            this.http.post('/dienthoai',data)
            .map(res=>res.json())
            .subscribe(res=>{
                resolve(res);
            },(err)=>{
                reject(err);
            })
        });
    }


    updateDienThoai(id,data){
        return new Promise((resolve,reject)=>{
            this.http.put('/dienthoai/'+id,data)
            .map(res=>res.json())
            .subscribe(res=>{
                resolve(res);
            },(err)=>{
                reject(err);
            })
        });
    }



    deleteDienThoai(id){
        return new Promise((resolve,reject)=>{
            this.http.delete('/dienthoai/'+id)
            .map(res=>res.json())
            .subscribe(res=>{
                resolve(res);
            },(err)=>{
                reject(err);
            })
        });
    }

    getAllHangDienThoai(){
        return new Promise((resolve,reject)=>{
            this.http.get('/hangdienthoai')
            .map(res=>res.json())
            .subscribe(res=>{
                resolve(res);
            },(err)=>{
                reject(err);
            })
        });
    }
}