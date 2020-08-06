// https://www.terraform.io/docs/providers/oci/r/data_oci_objectstorage_bucket.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "access_type": {
        "type": "string",
        "computed": true
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
        "computed": true
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
        "computed": true
      },
      "id": {
        "type": "string",
        "computed": true
      },
      "is_read_only": {
        "type": "bool",
        "computed": true
      },
      "kms_key_id": {
        "type": "string",
        "computed": true
      },
      "metadata": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
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
      "retention_rules": {
        "type": [
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
        "computed": true
      },
      "storage_tier": {
        "type": "string",
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "versioning": {
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

export interface DataOciObjectstorageBucketConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly namespace: string;
}
export class DataOciObjectstorageBucketRetentionRulesDuration extends ComplexComputedList {

  // time_amount - computed: true, optional: false, required: true
  public get timeAmount() {
    return this.getStringAttribute('time_amount');
  }

  // time_unit - computed: true, optional: false, required: true
  public get timeUnit() {
    return this.getStringAttribute('time_unit');
  }
}
export class DataOciObjectstorageBucketRetentionRules extends ComplexComputedList {

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

// Resource

export class DataOciObjectstorageBucket extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciObjectstorageBucketConfig) {
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
    this._name = config.name;
    this._namespace = config.namespace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  public definedTags(key: string): string {
    return new StringMap(this, 'defined_tags').lookup(key);
  }

  // etag - computed: true, optional: false, required: true
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public freeformTags(key: string): string {
    return new StringMap(this, 'freeform_tags').lookup(key);
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
  public metadata(key: string): string {
    return new StringMap(this, 'metadata').lookup(key);
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
  public retentionRules(index: string) {
    return new DataOciObjectstorageBucketRetentionRules(this, 'retention_rules', index);
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

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      namespace: this._namespace,
    };
  }
}
