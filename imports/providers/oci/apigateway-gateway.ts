// https://www.terraform.io/docs/providers/oci/r/apigateway_gateway.html
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
      "display_name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "endpoint_type": {
        "type": "string",
        "required": true
      },
      "freeform_tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "hostname": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "lifecycle_details": {
        "type": "string",
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "subnet_id": {
        "type": "string",
        "required": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "time_updated": {
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

export interface ApigatewayGatewayConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly definedTags?: { [key: string]: string };
  readonly displayName?: string;
  readonly endpointType: string;
  readonly freeformTags?: { [key: string]: string };
  readonly subnetId: string;
  /** timeouts block */
  readonly timeouts?: ApigatewayGatewayTimeouts;
}
export interface ApigatewayGatewayTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class ApigatewayGateway extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApigatewayGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_apigateway_gateway',
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
    this._displayName = config.displayName;
    this._endpointType = config.endpointType;
    this._freeformTags = config.freeformTags;
    this._subnetId = config.subnetId;
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName ?? this.getStringAttribute('display_name');
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // endpoint_type - computed: false, optional: false, required: true
  private _endpointType: string;
  public get endpointType() {
    return this._endpointType;
  }
  public set endpointType(value: string) {
    this._endpointType = value;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }
  public get freeformTags(): { [key: string]: string } | undefined {
    return this._freeformTags; // Getting the computed value is not yet implemented
  }
  public set freeformTags(value: { [key: string]: string } | undefined) {
    this._freeformTags = value;
  }

  // hostname - computed: true, optional: false, required: true
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId: string;
  public get subnetId() {
    return this._subnetId;
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: true
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApigatewayGatewayTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ApigatewayGatewayTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      defined_tags: this._definedTags,
      display_name: this._displayName,
      endpoint_type: this._endpointType,
      freeform_tags: this._freeformTags,
      subnet_id: this._subnetId,
      timeouts: this._timeouts,
    };
  }
}
