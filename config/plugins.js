module.exports = ({ env }) => {
    if (env('NODE_ENV') === 'production') {
      return {
        upload: {
          config: {
            provider: '@strapi-community/strapi-provider-upload-google-cloud-storage',
            providerOptions: {
              bucketName: env('BUCKET_NAME'),
              publicFiles: true,
              uniform: true,
              basePath: '',
            },
          },
        }
      }
    } else {
      return {
        upload: {
            config: {
              provider: '@strapi-community/strapi-provider-upload-google-cloud-storage',
              providerOptions: {
                bucketName: 'funerariapp',
                publicFiles: true,
                uniform: true,
                serviceAccount: {
                    "type": "service_account",
                    "project_id": "funerariapp-405020",
                    "private_key_id": "bcd0b16cfaa054a868dfdf3b0d82086b1367ad2c",
                    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC0j3OjD7Al5qVn\nSyzfT9kmLW+HV9zhpwcZmNzZUCfLCxn89jig6j3ejvJM4UflxL63WtEEZy7m6w6w\nWRkQj6zkRoeAn821nVeg4fdaP10bNDMKVtAMTNEk8ve0o3mkCU8gTlcxji8g/c6Y\nLvPBmHFeJlXqKJm1cE6uJ53/xv8nhoPX0XIXu8V++w0YuN/lRZzM77mPp5tzTj21\nwLsYmbBQW5lyo/IvZcP6D6VwpkjtxFTTfmIKYgpiOhuHsPbz70vXQL/UTWUJL/Y/\nTEO5laWrNpbvlZ3UOPPbxhd91mdJwjALf/wAsTkkDxtsAQZ63QRkCpn4G74nFDh5\nBXoM8lhfAgMBAAECggEACe01C0rqgTrr7wDYB7LpGks3LXasIw++uS6JPb1FYslK\ndXjH5jjai+jJ82YTQNOPNJ9ejGJr1rAnj5RmZ12uwKIMAwtGEO0Ei0jBA4omQT+e\narwZFgQHH4PoEFtIbbdBTWJhMs1BVAwAFqfGKOeLnAR5hrUStkHlYXe2HQDAuFh6\nAPvF/qK7bEDLyc7meWpIz0Us1T+QM6aLY55j3sO4dxtQIxkJ5MFl4XMoehof+w/X\nu+2t9MZ8po7JBksVFAQCX2n9pe9DVrJBvNxFMQ7K63tD79rbsJsw3LPCFmlJ6VlD\nYWNI1CKfTh8vAVBb0DRHXY4aZgbo1L5DKq/l6oxC6QKBgQD1L3Qztejsx/V+tv3e\nPlDSechwo4vI4FhmQzmny+0WdOGz4Mv65J2dzd7So2lAYcWJf+MUwchU8Y1NnEY/\nPAVxLa1LeaqanjqXnzWpjy5tRBZK9do5Oh/AteQ8VYs1KN8YQpXlsbiWIzq52LdR\nLmOvgyyF86G7iwTp8I85/iDM7QKBgQC8hkZwBLGpQNjKYK/Uy8c65xWoGg0VNJ8V\nmy9c08XhEEiRxTOfoPJzarawv9Z/5plYvHMqb5ORaeTk3SC56f+15gPs3QW/H5nl\nHkahLSzjZ8ChlaJqQMtvjLipMiSpqdzcDhJbskUOqkDwfxVVexPUNxdZbQsJhrzS\naLJ1mW2c+wKBgQDoLG6CBREzHsqGmmvdxu6r0GyQ1R2qM18iPyhaj43LxRRxTD58\nL35djzQgDGO/dpYi9TooTrQQU8g1pPUULhcNLG68WNLHpWvgZf/ft1kEWQQvKY3i\nwPqOdu9QfsTaqwBPLcZaAqfDbErQ77nvotj8u18u3RzaxfL6QDSwese+pQKBgGKa\nBBswiU9RyFFI8o3kquYm2M/cGD2gERh22vW9GYDWSG5datuxjT1KchTNsT2h+VBM\n+BsY0mC6tunwsd4rAgA8No9bJldJCu+nvx8rho/Fwx2AKrtR+lT0j9yGimBmpEo/\n3eAxxCaga2idvyW/Qqa6za6K9rvbycRu1+/j+E2jAoGAWtjMzmC2ObgGsR+Sm4VB\n425jbQ34fSEmKbTSMGDUWkofMFRcsyN1qXStkqfUq/9yEAITS5IJ665b9jQ4Wb5K\nQvrpXJFmJmdsgBiN0zMmfZ7zgm/XZlscohFsncdsoh2IF/S0zxofyfw6YQJXjYeT\nqpLZFuglCXRy144PEGl4VPc=\n-----END PRIVATE KEY-----\n",
                    "client_email": "funeapp@funerariapp-405020.iam.gserviceaccount.com",
                    "client_id": "117850639650650812250",
                    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
                    "token_uri": "https://oauth2.googleapis.com/token",
                    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
                    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/funeapp%40funerariapp-405020.iam.gserviceaccount.com",
                    "universe_domain": "googleapis.com"
                  }, // replace `{}` with your serviceAccount JSON object
                baseUrl: 'https://storage.googleapis.com/{bucket-name}',
                basePath: '',
              },
            },
          },
      }
    }
    //...
  }