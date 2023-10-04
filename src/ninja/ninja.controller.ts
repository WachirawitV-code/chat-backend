import { Body, Controller, Delete, Get, Post, Param } from '@nestjs/common';
import { NinjaService } from './ninja.service';

@Controller('ninja')
export class NinjaController {
    constructor(private ninjaService:NinjaService){}
    @Get()
    getNinja(){
        return this.ninjaService.getAnswer();
    }

    // @Post()
    // postNinja(@Body("title") title:string, @Body("subtitle") subtitle:string){
    //     this.ninjaService.addNinja(title,subtitle)
    // }

    // @Delete("/:id")
    // deleteNinjaById(@Param("id") id:string){
    //     console.log(`ID: ${id}`);
    //     return this.ninjaService.removeNinjaById(id)
    // }
}
