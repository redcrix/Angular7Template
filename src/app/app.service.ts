import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { List } from './models/List'
import { Blog } from './models/Blog'
import 'rxjs/add/operator/map';

@Injectable()
export class ListService {

    constructor(private http: Http) { }

    private serverApi= 'http://localhost:3000';

    public addList(list: List,selectedFile ) {
        let URI = `${this.serverApi}/testimage/`;
        let headers = new Headers;
         let body = JSON.stringify(
             {
                 title: list.title, 
                subtitle: list.subtitle, 
                photo: selectedFile, 
                description:list.description, 
                des1:list.des1, 
                des2:list.des2, 
                price:list.price, 
                link:list.link, 
                link2:list.link2, 
            
            });
         console.log(body);
        headers.append('Content-Type', 'application/json');
        return this.http.post(URI, body ,{headers: headers})
        .map(res => res.json());
    }




    public getAllLists():Observable<List[]> {

        let URI = `${this.serverApi}/getAllFeaturedProducts/`;
        return this.http.get(URI)
            .map(res => res.json())
            .map(res => <List[]>res.product);
    }
  
    public addBlog(blog: Blog) {
        let URI = `${this.serverApi}/testimage/`;
        let headers = new Headers;
         let body = JSON.stringify({title: blog.title, subtitle: blog.subtitle, image1: blog.image1, description : blog.description});
         console.log(body);
        headers.append('Content-Type', 'application/json');
        return this.http.post(URI, body ,{headers: headers})
        .map(res => res.json());
    }

    public sendmail(rec) {
        let URI = `${this.serverApi}/sendmail/`;
        let headers = new Headers;
         let body = JSON.stringify({to: rec.to, text: rec.text});
         console.log(body);
        headers.append('Content-Type', 'application/json');
        return this.http.post(URI, body ,{headers: headers})
        .map(res => res.json());
    }

    public getAllBlogs():Observable<Blog[]> {

        let URI = `${this.serverApi}/getAllBlogs/`;
        return this.http.get(URI)
            .map(res => res.json())
            .map(res => <Blog[]>res.feedbacks);
    }
}