import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return {
      success:true,
      message:'llumiquinga-post-apu on line',
      data: 'Sistema Post API',
      version:'1.0.0',
    };
  }
  getMyNewEndpoint(): string {
    return 'Hello desde MyNewEndpoint!';
  }
  health(): object{
    return {
      service:'Blog Backend Api',
      version:'Online',
     };
   }
}