import { Module } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { person} from './entities/person.entity';

@Module({
  imports: [TypeOrmModule.forFeature([person])],
  controllers: [PersonController],
  providers: [PersonService]
})
export class PersonModule {}
