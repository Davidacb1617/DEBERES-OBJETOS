import { Module } from '@nestjs/common';
import { CreaturesService } from './creatures.service';
import { CreaturesController } from './creatures.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CreaturesController],
  providers: [CreaturesService, PrismaService],
  imports: [PrismaModule],
})
export class CreaturesModule {}
