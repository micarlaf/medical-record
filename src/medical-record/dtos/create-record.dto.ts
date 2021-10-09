import { IsNotEmpty } from "class-validator";

export class CreateRecordDTO {
    @IsNotEmpty()
    patientname: string;
    consultationdate: string;
    weight: string;
    temperature: string;
    bloodpressure: string;
    conduct: string;
    diagnosis: string;
    priority: number;
}