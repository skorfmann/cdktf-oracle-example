// https://www.terraform.io/docs/providers/oci/r/data_oci_streaming_stream.html
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
      "defined_tags": {
        "type": [
          "map",
          "string"
        ],
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
        "computed": true
      },
      "partitions": {
        "type": "number",
        "computed": true
      },
      "retention_in_hours": {
        "type": "number",
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "stream_id": {
        "type": "string",
        "required": true
      },
      "stream_pool_id": {
        "type": "string",
        "computed": true
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
import { StringMap } from "cdktf";

// Configuration

export interface DataOciStreamingStreamConfig extends TerraformMetaArguments {
  readonly streamId: string;
}

// Resource

export class DataOciStreamingStream extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciStreamingStreamConfig) {
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
    this._streamId = config.streamId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: true
  public definedTags(key: string): string {
    return new StringMap(this, 'defined_tags').lookup(key);
  }

  // freeform_tags - computed: true, optional: false, required: true
  public freeformTags(key: string): string {
    return new StringMap(this, 'freeform_tags').lookup(key);
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

  // stream_id - computed: false, optional: false, required: true
  private _streamId: string;
  public get streamId() {
    return this._streamId;
  }
  public set streamId(value: string) {
    this._streamId = value;
  }

  // stream_pool_id - computed: true, optional: false, required: true
  public get streamPoolId() {
    return this.getStringAttribute('stream_pool_id');
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
      stream_id: this._streamId,
    };
  }
}
