import { Injectable } from '@nestjs/common';
import { User } from 'src/auth/user.entity';
import { RecordsService } from 'src/medical-record/records.service';

@Injectable()
export class RecordsExecutionService {
  
    constructor (private recordService: RecordsService){}
 
    async executeRecord(id, user){
        return this.recordService.setExecutor(id, user);
    }

    async finishRecord(id, user){
        return this.recordService.finishExecutor(id, user);
    }

    getAllByUser(user: User){
        return this.recordService.getAllByUser(user);
    }
}
