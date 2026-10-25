import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Playlist } from './playlist.entity';
import { Cancion } from './cancion.entity';
import { CreateCancionDto } from './create-cancion.dto';

@Injectable()
export class PlaylistsService {
  constructor(
    @InjectRepository(Playlist)
    private playlistRepository: Repository<Playlist>,
    @InjectRepository(Cancion)
    private cancionRepository: Repository<Cancion>,
  ) {}

  async findOne(id: number): Promise<Playlist> {
    const playlist = await this.playlistRepository.findOne({
      where: { id },
      relations: { canciones: true },
    });
    if (!playlist) throw new NotFoundException('Playlist no encontrada');
    return playlist;
  }

  async addCancion(dto: CreateCancionDto): Promise<Playlist> {
    const playlist = await this.findOne(dto.playlistId);

    const cancion = this.cancionRepository.create({
      titulo: dto.titulo,
      artista: dto.artista,
      playlist: playlist,
    });

    await this.cancionRepository.save(cancion);
    return this.findOne(dto.playlistId);
  }
}