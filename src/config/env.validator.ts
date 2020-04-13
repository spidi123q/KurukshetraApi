import Joi from "@hapi/joi";

const EnvValidationSchema = Joi.object({
  MONGODB_URI: Joi.string().pattern(
    new RegExp("^mongodb://((.+):(.+)@)?([^:@]+):([^:]+)/(.+?)$")
  ),
  FIREBASE_STORAGE_BUCKET: Joi.string(),
  GCP_API_KEY: Joi.string(),
  PORT: Joi.number().default(9090),
  FIREBASE_ADMIN_CONFIG: Joi.string().pattern(
    new RegExp(
      '("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(s*:)?|\b(true|false|null)\b|-?d+(?:.d*)?(?:[eE][+-]?d+)?)'
    )
  )
});


export default EnvValidationSchema;
