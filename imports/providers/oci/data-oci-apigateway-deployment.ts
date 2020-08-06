// https://www.terraform.io/docs/providers/oci/r/data_oci_apigateway_deployment.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compartment_id": {
        "type": "string",
        "computed": true
      },
      "defined_tags": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "deployment_id": {
        "type": "string",
        "required": true
      },
      "display_name": {
        "type": "string",
        "computed": true
      },
      "endpoint": {
        "type": "string",
        "computed": true
      },
      "freeform_tags": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "gateway_id": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "computed": true
      },
      "lifecycle_details": {
        "type": "string",
        "computed": true
      },
      "path_prefix": {
        "type": "string",
        "computed": true
      },
      "specification": {
        "type": [
          "list",
          [
            "object",
            {
              "logging_policies": [
                "list",
                [
                  "object",
                  {
                    "access_log": [
                      "list",
                      [
                        "object",
                        {
                          "is_enabled": "bool"
                        }
                      ]
                    ],
                    "execution_log": [
                      "list",
                      [
                        "object",
                        {
                          "is_enabled": "bool",
                          "log_level": "string"
                        }
                      ]
                    ]
                  }
                ]
              ],
              "request_policies": [
                "list",
                [
                  "object",
                  {
                    "authentication": [
                      "list",
                      [
                        "object",
                        {
                          "audiences": [
                            "list",
                            "string"
                          ],
                          "function_id": "string",
                          "is_anonymous_access_allowed": "bool",
                          "issuers": [
                            "list",
                            "string"
                          ],
                          "max_clock_skew_in_seconds": "number",
                          "public_keys": [
                            "list",
                            [
                              "object",
                              {
                                "is_ssl_verify_disabled": "bool",
                                "keys": [
                                  "list",
                                  [
                                    "object",
                                    {
                                      "alg": "string",
                                      "e": "string",
                                      "format": "string",
                                      "key": "string",
                                      "key_ops": [
                                        "list",
                                        "string"
                                      ],
                                      "kid": "string",
                                      "kty": "string",
                                      "n": "string",
                                      "use": "string"
                                    }
                                  ]
                                ],
                                "max_cache_duration_in_hours": "number",
                                "type": "string",
                                "uri": "string"
                              }
                            ]
                          ],
                          "token_auth_scheme": "string",
                          "token_header": "string",
                          "token_query_param": "string",
                          "type": "string",
                          "verify_claims": [
                            "list",
                            [
                              "object",
                              {
                                "is_required": "bool",
                                "key": "string",
                                "values": [
                                  "list",
                                  "string"
                                ]
                              }
                            ]
                          ]
                        }
                      ]
                    ],
                    "cors": [
                      "list",
                      [
                        "object",
                        {
                          "allowed_headers": [
                            "list",
                            "string"
                          ],
                          "allowed_methods": [
                            "list",
                            "string"
                          ],
                          "allowed_origins": [
                            "list",
                            "string"
                          ],
                          "exposed_headers": [
                            "list",
                            "string"
                          ],
                          "is_allow_credentials_enabled": "bool",
                          "max_age_in_seconds": "number"
                        }
                      ]
                    ],
                    "rate_limiting": [
                      "list",
                      [
                        "object",
                        {
                          "rate_in_requests_per_second": "number",
                          "rate_key": "string"
                        }
                      ]
                    ]
                  }
                ]
              ],
              "routes": [
                "list",
                [
                  "object",
                  {
                    "backend": [
                      "list",
                      [
                        "object",
                        {
                          "body": "string",
                          "connect_timeout_in_seconds": "number",
                          "function_id": "string",
                          "headers": [
                            "list",
                            [
                              "object",
                              {
                                "name": "string",
                                "value": "string"
                              }
                            ]
                          ],
                          "is_ssl_verify_disabled": "bool",
                          "read_timeout_in_seconds": "number",
                          "send_timeout_in_seconds": "number",
                          "status": "number",
                          "type": "string",
                          "url": "string"
                        }
                      ]
                    ],
                    "logging_policies": [
                      "list",
                      [
                        "object",
                        {
                          "access_log": [
                            "list",
                            [
                              "object",
                              {
                                "is_enabled": "bool"
                              }
                            ]
                          ],
                          "execution_log": [
                            "list",
                            [
                              "object",
                              {
                                "is_enabled": "bool",
                                "log_level": "string"
                              }
                            ]
                          ]
                        }
                      ]
                    ],
                    "methods": [
                      "list",
                      "string"
                    ],
                    "path": "string",
                    "request_policies": [
                      "list",
                      [
                        "object",
                        {
                          "authorization": [
                            "list",
                            [
                              "object",
                              {
                                "allowed_scope": [
                                  "list",
                                  "string"
                                ],
                                "type": "string"
                              }
                            ]
                          ],
                          "cors": [
                            "list",
                            [
                              "object",
                              {
                                "allowed_headers": [
                                  "list",
                                  "string"
                                ],
                                "allowed_methods": [
                                  "list",
                                  "string"
                                ],
                                "allowed_origins": [
                                  "list",
                                  "string"
                                ],
                                "exposed_headers": [
                                  "list",
                                  "string"
                                ],
                                "is_allow_credentials_enabled": "bool",
                                "max_age_in_seconds": "number"
                              }
                            ]
                          ]
                        }
                      ]
                    ]
                  }
                ]
              ]
            }
          ]
        ],
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "time_updated": {
        "type": "string",
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { StringMap } from "cdktf";
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataOciApigatewayDeploymentConfig extends TerraformMetaArguments {
  readonly deploymentId: string;
}
export class DataOciApigatewayDeploymentSpecificationLoggingPoliciesAccessLog extends ComplexComputedList {

  // is_enabled - computed: true, optional: false, required: true
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
}
export class DataOciApigatewayDeploymentSpecificationLoggingPoliciesExecutionLog extends ComplexComputedList {

  // is_enabled - computed: true, optional: false, required: true
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // log_level - computed: true, optional: false, required: true
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
}
export class DataOciApigatewayDeploymentSpecificationLoggingPolicies extends ComplexComputedList {

  // access_log - computed: true, optional: false, required: true
  public get accessLog() {
    return 'not implemented' as any;
  }

  // execution_log - computed: true, optional: false, required: true
  public get executionLog() {
    return 'not implemented' as any;
  }
}
export class DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeysKeys extends ComplexComputedList {

  // alg - computed: true, optional: false, required: true
  public get alg() {
    return this.getStringAttribute('alg');
  }

  // e - computed: true, optional: false, required: true
  public get e() {
    return this.getStringAttribute('e');
  }

  // format - computed: true, optional: false, required: true
  public get format() {
    return this.getStringAttribute('format');
  }

  // key - computed: true, optional: false, required: true
  public get key() {
    return this.getStringAttribute('key');
  }

  // key_ops - computed: true, optional: false, required: true
  public get keyOps() {
    return this.getListAttribute('key_ops');
  }

  // kid - computed: true, optional: false, required: true
  public get kid() {
    return this.getStringAttribute('kid');
  }

  // kty - computed: true, optional: false, required: true
  public get kty() {
    return this.getStringAttribute('kty');
  }

  // n - computed: true, optional: false, required: true
  public get n() {
    return this.getStringAttribute('n');
  }

  // use - computed: true, optional: false, required: true
  public get use() {
    return this.getStringAttribute('use');
  }
}
export class DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeys extends ComplexComputedList {

  // is_ssl_verify_disabled - computed: true, optional: false, required: true
  public get isSslVerifyDisabled() {
    return this.getBooleanAttribute('is_ssl_verify_disabled');
  }

  // keys - computed: true, optional: false, required: true
  public get keys() {
    return 'not implemented' as any;
  }

  // max_cache_duration_in_hours - computed: true, optional: false, required: true
  public get maxCacheDurationInHours() {
    return this.getNumberAttribute('max_cache_duration_in_hours');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }

  // uri - computed: true, optional: false, required: true
  public get uri() {
    return this.getStringAttribute('uri');
  }
}
export class DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationVerifyClaims extends ComplexComputedList {

  // is_required - computed: true, optional: false, required: true
  public get isRequired() {
    return this.getBooleanAttribute('is_required');
  }

  // key - computed: true, optional: false, required: true
  public get key() {
    return this.getStringAttribute('key');
  }

  // values - computed: true, optional: false, required: true
  public get values() {
    return this.getListAttribute('values');
  }
}
export class DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthentication extends ComplexComputedList {

  // audiences - computed: true, optional: false, required: true
  public get audiences() {
    return this.getListAttribute('audiences');
  }

  // function_id - computed: true, optional: false, required: true
  public get functionId() {
    return this.getStringAttribute('function_id');
  }

  // is_anonymous_access_allowed - computed: true, optional: false, required: true
  public get isAnonymousAccessAllowed() {
    return this.getBooleanAttribute('is_anonymous_access_allowed');
  }

  // issuers - computed: true, optional: false, required: true
  public get issuers() {
    return this.getListAttribute('issuers');
  }

  // max_clock_skew_in_seconds - computed: true, optional: false, required: true
  public get maxClockSkewInSeconds() {
    return this.getNumberAttribute('max_clock_skew_in_seconds');
  }

  // public_keys - computed: true, optional: false, required: true
  public get publicKeys() {
    return 'not implemented' as any;
  }

  // token_auth_scheme - computed: true, optional: false, required: true
  public get tokenAuthScheme() {
    return this.getStringAttribute('token_auth_scheme');
  }

  // token_header - computed: true, optional: false, required: true
  public get tokenHeader() {
    return this.getStringAttribute('token_header');
  }

  // token_query_param - computed: true, optional: false, required: true
  public get tokenQueryParam() {
    return this.getStringAttribute('token_query_param');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }

  // verify_claims - computed: true, optional: false, required: true
  public get verifyClaims() {
    return 'not implemented' as any;
  }
}
export class DataOciApigatewayDeploymentSpecificationRequestPoliciesCors extends ComplexComputedList {

  // allowed_headers - computed: true, optional: false, required: true
  public get allowedHeaders() {
    return this.getListAttribute('allowed_headers');
  }

  // allowed_methods - computed: true, optional: false, required: true
  public get allowedMethods() {
    return this.getListAttribute('allowed_methods');
  }

  // allowed_origins - computed: true, optional: false, required: true
  public get allowedOrigins() {
    return this.getListAttribute('allowed_origins');
  }

  // exposed_headers - computed: true, optional: false, required: true
  public get exposedHeaders() {
    return this.getListAttribute('exposed_headers');
  }

  // is_allow_credentials_enabled - computed: true, optional: false, required: true
  public get isAllowCredentialsEnabled() {
    return this.getBooleanAttribute('is_allow_credentials_enabled');
  }

  // max_age_in_seconds - computed: true, optional: false, required: true
  public get maxAgeInSeconds() {
    return this.getNumberAttribute('max_age_in_seconds');
  }
}
export class DataOciApigatewayDeploymentSpecificationRequestPoliciesRateLimiting extends ComplexComputedList {

  // rate_in_requests_per_second - computed: true, optional: false, required: true
  public get rateInRequestsPerSecond() {
    return this.getNumberAttribute('rate_in_requests_per_second');
  }

  // rate_key - computed: true, optional: false, required: true
  public get rateKey() {
    return this.getStringAttribute('rate_key');
  }
}
export class DataOciApigatewayDeploymentSpecificationRequestPolicies extends ComplexComputedList {

  // authentication - computed: true, optional: false, required: true
  public get authentication() {
    return 'not implemented' as any;
  }

  // cors - computed: true, optional: false, required: true
  public get cors() {
    return 'not implemented' as any;
  }

  // rate_limiting - computed: true, optional: false, required: true
  public get rateLimiting() {
    return 'not implemented' as any;
  }
}
export class DataOciApigatewayDeploymentSpecificationRoutesBackendHeaders extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: true
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataOciApigatewayDeploymentSpecificationRoutesBackend extends ComplexComputedList {

  // body - computed: true, optional: false, required: true
  public get body() {
    return this.getStringAttribute('body');
  }

  // connect_timeout_in_seconds - computed: true, optional: false, required: true
  public get connectTimeoutInSeconds() {
    return this.getNumberAttribute('connect_timeout_in_seconds');
  }

  // function_id - computed: true, optional: false, required: true
  public get functionId() {
    return this.getStringAttribute('function_id');
  }

  // headers - computed: true, optional: false, required: true
  public get headers() {
    return 'not implemented' as any;
  }

  // is_ssl_verify_disabled - computed: true, optional: false, required: true
  public get isSslVerifyDisabled() {
    return this.getBooleanAttribute('is_ssl_verify_disabled');
  }

  // read_timeout_in_seconds - computed: true, optional: false, required: true
  public get readTimeoutInSeconds() {
    return this.getNumberAttribute('read_timeout_in_seconds');
  }

  // send_timeout_in_seconds - computed: true, optional: false, required: true
  public get sendTimeoutInSeconds() {
    return this.getNumberAttribute('send_timeout_in_seconds');
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getNumberAttribute('status');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }

  // url - computed: true, optional: false, required: true
  public get url() {
    return this.getStringAttribute('url');
  }
}
export class DataOciApigatewayDeploymentSpecificationRoutesLoggingPoliciesAccessLog extends ComplexComputedList {

  // is_enabled - computed: true, optional: false, required: true
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
}
export class DataOciApigatewayDeploymentSpecificationRoutesLoggingPoliciesExecutionLog extends ComplexComputedList {

  // is_enabled - computed: true, optional: false, required: true
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // log_level - computed: true, optional: false, required: true
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
}
export class DataOciApigatewayDeploymentSpecificationRoutesLoggingPolicies extends ComplexComputedList {

  // access_log - computed: true, optional: false, required: true
  public get accessLog() {
    return 'not implemented' as any;
  }

  // execution_log - computed: true, optional: false, required: true
  public get executionLog() {
    return 'not implemented' as any;
  }
}
export class DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesAuthorization extends ComplexComputedList {

  // allowed_scope - computed: true, optional: false, required: true
  public get allowedScope() {
    return this.getListAttribute('allowed_scope');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesCors extends ComplexComputedList {

  // allowed_headers - computed: true, optional: false, required: true
  public get allowedHeaders() {
    return this.getListAttribute('allowed_headers');
  }

  // allowed_methods - computed: true, optional: false, required: true
  public get allowedMethods() {
    return this.getListAttribute('allowed_methods');
  }

  // allowed_origins - computed: true, optional: false, required: true
  public get allowedOrigins() {
    return this.getListAttribute('allowed_origins');
  }

  // exposed_headers - computed: true, optional: false, required: true
  public get exposedHeaders() {
    return this.getListAttribute('exposed_headers');
  }

  // is_allow_credentials_enabled - computed: true, optional: false, required: true
  public get isAllowCredentialsEnabled() {
    return this.getBooleanAttribute('is_allow_credentials_enabled');
  }

  // max_age_in_seconds - computed: true, optional: false, required: true
  public get maxAgeInSeconds() {
    return this.getNumberAttribute('max_age_in_seconds');
  }
}
export class DataOciApigatewayDeploymentSpecificationRoutesRequestPolicies extends ComplexComputedList {

  // authorization - computed: true, optional: false, required: true
  public get authorization() {
    return 'not implemented' as any;
  }

  // cors - computed: true, optional: false, required: true
  public get cors() {
    return 'not implemented' as any;
  }
}
export class DataOciApigatewayDeploymentSpecificationRoutes extends ComplexComputedList {

  // backend - computed: true, optional: false, required: true
  public get backend() {
    return 'not implemented' as any;
  }

  // logging_policies - computed: true, optional: false, required: true
  public get loggingPolicies() {
    return 'not implemented' as any;
  }

  // methods - computed: true, optional: false, required: true
  public get methods() {
    return this.getListAttribute('methods');
  }

  // path - computed: true, optional: false, required: true
  public get path() {
    return this.getStringAttribute('path');
  }

  // request_policies - computed: true, optional: false, required: true
  public get requestPolicies() {
    return 'not implemented' as any;
  }
}
export class DataOciApigatewayDeploymentSpecification extends ComplexComputedList {

  // logging_policies - computed: true, optional: false, required: true
  public get loggingPolicies() {
    return 'not implemented' as any;
  }

  // request_policies - computed: true, optional: false, required: true
  public get requestPolicies() {
    return 'not implemented' as any;
  }

  // routes - computed: true, optional: false, required: true
  public get routes() {
    return 'not implemented' as any;
  }
}

// Resource

export class DataOciApigatewayDeployment extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciApigatewayDeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_apigateway_deployment',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._deploymentId = config.deploymentId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: true
  public definedTags(key: string): string {
    return new StringMap(this, 'defined_tags').lookup(key);
  }

  // deployment_id - computed: false, optional: false, required: true
  private _deploymentId: string;
  public get deploymentId() {
    return this._deploymentId;
  }
  public set deploymentId(value: string) {
    this._deploymentId = value;
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // endpoint - computed: true, optional: false, required: true
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public freeformTags(key: string): string {
    return new StringMap(this, 'freeform_tags').lookup(key);
  }

  // gateway_id - computed: true, optional: false, required: true
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // path_prefix - computed: true, optional: false, required: true
  public get pathPrefix() {
    return this.getStringAttribute('path_prefix');
  }

  // specification - computed: true, optional: false, required: true
  public specification(index: string) {
    return new DataOciApigatewayDeploymentSpecification(this, 'specification', index);
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: true
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      deployment_id: this._deploymentId,
    };
  }
}
