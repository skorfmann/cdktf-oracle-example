// https://www.terraform.io/docs/providers/oci/r/streaming_stream_pool.html
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
      "endpoint_fqdn": {
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
      "is_private": {
        "type": "bool",
        "computed": true
      },
      "lifecycle_state_details": {
        "type": "string",
        "computed": true
      },
      "name": {
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
      }
    },
    "block_types": {
      "custom_encryption_key": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "key_state": {
              "type": "string",
              "computed": true
            },
            "kms_key_id": {
              "type": "string",
              "required": true
            }
          }
        },
        "max_items": 1
      },
      "kafka_settings": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "auto_create_topics_enable": {
              "type": "bool",
              "optional": true,
              "computed": true
            },
            "bootstrap_servers": {
              "type": "string",
              "computed": true
            },
            "log_retention_hours": {
              "type": "number",
              "optional": true,
              "computed": true
            },
            "num_partitions": {
              "type": "number",
              "optional": true,
              "computed": true
            }
          }
        },
        "max_items": 1
      },
      "private_endpoint_settings": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "nsg_ids": {
              "type": [
                "set",
                "string"
              ],
              "optional": true,
              "computed": true
            },
            "private_endpoint_ip": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "subnet_id": {
              "type": "string",
              "optional": true,
              "computed": true
            }
          }
        },
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

export interface StreamingStreamPoolConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly definedTags?: { [key: string]: string };
  readonly freeformTags?: { [key: string]: string };
  readonly name: string;
  /** custom_encryption_key block */
  readonly customEncryptionKey?: StreamingStreamPoolCustomEncryptionKey[];
  /** kafka_settings block */
  readonly kafkaSettings?: StreamingStreamPoolKafkaSettings[];
  /** private_endpoint_settings block */
  readonly privateEndpointSettings?: StreamingStreamPoolPrivateEndpointSettings[];
  /** timeouts block */
  readonly timeouts?: StreamingStreamPoolTimeouts;
}
export interface StreamingStreamPoolCustomEncryptionKey {
  readonly kmsKeyId: string;
}
export interface StreamingStreamPoolKafkaSettings {
  readonly autoCreateTopicsEnable?: boolean;
  readonly logRetentionHours?: number;
  readonly numPartitions?: number;
}
export interface StreamingStreamPoolPrivateEndpointSettings {
  readonly nsgIds?: string[];
  readonly privateEndpointIp?: string;
  readonly subnetId?: string;
}
export interface StreamingStreamPoolTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class StreamingStreamPool extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: StreamingStreamPoolConfig) {
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
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._freeformTags = config.freeformTags;
    this._name = config.name;
    this._customEncryptionKey = config.customEncryptionKey;
    this._kafkaSettings = config.kafkaSettings;
    this._privateEndpointSettings = config.privateEndpointSettings;
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

  // endpoint_fqdn - computed: true, optional: false, required: true
  public get endpointFqdn() {
    return this.getStringAttribute('endpoint_fqdn');
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

  // is_private - computed: true, optional: false, required: true
  public get isPrivate() {
    return this.getBooleanAttribute('is_private');
  }

  // lifecycle_state_details - computed: true, optional: false, required: true
  public get lifecycleStateDetails() {
    return this.getStringAttribute('lifecycle_state_details');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // custom_encryption_key - computed: false, optional: true, required: false
  private _customEncryptionKey?: StreamingStreamPoolCustomEncryptionKey[];
  public get customEncryptionKey() {
    return this._customEncryptionKey;
  }
  public set customEncryptionKey(value: StreamingStreamPoolCustomEncryptionKey[] | undefined) {
    this._customEncryptionKey = value;
  }

  // kafka_settings - computed: false, optional: true, required: false
  private _kafkaSettings?: StreamingStreamPoolKafkaSettings[];
  public get kafkaSettings() {
    return this._kafkaSettings;
  }
  public set kafkaSettings(value: StreamingStreamPoolKafkaSettings[] | undefined) {
    this._kafkaSettings = value;
  }

  // private_endpoint_settings - computed: false, optional: true, required: false
  private _privateEndpointSettings?: StreamingStreamPoolPrivateEndpointSettings[];
  public get privateEndpointSettings() {
    return this._privateEndpointSettings;
  }
  public set privateEndpointSettings(value: StreamingStreamPoolPrivateEndpointSettings[] | undefined) {
    this._privateEndpointSettings = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: StreamingStreamPoolTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: StreamingStreamPoolTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      defined_tags: this._definedTags,
      freeform_tags: this._freeformTags,
      name: this._name,
      custom_encryption_key: this._customEncryptionKey,
      kafka_settings: this._kafkaSettings,
      private_endpoint_settings: this._privateEndpointSettings,
      timeouts: this._timeouts,
    };
  }
}
