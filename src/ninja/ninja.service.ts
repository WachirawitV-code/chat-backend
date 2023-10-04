import { Injectable, NotFoundException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { GetAnswerNinja } from './model/ninja-answer';
import axios from 'axios';

@Injectable()
export class NinjaService {
  private readonly httpService: HttpService;
  //   ninjaArray: Ninja[] = [];
  ninjaAnswer: GetAnswerNinja[] = [];

  async getAnswer() {
    const TRIVIA_URL: string = 'https://api.api-ninjas.com/v1/randomword';
    const headersRequest = {
      'X-Api-Key': 'Em/Yu9c5wmQGGBgIQE8m1Q==WfwVNwQxnm4QLCMT',
    };
    const response = await axios({
      method: 'GET',
      url: TRIVIA_URL,
      headers: headersRequest,
    }).catch(() => {
      throw new NotFoundException('API not available');
    });
    return {
        word: response.data?.word,
    };
  }

  // addNinja(title:string,subtitle:string){
  //     console.log(`title: ${title}, subtitle: ${subtitle}`);
  //     const ninja = new Ninja();
  //     ninja.id = uuid();
  //     ninja.title = title;
  //     ninja.subtitle = subtitle;

  //     this.ninjaArray.push(ninja)
  // }

  // getNinjas(){
  //     return this.ninjaArray
  // }

  // removeNinjaById(id:string){
  //     const found = this.ninjaArray.find(item=>item.id===id)
  //     if(!found){
  //         throw new NotFoundException(`Ninja not found`)
  //     }
  //     this.ninjaArray = this.ninjaArray.filter((item) => {
  //       return item.id !== id;
  //     });
  //     return this.ninjaArray
  // }
}
