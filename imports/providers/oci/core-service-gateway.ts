// https://www.terraform.io/docs/providers/oci/r/core_service_gateway.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "block_traffic": {
        "type": "bool",
        "computed": true
      },
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
      "route_table_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "vcn_id": {
        "type": "string",
        "required": true
      }
    },
    "block_types": {
      "services": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "service_id": {
              "type": "string",
              "required": true
            },
            "service_name": {
              "type": "string",
              "computed": true
            }
          }
        },
        "min_items": 1
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

export interface CoreServiceGatewayConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly definedTags?: { [key: string]: string };
  readonly displayName?: string;
  readonly freeformTags?: { [key: string]: string };
  readonly routeTableId?: string;
  readonly vcnId: string;
  /** services block */
  readonly services: CoreServiceGatewayServices[];
  /** timeouts block */
  readonly timeouts?: CoreServiceGatewayTimeouts;
}
export interface CoreServiceGatewayServices {
  readonly serviceId: string;
}
export interface CoreServiceGatewayTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class CoreServiceGateway extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CoreServiceGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_service_gateway',
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
    this._freeformTags = config.freeformTags;
    this._routeTableId = config.routeTableId;
    this._vcnId = config.vcnId;
    this._services = config.services;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // block_traffic - computed: true, optional: false, required: true
  public get blockTraffic() {
    return this.getBooleanAttribute('block_traffic');
  }

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

  // route_table_id - computed: true, optional: true, required: false
  private _routeTableId?: string;
  public get routeTableId() {
    return this._routeTableId ?? this.getStringAttribute('route_table_id');
  }
  public set routeTableId(value: string | undefined) {
    this._routeTableId = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // vcn_id - computed: false, optional: false, required: true
  private _vcnId: string;
  public get vcnId() {
    return this._vcnId;
  }
  public set vcnId(value: string) {
    this._vcnId = value;
  }

  // services - computed: false, optional: false, required: true
  private _services: CoreServiceGatewayServices[];
  public get services() {
    return this._services;
  }
  public set services(value: CoreServiceGatewayServices[]) {
    this._services = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CoreServiceGatewayTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: CoreServiceGatewayTimeouts | undefined) {
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
      freeform_tags: this._freeformTags,
      route_table_id: this._routeTableId,
      vcn_id: this._vcnId,
      services: this._services,
      timeouts: this._timeouts,
    };
  }
}
