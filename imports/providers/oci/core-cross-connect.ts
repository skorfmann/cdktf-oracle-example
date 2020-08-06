// https://www.terraform.io/docs/providers/oci/r/core_cross_connect.html
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
        "optional": true,
        "computed": true
      },
      "customer_reference_name": {
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
      "display_name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "far_cross_connect_or_cross_connect_group_id": {
        "type": "string",
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
      "is_active": {
        "type": "bool",
        "optional": true
      },
      "location_name": {
        "type": "string",
        "required": true
      },
      "near_cross_connect_or_cross_connect_group_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "port_name": {
        "type": "string",
        "computed": true
      },
      "port_speed_shape_name": {
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

export interface CoreCrossConnectConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly crossConnectGroupId?: string;
  readonly customerReferenceName?: string;
  readonly definedTags?: { [key: string]: string };
  readonly displayName?: string;
  readonly farCrossConnectOrCrossConnectGroupId?: string;
  readonly freeformTags?: { [key: string]: string };
  readonly isActive?: boolean;
  readonly locationName: string;
  readonly nearCrossConnectOrCrossConnectGroupId?: string;
  readonly portSpeedShapeName: string;
  /** timeouts block */
  readonly timeouts?: CoreCrossConnectTimeouts;
}
export interface CoreCrossConnectTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class CoreCrossConnect extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CoreCrossConnectConfig) {
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
    this._compartmentId = config.compartmentId;
    this._crossConnectGroupId = config.crossConnectGroupId;
    this._customerReferenceName = config.customerReferenceName;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._farCrossConnectOrCrossConnectGroupId = config.farCrossConnectOrCrossConnectGroupId;
    this._freeformTags = config.freeformTags;
    this._isActive = config.isActive;
    this._locationName = config.locationName;
    this._nearCrossConnectOrCrossConnectGroupId = config.nearCrossConnectOrCrossConnectGroupId;
    this._portSpeedShapeName = config.portSpeedShapeName;
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

  // cross_connect_group_id - computed: true, optional: true, required: false
  private _crossConnectGroupId?: string;
  public get crossConnectGroupId() {
    return this._crossConnectGroupId ?? this.getStringAttribute('cross_connect_group_id');
  }
  public set crossConnectGroupId(value: string | undefined) {
    this._crossConnectGroupId = value;
  }

  // customer_reference_name - computed: true, optional: true, required: false
  private _customerReferenceName?: string;
  public get customerReferenceName() {
    return this._customerReferenceName ?? this.getStringAttribute('customer_reference_name');
  }
  public set customerReferenceName(value: string | undefined) {
    this._customerReferenceName = value;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }
  public get definedTags(): { [key: string]: string } | undefined {
    return this._definedTags; // Getting the computed value is not yet implemented
  }
  public set definedTags(value: { [key: string]: string } | undefined) {
    this._definedTags = value;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName ?? this.getStringAttribute('display_name');
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // far_cross_connect_or_cross_connect_group_id - computed: true, optional: true, required: false
  private _farCrossConnectOrCrossConnectGroupId?: string;
  public get farCrossConnectOrCrossConnectGroupId() {
    return this._farCrossConnectOrCrossConnectGroupId ?? this.getStringAttribute('far_cross_connect_or_cross_connect_group_id');
  }
  public set farCrossConnectOrCrossConnectGroupId(value: string | undefined) {
    this._farCrossConnectOrCrossConnectGroupId = value;
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

  // is_active - computed: false, optional: true, required: false
  private _isActive?: boolean;
  public get isActive() {
    return this._isActive;
  }
  public set isActive(value: boolean | undefined) {
    this._isActive = value;
  }

  // location_name - computed: false, optional: false, required: true
  private _locationName: string;
  public get locationName() {
    return this._locationName;
  }
  public set locationName(value: string) {
    this._locationName = value;
  }

  // near_cross_connect_or_cross_connect_group_id - computed: true, optional: true, required: false
  private _nearCrossConnectOrCrossConnectGroupId?: string;
  public get nearCrossConnectOrCrossConnectGroupId() {
    return this._nearCrossConnectOrCrossConnectGroupId ?? this.getStringAttribute('near_cross_connect_or_cross_connect_group_id');
  }
  public set nearCrossConnectOrCrossConnectGroupId(value: string | undefined) {
    this._nearCrossConnectOrCrossConnectGroupId = value;
  }

  // port_name - computed: true, optional: false, required: true
  public get portName() {
    return this.getStringAttribute('port_name');
  }

  // port_speed_shape_name - computed: false, optional: false, required: true
  private _portSpeedShapeName: string;
  public get portSpeedShapeName() {
    return this._portSpeedShapeName;
  }
  public set portSpeedShapeName(value: string) {
    this._portSpeedShapeName = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CoreCrossConnectTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: CoreCrossConnectTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      cross_connect_group_id: this._crossConnectGroupId,
      customer_reference_name: this._customerReferenceName,
      defined_tags: this._definedTags,
      display_name: this._displayName,
      far_cross_connect_or_cross_connect_group_id: this._farCrossConnectOrCrossConnectGroupId,
      freeform_tags: this._freeformTags,
      is_active: this._isActive,
      location_name: this._locationName,
      near_cross_connect_or_cross_connect_group_id: this._nearCrossConnectOrCrossConnectGroupId,
      port_speed_shape_name: this._portSpeedShapeName,
      timeouts: this._timeouts,
    };
  }
}
