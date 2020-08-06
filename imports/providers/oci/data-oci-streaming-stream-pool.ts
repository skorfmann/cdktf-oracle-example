// https://www.terraform.io/docs/providers/oci/r/data_oci_streaming_stream_pool.html
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
      "custom_encryption_key": {
        "type": [
          "list",
          [
            "object",
            {
              "key_state": "string",
              "kms_key_id": "string"
            }
          ]
        ],
        "computed": true
      },
      "defined_tags": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "endpoint_fqdn": {
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
      "is_private": {
        "type": "bool",
        "computed": true
      },
      "kafka_settings": {
        "type": [
          "list",
          [
            "object",
            {
              "auto_create_topics_enable": "bool",
              "bootstrap_servers": "string",
              "log_retention_hours": "number",
              "num_partitions": "number"
            }
          ]
        ],
        "computed": true
      },
      "lifecycle_state_details": {
        "type": "string",
        "computed": true
      },
      "name": {
        "type": "string",
        "computed": true
      },
      "private_endpoint_settings": {
        "type": [
          "list",
          [
            "object",
            {
              "nsg_ids": [
                "list",
                "string"
              ],
              "private_endpoint_ip": "string",
              "subnet_id": "string"
            }
          ]
        ],
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "stream_pool_id": {
        "type": "string",
        "required": true
      },
      "time_created": {
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
import { ComplexComputedList } from "cdktf";
import { StringMap } from "cdktf";

// Configuration

export interface DataOciStreamingStreamPoolConfig extends TerraformMetaArguments {
  readonly streamPoolId: string;
}
export class DataOciStreamingStreamPoolCustomEncryptionKey extends ComplexComputedList {

  // key_state - computed: true, optional: false, required: true
  public get keyState() {
    return this.getStringAttribute('key_state');
  }

  // kms_key_id - computed: true, optional: false, required: true
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
}
export class DataOciStreamingStreamPoolKafkaSettings extends ComplexComputedList {

  // auto_create_topics_enable - computed: true, optional: false, required: true
  public get autoCreateTopicsEnable() {
    return this.getBooleanAttribute('auto_create_topics_enable');
  }

  // bootstrap_servers - computed: true, optional: false, required: true
  public get bootstrapServers() {
    return this.getStringAttribute('bootstrap_servers');
  }

  // log_retention_hours - computed: true, optional: false, required: true
  public get logRetentionHours() {
    return this.getNumberAttribute('log_retention_hours');
  }

  // num_partitions - computed: true, optional: false, required: true
  public get numPartitions() {
    return this.getNumberAttribute('num_partitions');
  }
}
export class DataOciStreamingStreamPoolPrivateEndpointSettings extends ComplexComputedList {

  // nsg_ids - computed: true, optional: false, required: true
  public get nsgIds() {
    return this.getListAttribute('nsg_ids');
  }

  // private_endpoint_ip - computed: true, optional: false, required: true
  public get privateEndpointIp() {
    return this.getStringAttribute('private_endpoint_ip');
  }

  // subnet_id - computed: true, optional: false, required: true
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

// Resource

export class DataOciStreamingStreamPool extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciStreamingStreamPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_streaming_stream_pool',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._streamPoolId = config.streamPoolId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // custom_encryption_key - computed: true, optional: false, required: true
  public customEncryptionKey(index: string) {
    return new DataOciStreamingStreamPoolCustomEncryptionKey(this, 'custom_encryption_key', index);
  }

  // defined_tags - computed: true, optional: false, required: true
  public definedTags(key: string): string {
    return new StringMap(this, 'defined_tags').lookup(key);
  }

  // endpoint_fqdn - computed: true, optional: false, required: true
  public get endpointFqdn() {
    return this.getStringAttribute('endpoint_fqdn');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public freeformTags(key: string): string {
    return new StringMap(this, 'freeform_tags').lookup(key);
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_private - computed: true, optional: false, required: true
  public get isPrivate() {
    return this.getBooleanAttribute('is_private');
  }

  // kafka_settings - computed: true, optional: false, required: true
  public kafkaSettings(index: string) {
    return new DataOciStreamingStreamPoolKafkaSettings(this, 'kafka_settings', index);
  }

  // lifecycle_state_details - computed: true, optional: false, required: true
  public get lifecycleStateDetails() {
    return this.getStringAttribute('lifecycle_state_details');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // private_endpoint_settings - computed: true, optional: false, required: true
  public privateEndpointSettings(index: string) {
    return new DataOciStreamingStreamPoolPrivateEndpointSettings(this, 'private_endpoint_settings', index);
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // stream_pool_id - computed: false, optional: false, required: true
  private _streamPoolId: string;
  public get streamPoolId() {
    return this._streamPoolId;
  }
  public set streamPoolId(value: string) {
    this._streamPoolId = value;
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      stream_pool_id: this._streamPoolId,
    };
  }
}
