import { Column, Entity, OneToOne } from "typeorm";
import MediaUpload from "./media/mediaUpload.entity";
import { CommonField } from "./commonField.entity";

@Entity()
export class ImageEntity extends CommonField {
  @Column()
  title: string;

  @OneToOne(() => MediaUpload, (mediaUpload) => mediaUpload.uploadedImage)
  uploadedImage: MediaUpload;

 
}
