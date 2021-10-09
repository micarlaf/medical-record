import { ConflictException, Injectable } from '@nestjs/common';
import { User } from 'src/auth/user.entity';
import { CreateRecordDTO } from './dtos/create-record.dto';
import { UpdateRecordDTO } from './dtos/update-record.dto';
import { RecordsRepository } from './records.repository';

@Injectable()
export class RecordsService {
    constructor(private recordsRepository: RecordsRepository){}

    getAllRecords(){
        return this.recordsRepository.getAllRecords();
    }

    getRecordById(id){
        return this.recordsRepository.getRecordById(id);
    }

    getAllByUser(user: User) {
        return this.recordsRepository.find({user});
    }

    createRecord(createTaskDTO: CreateRecordDTO){
        return this.recordsRepository.createRecord(createTaskDTO);
    }

    updateRecord(id, updateTaskDTO: UpdateRecordDTO){
        return this.recordsRepository.updateRecord(id, updateTaskDTO);
    }

    deleteRecord(id) {
        return this.recordsRepository.deleteRecord(id);
    }

    async setExecutor(id, user){
        const {affected} = await this.recordsRepository.update({id: id, user: null}, {user:user});
        if(affected == 1){
            return {sucess: true}
        } else {
            throw new ConflictException("It is not possible to perform this patient record in the electronic medical record.");
        }
    }

    async finishExecutor(id, user){
        const {affected} = await this.recordsRepository.update({id: id, user: user}, {finishedAt: new Date()});
        if(affected == 1){
            return {sucess: true}
        } else {
            throw new ConflictException("It is not possible to finalize this patient record in the electronic medical record.");
        }
    }
}
