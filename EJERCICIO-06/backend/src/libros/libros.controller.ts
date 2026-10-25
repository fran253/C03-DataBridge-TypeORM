import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { Libro } from './libro.entity';
import { LibrosService } from './libros.service';

@Controller('libros')
export class LibrosController {
 constructor(private readonly service: LibrosService){}

 @Get()
 findAll(): Promise<Libro[]> { 
   return this.service.findAll(); 
 }

 @Patch(':id')
 update(@Param('id', ParseIntPipe) id: number, @Body() body: { leido?: boolean }): Promise<Libro> {
   return this.service.update(id, body);
 }

 @Delete(':id')
 remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
   return this.service.remove(id);
 }
}