// https://www.terraform.io/docs/providers/oci/r/objectstorage_bucket.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "access_type": {
        "type": "string",
        "optional": true
      },
      "approximate_count": {
        "type": "string",
        "computed": true
      },
      "approximate_size": {
        "type": "string",
        "computed": true
      },
      "bucket_id": {
        "type": "string",
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "created_by": {
        "type": "string",
        "computed": true
      },
      "defined_tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "etag": {
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
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "is_read_only": {
        "type": "bool",
        "computed": true
      },
      "kms_key_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "metadata": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "namespace": {
        "type": "string",
        "required": true
      },
      "object_events_enabled": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "object_lifecycle_policy_etag": {
        "type": "string",
        "computed": true
      },
      "replication_enabled": {
        "type": "bool",
        "computed": true
      },
      "storage_tier": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "versioning": {
        "type": "string",
        "optional": true,
        "computed": true
      }
    },
    "block_types": {
      "retention_rules": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "display_name": {
              "type": "string",
              "required": true
            },
            "retention_rule_id": {
              "type": "string",
              "computed": true
            },
            "time_created": {
              "type": "string",
              "computed": true
            },
            "time_modified": {
              "type": "string",
              "computed": true
            },
            "time_rule_locked": {
              "type": "string",
              "optional": true
            }
          },
          "block_types": {
            "duration": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "time_amount": {
                    "type": "string",
                    "required": true
                  },
                  "time_unit": {
                    "type": "string",
                    "required": true
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

export interface ObjectstorageBucketConfig extends TerraformMetaArguments {
  readonly accessType?: string;
  readonly compartmentId: string;
  readonly definedTags?: { [key: string]: string };
  readonly freeformTags?: { [key: string]: string };
  readonly kmsKeyId?: string;
  readonly metadata?: { [key: string]: string };
  readonly name: string;
  readonly namespace: string;
  readonly objectEventsEnabled?: boolean;
  readonly storageTier?: string;
  readonly versioning?: string;
  /** retention_rules block */
  readonly retentionRules?: ObjectstorageBucketRetentionRules[];
  /** timeouts block */
  readonly timeouts?: ObjectstorageBucketTimeouts;
}
export interface ObjectstorageBucketRetentionRulesDuration {
  readonly timeAmount: string;
  readonly timeUnit: string;
}
export interface ObjectstorageBucketRetentionRules {
  readonly displayName: string;
  readonly timeRuleLocked?: string;
  /** duration block */
  readonly duration?: ObjectstorageBucketRetentionRulesDuration[];
}
export interface ObjectstorageBucketTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class ObjectstorageBucket extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ObjectstorageBucketConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_objectstorage_bucket',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accessType = config.accessType;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._freeformTags = config.freeformTags;
    this._kmsKeyId = config.kmsKeyId;
    this._metadata = config.metadata;
    this._name = config.name;
    this._namespace = config.namespace;
    this._objectEventsEnabled = config.objectEventsEnabled;
    this._storageTier = config.storageTier;
    this._versioning = config.versioning;
    this._retentionRules = config.retentionRules;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_type - computed: false, optional: true, required: false
  private _accessType?: string;
  public get accessType() {
    return this._accessType;
  }
  public set accessType(value: string | undefined) {
    this._accessType = value;
  }

  // approximate_count - computed: true, optional: false, required: true
  public get approximateCount() {
    return this.getStringAttribute('approximate_count');
  }

  // approximate_size - computed: true, optional: false, required: true
  public get approximateSize() {
    return this.getStringAttribute('approximate_size');
  }

  // bucket_id - computed: true, optional: false, required: true
  public get bucketId() {
    return this.getStringAttribute('bucket_id');
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // created_by - computed: true, optional: false, required: true
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }
  public get definedTags(): { [key: string]: string } | undefined {
    return this._definedTags; // Getting the computed value is not yet implemented
  }
  public set definedTags(value: { [key: string]: string } | undefined) {
    this._definedTags = value;
  }

  // etag - computed: true, optional: false, required: true
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }
  public get freeformTags(): { [key: string]: string } | undefined {
    return this._freeformTags; // Getting the computed value is not yet implemented
  }
  public set freeformTags(value: { [key: string]: string } | undefined) {
    this._freeformTags = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // is_read_only - computed: true, optional: false, required: true
  public get isReadOnly() {
    return this.getBooleanAttribute('is_read_only');
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string;
  public get kmsKeyId() {
    return this._kmsKeyId ?? this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string | undefined) {
    this._kmsKeyId = value;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string };
  public get metadata() {
    return this._metadata;
  }
  public set metadata(value: { [key: string]: string } | undefined) {
    this._metadata = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace: string;
  public get namespace() {
    return this._namespace;
  }
  public set namespace(value: string) {
    this._namespace = value;
  }

  // object_events_enabled - computed: true, optional: true, required: false
  private _objectEventsEnabled?: boolean;
  public get objectEventsEnabled() {
    return this._objectEventsEnabled ?? this.getBooleanAttribute('object_events_enabled');
  }
  public set objectEventsEnabled(value: boolean | undefined) {
    this._objectEventsEnabled = value;
  }

  // object_lifecycle_policy_etag - computed: true, optional: false, required: true
  public get objectLifecyclePolicyEtag() {
    return this.getStringAttribute('object_lifecycle_policy_etag');
  }

  // replication_enabled - computed: true, optional: false, required: true
  public get replicationEnabled() {
    return this.getBooleanAttribute('replication_enabled');
  }

  // storage_tier - computed: true, optional: true, required: false
  private _storageTier?: string;
  public get storageTier() {
    return this._storageTier ?? this.getStringAttribute('storage_tier');
  }
  public set storageTier(value: string | undefined) {
    this._storageTier = value;
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // versioning - computed: true, optional: true, required: false
  private _versioning?: string;
  public get versioning() {
    return this._versioning ?? this.getStringAttribute('versioning');
  }
  public set versioning(value: string | undefined) {
    this._versioning = value;
  }

  // retention_rules - computed: false, optional: true, required: false
  private _retentionRules?: ObjectstorageBucketRetentionRules[];
  public get retentionRules() {
    return this._retentionRules;
  }
  public set retentionRules(value: ObjectstorageBucketRetentionRules[] | undefined) {
    this._retentionRules = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ObjectstorageBucketTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ObjectstorageBucketTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      access_type: this._accessType,
      compartment_id: this._compartmentId,
      defined_tags: this._definedTags,
      freeform_tags: this._freeformTags,
      kms_key_id: this._kmsKeyId,
      metadata: this._metadata,
      name: this._name,
      namespace: this._namespace,
      object_events_enabled: this._objectEventsEnabled,
      storage_tier: this._storageTier,
      versioning: this._versioning,
      retention_rules: this._retentionRules,
      timeouts: this._timeouts,
    };
  }
}
