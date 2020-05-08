import { Component, OnInit } from "@angular/core";
import { Post } from "../post.model";
import { NgForm } from "@angular/forms";
import { PostService } from "../posts.service";
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html",
  styleUrls: ["./post-create.component.css"],
})
export class PostCreateComponent implements OnInit {
  private mode = "create";
  private postId: string;
  post: Post;
  constructor(private postService: PostService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("postId")) {
        this.mode = "edit";
        this.postId = paramMap.get("postId");
        console.log(this.postId)
        this.post = this.postService.getPost(this.postId);
        console.log(this.post);
        console.log(this.mode);
      } else {
        this.mode = "create";
        this.postId = null;
      }
    });
  }
  onSavePost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    if (this.mode === "create") {
      console.log("in create");
      const post: Post = {
        id: null,
        title: form.value.title,
        content: form.value.content,
      };
      this.postService.addPost(post);
      form.resetForm();
    } else {
      this.postService.updatePost(
        this.postId,
        form.value.title,
        form.value.content
      );
    }
  }
}
