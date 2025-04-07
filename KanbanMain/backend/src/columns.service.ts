import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ColumnEntity } from './entities/column.entity';

@Injectable()
export class ColumnsService {
  constructor(
    @InjectRepository(ColumnEntity)
    private readonly columnRepository: Repository<ColumnEntity>,
  ) {}

  findAll() {
    return this.columnRepository.find({ relations: ['cards'] });
  }

  create(title: string) {
    const column = this.columnRepository.create({ title });
    return this.columnRepository.save(column);
  }

  async delete(id: number) {
    const result = await this.columnRepository.delete(id);
    if (result.affected === 0) {
      throw new Error('Coluna não encontrada');
    }
    return { message: 'Coluna apagada com sucesso' };
  }
}
