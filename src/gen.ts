import { codegen } from 'swagger-axios-codegen';
codegen({
  serviceNameSuffix: 'API',
  enumNamePrefix: 'Enum',
  methodNameMode: 'operationId',
  fileName: 'index.ts',
  useStaticMethod: true,
  useCustomerRequestInstance: false,
  strictNullChecks: true,
  useClassTransformer: false,
  source: require('../swagger.json'),
  outputDir: './src/client/',
});
