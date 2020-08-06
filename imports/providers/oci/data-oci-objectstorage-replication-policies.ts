// https://www.terraform.io/docs/providers/oci/r/data_oci_objectstorage_replication_policies.html
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
      "replication_policies": {
        "type": [
          "list",
          [
            "object",
            {
              "bucket": "string",
              "delete_object_in_destination_bucket": "string",
              "destination_bucket_name": "string",
              "destination_region_name": "string",
              "id": "string",
              "name": "string",
              "namespace": "string",
              "status": "string",
              "status_message": "string",
              "time_created": "string",
              "time_last_sync": "string"
            }
          ]
        ],
        "computed": true
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

export interface DataOciObjectstorageReplicationPoliciesConfig extends TerraformMetaArguments {
  readonly bucket: string;
  readonly namespace: string;
  /** filter block */
  readonly filter?: DataOciObjectstorageReplicationPoliciesFilter[];
}
export class DataOciObjectstorageReplicationPoliciesReplicationPolicies extends ComplexComputedList {

  // bucket - computed: true, optional: false, required: true
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // delete_object_in_destination_bucket - computed: true, optional: false, required: true
  public get deleteObjectInDestinationBucket() {
    return this.getStringAttribute('delete_object_in_destination_bucket');
  }

  // destination_bucket_name - computed: true, optional: false, required: true
  public get destinationBucketName() {
    return this.getStringAttribute('destination_bucket_name');
  }

  // destination_region_name - computed: true, optional: false, required: true
  public get destinationRegionName() {
    return this.getStringAttribute('destination_region_name');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: true
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_message - computed: true, optional: false, required: true
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_last_sync - computed: true, optional: false, required: true
  public get timeLastSync() {
    return this.getStringAttribute('time_last_sync');
  }
}
export interface DataOciObjectstorageReplicationPoliciesFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciObjectstorageReplicationPolicies extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciObjectstorageReplicationPoliciesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_objectstorage_replication_policies',
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
    this._filter = config.filter;
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

  // replication_policies - computed: true, optional: false, required: true
  public replicationPolicies(index: string) {
    return new DataOciObjectstorageReplicationPoliciesReplicationPolicies(this, 'replication_policies', index);
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciObjectstorageReplicationPoliciesFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciObjectstorageReplicationPoliciesFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: this._bucket,
      namespace: this._namespace,
      filter: this._filter,
    };
  }
}
