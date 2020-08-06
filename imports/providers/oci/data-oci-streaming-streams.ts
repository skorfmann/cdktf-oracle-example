// https://www.terraform.io/docs/providers/oci/r/data_oci_streaming_streams.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compartment_id": {
        "type": "string",
        "optional": true
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
      "stream_pool_id": {
        "type": "string",
        "optional": true
      },
      "streams": {
        "type": [
          "list",
          [
            "object",
            {
              "compartment_id": "string",
              "defined_tags": [
                "map",
                "string"
              ],
              "freeform_tags": [
                "map",
                "string"
              ],
              "id": "string",
              "lifecycle_state_details": "string",
              "messages_endpoint": "string",
              "name": "string",
              "partitions": "number",
              "retention_in_hours": "number",
              "state": "string",
              "stream_pool_id": "string",
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

export interface DataOciStreamingStreamsConfig extends TerraformMetaArguments {
  readonly compartmentId?: string;
  readonly name?: string;
  readonly state?: string;
  readonly streamPoolId?: string;
  /** filter block */
  readonly filter?: DataOciStreamingStreamsFilter[];
}
export class DataOciStreamingStreamsStreams extends ComplexComputedList {

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: true
  public get definedTags() {
    return 'not implemented' as any;
  }

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_state_details - computed: true, optional: false, required: true
  public get lifecycleStateDetails() {
    return this.getStringAttribute('lifecycle_state_details');
  }

  // messages_endpoint - computed: true, optional: false, required: true
  public get messagesEndpoint() {
    return this.getStringAttribute('messages_endpoint');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // partitions - computed: true, optional: false, required: true
  public get partitions() {
    return this.getNumberAttribute('partitions');
  }

  // retention_in_hours - computed: true, optional: false, required: true
  public get retentionInHours() {
    return this.getNumberAttribute('retention_in_hours');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // stream_pool_id - computed: true, optional: false, required: true
  public get streamPoolId() {
    return this.getStringAttribute('stream_pool_id');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }
}
export interface DataOciStreamingStreamsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciStreamingStreams extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciStreamingStreamsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_streaming_streams',
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
    this._streamPoolId = config.streamPoolId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: true, required: false
  private _compartmentId?: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string | undefined) {
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

  // stream_pool_id - computed: false, optional: true, required: false
  private _streamPoolId?: string;
  public get streamPoolId() {
    return this._streamPoolId;
  }
  public set streamPoolId(value: string | undefined) {
    this._streamPoolId = value;
  }

  // streams - computed: true, optional: false, required: true
  public streams(index: string) {
    return new DataOciStreamingStreamsStreams(this, 'streams', index);
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciStreamingStreamsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciStreamingStreamsFilter[] | undefined) {
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
      stream_pool_id: this._streamPoolId,
      filter: this._filter,
    };
  }
}
