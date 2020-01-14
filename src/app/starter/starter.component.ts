import { Component, AfterViewInit,OnInit } from '@angular/core';
import { ListService } from '../app.service';
import { List } from '../models/List';
import { Blog } from '../models/Blog';
import {  Output, EventEmitter } from '@angular/core';
import { HttpResponse, HttpEventType, HttpClient } from '@angular/common/http';

@Component({
  templateUrl: './starter.component.html'
})
export class StarterComponent implements AfterViewInit {
  subtitle: string;
  @Output() addList: EventEmitter<List> = new EventEmitter<List>();
  @Output() addBlog: EventEmitter<Blog> = new EventEmitter<Blog>();
  constructor(private listServ: ListService, private http : HttpClient) {
    this.subtitle = 'This is some text within a card block.';
  }
  // add new list
  selectedFile: File = null;
  selectedFile2: File;
  private newList :List;
  private newBlog :Blog;
  email_to;
  blogs;
 //lists propoerty which is an array of List type
 private lists: List[] = [];
  ngAfterViewInit() {}

  ngOnInit() {
    this.newList = {
      title:  '',
      subtitle: '',
      photo:'',
      image2:'',
      description:'',
      des1:'',
      des2:'',
      price:'',
      link:'',
      link2:''
  }
    this.newBlog = {
      title: '',
      subtitle: '',
      image1:'',
      image2:'',
      description:'',
      blogType:''
    }

    this.email_to = {
      to : '',
      text : ''
    }

    //Load all list on init
    this.getAllBlogs();
    this.loadLists();
  }

  // onFileChanged(event) {
  //   this.selectedFile = event.target.files[0]
  // }
  // onFileChanged2(event) {
  //   this.selectedFile2 = event.target.files[0]
  // }
  
  // selectedFiles: FileList;
  // currentFileUpload: File;
  // progress: { percentage: number } = { percentage: 0 };
 

 
  // selectFile(event) {
  //   this.selectedFiles = event.target.files;
  // }
 
  // onUploadFinished(file) {
  //   console.log(file);
  // }
  
  // onRemoved(file) {
  //   console.log(file);

  // }
  
  // onUploadStateChanged(state: boolean) {
  //   console.log(state);
  // }

  onFileSelected(event){
    console.log(event);
    this.selectedFile = event.target.files[0];
  }

 
  // ======== 1 ========================================================

  public onSubmit() {

    // const uploadData = new FormData();
    // uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
    // this.currentFileUpload = this.selectedFiles.item(0);
   

    // console.log('1'+uploadData);
    // console.log('2'+this.currentFileUpload);

    console.log('check'+JSON.stringify(this.newList)+'==>'+this.selectedFile.name);


    this.listServ.addList(this.newList, this.selectedFile.name).subscribe(
        response=> {

          if(response.type === HttpEventType.UploadProgress){
            console.log('Uploading progress'+Math.round(response.loaded/response.total) * 100)
          }

          else if(response.type === HttpEventType.Response){
            console.log(response);
          }
            console.log(response);
            if(response.success== true)
                this.addList.emit(this.newList);
        },
    );

}

  // ======== 2 ========================================================
  public loadLists() {

    //Get all lists from server and update the lists property
    this.listServ.getAllLists().subscribe(
        response => this.lists = response)

        console.log(JSON.stringify(this.lists));
  }

  // //deleteList. The deleted list is being filtered out using the .filter method
  // public deleteList(list: List) {
  //   this.listServ.deleteList(list._id).subscribe(
  //     response =>    this.lists = this.lists.filter(lists => lists !== list),)
  //   }

  // ======== 3 ========================================================
  public sendEmail() {
  
    this.listServ.sendmail(this.email_to).subscribe(
        response=> {
            console.log(response);
            if(response.success== true)
               alert('email sent.');
        },
    );

}

  // ======== 4 ========================================================
  public onSubmit_Blog() {
    console.log('check'+this.newBlog.title);
    this.listServ.addBlog(this.newBlog).subscribe(
        response=> {
            console.log(response);
            if(response.success== true)
                this.addBlog.emit(this.newBlog);
        },
    );

}
 // ======== 5 ========================================================
 public getAllBlogs() {

  this.listServ.getAllBlogs().subscribe(
    response => this.blogs = response)

    console.log(JSON.stringify(this.blogs));

}

}
