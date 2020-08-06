// https://www.terraform.io/docs/providers/oci/r/data_oci_oda_oda_instance.html
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
      "connector_url": {
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
      "description": {
        "type": "string",
        "computed": true
      },
      "display_name": {
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
      "lifecycle_sub_state": {
        "type": "string",
        "computed": true
      },
      "oda_instance_id": {
        "type": "string",
        "required": true
      },
      "shape_name": {
        "type": "string",
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "state_message": {
        "type": "string",
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "time_updated": {
        "type": "string",
        "computed": true
      },
      "web_app_url": {
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

export interface DataOciOdaOdaInstanceConfig extends TerraformMetaArguments {
  readonly odaInstanceId: string;
}

// Resource

export class DataOciOdaOdaInstance extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciOdaOdaInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_oda_oda_instance',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._odaInstanceId = config.odaInstanceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // connector_url - computed: true, optional: false, required: true
  public get connectorUrl() {
    return this.getStringAttribute('connector_url');
  }

  // defined_tags - computed: true, optional: false, required: true
  public definedTags(key: string): string {
    return new StringMap(this, 'defined_tags').lookup(key);
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public freeformTags(key: string): string {
    return new StringMap(this, 'freeform_tags').lookup(key);
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_sub_state - computed: true, optional: false, required: true
  public get lifecycleSubState() {
    return this.getStringAttribute('lifecycle_sub_state');
  }

  // oda_instance_id - computed: false, optional: false, required: true
  private _odaInstanceId: string;
  public get odaInstanceId() {
    return this._odaInstanceId;
  }
  public set odaInstanceId(value: string) {
    this._odaInstanceId = value;
  }

  // shape_name - computed: true, optional: false, required: true
  public get shapeName() {
    return this.getStringAttribute('shape_name');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_message - computed: true, optional: false, required: true
  public get stateMessage() {
    return this.getStringAttribute('state_message');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: true
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // web_app_url - computed: true, optional: false, required: true
  public get webAppUrl() {
    return this.getStringAttribute('web_app_url');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      oda_instance_id: this._odaInstanceId,
    };
  }
}
