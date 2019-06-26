import {S3} from 'aws-sdk'
import kebabCase from 'lodash/kebabCase';

const s3 = () => new S3({ region: process.env.AWS_REGION })

export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a + b;
};

export const readFromS3 = async (bucket: string, key: string) =>
  await s3()
    .getObject({
      Bucket: bucket,
      Key: key,
    })
    .promise()


export const KebabLogger = (msg: string) => {
  console.log(kebabCase(msg));
};
