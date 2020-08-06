// https://www.terraform.io/docs/providers/oci/r/data_oci_core_cross_connect.html
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
      "cross_connect_group_id": {
        "type": "string",
        "computed": true
      },
      "cross_connect_id": {
        "type": "string",
        "required": true
      },
      "customer_reference_name": {
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
      "display_name": {
        "type": "string",
        "computed": true
      },
      "far_cross_connect_or_cross_connect_group_id": {
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
      "is_active": {
        "type": "bool",
        "computed": true
      },
      "location_name": {
        "type": "string",
        "computed": true
      },
      "near_cross_connect_or_cross_connect_group_id": {
        "type": "string",
        "computed": true
      },
      "port_name": {
        "type": "string",
        "computed": true
      },
      "port_speed_shape_name": {
        "type": "string",
        "computed": true
      },
      "state": {
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

export interface DataOciCoreCrossConnectConfig extends TerraformMetaArguments {
  readonly crossConnectId: string;
}

// Resource

export class DataOciCoreCrossConnect extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreCrossConnectConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_cross_connect',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._crossConnectId = config.crossConnectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // cross_connect_group_id - computed: true, optional: false, required: true
  public get crossConnectGroupId() {
    return this.getStringAttribute('cross_connect_group_id');
  }

  // cross_connect_id - computed: false, optional: false, required: true
  private _crossConnectId: string;
  public get crossConnectId() {
    return this._crossConnectId;
  }
  public set crossConnectId(value: string) {
    this._crossConnectId = value;
  }

  // customer_reference_name - computed: true, optional: false, required: true
  public get customerReferenceName() {
    return this.getStringAttribute('customer_reference_name');
  }

  // defined_tags - computed: true, optional: false, required: true
  public definedTags(key: string): string {
    return new StringMap(this, 'defined_tags').lookup(key);
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // far_cross_connect_or_cross_connect_group_id - computed: true, optional: false, required: true
  public get farCrossConnectOrCrossConnectGroupId() {
    return this.getStringAttribute('far_cross_connect_or_cross_connect_group_id');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public freeformTags(key: string): string {
    return new StringMap(this, 'freeform_tags').lookup(key);
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_active - computed: true, optional: false, required: true
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }

  // location_name - computed: true, optional: false, required: true
  public get locationName() {
    return this.getStringAttribute('location_name');
  }

  // near_cross_connect_or_cross_connect_group_id - computed: true, optional: false, required: true
  public get nearCrossConnectOrCrossConnectGroupId() {
    return this.getStringAttribute('near_cross_connect_or_cross_connect_group_id');
  }

  // port_name - computed: true, optional: false, required: true
  public get portName() {
    return this.getStringAttribute('port_name');
  }

  // port_speed_shape_name - computed: true, optional: false, required: true
  public get portSpeedShapeName() {
    return this.getStringAttribute('port_speed_shape_name');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
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
      cross_connect_id: this._crossConnectId,
    };
  }
}
