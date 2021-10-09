import { NotFoundException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { CreateRecordDTO } from "./dtos/create-record.dto";
import { UpdateRecordDTO } from "./dtos/update-record.dto";
import { Record } from "./records.entity";
import { RecordsModule } from "./records.module";

@EntityRepository(Record)
export class RecordsRepository extends Repository<Record>{
    
    getAllRecords(){
       return this.createQueryBuilder('record').getMany();
    }

    getRecordById(id){
        return this.findOne(id);
    }

    createRecord(createRecordDTO: CreateRecordDTO){
        const {patientname, consultationdate, weight, temperature, bloodpressure, conduct, diagnosis, priority} = createRecordDTO;
        let record = this.create({
            patientname, 
            consultationdate, 
            weight, 
            temperature, 
            bloodpressure, 
            conduct, 
            diagnosis, 
            priority
        })
        return this.save(record);
    }

    async updateRecord(id, updateRecordDTO: UpdateRecordDTO){
        const {patientname, consultationdate, weight, temperature, bloodpressure, conduct, diagnosis, priority} = updateRecordDTO;

        const record = await this.getRecordById(id);
        
        if(!record)
            throw new NotFoundException();
            
            record.patientname = patientname;
            record.consultationdate = consultationdate;
            record.weight = weight;
            record.temperature = temperature; 
            record.bloodpressure = bloodpressure;
            record.conduct = conduct;
            record.diagnosis = diagnosis; 
            record.priority = priority;

    
        return this.save(record);
    }

    deleteRecord(id) {
        return this.delete(id);
    }
}