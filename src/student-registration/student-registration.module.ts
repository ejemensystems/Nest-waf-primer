import { Module } from '@nestjs/common';
import { CitizenModule } from './citizen/citizen.module';
import { PersonModule } from './person/person.module';

@Module({
  imports: [CitizenModule, PersonModule]
})
export class StudentRegistrationModule {}
