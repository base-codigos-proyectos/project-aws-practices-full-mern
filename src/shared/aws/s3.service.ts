import { S3Client, ListBucketsCommand, Bucket } from "@aws-sdk/client-s3";
import { config } from "@root/config";


export class S3Service {
  private s3Client: S3Client;

  constructor() {
    // Configuración del cliente S3
    this.s3Client = new S3Client({
      region: config.AWS_REGION,
      credentials: {
        accessKeyId: config.AWS_ACCESS_KEY_ID!,
        secretAccessKey: config.AWS_SECRET_ACCESS_KEY!,
      },
    });
  }

  // Método para listar los buckets
  async listBuckets(): Promise<Bucket[] | undefined> {
    try {
      const command = new ListBucketsCommand({});
      const response = await this.s3Client.send(command);
      console.log("Buckets disponibles:", response.Buckets);
      return response.Buckets;
    } catch (error) {
      console.error("Error al listar los buckets:", error);
      throw new Error("No se pudieron listar los buckets.");
    }
  }
}

// Crear una instancia del servicio
const s3Service = new S3Service();
export default s3Service;
