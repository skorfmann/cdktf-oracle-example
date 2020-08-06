// https://www.terraform.io/docs/providers/oci/r/data_oci_streaming_stream_pools.html
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
      "id": {
        "type": "string",
        "optional": true
      },
      "name": {
        "type": "string",
        "optional": true
      },
      "state": {
        "type": "string",
        "optional": true
      },
      "stream_pools": {
        "type": [
          "list",
          [
            "object",
            {
              "compartment_id": "string",
              "custom_encryption_key": [
                "list",
                [
                  "object",
                  {
                    "key_state": "string",
                    "kms_key_id": "string"
                  }
                ]
              ],
              "defined_tags": [
                "map",
                "string"
              ],
              "endpoint_fqdn": "string",
              "freeform_tags": [
                "map",
                "string"
              ],
              "id": "string",
              "is_private": "bool",
              "kafka_settings": [
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
              "lifecycle_state_details": "string",
              "name": "string",
              "private_endpoint_settings": [
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
              "state": "string",
              "time_created": "string"
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

export interface DataOciStreamingStreamPoolsConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly name?: string;
  readonly state?: string;
  /** filter block */
  readonly filter?: DataOciStreamingStreamPoolsFilter[];
}
export class DataOciStreamingStreamPoolsStreamPoolsCustomEncryptionKey extends ComplexComputedList {

  // key_state - computed: true, optional: false, required: true
  public get keyState() {
    return this.getStringAttribute('key_state');
  }

  // kms_key_id - computed: true, optional: false, required: true
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
}
export class DataOciStreamingStreamPoolsStreamPoolsKafkaSettings extends ComplexComputedList {

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
export class DataOciStreamingStreamPoolsStreamPoolsPrivateEndpointSettings extends ComplexComputedList {

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
export class DataOciStreamingStreamPoolsStreamPools extends ComplexComputedList {

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // custom_encryption_key - computed: true, optional: false, required: true
  public get customEncryptionKey() {
    return 'not implemented' as any;
  }

  // defined_tags - computed: true, optional: false, required: true
  public get definedTags() {
    return 'not implemented' as any;
  }

  // endpoint_fqdn - computed: true, optional: false, required: true
  public get endpointFqdn() {
    return this.getStringAttribute('endpoint_fqdn');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
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
  public get kafkaSettings() {
    return 'not implemented' as any;
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
  public get privateEndpointSettings() {
    return 'not implemented' as any;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }
}
export interface DataOciStreamingStreamPoolsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciStreamingStreamPools extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciStreamingStreamPoolsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_streaming_stream_pools',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._name = config.name;
    this._state = config.state;
    this._filter = config.filter;
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

  // id - computed: false, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id;
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name;
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string;
  public get state() {
    return this._state;
  }
  public set state(value: string | undefined) {
    this._state = value;
  }

  // stream_pools - computed: true, optional: false, required: true
  public streamPools(index: string) {
    return new DataOciStreamingStreamPoolsStreamPools(this, 'stream_pools', index);
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciStreamingStreamPoolsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciStreamingStreamPoolsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      name: this._name,
      state: this._state,
      filter: this._filter,
    };
  }
}
