// https://www.terraform.io/docs/providers/oci/r/objectstorage_object_lifecycle_policy.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "bucket": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "namespace": {
        "type": "string",
        "required": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      }
    },
    "block_types": {
      "rules": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "action": {
              "type": "string",
              "required": true
            },
            "is_enabled": {
              "type": "bool",
              "required": true
            },
            "name": {
              "type": "string",
              "required": true
            },
            "time_amount": {
              "type": "string",
              "required": true
            },
            "time_unit": {
              "type": "string",
              "required": true
            }
          },
          "block_types": {
            "object_name_filter": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "exclusion_patterns": {
                    "type": [
                      "set",
                      "string"
                    ],
                    "optional": true,
                    "computed": true
                  },
                  "inclusion_patterns": {
                    "type": [
                      "set",
                      "string"
                    ],
                    "optional": true,
                    "computed": true
                  },
                  "inclusion_prefixes": {
                    "type": [
                      "set",
                      "string"
                    ],
                    "optional": true,
                    "computed": true
                  }
                }
              },
              "max_items": 1
            }
          }
        }
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

export interface ObjectstorageObjectLifecyclePolicyConfig extends TerraformMetaArguments {
  readonly bucket: string;
  readonly namespace: string;
  /** rules block */
  readonly rules?: ObjectstorageObjectLifecyclePolicyRules[];
  /** timeouts block */
  readonly timeouts?: ObjectstorageObjectLifecyclePolicyTimeouts;
}
export interface ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter {
  readonly exclusionPatterns?: string[];
  readonly inclusionPatterns?: string[];
  readonly inclusionPrefixes?: string[];
}
export interface ObjectstorageObjectLifecyclePolicyRules {
  readonly action: string;
  readonly isEnabled: boolean;
  readonly name: string;
  readonly timeAmount: string;
  readonly timeUnit: string;
  /** object_name_filter block */
  readonly objectNameFilter?: ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter[];
}
export interface ObjectstorageObjectLifecyclePolicyTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class ObjectstorageObjectLifecyclePolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ObjectstorageObjectLifecyclePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_objectstorage_object_lifecycle_policy',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bucket = config.bucket;
    this._namespace = config.namespace;
    this._rules = config.rules;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket - computed: false, optional: false, required: true
  private _bucket: string;
  public get bucket() {
    return this._bucket;
  }
  public set bucket(value: string) {
    this._bucket = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace: string;
  public get namespace() {
    return this._namespace;
  }
  public set namespace(value: string) {
    this._namespace = value;
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // rules - computed: false, optional: true, required: false
  private _rules?: ObjectstorageObjectLifecyclePolicyRules[];
  public get rules() {
    return this._rules;
  }
  public set rules(value: ObjectstorageObjectLifecyclePolicyRules[] | undefined) {
    this._rules = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ObjectstorageObjectLifecyclePolicyTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ObjectstorageObjectLifecyclePolicyTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: this._bucket,
      namespace: this._namespace,
      rules: this._rules,
      timeouts: this._timeouts,
    };
  }
}
