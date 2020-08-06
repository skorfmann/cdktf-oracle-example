// https://www.terraform.io/docs/providers/oci/r/objectstorage_replication_policy.html
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
      "delete_object_in_destination_bucket": {
        "type": "string",
        "required": true
      },
      "destination_bucket_name": {
        "type": "string",
        "required": true
      },
      "destination_region_name": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
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
      "status": {
        "type": "string",
        "computed": true
      },
      "status_message": {
        "type": "string",
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "time_last_sync": {
        "type": "string",
        "computed": true
      }
    },
    "block_types": {
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

export interface ObjectstorageReplicationPolicyConfig extends TerraformMetaArguments {
  readonly bucket: string;
  readonly deleteObjectInDestinationBucket: string;
  readonly destinationBucketName: string;
  readonly destinationRegionName: string;
  readonly name: string;
  readonly namespace: string;
  /** timeouts block */
  readonly timeouts?: ObjectstorageReplicationPolicyTimeouts;
}
export interface ObjectstorageReplicationPolicyTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class ObjectstorageReplicationPolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ObjectstorageReplicationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_objectstorage_replication_policy',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bucket = config.bucket;
    this._deleteObjectInDestinationBucket = config.deleteObjectInDestinationBucket;
    this._destinationBucketName = config.destinationBucketName;
    this._destinationRegionName = config.destinationRegionName;
    this._name = config.name;
    this._namespace = config.namespace;
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

  // delete_object_in_destination_bucket - computed: false, optional: false, required: true
  private _deleteObjectInDestinationBucket: string;
  public get deleteObjectInDestinationBucket() {
    return this._deleteObjectInDestinationBucket;
  }
  public set deleteObjectInDestinationBucket(value: string) {
    this._deleteObjectInDestinationBucket = value;
  }

  // destination_bucket_name - computed: false, optional: false, required: true
  private _destinationBucketName: string;
  public get destinationBucketName() {
    return this._destinationBucketName;
  }
  public set destinationBucketName(value: string) {
    this._destinationBucketName = value;
  }

  // destination_region_name - computed: false, optional: false, required: true
  private _destinationRegionName: string;
  public get destinationRegionName() {
    return this._destinationRegionName;
  }
  public set destinationRegionName(value: string) {
    this._destinationRegionName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ObjectstorageReplicationPolicyTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ObjectstorageReplicationPolicyTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: this._bucket,
      delete_object_in_destination_bucket: this._deleteObjectInDestinationBucket,
      destination_bucket_name: this._destinationBucketName,
      destination_region_name: this._destinationRegionName,
      name: this._name,
      namespace: this._namespace,
      timeouts: this._timeouts,
    };
  }
}
