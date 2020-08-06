// https://www.terraform.io/docs/providers/oci/r/data_oci_objectstorage_bucket_summaries.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "bucket_summaries": {
        "type": [
          "list",
          [
            "object",
            {
              "access_type": "string",
              "approximate_count": "string",
              "approximate_size": "string",
              "bucket_id": "string",
              "compartment_id": "string",
              "created_by": "string",
              "defined_tags": [
                "map",
                "string"
              ],
              "etag": "string",
              "freeform_tags": [
                "map",
                "string"
              ],
              "id": "string",
              "is_read_only": "bool",
              "kms_key_id": "string",
              "metadata": [
                "map",
                "string"
              ],
              "name": "string",
              "namespace": "string",
              "object_events_enabled": "bool",
              "object_lifecycle_policy_etag": "string",
              "replication_enabled": "bool",
              "retention_rules": [
                "list",
                [
                  "object",
                  {
                    "display_name": "string",
                    "duration": [
                      "list",
                      [
                        "object",
                        {
                          "time_amount": "string",
                          "time_unit": "string"
                        }
                      ]
                    ],
                    "retention_rule_id": "string",
                    "time_created": "string",
                    "time_modified": "string",
                    "time_rule_locked": "string"
                  }
                ]
              ],
              "storage_tier": "string",
              "time_created": "string",
              "versioning": "string"
            }
          ]
        ],
        "computed": true
      },
      "compartment_id": {
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
      }
    },
    "block_types": {
      "filter": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "name": {
              "type": "string",
              "required": true
            },
            "regex": {
              "type": "bool",
              "optional": true
            },
            "values": {
              "type": [
                "list",
                "string"
              ],
              "required": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataOciObjectstorageBucketSummariesConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly namespace: string;
  /** filter block */
  readonly filter?: DataOciObjectstorageBucketSummariesFilter[];
}
export class DataOciObjectstorageBucketSummariesBucketSummariesRetentionRulesDuration extends ComplexComputedList {

  // time_amount - computed: true, optional: false, required: true
  public get timeAmount() {
    return this.getStringAttribute('time_amount');
  }

  // time_unit - computed: true, optional: false, required: true
  public get timeUnit() {
    return this.getStringAttribute('time_unit');
  }
}
export class DataOciObjectstorageBucketSummariesBucketSummariesRetentionRules extends ComplexComputedList {

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // duration - computed: true, optional: false, required: true
  public get duration() {
    return 'not implemented' as any;
  }

  // retention_rule_id - computed: true, optional: false, required: true
  public get retentionRuleId() {
    return this.getStringAttribute('retention_rule_id');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_modified - computed: true, optional: false, required: true
  public get timeModified() {
    return this.getStringAttribute('time_modified');
  }

  // time_rule_locked - computed: true, optional: false, required: true
  public get timeRuleLocked() {
    return this.getStringAttribute('time_rule_locked');
  }
}
export class DataOciObjectstorageBucketSummariesBucketSummaries extends ComplexComputedList {

  // access_type - computed: true, optional: false, required: true
  public get accessType() {
    return this.getStringAttribute('access_type');
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

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // created_by - computed: true, optional: false, required: true
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // defined_tags - computed: true, optional: false, required: true
  public get definedTags() {
    return 'not implemented' as any;
  }

  // etag - computed: true, optional: false, required: true
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_read_only - computed: true, optional: false, required: true
  public get isReadOnly() {
    return this.getBooleanAttribute('is_read_only');
  }

  // kms_key_id - computed: true, optional: false, required: true
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // metadata - computed: true, optional: false, required: true
  public get metadata() {
    return 'not implemented' as any;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: true
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // object_events_enabled - computed: true, optional: false, required: true
  public get objectEventsEnabled() {
    return this.getBooleanAttribute('object_events_enabled');
  }

  // object_lifecycle_policy_etag - computed: true, optional: false, required: true
  public get objectLifecyclePolicyEtag() {
    return this.getStringAttribute('object_lifecycle_policy_etag');
  }

  // replication_enabled - computed: true, optional: false, required: true
  public get replicationEnabled() {
    return this.getBooleanAttribute('replication_enabled');
  }

  // retention_rules - computed: true, optional: false, required: true
  public get retentionRules() {
    return 'not implemented' as any;
  }

  // storage_tier - computed: true, optional: false, required: true
  public get storageTier() {
    return this.getStringAttribute('storage_tier');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // versioning - computed: true, optional: false, required: true
  public get versioning() {
    return this.getStringAttribute('versioning');
  }
}
export interface DataOciObjectstorageBucketSummariesFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciObjectstorageBucketSummaries extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciObjectstorageBucketSummariesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_objectstorage_bucket_summaries',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._namespace = config.namespace;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket_summaries - computed: true, optional: false, required: true
  public bucketSummaries(index: string) {
    return new DataOciObjectstorageBucketSummariesBucketSummaries(this, 'bucket_summaries', index);
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
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

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciObjectstorageBucketSummariesFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciObjectstorageBucketSummariesFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      namespace: this._namespace,
      filter: this._filter,
    };
  }
}
