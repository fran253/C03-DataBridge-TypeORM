import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { PlaylistsService } from './playlists.service';
import { CreateCancionDto } from './create-cancion.dto';

@Controller('playlists')
export class PlaylistsController {
  constructor(private readonly playlistsService: PlaylistsService) {}

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.playlistsService.findOne(id);
  }

  @Post('canciones')
  addCancion(@Body() dto: CreateCancionDto) {
    return this.playlistsService.addCancion(dto);
  }
}