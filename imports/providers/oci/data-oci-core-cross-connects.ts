// https://www.terraform.io/docs/providers/oci/r/data_oci_core_cross_connects.html
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
      "cross_connect_group_id": {
        "type": "string",
        "optional": true
      },
      "cross_connects": {
        "type": [
          "list",
          [
            "object",
            {
              "compartment_id": "string",
              "cross_connect_group_id": "string",
              "customer_reference_name": "string",
              "defined_tags": [
                "map",
                "string"
              ],
              "display_name": "string",
              "far_cross_connect_or_cross_connect_group_id": "string",
              "freeform_tags": [
                "map",
                "string"
              ],
              "id": "string",
              "is_active": "bool",
              "location_name": "string",
              "near_cross_connect_or_cross_connect_group_id": "string",
              "port_name": "string",
              "port_speed_shape_name": "string",
              "state": "string",
              "time_created": "string"
            }
          ]
        ],
        "computed": true
      },
      "display_name": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "state": {
        "type": "string",
        "optional": true
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

export interface DataOciCoreCrossConnectsConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly crossConnectGroupId?: string;
  readonly displayName?: string;
  readonly state?: string;
  /** filter block */
  readonly filter?: DataOciCoreCrossConnectsFilter[];
}
export class DataOciCoreCrossConnectsCrossConnects extends ComplexComputedList {

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // cross_connect_group_id - computed: true, optional: false, required: true
  public get crossConnectGroupId() {
    return this.getStringAttribute('cross_connect_group_id');
  }

  // customer_reference_name - computed: true, optional: false, required: true
  public get customerReferenceName() {
    return this.getStringAttribute('customer_reference_name');
  }

  // defined_tags - computed: true, optional: false, required: true
  public get definedTags() {
    return 'not implemented' as any;
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
  public get freeformTags() {
    return 'not implemented' as any;
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
}
export interface DataOciCoreCrossConnectsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciCoreCrossConnects extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreCrossConnectsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_cross_connects',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._crossConnectGroupId = config.crossConnectGroupId;
    this._displayName = config.displayName;
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

  // cross_connect_group_id - computed: false, optional: true, required: false
  private _crossConnectGroupId?: string;
  public get crossConnectGroupId() {
    return this._crossConnectGroupId;
  }
  public set crossConnectGroupId(value: string | undefined) {
    this._crossConnectGroupId = value;
  }

  // cross_connects - computed: true, optional: false, required: true
  public crossConnects(index: string) {
    return new DataOciCoreCrossConnectsCrossConnects(this, 'cross_connects', index);
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string;
  public get state() {
    return this._state;
  }
  public set state(value: string | undefined) {
    this._state = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciCoreCrossConnectsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciCoreCrossConnectsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      cross_connect_group_id: this._crossConnectGroupId,
      display_name: this._displayName,
      state: this._state,
      filter: this._filter,
    };
  }
}
