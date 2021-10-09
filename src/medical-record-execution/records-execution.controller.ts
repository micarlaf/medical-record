import { Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { RecordsExecutionService } from './records-execution.service';

@Controller('records-execution')
@UseGuards(AuthGuard('jwt'))
export class RecordsExecutionController {
    
    constructor(private recordsExecutionService: RecordsExecutionService){};
    
    @Post('/records/:id')
    startExecutionRecord(
        @Param('id') id,
        @GetUser() user: User
    ){
        return this.recordsExecutionService.executeRecord(id, user);
    }

    @Post('/records/:id/finish')
    finishExecutionRecord(
        @Param('id') id,
        @GetUser() user: User
    ){
        return this.recordsExecutionService.finishRecord(id, user);
    }
    @Get('/records/user/')
    getUserExecutions(
        @GetUser() user: User
    ){
        return this.recordsExecutionService.getAllByUser(user);
    }
}
