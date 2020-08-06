// https://www.terraform.io/docs/providers/oci/r/data_oci_objectstorage_replication_policy.html
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
        "computed": true
      },
      "destination_bucket_name": {
        "type": "string",
        "computed": true
      },
      "destination_region_name": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "computed": true
      },
      "name": {
        "type": "string",
        "computed": true
      },
      "namespace": {
        "type": "string",
        "required": true
      },
      "replication_id": {
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
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataOciObjectstorageReplicationPolicyConfig extends TerraformMetaArguments {
  readonly bucket: string;
  readonly namespace: string;
  readonly replicationId: string;
}

// Resource

export class DataOciObjectstorageReplicationPolicy extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciObjectstorageReplicationPolicyConfig) {
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
    this._namespace = config.namespace;
    this._replicationId = config.replicationId;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace: string;
  public get namespace() {
    return this._namespace;
  }
  public set namespace(value: string) {
    this._namespace = value;
  }

  // replication_id - computed: false, optional: false, required: true
  private _replicationId: string;
  public get replicationId() {
    return this._replicationId;
  }
  public set replicationId(value: string) {
    this._replicationId = value;
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

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: this._bucket,
      namespace: this._namespace,
      replication_id: this._replicationId,
    };
  }
}
