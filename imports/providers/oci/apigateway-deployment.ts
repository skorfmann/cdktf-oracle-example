// https://www.terraform.io/docs/providers/oci/r/apigateway_deployment.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "defined_tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "display_name": {
        "type": "string",
        "optional": true,
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
        "optional": true,
        "computed": true
      },
      "gateway_id": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "lifecycle_details": {
        "type": "string",
        "computed": true
      },
      "path_prefix": {
        "type": "string",
        "required": true
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
    },
    "block_types": {
      "specification": {
        "nesting_mode": "list",
        "block": {
          "block_types": {
            "logging_policies": {
              "nesting_mode": "list",
              "block": {
                "block_types": {
                  "access_log": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "is_enabled": {
                          "type": "bool",
                          "optional": true,
                          "computed": true
                        }
                      }
                    },
                    "max_items": 1
                  },
                  "execution_log": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "is_enabled": {
                          "type": "bool",
                          "optional": true,
                          "computed": true
                        },
                        "log_level": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        }
                      }
                    },
                    "max_items": 1
                  }
                }
              },
              "max_items": 1
            },
            "request_policies": {
              "nesting_mode": "list",
              "block": {
                "block_types": {
                  "authentication": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "audiences": {
                          "type": [
                            "list",
                            "string"
                          ],
                          "optional": true,
                          "computed": true
                        },
                        "function_id": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        },
                        "is_anonymous_access_allowed": {
                          "type": "bool",
                          "optional": true,
                          "computed": true
                        },
                        "issuers": {
                          "type": [
                            "list",
                            "string"
                          ],
                          "optional": true,
                          "computed": true
                        },
                        "max_clock_skew_in_seconds": {
                          "type": "number",
                          "optional": true,
                          "computed": true
                        },
                        "token_auth_scheme": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        },
                        "token_header": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        },
                        "token_query_param": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        },
                        "type": {
                          "type": "string",
                          "required": true
                        }
                      },
                      "block_types": {
                        "public_keys": {
                          "nesting_mode": "list",
                          "block": {
                            "attributes": {
                              "is_ssl_verify_disabled": {
                                "type": "bool",
                                "optional": true,
                                "computed": true
                              },
                              "max_cache_duration_in_hours": {
                                "type": "number",
                                "optional": true,
                                "computed": true
                              },
                              "type": {
                                "type": "string",
                                "required": true
                              },
                              "uri": {
                                "type": "string",
                                "optional": true,
                                "computed": true
                              }
                            },
                            "block_types": {
                              "keys": {
                                "nesting_mode": "list",
                                "block": {
                                  "attributes": {
                                    "alg": {
                                      "type": "string",
                                      "optional": true,
                                      "computed": true
                                    },
                                    "e": {
                                      "type": "string",
                                      "optional": true,
                                      "computed": true
                                    },
                                    "format": {
                                      "type": "string",
                                      "required": true
                                    },
                                    "key": {
                                      "type": "string",
                                      "optional": true,
                                      "computed": true
                                    },
                                    "key_ops": {
                                      "type": [
                                        "list",
                                        "string"
                                      ],
                                      "optional": true,
                                      "computed": true
                                    },
                                    "kid": {
                                      "type": "string",
                                      "optional": true,
                                      "computed": true
                                    },
                                    "kty": {
                                      "type": "string",
                                      "optional": true,
                                      "computed": true
                                    },
                                    "n": {
                                      "type": "string",
                                      "optional": true,
                                      "computed": true
                                    },
                                    "use": {
                                      "type": "string",
                                      "optional": true,
                                      "computed": true
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "max_items": 1
                        },
                        "verify_claims": {
                          "nesting_mode": "list",
                          "block": {
                            "attributes": {
                              "is_required": {
                                "type": "bool",
                                "optional": true,
                                "computed": true
                              },
                              "key": {
                                "type": "string",
                                "optional": true,
                                "computed": true
                              },
                              "values": {
                                "type": [
                                  "list",
                                  "string"
                                ],
                                "optional": true,
                                "computed": true
                              }
                            }
                          }
                        }
                      }
                    },
                    "max_items": 1
                  },
                  "cors": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "allowed_headers": {
                          "type": [
                            "list",
                            "string"
                          ],
                          "optional": true,
                          "computed": true
                        },
                        "allowed_methods": {
                          "type": [
                            "list",
                            "string"
                          ],
                          "optional": true,
                          "computed": true
                        },
                        "allowed_origins": {
                          "type": [
                            "list",
                            "string"
                          ],
                          "required": true
                        },
                        "exposed_headers": {
                          "type": [
                            "list",
                            "string"
                          ],
                          "optional": true,
                          "computed": true
                        },
                        "is_allow_credentials_enabled": {
                          "type": "bool",
                          "optional": true,
                          "computed": true
                        },
                        "max_age_in_seconds": {
                          "type": "number",
                          "optional": true,
                          "computed": true
                        }
                      }
                    },
                    "max_items": 1
                  },
                  "rate_limiting": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "rate_in_requests_per_second": {
                          "type": "number",
                          "required": true
                        },
                        "rate_key": {
                          "type": "string",
                          "required": true
                        }
                      }
                    },
                    "max_items": 1
                  }
                }
              },
              "max_items": 1
            },
            "routes": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "methods": {
                    "type": [
                      "list",
                      "string"
                    ],
                    "optional": true,
                    "computed": true
                  },
                  "path": {
                    "type": "string",
                    "required": true
                  }
                },
                "block_types": {
                  "backend": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "body": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        },
                        "connect_timeout_in_seconds": {
                          "type": "number",
                          "optional": true,
                          "computed": true
                        },
                        "function_id": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        },
                        "is_ssl_verify_disabled": {
                          "type": "bool",
                          "optional": true,
                          "computed": true
                        },
                        "read_timeout_in_seconds": {
                          "type": "number",
                          "optional": true,
                          "computed": true
                        },
                        "send_timeout_in_seconds": {
                          "type": "number",
                          "optional": true,
                          "computed": true
                        },
                        "status": {
                          "type": "number",
                          "optional": true,
                          "computed": true
                        },
                        "type": {
                          "type": "string",
                          "required": true
                        },
                        "url": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        }
                      },
                      "block_types": {
                        "headers": {
                          "nesting_mode": "list",
                          "block": {
                            "attributes": {
                              "name": {
                                "type": "string",
                                "optional": true,
                                "computed": true
                              },
                              "value": {
                                "type": "string",
                                "optional": true,
                                "computed": true
                              }
                            }
                          }
                        }
                      }
                    },
                    "min_items": 1,
                    "max_items": 1
                  },
                  "logging_policies": {
                    "nesting_mode": "list",
                    "block": {
                      "block_types": {
                        "access_log": {
                          "nesting_mode": "list",
                          "block": {
                            "attributes": {
                              "is_enabled": {
                                "type": "bool",
                                "optional": true,
                                "computed": true
                              }
                            }
                          },
                          "max_items": 1
                        },
                        "execution_log": {
                          "nesting_mode": "list",
                          "block": {
                            "attributes": {
                              "is_enabled": {
                                "type": "bool",
                                "optional": true,
                                "computed": true
                              },
                              "log_level": {
                                "type": "string",
                                "optional": true,
                                "computed": true
                              }
                            }
                          },
                          "max_items": 1
                        }
                      }
                    },
                    "max_items": 1
                  },
                  "request_policies": {
                    "nesting_mode": "list",
                    "block": {
                      "block_types": {
                        "authorization": {
                          "nesting_mode": "list",
                          "block": {
                            "attributes": {
                              "allowed_scope": {
                                "type": [
                                  "list",
                                  "string"
                                ],
                                "optional": true,
                                "computed": true
                              },
                              "type": {
                                "type": "string",
                                "optional": true,
                                "computed": true
                              }
                            }
                          },
                          "max_items": 1
                        },
                        "cors": {
                          "nesting_mode": "list",
                          "block": {
                            "attributes": {
                              "allowed_headers": {
                                "type": [
                                  "list",
                                  "string"
                                ],
                                "optional": true,
                                "computed": true
                              },
                              "allowed_methods": {
                                "type": [
                                  "list",
                                  "string"
                                ],
                                "optional": true,
                                "computed": true
                              },
                              "allowed_origins": {
                                "type": [
                                  "list",
                                  "string"
                                ],
                                "required": true
                              },
                              "exposed_headers": {
                                "type": [
                                  "list",
                                  "string"
                                ],
                                "optional": true,
                                "computed": true
                              },
                              "is_allow_credentials_enabled": {
                                "type": "bool",
                                "optional": true,
                                "computed": true
                              },
                              "max_age_in_seconds": {
                                "type": "number",
                                "optional": true,
                                "computed": true
                              }
                            }
                          },
                          "max_items": 1
                        }
                      }
                    },
                    "max_items": 1
                  }
                }
              },
              "min_items": 1
            }
          }
        },
        "min_items": 1,
        "max_items": 1
      },
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "create": {
              "type": "string",
              "optional": true
            },
            "delete": {
              "type": "string",
              "optional": true
            },
            "update": {
              "type": "string",
              "optional": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ApigatewayDeploymentConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly definedTags?: { [key: string]: string };
  readonly displayName?: string;
  readonly freeformTags?: { [key: string]: string };
  readonly gatewayId: string;
  readonly pathPrefix: string;
  /** specification block */
  readonly specification: ApigatewayDeploymentSpecification[];
  /** timeouts block */
  readonly timeouts?: ApigatewayDeploymentTimeouts;
}
export interface ApigatewayDeploymentSpecificationLoggingPoliciesAccessLog {
  readonly isEnabled?: boolean;
}
export interface ApigatewayDeploymentSpecificationLoggingPoliciesExecutionLog {
  readonly isEnabled?: boolean;
  readonly logLevel?: string;
}
export interface ApigatewayDeploymentSpecificationLoggingPolicies {
  /** access_log block */
  readonly accessLog?: ApigatewayDeploymentSpecificationLoggingPoliciesAccessLog[];
  /** execution_log block */
  readonly executionLog?: ApigatewayDeploymentSpecificationLoggingPoliciesExecutionLog[];
}
export interface ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeysKeys {
  readonly alg?: string;
  readonly e?: string;
  readonly format: string;
  readonly key?: string;
  readonly keyOps?: string[];
  readonly kid?: string;
  readonly kty?: string;
  readonly n?: string;
  readonly use?: string;
}
export interface ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeys {
  readonly isSslVerifyDisabled?: boolean;
  readonly maxCacheDurationInHours?: number;
  readonly type: string;
  readonly uri?: string;
  /** keys block */
  readonly keys?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeysKeys[];
}
export interface ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationVerifyClaims {
  readonly isRequired?: boolean;
  readonly key?: string;
  readonly values?: string[];
}
export interface ApigatewayDeploymentSpecificationRequestPoliciesAuthentication {
  readonly audiences?: string[];
  readonly functionId?: string;
  readonly isAnonymousAccessAllowed?: boolean;
  readonly issuers?: string[];
  readonly maxClockSkewInSeconds?: number;
  readonly tokenAuthScheme?: string;
  readonly tokenHeader?: string;
  readonly tokenQueryParam?: string;
  readonly type: string;
  /** public_keys block */
  readonly publicKeys?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeys[];
  /** verify_claims block */
  readonly verifyClaims?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationVerifyClaims[];
}
export interface ApigatewayDeploymentSpecificationRequestPoliciesCors {
  readonly allowedHeaders?: string[];
  readonly allowedMethods?: string[];
  readonly allowedOrigins: string[];
  readonly exposedHeaders?: string[];
  readonly isAllowCredentialsEnabled?: boolean;
  readonly maxAgeInSeconds?: number;
}
export interface ApigatewayDeploymentSpecificationRequestPoliciesRateLimiting {
  readonly rateInRequestsPerSecond: number;
  readonly rateKey: string;
}
export interface ApigatewayDeploymentSpecificationRequestPolicies {
  /** authentication block */
  readonly authentication?: ApigatewayDeploymentSpecificationRequestPoliciesAuthentication[];
  /** cors block */
  readonly cors?: ApigatewayDeploymentSpecificationRequestPoliciesCors[];
  /** rate_limiting block */
  readonly rateLimiting?: ApigatewayDeploymentSpecificationRequestPoliciesRateLimiting[];
}
export interface ApigatewayDeploymentSpecificationRoutesBackendHeaders {
  readonly name?: string;
  readonly value?: string;
}
export interface ApigatewayDeploymentSpecificationRoutesBackend {
  readonly body?: string;
  readonly connectTimeoutInSeconds?: number;
  readonly functionId?: string;
  readonly isSslVerifyDisabled?: boolean;
  readonly readTimeoutInSeconds?: number;
  readonly sendTimeoutInSeconds?: number;
  readonly status?: number;
  readonly type: string;
  readonly url?: string;
  /** headers block */
  readonly headers?: ApigatewayDeploymentSpecificationRoutesBackendHeaders[];
}
export interface ApigatewayDeploymentSpecificationRoutesLoggingPoliciesAccessLog {
  readonly isEnabled?: boolean;
}
export interface ApigatewayDeploymentSpecificationRoutesLoggingPoliciesExecutionLog {
  readonly isEnabled?: boolean;
  readonly logLevel?: string;
}
export interface ApigatewayDeploymentSpecificationRoutesLoggingPolicies {
  /** access_log block */
  readonly accessLog?: ApigatewayDeploymentSpecificationRoutesLoggingPoliciesAccessLog[];
  /** execution_log block */
  readonly executionLog?: ApigatewayDeploymentSpecificationRoutesLoggingPoliciesExecutionLog[];
}
export interface ApigatewayDeploymentSpecificationRoutesRequestPoliciesAuthorization {
  readonly allowedScope?: string[];
  readonly type?: string;
}
export interface ApigatewayDeploymentSpecificationRoutesRequestPoliciesCors {
  readonly allowedHeaders?: string[];
  readonly allowedMethods?: string[];
  readonly allowedOrigins: string[];
  readonly exposedHeaders?: string[];
  readonly isAllowCredentialsEnabled?: boolean;
  readonly maxAgeInSeconds?: number;
}
export interface ApigatewayDeploymentSpecificationRoutesRequestPolicies {
  /** authorization block */
  readonly authorization?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesAuthorization[];
  /** cors block */
  readonly cors?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesCors[];
}
export interface ApigatewayDeploymentSpecificationRoutes {
  readonly methods?: string[];
  readonly path: string;
  /** backend block */
  readonly backend: ApigatewayDeploymentSpecificationRoutesBackend[];
  /** logging_policies block */
  readonly loggingPolicies?: ApigatewayDeploymentSpecificationRoutesLoggingPolicies[];
  /** request_policies block */
  readonly requestPolicies?: ApigatewayDeploymentSpecificationRoutesRequestPolicies[];
}
export interface ApigatewayDeploymentSpecification {
  /** logging_policies block */
  readonly loggingPolicies?: ApigatewayDeploymentSpecificationLoggingPolicies[];
  /** request_policies block */
  readonly requestPolicies?: ApigatewayDeploymentSpecificationRequestPolicies[];
  /** routes block */
  readonly routes: ApigatewayDeploymentSpecificationRoutes[];
}
export interface ApigatewayDeploymentTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class ApigatewayDeployment extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApigatewayDeploymentConfig) {
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
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._gatewayId = config.gatewayId;
    this._pathPrefix = config.pathPrefix;
    this._specification = config.specification;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }
  public get definedTags(): { [key: string]: string } | undefined {
    return this._definedTags; // Getting the computed value is not yet implemented
  }
  public set definedTags(value: { [key: string]: string } | undefined) {
    this._definedTags = value;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName ?? this.getStringAttribute('display_name');
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // endpoint - computed: true, optional: false, required: true
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }
  public get freeformTags(): { [key: string]: string } | undefined {
    return this._freeformTags; // Getting the computed value is not yet implemented
  }
  public set freeformTags(value: { [key: string]: string } | undefined) {
    this._freeformTags = value;
  }

  // gateway_id - computed: false, optional: false, required: true
  private _gatewayId: string;
  public get gatewayId() {
    return this._gatewayId;
  }
  public set gatewayId(value: string) {
    this._gatewayId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // path_prefix - computed: false, optional: false, required: true
  private _pathPrefix: string;
  public get pathPrefix() {
    return this._pathPrefix;
  }
  public set pathPrefix(value: string) {
    this._pathPrefix = value;
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

  // specification - computed: false, optional: false, required: true
  private _specification: ApigatewayDeploymentSpecification[];
  public get specification() {
    return this._specification;
  }
  public set specification(value: ApigatewayDeploymentSpecification[]) {
    this._specification = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApigatewayDeploymentTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ApigatewayDeploymentTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      defined_tags: this._definedTags,
      display_name: this._displayName,
      freeform_tags: this._freeformTags,
      gateway_id: this._gatewayId,
      path_prefix: this._pathPrefix,
      specification: this._specification,
      timeouts: this._timeouts,
    };
  }
}
