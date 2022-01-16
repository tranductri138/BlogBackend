import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import {  NodeT, printLinkedList } from './dto/linkedlist-dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostService {
  create(createPostDto: CreatePostDto) {
    return 'This action adds a new post';
  }

  findAll() {
    return `This action returns all post`;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
  linkedList(){
    let n1 = new NodeT(1);
    let n2 = new NodeT(2);
    let n3 = new NodeT(3);
    let n4 = new NodeT(13);

    
    
    n1.next = n4;
    n2.next = n3;
    n4.next = n3;

    printLinkedList(n1)
    // printLinkedList(n2)
    // printLinkedList(n3)
  }
}
