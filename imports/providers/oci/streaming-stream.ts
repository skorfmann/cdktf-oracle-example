// https://www.terraform.io/docs/providers/oci/r/streaming_stream.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compartment_id": {
        "type": "string",
        "optional": true,
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
      "lifecycle_state_details": {
        "type": "string",
        "computed": true
      },
      "messages_endpoint": {
        "type": "string",
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "partitions": {
        "type": "number",
        "required": true
      },
      "retention_in_hours": {
        "type": "number",
        "optional": true,
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "stream_pool_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "time_created": {
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

export interface StreamingStreamConfig extends TerraformMetaArguments {
  readonly compartmentId?: string;
  readonly definedTags?: { [key: string]: string };
  readonly freeformTags?: { [key: string]: string };
  readonly name: string;
  readonly partitions: number;
  readonly retentionInHours?: number;
  readonly streamPoolId?: string;
  /** timeouts block */
  readonly timeouts?: StreamingStreamTimeouts;
}
export interface StreamingStreamTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class StreamingStream extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: StreamingStreamConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_streaming_stream',
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
    this._partitions = config.partitions;
    this._retentionInHours = config.retentionInHours;
    this._streamPoolId = config.streamPoolId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: true, required: false
  private _compartmentId?: string;
  public get compartmentId() {
    return this._compartmentId ?? this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string | undefined) {
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

  // lifecycle_state_details - computed: true, optional: false, required: true
  public get lifecycleStateDetails() {
    return this.getStringAttribute('lifecycle_state_details');
  }

  // messages_endpoint - computed: true, optional: false, required: true
  public get messagesEndpoint() {
    return this.getStringAttribute('messages_endpoint');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // partitions - computed: false, optional: false, required: true
  private _partitions: number;
  public get partitions() {
    return this._partitions;
  }
  public set partitions(value: number) {
    this._partitions = value;
  }

  // retention_in_hours - computed: true, optional: true, required: false
  private _retentionInHours?: number;
  public get retentionInHours() {
    return this._retentionInHours ?? this.getNumberAttribute('retention_in_hours');
  }
  public set retentionInHours(value: number | undefined) {
    this._retentionInHours = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // stream_pool_id - computed: true, optional: true, required: false
  private _streamPoolId?: string;
  public get streamPoolId() {
    return this._streamPoolId ?? this.getStringAttribute('stream_pool_id');
  }
  public set streamPoolId(value: string | undefined) {
    this._streamPoolId = value;
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: StreamingStreamTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: StreamingStreamTimeouts | undefined) {
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
      partitions: this._partitions,
      retention_in_hours: this._retentionInHours,
      stream_pool_id: this._streamPoolId,
      timeouts: this._timeouts,
    };
  }
}
