import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { identity } from 'rxjs';
import { CreateRecordDTO } from './dtos/create-record.dto';
import { UpdateRecordDTO } from './dtos/update-record.dto';
import { RecordsService} from './records.service';

@Controller('records')
@UseGuards(AuthGuard())
export class RecordsController {

    constructor(private recordsService: RecordsService){}    
    
    @Get()
    getAllRecords(){
        return this.recordsService.getAllRecords();
    }

    @Get("/:id")
    getRecordById(@Param('id') id){
        return this.recordsService.getRecordById(id);
    }

    @Post()
    createRecord(@Body() createRecordDTO: CreateRecordDTO){
        return this.recordsService.createRecord(createRecordDTO);
    }

    @Put("/:id")
    updateRecord(@Param('id') id, @Body() updateRecordDTO: UpdateRecordDTO){
        return this.recordsService.updateRecord(id, updateRecordDTO);
    }

    @Delete("/:id")
    deleteRecord(@Param('id') id){
        return this.recordsService.deleteRecord(id);
    }

}
