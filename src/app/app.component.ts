import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { PostService } from './post.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(private postService: PostService){}
  ngOnInit(): void {
    this.postsData()
  }
  posts:any[]=[];  
  displayedColumns: string[] = ['id', 'title', 'body'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }




  postsData(){
    this.postService.getPosts().subscribe(res => {
      console.log(res)
      this.posts = res
      this.dataSource.data = this.posts
    }, err => {
      console.log(err)
    })
  }
}