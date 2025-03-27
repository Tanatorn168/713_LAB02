import { S3Client } from "@aws-sdk/client-s3";

export const s3Client = new S3Client({
    credentials: {
        accessKeyId: "1c705bf1c2c5333db6c1955568825e60",
        secretAccessKey: "191c1f58cfb4b4c6cfa11ee6be9d2ab9c0eebd0c627f8bb0738329c091da15d9"
    },
    endpoint: "https://pedfrqbprruahqnceswe.supabase.co/storage/v1/s3",
    region: "ap-southeast-1",
    forcePathStyle: true
});